<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserPasswordRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(UpdateUserPasswordRequest $request, User $user): RedirectResponse
    {
        //TODO Policy
        $user->update([
            'password' => Hash::make($request->input('password')),
        ]);

        return back();
    }
}
