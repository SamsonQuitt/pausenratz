<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('project_instances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained();
            $table->date('date_start');
            $table->date('date_end');
            $table->integer('pause_goal')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_instances');
    }
};
