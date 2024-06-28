<?php

namespace App\Http\Controllers;

use App\Enums\UserStates;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function view()
    {
        return Inertia::render('Dashboard', [
            'userStates' => UserStates::cases()
        ]);
    }
}
