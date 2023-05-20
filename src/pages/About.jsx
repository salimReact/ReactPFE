import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "../assets/css/aboutus.css"


export default function About() {
  return (
    <Fragment>
      <Header/>
      <div classNameName='body'>
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
                          This is Infinite Loop, free Bootstrap 4.0 HTML template with a parallax effect. This layout is what you can modify and use for your websites. Please spread a word to your friends about our website. Thank you for supporting us. If you have any question, you can contact us or chat with us on our <a href="https://fb.com/tooplate">Tooplate Facebook page</a>.</p>
                    </div>
                </div>

            </div>
            
            <div className="row tm-content-box">
        		<div className="col-lg-1">
                    <i className="far fa-3x fa-chart-bar text-center tm-icon"></i>
                </div>
                <div className="col-lg-5">
                    <div className="tm-intro-text-container">
                        <h2 className="tm-text-primary mb-4">Market Analysis</h2>
                        <p className="mb-4 tm-intro-text">
                          Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna.</p>
                    </div>
                </div>
                
                <div className="col-lg-1">
                    <i className="far fa-3x fa-comment-alt text-center tm-icon"></i>
                </div>
                <div className="col-lg-5">
                    <div className="tm-intro-text-container">
                        <h2 className="tm-text-primary mb-4">Fast Support</h2>
                        <p className="mb-4 tm-intro-text">
                          Credit goes to <a rel="nofollow" href="https://www.pexels.com">Pexels</a> website for all images used in this template. Cras condimentum mi et sapien dignissim luctus.</p>
                    </div>
                </div>

            </div>
            
            <div className="row tm-content-box">
        		<div className="col-lg-1">
                    <i className="fas fa-3x fa-fingerprint text-center tm-icon"></i>
                </div>
                <div className="col-lg-5">
                    <div className="tm-intro-text-container">
                        <h2 className="tm-text-primary mb-4">Top Security</h2>
                        <p className="mb-4 tm-intro-text">
                      You have <strong>no</strong> authority to post this template as a ZIP file on your template collection websites. You can <strong>use</strong> this template for your commercial websites.</p>
                          
                          <div className="tm-continue">
                            <a href="#testimonials" className="tm-intro-text tm-btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-1">
                    <i className="fas fa-3x fa-users text-center tm-icon"></i>
                </div>
                <div className="col-lg-5">
                    <div className="tm-intro-text-container">
                      <h2 className="tm-text-primary mb-4">Social Work</h2>
                        <p className="mb-4 tm-intro-text">
                      You can change <a href="https://fontawesome.com/icons?d=gallery">Font Awesome icons</a> by either <b><em>fas or far</em></b> in the HTML codes. For Examples:<br/>
                      <em>&lt;i className=&quot;fas fa-users&quot;&gt;&lt;i className=&quot;far fa-chart-bar&quot;&gt;</em> </p>
                          
                          <div className="tm-continue">
                            <a href="#testimonials" className="tm-intro-text tm-btn-primary">Details</a>
                        </div>
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
              <div className="tm-testimonials-carousel">
                <figure className="tm-testimonial-item">
                  <img src="images/testimonial-img-01.jpg" alt="Image" className="img-fluid mx-auto"/>
                  <blockquote>This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.</blockquote>
                  <figcaption>Catherine Win (Designer)</figcaption>
                </figure>

                <figure className="tm-testimonial-item">
                  <img src="images/testimonial-img-01.jpg" alt="Image" className="img-fluid mx-auto"/>
                  <blockquote>Testimonial section comes with carousel items. You can use Infinite Loop HTML CSS template for your websites.</blockquote>
                  <figcaption>Dual Rocker (CEO)</figcaption>
                </figure>

                <figure className="tm-testimonial-item">
                  <img src="images/testimonial-img-03.jpg" alt="Image" className="img-fluid mx-auto"/>
                  <blockquote>Nulla finibus ligula nec tortor convallis tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.</blockquote>
                  <figcaption>Sandar Soft (Marketing)</figcaption>
                </figure>

                <figure className="tm-testimonial-item">
                  <img src="images/testimonial-img-04.jpg" alt="Image" className="img-fluid mx-auto"/>
                  <blockquote>Curabitur rutrum pharetra lobortis. Pellentesque vehicula, velit quis eleifend fermentum, erat arcu aliquet neque.</blockquote>
                  <figcaption>Oliva Htoo (Designer)</figcaption>
                </figure>

                <figure className="tm-testimonial-item">
                  <img src="images/testimonial-img-02.jpg" alt="Image" className="img-fluid mx-auto"/>
                  <blockquote>Integer sit amet risus et erat imperdiet finibus. Nam lacus nunc, vulputate id ex eget, euismod auctor augue.</blockquote>
                  <figcaption>Jacob Joker (CTO)</figcaption>
                </figure>
              </div>
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
