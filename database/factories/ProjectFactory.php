<?php

namespace Database\Factories;

use Bezhanov\Faker\Provider\Space;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = \Faker\Factory::create();
        $faker->addProvider(new Space($faker));
        return [
            'title' => $faker->planet,
            'description' => $faker->sentence(),
            'location' => $faker->galaxy,
            'img_avatar' => 'test-project-avatar.png',
            'img_portrait' => 'test-project-portrait.png'
        ];
    }
}
