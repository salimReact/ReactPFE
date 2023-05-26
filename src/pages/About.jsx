import React, { Fragment,useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "../assets/css/aboutus.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function About() {


  return (
    <Fragment>
      <Header/>
      <div className='body'>
      <section id="infinite" className="text-white tm-font-big tm-parallax">
      <div className="text-center tm-hero-text-container">
        <div className="tm-hero-text-container-inner">
            <h2 className="tm-hero-title">About us</h2>
        </div>        
      </div>

      <div className="tm-next tm-intro-next">
        <a href="#whatwedo" className="text-center tm-down-arrow-link">
          <i className="fas fa-2x fa-arrow-down tm-down-arrow"></i>
        </a>
      </div>      
    </section>

    <section id="whatwedo" className="tm-section-pad-top">
      
      <div className="container">

            <div className="row tm-content-box">
                <div className="col-lg-12 col-xl-12">
                    <div className="tm-intro-text-container">
                        <h2 className="tm-text-primary mb-4 tm-section-title">What We Do</h2>
                        <p className="mb-4 tm-intro-text">
                        We are a platform that connects advertisers and publishers, facilitating seamless and effective collaborations for marketing campaigns.</p>
                    </div>
                </div>

            </div>
            
            <div className="row tm-content-box">
        		<div className="col-lg-1">
                    <i className="far fa-3x fa-star text-center tm-icon"></i>
                </div>
                <div className="col-lg-5">
                    <div className="tm-intro-text-container">
                        <h2 className="tm-text-primary mb-4">User-friendly platform</h2>
                        <p className="mb-4 tm-intro-text">
                        Easily manage your advertising campaigns with our intuitive platform, simplifying the process with just a few clicks.                          </p>
                    </div>
                </div>
                
                <div className="col-lg-1">
                    <i className="far fa-3x fa-solid fa-handshake text-center tm-icon"></i>
                </div>
                <div className="col-lg-5">
                    <div className="tm-intro-text-container">
                        <h2 className="tm-text-primary mb-4">Trusted partnerships</h2>
                        <p className="mb-4 tm-intro-text">
                        Join our networks and benefit from trusted collaborations with quality partners.</p>
                    </div>
                </div>

            </div>
            
            <div className="row tm-content-box">
            <div className="col-lg-1">
                    <i className="far fa-3x fa-comment-alt text-center tm-icon"></i>
                </div>
                <div className="col-lg-5">
                    <div className="tm-intro-text-container">
                        <h2 className="tm-text-primary mb-4">Direct communication</h2>
                        <p className="mb-4 tm-intro-text">
                        Engage directly with your collaborators through our integrated messaging space, facilitating efficient communication on our platform.                      </p>
                          
                          
                    </div>
                </div>
                
                <div className="col-lg-1">
                    <i className="fas fa-3x fa-users text-center tm-icon"></i>
                </div>
                <div className="col-lg-5">
                    <div className="tm-intro-text-container">
                      <h2 className="tm-text-primary mb-4">Precise targeting of your audience</h2>
                        <p className="mb-4 tm-intro-text">
                        Maximize your return on investment by precisely targeting the relevant communities for your marketing objectives.</p>                          
                          
                    </div>
                </div>

            </div>

        </div>
      
    </section>
    
    <section id="testimonials" className="tm-section-pad-top tm-parallax-2">      
          <div className="container tm-testimonials-content">
            <div className="row">
              <div className="col-lg-12 tm-content-box">
                <h2 className="text-white text-center mb-4 tm-section-title">Testimonials</h2>
                <p className="mx-auto tm-section-desc text-center">
                  Nulla dictum sem non eros euismod, eu placerat tortor lobortis. Suspendisse id velit eu libero pellentesque interdum. Etiam quis congue eros.
                </p>
                <div className="mx-auto tm-gallery-container tm-gallery-container-2">
                  <Slider
                    dots={true}
                    infinite={false}
                    slidesToShow={3}
                    slidesToScroll={1}
                  >
                    <div className="tm-testimonial-item">
                      <img src="images/testimonial-img-01.jpg" alt="Image" className="img-fluid mx-auto"/>
                      <blockquote>This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.</blockquote>
                      <figcaption>Catherine Win (Designer)</figcaption>
                    </div>
                    <div className="tm-testimonial-item">
                      <img src="images/testimonial-img-01.jpg" alt="Image" className="img-fluid mx-auto"/>
                      <blockquote>This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.</blockquote>
                      <figcaption>Catherine Win (Designer)</figcaption>
                    </div>
                    <div className="tm-testimonial-item">
                      <img src="images/testimonial-img-01.jpg" alt="Image" className="img-fluid mx-auto"/>
                      <blockquote>This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.</blockquote>
                      <figcaption>Catherine Win (Designer)</figcaption>
                    </div>
                    <div className="tm-testimonial-item">
                      <img src="images/testimonial-img-01.jpg" alt="Image" className="img-fluid mx-auto"/>
                      <blockquote>This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.</blockquote>
                      <figcaption>Catherine Win (Designer)</figcaption>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="tm-bg-overlay"></div>
        </section>
    
    <section id="gallery" className="tm-section-pad-top">
      <div className="container tm-container-gallery">
        <div className="row">
          <div className="text-center col-12">
              <h2 className="tm-text-primary tm-section-title mb-4">Gallery</h2>
              <p className="mx-auto tm-section-desc">
                Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna, lobortis eu arcu a, aliquet tristique urna.
              </p>
          </div>            
        </div>
        <div className="row">
            <div className="col-12">
                <div className="mx-auto tm-gallery-container">
                    <div className="grid tm-gallery">
                      <Slider
                        dots={true}
                        infinite={false}
                        slidesToShow={5}
                        slidesToScroll={2}
                        responsive={[
                          {
                            breakpoint: 1199,
                            settings: {
                              slidesToShow: 4,
                              slidesToScroll: 2
                            }
                          },
                          {
                            breakpoint: 991,
                            settings: {
                              slidesToShow: 3,
                              slidesToScroll: 2
                            }
                          },
                          {
                            breakpoint: 767,
                            settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1
                            }
                          },
                          {
                            breakpoint: 480,
                            settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                            }
                          }
                        ]}
                      >
                        <a href="images/gallery-img-01.jpg">
                          <figure className="effect-honey tm-gallery-item">
                            <img src="images/gallery-tn-01.jpg" alt="Image 1" className="img-fluid" />
                            <figcaption>
                              <h2>
                                <i>
                                  Physical Health <span>Exercise!</span>
                                </i>
                              </h2>
                            </figcaption>
                          </figure>
                        </a>
                        <a href="images/gallery-img-01.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="images/gallery-tn-01.jpg" alt="Image 1" className="img-fluid"/>
                          <figcaption>
                            <h2><i>Physical Health <span>Exercise!</span></i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="images/gallery-img-02.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="images/gallery-tn-02.jpg" alt="Image 2" className="img-fluid"/>
                          <figcaption>
                            <h2><i>Rain on Glass <span>Second Image</span></i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="images/gallery-img-03.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="images/gallery-tn-03.jpg" alt="Image 3" className="img-fluid"/>
                          <figcaption>
                            <h2><i><span>Sea View</span> Mega City</i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="images/gallery-img-04.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="images/gallery-tn-04.jpg" alt="Image 4" className="img-fluid"/>
                          <figcaption>
                            <h2><i>Dream Girl <span>Thoughts</span></i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="images/gallery-img-05.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="images/gallery-tn-05.jpg" alt="Image 5" className="img-fluid"/>
                          <figcaption>
                            <h2><i><span>Workstation</span> Offices</i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="images/gallery-img-06.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="images/gallery-tn-06.jpg" alt="Image 6" className="img-fluid"/>
                          <figcaption>
                            <h2><i>Just Above <span>The City</span></i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="images/gallery-img-01.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="images/gallery-tn-01.jpg" alt="Image 7" className="img-fluid"/>
                          <figcaption>
                            <h2><i>Another <span>Exercise Time</span></i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="images/gallery-img-02.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="images/gallery-tn-02.jpg" alt="Image 8" className="img-fluid"/>
                          <figcaption>
                            <h2><i>Repeated <span>Image Spot</span></i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      </Slider>
                     
                    </div>
                </div>                
            </div>        
          </div>
      </div>
    </section>
    </div>
    <Footer/>
  </Fragment>
  )
}
