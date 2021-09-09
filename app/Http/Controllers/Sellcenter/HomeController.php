<?php

namespace App\Http\Controllers\Sellcenter;

use Carbon\Carbon;
use App\Models\Order ;
use App\Models\OrderItem ;
use Illuminate\Http\Request;
use App\Models\SellCenterProduct;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\session;

class HomeController extends Controller
{
   



      public function  get_current_sellcenter(){

            if (session::has('sellcenter')) {
                 $sellcenter = session()->get('sellcenter') ;  
                 return response()->json([
                       'status' => 'OK',
                       'sellcenter' => $sellcenter ,
                 ]);
            }
           
      }




      
      public function  current_sellcenter_update(Request $request){

            $validatedData = $request->validate([
                  'name'  => 'required',
                  'phone'  => 'required|digits:11,unique:sellcenters,phone,'.session()->get('sellcenter')['id'],
                  'address'  => 'required',
              ]);
      
      
               $sellcenter= session()->get('sellcenter');
               $sellcenter->name=$request->name ;
               $sellcenter->phone=$request->phone ;
               $sellcenter->licience=$request->licience ;
               $sellcenter->address=$request->address ;
               if ($request->hasFile('logo')) {
                   $file_path=$request->file('logo')->store('images/sellcenter','public'); 
                   $sellcenter->logo=$file_path ;
               }
             
               if ($sellcenter->save()) {
                   return response()->json([
                       'success' => 'OK',
                        'message' => 'Information updated successfully '
                   ]);
               }
           
      }

 

      public function  get_dashboard_highlight_info(){

              $sellcenter_id = session()->get('sellcenter')['id'];
              $products=array();
              $products['product_total']=SellCenterProduct::where('sellcenter_id',$sellcenter_id)->count() ;
              $products['product_approved']=SellCenterProduct::where('sellcenter_id',$sellcenter_id)->where('status',1)->count() ;
              $products['product_pending']=SellCenterProduct::where('sellcenter_id',$sellcenter_id)->where('status',2)->count() ;
             
              $orders=array();
              $product_id=SellCenterProduct::where('sellcenter_id',session()->get('sellcenter')['id'])->select('id')->pluck('id');
              $order_id=OrderItem::whereIn('product_id',$product_id)->select('order_id')->pluck('order_id');
              //total order items counter
              $orders['total_order_items']=$order_id->count();
              $order = Order::whereIn('id',$order_id)->with(['customer'])->get();
              //total order counter
              $orders['total_order']=$order->count();
              //today order counter
              $orders['today_order']=$order->where('created_at', '>=', Carbon::today()->startOfDay())
                                            ->where('created_at', '<=', Carbon::today()->endOfDay())->count();
              //cancel order counter 
              $orders['cancel_order']=$order->where('status',6)->count();                              
              $orders['total_delivered_order']=$order->where('status',5)->count();
           

     
              return response()->json([
                     "status" => "OK",
                     'products' => $products ,
                     'orders' => $orders ,
              ]);

      }



}
