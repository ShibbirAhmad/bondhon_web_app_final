<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\AboutAndContact;
use App\Models\Aggreement;



class PageInfoController extends Controller
{


    public function get_about_and_contact_info() {

      $setting = AboutAndContact::latest()->take(1)->first();
        if ($setting) {
            return response()->json([
                "status" => "OK",
                "setting" => $setting ,
            ]);
        }
     }



 public function edit_about_and_contact_info(Request $request,$id)
   {

        $setting = AboutAndContact::findOrFail($id);
        $setting->about_info=$request->about_info;
        $setting->contact_info=$request->contact_info;


        if ($setting->save()) {
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'About and contact information updated successfully',
            ]);
        }

    }




public function aggreement() {

        $setting = Aggreement::latest()->take(1)->first();
        if ($setting) {
            return response()->json([
                "status" => "OK",
                "setting" => $setting ,
            ]);
        }
     }



 public function edit_aggreement(Request $request,$id)
   {

        $setting = Aggreement::findOrFail($id);
        $setting->policy=$request->policy;

        if ($setting->save()) {
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'updated successfully',
            ]);
        }

    }







}
