<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\ProjectInstance;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::factory(3)
            ->has(
                ProjectInstance::factory(2)
                    ->has(
                        User::factory(10)
                            ->afterCreating(function(User $user) {
                                $user->roles()->attach(Role::where('keyword', 'bt')->first());
                            })
                    )
                    ->has(
                        User::factory(2)
                            ->afterCreating(function(User $user) {
                                $user->roles()->attach(Role::where('keyword', 'pl')->first());
                            })
                    )
            )
            ->create();
    }
}
