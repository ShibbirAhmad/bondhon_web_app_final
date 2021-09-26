<?php

use Illuminate\Support\Facades\Route;


Route::group([
    'namespace' => 'Frontend',
], function () {

   //  $exitCode = Artisan::call('optimize:clear');
     Route::get('/','HomeController@index')->name('home');
     Route::get('about','HomeController@about')->name('about');
     Route::get('contact','HomeController@contact')->name('contact');
     Route::get('blog','HomeController@blog')->name('blog');
     Route::get('service','HomeController@bondhonService')->name('service');


    Route::get('project/{slug}', 'HomeController@projectDetails')->name('project_details');
    Route::get('projects', 'HomeController@projects')->name('projects');

     Route::get('our/members', 'HomeController@bondhoMembers')->name('bondhon_members');

     // about foooter route
    Route::get('get/info/abou/contact','HomeController@get_about_and_contact');

   //setting route is here
    Route::get('footer/setting','HomeController@get_footer_setting');
    Route::get('api/public/general/setting','HomeController@get_general_setting');
    // public carrier route
    Route::get('carrier/list','CarrierController@index');
    Route::get('carrier/details/{id}','CarrierController@carrier_details');
    Route::post('api/carrier/apply/by/job/{id}','CarrierController@job_apply');
    //route for get team
    Route::get('team/members','HomeController@get_team_members');
    //route for subscirber and contact
    Route::post('add/subscriber','SubscriberController@addSubscriber');
  


});


