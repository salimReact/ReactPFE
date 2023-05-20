import React, { Fragment } from 'react'
import '../assets/css/rateus.css'

export default function Subscribe() {
  return (
    <Fragment> 
    <div className="subscribe">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="section-heading">
            <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
            <span>Details to details is what makes Hexashop different from the other themes.</span>
          </div>
          <form id="subscribe" action="" method="get">
            <div className="row">
              <div className="col-lg-5">
                <fieldset>
                  <input name="name" type="text" id="name" placeholder="Your Name" required />
                </fieldset>
              </div>
              <div className="col-lg-5">
                <fieldset>
                  <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required />
                </fieldset>
              </div>
              <div className="col-lg-2">
                <fieldset>
                  <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane" /></button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Store Location:<br /><span>Sunny Isles Beach, FL 33160, United States</span></li>
                <li>Phone:<br /><span>010-020-0340</span></li>
                <li>Office Location:<br /><span>North Miami Beach</span></li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Work Hours:<br /><span>07:30 AM - 9:30 PM Daily</span></li>
                <li>Email:<br /><span>info@company.com</span></li>
                <li>Social Media:<br /><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></Fragment>
  )
}
