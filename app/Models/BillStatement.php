<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BillStatement extends Model
{
    public function bills(){
      
        return $this->hasMany('App\Models\BillPaidStatement','bill_statement_id');

   }
}
