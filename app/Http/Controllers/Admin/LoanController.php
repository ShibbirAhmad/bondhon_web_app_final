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


        $items=$request->item ?? 10;
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


    public function create()

    {

    }


    public function store(Request $request)
    {

        $validatedData = $request->validate([

            'name' => 'required',
            'address' => 'required|digits:11',
            'date'=>"required",
            'purpose'=>"required",
            'amount'=>"required",
            'address'=>"required",

          ]);


          //first find the loaner

           $loaner=Loaner::where('mobile_no',$request->mobile_no)->first();
          if(empty($loaner)){

                $loaner=new Loaner();
                $loaner->name=$request->name;
                $loaner->mobile_no=$request->mobile_no;
                $loaner->address=$request->address;
                $loaner->save();
          }

          $loan=new Loan();
          $loan->loaner_id=$loaner->id;
          $loan->purpose=$request->purpose;
          $loan->amount=$request->amount;
          $loan->date=$request->date;
          if( $loan->save()){

            $credit = new Credit();
            $credit->purpose = "Loan From ". $request->name;
            $credit->amount = $request->amount;
            $credit->comment = $request->purpose ?? null;
            $credit->date = $request->date;
            $credit->balance_id= 9 ;
            $credit->insert_admin_id=session()->get('admin')['id'];
            $credit->save();
              return \response()->json([

                 'success'=>'OK',
                 'message'=>'Loan Add Successfully'

            ]);
          }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
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

    public function storeloan(Request $request, $id){


        $loaner=Loaner::find($id);
        $loan=new Loan();
        $loan->loaner_id=$loaner->id;
        $loan->purpose=$request->purpose;
        $loan->amount=$request->amount;
        $loan->date=date('Y-m-d');
        if( $loan->save()){
        $credit = new Credit();
          $credit->purpose = "Loan From ". $loaner->name;
          $credit->amount = $request->amount;
          $credit->comment = $request->purpose ?? null;
          $credit->date = date('Y-m-d');
          $credit->balance_id= 9 ;
          $credit->insert_admin_id=session()->get('admin')['id'];
          $credit->save();
            return \response()->json([
              'success'=>'OK',
              'message'=>'Loan Add Successully'
          ]);
        }

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
