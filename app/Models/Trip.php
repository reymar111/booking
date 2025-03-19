<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    protected $table = 'trips';

    protected $with = ['vehicle', 'driver'];

    public function vehicle()
    {

        return $this->belongsTo(Vehicle::class, 'vehicle_id', 'id');

    }

    public function driver()
    {

        return $this->belongsTo(Driver::class, 'driver_id', 'id');

    }

    // public function getDepartureTimeAttribute()
    // {

    //     return $this->attributes['departure_time']
    //     ? \Carbon\Carbon::parse($this->attributes['departure_time'])->format('h:i A')
    //     : null;

    // }
}
