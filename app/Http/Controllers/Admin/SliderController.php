<?php

namespace App\Http\Controllers\Admin;

use App\Models\Slider;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sliders = Slider::orderBy('id', 'DESC')->paginate(5);
        return response()->json([
            'sliders' => $sliders,
            'status' => 'SUCCESS'
        ]);
    }

    public  function getEditSlider($id){

             $slider = Slider::find($id);
             if ($slider) {
                 return response()->json([
                     "success" => "OK",
                     "slider" => $slider ,
                 ]);
             }

    }



    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'image' => 'required',

        ]);

        $slider = new Slider();
        $slider->status = 1;
        $slider->url=$request->url;
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/slider', 'public');
            $slider->image = $path;
        }
        if ($slider->save()) {
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'slider added successfully'
            ]);
        }

    }

    public function updateSlider(Request $request , $id){
           $validatedData = $request->validate([
               'url' => 'required',
           ]);

           $slider = Slider::find($id);
           $slider->url=$request->url ;
        if ($request->hasFile('image')){
               if (file_exists('storage/'.$slider->image)) {
                   unlink('storage/'.$slider->image);
               }
                $path = $request->file('image')->store('images/slider', 'public');
                $slider->image=$path ;

           }
           if($slider->save()){

            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'slider updated successfully',
            ]);

        }

    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $slider = Slider::find($id);
        if ($slider) {
            if ($slider->delete()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'slider delete successfully'
                ]);
            }
        }
    }


    public function active($id)
    {
        $slider = Slider::find($id);
        if ($slider) {
            $slider->status = 1;
            if ($slider->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'slider active successfully'
                ]);
            }
        }
    }

    public function deActive($id)
    {
        $slider = Slider::find($id);
        if ($slider) {
            $slider->status = 0;
            if ($slider->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'slider de-active successfully'
                ]);
            }
        }
    }





}
