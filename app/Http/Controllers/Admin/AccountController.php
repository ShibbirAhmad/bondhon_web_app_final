<?php

namespace App\Http\Controllers\Admin;

use App\Models\Team;
use App\Models\Debit;
use App\Models\Admin ;
use App\Models\Credit;
use App\Models\Project;
use App\Models\Investor;
use App\Models\AdminProfit;
use App\Models\ProjectCost;
use App\Models\AdminAccount;
use Illuminate\Http\Request;
use App\AccountCreditPurpose;
use App\Exports\DebitExport ;
use App\Models\ProjectProfit;
use App\Exports\CreditExport ;
use App\Models\BillStatement ;
use App\Models\EmployeeSalary;
use App\Models\Account_purpose;
use App\Models\InvestmentReturn;
use App\Models\BillPaidStatement;
use App\Models\InvestorProfitPaid;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Investment;
use Intervention\Image\Facades\Image;
use Maatwebsite\Excel\Facades\Excel ;

class AccountController extends Controller
{

    public function __construct()
    {
        $this->middleware('admin');
    }


    //this method return all type of credit data
    // method return data based on $request->satus;

    public function get_credit(Request $request)
    {

        if($request->ajax()){
            $paginate=$request->item??20;
              if($request->status=='all'){
                    $crdits=Credit::orderBy('id','DESC')->with('admin')->paginate($paginate);
                    return response()->json($crdits);
             }
             if($request->status=='search'){
                $crdits=Credit::where('purpose', 'like', '%' . $request->search . '%')
                                ->orWhere('comment', 'like', '%' . $request->search . '%')
                                ->orWhere('amount', 'like', '%' . $request->search . '%')
                                ->orWhere('date', 'like', '%' . $request->search . '%')
                                ->orderBy('id','DESC')->with('admin')
                                ->paginate($paginate);
                return response()->json($crdits);
         }
         if($request->status=='filter'){


            if(!empty($request->start_date) && empty($request->end_date)){
                $crdits=Credit::whereDate('date','=',$request->start_date)
                                ->orderBy('id','DESC')->with('admin')
                                ->paginate($paginate);
            }else{
                $crdits=Credit::whereDate('date','>=',$request->start_date)
                                ->whereDate('date','<=',$request->end_date)
                                ->orderBy('id','DESC')->with('admin')
                                ->paginate($paginate);
            }

            return response()->json($crdits);

         }

        }else{
            return abort(404);
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
            //make signature image
            $name='debit-signature-'.time().'.png';
            Image::make(file_get_contents($request->signature))->save(public_path('storage/images/creditSignature/').$name);

            //finding purpose
            $purpose=Account_purpose::where('id',$request->purpose)->first();
            $credit = new Credit();
            $credit->purpose = $purpose->text;
            $credit->amount = $request->amount;
            $credit->comment = $request->comment ?? null;
            $credit->date = $request->date;
            $credit->credit_in=$request->credit_in;
            $credit->insert_admin_id=session()->get('admin')['id'];
            $credit->signature='images/creditSignature/'.$name;
            $credit->save() ;
            //project profit inserting
            if(!empty($request->project_id)){
                $project=Project::where('id',$request->project_id)->first();
                $project_profit=new ProjectProfit();
                $project_profit->project_id=$project->id;
                $project_profit->admin_id=session()->get('admin')['id'];
                $project_profit->amount=  $credit->amount;
                $project_profit->credit_in=  $credit->credit_in;
                $project_profit->date= $credit->date;
                $project_profit->comment=$credit->comment;
                $project_profit->save();
                $credit->comment = $credit->comment.'('.$project->name .')';
                $credit->save();
            }

            //member monthly collection inserting
            if(!empty($request->admin_id)){
                $admin=Admin::where('id',$request->admin_id)->first();
                $id=$admin->id ;
                $member_name=$admin->name  ;
                $member= new AdminAccount();
                $member->admin_id=$id;
                $member->amount=$request->amount;
                $member->date= $request->date;
                $member->month= $request->month;
                $member->comment=$request->comment;
                $member->save();
                $credit->comment = $credit->comment.'('.$member_name .')';
                $credit->save();
                Admin::sendConfirmationMessage($admin,$credit->amount,$credit->date);
                //send mail to member
            }

            //investor payment inserting
            if(!empty($request->investor_id)){
                $investor=Investor::where('id',$request->investor_id)->first();
                $investor_invest_add=new Investment();
                $investor_invest_add->investor_id=$investor->id;
                $investor_invest_add->amount=  $request->amount;
                $investor_invest_add->date= $request->date;
                $investor_invest_add->month= $request->month;
                $investor_invest_add->purpose=$request->comment;
                $investor_invest_add->save();
                $credit->comment = $credit->comment.'('. $investor->name .')';
                $credit->save();
                Investor::InvestmentWelcome($investor,$credit->amount,$credit->date);
            }


        });

