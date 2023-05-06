import React, { Fragment } from 'react'


export default function Banner() {
  return (
    <Fragment>
      <div className="main-banner" id="top">
    <div className="container-fluid">
      <div className="row">
      <div className="col-lg-6">
          <div className="left-content">
            <div className="thumb">
              <div className="inner-content">
                <h4>Here is Our Editors</h4>
                <span>Awesome, Creative &amp; Passionate</span>
                <div className="main-border-button">
                  <a href="/Editors">Check Them !</a>
                </div>
              </div>
              <img src="images/Editor1.jpg" alt="" class="img-fluid object-fit"/>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-content">
            <div className="row">
              <div className="col-lg-12">
                <div className="right-first-image">
                  <div className="thumb">
                    <div className="inner-content">
                      <h4>About</h4>
                      <span>About Us</span>
                    </div>
                    <div className="hover-content">
                      <div className="inner">
                        <h4>About</h4>
                        <p>"At Coop, we're committed to providing high-quality and exceptional Editors and Annoncers service to meet the needs"</p>
                        <div className="main-border-button">
                          <a href="/about">Discover More</a>
                        </div>
                      </div>
                    </div>
                    <img src="images/About.jpg" alt="" class="img-fluid object-fit"/>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="right-first-image">
                  <div className="thumb">
                    <div className="inner-content">
                      <h4>Contact</h4>
                      <span>Contact Us</span>
                    </div>
                    <div className="hover-content">
                      <div className="inner">
                        <h4>Contact</h4>
                        <p>Contact us to learn more about Coop</p>
                        <div className="main-border-button">
                          <a href="#">Discover More</a>
                        </div>
                      </div>
                    </div>
                    <img src="images/contact1.jpg" alt="" class="img-fluid object-fit"/>
                  </div>
                </div>
              </div>     
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      </Fragment>
  )
}
