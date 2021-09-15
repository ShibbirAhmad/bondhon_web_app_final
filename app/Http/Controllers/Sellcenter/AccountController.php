<?php

namespace App\Http\Controllers\Sellcenter;

use App\Models\Team;
use App\Models\Supplier;
use Illuminate\Http\Request;
use App\Exports\DebitExport ;
use App\Exports\CreditExport ;
use App\Models\BillStatement ;
use App\Models\EmployeeSalary;
use App\Models\Account_purpose;
use App\Models\SellCenterDebit;
use App\Models\SupplierPayment;
use App\Models\SellCenterCredit;
use App\Models\BillPaidStatement;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel ;


class AccountController extends Controller
{

    public function get_credit(Request $request){

            $paginate=$request->item??20;
              if($request->status=='all'){
                    $crdits=SellCenterCredit::where('sell_center_id',session()->get('sellcenter')['id'])->orderBy('id','DESC')->paginate($paginate);
                    return response()->json($crdits);
             }
             if($request->status=='search'){
                $crdits=SellCenterCredit::where('sell_center_id',session()->get('sellcenter')['id'])->where('purpose', 'like', '%' . $request->search . '%')
                                ->orWhere('comment', 'like', '%' . $request->search . '%')
                                ->orWhere('amount', 'like', '%' . $request->search . '%')
                                ->orWhere('date', 'like', '%' . $request->search . '%')
                                ->orderBy('id','DESC')
                                ->paginate($paginate);
                return response()->json($crdits);
         }
         if($request->status=='filter'){

            if(!empty($request->start_date) && empty($request->end_date)){
                $crdits=SellCenterCredit::where('sell_center_id',session()->get('sellcenter')['id'])->whereDate('date','=',$request->start_date)
                                ->orderBy('id','DESC')
                                ->paginate($paginate);
            }else{
                $crdits=SellCenterCredit::where('sell_center_id',session()->get('sellcenter')['id'])->whereDate('date','>=',$request->start_date)
                                ->whereDate('date','<=',$request->end_date)
                                ->orderBy('id','DESC')
                                ->paginate($paginate);
            }

            return response()->json($crdits);

         }

   
    }

    public function store_credit(Request $request)
    {

    //    return $request->all();
        $validatedData = $request->validate([
            'date'=>'required|before:tomorrow',
            'purpose' => 'required',
            'amount' => 'required|numeric',
            'credit_in' => 'required'
        ]);

        DB::transaction( function() use($request){

            $credit = new SellCenterCredit();
            $credit->sell_center_id = session()->get('sellcenter')['id'];
            $credit->purpose = $request->purpose;
            $credit->amount = $request->amount;
            $credit->comment = $request->comment ?? null;
            $credit->date = $request->date;
            $credit->credit_in=$request->credit_in;
            $credit->save() ;

        });

            return response()->json([
                'status' => 'SUCCESS',
                'message' => "credit was successfully created",
            ]);


    }


    public function edit_credit($id)
    {
           $credit=SellCenterCredit::findOrFail($id);
            return response()->json([
                'status' => 'SUCCESS',
                'credit' => $credit ,
            ]);
    }


    public function update_credit(Request $request,$id){

        $validatedData = $request->validate([
            'date'=>'required|before:tomorrow',
            'purpose' => 'required',
            'amount' => 'required',
            'credit_in' => 'required',
        ]);

        $credit =SellCenterCredit::find($id);
        $credit->purpose = $request->purpose;
        $credit->amount = $request->amount;
        $credit->comment = $request->comment ?? null;
        $credit->date = $request->date;
        $credit->credit_in = $request->credit_in;
        if ($credit->save()) {
            return response()->json([
                'status' => 'SUCCESS',
                'message' => "credit was successfully updated",
            ]);
        }
  
 
    }


    public function destroy_credit(Request $request, $id){
            $credit=SellCenterCredit::find($id);
            if($credit){
              $credit->delete();
                    return response()->json([
                        'status' => 'SUCCESS',
                        'message' => "credit was successfully deleted",
                    ]);

            }

    }





    //start debit method

    public function get_debit(Request $request){
            $paginate=$request->item??20;
              if($request->status=='all'){
                    $debits=SellCenterDebit::where('sell_center_id',session()->get('sellcenter')['id'])->orderBy('id','DESC')->paginate($paginate);
                    return response()->json($debits);
             }
             if($request->status=='search'){
                $debits=SellCenterDebit::where('sell_center_id',session()->get('sellcenter')['id'])->where('purpose', 'like', '%' . $request->search . '%')
                                ->orWhere('comment', 'like', '%' . $request->search . '%')
                                ->orWhere('amount', 'like', '%' . $request->search . '%')
                                ->orWhere('date', 'like', '%' . $request->search . '%')
                                ->orderBy('id','DESC')
                                ->paginate($paginate);
                return response()->json($debits);
         }
         if($request->status=='filter'){


            if(!empty($request->start_date) && empty($request->end_date)){
                $debits=SellCenterDebit::where('sell_center_id',session()->get('sellcenter')['id'])->whereDate('date','=',$request->start_date)
                                ->orderBy('id','DESC')
                                ->paginate($paginate);
            }else{
                $debits=SellCenterDebit::where('sell_center_id',session()->get('sellcenter')['id'])->whereDate('date','>=',$request->start_date)
                                ->whereDate('date','<=',$request->end_date)
                                ->orderBy('id','DESC')
                                ->paginate($paginate);
            }

            return response()->json($debits);

         }

    }

