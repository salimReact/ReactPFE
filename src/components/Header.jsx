import React, { Fragment,useState  } from 'react'

export default function Header() {
  const log = sessionStorage.getItem('log');
  console.log(log);
 

  return (
    <Fragment>
        <div id="preloader" >  
    <div className="jumper" >  
    </div>
        </div>
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
               <a href="/" className="logo">
                <img src="images/logo.png" />
              </a>
              <ul className="nav">
                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                <li className="scroll-to-section"><a href="#men">Men's</a></li>
                <li className="scroll-to-section"><a href="#women">Women's</a></li>
                <li className="submenu">
                  <a href="#">Pages</a>
                  <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/influencers">influencers</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">Features</a>
                  <ul>
                    <li><a href="/profile">Features Page 1</a></li>
                    <li><a href="/profile">Features Page 2</a></li>
                    <li><a href="/profile">Features Page 3</a></li>
                    <li><a href="/profile">Features Page 4</a></li>
                  </ul>
                </li>
                <li className="scroll-to-section"><a href="#explore">Explore</a></li>
                {log? ( <li className="#"><a href="/Login" onClick={() => sessionStorage.removeItem('log')}>Log out</a></li> ) : ( 
                       <li className="#"><a href="/Login">Login</a></li>
                       
                       )}                

              </ul>  
              <a className="menu-trigger">
                <span>Menu</span>
              </a> 
            </nav>
          </div>
        </div>
      </div>
    </header></Fragment>
  )
}
