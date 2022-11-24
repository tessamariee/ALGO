import React from "react";
import CardItems from "./CardItems";
import firstlogo from "../images/Events/olympic.jpg";
import secondlogo from "../images/Events/event-seminar.png";
import thirdlogo from  "../images/Events/event-training.png";
import fourthlogo from "../images/Events/event-workshop.png";
import '../assets/css/fontawesome.css';
import '../assets/css/homepage.css';

function ContactUs(){
    return(
        <div>
<div id="contact" class="contact-us section">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <div class="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
          <h6>Contact Us</h6>
          <h4>Get In Touch With Us <em>Now</em></h4>
          <div class="line-dec"></div>
        </div>  
      </div>
      <div class="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
        {/* <!--Changes in Form attributes please check it... Vrixen--> */}
        <form id="contact" onsubmit="sendEmail(); reset(); return false;">
          <div class="row">
            <div class="col-lg-12">
              <div class="contact-dec">
                <img src="assets/images/contact-us.png" alt=""/>
                <img src = {firstlogo}/>
              </div>
            </div>
            <div class="col-lg-5">
              <div id="map">
              <iframe src="https://maps.google.com/maps?q=quezon%20city&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="636px" frameborder="0" style={{border:0}} allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="fill-form">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="info-post">
                      <div class="icon">
                        <img src="assets/images/phone.png" alt=""/>
                        <a href="#">010-020-0340</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="info-post">
                      <div class="icon">
                        <img src="assets/images/mail.png" alt=""/>
                        <a href="#">hi@algofilipino.com</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="info-post">
                      <div class="icon">
                        <img src="assets/images/location.png" alt=""/>
                        <a href="#">Quezon City</a>
                      </div>
                    </div>
                  </div>
                  <div className="contactform">
                    <fieldset>
                      <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required border="none"/>
                    </fieldset>
                    <fieldset>
                      <input type="text" name="email" id="email" pattern="" placeholder="Your Email" required=""/>
                    </fieldset>
                    <fieldset>
                      <input type="subject" name="subject" id="subject" placeholder="Subject" autocomplete="on"/>
                    </fieldset>
                  </div>
                  <div class="col-lg-6">
                    <fieldset>
                      <textarea name="message" type="text" class="form-control" id="message" placeholder="Message" required=""></textarea>  
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      {/* <!--Changes in Button check if there are changes... Vrixen--> */}
                      <button type="submit" class="main-button ">SUMALI SA ALGOFILIPINO</button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
</div>
</div>
            </div>
    )
}

export default ContactUs;