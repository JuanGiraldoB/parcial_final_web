<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaisSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('paises')->insert([
            'nombre' => 'J',
            'capital' => '123',
            'idioma_oficial' => 'LK',
            'poblacion' => '85000'
        ]);
        
    }
}
