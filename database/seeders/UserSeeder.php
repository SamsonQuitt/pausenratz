<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(3)
            ->afterCreating(function(User $user) {
                $user->roles()->attach(Role::where('keyword', 'pfk')->first());
            })
            ->create();
        User::factory()
            ->afterCreating(function(User $user) {
                $user->roles()->attach(Role::where('keyword', 'admin')->first());
            })
            ->create([
                'name' => 'test',
                'password' => Hash::make('test')
            ]);
    }
}
