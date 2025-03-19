<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\Trip;
use App\Models\Driver;
use App\Models\Vehicle;
use Faker\Factory as Faker;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {


        $users = [
            [
                'name' => 'John Doe',
                'email' => 'admin@admin.com',
                'password' => bcrypt('1234567890'),
                'contact_number' => '09123456789',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'John Doe',
                'email' => 'user@user.com',
                'password' => bcrypt('1234567890'),
                'contact_number' => '09123456789',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ];

        foreach($users as $user) {
            DB::table('users')->insert($user);
        }

        $faker = Faker::create();

        foreach (range(1, 10) as $index) {
            Vehicle::create([
                'plate_number' => strtoupper($faker->bothify('??###??')),
                'brand' => $faker->randomElement(['Toyota', 'Honda', 'Ford', 'Nissan', 'Chevrolet']),
                'model' => $faker->word(),
                'capacity' => $faker->numberBetween(1, 15),
                'status' => $faker->randomElement(['active', 'maintenance', 'inactive']),
            ]);
        }

        foreach (range(1, 10) as $index) {
            Driver::create([
                'full_name' => $faker->name(),
                'contact_number' => $faker->optional()->phoneNumber(),
                'license_number' => strtoupper($faker->bothify('???-######')),
            ]);
        }

        $vehicles = Vehicle::pluck('id')->toArray();
        $drivers = Driver::pluck('id')->toArray();

        foreach (range(1, 50) as $index) {
            $origin = $faker->randomElement(['Tabuk', 'Tuguegarao']);
            $destination = ($origin === 'Tabuk') ? 'Tuguegarao' : 'Tabuk'; // Ensure alternate values

            Trip::create([
                'trip_code' => strtoupper($faker->bothify('TRIP-#####')),
                'vehicle_id' => $faker->randomElement($vehicles),
                'driver_id' => $faker->randomElement($drivers),
                'origin' => $origin,
                'destination' => $destination,
                'departure_date' => Carbon::now()->addDays($faker->numberBetween(1, 30))->format('Y-m-d'), // Future date
                'departure_time' => $faker->time(),
                'status' => $faker->randomElement(['scheduled', 'ongoing', 'completed', 'canceled']),
            ]);
        }


    }
}
