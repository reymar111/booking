<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use Inertia\Inertia;
use App\Models\Booking;
use App\Notifications\BookingStatus;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $bookings = Booking::where('user_id', $request->user()->id)
        ->whereHas('trip', function ($query) {
            $query->orderBy('departure_date', 'asc') // Sort by date first
                  ->orderBy('departure_time', 'asc'); // Then sort by time
        })
        ->with('trip') // Eager load trip details
        ->get()
        ->sortBy([
            ['trip.departure_date', 'asc'],
            ['trip.departure_time', 'asc']
        ])
        ->values(); // Reset indexes
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
            'trip_id' => ['required'],
            'seat_number' => ['required'],
        ]);

        $booking = new Booking();
        $booking->user_id = $request->user()->id;
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
            'trip_id' => ['required'],
            'seat_number' => ['required'],
        ]);

        $booking->user_id = $request->user()->id;
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

    public function accept(Booking $booking)
    {

        $booking->status = 'confirmed';
        $booking->update();

        $booking->user->notify(new BookingStatus($booking, 'confirmed'));


        return to_route('reservation.index');

    }

    public function cancel(Booking $booking)
    {

        $booking->status = 'canceled';
        $booking->update();

        $booking->user->notify(new BookingStatus($booking, 'canceled'));

        return to_route('reservation.index');

    }
}
