<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Role>
 */
class RoleFactory extends Factory
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
            'title' => fake()->word()
        ];
    }

    public function betreuer(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'keyword' => 'bt',
                'title' => 'Betreuungskraft',
            ];
        });
    }

    public function pl(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'keyword' => 'pl',
                'title' => 'Projektleitung',
            ];
        });
    }

    public function pfk(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'keyword' => 'pfk',
                'title' => 'PFK',
            ];
        });
    }

    public function admin(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'keyword' => 'admin',
                'title' => 'Administrator',
            ];
        });
    }


}
