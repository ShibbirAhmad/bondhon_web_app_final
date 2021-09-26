<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SellCenterBillStatement extends Model
{
    public function bills(){
      
        return $this->hasMany('App\Models\SellCenterBillPaidStatement','bill_statement_id');

    }
}
