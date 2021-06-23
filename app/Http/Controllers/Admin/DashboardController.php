<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\Admin;
use App\Models\Debit;
use App\Models\Credit;
use App\Models\Project;
use App\Models\Investor;
use App\Models\Investment;
use App\Models\AdminProfit;
use App\Models\ProjectCost;
use App\Models\AdminAccount;
use Illuminate\Http\Request;
use App\Models\ProjectProfit;
use App\Models\EmployeeSalary;
use App\Models\InvestmentReturn;
use App\Models\BillPaidStatement;
use App\Models\InvestorProfitPaid;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index(){
        $analysis=[];
        //member analysis
        $analysis['total_member']=Admin::where('admin_role',2)->count();
        $analysis['total_amount_of_member']=AdminAccount::sum('amount');
        //project analysis
        $analysis['total_project']=Project::count('id');
        $analysis['total_project_cost']=ProjectCost::sum('amount');
        $analysis['total_project_profit']=ProjectProfit::sum('amount');

        //investment analysis
        $analysis['total_investor']=Investor::count('id');
        $analysis['total_invested_amount']=Investment::sum('amount');
        $analysis['total_invested_return_amount']=InvestmentReturn::sum('amount');

        //profit and loss  analysis
        $analysis['total_credit']=Credit::sum('amount');
        $analysis['total_debit']=Debit::sum('amount');

       //company all cost for substract from asset
       $total_bill_paid = BillPaidStatement::sum('amount');
       $total_salary_paid = EmployeeSalary::sum('amount');
       $toal_member_profit= AdminProfit::sum('amount');
       $toal_investor_profit= InvestorProfitPaid::sum('amount');
       $toal_other_debit_cost= Debit::where('purpose','Debit Others')->sum('amount');
       $company_total_cost= ( intval($total_bill_paid) + intval($total_salary_paid) + intval($toal_member_profit) +  intval($toal_investor_profit) + intval($toal_other_debit_cost) ) ;
      //addition value
       $total_members_money=AdminAccount::sum('amount');
       $total_project_profit=ProjectProfit::sum('amount');
       $company_total_credit_money= ( intval($total_members_money) + intval($total_project_profit) ) ;
       // company current assets
       $analysis['company_value'] = $company_total_credit_money - $company_total_cost ;
       $total_member=Admin::where('admin_role',2)->count() ?? 1;

       $analysis['share_value'] = ( intval( $analysis['company_value']) / $total_member ) ;

        //balance analysis
        $balnce=Credit::Balance();
        //monthly profit and cost analysis
        $analysis['this_month_credit']=Credit::where('created_at','>=',Carbon::today()->subDays('30')->startOfDay())
                          ->where('created_at','<=', Carbon::today()->endOfDay())
                          ->sum('amount');

        $analysis['this_month_debit']=Debit::where('created_at','>=',Carbon::today()->subDays('30')->startOfDay())
                          ->where('created_at','<=', Carbon::today()->endOfDay())
                          ->sum('amount');

        //member dasboard analysis
        $member_id=session()->get('member')['id'];
        $memberData=[];
        $memberData['total_collection_paid'] = AdminAccount::where('admin_id',$member_id)->sum('amount');
        $memberData['total_profit_taken'] = AdminProfit::where('admin_id',$member_id)->sum('amount');

        return response()->json([
            'status'=> "OK",
            'analysis'=>$analysis,
            'balance'=>$balnce,
            'memberData'=>$memberData,

        ]);
    }






    public function memberCollections(){

          $member_id=session()->get('member')['id'];
          $colletions = AdminAccount::where('admin_id',$member_id)->paginate(20);
          return response()->json([
               "status" => "OK" ,
               "collections" => $colletions
            ]);
    }



    public function memberProfits(){
          $member_id=session()->get('member')['id'];
          $profits = AdminProfit::where('admin_id',$member_id)->paginate(20);
          return response()->json([
               "status" => "OK" ,
               "profits" => $profits
            ]);
    }




    public function memberProfile(){
            $member_id=session()->get('member')['id'];
            $member = Admin::where('id',$member_id)->first();
            return response()->json([
                "status" => "OK" ,
                "member" => $member
                ]);
        }



    public function memberProfileUpdate(Request $request,$id){
            $member_id=session()->get('member')['id'];
            $validatedData = $request->validate([
                  'email' => 'required|unique:admins,email,'.$member_id,
              ]) ;

            $member = Admin::where('id',$member_id)->first();
            $member->name=$request->name ;
            $member->email=$request->email ;
            $member->present_address=$request->present_address ;
            if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/admin', 'public');
            $member->image = $path;
            }
            $member->save();

            return response()->json([
                "status" => "OK" ,
                "message" => "your personal information has updated"
                ]);
        }




    public function updatePassword(Request $request){
        // return $request->all();
        $validatedData = $request->validate([
            'old_password' => 'required ',
            'new_password' => 'required',

        ]);

        $member_id=session()->get('member')['id'];
        $admin=Admin::where('id',$member_id)->first();
        $admin_current_password=$admin->password;

        if (Hash::check($request->old_password,$admin_current_password)) {
            if($request->new_password==$request->old_password){
                return response()->json([
                    "message" => "current password and new password can't be same ",
                ]);
            }else{
                $admin->password=Hash::make($request->new_password);
                    if ($admin->save()) {
                        return response()->json([ "success" => "OK", "message" => "password changed successfully" ]);
                    }
            }
         }else{
             return response()->json([
                "message" => "current password is incorrect! ",
              ]);
         }



    }





}
