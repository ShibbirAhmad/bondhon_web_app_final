<?php

namespace App\Http\Controllers\Sellcenter;

use Carbon\Carbon;
use App\Models\Order ;
use App\Models\OrderItem ;
use App\Models\PurchaseItem;
use Illuminate\Http\Request;
use App\Models\SellCenterDebit;
use App\Models\SellCenterCredit;
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

 

      public function DashboardHighlightInfo(){

            $total_stock_price=0;
            $products=SellCenterProduct::where('stock','>',0)->get();
            $total_stock_quantity=$products->sum('stock');
   
            foreach($products as $product){
               $purchase_item=PurchaseItem::where('sell_center_product_id',$product->id)->get();
               $total_purchase_price = 0 ;
               foreach($purchase_item as $item){
                  $total_purchase_price += floatval($item->price) ;
               }
               $average_price = $total_purchase_price / count($purchase_item);
               $total_stock_price += floatval($average_price) * floatval($product->stock);
            }
   

            $sellcenter_id = session()->get('sellcenter')['id'];  
            //balance analysis
            $balnce=SellCenterCredit::Balance();
            $analysis['total_credit']=SellCenterCredit::where('sell_center_id',$sellcenter_id)->sum('amount');
            $analysis['total_debit']=SellCenterDebit::where('sell_center_id',$sellcenter_id)->sum('amount');
            //monthly profit and cost analysis
            $analysis['this_month_credit']=SellCenterCredit::where('sell_center_id',$sellcenter_id)->where('created_at','>=',Carbon::today()->subDays('30')->startOfDay())
                              ->where('created_at','<=', Carbon::today()->endOfDay())
                              ->sum('amount');

            $analysis['this_month_debit']=SellCenterDebit::where('sell_center_id',$sellcenter_id)->where('created_at','>=',Carbon::today()->subDays('30')->startOfDay())
                              ->where('created_at','<=', Carbon::today()->endOfDay())
                              ->sum('amount');
                              
            //monthly profit and cost analysis
            $analysis['this_weeck_credit']=SellCenterCredit::where('sell_center_id',$sellcenter_id)->where('created_at','>=',Carbon::today()->subDays('7')->startOfDay())
                              ->where('created_at','<=', Carbon::today()->endOfDay())
                              ->sum('amount');

            $analysis['this_weeck_debit']=SellCenterDebit::where('sell_center_id',$sellcenter_id)->where('created_at','>=',Carbon::today()->subDays('7')->startOfDay())
                              ->where('created_at','<=', Carbon::today()->endOfDay())
                              ->sum('amount');
            $sale_profit_analysis = new SaleController();
                  return response()->json([
                        'status'=> "OK",
                        'analysis'=>$analysis,
                        'balance'=>$balnce,
                        'total_stock_quantity'=>$total_stock_quantity,
                        'total_stock_price'=>$total_stock_price,
                        'sale_profit_analysis' => $sale_profit_analysis->saleAnalysis(),
                  ]);

            }



}
