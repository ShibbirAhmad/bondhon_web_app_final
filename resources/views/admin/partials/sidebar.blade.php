<?php
$admin = null;
if (session()->has('admin')) {
$admin = session()->get('admin');
}
?>
<aside class="main-sidebar">
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel" style="border-bottom:1px solid #ddd;">

            <div class="pull-left image">
                @if ($admin != null && !empty($admin->image))
                    <img src="{{ asset('storage/' . $admin->image) }}" class="img-circle" alt="User Image">
                @else
                    <img src="{{ asset('admin/dist/img/user2-160x160.jpg') }}" class="img-circle" alt="User Image">
                @endif
            </div>
            <div class="pull-left info" style="top:1px;">
                @if ($admin != null)
                    <h4 class="admin_name" >{{ explode(' ', trim($admin->name))[0] }}</h4>
                @endif
                <a><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <br />

        <ul class="sidebar-menu" data-widget="tree">
            @if ($admin->can('view dashboard'))
                <li class="treeview">
                    <a ><i class="fa fa-dashboard"></i> <span>
                            <router-link :to="{name:'dashboard'}">Dashboard</router-link>
                        </span> </a>
                </li>

            @endif

              @if ($admin->can('manage admin'))
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-user-secret"></i> <span>Admin</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        @if ($admin->can('create admin'))

                            <li>
                                <router-link :to="{ name: 'admin_add'}"><i class="fa fa-plus"></i> Add</router-link>
                            </li>
                        @endif
                        <li>
                            <router-link :to="{ name: 'admin'}"><i class="fa fa-eye"></i>Manage</router-link>
                        </li>
                    </ul>
                </li>
            @endif

             @if ($admin->can('manage admin'))
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-users"></i> <span>Memebers</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        @if ($admin->can('create admin'))

                            <li>
                                <router-link :to="{ name: 'member_add'}"><i class="fa fa-plus"></i> Add</router-link>
                            </li>
                        @endif
                        <li>
                            <router-link :to="{ name: 'bondhon_member'}"><i class="fa fa-eye"></i>Manage</router-link>
                        </li>
                    </ul>
                </li>
            @endif

          @if ($admin->can('manage Project'))
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-list-alt"></i> <span>Project</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">

                        <li>
                            @if ($admin->can('create Project'))
                                <router-link :to="{ name: 'project_add'}"><i class="fa fa-plus"></i>Add</router-link>
                            @endif
                            <router-link :to="{ name: 'project'}"><i class="fa fa-eye"></i>Manage</router-link>

                        </li>
                    </ul>
                </li>
            @endif

           @if ($admin->can('manage investment'))
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-dollar"></i> <span>Investment</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">

                        <li>
                         <router-link :to="{ name: 'investment_add'}"><i class="fa fa-plus"></i>Add</router-link>
                        </li>
                         <li>
                        <router-link :to="{ name: 'investment'}"><i class="fa fa-eye"></i>Manage</router-link>
                        </li>
                    </ul>
                </li>
               
                <li class="treeview">
                                    <a href="#">
                                        <i class="fa fa-money"></i> <span>Loan</span>
                                        <span class="pull-right-container">
                                            <i class="fa fa-angle-left pull-right"></i>
                                        </span>
                                    </a>
                                    <ul class="treeview-menu">
                                        <li>
                                            <router-link :to="{ name: 'loan'}"><i class="fa fa-eye"></i>Manage Loan</router-link>
                                         </li>
                                    </ul>
                                </li>
                
            @endif


            @if ($admin->can('manage accounts'))

                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-money"></i> <span>Accounts</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        @if ($admin->can('manage credit'))

                            <li>
                                <router-link :to="{ name: 'credit'}"><i class="fa fa-eye"></i> Credit</router-link>
                            </li>
                        @endif
                        @if ($admin->can('manage debit'))

                            <li>
                                <router-link :to="{ name: 'debit'}"><i class="fa fa-eye"></i>Debit</router-link>
                            </li>
                        @endif

                    </ul>
                </li>

            @endif

            @if ($admin->can('manage Fund Transfer'))
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-money"></i> <span>Fund Transfer</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <router-link :to="{ name: 'fondtransferAdd'}"><i class="fa fa-eye"></i>Add</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'fondtransfer'}"><i class="fa fa-eye"></i>Manage</router-link>
                        </li>

                    </ul>
                </li>
            @endif




            @if ($admin->can('manage slider'))
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-sliders"></i> <span>Slider</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                            <li>
                                <router-link :to="{ name: 'sliderAdd'}"><i class="fa fa-plus"></i>Add</router-link>
                            </li>
                        <li>
                            <router-link :to="{ name: 'slider'}"><i class="fa fa-eye"></i>Manage</router-link>
                        </li>

                    </ul>
                </li>

                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-list-alt"></i> <span>Feature Banner</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <router-link :to="{ name: 'feature_banner'}"><i class="fa fa-eye"></i>Manage</router-link>
                        </li>

                    </ul>
                </li>

            @endif



            @if ($admin->can('manage team'))
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-user-circle "></i> <span>Office Squad</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">

                        @if ($admin->can('create team'))

                            <li>
                                <router-link :to="{ name: 'add_team_member'}"><i class="fa fa-plus"></i> Add
                                </router-link>
                            </li>
                        @endif
                        <li>
                            <router-link :to="{ name: 'team_member'}"><i class="fa fa-eye"></i> Manage</router-link>
                        </li>

                    </ul>
                </li>
            @endif

            <li class="treeview">
                <a href="#">
                    <i class="fa fa-hand-o-right"></i> <span>Sell Center Management</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                     <li>
                        <router-link :to="{ name: 'sell_center'}"><i class="fa fa-list-alt"></i>Sell Center List</router-link>
                    </li>
                       <li>
                        <router-link :to="{ name: 'sell_center_manager'}"><i class="fa fa-user-secret"></i>Sell Center Managers</router-link>
                    </li>
                </ul>
            </li>
               
            <li class="treeview">
                <router-link :to="{ name: 'debit_statement'}"> <i class="fa fa-list-alt"></i>Bill Statements
                </router-link>
            </li>

            <li class="treeview">
                <router-link :to="{ name: 'credit_statement'}"> <i class="fa fa-list-alt"></i>Credit Statements
                </router-link>
            </li>

                @if ($admin->can('manage set up'))

                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-cog"></i> <span>Setting</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                         <li>
                            <router-link :to="{ name: 'general_setting'}"><i class="fa fa-eye"></i>General Setting</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'footer_setting'}"><i class="fa fa-eye"></i>Footer Setting</router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'about_and_contact'}"><i class="fa fa-eye "></i> About And Contact Info. </router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'aggreement'}"><i class="fa fa-eye "></i> Agreement  </router-link>
                        </li>

                    </ul>
                </li>

                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-cogs"></i> <span>Basic setup</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <router-link :to="{ name: 'account_purpose'}"> <i class="fa fa-list"></i> Account purpose
                            </router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'statement_add'}"> <i class="fa fa-list-alt"></i> Debit/Credit Statement
                            </router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'role'}"><i class="fa fa-cog"></i>Member Role</router-link>
                        </li>

                         <li>
                            <a href="#" ><i class="fa fa-cog"></i> Permission Assign</a>
                        </li>

            @endif


        </ul>
        </li>


        </ul>
    </section>
</aside>
