<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;

class Loaner extends Model
{
    public function loan(){
        return $this->hasOne('App\Models\Loan','loaner_id');
    }

    public static function SendMessageToLoaner($loaner,$amount){
        //get supplier due amount
        $loans=Loan::where('loaner_id',$loaner->id)->sum('amount');
        $loanPaid=LoanPaid::where('loaner_id',$loaner->id)->sum('amount');
        $due_amount=$loans-$loanPaid;
        $contacts = $loaner->mobile_no;
        ///send message
        $sms = 'Thank you for the recent payment of '.number_format($amount).'/=BDT, You have received from the mohasagor.com'.' and your due amount is '.number_format($due_amount).'/=BDT';   // put here your dynamic message text here
        return self::smsApi($contacts,$sms);
    }


    public static function sendMessageToLoanerForNewLoan($loaner,$amount){
            //get supplier due amount
            $loans=Loan::where('loaner_id',$loaner->id)->sum('amount');
            $loanPaid=LoanPaid::where('loaner_id',$loaner->id)->sum('amount');
            $due_amount=$loans-$loanPaid;
            $contacts = $loaner->mobile_no;
            ///send message
            $sms =  'Assalamualaikum, Dear '.$loaner->name. ' Mohasagor Limited has taken '.number_format($amount).'/=BDT as a loan from you. Total amount is '.number_format($loans).'/=BDT, and due amount is '.number_format($due_amount).'/=BDT';   // put here your dynamic message text here
            return self::smsApi($contacts,$sms);
        }


      public static function smsApi($contacts,$sms){

        $api_key = "C200842360d46fec549020.69644003";
        $senderid = '8809612436210';
        $URL = "http://sms.esmsbd.com/smsapi?api_key=" . urlencode($api_key) . "&type=text&contacts=" . urlencode($contacts) . "&senderid=" . urlencode($senderid) . "&msg=" . urlencode($sms);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $URL);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 0);
        try {
            $output = $content = curl_exec($ch);
         //  print_r($output);
        } catch (Exception $ex) {
           return back();
        }
        return $output;
    }







}
