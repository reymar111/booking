<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $table = 'vehicles';

    public function trips()
    {

        return $this->hasMany(Trip::class, 'vehicle_id', 'id');

    }
}
