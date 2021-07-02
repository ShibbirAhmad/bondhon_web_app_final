<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;

class Investor extends Model
{
      public static function SendMessageToInvestor($investor,$amount,$profit_month){
        ///send message
        $api_key = "C200833360d1a324e46036.34232547";
        $contacts = $investor->mobile_no;
        $senderid = '8809601000740';
        $sms = 'Assalamualikum, You have recieved '.number_format($amount).'/=BDT, as your investment profit of '.$profit_month.'  from the bondhonsociety.com. Thanks for being with us';   // put here your dynamic message text here
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


    public static function InvestmentWelcome($investor,$amount,$date){
       ///send message
        $api_key = "C200833360d1a324e46036.34232547";
        $contacts = $investor->mobile_no;
        $senderid = '8809601000740';
        $sms = 'Assalamualikum, ' .$investor->name . '. You have invested on  bondhonsociety.com'.number_format($amount).'/=BDT, the payment month is  '.$date.'  . Thanks for being with us';   // put here your dynamic message text here
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



     public static function InvestmentReturn($investor,$amount,$date){
       ///send message
        $api_key = "C200833360d1a324e46036.34232547";
        $contacts = $investor->mobile_no;
        $senderid = '8809601000740';
        $sms = 'Assalamualikum, ' .$investor->name . '. You have returned your investment '.number_format($amount).'/=BDT, from  bondhonsociety.com the  date is  '.$date.'  . Thanks for being with us';   // put here your dynamic message text here
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
