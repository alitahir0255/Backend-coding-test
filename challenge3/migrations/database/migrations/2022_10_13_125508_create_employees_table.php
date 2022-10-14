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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->UnsignedBigInteger("company_id");
            $table->foreign("company_id")->references("id")->on("companies");
            $table->UnsignedBigInteger("user_id");
            $table->foreign("user_id")->references("id")->on("people");
            $table->UnsignedBigInteger("role_id");
            $table->foreign("role_id")->references("id")->on("roles");
            $table->boolean('is_active')->deafult(true);
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
        Schema::dropIfExists('employees');
    }
};
