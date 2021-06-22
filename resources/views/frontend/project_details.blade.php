@extends('frontend.master')


@section('content')

         <div class="wrapper">

             @include('frontend.partials.header')

            <!-- Single Post Start-->
            <div class="single">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="single-content wow fadeInUp">
                                <img src="{{ asset('storage/'.$project->project_image[0]->image ) }}" />
                                <h2> {{ $project->name }}</h2>

                                <p> {!! $project->description !!} </p>
           @if ($project->embaded_url)
                   <!-- Video Start -->
            <div class="video wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <button type="button" class="btn-play" data-toggle="modal" data-src="{{ $project->embaded_url }}" data-target="#videoModal">
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
                                <iframe class="embed-responsive-item" src="{{ $project->embaded_url }}" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Video End -->
           @endif


                            </div>

                            <div class="single-bio wow fadeInUp">
                                <div class="single-bio-img">
                                    <img src="{{ asset('storage/'.$project->manager_image) }}" />
                                </div>
                                <div class="single-bio-text">
                                    <h3>Project Manager</h3>
                                    <p>
                                           {{ $project->manager_name }}
                                    </p>
                                </div>
                            </div>
                            <div class="single-related wow fadeInUp">
                                <h2>Related Project </h2>

                                <div class="owl-carousel related-slider">
                                    @foreach ($related_proejcts as $r_project)
                                      <div class="post-item">
                                        <div class="post-img">
                                            <img src="{{ asset('storage/'.$r_project->project_image[0]->image) }}" />
                                        </div>
                                        <div class="post-text">
                                            <a href="{{ route('project_details',$r_project->slug) }}"> {{ $r_project->name }} </a>
                                            <div class="post-meta">
                                                <p>at<a href="">{{ $r_project->place }}</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    @endforeach

                                </div>
                            </div>

                            <div class="single-comment wow fadeInUp">
                                <h2>3 Comments</h2>
                                <ul class="comment-list">
                                    <li class="comment-item">
                                        <div class="comment-body">
                                            <div class="comment-img">
                                                <img src="img/user.jpg" />
                                            </div>
                                            <div class="comment-text">
                                                <h3><a href="">Josh Dunn</a></h3>
                                                <span>01 Jan 2045 at 12:00pm</span>
                                                <p>
                                                    Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                                                </p>
                                                <a class="btn" href="">Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="comment-item">
                                        <div class="comment-body">
                                            <div class="comment-img">
                                                <img src="img/user.jpg" />
                                            </div>
                                            <div class="comment-text">
                                                <h3><a href="">Josh Dunn</a></h3>
                                                <p><span>01 Jan 2045 at 12:00pm</span></p>
                                                <p>
                                                    Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                                                </p>
                                                <a class="btn" href="">Reply</a>
                                            </div>
                                        </div>
                                        <ul class="comment-child">
                                            <li class="comment-item">
                                                <div class="comment-body">
                                                    <div class="comment-img">
                                                        <img src="img/user.jpg" />
                                                    </div>
                                                    <div class="comment-text">
                                                        <h3><a href="">Josh Dunn</a></h3>
                                                        <p><span>01 Jan 2045 at 12:00pm</span></p>
                                                        <p>
                                                            Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                                                        </p>
                                                        <a class="btn" href="">Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="comment-form wow fadeInUp">
                                <h2>Leave a comment</h2>
                                <form>
                                    <div class="form-group">
                                        <label for="name">Name *</label>
                                        <input type="text" class="form-control" id="name">
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email *</label>
                                        <input type="email" class="form-control" id="email">
                                    </div>
                                    <div class="form-group">
                                        <label for="website">Website</label>
                                        <input type="url" class="form-control" id="website">
                                    </div>

                                    <div class="form-group">
                                        <label for="message">Message *</label>
                                        <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" value="Post Comment" class="btn">
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="sidebar">
                                <div class="sidebar-widget wow fadeInUp">
                                    <div class="search-widget">
                                        <form>
                                            <input class="form-control" type="text" placeholder="Search Keyword">
                                            <button class="btn"><i class="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>

                                <div class="sidebar-widget wow fadeInUp">
                                    <h2 class="widget-title">Recent Project </h2>
                                    <div class="recent-post">
                                    @foreach ($recent_proejcts as $r_project)
                                      <div class="post-item">
                                        <div class="post-img">
                                            <img src="{{ asset('storage/'.$r_project->project_image[0]->image) }}" />
                                        </div>
                                        <div class="post-text">
                                            <a href="{{ route('project_details',$r_project->slug) }}"> {{ $r_project->name }} </a>
                                            <div class="post-meta">
                                                <p>at<a href="">{{ $r_project->place }}</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    @endforeach
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Single Post End-->



            <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

            @include('frontend.partials.footer')
        </div>


@endsection


