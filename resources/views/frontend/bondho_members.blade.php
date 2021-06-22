@extends('frontend.master')


@section('content')

         <div class="wrapper">

             @include('frontend.partials.header')

                      <!-- Team Start -->
            <div class="team">
                <div class="container">
                    <div class="section-header text-center">
                        <p>Our Squad </p>
                        <h2>Meet Our Members </h2>
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

            @include('frontend.partials.footer')
        </div>


@endsection


