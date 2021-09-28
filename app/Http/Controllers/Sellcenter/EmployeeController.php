<?php

namespace App\Http\Controllers\Sellcenter;

use Illuminate\Http\Request;
use App\Models\SellCenterEmployee;
use App\Http\Controllers\Controller;
use App\Models\SellCenterEmployeeSalary;
use App\Models\SellCenterEmployeeSalaryPerMonth;

class EmployeeController extends Controller
{



    public  function index(){
        $employees= SellCenterEmployee::where('sell_center_id',session()->get('sellcenter')['id'])->orderBy('id','desc')->get();
        return response()->json([
            "success" => "OK",
            "employees" => $employees ,
        ]);
    }



    public function addEmployee(Request $request){
           
        $validatedData = $request->validate([
            'name'  => 'required',
            'designation'  => 'required',
            'phone'  => 'required|unique:sell_center_employees|digits:11',
        ]);

         $employee= new SellCenterEmployee();
         $employee->sell_center_id= session()->get('sellcenter')['id'];
         $employee->name=$request->name ;
         $employee->phone=$request->phone ;
         $employee->designation=$request->designation ;
         $employee->status=1;
         $employee->save();

             return response()->json([
                  'success' => 'OK',
                  'message' => 'added successfully '
             ]);
        


    }



    public function getEditEmployee($id){

        $employee  = SellCenterEmployee::findOrFail($id);  
        return response()->json([
                "success"  => "OK",
                "employee"  => $employee,  
            ]);
        

}


    public function updateEmployee(Request $request, $id){

        $validatedData = $request->validate([
            'name'  => 'required',
            'designation'  => 'required',
            'phone'  => 'required|digits:11,unique:sell_center_employees,phone,'.$id,
        ]);

         $employee= SellCenterEmployee::find($id) ;
         $employee->name=$request->name ;
         $employee->phone=$request->phone ;
         $employee->designation=$request->designation ;
         $employee->status=1;
 
         if ($employee->save()) {
             return response()->json([
                  'success' => 'OK',
                  'message' => 'Information updated successfully '
             ]);
         }




    }


    
    public function destroyEmployee($id){

        $employee  = SellCenterEmployee::find($id);
        $employee->delete();     
            return response()->json([
                    "success"  => "OK",
                    "message"  => "This employee has removed",
            ]);

    }


    public function salaryDetails($id){
    
            $employee=SellCenterEmployee::findOrFail($id);
            $employee_salaries=SellCenterEmployeeSalary::orderBy('date','DESC')->where('employee_id',$id)->get();
            $paid_salary=SellCenterEmployeeSalaryPerMonth::orderBy('date','DESC')->where('employee_id',$id)->get();                       
                                
                return response()->json([
                    'employee'=>$employee,
                    'salary'=>$employee_salaries,
                    'paid_salary'=>$paid_salary
                ]);
    }



    
    public function search_employee($data){
              
        $employees = SellCenterEmployee::where('sell_center_id',session()->get('sellcenter')['id'])
                        ->where('name','like','%'.$data.'%')
                        ->orWhere('phone','like','%'.$data.'%')
                        ->get();

         return response()->json(['employees'=>$employees]);   
     }





}
