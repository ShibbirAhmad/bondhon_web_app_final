<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BlogPost ;

class BlogPostController extends Controller
{
          /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

         $posts= BlogPost::orderBy('id','DESC')->paginate(10);

        return view('admin.blog.index',compact('posts'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

          return view('admin.blog.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required' ,
            'image'   => 'required',
        ]);
                 $max_id=BlogPost::max('id')??1;
                 $slug=$max_id+1 .'-'.str_slug($request->title);
                 $blog = new BlogPost() ;
                 $blog->admin_id=session()->get('admin')['id'];
                 $blog->title = $request->title ;
                 $blog->slug =$slug;
                 $blog->description = $request->description ;

                 if (isset($request->status)) {

                     $blog->status = true ;
                 }

                 if ($request->hasFile('image')) {

                        $file_path = $request->file('image')->store('blog/images','public');
                        $blog->image=$file_path ;

                 }


                 if ($blog->save()) {

                       return redirect()->route('posts.index')->with('message', 'new post created');
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

        $post = BlogPost::findOrFail($id);

         return view('admin.blog.show',compact('post'));
    }



    //function for publish/unpublish post

    public function deactive($id){

        $blog = BlogPost::where("id", $id)->first();
        $blog->status = false;
        if ($blog->save()) {
            return response()->json([
                'success' => 'Ok',
                'data' => $blog,
            ]);
        }

    }



    public function active($id){

        $blog = BlogPost::where("id", $id)->first();
        $blog->status = true;
        if ($blog->save()) {
            return response()->json([
                'success' => 'Ok',
                'data' => $blog,
            ]);
        }

  }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = BlogPost::findOrFail($id);

         return view('admin.blog.edit',compact('post'));
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
         $blog= BlogPost::findOrFail($id);

        $validator = Validator::make($request->all(),[

            'title' => 'required',
            'description' => 'required' ,

        ]);


            if (!$validator->fails()) {

                 $blog->admin_id=session()->get('admin')['id'];
                 $blog->title = $request->title ;
                 $blog->description = $request->description ;

                 if (isset($request->status)) {

                     $blog->status = true ;
                 }



                 if ($request->hasFile('image')) {


                     if (file_exists('storage/'.$blog->image)) {

                           unlink('storage/'.$blog->image);

                   }

                        $file_path = $request->file('image')->store('blog/images','public');
                        $blog->image=$file_path ;

                 }


                 if ($blog->save()) {

                       return back()->with('message', 'This post updated');
                 }


            }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
         $blog = BlogPost::findOrFail($id);
         if ($blog->delete()) {

               return back()->with('message','one post removed');
         }
    }
}

