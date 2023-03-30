import React, { Fragment,useState } from 'react'
import "../../assets/css/style.css"
import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();
  
  const [formAData, setformAData] = useState({
    Fname: "",
    email: '',
    phone: '',
    password: '',
    gender: ''
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formAData', JSON.stringify(formAData));
    navigate('/AnnoncerRegistrationPart2');
  };
  const handleChange = (event) => {
    setformAData({ ...formAData, [event.target.name]: event.target.value });
  };
  console.log(formAData);

  return (
    <Fragment>
       <div className="reg">
     <div className="container1">
    <div className="title">Registration 1/2</div>
    <div className="content">
    <form onSubmit={handleSubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" name="Fname" value={formAData.Fname}  onChange={handleChange} required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder="Enter your email"name="email" value={formAData.email}  onChange={handleChange} required/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your number"name="phone" value={formAData.phone}  onChange={handleChange} required/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="password" placeholder="Enter your password" name="password" value={formAData.password}  onChange={handleChange} required/>
          </div>
          
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1"value="male" onChange={handleChange}/>
          <input type="radio" name="gender" id="dot-2"value="female" onChange={handleChange}/>
          <input type="radio" name="gender" id="dot-3"value="others" onChange={handleChange}/>
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

export default Registration