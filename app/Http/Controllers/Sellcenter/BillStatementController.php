<?php

namespace App\Http\Controllers\Sellcenter;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\SellCenterBillStatement;
use App\Models\SellCenterBillPaidStatement;


class BillStatementController extends Controller
{

  
    public function credit_statement_list(){

      $bills=SellCenterBillStatement::where('sell_center_id',session()->get('sellcenter')['id'])->where('type','credit')->with('bills')->get();
      return response()->json([
            'success' => 'OK',
            'bills' => $bills
          ]);
    }



   public function debit_statement_list(){

            $bills=SellCenterBillStatement::where('sell_center_id',session()->get('sellcenter')['id'])->where('type','debit')->with('bills')->get();
            return response()->json([
                   'success' => 'OK',
                   'bills' => $bills
                ]);
    }


    public function store(Request $request){

            $validatedData = $request->validate([
            'name' => 'required',
            'type' => 'required',
          ]);
            $bill=new SellCenterBillStatement();
            $bill->sell_center_id=session()->get('sellcenter')['id'];
            $bill->name=$request->name;
            $bill->type=$request->type;
            $bill->save();
            return response()->json([
                'status'=>'OK',
                'message'=>'Added successfully'
            ]);
       }



    public function bill_statement_details($id){

        $bill_statement=SellCenterBillStatement::findOrFail($id);
        $bill_history=SellCenterBillPaidStatement::where('bill_statement_id',$id)->paginate(20);
        $total_bill=SellCenterBillPaidStatement::where('bill_statement_id',$id)->sum('amount');

         return response()->json([
                'bill_statement'=>$bill_statement,
                'bill_history'=>$bill_history,
                'total_bill'=>$total_bill,
           ]);
    }





}
