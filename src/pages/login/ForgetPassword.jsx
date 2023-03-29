import React, { Fragment } from 'react'

export default function ForgetPassword() {
  return (
    <Fragment> <div className="reg">
    <div className="container1">
   <div className="title">Forgot your password...</div>
   <div className="content">
     <form action="#">
       <div className="user-details">
         <div className="input-box">
           <span className="details">Email</span>
           <input type="text" placeholder="Recover your password here" required/>
         </div>
         </div>
       <div className="button">
         <input type="submit" value="Recover here"/>
       </div>
     </form>
   </div>
 </div>
 </div></Fragment>
  )
}
