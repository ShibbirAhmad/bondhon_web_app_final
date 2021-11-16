<?php
$sellcenter = null;
if (session()->has('sellcenter')) {
$sellcenter = session()->get('sellcenter');
}
?>
 <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
  
      <div class="user-panel" style="border-bottom:1px solid #ddd;">

        <div class="pull-left image">
    
             <img src="{{ asset('storage/' . $sellcenter->logo) }}" class="img-circle" alt="Logo">
           
        </div>
        <div class="pull-left info" style="top:1px;">
            @if ($sellcenter != null)
                <h4 class="member_name" >{{ explode(' ', trim($sellcenter->name))[0] }}</h4>
            @endif
            <a><i class="fa fa-circle text-success"></i> Online</a>
        </div>
    </div>
    <br />

      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="active treeview">
          <router-link :to="{name:'sell_center_dashboard'}">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            </router-link>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-list"></i> <span>Store Sales</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>   <router-link :to="{ name : 'sell_center_sale_add'}"><i class="fa fa-plus "></i> Add </router-link></li>
            <li>   <router-link :to="{ name : 'sell_center_sale'}"><i class="fa fa-list "></i> Manage </router-link></li>
            <li>   <router-link :to="{ name : 'today_sales_report'}"><i class="fa fa-file "></i> Reports </router-link></li>
          </ul>
        </li>
        
        <li class="treeview">
          <a href="#">
            <i class="fa fa-list"></i> <span>Company Sales</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>   <router-link :to="{ name : 'sell_center_company_sale_add'}"><i class="fa fa-plus "></i> Add </router-link></li>
            <li>   <router-link :to="{ name : 'sell_center_company_sale'}"><i class="fa fa-list "></i> Manage </router-link></li>
            <li>   <router-link :to="{ name : 'today_sales_report'}"><i class="fa fa-file "></i> Reports </router-link></li>
          </ul>
        </li>
        
        <li class="treeview">
          <a href="#">
            <i class="fa fa-cogs"></i> <span>products</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>   <router-link :to="{ name : 'sell_center_product_add'}"><i class="fa fa-plus "></i> Add </router-link></li>
            <li>   <router-link :to="{ name : 'sell_center_product_manage'}"><i class="fa fa-list "></i> Manage </router-link></li>
          </ul>
        </li>
    
        <li class="treeview">
          <a href="#">
            <i class="fa fa-list-alt"></i> <span>product purchase</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>   <router-link :to="{ name : 'addPurchase'}"><i class="fa fa-plus "></i> Add </router-link></li>
            <li>   <router-link :to="{ name : 'purchase'}"><i class="fa fa-list "></i> Manage </router-link></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-users"></i> <span>Suppliers</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>   <router-link :to="{ name : 'supllierAdd'}"><i class="fa fa-plus "></i> Add </router-link></li>
            <li>   <router-link :to="{ name : 'supplier'}"><i class="fa fa-list "></i> Manage </router-link></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
              <i class="fa fa-money"></i> <span>Accounts</span>
              <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
                  <li>
                      <router-link :to="{ name: 'sell_center_credit'}"><i class="fa fa-eye"></i> Credit</router-link>
                  </li>
    
                  <li>
                      <router-link :to="{ name: 'sell_center_debit'}"><i class="fa fa-eye"></i>Debit</router-link>
                  </li>
          </ul>
        </li>



                       
      <li class="treeview">
          <router-link :to="{ name: 'sell_center_debit_statement'}"> <i class="fa fa-list-alt"></i>Bill Statements
          </router-link>
      </li>

      <li class="treeview">
          <router-link :to="{ name: 'sell_center_credit_statement'}"> <i class="fa fa-list-alt"></i>Credit Statements
          </router-link>
      </li>


      <li class="treeview">
        <a href="#">
            <i class="fa fa-user-circle "></i> <span>Employee</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu">
            <li>
                <router-link :to="{ name: 'add_employee_sell_center'}"><i class="fa fa-plus"></i> Add </router-link>
             </li>
            <li>
                <router-link :to="{ name: 'employee_sell_center'}"><i class="fa fa-eye"></i> Manage</router-link>
            </li>

        </ul>
      </li>
        
        <li class="treeview">
          <a href="#">
            <i class="fa fa-user"></i> <span> profile</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li> <router-link  :to="{ name: 'sell_center_profile'}"  > <i class="fa fa-eye"></i> profile</router-link></li>
            <li> <router-link  :to="{ name: 'sell_center_profile_edit' }"  > <i class="fa fa-edit"></i>edit profile info</router-link></li>
            <li> <router-link  :to="{ name: 'sell_center_password_edit'}"  > <i class="fa fa-cogs"></i> change password</router-link></li>
            
          </ul>
        </li>

      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>


