import React from 'react'
import { Fragment,useState } from 'react'
import axios from 'axios';

export default function AnnoncerRegistrationPart2() {

  const formAData = JSON.parse(localStorage.getItem('formAData'));
  if (!formAData) {
    return <div>Loading..</div>;
  }

  const [data, setData] = useState({
    Fname: formAData.Fname,
    email: formAData.email,
    phone: formAData.phone,
    password: formAData.password,
    gender: formAData.gender,
    companyName : "",
    companyEmail : "",
    companyPhone : "",
    companyDomaine : "",
    companyType : "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const Axios = axios.create({
    baseURL: 'http://localhost:3000/'
});
  const register = () => {
Axios.post("http://localhost:3000/registerAnnoncer",{
  Fname:data.Fname,
  email:data.email,
  phone:data.phone,
  password:data.password,
  gender:data.gender,
  companyName:data.companyName,
  companyEmail:data.companyEmail,
  companyPhone:data.companyPhone,
  companyDomaine:data.companyDomaine,
  companyType:data.companyType,
}).then((response)=>{
  console.log(response);
  if (response.data.message === "User registered successfully") {
    window.location.href = "/login";
  } else {
    setErrorMessage("Error registering user");
  }
})
.catch((error) => {
  console.log(error);
  setErrorMessage("An error occurred while registering user");
});


  }

  return (
    <Fragment>    
    <div className="reg">
    <div className="container1">
   <div className="title">Registration 2/2</div>
   <div className="content">
       <div className="user-details">
         <div className="input-box">
           <span className="details">Company Name</span>
           <input type="text" placeholder="Enter your name" name="companyName" value={data.companyName}  onChange={handleChange}required/>
         </div>
         <div className="input-box">
           <span className="details">Company Email</span>
           <input type="text" placeholder="Enter your email" name="companyEmail" value={data.companyEmail}  onChange={handleChange}required/>
         </div>
         <div className="input-box">
           <span className="details">Company Phone Number</span>
           <input type="text" placeholder="Enter your number"name="companyPhone" value={data.companyPhone}  onChange={handleChange} required/>
         </div>
         <div className="input-box">
           <span className="details">Company Domaine</span>
           <input type="text" placeholder="Enter your password" name="companyDomaine" value={data.companyDomaine}  onChange={handleChange} required/>
         </div>
         <div className="input-box">
           <span className="details">Company Type</span>
           <input type="text" placeholder="Confirm your password" name="companyType" value={data.companyType}  onChange={handleChange} required/>
         </div>
       </div>
     
       <div className="button">
       <button onClick={register} className='Loginbutton'>register</button>
       </div>
   </div>
 </div>
 </div></Fragment>
  )
}
