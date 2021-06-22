<?php

namespace App\Http\Controllers\Frontend\Social;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Socialite;

class GoogleLoginController extends Controller
{
    public function redirectToProvider()
    {
        //return "hello";
        return Socialite::driver('google')->redirect();
    }

      public function handleProviderCallback()
    {

       // return "hello";
        $user = Socialite::driver('google')->user();

        return json_encode($user);

        // $user->token;
    }
}
