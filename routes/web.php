<?php

use App\Http\Controllers\PauseController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/users/pauses', [UserController::class, 'viewPauseGroups'])->name('users-by-pause');
    Route::get('/users/locations', [UserController::class, 'viewLocationGroups'])->name('users-by-location');

    Route::post('/users/{id}/pauses', [PauseController::class, 'store'])->name('users.pauses.store');
    Route::put('users/{id}/pauses', [PauseController::class, 'update'])->name('users.pauses.update');

});

require __DIR__.'/auth.php';
