<?php

use App\Http\Controllers\AdministrationController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\PauseController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectInstanceController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/users/{user}/name', [UserController::class, 'updateName'])->name('users.name.update');
    Route::put('/users/{user}/password', [PasswordController::class, 'update'])->name('auth.password.update');
    Route::put('/users/{user}/avatar', [UserController::class, 'updateAvatar'])->name('users.avatar.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/users/pauses', [UserController::class, 'viewPauseGroups'])->name('users-by-pause');

    Route::get('/pl', [AdministrationController::class, 'viewPL'])->name('pl.view');
    Route::get('/pfk', [AdministrationController::class, 'viewPFK'])->name('pfk.view');

    Route::post('/users/{id}/pauses', [PauseController::class, 'store'])->name('users.pauses.store');
    Route::put('users/{id}/pauses', [PauseController::class, 'update'])->name('users.pauses.update');

    Route::put('project-instances/{projectInstance}/pause-goal', [ProjectInstanceController::class, 'updatePauseGoal'])->name('project-instances.pause-goal.update');


});

Route::redirect('/', '/login');
require __DIR__.'/auth.php';
