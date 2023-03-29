import React from 'react'
import { Fragment } from 'react'

export default function AnnoncerRegistrationPart2() {
  return (
    <Fragment>    
    <div className="reg">
    <div className="container1">
   <div className="title">Registration 2/2</div>
   <div className="content">
     <form action="#">
       <div className="user-details">
         <div className="input-box">
           <span className="details">Company Name</span>
           <input type="text" placeholder="Enter your name" required/>
         </div>
         <div className="input-box">
           <span className="details">Company Email</span>
           <input type="text" placeholder="Enter your email" required/>
         </div>
         <div className="input-box">
           <span className="details">Company Phone Number</span>
           <input type="text" placeholder="Enter your number" required/>
         </div>
         <div className="input-box">
           <span className="details">Company Domaine</span>
           <input type="text" placeholder="Enter your password" required/>
         </div>
         <div className="input-box">
           <span className="details">Company Type</span>
           <input type="text" placeholder="Confirm your password" required/>
         </div>
       </div>
     
       <div className="button">
         <input type="submit" value="Register"/>
       </div>
     </form>
   </div>
 </div>
 </div></Fragment>
  )
}
