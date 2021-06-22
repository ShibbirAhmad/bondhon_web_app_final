   <?php
        $footer_info=App\Models\FooterSetting::latest()->first();
         $general_info=App\Models\GeneralSetting::latest()->first();
   ?>

   <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
            <!-- Footer Start -->
            <div class="footer wow fadeIn" data-wow-delay="0.3s">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-3">
                            <div class="footer-contact">
                                <h2>Office Contact</h2>
                                <p><i class="fa fa-map-marker-alt"></i>Dhaka-1216, Bangladesh</p>
                                <a href="tel:{{ $general_info->header_contact_number }}"><i class="fa fa-phone-alt"></i>{{ $general_info->header_contact_number }}</a>
                                <br>
                                <a href="mailto:info@bondhonsociety.com"><i class="fa fa-envelope"></i>info@bondhonsociety.com</a>
                                <div class="footer-social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a target="_blank" href="{{ $footer_info->facebook_url }}"><i class="fab fa-facebook-f"></i></a>
                                    <a target="_blank" href="{{ $footer_info->youtube_url }}"><i class="fab fa-youtube"></i></a>
                                    <a target="_blank" href="{{ $footer_info->twitter_url }}"><i class="fab fa-twitter"></i></a>
                                    <a target="_blank" href="{{ $footer_info->linkedin_url }}"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="footer-link">
                                <h2>Services Areas</h2>
                                <a href="">Agro firm</a>
                                <a href="">Agro firm</a>
                                <a href="">Agro firm</a>
                                <a href="">Agro firm</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="footer-link">
                                <h2>Useful Pages</h2>
                                <a href="">About Us</a>
                                <a href="">Contact Us</a>
                                <a href="">Our Team</a>
                                <a href="">Projects</a>
                                <a href="">Testimonial</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="newsletter">
                                <h2>Newsletter</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu
                                </p>
                                <div class="form">
                                    <input class="form-control" placeholder="Email here">
                                    <button class="btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container copyright">
                    <div class="row">
                        <div class="col-md-6">
                            <p>&copy; <a href="http://bondhonsociety.com">bondhonsociety.com</a> All Right Reserved.</p>
                        </div>
                        <div class="col-md-6">
                            <p>Developed By <a href="mohsasagor.com"></a>MIT</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer End -->