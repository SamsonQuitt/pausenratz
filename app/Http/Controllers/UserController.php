<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserNameRequest;
use App\Http\Requests\UpdateUserPasswordRequest;
use App\Http\Requests\UpdateUserStateRequest;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function viewPauseGroups(): Response
    {
        $users = User::where('project_instance_id', Auth::user()->project_instance_id)
            ->withSum([
                'pauses' => function ($query) {
                    $query->whereDay('time_start', Carbon::today());
                }], 'duration')
            ->get();

        return Inertia::render('PauseGroups', [
            'users' => $users,
            'goal' => Auth::user()->projectInstance->pause_goal
        ]);
    }

    public function updateName(UpdateUserNameRequest $request, User $user): RedirectResponse
    {
        $user->name = $request->input('name');
        $user->save();
        return back()->with(['message' => 'Benutzername gespeichert.']);
    }

    public function updateState(UpdateUserStateRequest $request, User $user): RedirectResponse
    {
        //TODO Policy if you can edit user
        $user->state = $request->input('newState');
        $user->save();
        //TODO Label der Enums verwenden
        return back()->with(['message' => 'Status erfolgreich geändert.']);
    }

}
