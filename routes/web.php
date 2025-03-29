<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TripController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\ReservationController;

Route::get('/', function () {
    if (auth()->check()) {
        if(auth()->user()->role == 'admin' || auth()->user()->role == 'staff') {
            return redirect('/reservation');
        } else {
            return redirect('/booking');
        }

    }

    return Inertia::render('Auth/Login', [
        'canResetPassword' => Route::has('password.request'),
        'status' => session('status'),
    ]);
});

Route::get('/dashboard', function () {
    return redirect('/reservation');
    // return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::post('/notifications/read', function (Request $request) {
        $request->user()->notifications()->where('id', $request->id)->update(['read_at' => now()]);

        return back();
    })->middleware('auth');

    Route::get('notification', function() {
        return Inertia::render('Notification');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // booking
    Route::prefix('booking')->middleware('isPassenger')->group(function() {
        Route::get('/',[BookingController::class, 'index'])->name('booking.index');
        Route::post('/store', [BookingController::class, 'store'])->name('booking.store');
        Route::patch('/update/{booking}', [BookingController::class, 'update'])->name('booking.update');
        Route::delete('/destroy/{booking}', [BookingController::class, 'destroy'])->name('booking.destroy');

    });

    Route::prefix('update_booking')->middleware('isAdminOrStaff')->group(function() {
        Route::patch('/accept/{booking}', [BookingController::class, 'accept'])->name('booking.accept');
        Route::patch('/cancel/{booking}', [BookingController::class, 'cancel'])->name('booking.cancel');
    });

    // trip
    Route::prefix('trip')->middleware('isAdminOrStaff')->group(function() {
        Route::get('/',[TripController::class, 'index'])->name('trip.index');
        Route::post('/store', [TripController::class, 'store'])->name('trip.store');
        Route::patch('/update/{trip}', [TripController::class, 'update'])->name('trip.update');
        Route::delete('/destroy/{trip}', [TripController::class, 'destroy'])->name('trip.destroy');
        Route::patch('/update_status/{trip}', [TripController::class, 'updateStatus'])->name('trip.update_status');
    });


    // reservation
    Route::prefix('reservation')->middleware('isAdminOrStaff')->group(function() {
        Route::get('/',[ReservationController::class, 'index'])->name('reservation.index');
        Route::post('/store', [ReservationController::class, 'store'])->name('reservation.store');

    });
    // NEW SETTINGS

    // vehicle
    Route::prefix('vehicle')->middleware('isAdminOrStaff')->group(function() {
        Route::get('/',[VehicleController::class, 'index'])->name('vehicle.index');
        Route::post('/store', [VehicleController::class, 'store'])->name('vehicle.store');
        Route::patch('/update/{vehicle}', [VehicleController::class, 'update'])->name('vehicle.update');
        Route::delete('/destroy/{vehicle}', [VehicleController::class, 'destroy'])->name('vehicle.destroy');
    });

    // driver
    Route::prefix('driver')->middleware('isAdminOrStaff')->group(function() {
        Route::get('/',[DriverController::class, 'index'])->name('driver.index');
        Route::post('/store', [DriverController::class, 'store'])->name('driver.store');
        Route::patch('/update/{driver}', [DriverController::class, 'update'])->name('driver.update');
        Route::delete('/destroy/{driver}', [DriverController::class, 'destroy'])->name('driver.destroy');
    });

    Route::prefix('user')->middleware('isAdmin')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('user.index');
        Route::post('/store', [UserController::class, 'store'])->name('user.store');
        Route::patch('/update/{user}', [UserController::class, 'update'])->name('user.update');
        Route::delete('/destroy/{user}', [UserController::class, 'destroy'])->name('user.destroy');
    });

// REPORTS

    // reservation summary
    Route::prefix('reports')->middleware('isAdminOrStaff')->group(function() {
        Route::get('/reservation_summary', [ReportController::class, 'reservationSummary'])->name('report.reservation_summary');
        Route::post('/reservation_summary', [ReportController::class, 'reservationSummary']);

        Route::get('/vehicle_utilization', [ReportController::class, 'vehicleUtilizationReport'])->name('report.vehicle_utilization');
        Route::post('/vehicle_utilization', [ReportController::class, 'vehicleUtilizationReport']);

        Route::get('/trip_performance', [ReportController::class, 'tripPerformanceReport'])->name('report.trip_performance');
        Route::post('/trip_performance', [ReportController::class, 'tripPerformanceReport']);

        Route::get('/driver_activity', [ReportController::class, 'driverActivityReport'])->name('report.driver_activity');
        Route::post('/driver_activity', [ReportController::class, 'driverActivityReport']);

        Route::get('/booking_load', [ReportController::class, 'bookingLoadReport'])->name('report.booking_load');
        Route::post('/booking_load', [ReportController::class, 'bookingLoadReport']);


    });

});

require __DIR__.'/auth.php';
