<template>
  <footer id="footer">
    <div class="fpart-first">
      <div class="container">
        <div class="row">
          <div class="contact col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <h5>Contact Details</h5>
            <ul>
              <li class="address">
                <i class="fa fa-map-marker"></i>Houes:36,Road:06,Benaroshi Polli,Mirpur-10,Dhaka-1216.
              </li>
              <li class="mobile">
                <i class="fa fa-phone"></i>+88 01715-900066
              </li>
              <li class="email">
                <i class="fa fa-envelope"></i>
                madinafashion2017@gmail.com
              </li>
            </ul>
          </div>
          <div class="column col-lg-2 col-md-2 col-sm-3 col-xs-12">
            <h5>Information</h5>
            <ul>
              <li>
                <router-link :to="{name:'AboutUs'}">About Us</router-link>
              </li>
              <li>
                <router-link :to="{name:'ContactUs'}">Contact  Us</router-link>
              </li>
              <li>
                <a href="about-us.html">Privacy Policy</a>
              </li>
              <li>
                <a href="about-us.html">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div class="column col-lg-2 col-md-2 col-sm-3 col-xs-12">
            
          </div>
          <div class="column col-lg-2 col-md-2 col-sm-3 col-xs-12">
          
          </div>
          <div class="column col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <!-- <h5>Newsletter</h5>
            <div class="form-group">
              <label
                class="control-label"
                for="subscribe"
              >Sign up to receive latest news and updates.</label>
              <input
                id="signup"
                type="email"
                required
                placeholder="Email address"
                name="email"
                class="form-control"
              />
            </div>
            <input type="submit" value="Subscribe" class="btn btn-primary" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="fpart-second">
      <div class="container">
        <div id="powered" class="clearfix">
          <div class="powered_text pull-left flip">
            <p>
             All Right Reserved: Madina Fashion 
            </p>
          </div>
          <div class="social pull-right flip">
            Design & Developed by: Mohasagor it Solution
          </div>
        </div>
      </div>
    </div>
    
    <div class="chat-icon">
      <a href="https://www.facebook.com/brandmadinafashion/" target="_blank">
         <img :src="'/../public/images/messenger.png'">
      </a>
    </div>
    <div id="back-top">
      <a data-toggle="tooltip" title="Back to Top" href="javascript:void(0)" class="backtotop">
        <i class="fab fa-facebook-messenger"></i>
      </a>
    
    </div>
  </footer>
</template>