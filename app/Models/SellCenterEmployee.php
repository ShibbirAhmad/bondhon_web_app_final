<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;

class SellCenterEmployee extends Model
{
    public static function sendMessageToEmployeer($employee,$amount,$month){

        $api_key = "C200833360d1a324e46036.34232547";
        $contacts = $employee->phone;
        $senderid = '8809612436107';
        $sms = 'Assalamualikum, '. $employee->name.' you have received ' .$amount.'/= BDT, salary of '. $month .' month from the ' .session()->get('sellcenter')['name'];
        // put here your dynamic message text here
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
