import React, { Fragment,useState } from 'react'
import '../../assets/css/checkbox.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';



export default function EditorRegistrationPart2() {
  const formData = JSON.parse(localStorage.getItem('formData'));



  if (!formData) {
    return <div>Loading..</div>;
  }
  console.log(formData);

  const [data, setData] = useState({
    Fname: formData.Fname,
    username: formData.username,
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
    gender: formData.gender,
  });


  const Axios = axios.create({
    baseURL: 'http://localhost:3000/'
});
  const register = () => {
Axios.post("http://localhost:3000/register",{
  Fname:data.Fname,
  username:data.username,
  email:data.email,
  phone:data.phone,
  password:data.password,
  gender:data.gender,
})
console.log(data.Fname);
}
  return (
    <Fragment>
      <div className="reg">
    <div className="container1">
   <div className="title">Registration 2/2</div>
   <div className="content">
       <div className="user-details">
        <div className='sort'>
            <div className='sort1'>
       <label className="checkbox">
       <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label-text">beauty</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label-text">Gaming</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label-text">High-tech</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label-text">App mobiles</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label-text">Lifestyle</span>
    </label>
    </div>
    <div className='sort2'><label className="checkbox">
       <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label-text">Parents / Kids</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label-text">Travel</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label-text">Food</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label-text">Animals</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label-text">Humour</span>
    </label>
    </div>
    </div>
       </div>
       <div className="button">
       <button onClick={register}>register</button>
       </div>
   </div>
 </div>
 </div></Fragment>
  )
}
