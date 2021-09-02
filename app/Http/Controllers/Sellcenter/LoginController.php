<?php

namespace App\Http\Controllers\SellCenter;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\SellCenter ;
use Illuminate\Support\Facades\Auth ;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash ;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    
    //function for login sellcenter
    public  function check_login(Request $request){
         $validatedData = $request->validate([
            'phone' => 'required ',
            'password' => 'required',
        ]);
        $credential = ['phone' => $request->phone, 'password' => $request->password];

           if (Auth::guard('sellcenter')->attempt($credential)) {
               Session::put('sellcenter', Auth::guard('sellcenter')->user() );
               return response()->json([
                   'status' => 'SUCCESS',
                   'sellcenter'   => Auth::guard('sellcenter')->user(),
                   'sell_center_token'  => Hash::make($request->password),
                   'message' => 'Login successfully ',
               ]);
           }else{

              return response()->json([
                  'status' => 'Fail',
                  'message' => 'Sorry :) invalid login information'
              ]);
           }
    }


    public function current_sellcenter_password_update(Request $request){

        $validatedData = $request->validate([
            'old_password' => 'required ',
            'new_password' => 'required',

        ]);

        $sellcenter= session()->get('sellcenter');
        $sellcenter_current_password=$sellcenter->password;

        if (Hash::check($request->old_password,$sellcenter_current_password)) {
            if($request->new_password==$request->old_password){
                return response()->json([
                    "message" => "current password and new password can't be same ",
                ]);
            }else{
                $sellcenter->password=Hash::make($request->new_password);
                    if ($sellcenter->save()) {
                        return response()->json([ "success" => "OK", "message" => "password changed successfully" ]);
                    }
            }
         }else{
             return response()->json([
                "message" => "current password is incorrect! ",
              ]);
         }

    }


    public function sellcenter(){

         $sellcenter= Session()->get('sellcenter');

         return response()->json([
             "success" => "OK",
             "sellcenter" => $sellcenter ,
         ]);

    }


    public function check_session(){

          if (Session::has('sellcenter')) {

                return response()->json([
                    "session" => "running",
                    "sellcenter" => session()->get('sellcenter') ,
                ]);

          } else {
                return response()->json([
                    "session" => "expired",
                ]);
          }

    }



    public  function logout(){

          Auth::guard('sellcenter')->logout();
          session()->forget('sellcenter');
          return response()->json([
            'status' => 'OK',
            'message' => 'Logout successfully'
        ]);
    }


    public function send_reset_code(Request $request){

        $validatedData = $request->validate([
            'phone' => 'required|digits:11',
            ]);

          $sellcenter=SellCenter::where('phone',$request->phone)->first();
        if(empty($sellcenter)){
            return response()->json([
                'status'=>"ERROR",
                'message'=>"The mobile number does not match our records"
            ]);
       }else{
            $code=rand(0000,9999);
            DB::table('password_resets')->insert([
                'mobile_no'=>$request->phone,
                'token'=>Hash::make($code)
            ]);
            SellCenter::SendSellCenterPasswordResetCode($request->phone,$code);

            return response()->json([
                'status'=>"SUCCESS",
                'message'=>"Sent verification code on your mobile"
            ]);
          }
        }




        public function sellcenter_reset_code_verified(Request $request, $phone){


            $phone=DB::table('password_resets')->where('mobile_no',$phone)->orderBy('id','DESC')->first();
            if(!empty($phone)){
               if (Hash::check($request->code, $phone->token)) {
                  return response()->json([
                       'status'=>"SUCCESS",
                       'message'=>"Code Match"
                   ]);
               }else{
                    return response()->json([
                       'status'=>"ERROR",
                       'message'=>"Code Matching Error"
                   ]);
               }
            }else{
                 return response()->json([
                       'status'=>"ERROR",
                       'message'=>"Code Matching Error"
                    ]);
              }

           }




    public function sellcenter_set_new_password(Request $request,$phone){

        $sellcenter=SellCenter::where('phone',$phone)->first();
        if(!empty($sellcenter)){
            $sellcenter->password=Hash::make($request->password);
            if($sellcenter->save()){
                return response()->json([
                    'status'=>"SUCCESS",
                    'message'=>"Passwrod update successfully"
                ]);
            }else{
                 return response()->json([
                    'status'=>"ERROR",
                    'message'=>"Error establish"
                ]);
            }
        }
        else{
            return response()->json([
                'status'=>"ERROR",
                'message'=>"Error estblish"
            ]);
        }

    }




}