//:::::start the backend route::::::
Route::group([
    'middleware' => 'admin',
    'namespace' => 'Admin',
    //'prefix' => 'backend/'
], function () {

     //start dashboard route

    Route::get('api/admin/to/member/dashboard/{id}', 'LoginController@adminAccessMember');
    Route::get('api/dashboard/analysis', 'DashboardController@index');
    Route::get('api/list/member/collections', 'DashboardController@memberCollections');
    Route::get('api/list/member/profits', 'DashboardController@memberProfits');
    Route::get('api/update/member/password', 'DashboardController@updatePassword');
    Route::get('api/member/profile/info', 'DashboardController@memberProfile');
    Route::post('api/edit/member/profile/info/{id}', 'DashboardController@memberProfileUpdate');



   //send message url is here
   Route::post('api/send/message/to/customer','MessageController@send_message');

   //route for display subscriber
   Route::get('api/display/subscribers','OthersController@subscribers');
   Route::get('api/subscriber/search/{data}','OthersController@search_subscribers');
   Route::get('api/subscriber/remove/{id}','OthersController@remove_subscriber');
   Route::get('api/subscriber/exports','OthersController@export_subscriber');

   //route for contact user message dispaly
   Route::get('api/display/contacts','OthersController@contact_message');
   Route::get('api/get/contacted/customer/{id}','OthersController@get_contacted_customer');
   Route::get('api/contacted/customer/search/{data}','OthersController@search_contacted_customer');
   Route::get('api/reply/message/to/contacted/customer/{to}/{subject}/{message}','Contact_replyController@reply_contacted_customer');


  // start team route here
   Route::get('team/members/list','TeamController@index');
   Route::post('team/members/add','TeamController@addTeamMember');
   Route::get('team/members/edit/{id}','TeamController@getEditTeamMember');
   Route::post('team/members/update/{id}','TeamController@updateTeamMember');
   Route::get('team/members/trash/{id}','TeamController@destroyTeamMember');
   Route::get('team/members/active/{id}','TeamController@activeTeamMember');
   Route::get('team/members/deactive/{id}','TeamController@deactiveTeamMember');
   Route::get('api/team/members/search/{data}','TeamController@search_team_member');

   Route::get('api/member/salary/list/{id}','TeamController@salary');
   Route::get('api/member/salary/list/{id}/{month}','TeamController@salaryDetails');
   Route::get('/api/employee/salary/paid','TeamController@paidSalary');


   // end team route here


  //start account  route here....
  Route::get('api/account/purpose/list','AccountController@get_purpose_list');
  Route::post('api/account/purpose/add','AccountController@add_purpose');
  Route::get('api/account/purpose/edit/{id}','AccountController@get_edit_purpose');
  Route::post('api/account/purpose/update/{id}','AccountController@update_purpose');
  // end  account route here



  //start carrier controller here

  Route::get('carrier/list','CarrierController@index');
  Route::post('carrier/add','CarrierController@add_carrier');
  Route::get('carrier/edit/{id}','CarrierController@getEdit_carrier');
  Route::post('carrier/update/{id}','CarrierController@update_carrier');
  Route::get('carrier/trash/{id}','CarrierController@destroy_carrier');
  Route::get('carrier/active/{id}','CarrierController@active_carrier');
  Route::get('carrier/deactive/{id}','CarrierController@deactive_carrier');
  Route::get('api/applied/applier/job/{id}','CarrierController@job_applied');
  Route::get('api/download/user/resume/{id}','CarrierController@download_applied_user_resume');

  // end carrier controller here



    //started customer
    Route::get('/list/customer','CustomerController@getCustomer');
    Route::get('/search/customer/{data}','CustomerController@searchCustomer');
    Route::get('api/export/customers','CustomerController@export_customers');
    Route::get('api/export/retail/customers','CustomerController@export_retail_customers');
    Route::get('api/customers/export/wholesale','CustomerController@export_wholesale_customers');
    Route::get('api/export//customers/officesale','CustomerController@export_officesale_customers');
    //end customer



     //start the slider route
    Route::get('/list/slider', 'SliderController@index');
    Route::post('/slider/add', 'SliderController@store');
    Route::get('/get/edit/slider/{id}', 'SliderController@getEditSlider');
    Route::post('/slider/update/{id}', 'SliderController@updateSlider');
    Route::get('active/slider/{id}', 'SliderController@active');
    Route::get('deActive/slider/{id}', 'SliderController@deActive');
    Route::get('delete/slider/{id}', 'SliderController@destroy');
    Route::get('api/get/feature/banner', 'SliderController@FeatureBanner');
    Route::post('api/edit/banner/{id}', 'SliderController@updateFeatureBanner');



    //start the product route
    Route::get('api/list/project', 'ProjectController@index');
    Route::post('api/bondhon/add/project', 'ProjectController@addProject');
    Route::get('api/active/project/{id}', 'ProjectController@approved');
    Route::get('api/de-active/project/{id}', 'ProjectController@pending');
    Route::get('api/get/project/{id}', 'ProjectController@ProjectItem');
    Route::get('api/project/details/account/{id}', 'ProjectController@ProjectDetaisAccount');
    Route::get('api/delete/project/image/{id}', 'ProjectController@deleteImage');
    Route::post('api/bondhon/project/update/{id}', 'ProjectController@updateProject');
    Route::post('/update/product/image/{id}', 'ProductController@UpdateProductImage');
    Route::get('search/product/{search}', 'ProductController@search');


    Route::get('api/order/comment', 'OrderController@comment');

    //order bulk action route
    Route::get('order/label/print/{id}', 'OrderController@labelPrint');
    Route::get('order/invoice/print/{id}', 'OrderController@invoicePrint');

    Route::get('update/commision/reseller/order/{id}', 'OrderController@updateResellerCommison');
    Route::get('order/return/item/{id}', 'OrderController@returnItem');


    //start the others  route
    Route::get('/others', 'OthersController@others');

    //site admin
      Route::post('api/site/admin/add', 'AdminController@AddSiteAdmin');
      Route::post('api/update/site/admin/{id}', 'AdminController@updateSiteAdmin');

    //start the admin route
    Route::get('/single/admin', 'LoginController@admin');
    Route::get('/logout/admin', 'LoginController@logout');
    Route::get('/logout/member', 'LoginController@logoutMember');
    Route::get('api/list/admin', 'AdminController@index');
    Route::get('api/member/list', 'AdminController@memberList');
    Route::post('api/add/admin', 'AdminController@store');
    Route::get('api/search/admin/{data}', 'AdminController@search_admin');
    Route::get('deactive/admin/{id}', 'AdminController@deactive');
    Route::get('active/admin/{id}', 'AdminController@active');
    Route::get('api/edit/admin/{id}', 'AdminController@edit');
    Route::get('api/admin/account/details/{id}', 'AdminController@adminDetails');
    Route::post('api/update/admin/{id}', 'AdminController@update');
    Route::get('api/update/admin/password', 'AdminController@updatePassword');
    Route::get('/api/role/get/admin/{id}', 'AdminController@getAdminRole');
    Route::post('/api/role/update/admin/{id}', 'AdminController@updateAdminRole');
    Route::get('api/get/admin/permission/list/{id}', 'AdminController@getAdminPermission');
    Route::post('api/assign/admin/permissions/{id}', 'AdminController@assignAdminPermission');



    //start the accounts route
    //start credit route
    Route::get('credits', 'AccountController@get_credit');
    Route::post('/api/credit/store', 'AccountController@store_credit');
    Route::get('credit/edit/{id}', 'AccountController@edit_credit');
    Route::post('credit/update/{id}', 'AccountController@update_credit');
    Route::get('credit/destroy/{id}', 'AccountController@destroy_credit');
    Route::get('api/export/credit', 'AccountController@export_credit');
    Route::get('api/credit/purpose/list', 'AccountController@credit_purpose_list');
    Route::get('api/debit/purpose/list', 'AccountController@debit_purpose_list');

    //credit due route......
    Route::get('api/credit/due', 'CreditDueController@index');
    Route::get('api/due/to/paid/{id}', 'CreditDueController@duePaid');



    //start debit route
    Route::get('debits', 'AccountController@get_debit');
    Route::post('/api/debit/store', 'AccountController@store_debit');
    Route::get('debit/edit/{id}', 'AccountController@edit_debit');
    Route::get('api/export/debit', 'AccountController@export_debit');
    Route::post('debit/update/{id}', 'AccountController@update_debit');
    Route::get('debit/destroy/{id}', 'AccountController@destroy_debit');
    Route::get('api/account/purpose', 'AccountController@accountPurpose');
    Route::get('api/employee/list', 'AccountController@employeeList');



   //start the report route
   Route::get('api/order/report', 'ReportController@orderReport');
   Route::get('api/sale/report/office', 'ReportController@officeSaleReport');
   Route::get('api/get/office/sale/pdf/{start_date}/{end_date}', 'ReportController@office_sale_report_pdf');
   Route::get('api/get/sale/order/pdf/{start_date}/{end_date}', 'ReportController@order_sale_report_pdf');
   Route::get('api/get/purchase/pdf/{start_date}/{end_date}', 'ReportController@purchase_report_pdf');
   Route::get('supplier/report', 'ReportController@supplierReport');
   Route::get('account/report', 'ReportController@accountReport');
   Route::get('purchase/report', 'ReportController@purchaseReport');
   Route::get('profite/report', 'ReportController@profitReport');
   Route::get('sale/profite/report', 'ReportController@saleProfite');
   Route::get('order/profite/report', 'ReportController@orderProfite');



      //start role and permission route
    Route::post('api/role/store','RoleController@store');
    Route::get('api/roles','RoleController@index');
    Route::get('api/permissions/edit/role/{id}','RoleController@editRolePermissons');
    Route::post('api/permissions/update/role/{id}','RoleController@updateRolePermissons');


    Route::post('api/fond/transfer','FondTransferController@store');
    Route::get('api/fond/transfer','FondTransferController@index');

    //company ivestment route is here
    Route::get('api/company/investor','InvestmentController@get_ivestors');
    Route::post('api/company/investor/add','InvestmentController@store');
    Route::get('api/get/company/investor/info/{id}','InvestmentController@edit');
    Route::post('api/company/investor/edit/info/{id}','InvestmentController@update');
    Route::get('api/company/investor/details/{id}','InvestmentController@get_ivestor_details');
    Route::get('api/add/more/invest/{id}','InvestmentController@add_more_invest');
    Route::get('api/company/investor/list','InvestmentController@investor_list');
    Route::get('api/download/all/investment/pdf','InvestmentController@download_investors');
    Route::get('api/investor/paid/history/download/pdf/{id}','InvestmentController@download_profit_paid');
    Route::get('api/invest/history/download/pdf/{id}','InvestmentController@download_investor_record');


    //company bill statements route is here
    Route::get('api/bill/statement/list/type/credit','BillStatementController@credit_statement_list');
    Route::get('api/bill/statement/list/type/debit','BillStatementController@debit_statement_list');
    Route::post('api/bll/statement/add','BillStatementController@store');
    Route::get('api/bll/per/month/add','BillStatementController@store_bill_per_month');
    Route::get('api/bll/statement/details/{id}','BillStatementController@bill_statement_details');



    //order export
    Route::get('/order/export/{status}/{courier_id}', 'OrderController@exportOrder');
    Route::get('/export/selected/item/{id}', 'OrderController@exportOrderSelectedItem');


    //page setting route is start form here
    Route::get('api/get/about/contact','PageInfoController@get_about_and_contact_info');
    Route::post('api/edit/about/contact/info/{id}','PageInfoController@edit_about_and_contact_info');

    Route::get('api/get/aggreement/info','PageInfoController@aggreement');
    Route::post('api/edit/aggreement/info/{id}','PageInfoController@edit_aggreement');


    // general setting route is start from here
    Route::get('api/get/site/info','GeneralSettingController@get_site_info');
    Route::post('api/edit/site/info/{id}','GeneralSettingController@edit_site_info');

    //footer setting route is start form here
    Route::get('api/get/site/footer/info','FooterSettingController@get_footer_info');
    Route::post('api/edit/site/footer/info/{id}','FooterSettingController@edit_footer_info');

    
     //loaner
     Route::post('api/loaner/store','LoanerController@store');
     Route::get('api/loaner','LoanerController@index');
     Route::post('api/loan/store','LoanerController@storeLoan');
 
    //start the loan route
     Route::get('api/loan','LoanController@index');
     Route::post('api/loaner/store','LoanController@store');
     Route::get('api/get/loaner/{id}','LoanController@getLoaner');
     Route::post('api/update/loaner/info/{id}','LoanController@editLoanerInfo');
     Route::get('api/loaners','LoanController@loaners');
     Route::get('api/loaners/details/{id}','LoanController@loanersdetails');
     Route::get('api/download/all/loan/pdf','LoanController@download_all_record');
     Route::get('api/loan/history/download/pdf/{id}','LoanController@download_loan_history');
     Route::get('api/loand/paid/history/download/pdf/{id}','LoanController@download_loan_paid_history');





    //sellcenter routes
    Route::get('api/sellcenter/list','sellCenterController@index');
    Route::post('api/sellcenter/add','sellCenterController@addSellCenter');
    Route::get('api/admin/access/to/sell/center/{id}','sellCenterController@adminAccessSellCenter');
    Route::get('api/sellcenter/edit/item/{id}','sellCenterController@sellcenterItem');
    Route::post('api/sellcenter/update/{id}','sellCenterController@updateSellCenter');
    //sellcenter manager routes
    Route::get('api/sellcenter/manager/list','sellCenterController@managers');
    Route::post('api/sellcenter/manager/add','sellCenterController@addManager');
    Route::get('api/sellcenter/manager/edit/item/{id}','sellCenterController@getManager');
    Route::get('api/sellcenter/manager/delete/{id}','sellCenterController@removeManager');
    Route::post('api/sellcenter/manager/update/{id}','sellCenterController@updateManager');
   
});

