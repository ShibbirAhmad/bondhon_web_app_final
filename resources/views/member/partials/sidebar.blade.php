<?php
$member = null;
if (session()->has('member')) {
$member = session()->get('member');
}
?>
<aside class="main-sidebar">
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel" style="border-bottom:1px solid #ddd;">

            <div class="pull-left image">
                @if ($member != null && !empty($member->image))
                    <img src="{{ asset('storage/' . $member->image) }}" class="img-circle" alt="User Image">
                @else
                    <img src="{{ asset('member/dist/img/user2-160x160.jpg') }}" class="img-circle" alt="User Image">
                @endif
            </div>
            <div class="pull-left info" style="top:1px;">
                @if ($member != null)
                    <h4 class="member_name" >{{ explode(' ', trim($member->name))[0] }}</h4>
                @endif
                <a><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <br />

        <ul class="sidebar-menu" data-widget="tree">

            <li class="treeview">
                <a ><i class="fa fa-dashboard"></i> <span>
                        <router-link :to="{name:'member_dashboard'}">Dashboard</router-link>
                    </span> </a>
            </li>


            <li class="treeview">
                <a ><i class="fa fa-dollar"></i> <span>
                     <router-link :to="{ name: 'member_collection_history'}"> Collections</router-link>
                </span> </a>
            </li>

            <li class="treeview" >
                 <a ><i class="fa fa-dollar"></i> <span>
                <router-link :to="{ name: 'member_profit_history'}"> Profits </router-link>
                </span> </a>
            </li>


            <li class="treeview" >
                 <a ><i class="fa fa-user"></i> <span>
                <router-link :to="{ name: 'member_profile'}"> Profile </router-link>
                </span> </a>
            </li>

           <li class="treeview" >
                 <a ><i class="fa fa-edit"></i> <span>
                <router-link :to="{ name: 'member_edit_profile'}"> Edit Profile </router-link>
                </span> </a>
            </li>

              <li class="treeview" >
                 <a ><i class="fa fa-key"></i> <span>
                <router-link :to="{ name: 'member_password'}"> Password </router-link>
                </span> </a>
            </li>

            <li class="treeview" >
                 <a ><i class="fa fa-list-alt"></i> <span>
                <router-link :to="{ name: 'member_notice'}"> Notice </router-link>
                </span> </a>
            </li>




        </ul>
    </section>
</aside>
