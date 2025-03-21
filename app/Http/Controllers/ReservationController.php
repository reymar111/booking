<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Booking;

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

        return Inertia::render('Reservation',
        [
            'bookings' => $bookings,
        ]);
    }
}
