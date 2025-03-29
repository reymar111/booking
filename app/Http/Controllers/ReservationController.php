<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Booking;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $bookings = Booking::whereHas('trip', function ($query) {
            $query->whereNotIn('status', ['completed', 'canceled']);
        })
        ->get();

        $trips = Trip::where(function ($query) {
                $query->where('departure_date', '>=', now()->toDateString()) // Future dates
                    ->orWhere(function ($query) {
                        $query->where('departure_date', now()->toDateString()) // Today
                                ->where('departure_time', '>=', now()->toTimeString()); // Future time
                    });
            })
            ->whereIn('status', ['scheduled', 'ongoing'])
            ->get()
            ->map(function ($trip) {
                $totalSeats = $trip->vehicle->capacity;

                // Get booked seats for this trip
                $bookedSeats = Booking::where('trip_id', $trip->id)->where('status', '!=', 'canceled')->pluck('seat_number')->toArray();

                // Determine available seats
                $availableSeats = array_diff(range(1, $totalSeats), $bookedSeats);

                // Attach computed values to the trip object
                $trip->total_seats = $totalSeats;
                $trip->booked_seats = $bookedSeats;
                $trip->available_seats = $availableSeats;

                return $trip;
            })
            ->filter(fn($trip) => count($trip->available_seats) > 0) // Keep trips with available seats
            ->sortByDesc('departure_date') // Reapply sorting after filtering
            ->sortByDesc('departure_time') // Ensure time is sorted properly
            ->values(); // Reset indexes to prevent gaps


        $passengers = User::where('role', 'passenger')->get();

        return Inertia::render('Reservation',
        [
            'bookings' => $bookings,
            'trips' => $trips,
            'passengers' => $passengers,
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());

        $request->validate([
            'user_id' => ['required'],
            'trip_id' => ['required'],
            'seat_number' => ['required'],
        ]);

        $booking = new Booking();
        $booking->user_id = $request->user_id;
        $booking->trip_id = $request->trip_id;
        $booking->seat_number = $request->seat_number;
        $booking->status = 'confirmed';
        $booking->save();

        return to_route('reservation.index');

    }



}
