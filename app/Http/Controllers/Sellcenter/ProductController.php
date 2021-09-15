<?php

namespace App\Http\Controllers\Sellcenter;


use Picqer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\SellCenterProduct;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session ;

class ProductController extends Controller
{

    public function index(Request $request)
    {

      //  return $request->all();
        $paginate = $request->item ?? 20;

        if($request->status=="all"){
            $products = SellCenterProduct::where('sell_center_id',session()->get('sellcenter')['id'])->orderBy('id', 'DESC')->with(['purchaseItems'])->paginate($paginate);

        }else{
            $products = SellCenterProduct::where('sell_center_id',session()->get('sellcenter')['id'])->orderBy('id', 'DESC')->with(['purchaseItems'])->where('status',$request->status)->paginate($paginate);

        }
        return response()->json([
            'status' => 'SUCCESS',
            'products' => $products
        ]);
    }




    public function slugCreator($string, $delimiter = '-') {
        // Remove special characters
          $string = preg_replace("/[~`{}.'\"\!\@\#\$\%\^\&\*\(\)\_\=\+\/\?\>\<\,\[\]\:\;\|\\\]/", "", $string);
        // Replace blank space with delimeter
        $string = preg_replace("/[\/_|+ -]+/", $delimiter, $string);
        return $string;
    }


    public function storeProduct(Request $request){

        $validatedData = $request->validate([
            'name' => 'required ',
            'sale_price' => 'required',
            'price' => 'required',
        ]);

        //get products tables max id
        $id = SellCenterProduct::max('id') ?? 0;
        $product_code = 1001 + $id;
        //save product data
        $product = new SellCenterProduct();
        $product->sell_center_id= session()->get('sellcenter')['id'] ;
        $product->name = $request->name;
        $product->code = $product_code;
        $product->slug = $this->slugCreator(strtolower($request->name)).'-'.$product_code;
        $product->sale_price = $request->sale_price;
        $product->price = $request->price;
        $product->discount = $request->discount ?? 0;
        $product->status = 1;
        $product->details = $request->details ?? null;
        //save product multiple image in store directory
        if ($request->hasFile('image')) {
            $files = $request->file('image');
            foreach ($files as $file) {
                $path = $file->store('images/products', 'public');
                $product->image = $path;
            }
        }
        $product->save();
        //return success message
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'product added successfully'
        ]);
    

    }



    public function get_edit_product($id){

          $product = SellCenterProduct::findOrFail($id);
                    return response()->json([
                        "status" => "OK",
                        "product" => $product ,
                    ]);
    }




    public function edit_product(Request $request , $id){
        $validatedData = $request->validate([
            'name' => 'required ',
            'sale_price' => 'required',
            'price' => 'required',
        ]); 
        //save product data
        $product = SellCenterProduct::findOrFail($id);
        $product->name = $request->name;
        $product->slug = $this->slugCreator(strtolower($request->name)).'-'.$product->code;
        $product->sale_price = $request->sale_price;
        $product->price = $request->price;
        $product->discount = $request->discount ?? 0;
        $product->details = $request->details;
        //save product multiple image in store directory
        if ($request->hasFile('image')) {
            $files = $request->file('image');
            foreach ($files as $file) {
                $path = $file->store('images/products', 'public');
                $product->image = $path;
            }
        }
        $product->save();
        //return success message
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'updated successfully'
        ]);
    
    }


   public function delete_product_image($id){

        $product=SellCenterProduct::findOrFail($id);
        $product->image = '' ;
        $product->save();
            return response()->json([
                'status'=>'SUCCESS',
                'message'=>'product image  deleted'
            ]);
        
   }


    public function searchByCode($search){
       $products = SellCenterProduct::where('sell_center_id',session()->get('sellcenter')['id'])
                                     ->where('code',$search)
                                     ->get();
       return response()->json([
           'status' => 'SUCCESS',
           'products' => $products
       ]);
   }

   public function searchProducts($search){

       $products = SellCenterProduct::where('sell_center_id',session()->get('sellcenter')['id'])
                                     ->where('code',$search)
                                     ->orWhere('name','like','%'.$search.'%')
                                     ->with(['purchaseItems'])
                                     ->paginate(10);
       return response()->json([
           'status' => 'SUCCESS',
           'products' => $products
       ]);
   }

   
   public function searchForSale($search){

    $products = SellCenterProduct::where('sell_center_id',session()->get('sellcenter')['id'])
                                  ->where('stock','>=',1)
                                  ->where('code',$search)
                                  ->orWhere('name','like','%'.$search.'%')
                                  ->get();
        return response()->json([
            'status' => 'SUCCESS',
            'products' => $products
        ]);
    }

   public function approved($id) {
       $product = SellCenterProduct::findOrFail($id);
       if ($product) {
           $product->status = 1;
           if ($product->save()) {
               return response()->json([
                   'status' => 'SUCCESS',
                   'message' => 'product approved successfully'
               ]);
           }
       }
   }

   public function pending($id){
       $product = SellCenterProduct::find($id);
       if ($product) {
           $product->status = 2;
           if ($product->save()) {
               return response()->json([
                   'status' => 'SUCCESS',
                   'message' => 'product pending successfully'
               ]);
           }
       }
   }


   

   public function deny($id) {
       $product = SellCenterProduct::findorFail($id);
       if ($product) {
           $product->status = 3;
           if ($product->save()) {
               return response()->json([
                   'status' => 'SUCCESS',
                   'message' => 'product deny successfully'
               ]);
           }
       }
   }


    public function productStatus($id){

        $product = SellCenterProduct::findOrFail($id);
        if ($product->status == 1) {
            $product->status= 0 ;
            $product->save();
        }else{
            $product->status= 1 ;
            $product->save(); 
        }
    
            return response()->json([
                "status"  => "SUCCESS",
                "message"  => "status changed"
            ]);
        
    }













}
