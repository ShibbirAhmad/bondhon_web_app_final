<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Credit;
use App\Models\Loan;
use App\Models\Loaner;
use App\Models\LoanPaid;
use Illuminate\Support\Facades\DB;
use Barryvdh\DomPDF\Facade as PDF;

class LoanController extends Controller
{



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index( Request $request)
    {


        $items=$request->item ?? 20;
        $loan=Loaner::orderBy('id','DESC')->paginate($items);
        $total_loan= DB::table('loans')->sum('amount');
        $total_loan_paid= DB::table('loan_paids')->sum('amount');
        $due_amount= intval($total_loan) - intval($total_loan_paid);

        foreach($loan as $item){

            $item->{'taken_amount'}=Loan::where('loaner_id',$item->id)->sum('amount');
            $item->{'paid_amount'}=LoanPaid::where('loaner_id',$item->id)->sum('amount');
        }


       return \response()->json([

            'success'=>'OK',
            'loan'=>$loan,
            'total_loan' => number_format($total_loan),
            'total_loan_paid' => number_format($total_loan_paid),
            'due_amount' => number_format($due_amount) ,
        ]);

    }



    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'name' => 'required',
            'mobile_no' => 'required|digits:11|unique:loaners',
            'email'=> 'required|email|unique:loaners',
            'address'=>"required",
          ]);

          //first find the loaner
            $loaner=new Loaner();
            $loaner->name=$request->name;
            $loaner->email=$request->email;
            $loaner->mobile_no=$request->mobile_no;
            $loaner->address=$request->address;
            $loaner->save();

              return \response()->json([
                 'success'=>'OK',
                 'message'=>'Loaner Successfully'

            ]);
    }

    

    public function editLoanerInfo(Request $request,$id)
    {

        $validatedData = $request->validate([
            'name' => 'required',
            'mobile_no' => 'required|digits:11|unique:loaners,mobile_no,'.$id,
            'email'=> 'required|email|unique:loaners,email,'.$id,
            'address'=>"required",
          ]);

          //first find the loaner
            $loaner= Loaner::findOrFail($id);
            $loaner->name=$request->name;
            $loaner->email=$request->email;
            $loaner->mobile_no=$request->mobile_no;
            $loaner->address=$request->address;
            $loaner->save();

              return \response()->json([
                 'success'=>'OK',
                 'message'=>'updated successfully'

            ]);
    }


    public function getLoaner($id){
        $loaner=Loaner::findOrFail($id);
        return response()->json([
            'status' => 'OK',
            'loaner' => $loaner,
        ]);
    }



    public function loaners(){
        $loaners=Loaner::all();
        return \response()->json($loaners);
    }



    public function loanersdetails($id){
        $loans=Loan::where('loaner_id',$id)->get();
        $loanPaid=LoanPaid::where('loaner_id',$id)->get();
        return \response()->json([
            'loans'=>$loans,
            'loanPaid'=>$loanPaid
        ]);
    }




     public  function download_all_record(){

        $loans=Loaner::orderBy('id','DESC')->get();
        $total_loan= DB::table('loans')->sum('amount');
        $total_loan_paid= DB::table('loan_paids')->sum('amount');
        $due_amount= intval($total_loan) - intval($total_loan_paid);

        foreach($loans as $item){

            $item->{'taken_amount'}=Loan::where('loaner_id',$item->id)->sum('amount');
            $item->{'paid_amount'}=LoanPaid::where('loaner_id',$item->id)->sum('amount');

        }

            $pdf=PDF::loadView('admin.pdf.all_loan_record',compact('loans','total_loan_paid','total_loan','due_amount'));
            return $pdf->stream();

      }


     // function for download loaner loan history
      public function download_loan_history($id){

            $loaner = Loaner::findOrFail($id);
            $loaner->{'taken_amount'}=Loan::where('loaner_id',$loaner->id)->get();
            $total_loan=Loan::where('loaner_id',$loaner->id)->sum('amount');
            $pdf=PDF::loadView('admin.pdf.loaner_loan_record',compact('loaner','total_loan'));
            return $pdf->stream();


       }


    // function for download loaner loan paid history
      public function download_loan_paid_history($id){

            $loaner = Loaner::findOrFail($id);
            $loaner->{'paid_amount'}=LoanPaid::where('loaner_id',$loaner->id)->get();
            $total_loan_paid=LoanPaid::where('loaner_id',$loaner->id)->sum('amount');
            // return $loaner ;
            $pdf=PDF::loadView('admin.pdf.loaner_loan_paid_record',compact('loaner','total_loan_paid'));
            return $pdf->stream();


       }




}
