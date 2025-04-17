<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{
    public function passengerSummary(Request $request)
    {
        // Retrieve date range from request
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        $data = Booking::with(['trip', 'user']) // eager load related trip and user
            ->when($startDate && $endDate, function ($query) use ($startDate, $endDate) {
                $query->whereHas('trip', function ($tripQuery) use ($startDate, $endDate) {
                    $tripQuery->whereBetween('departure_date', [$startDate, $endDate]);
                });
            })
            ->get();

        return Inertia::render('Report/PassengerSummary', [
            'data' => $data,
        ]);

    }

    public function reservationSummary(Request $request)
    {

        // Retrieve date range from request
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        $query = DB::table('bookings')
            ->join('trips', 'bookings.trip_id', '=', 'trips.id') // Join with trips to get departure_date
            ->select(
                DB::raw("COUNT(*) as total_reservations"),
                DB::raw("SUM(CASE WHEN bookings.status = 'pending' THEN 1 ELSE 0 END) as pending_reservations"),
                DB::raw("SUM(CASE WHEN bookings.status = 'confirmed' THEN 1 ELSE 0 END) as confirmed_reservations"),
                DB::raw("SUM(CASE WHEN bookings.status = 'completed' THEN 1 ELSE 0 END) as completed_reservations"),
                DB::raw("SUM(CASE WHEN bookings.status = 'canceled' THEN 1 ELSE 0 END) as canceled_reservations")
            );

        // Apply date filter if provided
        if ($startDate && $endDate) {
            $query->whereBetween('trips.departure_date', [$startDate, $endDate]);
        }

        $data = $query->first();

        return Inertia::render('Report/ReservationSummary', [
            'data' => $data,
        ]);
    }

    public function vehicleUtilizationReport(Request $request)
    {
        // Retrieve date range from request
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        $query = DB::table('trips')
            ->join('vehicles', 'trips.vehicle_id', '=', 'vehicles.id') // Join with vehicles to get details
            ->select(
                'vehicles.plate_number',
                'vehicles.model',
                'vehicles.capacity',
                'vehicles.status',
                DB::raw("COUNT(trips.id) as total_trips")
            )
            ->groupBy('vehicles.id', 'vehicles.plate_number', 'vehicles.model', 'vehicles.capacity', 'vehicles.status');

        // Apply date filter if provided
        if ($startDate && $endDate) {
            $query->whereBetween('trips.departure_date', [$startDate, $endDate]);
        }

        $data = $query->get();

        return Inertia::render('Report/VehicleUtilization', [
            'data' => $data,
            'filters' => [
                'start_date' => $startDate,
                'end_date' => $endDate
            ]
        ]);
    }

    public function tripPerformanceReport(Request $request)
    {
        // Retrieve date range from request
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        $query = DB::table('trips')
            ->select(
                'origin',
                'destination',
                DB::raw("COUNT(id) as total_trips"),
                DB::raw("SUM(CASE WHEN status = 'scheduled' THEN 1 ELSE 0 END) as scheduled_trips"),
                DB::raw("SUM(CASE WHEN status = 'ongoing' THEN 1 ELSE 0 END) as ongoing_trips"),
                DB::raw("SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed_trips"),
                DB::raw("SUM(CASE WHEN status = 'canceled' THEN 1 ELSE 0 END) as canceled_trips"),
                DB::raw("SUM(CASE WHEN departure_time <= NOW() THEN 1 ELSE 0 END) as on_time_trips"),
                DB::raw("SUM(CASE WHEN departure_time > NOW() THEN 1 ELSE 0 END) as delayed_trips")
            )
            ->groupBy('origin', 'destination');

        // Apply date filter if provided
        if ($startDate && $endDate) {
            $query->whereBetween('departure_date', [$startDate, $endDate]);
        }

        $data = $query->get();

        return Inertia::render('Report/TripPerformance', [
            'data' => $data,
            'filters' => [
                'start_date' => $startDate,
                'end_date' => $endDate
            ]
        ]);
    }


    public function driverActivityReport(Request $request)
    {
        // Retrieve date range from request
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        $query = DB::table('trips')
            ->join('drivers', 'trips.driver_id', '=', 'drivers.id') // Join with drivers table
            ->select(
                'drivers.full_name',
                'drivers.license_number',
                'drivers.contact_number',
                DB::raw("COUNT(trips.id) as total_trips"),
                DB::raw("SUM(CASE WHEN trips.status = 'scheduled' THEN 1 ELSE 0 END) as scheduled_trips"),
                DB::raw("SUM(CASE WHEN trips.status = 'ongoing' THEN 1 ELSE 0 END) as ongoing_trips"),
                DB::raw("SUM(CASE WHEN trips.status = 'completed' THEN 1 ELSE 0 END) as completed_trips"),
                DB::raw("SUM(CASE WHEN trips.status = 'canceled' THEN 1 ELSE 0 END) as canceled_trips")
            )
            ->groupBy('drivers.id', 'drivers.full_name', 'drivers.license_number', 'drivers.contact_number');

        // Apply date filter if provided
        if ($startDate && $endDate) {
            $query->whereBetween('trips.departure_date', [$startDate, $endDate]);
        }

        $data = $query->get();

        return Inertia::render('Report/DriverActivity', [
            'data' => $data,
            'filters' => [
                'start_date' => $startDate,
                'end_date' => $endDate
            ]
        ]);
    }

    public function bookingLoadReport(Request $request)
    {
        // Retrieve date range from request
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        $query = DB::table('bookings')
            ->join('trips', 'bookings.trip_id', '=', 'trips.id') // Join with trips to get trip details
            ->join('vehicles', 'trips.vehicle_id', '=', 'vehicles.id') // Join with vehicles to get capacity
            ->select(
                'trips.origin',
                'trips.destination',
                'trips.departure_date',
                'trips.departure_time',
                'vehicles.plate_number',
                'vehicles.capacity',
                DB::raw("COUNT(bookings.id) as total_bookings"),
                DB::raw("(vehicles.capacity - COUNT(bookings.id)) as available_seats"),
                DB::raw("ROUND((COUNT(bookings.id) / vehicles.capacity) * 100, 2) as load_percentage")
            )
            ->where('bookings.status', '!=', 'canceled') // Filter only completed bookings
            ->groupBy(
                'trips.id',
                'trips.origin',
                'trips.destination',
                'trips.departure_date',
                'trips.departure_time',
                'vehicles.plate_number',
                'vehicles.capacity'
            );

        // Apply date filter if provided
        if ($startDate && $endDate) {
            $query->whereBetween('trips.departure_date', [$startDate, $endDate]);
        }

        $data = $query->get();

        return Inertia::render('Report/BookingLoad', [
            'data' => $data,
            'filters' => [
                'start_date' => $startDate,
                'end_date' => $endDate
            ]
        ]);
    }

}
