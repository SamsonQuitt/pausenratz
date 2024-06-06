<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pause>
 */
class PauseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startTime = fake()->dateTime();
        return [
            'user_id' => User::factory(),
            'time_start' => $startTime,
            'time_end' => $startTime->add(new \DateInterval(rand(1, 60) . 'm'))
        ];
    }
}
