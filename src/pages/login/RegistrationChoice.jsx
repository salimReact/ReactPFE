import React, { Fragment } from 'react'

export default function RegistrationChoice() {
  return (
    <Fragment><div className="reg">
    <div className="container1">
   <div className="choicetitle text-center">Registration Choice</div>
   <div className="content">
       <div className="user-details">
           <a href="/EditorRegistrationPart1"><span className="choice">Editor</span></a>   
            </div>
            <hr></hr>
         <div className="input-box">
           <a href="/AnnoncerRegistrationPart1"><span className="choice">Annoncer</span></a>   
            </div>
            </div>
   </div>
 </div></Fragment>
  )
}
