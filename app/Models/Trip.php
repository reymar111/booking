<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    protected $table = 'trips';

    protected $with = ['vehicle', 'driver'];

    protected $appends = ['departure_time_v', 'departure_date_v'];

    protected $fillable = ['status'];

    public function vehicle()
    {

        return $this->belongsTo(Vehicle::class, 'vehicle_id', 'id');

    }

    public function driver()
    {

        return $this->belongsTo(Driver::class, 'driver_id', 'id');

    }

    public function getDepartureTimeVAttribute()
    {

        return $this->attributes['departure_time']
        ? \Carbon\Carbon::parse($this->attributes['departure_time'])->format('h:i A')
        : null;

    }

    public function getDepartureDateVAttribute()
    {
        return $this->attributes['departure_date']
            ? Carbon::parse($this->attributes['departure_date'])->format('F j, Y')
            : null;
    }

    public function bookings()
    {

        return $this->hasMany(Booking::class, 'trip_id', 'id');

    }
}
