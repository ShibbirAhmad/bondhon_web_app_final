<?php

namespace App\Http\Controllers\Sellcenter;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\SellCenterSale;
use App\Models\SellCenterCredit;
use App\Models\SellCenterProduct;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class SaleController extends Controller
{
    

     public function index(Request $request){
            $item = $request->item ?? 30 ;
            $sales = SellCenterSale::where('sell_center_id',session()->get('sellcenter')['id'])->orderBy('id','desc')->with('product')->paginate($item);
            return response()->json([
                'status' => 'SUCCESS',
                'sales' => $sales,
            ]);
     }


    public function saleItem($id){
            $sale = SellCenterSale::findOrFail($id) ;
            return response()->json([
                'status' => 'SUCCESS',
                'sale' => $sale,
            ]);
     }

     
   
     public function filterSales(Request $request){
            $sales='';
            $paginate=$request->item??30;
            if(!empty($request->start_date) && empty($request->end_date)){
                
                    $sales=SellCenterSale::where('sell_center_id',session()->get('sellcenter')['id'])
                                            ->whereDate('created_at','=',$request->start_date)
                                            ->orderBy('id','desc')->with('product')
                                            ->paginate($paginate);
                 
            }
            elseif(!empty($request->end_date) && !empty($request->start_date)){
    
                    $sales=SellCenterSale::where('sell_center_id',session()->get('sellcenter')['id'])->whereDate('created_at', '>=', $request->start_date)
                                            ->whereDate('created_at', '<=', $request->end_date)
                                            ->orderBy('id','desc')->with('product')
                                            ->paginate($paginate);
             }else{
                  $sales=SellCenterSale::where('sell_center_id',session()->get('sellcenter')['id'])
                                        ->whereDate('created_at','=',$request->end_date)
                                        ->orderBy('id','desc')->with('product')
                                        ->paginate($paginate);
                  
             }
           
            return response()->json([
                'status' => 'SUCCESS',
                'sales' => $sales,
            ]);
     }



     public function store(Request $request){
          
        $validatedData = $request->validate([
            'product_id' => 'required ',
            'price' => 'required ',
            'quantity' => 'required',
            'quantity_type' => 'required',
        ]); 
        $product = SellCenterProduct::findOrFail($request->product_id);
        //save sale data
        if ($product) {
            DB::transaction(function() use($request,$product){
                $sale = new SellCenterSale();
                $sale->sell_center_id = session()->get('sellcenter')['id'];
                $sale->sell_center_product_id = $product->id;
                $sale->price = $request->price;
                $sale->quantity = floatval($request->quantity);
                $sale->quantity_type = $request->quantity_type;
                $sale->discount = $request->discount ?? 0;
                $sale->amount =  ( floatval($request->price) * floatval($request->quantity) ) - floatval($request->discount) ;
                $sale->save();

                //update stock
                $product->stock= floatval($product->stock) -  floatval($request->quantity) ;
                $product->save();

                if ($sale->amount > 0) {
                    $credit = new SellCenterCredit();
                    $credit->sell_center_id = session()->get('sellcenter')['id'];
                    $credit->sell_center_sale_id = $sale->id;
                    $credit->purpose = "sale from ".$product->name;
                    $credit->amount =  intval($sale->amount);
                    $credit->comment = $request->comment ?? null;
                    $credit->date = date('Y-m-d');
                    $credit->credit_in = "Cash";
                    $credit->save();
                }

            });
        }


        //return success message
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'added successfully'
        ]);
    
         
     }





     public function update(Request $request,$id){
          
        $validatedData = $request->validate([
            'product_id' => 'required ',
            'price' => 'required ',
            'quantity' => 'required',
            'quantity_type' => 'required',
        ]); 
        $product = SellCenterProduct::findOrFail($request->product_id);
        //save sale data
        if ($product) {
            DB::transaction(function() use($request,$product,$id){

                $sale = SellCenterSale::findOrFail($id);

                //update stock 
                $product->stock = $product->stock + $sale->quantity;
                $product->stock = $product->stock  - floatval($request->quantity);
                $product->save();

                $sale->sell_center_id = session()->get('sellcenter')['id'];
                $sale->sell_center_product_id = $product->id;
                $sale->price = $request->price;
                $sale->quantity = floatval($request->quantity);
                $sale->quantity_type = $request->quantity_type;
                $sale->discount = $request->discount ?? 0;
                $sale->amount =  ( floatval($request->price) * floatval($request->quantity) ) - floatval($request->discount) ;
                $sale->save();
            
                if ($sale->amount > 0) {
                    $old_credit = SellCenterCredit::where('sell_center_sale_id',$sale->id)->first();
                    $old_credit->delete();
                    //new record insert
                    $credit = new SellCenterCredit();
                    $credit->sell_center_id = session()->get('sellcenter')['id'];
                    $credit->sell_center_sale_id = $sale->id;
                    $credit->purpose = "sale from ".$product->name;
                    $credit->amount =  intval($sale->amount);
                    $credit->comment = $request->comment ?? null;
                    $credit->date = date('Y-m-d');
                    $credit->credit_in = "Cash";
                    $credit->save();
                }

            });
        }

        //return success message
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'updated successfully'
        ]);
    
         
     }


    public function  profitCalculator($sales_products){

            $sale_amount = 0 ;
            $sale_quantity = 0 ;
            $product_purchase_price = 0 ;
            $product_purchase_qty = 0 ;
            foreach ($sales_products as $item) {
                $sale_amount += floatval($item->amount) ;
                $sale_quantity += floatval($item->quantity) ;
                $product_purchase_qty += count($item->product->purchaseItems);
                foreach ($item->product->purchaseItems as $purchase) {
                    $product_purchase_price += floatval($purchase->price) ;
                }
            } 
            $average_purchase_price = $product_purchase_price / $product_purchase_qty ;
            $profit =  $sale_amount - ($average_purchase_price * $sale_quantity );
            return $profit ;

    }  

   
    public function saleAnalysis(){

        $today_sales_products = SellCenterProduct::where('sell_center_id',session()->get('sellcenter')['id'])
                                                    ->select('id','sell_center_id','name','image','code')
                                                    ->with('today_sales','purchaseItems')->get();

        $yesterday_sales_products = SellCenterProduct::where('sell_center_id',session()->get('sellcenter')['id'])
                                                        ->select('id','sell_center_id','name','image','code')
                                                        ->with('purchaseItems','yesterday_sales')->get();
                                            
        $this_week_sales_products = SellCenterProduct::where('sell_center_id',session()->get('sellcenter')['id'])
                                                        ->select('id','sell_center_id','name','image','code')
                                                        ->with('purchaseItems','this_week_sales' )->get();
                            
        $this_month_sales_products = SellCenterProduct::where('sell_center_id',session()->get('sellcenter')['id'])
                                                        ->select('id','sell_center_id','name','image','code')
                                                        ->with('purchaseItems','this_month_sales' )->get(); 
                                
                                
                        
        $total_sales_products = SellCenterProduct::where('sell_center_id',session()->get('sellcenter')['id'])
                                                        ->select('id','sell_center_id','name','image','code')
                                                        ->with('purchaseItems','total_sales' )->get(); 

    
        return  response()->json([
                'status' => 'OK',
                'today_sales_products' => $today_sales_products ,
                'yesterday_sales_products' => $yesterday_sales_products ,
                'this_week_sales_products' => $this_week_sales_products ,
                'this_month_sales_products' => $this_month_sales_products ,
                'total_sales_products' => $total_sales_products ,
        ]) ;


    }



    public function totalSaleCalculator($sales_products){
         
            foreach ($sales_products as $item) {

            $total_purchase_price =  array_sum(array_column($item->purchaseItems, 'price'));  
            $total_purchase_time = count($item->purchaseItems);
            $average_purchase_price =  $total_purchase_price / $total_purchase_time ;


            $total_purchase_price =  array_sum(array_column($item->purchaseItems, 'price'));  
            $total_purchase_time = count($item->purchaseItems);
            $average_purchase_price =  $total_purchase_price / $total_purchase_time ;

            }


    }

    



}
