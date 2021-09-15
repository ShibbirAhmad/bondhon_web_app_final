<?php

namespace App\Http\Controllers\Sellcenter;

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




}
