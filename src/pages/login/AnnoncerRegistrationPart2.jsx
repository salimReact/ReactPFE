import React from 'react'
import { Fragment,useState } from 'react'
import axios from 'axios';

export default function AnnoncerRegistrationPart2() {

  const formAData = JSON.parse(localStorage.getItem('formAData'));
  if (!formAData) {
    return <div>Loading..</div>;
  }
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const [data, setData] = useState({
    Fname: formAData.Fname,
    email: formAData.email,
    phone: formAData.phone,
    password: formAData.password,
    gender: formAData.gender,
    role: "2",
    companyName : "",
    companyEmail : "",
    companyPhone : "",
    companyDomaine : "",
    companyType : "",
  });
  const [image, setImage] = useState(null);
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const Axios = axios.create({
    baseURL: 'http://localhost:3000/'
});
console.log(image)
const register = () => {
  const formData = new FormData();
  formData.append("Fname", data.Fname);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("password", data.password);
  formData.append("gender", data.gender);
  formData.append("role", data.role);
  formData.append("image", image);
  formData.append("companyName", data.companyName);
  formData.append("companyEmail", data.companyEmail);
  formData.append("companyPhone", data.companyPhone);
  formData.append("companyDomaine", data.companyDomaine);
  formData.append("companyType", data.companyType);

  Axios.post("http://localhost:3000/register", formData)
    .then((response) => {
      console.log(response);
      if (response.data.message == "User registered successfully as announcer") {
        window.location.href = "/login";
        console.log(data)
      } else {
        setErrorMessage("Error registering user");
      }
    })
    .catch((error) => {
      console.log(error);
      setErrorMessage("An error occurred while registering user");
    });
};

  return (
    <Fragment>    
    <div className="reg">
    <div className="container1">
   <div className="title">Registration 2/2</div>
   <form encType="multipart/form-data" method='POST' onSubmit={register}>
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
       <input type="file" name="image" onChange={handleImageChange} />
       <div className="button">
       <button type='submit' className='Loginbutton'>register</button>
       </div>
   </div>
   </form>

 </div>
 
 </div></Fragment>
  )
}
