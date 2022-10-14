<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('emp_shifts', function (Blueprint $table) {
            $table->id();
            $table->UnsignedBigInteger("emp_id");
            $table->foreign("emp_id")->references("id")->on("employees");
            $table->UnsignedBigInteger("shft_id");
            $table->foreign("shft_id")->references("id")->on("shifts");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('emp_shifts');
    }
};
