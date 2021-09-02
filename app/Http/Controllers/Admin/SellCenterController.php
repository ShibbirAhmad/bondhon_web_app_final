<?php

namespace App\Http\Controllers\Admin;

use App\Models\SellCenter;
use Illuminate\Http\Request;
use App\Models\SellCenterManager;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class SellCenterController extends Controller
{
    
    public function index(){
        $sellcenters = SellCenter::orderBy('id', 'DESC')->with('manager')->get();
        return response()->json([
            'sellcenters' => $sellcenters,
            'status' => 'SUCCESS'
        ]);
    }



    public function addSellCenter(Request $request){

            $this->validate($request, [
                'name' => 'required|unique:sell_centers',
                'address' => 'required',
                'password' => 'required|min:8',
                'phone' => 'required|digits:11|unique:sell_centers',
            ]);
            $sellcenter = new SellCenter();
            $sellcenter->name = $request->name;
            $sellcenter->address = $request->address;
            $sellcenter->password = Hash::make($request->password);
            $sellcenter->phone = $request->phone;
            $sellcenter->licience = $request->licience;
            if ($request->hasFile('logo')) {
                $path = $request->file('logo')->store('images/sellcenter/logo');
                $sellcenter->logo= $path ;
            }
            $sellcenter->save();
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'added successfully'
                ]);
        
    }

    public function sellcenterItem($id){
          $sellcenter=SellCenter::findOrFail($id);
          return response([
              'status'=>'OK',
              'sellcenter' => $sellcenter,
          ]);
    }


    public function updateSellCenter(Request $request,$id){

            $this->validate($request, [
                'name' => 'required|unique:sell_centers,name,'.$id,
                'address' => 'required',
                'phone' => 'required|unique:sell_centers,phone,'.$id,
            ]);
            $sellcenter = SellCenter::findOrFail($id);
            $sellcenter->name = $request->name;
            $sellcenter->address = $request->address;
            $sellcenter->phone = $request->phone;
            $sellcenter->licience = $request->licience;
            if ($request->hasFile('logo')) {
                $path = $request->file('logo')->store('images/sellcenter/logo');
                $sellcenter->logo= $path ;
            }
            $sellcenter->save();
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => ' updated successfully'
                ]);
        
    }




    public  function managers(Request $request){
        $item = $request->item ?? 10 ;
        $managers= SellCenterManager::orderBy('id','DESC')->paginate($item);
        return response()->json([
            "success" => "OK",
            "managers" => $managers ,
        ]);
    }



    public function addManager(Request $request){

        $validatedData = $request->validate([
            'sell_center_id'  => 'required|unique:sell_center_managers',
            'name'  => 'required',
            'address'  => 'required',
            'email'  => 'required|unique:sell_center_managers',
            'phone'  => 'required|unique:sell_center_managers|digits:11',
            'nid'  => 'required|unique:sell_center_managers',
        ]);


         $manager= new SellCenterManager ();
         $manager->sell_center_id=$request->sell_center_id ;
         $manager->name=$request->name ;
         $manager->phone=$request->phone ;
         $manager->email=$request->email ;
         $manager->address=$request->address ;
         $manager->nid=$request->nid ;
         if ($request->hasFile('image')) {
                $file_path=$request->file('image')->store('images/sellcenter/manager','public');
            $manager->image=$file_path ;
        }
         if ($manager->save()) {
             return response()->json([
                  'success' => 'OK',
                  'message' => ' manager added successfully '
             ]);
         }


    }



    public function getManager($id){

         $manager  = SellCenterManager::findOrFail($id);
         if ($manager) {
            return response()->json([
                    "success"  => "OK",
                    "manager"  => $manager,  ]);
        }

    }

    public function adminAccessSellCenter($id){

         $sellcenter  = SellCenter::findOrFail($id);
         if ($sellcenter) {
             session()->put('sellcenter',$sellcenter);
            return response()->json([
                    "status"  => "SUCCESS",
                    "sell_center_token"  => $sellcenter->password,
                  ]);
        }

    }


    public function updateManager(Request $request, $id){

        $validatedData = $request->validate([
            'name'  => 'required',
            'address'  => 'required',
            'sell_center_id'  => 'required|unique:sell_center_managers,sell_center_id,'.$id,
            'email'  => 'required|unique:sell_center_managers,email,'.$id,
            'phone'  => 'required|digits:11,unique:sell_center_managers,phone,'.$id,
            'nid'  => 'required|unique:sell_center_managers,nid,'.$id,
        ]);

         $manager= SellCenterManager::find($id) ;
         $manager->sell_center_id=$request->sell_center_id ;
         $manager->name=$request->name ;
         $manager->address=$request->address ;
         $manager->phone=$request->phone ;
         $manager->email=$request->email ;
         $manager->nid=$request->nid ;
         if ($request->hasFile('image')) {
                $file_path=$request->file('image')->store('images/manager','public');
            $manager->image=$file_path ;
        }

         if ($manager->save()) {
             return response()->json([
                 'success' => 'OK',
                  'message' => 'Information updated successfully '
             ]);
         }


    }


    public function removeManager($id){

           $manager=SellCenterManager::findOrFail($id);
           $manager->delete();
           return response()->json([
               'status' => 'OK',
               'message' => 'Deleted'
           ]);
    }



}
