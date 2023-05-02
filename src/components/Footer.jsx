import React from 'react'

export default function Footer() {
  return (
    <div><footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="first-item">
            <div className="logo">
              <img src="images/logo.png" alt="hexashop ecommerce templatemo" />
            </div>
           
          </div>
        </div>

        <div className="col-lg-4">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/">Homepage</a></li>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Editors">Editors</a></li>
            <li><a href="/Contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h4>Help &amp; Information</h4>
          <ul>
              <li><a href="https://www.google.com/maps/place/WISSAL+GROUP/@36.8488952,10.1999716,15z/data=!4m2!3m1!1s0x0:0xf76991d4473ebd17?sa=X&ved=2ahUKEwid8_3N39b-AhVWUqQEHRz_CcUQ_BJ6BAhCEAc">Immeuble Golden Towers A 1-1, Tunis WISSAL GROUP</a></li>
              <li><a href="/">coop@company.com</a></li>
              <li><a href="#">74523641</a></li>
            </ul>
        </div>
        <div className="col-lg-12">
          <div className="under-footer">
            <p>Copyright © 2023 COOP, Ltd. All Rights Reserved.
              <br />Welcome <a href="/" target="_parent" title="">COOP</a>
              <br />Distributed By: <a href="/" target="_blank" title="free & premium responsive templates">Salim Mtiri & Raja Toumi</a></p>
            <ul>
              <li><a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://twitter.com/"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer></div>
  )
}
