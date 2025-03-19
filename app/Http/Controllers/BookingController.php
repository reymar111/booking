<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use Inertia\Inertia;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $bookings = Booking::where('user_id', $request->user()->id)->get();
        $trips = Trip::where(function ($query) {
            $query->where('departure_date', '>', now()->toDateString()) // Future dates
                  ->orWhere(function ($query) {
                      $query->where('departure_date', now()->toDateString()) // Today
                            ->where('departure_time', '>', now()->toTimeString()); // Future time
                  });
        })
        ->whereIn('status', ['scheduled', 'ongoing'])
        ->with('vehicle') // Eager load vehicle for efficiency
        ->get()
        ->map(function ($trip) {
            $totalSeats = $trip->vehicle->capacity;

            // Get booked seats for this trip
            $bookedSeats = Booking::where('trip_id', $trip->id)->pluck('seat_number')->toArray();

            // Determine available seats
            $availableSeats = array_diff(range(1, $totalSeats), $bookedSeats);

            // Attach computed values to the trip object
            $trip->total_seats = $totalSeats;
            $trip->booked_seats = $bookedSeats;
            $trip->available_seats = $availableSeats;

            return $trip;
        });


        return Inertia::render('Booking',
        [
            'bookings' => $bookings,
            'trips' => $trips,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => ['required'],
            'trip_id' => ['required'],
            'seat_number' => ['required'],
        ]);

        $booking = new Booking();
        $booking->name = $request->user()->id;
        $booking->trip_id = $request->trip_id;
        $booking->seat_number = $request->seat_number;
        $booking->save();

        return to_route('booking.index');

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Booking $booking)
    {
        $request->validate([
            'user_id' => ['required'],
            'trip_id' => ['required'],
            'seat_number' => ['required'],
        ]);

        $booking->name = $request->user()->id;
        $booking->trip_id = $request->trip_id;
        $booking->seat_number = $request->seat_number;
        $booking->update();

        return to_route('booking.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        $booking->delete();

        return to_route('booking.index');
    }
}
