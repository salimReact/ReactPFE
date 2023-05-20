import React, { Fragment,useState  } from 'react'

export default function Header() {
  const log = sessionStorage.getItem('log');
  const role = sessionStorage.getItem('role');
console.log(role)

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
                <li className="submenu">
                <a href="#">Pages</a>
                    {role == 2 ? (
                      <ul>
                        <li><a href="/CampaignListAnnoncer">Your Campaigns</a></li>
                        <li><a href="/CreateCampaign">Create Campaigns</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/Editors">Editors</a></li>
                        <li><a href="/YourContract">Your Contract</a></li>
                        <li><a href="/ListMessages">Your Messages</a></li>

                      </ul>
                    ) : role == 1 ? (
                      <ul>
                        <li><a href="/YourContract">Your Contract</a></li>
                        <li><a href="/yourOffers">Your Offers</a></li> 
                        <li><a href="/Editors">Editors</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/ListMessages">Your Messages</a></li>
                      </ul>
                    ) :  role == 3 ? (
                      <ul>
                        <li><a href="/CheckUser">Check User</a></li>
                        <li><a href="/CheckCampaign">Check Campaign</a></li>
                        <li><a href="/CheckContract">Check Contract</a></li>
                      </ul>
                    ) :  (
                      <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/Editors">Editors</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                      </ul>
                    )}
                </li>
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
