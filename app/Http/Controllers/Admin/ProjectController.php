<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Debit ;
use App\Models\Project ;
use App\Models\ProjectCost ;
use App\Models\ProjectProfit ;
use App\Models\ProjectImage ;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{

     public function index(Request $request){
            $item=$request->item ?? 20 ;
            $projects=Project::orderBy('id','desc')->paginate($item);
            return response()->json([
                "status" => "OK",
                "projects" => $projects ,
            ]);
     }



     public function ProjectDetaisAccount($id){

            $project=Project::findOrFail($id);
            $total_cost=ProjectCost::where('id',$project->id)->orderBy('id','desc')->sum("amount");
            $cost_records=ProjectCost::where('id',$project->id)->get();
            $total_profit=ProjectProfit::where('id',$project->id)->sum("amount");
            $profit_records=ProjectProfit::where('id',$project->id)->orderBy('id','desc')->get();

            return response()->json([
                "status" => "OK",
                "project" => $project ,
                "total_cost" => number_format($total_cost) ,
                "cost_records" => $cost_records ,
                "total_profit" => number_format($total_profit) ,
                "profit_records" => $profit_records ,
            ]);
     }


      public function addProject(Request $request){
     //  return $request->all();
        $validatedData = $request->validate([
            'name' => 'required',
            'place' => 'required',
            'project_type' => 'required',
            'total_cost' => 'required',
            'proposed_budget' => 'required',
            'manager_name' => 'required',
            'present_address' => 'required',
            'permanent_address' => 'required',
            'parent_present_address' => 'required',
            'parent_permanent_address' => 'required',
            'manager_image' => 'required',
            'description' => 'required',
            'agreement_image' => 'required|file',
            'father_name' => 'required',
            'mother_name' => 'required',
            'manager_phone' => 'required|digits:11|unique:projects',
            'father_phone' => 'required|digits:11|unique:projects',
            'mother_phone' => 'required|digits:11|unique:projects',
        ]);
        DB::transaction(function() use($request){

        //this slug with encoding for any language
         function CleanURL($string, $delimiter = '-') {
            // Remove special characters
          $string = preg_replace("/[~`{}.'\"\!\@\#\$\%\^\&\*\(\)\_\=\+\/\?\>\<\,\[\]\:\;\|\\\]/", "", $string);
            // Replace blank space with delimeter
            $string = preg_replace("/[\/_|+ -]+/", $delimiter, $string);
            return $string;
        }
        $slug=CleanURL($request->name);

        //project info
        $project = new Project();
        $project->name = $request->name;
        $project->slug=$slug;
        $project->place = $request->place;
        $project->project_type = $request->project_type;
        $project->proposed_budget = $request->proposed_budget;
        $project->total_cost = $request->total_cost;
        $project->emabaded_url = $request->emabaded_url;
        $project->comments = $request->comments;
        $project->description = $request->description;
        $project->description = $request->description;
        $project->status = 1;
        $path = $request->file('agreement_image')->store('images/project_aggreement', 'public');
        $project->agreement_image = $path;

        //manager info
        $project->manager_name = $request->manager_name;
        $project->manager_phone = $request->manager_phone;
        $project->present_address = $request->present_address;
        $project->permanent_address = $request->permanent_address;
        $nid_path = $request->file('nid')->store('images/manager_nid','public');
        $project->nid=$nid_path ;
        $m_path=$request->file('manager_image')->store('images/manager_image','public');
        $project->manager_image=$m_path ;

         //family info
         $project->father_name = $request->father_name;
         $project->father_phone = $request->father_phone;
         $project->mother_name = $request->mother_name ;
         $project->mother_phone = $request->mother_phone;
         $f_nid = $request->file('father_nid')->store('images/manager_parent_nid','public');
         $project->father_nid = $f_nid ;
         $m_nid = $request->file('mother_nid')->store('images/manager_parent_nid','public');
         $project->mother_nid = $m_nid;
         $project->parent_present_address = $request->parent_present_address;
         $project->parent_permanent_address = $request->parent_permanent_address;

        $project->save();
        //project images
        if ($request->hasFile('image')) {
             $images=$request->file('image');
             foreach($images as $img){
                 $p_image= new ProjectImage();
                 $p_image->project_id=$project->id ;
                 $path=$img->store('images/project_images','public');
                 $p_image->image=$path;
                 $p_image->save();
             }
           }
           //if project cost more than zero than debit inserting
           if ($project->total_cost > 0) {
                $debit= new Debit ();
                $debit->purpose = $project->name;
                $debit->debit_from="Cash";
                $debit->amount = $project->total_cost;
                $debit->comment = "preject starting cost";
                $debit->date = date('Y-m-d');
                $debit->insert_admin_id=session()->get('admin')['id'];
                $debit->save();

                 //inserting to project cost table
                $project_cost=new ProjectCost();
                $project_cost->project_id=$project->id;
                $project_cost->admin_id=session()->get('admin')['id'];
                $project_cost->amount=  $project->total_cost;
                $project_cost->date= date('Y-m-d');
                $project_cost->comment="project starting cost";
                $project_cost->paid_by="cash";
                $project_cost->save();
           }

        });

         return response()->json([
                'status' => 'SUCCESS',
                'message' => 'Project added successfully'
            ]);
    }



      public function updateProject(Request $request,$id){
     //  return $request->all();
        $validatedData = $request->validate([
            'name' => 'required',
            'place' => 'required',
            'project_type' => 'required',
            'proposed_budget' => 'required',
            'manager_name' => 'required',
            'present_address' => 'required',
            'permanent_address' => 'required',
            'description' => 'required',
            'aggreement_details' => 'required',
            'manager_phone' => 'required|digits:11|unique:projects,manager_phone,'.$id,
            'father_phone' => 'required|digits:11|unique:projects,father_phone,'.$id,
            'mother_phone' => 'required|digits:11|unique:projects,mother_phone,'.$id,
            'father_name' => 'required',
            'mother_name' => 'required',
            'parent_present_address' => 'required',
            'parent_permanent_address' => 'required',
        ]);
        DB::transaction(function() use($request,$id){
        //project info
        $project = Project::findOrFail($id);
        $project->name = $request->name;
        $project->place = $request->place;
        $project->project_type = $request->project_type;
        $project->proposed_budget = $request->proposed_budget;
        $project->emabaded_url = $request->emabaded_url;
        $project->comments = $request->comments;
        $project->description = $request->description;
        $project->aggreement_details = $request->aggreement_details;
        if ($request->hasFile("agreement_image")) {
             $path = $request->file('agreement_image')->store('images/project_aggreement', 'public');
             $project->agreement_image = $path;
        }

        //manager info
        $project->manager_name = $request->manager_name;
        $project->manager_phone = $request->manager_phone;
        $project->present_address = $request->present_address;
        $project->permanent_address = $request->permanent_address;
        
        if ($request->hasFile("nid")) {
            $nid = $request->file('nid')->store('images/manager_nid','public');
            $project->nid = $nid ;;
        }

        if ($request->hasFile("manager_image")) {
            $m_path=$request->file('manager_image')->store('images/manager_image','public');
            $project->manager_image=$m_path ;
        }
          //family info
         $project->father_name = $request->father_name;
         $project->father_phone = $request->father_phone;
         $project->mother_name = $request->mother_name;
         $project->mother_phone = $request->mother_phone;
         $project->parent_present_address = $request->parent_present_address;
         $project->parent_permanent_address = $request->parent_permanent_address;

        if ($request->hasFile("father_nid")) {
           $father_nid = $request->file('father_nid')->store('images/manager_parent_nid','public');
           $project->father_nid = $father_nid ;
        }

        if ($request->hasFile("mother_nid")) {
           $mother_nid = $request->file('mother_nid')->store('images/manager_parent_nid','public');
           $project->mother_nid = $mother_nid ;
        }

        $project->save();

        //project images
        if ($request->hasFile('image')) {
            $project_images=ProjectImage::where('project_id',$id)->get();
            foreach ($project_images as $key => $item) {
                $item->delete();
            }
            //inserting new image
             $images=$request->file('image');
             foreach($images as $img){
                 $p_image= new ProjectImage();
                 $p_image->project_id=$project->id ;
                 $path=$img->store('images/project_images','public');
                 $p_image->image=$path;
                 $p_image->save();
             }
           }

        });

         return response()->json([
                'status' => 'SUCCESS',
                'message' => 'Project updated successfully'
            ]);


    }




    public function approved($id){
        $project = Project::findOrFail($id);
        $project->status = 1;
        if ($project->save()) {
            return response()->json([
            'status' => 'SUCCESS',
            'message' => 'project  activated successfully'
        ]);
        }

    }

        public function pending($id){
        $project = Project::findOrFail($id);
        $project->status = 0;
        if ($project->save()) {
             return response()->json([
            'status' => 'SUCCESS',
            'message' => 'project  de-activated successfully'
        ]);
        }

    }


    public function ProjectItem($id){
        $project = Project::with('project_image')->findOrFail($id);
        return response()->json([
            'status' => 'SUCCESS',
            'project' => $project,
        ]);
    }


    public function deleteImage(Request $request,$id){
        $images = ProjectImage::where('project_id',$id)->get();
        if ($images[$request->index]->delete()) {
            return response()->json([
            'status' => 'SUCCESS',
            'message' => "image deleted",
        ]);
        }
    }







}
