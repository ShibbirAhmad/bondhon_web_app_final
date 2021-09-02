<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
class SellCenter  extends Authenticatable
{

     use Notifiable;
     protected $guard = 'sellcenter' ;



     public function manager(){
         return $this->hasOne('App\Models\SellCenterManager','sell_center_id') ; 
     }



     
}
