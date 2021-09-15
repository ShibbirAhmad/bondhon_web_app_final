<?php

namespace App\Http\Controllers\Sellcenter;

use App\Models\Supplier;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Purchase;
use App\Models\SupplierPayment;
use App\Exports\SupplierExport;
use Maatwebsite\Excel\Facades\Excel;
use Barryvdh\DomPDF\Facade as PDF;

class SupplierController extends Controller
{


    public function index(Request $request)
    {
        $suppliers = Supplier::where('sell_center_id',session()->get('sellcenter')['id'])->orderBy('id', 'DESC')->paginate(20);
        return response()->json([
            'status' => 'SUCCESS',
            'suppliers' => $suppliers
        ]);
    }



    public function store(Request $request)
    {

       // return  $request->all();
        $validatedData = $request->validate([
            'name' => 'required ',
            'address' => 'required',
            'phone' => 'required|unique:suppliers|digits:11',
        ]);
        $supplier = new Supplier();
        $supplier->sell_center_id = session()->get('sellcenter')['id'];
        $supplier->name = $request->name;
        $supplier->address = $request->address;
        $supplier->phone = $request->phone;
        $supplier->save();
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'supplier added successfully'
        ]);
        
    }



    public function search_supplier($data){

        $suppliers = Supplier:: where('sell_center_id',session()->get('sellcenter')['id'])
                         ->orWhere('name','like','%'.$data.'%')
                        ->orWhere('phone','like','%'.$data.'%')
                        ->orWhere('address','like','%'.$data.'%')
                        ->paginate(10);

            return response()->json([
            "status" => "OK",
            'suppliers' => $suppliers ,
            ]);
    }



    public function edit($id)
    {
        $supplier = Supplier::findOrFail($id);
        if ($supplier) {
            return response()->json([
                'status' => 'SUCCESS',
                'supplier' => $supplier
            ]);
        }
    }


    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required ',
            'address' => 'required',
            'phone' => 'required|digits:11|unique:suppliers,phone,'.$id,

        ]);
        $supplier = Supplier::find($id);

        if ($supplier) {
            $supplier->name = $request->name;
            $supplier->address = $request->address;
            $supplier->phone = $request->phone;
            if ($supplier->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'supplier updated successfully'
                ]);
            }
        }

    }



    public function active($id)
    {
        $supplier = Supplier::find($id);
        if ($supplier) {
            $supplier->status = 1;
            if ($supplier->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'supplier active successfully'
                ]);
            }
        }
    }

    public function deActive($id)
    {
        $supplier = Supplier::find($id);
        if ($supplier) {
            $supplier->status = 0;
            if ($supplier->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'supplier de-active successfully'
                ]);
            }
        }
    }

    public function supplierAmountList($id){

         $total_paid_item=SupplierPayment::where('supplier_id',$id)->orderBy('date','DESC')->get();
         $purchase_items=Purchase::where('supplier_id',$id)->with('purchaseItems')->get();
         $supplier_amount=array();
         $supplier_amount['total_purchase_amount']=Purchase::where('supplier_id',$id)->sum('total');
         $supplier_amount['total_paid_amount']=$total_paid_item->sum('amount');
         $supplier=Supplier::where('id',$id)->first();

         return response()->json([
             'amount'=>$supplier_amount,
             'paid_items'=>$total_paid_item,
             'supplier'=>$supplier,
             'purchase_items'=>$purchase_items
         ]);
    }

    public function supplierList(){
            $suppliers=Supplier::where('sell_center_id',session()->get('sellcenter')['id'])->where('status',1)->get();
            return response()->json($suppliers);
    }


    public function  export_supplier(){
        return Excel::download(new SupplierExport, 'supplier.xlsx');
    }

    public function pdfSupplierPurchase($id){

         $p_items=Purchase::where('supplier_id',$id)->orderBy('id','DESC')->with('purchaseItems')->get();
         $supplier=Supplier::where('id',$id)->first();

         $total_paid_items=SupplierPayment::where('supplier_id',$id)->orderBy('date','DESC')->get();
         $supplier_amount=array();
         $supplier_amount['total_purchase_amount']=intval(Purchase::where('supplier_id',$id)->sum('total'));
         $supplier_amount['total_paid_amount']=intval($total_paid_items->sum('amount'));
         $supplier_amount['total_due_amount']= $supplier_amount['total_purchase_amount']-$supplier_amount['total_paid_amount'];
         $pdf=PDF::loadView('admin.pdf.supplier',compact('p_items','supplier','supplier_amount'));

          return $pdf->stream();
    }

    public function pdfSupplierAmount($id){
        $total_paid_items=SupplierPayment::where('supplier_id',$id)->orderBy('date','DESC')->get();
         $supplier=Supplier::where('id',$id)->first();
         $supplier_amount=array();
         $supplier_amount['total_purchase_amount']=intval(Purchase::where('supplier_id',$id)->sum('total'));
         $supplier_amount['total_paid_amount']=intval($total_paid_items->sum('amount'));
         $supplier_amount['total_due_amount']= $supplier_amount['total_purchase_amount']-$supplier_amount['total_paid_amount'];
         $pdf=PDF::loadView('admin.pdf.supplierPayment',compact('total_paid_items','supplier','supplier_amount'));

         return $pdf->stream();
    }















}
