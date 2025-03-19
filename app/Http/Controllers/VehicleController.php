<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vehicles = Vehicle::all();

        return Inertia::render('Settings/Vehicle',
        [
            'vehicles' => $vehicles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'plate_number' => ['required'],
            'capacity' => ['required'],
            'status' => ['required'],
        ]);

        $vehicle = new Vehicle();
        $vehicle->plate_number = $request->plate_number;
        $vehicle->brand = $request->brand;
        $vehicle->model = $request->model;
        $vehicle->capacity = $request->capacity;
        $vehicle->status = $request->status;
        $vehicle->save();

        return to_route('vehicle.index');

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vehicle $vehicle)
    {
        $request->validate([
            'plate_number' => ['required'],
            'capacity' => ['required'],
            'status' => ['required'],
        ]);

        $vehicle->plate_number = $request->plate_number;
        $vehicle->brand = $request->brand;
        $vehicle->model = $request->model;
        $vehicle->capacity = $request->capacity;
        $vehicle->status = $request->status;
        $vehicle->update();

        return to_route('vehicle.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vehicle $vehicle)
    {
        $vehicle->delete();

        return to_route('vehicle.index');
    }
}
