import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import RateUs from '../components/RateUs'

export default function Contact() {
  return (
    <div>
   <Header/>
   <div className="page-heading about-page-heading" id="top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="inner-content">
                        <h2>Contact Us</h2>
                        <span>Contact Us</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="contact-us bg-light">
        <div className="container bg-light">
            <div className="row">
            <div className="col-lg-6">
                   <img src="images/Contact.jpg" alt="" />                </div>
                <div className="col-lg-6 mt-5">
                    <div className="section-heading mt-5">
                        <h2>Say Hello. Don't Be Shy!</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                    <form id="contact" action="" method="post">
                        <div className="row">
                          <div className="col-lg-6">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Your name" required=""/>
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input name="email" type="text" id="email" placeholder="Your email" required=""/>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <textarea name="message" rows="6" id="message" placeholder="Your message" required=""></textarea>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i></button></fieldset>
                          </div>
                        </div>
                      </form>
                </div>
            </div>
        </div>
    </div>
    <RateUs/>
    <Footer/>
  </div>

  )
}
