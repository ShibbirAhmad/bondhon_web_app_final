<?php

namespace App\Http\Controllers\Sellcenter;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\SellCenterSale;
use App\Models\SellCenterCredit;
use App\Models\SellCenterCourier;
use App\Models\SellCenterProduct;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\SellCenter;

class SaleController extends Controller
{
    

     public function index(Request $request){
            $item = $request->item ?? 30 ;
            $sales = SellCenterSale::where('sale_type',1)->where('sell_center_id',session()->get('sellcenter')['id'])->orderBy('id','desc')->with('product')->paginate($item);
            return response()->json([
                'status' => 'SUCCESS',
                'sales' => $sales,
            ]);
     }


     public function searchCustomer($phone){

            $customer = SellCenterSale::where('sell_center_id',session()->get('sellcenter')['id'])->where('customer_phone',$phone)->select('customer_name','customer_phone','customer_address')->first();
            return response()->json([
                'status' => 'SUCCESS',
                'customer' => $customer,
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
                
                    $sales=SellCenterSale::where('sale_type',1)->where('sell_center_id',session()->get('sellcenter')['id'])
                                            ->whereDate('created_at','>=',$request->start_date)
                                            ->orderBy('id','desc')->with('product')
                                            ->paginate($paginate);
                 
            }
            elseif(!empty($request->end_date) && !empty($request->start_date)){
    
                    $sales=SellCenterSale::where('sale_type',1)->where('sell_center_id',session()->get('sellcenter')['id'])->whereDate('created_at', '>=', $request->start_date)
                                            ->whereDate('created_at', '<=', $request->end_date)
                                            ->orderBy('id','desc')->with('product')
                                            ->paginate($paginate);
             }else{
                  $sales=SellCenterSale::where('sale_type',1)->where('sell_center_id',session()->get('sellcenter')['id'])
                                        ->whereDate('created_at','<=',$request->end_date)
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
                $sale->sale_type = 1;
                $sale->price = $request->price;
                $sale->sale_quantity = floatval($request->quantity);
                $sale->quantity_type = $request->quantity_type;
                $sale->discount = $request->discount ?? 0;
                $sale->amount =  $request->amount ;
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
                $product->stock = $product->stock + $sale->sale_quantity;
                $product->stock = $product->stock  - floatval($request->quantity);
                $product->save();

                $sale->sell_center_id = session()->get('sellcenter')['id'];
                $sale->sell_center_product_id = $product->id;
                $sale->price = $request->price;
                $sale->sale_quantity = floatval($request->quantity);
                $sale->quantity_type = $request->quantity_type;
                $sale->discount = $request->discount ?? 0;
                $sale->amount =  $request->amount ;
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


     public function CompanySales(Request $request){

           $item= $request->item ?? 30 ;
           $sales=SellCenterSale:: where('sell_center_id',session()->get('sellcenter')['id'])->where('sale_type',2)->orderBy('id','desc')->select(DB::raw('invoice_no as invoice_no'))->groupBy('invoice_no')->paginate($item);
           foreach($sales as $sale){
             $sale->{'company_sales'}=SellCenterSale::where('invoice_no',$sale->invoice_no)->get();
           }
           return response()->json(['status' => 'SUCCESS',
                                    'sales' => $sales ,
                                  ]);
     }



     public function CompanySaleView($invoice_no){

           $sales=SellCenterSale:: where('sell_center_id',session()->get('sellcenter')['id'])
                                  ->where('sale_type',2)->where('invoice_no',$invoice_no)->with('product')->get();
           return response()->json(['status' => 'SUCCESS',
                                    'sales' => $sales ,
                                    'sellcenter' => SellCenter::where('id',session()->get('sellcenter')['id'])->first()
                                  ]);
     }

    
   
   
    public function CompanySaleShipment(Request $request){
           
           $validatedData = $request->validate([
                'invoice_no' => 'required ',
                'memo_no' => 'required ',
                'courier' => 'required',
            ]); 
        
           $sales=SellCenterSale:: where('sell_center_id',session()->get('sellcenter')['id'])->where('sale_type',2)->where('invoice_no',$request->invoice_no)->select('id','invoice_no')->get();
           foreach ($sales as $sale) {
               $exist_sale =  SellCenterSale::findOrFail($sale->id);
               $exist_sale->status="shipment" ;
               $exist_sale->memo_no=$request->memo_no ;
               $exist_sale->courier=$request->courier ;
               $exist_sale->save();
           }   
           
           $my_sale=SellCenterSale::where('sell_center_id',session()->get('sellcenter')['id'])->where('sale_type',2)->where('invoice_no',$request->invoice_no)->first();
           $msg = 'Assalamualikum, '. $my_sale->customer_name.' your order has been shiped on '.$request->courier.'. Order memo number is '.$request->memo_no .' Thanks from ' .session()->get('sellcenter')['name'];
           $this->sendShipmentMessageToCustomer($my_sale->customer_phone,$msg);
           return response()->json([
                                    'status' => 'OK',
                                    'message'=>'order shipmented successfully'
                                  ]);
    }



    public  function sendShipmentMessageToCustomer($phone,$sms){

        $api_key = "C200833360d1a324e46036.34232547";
        $contacts = $phone;
        $senderid = '8809612436107';
        $URL = "http://sms.esmsbd.com/smsapi?api_key=" . urlencode($api_key) . "&type=text&contacts=" . urlencode($contacts) . "&senderid=" . urlencode($senderid) . "&msg=" . urlencode($sms);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $URL);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 0);
        try {
            $output = $content = curl_exec($ch);
         //  print_r($output);
        } catch (Exception $ex) {
           return back();
        }
        return $output;
    }

     
   
    public function CompanySaleDelivery(Request $request){
           
        $validatedData = $request->validate([
             'invoice_no' => 'required ',
             'amount' => 'required ',
             'cash_in' => 'required',
         ]); 

        DB::transaction(function() use($request){

            $sales=SellCenterSale:: where('sell_center_id',session()->get('sellcenter')['id'])
                                ->where('sale_type',2)->where('invoice_no',$request->invoice_no)->select('id','invoice_no')->get();
            foreach ($sales as $sale) {
                $exist_sale =  SellCenterSale::findOrFail($sale->id);
                $exist_sale->status="delivered" ;
                $exist_sale->paid=$request->amount ;
                $exist_sale->save();
            }
            
            if ($request->amount > 0) {
                $credit = new SellCenterCredit();
                $credit->sell_center_id = session()->get('sellcenter')['id'];
                $credit->purpose = "company sale paid on delivery";
                $credit->amount =  intval($request->amount);
                $credit->comment = null;
                $credit->date = date('Y-m-d');
                $credit->credit_in = $request->cash_in;
                $credit->save();
            }
        });

        return response()->json([
                                'status' => 'OK',
                                 'message'=>'order delivered successfully'
                               ]);
    }



     public function CompanySalePrint($invoice_no){
           $sellcenter=SellCenter::where('id',session()->get('sellcenter')['id'])->first();
           $sales=SellCenterSale:: where('sell_center_id',session()->get('sellcenter')['id'])
                                  ->where('sale_type',2)->where('invoice_no',$invoice_no)->with('product')->get();

            foreach ($sales as $sale) {
                $sale->print_status = 1 ;
                $sale->save();
            }
    
            return view('sellcenter.invoice_print',compact('sales','sellcenter'));
     }

      
     public function FilterCompanySales(Request $request){
        $sales='';
        $item=$request->item??30;
        if ($request->search) {
            $sales=SellCenterSale::where('sell_center_id',session()->get('sellcenter')['id'])
                                    ->where('invoice_no',$request->search)
                                    ->orWhere('customer_phone','like','%'.$request->search.'%')
                                    ->where('sale_type',2)->orderBy('id','desc')->select(DB::raw('invoice_no as invoice_no'))->groupBy('invoice_no')->paginate($item);
            foreach($sales as $sale){
               $sale->{'company_sales'}=SellCenterSale::where('invoice_no',$sale->invoice_no)->get();
            }
        }else { 
        if(!empty($request->start_date) && empty($request->end_date)){
            
                $sales=SellCenterSale::where('sell_center_id',session()->get('sellcenter')['id'])
                                        ->whereDate('created_at','>=',$request->start_date)
                                        ->where('sale_type',2)->orderBy('id','desc')->select(DB::raw('invoice_no as invoice_no'))->groupBy('invoice_no')->paginate($item);
                foreach($sales as $sale){
                    $sale->{'company_sales'}=SellCenterSale::where('invoice_no',$sale->invoice_no)->get();
                }
             
        }
        elseif(!empty($request->end_date) && !empty($request->start_date)){

                $sales=SellCenterSale::where('sell_center_id',session()->get('sellcenter')['id'])
                                        ->whereDate('created_at', '>=', $request->start_date)
                                        ->whereDate('created_at', '<=', $request->end_date)
                                        ->where('sale_type',2)->orderBy('id','desc')->select(DB::raw('invoice_no as invoice_no'))->groupBy('invoice_no')->paginate($item);
                foreach($sales as $sale){
                    $sale->{'company_sales'}=SellCenterSale::where('invoice_no',$sale->invoice_no)->get();
                }

         }else{
                $sales=SellCenterSale::where('sell_center_id',session()->get('sellcenter')['id'])
                                        ->whereDate('created_at','<=',$request->end_date)
                                        ->where('sale_type',2)->orderBy('id','desc')->select(DB::raw('invoice_no as invoice_no'))->groupBy('invoice_no')->paginate($item);
                foreach($sales as $sale){
                    $sale->{'company_sales'}=SellCenterSale::where('invoice_no',$sale->invoice_no)->get();
                }
              
         }
        }
        return response()->json([
            'status' => 'SUCCESS',
            'sales' => $sales,
        ]);
 }



     public function CompanySaleStore(Request $request){
          // return $request->all();
            $validatedData = $request->validate([
                'customer_name' => 'required ',
                'customer_phone' => 'required|digits:11',
                'customer_address' => 'required',
            ]); 

            DB::transaction(function() use($request){
                      
                $max_id=SellCenterSale::max('id') ?? 1 ; 
                $invoice_no=$max_id + rand(111,999) ;
                $discount= 0 ;
                if ($request->discount > 0) {
                    $discount += $request->discount / count($request->products) ;
                }
                foreach ($request->products as  $sale_item) {

                    $sale = new SellCenterSale();
                    $sale->sell_center_id = session()->get('sellcenter')['id'];
                    $sale->sale_type = 2;
                    $sale->sell_center_product_id = $sale_item['product_id'];
                    $sale->invoice_no =$invoice_no;
                    $sale->customer_name =$request->customer_name;
                    $sale->customer_phone =$request->customer_phone;
                    $sale->customer_address =$request->customer_address;
                    $sale->size =$sale_item['size']?? null;
                    $sale->color =$sale_item['color'] ?? null;
                    $sale->comment =$request->comment ?? null;
                    $sale->courier =$request->courier ?? null;
                    $sale->price = $sale_item['price'];
                    $sale->sale_quantity = floatval($sale_item['quantity']);
                    $sale->quantity_type = "pice";
                    $sale->status = "Order Placed";
                    $sale->discount = $discount ;
                    $sale->paid = $request->paid ?? 0;
                    $sale->shipping_cost = $request->shipping_cost ?? 0;
                    $sale->amount =  $sale_item['total'] ;
                    $sale->save();

                    //update stock
                    $product=SellCenterProduct::find($sale_item['product_id']);
                    $product->stock= floatval($product->stock) -  floatval($sale_item['quantity']) ;
                    $product->save();

                }

                if ($request->paid > 0) {
                    $partial_paid = 0 ;
                    if ($request->partials_payment_amount > 0) {
                        $partial_paid +=$request->partials_payment_amount ;
                        $credit = new SellCenterCredit();
                        $credit->sell_center_id = session()->get('sellcenter')['id'];
                        $credit->purpose = "company sale partial";
                        $credit->amount =  intval($partial_paid);
                        $credit->comment = null;
                        $credit->date = date('Y-m-d');
                        $credit->credit_in = $request->partials_paid_by;
                        $credit->save();
                    }
                    
                    $credit = new SellCenterCredit();
                    $credit->sell_center_id = session()->get('sellcenter')['id'];
                    $credit->purpose = "company sale paid";
                    $credit->amount =  intval($request->paid) - intval($partial_paid);
                    $credit->comment = null;
                    $credit->date = date('Y-m-d');
                    $credit->credit_in = $request->paid_by;
                    $credit->save();
                }



            });
        


        //return success message
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'added successfully'
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
                                                    ->where('sell_center_id',session()->get('sellcenter')['id'])
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


  

    public function Couriers()
    {
        $couriers = SellCenterCourier::orderBy('id', 'desc')->paginate(50);
        return response()->json([
            'status' => 'SUCCESS',
            'couriers' => $couriers
        ]);
    }



    public function StoreCourier(Request $request){
        $this->validate($request, [
            'name' => 'required|unique:sell_center_couriers',
        ]);
        $courier = new SellCenterCourier();
        $courier->name = $request->name;
        $courier->save();
        return response()->json([
            'status' => 'SUCCESS',
            'message' => "add successfully"
        ]);
        
    }


    public function EditCourer($id)
    {
        $courier = SellCenterCourier::find($id);
            return response()->json([
                'status' => 'SUCCESS',
                'courier' => $courier
            ]);
    }


    public function UpdateCourier(Request $request, $id){
        $this->validate($request, [
            'name' => 'required|unique:sell_center_couriers,name,'.$id,
        ]);

        $courier = SellCenterCourier::find($id);
            $courier->name = $request->name;
            if ($courier->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => " Updated successfully"
                ]);
            }

    }


    public function ActiveCourier($id)
    {
        $courier = SellCenterCourier::find($id);
            $courier->status = 1;
            $courier->save();
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => ' active successfully'
                ]);
            
        
    }

    public function DeActiveCourier($id)
    {
        $courier = SellCenterCourier::find($id);
            $courier->status = 0;
            $courier->save();
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => ' de-active successfully'
                ]);
            
    }


    
    public function SearchCourier($data){
              
        $couriers = SellCenterCourier::where('name','like','%'.$data.'%')->paginate(20);
        return response()->json(['couriers'=>$couriers]);   
     }





 


}
