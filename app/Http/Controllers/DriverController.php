<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Driver;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $drivers = Driver::all();

        return Inertia::render('Settings/Driver',
        [
            'drivers' => $drivers,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'full_name' => ['required'],
            'license_number' => ['required']
        ]);

        $driver = new Driver();
        $driver->full_name = $request->full_name;
        $driver->contact_number = $request->contact_number;
        $driver->license_number = $request->license_number;
        $driver->save();

        return to_route('driver.index');

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Driver $driver)
    {
        $request->validate([
            'full_name' => ['required'],
            'license_number' => ['required']
        ]);

        $driver->full_name = $request->full_name;
        $driver->contact_number = $request->contact_number;
        $driver->license_number = $request->license_number;
        $driver->update();

        return to_route('driver.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Driver $driver)
    {
        $driver->delete();

        return to_route('driver.index');
    }
}
