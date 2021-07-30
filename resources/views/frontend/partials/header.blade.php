<?php
   $general_info=App\Models\GeneralSetting::latest()->first();
?>
<!-- Top Bar Start -->
            <div class="top-bar animation_row">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-1 col-md-1">
                            <div class="logo">
                                <a href="/">
                                    <img src="{{ asset('frontend/img/logo.jpg ') }}" alt="logo">
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5">
                               <h1 class="logo_heading">Bondhon Society </h1>
                               <span class="sub_name"> Our dreams are too large </span>
                        </div>
                        <div class="col-lg-6 col-md-6 d-none d-lg-block">
                            <div class="row contact_row">
                                <div class="col-lg-6 col-md-6">
                                    <h6 class="contact_head"><i class="fa fa-phone"></i> <a  href="tel:{{ $general_info->header_contact_number }}">{{ $general_info->header_contact_number }}</a>
                                    </h6>
                                    
                                </div>
                                <div class="col-lg-6 col-md-6">
                                            <h6  class="contact_head"><i class="fa fa-user-secret"></i><a href="member/login" >Member</a></h6>  
                                 </div>

                                 <div class="col-lg-12 col-md-12">
                                    <h6  class="contact_head"> <i class="fa fa-envelope"></i> <a href="mailto:mybondhonsociety2020@gmail.com">mybondhonsociety2020@gmail.com</a>  </h6>
                                </div>
                                
                                
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Top Bar End -->

            <!-- Nav Bar Start -->
            <div class="nav-bar ">
                <div class="container-fluid ">
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                      <div class="row">
                          <div class="col-xs-12">
                                  <div class="mobile_logo">
                                      <a href="{{ route('home') }}">
                                         <img src="{{ asset('frontend/img/logo.jpg') }}" alt="logo">
                                      </a>
                                      <h4 class="b_heading_name">Bondhon Society </h4>
                                      <span class="b_title"> Our dream are too large </span>
                                      <button type="button" class="navbar-toggler nav_button" data-toggle="collapse" data-target="#navbarCollapse">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    </div>
                                  <div class="mobile_view_call_email">
                                        <a href="tel:0180005511"><i class="fa fa-phone"></i></a>
                                        <a href="mailto:mybondhonsociety2020@gmail.com"> <i class="fa fa-envelope"></i> </a>
                                        <a href="member/login"> <i class="fa fa-user-secret"></i> </a>
                                 </div>
                         </div>
                         
                     </div>


                        <div class="collapse navbar-collapse justify-content-between menu_bar" id="navbarCollapse">
                            <div class="navbar-nav mr-auto">
                                <a href="{{ route('home') }}" class="nav-item nav-link active">Home</a>
                               <div class="nav-item dropdown">
                                     <a href="{{ route('about') }}" class="nav-link dropdown-toggle" data-toggle="dropdown">About</a>
                                    <div class="dropdown-menu">
                                        <a href="{{ route('about') }}" class="dropdown-item">Mission</a>
                                        <a href="{{ route('about') }}" class="dropdown-item">Vission </a>
                                    </div>
                               </div>
                                <a href="{{ route('service') }}" class="nav-item nav-link">Service</a>
                                <a href="{{ route('bondhon_members') }}" class="nav-item nav-link">Squad</a>
                                <a href="{{ route('projects') }}" class="nav-item nav-link">Project</a>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div class="dropdown-menu">
                                        <a href="{{ route('blog') }}" class="dropdown-item">Blog Page</a>
                                    </div>
                                </div>
                                <a href="{{ route('contact') }}" class="nav-item nav-link">Contact</a>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
            <!-- Nav Bar End -->