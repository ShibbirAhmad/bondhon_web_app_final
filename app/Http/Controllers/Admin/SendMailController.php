<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mail\SendMail;

use Illuminate\Support\Facades\Mail;

class SendMailController extends Controller
{


    public Static function  sendMailToMember($email,$message){

          Mail::to($email)->send(new SendMail('Bondhon Society',$message));
          if(Mail::failures() != 0) {
                return response()->json([
                      "status" => "SUCCESS",
                      "message" => "Mail sent successfully"
                ]);
            }
         else{
                 return back()->with("failed", "E-mail not sent!");
             }


    }






}
