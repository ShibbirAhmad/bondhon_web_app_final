@extends('frontend.master')


@section('content')

         <div class="wrapper">

             @include('frontend.partials.header')
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
                                <h4> Welcome to Bhondhon Society </h4>
                            </div>
                            <div class="about-text">
                                <p>  আসসালামু আলাইকুম </p>
                                <p>বিসমিল্লাহির রাহমানির রাহিম  </p>
                                <ul>
                                    <li> আমাদের প্রতিষ্ঠানের নাম :   বন্ধন সোসাইটি    </li>
                                </ul>

                                <ul>
                                    <li> আমাদের লক্ষ্য!    </li>
                                      <ul>
                                          <li>
                                              আমরা আমাদের প্রতিষ্ঠানকে একটি ইন্টার্নেশনাল গ্রুপ অব কোম্পানি হিসেবে প্রতিষ্ঠিত করব ইনশাআল্লাহ।
                                        </li>
                                      </ul>
                                </ul>

                                <ul>
                                    <li> আমাদের উদ্দেশ্য!  </li>
                                      <ul>

                                        <li>
                                            আমাদের উদ্দেশ্য হল স্বাস্থ্য বিধি-বিধান মেনে মানুষের দৈনন্দিন সকল চাহিদা পূরণ করা  ।
                                        </li>

                                        <li>
                                                আমাদের পরিকল্পিত প্রকল্পসমূহ!
                                                <ul>
                                                    <li> এগ্রো  </li>
                                                    <li> কৃষি প্রকল্প  </li>
                                                    <li> ডেইরি  </li>
                                                    <li> মেডিসিন  </li>
                                                    <li> পরিবহন সেক্টর  </li>
                                                    <li> ফুড আইটেম  </li>
                                                    <li> রেস্টুরেন্ট  </li>
                                                    <li> হসপিটাল  </li>
                                                    <li> ই-কমার্স বিজনেস  </li>
                                                    <li> বায়োফ্লক  </li>
                                                    <li> শিক্ষাপ্রতিষ্ঠান </li>
                                                    <li> গার্মেন্টস   </li>
                                                    <li> ইলেকট্রনিক্স  </li>
                                                    <li> দোকান & শোরুম  </li>
                                                </ul>
                                        </li>

                                        <li> ইনশাআল্লাহ, এই সেক্টর গুলো আমরা আমাদের সর্বোচ্চ চেষ্টা মাধ্যমে বাস্তবায়ন করবো </li>

                                    </ul>
                                </ul>

                        <p>
                                উদ্যোক্তাদের জন্য একটি বার্তা!
                    বর্তমানে বাংলাদেশের হাজার হাজার নাগরিক বিদেশের মাটিতে নিজের সর্বোচ্চ বিলিয়ে দিচ্ছেন। আর তাদের এই সর্বোচ্চ বিলিয়ে দেওয়ার মাধ্যমে বাহির রাষ্ট্রগুলো উন্নত হচ্ছে।
                    কিন্তু প্রশ্ন হল আমার দেশের মানুষ গুলো বাহিরের দেশগুলো উন্নত করবে কেন?
                    বাহির রাষ্ট্রগুলোতে কি মানুষ নেই?
                    অবশ্যই আছে
                    তাহলে আমার দেশের মানুষগুলো কেন তাদের দেশে কাজ করে?
                    সেই দেশের মানুষ গুলো তাহলে কি করে?

                    আমি উপরে অনেকগুলো প্রশ্ন বোধক কথা বলছি।
                    এখন সেগুলোর উত্তর দিব ইনশাআল্লাহ।
                    কেন আমার দেশের মানুষগুলো বাহিরের দেশে কাজ করতে হয় আর সে দেশের মানুষগুলো কেন কাজ করে না।
                    সে দেশের মানুষগুলো উদ্যোক্তা নামক শব্দটা কে নিজের শরীরের সাথে রক্তের সাথে মিশিয়ে ফেলেছে ।
                    আর আমার দেশের মানুষগুলো নিজের শারীরিক পরিশ্রম কেই জীবনের সাথে মিশিয়ে নিয়েছে।
                    যার কারণে আমার দেশের মানুষগুলোর সারা জীবন পরিশ্রম করে যাচ্ছে।
                    আর উন্নত হচ্ছে বহির রাষ্ট্রের মানুষ ও তাদের দেশ।

                    এজন্য বন্ধন সোসাইটি বাংলাদেশের মধ্যে উদ্যোক্তা তৈরি করার জন্য এবং দেশকে উন্নত দেশ হিসেবে গড়ে তোলার জন্য উদ্যোক্তাদের ব্যাপারে একটি সিদ্ধান্ত নেন।

                    উদ্যোক্তাদের ব্যাপারে উপরে উল্লেখিত বিষয়গুলো চিন্তা করে বন্ধন সোসাইটি একটি সিদ্ধান্ত নেন।
                    আশা করি বন্ধন সোসাইটি এর এই সিদ্ধান্তটা উদ্যোক্তাদের জন্য বিশাল একটি সুযোগ হিসাবে কাজ করবে ইনশাল্লাহ।

                    সিদ্ধান্তটি হল কোন উদ্যোক্তা যদি কোন বিষয়ে উদ্যোগ নিতে ইচ্ছা প্রকাশ করেন এবং যেই বিষয়টা নিয়ে তিনি উদ্যোগ নিতে চাচ্ছেন সেই বিষয়ে তিনি সর্বোচ্চ জ্ঞান রাখেন। তাহলে কিছু শর্তসাপেক্ষে বন্ধন সোসাইটি আছেন তার পাশে সর্বোচ্চ সহযোগিতার হাত বাড়িয়ে দেওয়ার জন্যে ইনশাআল্লাহ।


                        </p>
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




            @include('frontend.partials.footer')
        </div>


@endsection


