<?php

use Illuminate\Support\Facades\Route;

//route for sellcenter login and registration and authorizatoin
Route::post('api/sellcenter/login','Sellcenter\LoginController@check_login') ;

Route::post('api/sellcenter/password/reset/send/code','Sellcenter\LoginController@send_reset_code');
Route::post('api/sellcenter/verify/reset/code/{phone}','Sellcenter\LoginController@sellcenter_reset_code_verified');
Route::post('api/sellcenter/new/password/set/{phone}','Sellcenter\LoginController@sellcenter_set_new_password');


Route::group([
                'middleware' => 'sellcenter',
                'namespace' => 'Sellcenter'
            ],function(){
                
        Route::get('api/sellcenter/session/check','LoginController@checkSellCenterSession') ;
        Route::get('api/sellcenter/logout','LoginController@logout') ;
        Route::get('api/sellcenter/products','ProductController@index');
        Route::post('api/sellcenter/product/store','ProductController@storeProduct');
        // route for dashboard data
         Route::get('api/sellcenter/dashboard/analysis','HomeController@DashboardHighlightInfo');
        //start the others  route . to load other data of products
        Route::get('api/product/others', 'OthersController@others');
        //route for search product, edit product and delete product if it pending situation
        Route::get('api/sellcenter/search/product/{search}','ProductController@searchProducts');
        Route::get('api/sellcenter/search/product/for/company/sale/{code}', 'ProductController@ProductForCompanySale');
        Route::get('api/sellcenter/search/product/for/sale/{search}','ProductController@searchForSale');
        Route::get('api/search/product/by/code/{search}','ProductController@searchByCode');
        Route::get('api/active/deactive/sellcenter/product/{id}','ProductController@productStatus');
        Route::get('api/sellcenter/get/edit/product/{id}','ProductController@get_edit_product');
        Route::post('api/sellcenter/edit/product/{id}','ProductController@edit_product');
        Route::get('api/sellcenter/delete/existing/product/image/{id}','ProductController@delete_product_image');
        Route::get('api/sellcenter/delete/product/{id}','ProductController@delete_product');

        //route for sellcenter order
        Route::get('api/sellcenter/order','OrderController@get_sellcenter_order');
        Route::get('api/sellcenter/order/view/{id}','OrderController@sellcenter_order_details');

        //sellcenter profile route
        Route::get('api/get/single/sellcenter','HomeController@get_current_sellcenter') ;
        Route::post('api/sellcenter/update','HomeController@current_sellcenter_update') ;
        Route::post('api/sellcenter/password/update','LoginController@current_sellcenter_password_update') ;



        //supplier routes    
        Route::get('/list/supplier', 'SupplierController@index');
        Route::post('api/supplier/add', 'SupplierController@store');
        Route::get('/active/supplier/{id}', 'SupplierController@active');
        Route::get('/deActive/supplier/{id}', 'SupplierController@deActive');
        Route::get('/edit/supplier/{id}', 'SupplierController@edit');
        Route::post('/update/supplier/{id}', 'SupplierController@update');
        Route::get('api/search/supplier/{data}', 'SupplierController@search_supplier');
        Route::get('api/sellcenter/supplier/amount/{id}', 'SupplierController@supplierAmountList');
        Route::get('/api/pdf/suplier/amount/{id}', 'SupplierController@pdfSupplierAmount');
        Route::get('/api/pdf/suplier/purchase/{id}', 'SupplierController@pdfSupplierPurchase');
        Route::get('api/supplier/list', 'SupplierController@supplierList');
        Route::get('api/export/supplier', 'SupplierController@export_supplier');

        //start the purchase route
        Route::get('api/list/purchase', 'PurchaseController@index');
        Route::post('add/purchase', 'PurchaseController@store');
        Route::get('/active/purchase/{id}', 'PurchaseController@active');
        Route::get('/deActive/purchase/{id}', 'PurchaseController@deActive');
        Route::get('/edit/purchase/{id}', 'PurchaseController@edit');
        Route::post('/update/purchase/{id}', 'PurchaseController@update');
        Route::get('/destroy/purchase/{id}', 'PurchaseController@destroy');
        Route::get('details/purchase/{id}', 'PurchaseController@details');
        Route::get('api/purchase/search/data/{data}', 'PurchaseController@search_according_data');
        Route::get('api/purchase/date/wise/filter', 'PurchaseController@according_date_wise');
        Route::post('api/purchase/memo/upload','PurchaseController@uploadFile');
    
 

        //start credit route
        Route::get('api/sellcenter/credits', 'AccountController@get_credit');
        Route::post('api/sellcenter/credit/store', 'AccountController@store_credit');
        Route::get('api/sellcenter/credit/edit/{id}', 'AccountController@edit_credit');
        Route::post('api/sellcenter/credit/update/{id}', 'AccountController@update_credit');
        Route::get('api/sellcenter/credit/destroy/{id}', 'AccountController@destroy_credit');
        Route::get('api/sellcenter/export/credit', 'AccountController@export_credit');
        Route::get('api/sellcenter/credit/purpose/list', 'AccountController@credit_purpose_list');
        Route::get('api/sellcenter/debit/purpose/list', 'AccountController@debit_purpose_list');

        //credit due route......
        Route::get('api/sellcenter/credit/due', 'CreditDueController@index');
        Route::get('api/sellcenter/due/to/paid/{id}', 'CreditDueController@duePaid');

        //start debit route
        Route::get('api/sellcenter/debits', 'AccountController@get_debit');
        Route::post('/api/sellcenter/debit/store', 'AccountController@store_debit');
        Route::get('api/sellcenter/debit/edit/{id}', 'AccountController@edit_debit');
        Route::get('api/sellcenter/export/debit', 'AccountController@export_debit');
        Route::post('api/sellcenter/debit/update/{id}', 'AccountController@update_debit');
        Route::get('api/sellcenter/debit/destroy/{id}', 'AccountController@destroy_debit');
       

       //sales routes 
       Route::get('api/sellcenter/sales', 'SaleController@index');
       Route::get('api/sellcenter/sales/filter', 'SaleController@filterSales');      
       Route::get('api/filter/sell/center/company/sales', 'SaleController@FilterCompanySales');
       Route::get('api/sellcenter/sale/item/{id}', 'SaleController@saleItem');
       Route::post('api/sellcenter/sale/update/{id}', 'SaleController@update');
       Route::post('api/sellcenter/sale/add', 'SaleController@store');
       Route::get('api/sell/center/company/sales', 'SaleController@CompanySales');
       Route::post('api/sell/center/company/sale/store', 'SaleController@CompanySaleStore');
       Route::get('api/sell/center/company/sale/view/{invoice_no}', 'SaleController@CompanySaleView');
       Route::get('api/print/sell/center/sale/invoice/{invoice_no}', 'SaleController@CompanySalePrint');

       //new
       Route::get('api/search/sell/center/customer/{phone}', 'SaleController@searchCustomer');
       Route::get('api/sellcenter/coureir/list', 'SaleController@Couriers');
       Route::get('api/sellcenter/coureir/{id}', 'SaleController@EditCourer');
       Route::get('api/sell/center/courier/de-active/{id}', 'SaleController@DeActiveCourier');
       Route::get('api/sell/center/courier/active/{id}', 'SaleController@ActiveCourier');
       Route::post('api/sellcenter/coureir/store', 'SaleController@StoreCourier');
       Route::post('api/sellcenter/coureir/update/{id}', 'SaleController@UpdateCourier');
      


         // start employee route here
        Route::get('api/sellcenter/employee/list','EmployeeController@index');
        Route::post('api/sellcenter/employee/add','EmployeeController@addEmployee');
        Route::get('api/sellcenter/employee/edit/{id}','EmployeeController@getEditEmployee');
        Route::post('api/sellcenter/employee/update/{id}','EmployeeController@updateEmployee');
        Route::get('api/sellcenter/employee/trash/{id}','EmployeeController@destroyEmployee');
        Route::get('api/api/sellcenter/employee/search/{data}','EmployeeController@search_employee');
        Route::get('api/sellcenter/employee/salary/list/{id}','EmployeeController@salaryDetails');

        // end employee route here
            
        //company bill statements route is here
        Route::get('api/sellcenter/bill/statement/list/type/credit','BillStatementController@credit_statement_list');
        Route::get('api/sellcenter/bill/statement/list/type/debit','BillStatementController@debit_statement_list');
        Route::post('api/sellcenter/bill/statement/add','BillStatementController@store');
        Route::get('api/sellcenter/bill/statement/details/{id}','BillStatementController@bill_statement_details');
        Route::get('api/sellcenter/sale/reports/analysis','SaleController@saleAnalysis');


    });




?>