<?php

namespace Database\Factories;

use App\Models\Project;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProjectInstance>
 */
class ProjectInstanceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = fake()->date();
        return [
            'project_id' => Project::factory(),
            'date_start' => $startDate,
            'date_end' => Carbon::create($startDate)->addDays(rand(2,19)),
            'pause_goal' => rand(0,30),
        ];
    }
}
