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
        Schema::create('executive_members', function (Blueprint $table) {
            $table->id();
            $table->string('fullname');
            $table->string('image');
            $table->unsignedBigInteger('executive_member_designation_id')->nullable();
            $table->foreign('executive_member_designation_id')->references('id')->on('executive_member_designations')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('executive_members');
    }
};
