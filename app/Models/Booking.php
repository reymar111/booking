<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table = 'bookings';

    protected $with = ['user', 'trip'];

    protected $fillable = ['status'];

    public function user()
    {

        return $this->belongsTo(User::class, 'user_id', 'id');

    }

    public function trip()
    {

        return $this->belongsTo(Trip::class, 'trip_id', 'id');

    }
}
