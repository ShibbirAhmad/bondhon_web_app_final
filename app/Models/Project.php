<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public  function project_image(){
        return $this->hasMany("App\Models\ProjectImage",'project_id') ;
    }



 public  function costs(){
        return $this->hasMany("App\Models\ProjectCost",'project_id') ;
    }


    public static function sendCostConfirmationMessage($project,$amount){
        ///send message
         $api_key = "C200833360d1a324e46036.34232547";
         $contacts = $project->manager_phone;
         $senderid = '8809612436107';
         $sms = 'Assalamualikum, ' . $project->manager_name.  'new cost '.number_format($amount).'/=BDT  included into ' .$project->name .' .Thanks for being with Bondhon Society Limited ';   // put here your dynamic message text here
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




     
    public static function refundConfirmationMessage($project,$amount){
        ///send message
         $api_key = "C200833360d1a324e46036.34232547";
         $contacts = $project->manager_phone;
         $senderid = '8809612436107';
         $sms = 'Assalamualikum, ' . $project->manager_name.  ' fund taken  '.number_format($amount).'/=BDT  from the  ' .$project->name .' .Thanks for being with Bondhon Society Limited ';   // put here your dynamic message text here
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