    public function store_debit(Request $request)
    {
    //   return $request->all();
        $validatedData = $request->validate([
          'date'=>'required|before:tomorrow',
          'purpose' => 'required',
          'amount' => 'required',
          'debit_from'=>'required',
        ]);

        DB::transaction(function() use($request){
            
            //inserting debit
            $debit = new SellCenterDebit();
            $debit->sell_center_id = session()->get('sellcenter')['id'];
            $debit->purpose = $request->purpose;
            $debit->debit_from=$request->debit_from;
            $debit->amount = $request->amount;
            $debit->comment = $request->comment ?? null;
            $debit->date = $request->date;
            $debit->save();


            
           //save a supplier paid amount
           if(!empty($request->supplier_id)){

            $supplier=Supplier::where('id',$request->supplier_id)->first();
            $supplier_payment=new SupplierPayment();
            $supplier_payment->supplier_id=$request->supplier_id;
            $supplier_payment->amount=$request->amount;
            $supplier_payment->date=$request->date;
            $supplier_payment->paid_by=$debit->debit_from . '('. $debit->comment.')';
            $supplier_payment->save();
            
            //update debit comment
            $debit->comment = $debit->comment.'('. $supplier->name .')';
            $debit->save();
            Supplier::SendMessageToSupplier($supplier,$supplier_payment->amount);


         }
         

        });
          return response()->json([
                'status' => 'SUCCESS',
                'message' => "successfully created",
            ]);
    }


    public function edit_debit(Request $request,$id)
    {
        if($request->ajax()){
            $debit=SellCenterDebit::find($id);
            if($debit){
             return response()->json([
                 'status' => 'SUCCESS',
                 'debit' => $debit ,
             ]);
            }
         }else{
             return abort(404);
         }
    }


    public function update_debit(Request $request,$id)
    {
        if($request->ajax()){
            $validatedData = $request->validate([
                'date'=>'required|before:tomorrow',
                'purpose' => 'required',
                'amount' => 'required',
            ]);

            $debit =SellCenterDebit::find($id);
            $debit->purpose = $request->purpose;
            $debit->amount = $request->amount;
            $debit->comment = $request->comment ?? null;
            $debit->date = $request->date;
            if ($debit->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => "debit was successfully updated",
                ]);
            }
        }
        else{
            return abort(404);
        }
    }


    public function destroy_debit(Request $request,$id)
    {
            $debit=SellCenterDebit::find($id);
            if($debit){
               $debit->delete() ;
                    return response()->json([
                        'status' => 'SUCCESS',
                        'message' => "debit was successfully deleted",
                    ]);

            }


    }






    public  function get_purpose_list(){

            $purposes = Account_purpose::orderBy('id','DESC')->paginate(10) ;

            return response()->json([
                    "status" => "OK",
                    "purposes" => $purposes ,
            ]);
     }


     public  function debit_purpose_list(){
            $purposes = Account_purpose::where('type','debit')->orderBy('id','DESC')->get() ;
            return response()->json([
                    "status" => "OK",
                    "debit_purposes" => $purposes ,
            ]);
     }

        public  function credit_purpose_list(){
            $purposes = Account_purpose::where('type','credit')->orderBy('id','DESC')->get() ;
            return response()->json([
                    "status" => "OK",
                    "credit_purposes" => $purposes ,
            ]);
     }



    public  function add_purpose(Request $request){

         $validatedData = $request->validate([
                'text' => 'required|unique:account_purposes',
                'type' => 'required',
            ]);
        $purpose = new Account_purpose() ;
        $purpose->text=$request->text ;
        $purpose->type=$request->type ;
        $purpose->save();
        return response()->json([
                "status" => "OK",
                "message" => "new purpose added" ,
        ]);

    }


    public  function get_edit_purpose($id){

        $purpose = Account_purpose::find($id);

        return response()->json([
                "status" => "OK",
                "purpose" => $purpose ,
        ]);
    }



    public function update_purpose(Request $request, $id){

        $validatedData = $request->validate([
                'text' => 'required|unique:account_purposes,text,'.$id,
                'type' => 'required' ,
            ]);
                $purpose = Account_purpose::find($id) ;
                $purpose->text=$request->text ;
                $purpose->type=$request->type ;
                $purpose->save();
                return response()->json([
                        "status" => "OK",
                        "message" => "purpose edited " ,
                ]);

    }

    public function accountPurpose(){

            $purpose=Account_purpose::all();
            return response()->json($purpose);
    }

    public function employeeList(){
        $employeies=Team::where('status',1)->orderBy('position','ASC')->get();
        return response()->json($employeies);
    }



    public   function export_credit(){

        return   Excel::download(new CreditExport(),'credit.xlsx') ;
    }

    public   function export_debit(){

        return Excel::download(new DebitExport(),'debit.xlsx') ;
    }





}
