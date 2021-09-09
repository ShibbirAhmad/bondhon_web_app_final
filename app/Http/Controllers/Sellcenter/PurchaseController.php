<?php

namespace App\Http\Controllers\Sellcenter;

use App\Models\Purchase;
use App\Models\Supplier;
use App\Models\PurchaseItem;
use Illuminate\Http\Request;
use App\Models\SellCenterDebit;
use App\Models\SupplierPayment;
use App\Models\SellCenterProduct;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class PurchaseController extends Controller
{

    public function index(Request $request){
        $paginate = $request->item ?? 10;
        $purchases = Purchase::where('sell_center_id',session()->get('sellcenter')['id'])
                              ->orderBy('id', 'DESC')->with('supplier')->paginate($paginate);

            return response()->json([
                'status' => 'SUCCESS',
                'purchases' => $purchases
            ]);

    }

 
    public function store(Request $request){
        $this->validate($request, [
            'supplier_id' => 'required',
            'invoice_no' => 'required',
            'total' => 'required|numeric',
        ]);

        //first save the purchase information
        DB::transaction(function() use($request){
            $purchase = new Purchase();
            $purchase->sell_center_id = session()->get('sellcenter')['id'];
            $purchase->supplier_id = $request->supplier_id;
            $purchase->invoice_no = $request->invoice_no;
            $purchase->total = $request->total;
            $purchase->paid = $request->paid ?? 0;
            $purchase->purchase_date = $request->purchase_date;
            if($request->hasFile('memo')){
                $path=$request->file('memo')->store('file/memo', 'public');
                $purchase->file=$path;
            }
            $purchase->save();

            if(!empty($request->products)){
            //save the purchase item
            foreach ($request->products as $item) {
                $product = SellCenterProduct::where('id', $item['product_id'])->first();
                $product->stock = $product->stock + $item['quantity'];
                $product->save();
                $p_item = new PurchaseItem();
                $p_item->purchase_id = $purchase->id;
                $p_item->sell_center_product_id = $item['product_id'];
                $p_item->price = $item['price'];
                $p_item->quantity = $item['quantity'];
                $p_item->save();

             }
            }

            //save a supplier paid amount
            if($purchase->paid>0){
                    $supplier_payment=new SupplierPayment();
                    $supplier_payment->supplier_id=$request->supplier_id;
                    $supplier_payment->amount=$request->paid;
                    $supplier_payment->date=$request->purchase_date;
                    $supplier_payment->paid_by=$request->paid_by;
                    $supplier_payment->save();
            }

            //create a debit
            if($request->paid>0){
                    $debit = new SellCenterDebit();
                    $debit->sell_center_id = session()->get('sellcenter')['id'];
                    $debit->purpose ="product purchase";
                    $debit->debit_from=$request->paid_by;
                    $debit->amount = $request->paid;
                    $debit->comment = "product purchase paid Amount'$request->paid'";
                    $debit->date = $request->purchase_date;
                    $debit->save();
            }
        });
       //send message to supplier
    //    $supplier = Supplier::findOrFail($request->supplier_id);
    //    Supplier::sendNewPurchaseMessage($supplier,$request->total,$request->invoice_no) ;

      return response()->json([
            'status' => 'SUCCESS',
            'message' => 'new purchase  added'
        ]);

    }


    public function details($id){
        $purchase=Purchase::find($id);
        $details=PurchaseItem::where('purchase_id',$id)->with(['product'])->get();
         return response()->json([
            'status'=>'SUCCESS',
            'purchase'=>$purchase,
            'details'=>$details,
            'supplier'=>Supplier::where('id',$purchase->supplier_id)->first(),
        ]);
    }




    public function  search_according_data($search){

        $purchases = Purchase::where('sell_center_id',session()->get('sellcenter')['id'])->where('invoice_no','like', '%' . $search . '%')
                        ->orderBy('id', 'DESC')->with('supplier')
                        ->paginate(10);

        return response()->json([
            'status'=>'OK',
            'purchases'=>$purchases
        ]);
    }




    public function  according_date_wise(Request $request){

        $purchases='';
        $paginate=$request->item??10;
        if(!empty($request->start_date) && empty($request->end_date)){

                $purchases=Purchase::where('sell_center_id',session()->get('sellcenter')['id'])->whereDate('created_at','=',$request->start_date)->with('supplier')
                            ->paginate($paginate);

        }
        elseif(!empty($request->end_date) && !empty($request->start_date)){

                $purchases=Purchase::where('sell_center_id',session()->get('sellcenter')['id'])->whereDate('created_at', '>=', $request->start_date)
                                ->whereDate('created_at', '<=', $request->end_date)->with('supplier')
                                ->paginate($paginate);
        }else{

            $purchases=Purchase::where('sell_center_id',session()->get('sellcenter')['id'])->whereDate('created_at','=',$request->end_date)->with('supplier')
                    ->paginate($paginate);

        }
            return response()->json([
                        'status'=>'OK',
                        'purchases'=>$purchases

    ]);


    }

    public function uploadFile(Request $request){

        $purchase=Purchase::where('id',$request->id)->first();
        if($request->hasFile('file')){
            $path=$request->file('file')->store('file/memo','public');
            $purchase->file=$path;
            $purchase->save();
            return response()->json('ok');
        }

    }



}
