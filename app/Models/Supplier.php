<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Exception;

class Supplier extends Model
{
    public static function SendMessageToSupplier($supplier,$amount){

        //get supplier due amount
        $supplier_purchase_amount=Purchase::where('supplier_id',$supplier->id)->sum('total');
        $supplier_paid_amount=SupplierPayment::where('supplier_id',$supplier->id)->sum('amount');
        $supplier_due_amount=$supplier_purchase_amount-$supplier_paid_amount;

        ///send message
        $contacts = $supplier->phone;
        $sms = 'Thank you for the recent payment of '.number_format($amount).'/=BDT, You have received from the mohasagor.com'.' and your due amount is '.number_format($supplier_due_amount).'/=BDT';   // put here your dynamic message text here
         return self::smsApi($contacts,$sms);
    }


    public static function sendNewPurchaseMessage($supplier,$amount,$invoice_no)  {

            //get supplier due amount
            $supplier_purchase_amount=Purchase::where('supplier_id',$supplier->id)->sum('total');
            $supplier_paid_amount=SupplierPayment::where('supplier_id',$supplier->id)->sum('amount');
            $supplier_due_amount=$supplier_purchase_amount-$supplier_paid_amount;

            ///send message
            $contacts = $supplier->phone;
            $sms = 'Assalamualaikum Dear '.$supplier->name .', Mohasagor Limited  has a new purchase '.number_format($amount).'/=BDT from you. Invoice is : '.$invoice_no.' and total due amount is '.number_format($supplier_due_amount).'/=BDT Thanks from mohasagor.com';   // put here your dynamic message text here
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
