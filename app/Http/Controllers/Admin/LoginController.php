<?php

namespace App\Http\Controllers\Admin;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required ',
            'password' => 'required',
        ]);
        $credential = ['email' => $request->email, 'password' => $request->password, 'status' => 1, ];
        if (Auth::guard('admin')->attempt($credential)) {
            if (Auth::guard('admin')->user()->admin_role == 1) {
                    Session::put('admin', Auth::guard('admin')->user());
                    $admin=Auth::guard('admin')->user();
                    return response()->json([
                        'status' => 'SUCCESS',
                        'admin' => $admin,
                        'token' => Hash::make($request->password),
                        'message' => 'Login successfully'
                    ]);
            }


            if (Auth::guard('admin')->user()->admin_role == 2) {
                    Session::put('member', Auth::guard('admin')->user());
                    $member=Auth::guard('admin')->user();
                    return response()->json([
                        'status' => 'SUCCESS',
                        'member' => $member,
                        'token' => Hash::make($request->password),
                        'message' => 'Login successfully'
                    ]);
            }
        }else{
            return response()->json([
                'status' => 'FAILD',
                'message' => 'sorry ! invalid login information '
            ]);
        }

    }

    public function admin()
    {
        // return "hello";
        $admin = session()->get('admin');
        if ($admin) {
            return response()->json([
                'status' => 'SUCCESS',
                'admin' => $admin
            ]);
        }

    }


    //function for admin to merchan access
    public function adminAccessMember($id){

          $member = Admin::find($id);
          if ($member) {
              session()->put('member',$member);
              return response()->json([
                 'status' => 'SUCCESS',
                  'token'=>'427525ghfhgdcgfc',
                  'member' => $member,
              ]);
          }
    }





      public function member(){
        // return "hello";
        $member = session()->get('member');
        if ($member) {
            return response()->json([
                'status' => 'SUCCESS',
                'member' => $member
            ]);
        }

    }

    public function logout()
    {
        $admin=Auth::guard('admin')->user();
        Auth::guard('admin')->logout();
        session()->forget('admin');
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'Logout successfully'
        ]);
    }


  public function logoutMember()
    {
        $admin=Auth::guard('admin')->user();
        Auth::guard('admin')->logout();
        session()->forget('member');
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'Logout successfully'
        ]);
    }


    public function adminSessionCheck()
    {
        if (!Session::has('admin')) {
            return response()->json([
                'status' => 'EXPIRED',
                'message' => 'Your session has expired'
            ]);
        } else {
            return response()->json([
                'status' => 'RUNNING',
                'message' => 'your session is running',
                'admin'=>session()->get('admin'),
            ]);
        }

    }


 public function memberSessionCheck()
    {
         if (!Session::has('member')) {
            return response()->json([
                'session' => 'member_expired',
                'message' => 'Your session has expired'
            ]);
        }else {
            return response()->json([
                'session' => 'member_running',
                'message' => 'your session is running',
                'member'=>session()->get('member'),
            ]);
        }

    }


}
