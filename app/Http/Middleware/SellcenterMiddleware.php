<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
 
class SellcenterMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = 'sellcenter')
    {
         if (Session::has('sellcenter')) {
              return $next($request);
         }

        if (Auth::guard($guard)->guest()) {
            
            if ($request->ajax() || $request->wantsJson()) {
                return response('Unauthorized.', 401);
            } else {
                return response('Unauthorized.', 401);
            }
        }
        return $next($request);
    }

}
