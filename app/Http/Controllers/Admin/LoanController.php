<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Credit;
use App\Models\Loan;
use App\Models\Loaner;
use App\Models\LoanPaid;

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

        foreach($loan as $item){
            $item->{'taken_amount'}=Loan::where('loaner_id',$item->id)->sum('amount');
            $item->{'paid_amount'}=LoanPaid::where('loaner_id',$item->id)->sum('amount');    
    
        }
     return \response()->json([
            'success'=>'OK',
            'loan'=>$loan
        ]);

    }

  
    public function create()
    {
        //
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
            $credit->credit_in="Cash";
            $credit->insert_admin_id=session()->get('admin')['id'];
            $credit->save();
              return \response()->json([
                'success'=>'OK',
                'message'=>'Loan Add Successully'
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
          $credit->credit_in="Cash";
          $credit->insert_admin_id=session()->get('admin')['id'];
          $credit->save();
            return \response()->json([
              'success'=>'OK',
              'message'=>'Loan Add Successully'
          ]);
        }

    }
}