            return response()->json([
                'status' => 'SUCCESS',
                'message' => "credit was successfully created",
            ]);


    }


    public function edit_credit(Request $request,$id)
    {

        if($request->ajax()){
           $credit=Credit::find($id);
           if($credit){
            return response()->json([
                'status' => 'SUCCESS',
                'credit' => $credit ,
            ]);
           }
        }else{
            return abort(404);
        }
    }


    public function update_credit(Request $request,$id)
    {

        if($request->ajax()){
        $validatedData = $request->validate([
            'date'=>'required|before:tomorrow',
            'purpose' => 'required',
            'amount' => 'required',
        ]);

        $credit =Credit::find($id);
        $credit->purpose = $request->purpose;
        $credit->amount = $request->amount;
        $credit->comment = $request->comment ?? null;
        $credit->date = $request->date;
        if ($credit->save()) {
            return response()->json([
                'status' => 'SUCCESS',
                'message' => "credit was successfully updated",
            ]);
        }
    }
    else{
        return abort(404);
    }
    }


    public function destroy_credit(Request $request, $id)
    {
            $credit=Credit::find($id);
            if($credit){
              $credit->delete();
                    return response()->json([
                        'status' => 'SUCCESS',
                        'message' => "credit was successfully deleted",
                    ]);

            }



    }





    //start debit method

    public function get_debit(Request $request)
    {
        if($request->ajax()){
            $paginate=$request->item??20;
              if($request->status=='all'){
                    $debits=Debit::orderBy('id','DESC')->with(['admin'])->paginate($paginate);
                    return response()->json($debits);
             }
             if($request->status=='search'){
                $debits=Debit::where('purpose', 'like', '%' . $request->search . '%')
                                ->orWhere('comment', 'like', '%' . $request->search . '%')
                                ->orWhere('amount', 'like', '%' . $request->search . '%')
                                ->orWhere('date', 'like', '%' . $request->search . '%')
                                ->orderBy('id','DESC')->with(['purpose','admin'])
                                ->paginate($paginate);
                return response()->json($debits);
         }
         if($request->status=='filter'){


            if(!empty($request->start_date) && empty($request->end_date)){
                $debits=Debit::whereDate('date','=',$request->start_date)
                                ->orderBy('id','DESC')->with(['admin'])
                                ->paginate($paginate);
            }else{
                $debits=Debit::whereDate('date','>=',$request->start_date)
                                ->whereDate('date','<=',$request->end_date)
                                ->orderBy('id','DESC')->with(['admin'])
                                ->paginate($paginate);
            }

            return response()->json($debits);

         }

        }else{
            return abort(404);
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
        //   'signature'=>'required'
        ]);

        DB::transaction(function() use($request){
                //make signature image
                $name='debit-signature-'.time().'.png';
                Image::make(file_get_contents($request->signature))->save(public_path('storage/images/debitSignature/').$name);

                //finding purpose
                $purpose=Account_purpose::where('id',$request->purpose)->first();
                //inserting debit
                $debit = new Debit();
                $debit->purpose = $purpose->text;
                $debit->debit_from=$request->debit_from;
                $debit->amount = $request->amount;
                $debit->comment = $request->comment ?? null;
                $debit->date = $request->date;
                $debit->insert_admin_id=session()->get('admin')['id'];
                $debit->signature='images/debitSignature/'.$name;
                $debit->save();

                //project inserting
                if(!empty($request->project_id)){
                $project=Project::where('id',$request->project_id)->first();
                $project_cost=new ProjectCost();
                $project_cost->project_id=$project->id;
                $project_cost->admin_id=session()->get('admin')['id'];
                $project_cost->amount=  $request->amount;
                $project_cost->date= $request->date;
                $project_cost->comment=$request->comment;
                $project_cost->paid_by=$debit->debit_from;
                $project_cost->save();
                //send message to project manager
                Admin::sendCostConfimationMessage($project,$request->amount);
                $debit->comment = $debit->comment.'('.$project->name .')';
                $debit->save();
                }

                //member monthly collection inserting
                if(!empty($request->admin_id)){
                $admin=Admin::where('id',$request->admin_id)->first();
                $member_id=$admin->id ;
                $member_name=$admin->name ;
                $member=new AdminProfit();
                $member->admin_id=$member_id;
                $member->amount=  $debit->amount;
                $member->date= $debit->date;
                $member->comment=$debit->comment;
                $member->paid_by=$debit->debit_from;
                $member->save();
                $debit->comment = $debit->comment.'('.$member_name.')';
                $debit->save();
                Admin::profitConfirmation($admin,$debit->amount,$debit->date);
                }

                // if salary paid
                if(!empty($request->employee_id)){
                    $emplye=Team::where('id',$request->employee_id)->first();
                    $employee_salary=new EmployeeSalary();
                    $employee_salary->employee_id=$emplye->id;
                    $employee_salary->amount=$request->amount;
                    $employee_salary->date=$request->date;
                    $employee_salary->save();
                    //update debit comment
                    $debit->purpose = $debit->purpose.'('. $emplye->name .')';
                    $debit->save();
                    Team::sendMessageToEmployeer($emplye,$request->amount);
                }

                //investor payment inserting
            if(!empty($request->investor_id)){
                $investor=Investor::where('id',$request->investor_id)->first();
                $investor_profit_paid=new InvestorProfitPaid();
                $investor_profit_paid->investor_id=$investor->id;
                $investor_profit_paid->amount=  $debit->amount;
                $investor_profit_paid->profit_month= $request->profit_month;
                $investor_profit_paid->date= $debit->date;
                $investor_profit_paid->comment=$debit->comment;
                $investor_profit_paid->paid_by=$debit->debit_from;
                $investor_profit_paid->save();
                $debit->comment = $debit->comment.'('. $investor->name .')';
                $debit->save();
                  Investor::SendMessageToInvestor($investor, $investor_profit_paid->amount, $investor_profit_paid->profit_month);
            }


            //investor payment return
            if(!empty($request->investor_return_id)){
                $investor=Investor::where('id',$request->investor_return_id)->first();
                $invest_return=new InvestmentReturn();
                $invest_return->investor_id=$investor->id;
                $invest_return->amount=  $debit->amount;
                $invest_return->date= $debit->date;
                $invest_return->comment=$debit->comment;
                $invest_return->paid_by=$debit->debit_from;
                $invest_return->save();
                $debit->comment = $debit->comment.'('. $investor->name .')';
                $debit->save();
                Investor::InvestmentReturn($investor,$debit->amount,$debit->date);
            }

            //storing bill statement payment
            if(!empty($request->bill_statement_id)){
                $bill=BillStatement::where('id',$request->bill_statement_id)->first();
                $bill_paid=new BillPaidStatement();
                $bill_paid->bill_statement_id=$bill->id;
                $bill_paid->amount=  $debit->amount;
                $bill_paid->date= $debit->date;
                $bill_paid->comment=$debit->comment;
                $bill_paid->paid_by=$debit->debit_from;
                $bill_paid->save();
                    $debit->comment = $debit->comment.'('.$bill->name.')';
                    $debit->save();
            }

        });
          return response()->json([
                'status' => 'SUCCESS',
                'message' => "debit successfully created",
            ]);
    }


    public function edit_debit(Request $request,$id)
    {
        if($request->ajax()){
            $debit=Debit::find($id);
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

            $debit =Debit::find($id);
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
            $debit=Debit::find($id);
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
