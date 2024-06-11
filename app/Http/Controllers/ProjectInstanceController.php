<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectInstanceRequest;
use App\Http\Requests\UpdateProjectInstancePauseGoalRequest;
use App\Http\Requests\UpdateProjectInstanceRequest;
use App\Models\ProjectInstance;
use Illuminate\Http\RedirectResponse;

class ProjectInstanceController extends Controller
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
    public function store(StoreProjectInstanceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ProjectInstance $projectInstance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProjectInstance $projectInstance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectInstanceRequest $request, ProjectInstance $projectInstance)
    {
        //
    }

    public function updatePauseGoal(UpdateProjectInstancePauseGoalRequest $request, ProjectInstance $projectInstance): RedirectResponse
    {
        $projectInstance->pause_goal = $request->input('pause_goal');
        $projectInstance->save();
        return back()->with(['message' => 'Pausenziel aktualisiert.']);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProjectInstance $projectInstance)
    {
        //
    }
}
