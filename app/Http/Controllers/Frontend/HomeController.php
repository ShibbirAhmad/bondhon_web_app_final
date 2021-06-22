<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Project;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ProjectImage;
use App\Models\Slider;
use App\Models\OtpVerification;
use App\Models\Admin;
use App\Models\Team;
use App\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\GeneralSetting;
use App\Models\FooterSetting;
use App\Models\AboutAndContact;
use App\Models\Investor;
use App\Models\OrderShipmentAndReturnPolicy;

class HomeController extends Controller
{

    public  function index(Request $request)
    {

          $implemented_projects=Project::where('project_type','implemented project')->where('status',1)->orderBy('id','desc')->with('project_image')->get();
          $total_implemented_project=Project::where('project_type','implemented project')->count();
          $total_planned_project=Project::where('project_type','planned project')->count();
          $planned_projects=Project::where('project_type','planned project')->where('status',1)->orderBy('id','desc')->with('project_image')->get();
          $members=Admin::where('status',1)->get();
          $total_member=Admin::count();
          $total_investor=Investor::count();
          $sliders = Slider::where('status',1)->get();

          return view('frontend.index',compact([
                        'implemented_projects',
                        'planned_projects',
                        'members',
                        'sliders',
                        'total_implemented_project',
                        'total_planned_project',
                        'total_member',
                        'total_investor',
               ]) );
    }



    public function projectDetails($slug){
           $project=Project::where('slug',$slug)->with(['project_image'])->first();
           $related_proejcts= $planned_projects=Project::where('project_type',$project->project_type)->where('status',1)->orderBy('id','desc')->with('project_image')->take(10)->get();
           $recent_proejcts= $planned_projects=Project::where('status',1)->orderBy('id','desc')->with('project_image')->take(10)->get();
           return view('frontend.project_details',compact(['project','related_proejcts','recent_proejcts']));
    }



    public function projects()
    {
          $projects=Project::where('status',1)->orderBy('id','desc')->with('project_image')->get();
           return view('frontend.projects',compact('projects'));
    }


    public function bondhoMembers()
    {
          $members=Admin::where('status',1)->paginate(10);
           return view('frontend.bondho_members',compact('members'));

    }

    public function bondhonService()
        {
            return view('frontend.bondhon_service');

        }


    public function about()
    {
          $total_implemented_project=Project::where('project_type','implemented project')->count();
          $total_planned_project=Project::where('project_type','planned project')->count();
          $total_member=Admin::count();
          $total_investor=Investor::count();

            return view('frontend.about',compact([
                            'total_implemented_project',
                            'total_planned_project',
                            'total_member',
                            'total_investor',
                ]) );

    }


    public function contact()
    {
           return view('frontend.contact');

    }


    public function blog()
    {
           return view('frontend.blog');

    }


    public function  get_team_members(){
            $team = Team::where('status',1)->orderBy('position','ASC')->get();
            return response()->json([
                'status' => "OK",
                'team'  => $team ,
        ]);
    }


    public function ProjectImage($slug){

      $Project = Project::where('slug', $slug)->first();
      $Project_images = ProjectImage::where('Project_id',$Project->id)
                                        ->select('Project_image')
                                        ->get();
     return response()->json($Project_images);
    }

    public function relatedProject(Request $request){
        $Project_find=Project::where('slug',$request->Project_slug)->first();

        $Projects=Project::where('category_id',$Project_find->category_id)->where('id','!=',$Project_find->id)->with('ProjectImage')->paginate(5);
        return response()->json($Projects);
 }


      public function SendOtp(Request $request){


       // return $request->all();

        $validatedData = $request->validate([

            'mobile_no' => 'required|digits:11 '

        ]);


        $code=random_int(100000, 999999);
        $otp=new OtpVerification();
        $otp->mobile_no=$request->mobile_no;
        $otp->code=Hash::make($code);
        if($otp->save()){
            $this->sendOtpCode ($otp->mobile_no,$code);
             return \response()->json("Send One Time Pin On Your Mobile Number");

      }
    }



public function sendOtpCode($number,$code){

    $api_key = "C20047545e16e1c02a1b38.69878796";
        $contacts =$number;
        $senderid = '8809601000740';
        $sms = 'Dear Sir, '. 'Your Mohasagor One Time PIN is '.$code.'. It will expire in 3 minute';
        $URL = "http://bulk.fmsms.biz/smsapi?api_key=" . urlencode($api_key) . "&type=text&contacts=" . urlencode($contacts) . "&senderid=" . urlencode($senderid) . "&msg=" . urlencode($sms);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $URL);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 0);
        try {
            $output = $content = curl_exec($ch);
          //  print_r($output);
        } catch (Exception $ex) {
           return back();
        }
        return $output;
            return \response()->json($code);
        }


 public function verifyCodeOtp(Request $request)

{
     $validatedData = $request->validate([
         'verify_code' => 'required '
     ]);

   //  return $request->all();
    $otp=OtpVerification::where('mobile_no',$request->mobile_no)->latest()->first();
     $to_time = strtotime(Carbon::now()->format('Y-m-d g:i:s'));
     $from_time = strtotime(Carbon::parse($otp->created_at)->format('Y-m-d g:i:s'));

       $expire_time= round(abs($to_time - $from_time) / 60,2);



     if (Hash::check($request->verify_code, $otp->code)) {
           if($expire_time > 5){
               return \response()->json('Code Time Expired');
             }else{
            $user=User::where('mobile_no',$request->mobile_no)->first();
            if(empty($user)){
                $user=new User();
                $user->mobile_no=$request->mobile_no;
                $user->password=Hash::make($request->mobile_no);
                $user->name=null;
                $user->email=null;
                $user->image=null;
                $user->city_id=null;
                $user->address=null;
                $user->status=1;
                $user->save();
           }
            Auth::loginUsingId($user->id);
            return \response()->json([
                'status'=>"OK",
                'message'=> 'Your number is verified',
                'user'=>Auth::user()
             ]);

             }
     }else{
           return \response()->json('Code Dose Not Match');
     }

  }




    public function get_general_setting(){

        $general_setting = GeneralSetting::latest()->first();
        return response()->json([
             'general_setting' => $general_setting,
        ]);

    }


    public function get_footer_setting(){

        $footer_setting = FooterSetting::latest()->first();
        return response()->json([
            'footer_setting' => $footer_setting,
        ]);


        }



         public function get_about_and_contact() {

        $setting = AboutAndContact::latest()->take(1)->first();
          if ($setting) {
              return response()->json([
                  "status" => "OK",
                  "setting" => $setting ,
              ]);
          }
       }




    public function get_order_shipment_return() {

        $setting = OrderShipmentAndReturnPolicy::latest()->take(1)->first();
        if ($setting) {
            return response()->json([
                "status" => "OK",
                "setting" => $setting ,
            ]);
        }
    }







}


