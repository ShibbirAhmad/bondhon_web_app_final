<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoanPaidsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loan_paids', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('loaner_id');
            $table->float('amount');
            $table->date('date');
            $table->text('comment')->nullable();
            $table->text('paid_by');
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
        Schema::dropIfExists('loan_paids');
    }
}
