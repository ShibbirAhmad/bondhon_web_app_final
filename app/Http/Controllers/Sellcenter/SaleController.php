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

        $total_sales_products_id = SellCenterSale::where('sell_center_id',session()->get('sellcenter')['id'])->select('sell_center_product_id')->pluck('sell_center_product_id');

        $today_sales_products_id = SellCenterSale::where('created_at','>=',Carbon::today()->startOfDay())
                                                    ->where('created_at','<=',Carbon::today()->endOfDay())
                                                    ->where('sell_center_id',session()->get('sellcenter')['id'])
                                                    ->select('sell_center_product_id')
                                                    ->pluck('sell_center_product_id');


        $yesterday_sales_products_id = SellCenterSale::where('created_at','>=',Carbon::yesterday()->startOfDay())
                                                    ->where('created_at','<=',Carbon::yesterday()->endOfDay())
                                                    ->where('sell_center_id',session()->get('sellcenter')['id'])
                                                    ->select('sell_center_product_id')
                                                    ->pluck('sell_center_product_id');


        $this_week_sales_products_id = SellCenterSale::where('created_at','>=',Carbon::today()->subDays('7')->startOfDay())
                                                    ->where('created_at','<=',Carbon::today()->endOfDay())
                                                    ->where('sell_center_id',session()->get('sellcenter')['id'])
                                                    ->select('sell_center_product_id')
                                                    ->pluck('sell_center_product_id');      

        $this_month_sales_products_id = SellCenterSale::where('created_at','>=',Carbon::today()->subDays('30')->startOfDay())
                                                    ->where('created_at','<=',Carbon::today()->endOfDay())
                                                    ->select('sell_center_product_id')
                                                    ->pluck('sell_center_product_id');

        
        $today_sales_products = SellCenterProduct::whereIn('id',$today_sales_products_id)
                                                    ->select('id','sell_center_id','name','image','code')
                                                    ->with('today_sales','purchaseItems')->get();

        $yesterday_sales_products = SellCenterProduct::whereIn('id',$yesterday_sales_products_id)
                                                    ->select('id','sell_center_id','name','image','code')
                                                    ->with('purchaseItems','yesterday_sales')->get();
                                            
        $this_week_sales_products = SellCenterProduct::whereIn('id',$this_week_sales_products_id)
                                                    ->select('id','sell_center_id','name','image','code')
                                                    ->with('purchaseItems','this_week_sales' )->get();
                            
        $this_month_sales_products = SellCenterProduct::whereIn('id',$this_month_sales_products_id)
                                                    ->select('id','sell_center_id','name','image','code')
                                                    ->with('purchaseItems','this_month_sales' )->get(); 
                                
                                
                        
        $total_sales_products = SellCenterProduct::whereIn('id',$total_sales_products_id)
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


  


    // public function thisMonthProfitCalculator($sales_products){

    //     $average_purchase_price =0 ;
    //     $total_sales_amount =0 ;
    //     $total_sale_quantity =0 ;
        
    //    foreach ($sales_products as $item) {
    //        $average_purchase_price +=  array_sum(array_column((array)$item->purchaseItems, 'price')) / count($item->purchaseItems) ;
    //        $total_sales_amount +=  array_sum(array_column((array)$item->this_month_sales, 'amount'));  
    //        $total_sale_quantity +=  array_sum(array_column((array)$item->this_month_sales, 'quantity'));  
    //    }

    //    $total_sale_purchase_price =  floatval($average_purchase_price) * floatval($total_sale_quantity);
    //    $profit_amount = floatval($total_sales_amount) - $total_sale_purchase_price ;
    //    return $profit_amount ;

    // }

 


}
