<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PurchaseItem extends Model
{

    public function product(){
        return $this->belongsTo('App\Models\SellCenterProduct','sell_center_product_id');
    }
}
