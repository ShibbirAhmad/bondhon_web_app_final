<?php

//route for sellcenter login and registration and authorizatoin
Route::post('api/sellcenter/login','Sellcenter\LoginController@check_login') ;
Route::get('api/sellcenter/login/session/check','Sellcenter\LoginController@check_session') ;
Route::post('api/sellcenter/register','Sellcenter\LoginController@register_sellcenter')->name('sellcenter.register');

Route::post('api/sellcenter/password/reset/send/code','Sellcenter\LoginController@send_reset_code');
Route::post('api/sellcenter/verify/reset/code/{phone}','Sellcenter\LoginController@sellcenter_reset_code_verified');
Route::post('api/sellcenter/new/password/set/{phone}','Sellcenter\LoginController@sellcenter_set_new_password');



Route::group([
                'middleware' => 'sellcenter',
                'namespace' => 'Sellcenter'
            ],function(){

        Route::get('api/sellcenter/logout','LoginController@logout') ;
        Route::get('api/sellcenter/products','ProductController@index');
        Route::post('api/sellcenter/product/store','ProductController@store_product');

        // route for dashboard data
         Route::get('api/get/sellcenter/dashboard/data','HomeController@get_dashboard_highlight_info');

        //start the others  route . to load other data of products
        Route::get('api/product/others', 'OthersController@others');

       //depended route
        Route::get('api/category/wise/subCategory/{id}', 'CategoryController@categoryWiseSubCategory');
        Route::get('api/subCategory/wise/subSubCategory/{id}', 'SubCategoryController@subCategoryWiseSubCategory');
        Route::get('api/attribute/wise/variant/{id}', 'AttributeAndVariantController@attributeWiseVariant');

        //route for search product, edit product and delete product if it pending situation
        Route::get('api/sellcenter/search/product/{search}','ProductController@search_products');
        Route::get('api/sellcenter/get/edit/product/{id}','ProductController@get_edit_product');
        Route::post('api/sellcenter/edit/product/{id}','ProductController@edit_product');
        Route::get('api/sellcenter/delete/existing/product/image/{id}','ProductController@delete_product_image');
        Route::get('api/sellcenter/delete/product/{id}','ProductController@delete_product');

        //route for sellcenter order
        Route::get('api/sellcenter/order','OrderController@get_sellcenter_order');
        Route::get('api/sellcenter/order/view/{id}','OrderController@sellcenter_order_details');

        //sellcenter profile route
        Route::get('api/get/single/sellcenter','HomeController@get_current_sellcenter') ;
        Route::post('api/get/single/sellcenter/update','HomeController@current_sellcenter_update') ;
        Route::post('api/get/single/sellcenter/password/update','LoginController@current_sellcenter_password_update') ;

});




?>