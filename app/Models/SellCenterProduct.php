<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class SellCenterSale extends Model
{



    public function purchaseItems(){
        
        return $this->hasMany('App\Models\PurchaseItem','sell_center_product_id') ;

    }


    public function  today_sales(){

      return $this->hasMany("App\Models\SellCenterSale","sell_center_product_id","id")->where('created_at', '>=', Carbon::today()->startOfDay())
                                ->where('created_at', '<=', Carbon::today()->endOfDay())->select(['created_at','sell_center_product_id','amount','quantity']) ;
    }


    public function  yesterday_sales(){

      return $this->hasMany("App\Models\SellCenterSale","sell_center_product_id","id")->where('created_at', '>=', Carbon::yesterday_sales()->startOfDay())
                                ->where('created_at', '<=', Carbon::yesterday_sales()->endOfDay())->select(['created_at','sell_center_product_id','amount','quantity']) ;
    }


    
    public function  this_week_sales(){

      return $this->hasMany("App\Models\SellCenterSale","sell_center_product_id","id")->where('created_at', '>=', Carbon::today()->subDays('7')->startOfDay())
                                ->where('created_at', '<=', Carbon::today()->endOfDay())->select(['created_at','sell_center_product_id','amount','quantity']) ;
    }



    public function  this_month_sales(){

      return $this->hasMany("App\Models\SellCenterSale","sell_center_product_id","id")->where('created_at', '>=', Carbon::today()->subDays('30')->startOfDay())
                                ->where('created_at', '<=', Carbon::today()->endOfDay())->select(['created_at','sell_center_product_id','amount','quantity']) ;
    }



    public function  total_sales(){

          return $this->hasMany("App\Models\SellCenterSale","sell_center_product_id","id")->select(['created_at','sell_center_product_id','amount','quantity'])  ;

    }


 










}
