<?php

namespace Database\Seeders;

use App\Models\UserState;
use Illuminate\Database\Seeder;

class UserStateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userStates = [
            [
                'keyword' => 'available',
                'title' => 'Anwesend',
                'description' => "Betreuungskraft ist am Projektort.",
                'img_avatar' => 'test-status.png'
            ],
            [
                'keyword' => 'pause',
                'title' => 'Pause',
                'description' => "Macht gerade Pause.",
                'img_avatar' => 'test-status.png'
            ],
            [
                'keyword' => 'excursion',
                'title' => 'Ausflug',
                'description' => "Betreuungskraft ist für längere Zeit außerhalb des Projektgeländes.",
                'img_avatar' => 'test-status.png'
            ],
            [
                'keyword' => 'absent',
                'title' => 'Abwesend',
                'description' => "Krank o.Ä.",
                'img_avatar' => 'test-status.png'
            ],
            [
                'keyword' => 'finished',
                'title' => 'Nicht mehr da',
                'description' => "Kommt auch nicht mehr.",
                'img_avatar' => 'test-status.png'
            ],
        ];

            UserState::factory()->create($userStates[0]);
    }
}
