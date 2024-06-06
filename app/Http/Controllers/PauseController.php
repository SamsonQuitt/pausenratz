<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePauseRequest;
use App\Http\Requests\UpdatePauseRequest;
use App\Models\Pause;

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
    public function store(StorePauseRequest $request)
    {
        //
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
    public function update(UpdatePauseRequest $request, Pause $pause)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pause $pause)
    {
        //
    }
}
