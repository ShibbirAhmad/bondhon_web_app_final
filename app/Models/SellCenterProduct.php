<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SellCenterProduct extends Model
{



    public function purchaseItems(){
        
        return $this->hasMany('App\Models\PurchaseItem','product_id') ;

  }





}
