@extends('frontend.master')


@section('content')

         <div class="wrapper">

             @include('frontend.partials.header')

            <!-- Carousel Start -->
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    @foreach ($sliders as $key=>$item)

                         <li data-target="#carousel" data-slide-to="{{ $key }}" class="{{ $key==0 ? 'active' : '' }}"></li>

                    @endforeach

                </ol>

                <div class="carousel-inner">
                   @foreach ($sliders as $key=> $slider)
                    <div class="carousel-item {{$key == 0 ? 'active' : '' }}">
                           <img class="slider_image" src="{{ asset('storage/'.$slider->image) }}" alt="Carousel Image">
                     </div>
                   @endforeach


                </div>

                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>


            </div>
            <!-- Carousel End -->


            <!-- Feature Start-->
            <div class="feature wow fadeInUp" data-wow-delay="0.1s">
                <div class="container-fluid">
                    <div class="row feature_row align-items-center">
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <a href="{{ route('about') }}">
                              <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fa fa-question-circle custom_icon"></i>
                                </div>
                                <div class="feature-text">
                                    <h3>What is Bondhon Society  </h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                                </div>
                            </div>
                            </a>

                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 banner_section">
                              <div class="banner_container">
                                  <img src="{{ asset('storage/'.$feature_banner->banner_1) }}" alt="">
                              </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                           <a href="{{ route('about') }}">
                                <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fa fa-history custom_icon"></i>
                                </div>
                                <div class="feature-text">
                                    <h3>How Does Bondhon Work </h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                                </div>
                            </div>
                           </a>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 banner_section">
                            <div class="banner_container">
                                <img src="{{ asset('storage/'.$feature_banner->banner_2) }}" alt="">
                            </div>
                      </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <a href="{{ route('about') }}">
                                <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fa fa-pencil custom_icon"></i>
                                </div>
                                <div class="feature-text">
                                    <h3> Bondhon Mission & Vission </h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 banner_section">
                            <div class="banner_container">
                                <img src="{{ asset('storage/'.$feature_banner->banner_3) }}" alt="">
                            </div>
                      </div>
                    </div>
                </div>
            </div>
            <!-- Feature End-->


            <!-- About Start -->
            <div class="about wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6">
                            <div class="about-img">
                                <img src="{{ asset('frontend/img/about.jpg ') }}" alt="Image">
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6">
                            <div class="section-header text-left">
                                <p>Welcome to Bhondhon Society </p>
                                <h2> 2 Years Of Journery </h2>
                            </div>
                            <div class="about-text">
                                <p>  ???????????????????????? ????????????????????? </p>
                                <p>???????????????????????????????????? ???????????????????????? ???????????????  </p>
                                <ul>
                                    <li> ?????????????????? ???????????????????????????????????? ????????? :   ??????????????? ?????????????????????    </li>
                                </ul>

                                <ul>
                                    <li> ?????????????????? ??????????????????!    </li>
                                      <ul>
                                          <li>
                                              ???????????? ?????????????????? ???????????????????????????????????? ???????????? ??????????????????????????????????????? ??????????????? ?????? ???????????????????????? ?????????????????? ?????????????????????????????? ????????? ?????????????????????????????????
                                        </li>
                                      </ul>
                                </ul>

                                <ul>
                                    <li> ?????????????????? ????????????????????????!  </li>
                                      <ul>

                                        <li>
                                            ?????????????????? ???????????????????????? ?????? ??????????????????????????? ????????????-??????????????? ???????????? ????????????????????? ???????????????????????? ????????? ?????????????????? ???????????? ?????????  ???
                                        </li>

                                        <li>
                                                ?????????????????? ??????????????????????????? ?????????????????????????????????!
                                                <ul>
                                                    <li> ???????????????  </li>
                                                    <li> ???????????? ?????????????????????  </li>
                                                    <li> ???????????????  </li>
                                                    <li> ?????????????????????  </li>
                                                    <li> ?????????????????? ??????????????????  </li>
                                                    <li> ????????? ???????????????  </li>
                                                    <li> ?????????????????????????????????  </li>
                                                    <li> ?????????????????????  </li>
                                                    <li> ???-?????????????????? ??????????????????  </li>
                                                    <li> ???????????????????????????  </li>
                                                    <li> ???????????????????????????????????????????????? </li>
                                                    <li> ??????????????????????????????   </li>
                                                    <li> ????????????????????????????????????  </li>
                                                    <li> ??????????????? & ???????????????  </li>
                                                </ul>
                                        </li>

                                        <li> ??????????????????????????????, ?????? ?????????????????? ???????????? ???????????? ?????????????????? ???????????????????????? ?????????????????? ????????????????????? ?????????????????????????????? ???????????? </li>

                                    </ul>
                                </ul>

                                <a class="btn learn_more_btn" href="{{ route('about') }}"> More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- About End -->


            <!-- Fact Start -->
            <div class="fact">
                <div class="container-fluid">
                    <div class="row counters">
                        <div class="col-md-6 fact-left wow slideInLeft">
                            <div class="row">
                                <div class="col-6 col-xs-6 col-sm-6 col-md-6">
                                    <div class="fact-icon">
                                        <i class="fa fa-user-secret custom_icon"></i>
                                    </div>
                                    <div class="fact-text">
                                        <h2 data-toggle="counter-up">{{ $total_member }}</h2>
                                        <p>Members </p>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="fact-icon">
                                        <i class="fa fa-user-circle custom_icon"></i>
                                    </div>
                                    <div class="fact-text">
                                        <h2 data-toggle="counter-up">{{ $total_investor }}</h2>
                                        <p>Happy Investor </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 fact-right wow slideInRight">
                            <div class="row">
                                <div class="col-6  col-xs-6 col-sm-6 col-md-6">
                                    <div class="fact-icon">
                                       <i class="fa fa-compass custom_icon"></i>
                                     
                                    </div>
                                    <div class="fact-text">
                                        <h2 data-toggle="counter-up">{{ $total_implemented_project }}</h2>
                                        <p>Completed Projects</p>
                                    </div>
                                </div>
                                <div class="col-6  col-xs-6 col-sm-6 col-md-6">
                                    <div class="fact-icon">
                                        <i class="fa fa-compass custom_icon"></i>
                                    </div>
                                    <div class="fact-text">
                                        <h2 data-toggle="counter-up">{{ $total_planned_project }}</h2>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fact End -->


            <!-- Service Start -->
            <div class="service">
                <div class="container">
                    <div class="section-header text-center">
                        <p> Implemented Projects</p>
                        <h2> Bondhon Society Implemented Projects </h2>
                    </div>
                    <div class="row">
                        @foreach ($implemented_projects as $i_project)
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="service-item">
                                    <div class="service-img">
                                    <a href="{{ route('project_details',$i_project->slug)}}"> <img src="{{ asset('storage/'.$i_project->project_image[0]->image ) }}" alt="Image">  </a>
                                    </div>
                                    <div class="service-text">
                                        <a href="{{ route('project_details',$i_project->slug)}}">  <h3> {{ $i_project->name }}  </h3> </a>
                                    </div>
                                </div>
                            </div>
                        @endforeach


                    </div>
                </div>
            </div>
            <!-- Service End -->



            <!-- Video Start -->
            <div class="video wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <button type="button" class="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/aIn72103c8A" data-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>

            <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <!-- 16:9 aspect ratio -->
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/aIn72103c8A" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Video End -->

                         <!-- Service Start -->
            <div class="service">
                <div class="container">
                    <div class="section-header text-center">
                        <p> Planned Projects</p>
                        <h2> Bondhon Society Planned Projects </h2>
                    </div>
                          <div class="row">

                      @foreach ($planned_projects as $p_project)
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="service-item">
                                    <div class="service-img">
                                    <a href="{{ route('project_details',$p_project->slug)}}"> <img src="{{ asset('storage/'.$p_project->project_image[0]->image ) }}" alt="Image">  </a>
                                    </div>
                                    <div class="service-text">
                                        <a href="{{ route('project_details',$p_project->slug)}}">  <h3> {{ $p_project->name }}  </h3> </a>
                                    </div>
                                </div>
                            </div>
                        @endforeach

                    </div>
                </div>
            </div>
            <!-- Service End -->


            <!-- Team Start -->
            <div class="team">
                <div class="container">
                    <div class="section-header text-center">
                        <p> Bondhon Team</p>
                        <h2>Meet With Memeber Of Bondhon Society  </h2>
                    </div>
                    <div class="row">
                     @foreach ($members as $member)
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="{{ asset('storage/'.$member->image) }}" alt="Team Image">
                                </div>
                                <div class="team-text">
                                    <h2>{{ $member->name }}</h2>
                                    <p> Member </p>
                                </div>
                                <div class="team-social">
                                    <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                    </div>
                </div>
            </div>
            <!-- Team End -->


            <!-- Blog Start -->
            <div class="blog">
                <div class="container">
                    <div class="section-header text-center">
                        <p>Latest Blog</p>
                        <h2>Latest From Our Blog</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="blog-item">
                                <div class="blog-img">
                                    <img src="{{ asset('frontend/img/blog-1.jpg') }}" alt="Image">
                                </div>
                                <div class="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>
                                </div>
                                <div class="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div class="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp">
                            <div class="blog-item">
                                <div class="blog-img">
                                    <img src="{{ asset('frontend/img/blog-2.jpg') }}" alt="Image">
                                </div>
                                <div class="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>

                                </div>
                                <div class="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div class="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="blog-item">
                                <div class="blog-img">
                                    <img src="{{ asset('frontend/img/blog-3.jpg ') }}" alt="Image">
                                </div>
                                <div class="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>
                                </div>
                                <div class="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div class="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Blog End -->

            <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

            @include('frontend.partials.footer')
        </div>


@endsection


 @push('extra_js')

     
 @endpush