<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use Inertia\Inertia;
use App\Models\Driver;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class TripController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $trips = Trip::with(['bookings' => function ($query) {
            $query->where('status', 'confirmed');
        }])->whereIn('status', ['scheduled', 'ongoing'])
        ->orderBy('departure_date', 'asc')
        ->get()
        ->map(function ($trip) {
            $trip->total_seats = $trip->vehicle->capacity ?? 0; // Assuming 'total_seats' column exists
            $trip->seats_available = $trip->total_seats - $trip->bookings->count();
            return $trip;
        });

        $vehicles = Vehicle::all();
        $drivers = Driver::all();

        return Inertia::render('Trip',
        [
            'trips' => $trips,
            'vehicles' => $vehicles,
            'drivers' => $drivers,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'vehicle_id' => ['required'],
            'driver_id' => ['required'],
            'origin' => ['required'],
            'destination' => ['required'],
            'departure_date' => ['required'],
            'departure_time' => ['required'],
        ]);

        $trip = new Trip();
        $trip->trip_code = 'TRP' . time();
        $trip->vehicle_id = $request->vehicle_id;
        $trip->driver_id = $request->driver_id;
        $trip->origin = $request->origin;
        $trip->destination = $request->destination;
        $trip->departure_date = $request->departure_date;
        $trip->departure_time = $request->departure_time;
        $trip->save();

        return to_route('trip.index');

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Trip $trip)
    {
        $request->validate([
            'vehicle_id' => ['required'],
            'driver_id' => ['required'],
            'origin' => ['required'],
            'destination' => ['required'],
            'departure_date' => ['required'],
            'departure_time' => ['required'],
        ]);

        $trip = new Trip();
        $trip->vehicle_id = $request->vehicle_id;
        $trip->driver_id = $request->driver_id;
        $trip->origin = $request->origin;
        $trip->destination = $request->destination;
        $trip->departure_date = $request->departure_date;
        $trip->departure_time = $request->departure_time;

        return to_route('trip.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Trip $trip)
    {
        $trip->delete();

        return to_route('trip.index');
    }

    public function updateStatus(Trip $trip, Request $request)
    {


        $trip->update(['status' => $request->status]);

        if ($trip->status === 'completed') {
            $trip->bookings()->where('status', 'confirmed')->update(['status' => 'completed']);
        }

        return to_route('trip.index');

    }
}
