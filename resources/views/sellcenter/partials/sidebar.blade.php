
 <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
  
     
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <li class="active treeview">
          <router-link :to="{name:'sell_center_dashboard'}">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            </router-link>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-cogs"></i> <span>Sales</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>   <router-link :to="{ name : 'sell_center_sale_add'}"><i class="fa fa-plus "></i> Add </router-link></li>
            <li>   <router-link :to="{ name : 'sell_center_sale'}"><i class="fa fa-list "></i> Manage </router-link></li>
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