<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->string('trip_code')->unique();
            $table->integer('vehicle_id');
            $table->integer('driver_id');
            $table->enum('origin', ['Tabuk', 'Tuguegarao'])->default('Tabuk');
            $table->enum('destination', ['Tabuk', 'Tuguegarao'])->default('Tuguegarao');
            $table->date('departure_date');
            $table->time('departure_time');
            $table->enum('status', ['scheduled', 'ongoing', 'completed', 'canceled'])->default('scheduled');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trips');
    }
};
