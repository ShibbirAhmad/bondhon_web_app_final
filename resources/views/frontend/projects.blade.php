@extends('frontend.master')


@section('content')

         <div class="wrapper">

             @include('frontend.partials.header')

          <!-- Portfolio Start -->
            <div class="portfolio">
                <div class="container">
                    <div class="section-header text-center">
                        <p>Our Projects</p>
                        <h2>Visit Our Projects</h2>
                    </div>

                    <div class="row portfolio-container">
                       @foreach ($projects as $item)
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                   <a href="{{ route('project_details',$item->slug)}}">
                                     <img src="{{ asset('storage/'.$item->project_image[0]->image ) }}" alt="Image">
                                   </a>

                                </div>
                                <div class="portfolio-text">
                                  <a href="{{ route('project_details',$item->slug)}}">
                                       <h3>{{ $item->name  }}</h3> </a>
                                </div>
                            </div>
                        </div>
                      @endforeach
                    </div>
                    <div class="row">
                        <div class="col-12 load-more">
                            <a class="btn learn_more_btn" href="#">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Portfolio End -->





            @include('frontend.partials.footer')
        </div>


@endsection


