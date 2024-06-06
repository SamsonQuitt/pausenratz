<?php

namespace App\Http\Controllers;

use App\Enums\UserStates;
use App\Http\Requests\StorePauseRequest;
use App\Http\Requests\UpdatePauseRequest;
use App\Models\Pause;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class PauseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePauseRequest $request, int $id)
    {
        $user = User::findOrFail($id);
        $user->pauses()->create($request->validated());
        $user->state = UserStates::PAUSED;
        $user->save();
        return back();

    }

    /**
     * Display the specified resource.
     */
    public function show(Pause $pause)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pause $pause)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePauseRequest $request, int $id): RedirectResponse
    {
        $user = User::findOrFail($id);
        $pause = $user->pauses()->where('time_end', null)->first();
        $pause->time_end = $request->input('time_end');
        $pause->duration = Carbon::parse($pause->time_start)->diffInMinutes(Carbon::parse($request->input('time_end')));
        $pause->save();
        $user->state = UserStates::ACTIVE;
        $user->save();

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pause $pause)
    {
        //
    }
}
