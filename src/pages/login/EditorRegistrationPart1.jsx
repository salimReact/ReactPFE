import React, { Fragment, useState } from 'react'
import "../../assets/css/style.css"
import { useNavigate } from 'react-router-dom';


function EditorRegistrationPart1() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Fname: "",
    username: '',
    email: '',
    phone: '',
    password: '',
    gender: '',
    role : "1"
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/EditorRegistrationPart2');
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  console.log(formData);

  return (
    <Fragment>
       <div className="reg">
     <div className="container1">
    <div className="title">Registration 1/2</div>
    <div className="content">
      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" name="Fname" value={formData.Fname}  onChange={handleChange} required/>
          </div>
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter your username" name="username" value={formData.username} onChange={handleChange}required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="tel" placeholder="Enter your number"  name="phone"value={formData.phone} onChange={handleChange} required/>
          </div>
          <div className="input-box">
            <span className="password">Password</span>
            <input type="password" placeholder="Enter your password"  name="password" value={formData.password} onChange={handleChange} required/>
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1" value="male" onChange={handleChange}/>
          <input type="radio" name="gender" id="dot-2" value="female" onChange={handleChange}/>
          <input type="radio" name="gender" id="dot-3" value="others" onChange={handleChange}/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>

        </div>
        <div className="button">
<input type="submit" value="Next"/>
        </div>
      </form>
    </div>
  </div>
  </div>
    </Fragment>
  )
}

export default EditorRegistrationPart1