<?php

namespace Database\Seeders;

use App\Models\Station;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class StationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contents = Storage::disk('data')->get('stations.csv');
        $lines = explode(PHP_EOL, $contents);

        foreach ($lines as $line) {
            $data = str_getcsv($line);

            Station::create([
                'id' => (int) $data[0],
                'name' => (string) $data[1],
            ]);
        }
    }
}
