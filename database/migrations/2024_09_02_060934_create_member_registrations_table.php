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
        Schema::create('member_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('fullname');
            $table->string('email')->unique();
            $table->string('phonenumber');
            $table->unsignedBigInteger('gender_id');
            $table->string('aadhar_card');

            $table->string('marital_status');
            $table->unsignedBigInteger('relationship');
            $table->string('father_husband_name')->nullable();

            $table->text('address')->nullable();
            $table->unsignedBigInteger('district_id');
            $table->unsignedBigInteger('constituency_id');
            $table->unsignedBigInteger('GPU_id');
            $table->boolean('isApproved')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member_registrations');
    }
};
