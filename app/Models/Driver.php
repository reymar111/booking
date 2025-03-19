<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    protected $table = 'drivers';

    public function trips()
    {

        return $this->hasMany(Trip::class, 'driver_id', 'id');

    }
}
