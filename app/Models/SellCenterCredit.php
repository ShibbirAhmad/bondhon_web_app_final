<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class SellCenterCredit extends Model
{
    public static function Balance(){

        $balnce=array();
        //calculation credit balance, al and today
        $sell_center_id=session()->get('sellcenter')['id'] ;
         //get the all credit item,item store a variable then it's use
        $all_credit_item=SellCenterCredit::where('sell_center_id',$sell_center_id)->get();
        $balnce['total_credit']=$all_credit_item->sum('amount');
        $balnce['total_credit_cash']=$all_credit_item->where('credit_in','Cash')->sum('amount');
        $balnce['total_credit_bkash']=$all_credit_item->where('credit_in','Bkash')->sum('amount');
        $balnce['total_credit_nagad']=$all_credit_item->where('credit_in','Nagad')->sum('amount');
        $balnce['total_credit_bank']=$all_credit_item->where('credit_in','Bank')->sum('amount');


        //get the today credit item,item store a variable then it's use
        $today_credit_item=SellCenterCredit::where('sell_center_id',$sell_center_id)->where('date', '>=', Carbon::today()->startOfDay())
                                        ->where('date', '<=', Carbon::today()->endOfDay())
                                        ->get();
        $balnce['today_credit']=$today_credit_item->sum('amount');
        $balnce['today_credit_cash']=$today_credit_item->where('credit_in','Cash')->sum('amount');
        $balnce['today_credit_bkash']=$today_credit_item->where('credit_in','Bkash')->sum('amount');
        $balnce['today_credit_nagad']=$today_credit_item->where('credit_in','Nagad')->sum('amount');
        $balnce['today_credit_bank']=$today_credit_item->where('credit_in','Bank')->sum('amount');


        //calculate the debit balcne

        $total_debit_item=SellCenterDebit::where('sell_center_id',$sell_center_id)->get();
        $balnce['total_debit']=$total_debit_item->sum('amount');
        $balnce['total_debit_cash']=$total_debit_item->where('debit_from','Cash')->sum('amount');
        $balnce['total_debit_bkash']=$total_debit_item->where('debit_from','Bkash')->sum('amount');
        $balnce['total_debit_nagad']=$total_debit_item->where('debit_from','Nagad')->sum('amount');
        $balnce['total_debit_bank']=$total_debit_item->where('debit_from','Bank')->sum('amount');


        //get the today debit item,item store a variable then it's use
        $today_debit_item=SellCenterDebit::where('sell_center_id',$sell_center_id)
                                        ->where('date', '>=', Carbon::today()->startOfDay())
                                        ->where('date', '<=', Carbon::today()->endOfDay())
                                        ->get();

        $balnce['today_debit']=$today_debit_item->sum('amount');
        $balnce['today_debit_cash']=$today_debit_item->where('debit_from','Cash')->sum('amount');
        $balnce['today_debit_bkash']=$today_debit_item->where('debit_from','Bkash')->sum('amount');
        $balnce['today_debit_nagad']=$today_debit_item->where('debit_from','Nagad')->sum('amount');
        $balnce['today_debit_bank']=$today_debit_item->where('debit_from','Bank')->sum('amount');


        return $balnce;
    }

}
