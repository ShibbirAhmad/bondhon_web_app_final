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
               <!-- Carousel Start -->
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    @foreach ($project->project_image as $key=>$item)

                         <li data-target="#carousel" data-slide-to="{{ $key }}" class="{{ $key==0 ? 'active' : '' }}"></li>

                    @endforeach

                </ol>

                <div class="carousel-inner">
                   @foreach ($project->project_image as $key=> $image)
                    <div class="carousel-item {{$key == 0 ? 'active' : '' }}">
                           <img class="slider_image" src="{{ asset('storage/'.$image->image) }}" alt="Carousel Image">
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


                                <h2> {{ $project->name }}</h2>

                                <p> {!! $project->description !!} </p>
         

                   @if ($project->emabaded_url)
                         

                            <iframe width="100%" height="346" src="{{ $project->emabaded_url }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
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


