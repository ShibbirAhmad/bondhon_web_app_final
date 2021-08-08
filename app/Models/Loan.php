<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
  
    public function loaner(){
        return $this->belongsTo("App\Models\Loaner",'loaner_id');
    }
}
