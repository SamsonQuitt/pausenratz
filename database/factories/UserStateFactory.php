<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserState>
 */
class UserStateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'keyword' => fake()->slug(),
            'title' => fake()->word(),
            'description' => fake()->sentence(),
            'img_avatar' => 'test-status.png'
        ];
    }
}
