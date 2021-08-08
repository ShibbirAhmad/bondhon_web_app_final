<?php

namespace App\Http\Controllers\Admin;

use Image;
use App\Models\Admin;
use App\Models\AdminProfit;
use App\Models\AdminAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Illuminate\Contracts\Session\Session;
use App\Http\Controllers\Admin\SendMailController;


class AdminController extends Controller
{


    public function index()
    {
        $admins = Admin::where('admin_role',1)->orderby('id', 'desc')->paginate(10);
        return response()->json([
            'admins' => $admins,
            'status' => 'SUCCESS'
        ]);
    }



     public function AddSiteAdmin(Request $request){

        $validatedData = $request->validate([
            'email' => 'required ',
            'password' => 'required',
            'name' => 'required',
            'phone' => 'required|unique:admins',
        ]);
        $admin = new Admin();
        $admin->name = $request->name;
        $admin->email = $request->email;
        $admin->phone = $request->phone;
        $admin->admin_role = 1;
        $admin->password = Hash::make($request->password);
        $admin->present_address = 'demo';
        $admin->permanent_address = 'demo';
        //nominee info
        $admin->nominee_name ='demo';
        $admin->nominee_email = 'demo';
        $admin->nominee_phone = 'demo';
        $admin->nominee_phone = 'demo';
        $admin->nominee_father_phone = 'demo';
        $admin->nominee_mother_phone = 'demo';
        $admin->nominee_father_name = 'demo';
        $admin->nominee_mother_name = 'demo';
        $admin->nominee_present_address = 'demo';
        $admin->nominee_permanent_address = 'demo' ;
        $admin->nominee_parent_present_address = 'demo' ;
        $admin->nominee_parent_permanent_address = 'demo' ;
        //family info
         $admin->father_name = 'demo';
         $admin->father_phone = 'demo';
         $admin->mother_name ='demo';
         $admin->mother_phone = 'demo';
         $admin->parent_present_address = 'demo';
         $admin->parent_permanent_address = 'demo';
         $admin->agree_with_aggreement = 'yes';
         $admin->aggreement_image = 'demo.png';


        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/admin', 'public');
            $admin->image = $path;
        }
          $admin->save();
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'admin add successfully'
            ]);


    }






  public function updateSiteAdmin(Request $request, $id){
        //return $request->all();
        $validatedData = $request->validate([
            'email' => 'required ',
            'name' => 'required',
            'phone' => 'required|unique:admins,phone,'.$id,
        ]);
        $admin =Admin::find($id);
        $admin->name = $request->name;
        $admin->email = $request->email;
        $admin->phone = $request->phone;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/admin', 'public');
            $admin->image = $path;
        }
        $admin->save();
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'admin update successfully'
            ]);
    }



    public function memberList(){
        $admins = Admin::where('admin_role',2)->with('collections')->orderby('id', 'desc')->paginate(10);
        return response()->json([
            'admins' => $admins,
            'status' => 'SUCCESS'
        ]);
    }


    public function adminDetails($id)
    {
           $admin=Admin::findOrFail($id);
           $monthly_collections=AdminAccount::where('admin_id',$admin->id)->orderBy('id','desc')->paginate(20);
           $total_collections=AdminAccount::where('admin_id',$admin->id)->sum("amount");
           $monthly_profit=AdminProfit::where('admin_id',$admin->id)->orderBy('id','desc')->paginate(20);
           $total_profit =AdminProfit::where('admin_id',$admin->id)->sum("amount");
           return response()->json([
                 "status" => "OK",
                 "admin" => $admin,
                 "monthly_collections" => $monthly_collections,
                 "total_collections" => $total_collections,
                 "monthly_profit" => $monthly_profit,
                 "total_profit" => $total_profit,
           ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    //    return $request->all();
        $validatedData = $request->validate([
            'email' => 'required|email|unique:admins',
            'nominee_email' => 'required|email|unique:admins',
            'phone' => 'required|digits:11|unique:admins',
            'father_phone' => 'required|digits:11|unique:admins',
            'mother_phone' => 'required|digits:11|unique:admins',
            'nominee_phone' => 'required|digits:11|unique:admins',
            'password' => 'required|min:6',
            'present_address' => 'required',
            'permanent_address' => 'required',
            'parent_present_address' => 'required',
            'parent_permanent_address' => 'required',
            'nominee_present_address' => 'required',
            'nominee_permanent_address' => 'required',
            'name' => 'required',
            'father_name' => 'required',
            'mother_name' => 'required',
            'nominee_name' => 'required',
            'nid' => 'required' ,
            'father_nid' => 'required',
            'mother_nid' => 'required',
            'agree_with_aggreement' => 'required',
            'aggreement_image' => 'required|file',
            'nominee_father_name' => 'required',
            'nominee_mother_name' => 'required',
            'nominee_father_phone' => 'required|digits:11|unique:admins',
            'nominee_mother_phone' => 'required|digits:11|unique:admins',
            'nominee_parent_present_address' => 'required',
            'nominee_parent_permanent_address' => 'required',
        ]);
        DB::transaction(function() use($request){
        $admin = new Admin();
        //personal info..
        $admin->name = $request->name;
        $admin->email = $request->email;
        $admin->phone = $request->phone;
        $admin->present_address = $request->present_address;
        $admin->permanent_address = $request->permanent_address;
        $admin_nid = $request->file('nid')->store('images/admin', 'public');
        $admin->nid = $admin_nid;
        $admin->password = Hash::make($request->password);
         if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/admin', 'public');
            $admin->image = $path;
        }
        //family info
         $admin->father_name = $request->father_name;
         $admin->father_phone = $request->father_phone;
         $f_nid = $request->file('father_nid')->store('images/admin', 'public');
         $admin->father_nid = $f_nid ;
         $admin->mother_name = $request->mother_name;
         $admin->mother_phone = $request->mother_phone;
         $m_nid = $request->file('mother_nid')->store('images/admin', 'public');
         $admin->mother_nid = $m_nid;
         $admin->parent_present_address = $request->parent_present_address;
         $admin->parent_permanent_address = $request->parent_permanent_address;

        if ($request->hasFile('father_image')) {
            $validatedData = $request->validate([
                'image' => 'required|file',
            ]);
            $path = $request->file('father_image')->store('images/admin', 'public');
            $admin->father_image = $path;
        }

         if ($request->hasFile('mother_image')) {
            $validatedData = $request->validate([
                'image' => 'required|file',
            ]);
            $path = $request->file('mother_image')->store('images/admin', 'public');
            $admin->mother_image = $path;
        }
        //nominee info
          $admin->nominee_name = $request->nominee_name;
          $admin->nominee_email = $request->nominee_email;
          $admin->nominee_phone = $request->nominee_phone;
          $n_nid = $request->file('nominee_nid')->store('images/nominee', 'public');
          $admin->nominee_nid = $n_nid;
          $admin->nominee_present_address = $request->nominee_present_address;
          $admin->nominee_permanent_address = $request->nominee_permanent_address;

        if ($request->hasFile('nominee_image')) {
            $validatedData = $request->validate([
                'image' => 'required|file',
            ]);
            $path = $request->file('nominee_image')->store('images/admin', 'public');
            $admin->nominee_image = $path;
        }
        //nominee family info
         $admin->nominee_father_name = $request->nominee_father_name;
         $admin->nominee_father_phone = $request->nominee_father_phone;
         $n_f_nid = $request->file('nominee_father_nid')->store('images/nominee', 'public');
         $admin->nominee_father_nid = $n_f_nid;
         $admin->nominee_mother_name = $request->nominee_mother_name;
         $admin->nominee_mother_phone = $request->nominee_mother_phone;
         $n_m_nid = $request->file('nominee_mother_nid')->store('images/nominee', 'public');
         $admin->nominee_mother_nid = $n_m_nid ;
         $admin->nominee_parent_present_address = $request->nominee_parent_present_address;
         $admin->nominee_parent_permanent_address = $request->nominee_parent_permanent_address;

        if ($request->hasFile('nominee_father_image')) {
            $validatedData = $request->validate([
                'image' => 'required|file',
            ]);
            $path = $request->file('nominee_father_image')->store('images/admin', 'public');
            $admin->nominee_father_image = $path;
        }

         if ($request->hasFile('nominee_mother_image')) {
            $validatedData = $request->validate([
                'image' => 'required|file',
            ]);
            $path = $request->file('nominee_mother_image')->store('images/admin', 'public');
            $admin->nominee_mother_image = $path;
        }

           //aggreement info
            if (isset($request->agree_with_aggreement)) {
                $admin->agree_with_aggreement="yes" ;
            }
            $path = $request->file('aggreement_image')->store('images/admin', 'public');
            $admin->aggreement_image = $path;
            $admin->save();
            Admin::sendWelcomeMessage($admin);
            //send mail to member
            $message= 'Assalamualikum,'. $admin->name . ' You are now partner of Bondhon Society Limited. Thanks a million for being with us . wishing your best success ';
            SendMailController::sendMailToMember($admin->email,$message);
        });

         return response()->json([
                'status' => 'SUCCESS',
                'message' => 'Member added successfully'
            ]);


    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        $admin = Admin::find($id);
        if ($admin) {
            return response()->json([
                'status' => 'SUCCESS',
                'admin' => $admin
            ]);
        }


    }


    public function search_admin($data){

        $admins = Admin::Where('email','like','%'.$data.'%')
                      ->orWhere('name','like','%'.$data.'%')
                      ->paginate(10);

            return response()->json([
                 "status" => "OK",
                 'admins' => $admins ,
            ]);

    }
    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public
    function update(Request $request, $id)
    {
        // return $request->all();
        $validatedData = $request->validate([
            'email' => 'required|email|unique:admins,email,'.$id,
            'nominee_email' => 'required|email|unique:admins,nominee_email,'.$id,
            'phone' => 'required|digits:11|unique:admins,phone,'.$id,
            'nominee_phone' => 'required|digits:11|unique:admins,nominee_phone,'.$id,
            'present_address' => 'required',
            'permanent_address' => 'required',
            'nominee_present_address' => 'required',
            'nominee_permanent_address' => 'required',
            'name' => 'required',
            'nominee_name' => 'required',
            'father_name' => 'required',
            'mother_name' => 'required',
            'father_phone' => 'required|digits:11|unique:admins,father_phone,'.$id,
            'mother_phone' => 'required|digits:11|unique:admins,mother_phone,'.$id,
            'parent_present_address' => 'required',
            'parent_permanent_address' => 'required',
            'nominee_father_name' => 'required',
            'nominee_mother_name' => 'required',
            'nominee_father_phone' => 'required|digits:11|unique:admins,nominee_father_phone,'.$id,
            'nominee_mother_phone' => 'required|digits:11|unique:admins,nominee_mother_phone,'.$id,
            'nominee_parent_present_address' => 'required',
            'nominee_parent_permanent_address' => 'required',
        ]);
        DB::transaction(function() use($request,$id){
        $admin = Admin::findOrFail($id);
        //personal info..
        $admin->name = $request->name;
        $admin->email = $request->email;
        $admin->phone = $request->phone;
        $admin->present_address = $request->present_address;
        $admin->permanent_address = $request->permanent_address;
        if ($request->hasFile('nid')) {
            $path = $request->file('nid')->store('images/admin', 'public');
            $admin->nid = $path;
        }
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/admin', 'public');
            $admin->image = $path;
        }
        //family info
         $admin->father_name = $request->father_name;
         $admin->father_phone = $request->father_phone;
         if ($request->hasFile('father_nid')) {
            $path = $request->file('father_nid')->store('images/admin', 'public');
            $admin->father_nid = $path;
        }
         $admin->mother_name = $request->mother_name;
         $admin->mother_phone = $request->mother_phone;
        if ($request->hasFile('mother_nid')) {
            $path = $request->file('mother_nid')->store('images/admin', 'public');
            $admin->mother_nid = $path;
        }
         $admin->parent_present_address = $request->parent_present_address;
         $admin->parent_permanent_address = $request->parent_permanent_address;
         if ($request->hasFile('father_image')) {
            $path = $request->file('father_image')->store('images/admin', 'public');
            $admin->father_image = $path;
        }

         if ($request->hasFile('mother_image')) {
            $path = $request->file('mother_image')->store('images/admin', 'public');
            $admin->mother_image = $path;
        }
        //nominee info
          $admin->nominee_name = $request->nominee_name;
          $admin->nominee_email = $request->nominee_email;
          $admin->nominee_phone = $request->nominee_phone;
          if ($request->hasFile('nominee_nid')) {
             $path = $request->file('nominee_nid')->store('images/nominee', 'public');
             $admin->nominee_nid = $path;
          }

          $admin->nominee_present_address = $request->nominee_present_address;
          $admin->nominee_permanent_address = $request->nominee_permanent_address;
          if ($request->hasFile('nominee_image')) {
            $path = $request->file('nominee_image')->store('images/admin', 'public');
            $admin->nominee_image = $path;
         }
          //nominee family info
         $admin->nominee_father_name = $request->nominee_father_name;
         $admin->nominee_father_phone = $request->nominee_father_phone;
         if ($request->hasFile('nominee_father_nid')) {
             $path = $request->file('nominee_father_nid')->store('images/nominee', 'public');
             $admin->nominee_father_nid = $path;
          }
         $admin->nominee_mother_name = $request->nominee_mother_name;
         $admin->nominee_mother_phone = $request->nominee_mother_phone;
         if ($request->hasFile('nominee_mother_nid')) {
             $path = $request->file('nominee_mother_nid')->store('images/nominee', 'public');
             $admin->nominee_mother_nid = $path;
         }
         $admin->nominee_parent_present_address = $request->nominee_parent_present_address;
         $admin->nominee_parent_permanent_address = $request->nominee_parent_permanent_address;

        if ($request->hasFile('nominee_father_image')) {
            $validatedData = $request->validate([
                'image' => 'required|file',
            ]);
            $path = $request->file('nominee_father_image')->store('images/admin', 'public');
            $admin->nominee_father_image = $path;
        }

         if ($request->hasFile('nominee_mother_image')) {
            $validatedData = $request->validate([
                'image' => 'required|file',
            ]);
            $path = $request->file('nominee_mother_image')->store('images/admin', 'public');
            $admin->nominee_mother_image = $path;
        }

           $admin->save();


        });

         return response()->json([
                'status' => 'SUCCESS',
                'message' => 'Member information updated successfully'
            ]);



    }


    public function updatePassword(Request $request){

        $validatedData = $request->validate([
            'old_password' => 'required ',
            'new_password' => 'required',
        ]);
        $admin_id = session()->get('admin')['id'] ;
        $admin= Admin::where('id',$admin_id)->first() ;
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

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public
    function destroy($id)
    {
        //
    }

    public function deactive($id)
    {
        $admin = Admin::find($id);
        if ($admin) {
            $admin->status = 0;
            if ($admin->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'admin deactive successfully'
                ]);
            }
        }
    }


  public function active($id)
    {
        $admin = Admin::find($id);
        if ($admin) {
            $admin->status = 1;
            if ($admin->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'admin active successfully'
                ]);
            }
        }
    }


    public function getAdminRole($id){
        $roles=Role::all();
        $admin=Admin::find($id);
        $admin_roles=DB::table('model_has_roles')->where('model_id',$id)->select('role_id')->pluck('role_id');
        return response()->json([
            'roles'=>$roles,
            'admin_roles'=>$admin_roles,
            'admin'=>$admin
        ]);
    }

    public function updateAdminRole(Request $request, $id){

       // return $request->all();
         $admin=Admin::find($id);
         $admin_roles=DB::table('model_has_roles')->where('model_id',$id)->delete();

         foreach($request->role as $role_id){
         $role=Role::where('id',$role_id)->first();
          $admin->assignRole($role);
       }
     return \response()->json('Adim Assign Role Updated');

    }



    public function getAdminPermission($id){

       $permissions = Permission::all()->groupBy('group_name');
       $admin_name=Admin::where('id',$id)->select('name')->get();
         $admin_has_permissions_id=DB::table('model_has_permissions')->where('model_id',$id)->select('permission_id')->pluck('permission_id') ;
          return response()->json([
              "status" => "OK",
              "permissions" => $permissions,
              "admin_name"   => $admin_name ,
              "admin_has_permissions_id" => $admin_has_permissions_id ,

          ]);
    }




    public function assignAdminPermission(Request $request , $id){

      //  $model = Permission::findOrFail($id);
        $admin=Admin::findOrFail($id);

        //delete the previous permisson
        $model_has_permissons=DB::table('model_has_permissions')->where('model_id',$id)->delete();

        //insert the new permison
        foreach($request->permissons_id as $permison_id){
           $permission=Permission::where('id',$permison_id)->first();
           $admin->givePermissionTo($permission);
         }

       return response()->json([

            "status" => "OK",
            "message" => "Permission assigned successfully" ,

        ]);
  }






}
