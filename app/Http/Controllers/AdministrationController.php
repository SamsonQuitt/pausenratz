<?php

namespace App\Http\Controllers;

use App\Models\ProjectInstance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdministrationController extends Controller
{
    public function viewPL()
    {
        $projectInstance = Auth::user()->projectInstance;
        //TODO ProjectInstance authorization
        $projectInstance->load('users.roles');
        return Inertia::render('ProjectLead/ProjectLead', [
            'projectInstance' => $projectInstance
        ]);
    }
}