Route::post('/admin/login', 'Admin\LoginController@login');
Route::get('check/session/admin', 'Admin\LoginController@adminSessionCheck');
Route::get('check/session/member', 'Admin\LoginController@memberSessionCheck');
Route::get('/resller', 'Reseller\HomeController@home');


// //social login
// Route::get('auth/redirect/{provider}', 'Admin\SocialAuthController@redirect');
// Route::get('{provider}/callback', 'Admin\SocialAuthController@callback');

//opt verify
Route::post('send/otp', 'Frontend\HomeController@SendOtp');
Route::get('/verify/otp/code', 'Frontend\HomeController@verifyCodeOtp');



Route::get('login/google', 'Frontend\Social\GoogleLoginController@redirectToProvider');
Route::get('callback/google', 'Frontend\Social\GoogleLoginController@handleProviderCallback');



// laravel and vue mix routing
// when any one type backend / anything as url
// then laravel router transfer  to vue-routing

Route::get('/backend/{any}', function () {
      return view('admin.master');
})->where('any', '^(?!api\/)[\/\w\.\,-]*');



// laravel and vue mix routing
// when any one type public / anything as url
// then laravel router transfer  to vue-routing

  Route::get('/member/{any}', function () {

         return view('member.master');

  })->where('any', '^(?!api\/)[\/\w\.\,-]*');


  // sell center mix routes 
  Route::get('/sell/center/{any}', function () {

          return view('sellcenter.app');

  })->where('any', '^(?!api\/)[\/\w\.\,-]*');

