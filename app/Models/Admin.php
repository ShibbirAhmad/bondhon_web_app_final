<?php

namespace App\Models;

use Exception;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Models\Permission;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Admin extends Authenticatable
{
    use Notifiable;
    use HasRoles;
    protected $guard = 'admin';

    public static function adminPermission() {
     $permissions = [];
        foreach (Permission::all() as $permission) {
          if (session()->get('admin')->can($permission->name)) {
            $permissions[] = $permission->name;
      }
    }
    return $permissions;
    }


   public static function MemberPermission() {
     $permissions = [];
        foreach (Permission::all() as $permission) {
          if (session()->get('member')->can($permission->name)) {
            $permissions[] = $permission->name;
      }
    }
    return $permissions;
    }


     public static function sendConfirmationMessage($admin,$amount,$date){
       ///send message
        $api_key = "C200833360d1a324e46036.34232547";
        $contacts = $admin->phone;
        $senderid = '8809612436107';
        $sms = 'Assalamualikum, ' .$admin->name. ' You have paid '.number_format($amount).'/=BDT, as your montly collection. in this date '.$date.'.  Thanks for being with bondhonsociety.com ';   // put here your dynamic message text here
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


      public static function sendWelcomeMessage($admin){
            ///send message
            $api_key = "C200833360d1a324e46036.34232547";
            $contacts = $admin->phone;
            $senderid = '8809612436107';
            $sms = 'Assalamualikum, ' .$admin->name. ' . welcome to Bondhon Society. You are now business partner of bondhonsociety.com  Thanks for being with us';   // put here your dynamic message text here
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



       public static function profitConfirmation($admin,$amount,$profit_date){
        ///send message
        $api_key = "C200833360d1a324e46036.34232547";
        $contacts = $admin->phone;
        $senderid = '8809612436107';
        $sms = 'Assalamualikum, ' .$admin->name. ' You have recieved '.number_format($amount).'/=BDT, as your  profit  from the bondhonsociety.com  the payment date is '.$profit_date.'  Thanks for being with us';   // put here your dynamic message text here
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



       public static function sendCostConfimationMessage($project,$amount){
        ///send message
        $api_key = "C200833360d1a324e46036.34232547";
        $contacts = $project->manager_phone;
        $senderid = '8809612436107';
        $sms = 'Assalamualikum, ' .$project->manager_name. ' ' .$project->name .' has added ' .number_format($amount).'/=BDT, for cost purpose ';   // put here your dynamic message text here
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
