<?php
   $general_info=App\Models\GeneralSetting::latest()->first();
?>
<!-- Top Bar Start -->
            <div class="top-bar">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-1 col-md-6">
                            <div class="logo">
                                <a href="{{ route('home') }}">
                                    <img src="{{ asset('frontend/img/logo.jpg ') }}" alt="logo">
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6">
                               <h1 class="logo_heading">Bondhon Society </h1>
                               <span class="sub_name"> Our dreams are too large </span>
                        </div>
                        <div class="col-lg-6 col-md-7 d-none d-lg-block">
                            <div class="row">
                                <div class="col-6">
                                    <div class="top-bar-item">
                                        <div class="top-bar-icon">
                                            <i class="flaticon-call"></i>
                                        </div>
                                        <div class="top-bar-text">
                                            <h3>Call Us</h3>
                                            <a class="h_contact" href="tel:{{ $general_info->header_contact_number }}">{{ $general_info->header_contact_number }}</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="top-bar-item">
                                        <div class="top-bar-icon">
                                            <i class="flaticon-send-mail"></i>
                                        </div>
                                        <div class="top-bar-text">
                                            <h3>Email Us</h3>
                                            <a class="h_contact" href="mailto:mybondhonsociety2020@gmail.com">mybondhonsociety2020@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Top Bar End -->

            <!-- Nav Bar Start -->
            <div class="nav-bar">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                      <div class="row">
                          <div class="col-xs-3">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            </div>
                          <div class="col-xs-9">
                                  <div class="mobile_logo">
                                      <a href="{{ route('home') }}">
                                         <img src="{{ asset('frontend/img/logo.jpg') }}" alt="logo">
                                      </a>
                                    </div>
                                  <div class="mobile_view_call_email">
                                        <i class="flaticon-call"></i>
                                        <a href="tel:+88 0180005511">+88 0188 005511</a>
                                         <br/>
                                        <i class="flaticon-send-mail"></i>
                                        <a href="mailto:info@bondhonsociety.com">info@bondhonsociety.com</a>
                                 </div>
                         </div>
                     </div>


                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
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