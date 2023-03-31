import React, { Fragment, useState } from 'react'
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const Axios = axios.create({
    baseURL: 'http://localhost:3000/'
});
  const login = () => {
    Axios.post("http://localhost:3000/login",{
      email: email,
      password:password,
    }).then((response)=>{
      console.log(response);
      if (response.data.message === "Login successful") {
        window.location.href = "/";
      } else {
        setErrorMessage("Invalid email or password");
      }
    })
    .catch((error) => {
      console.log(error);
      setErrorMessage("An error occurred while logging in");
    });
    }
  return (
    <Fragment>
     <div className="reg">
     <div className="container1">
    <div className="title">Login</div>
    <div className="content">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required onChange={((e)=> {setEmail(e.target.value)})}/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="password" placeholder="Enter your password" required onChange={((e)=> {setPassword(e.target.value)})}/>
          </div>
          <div className="input-box">
            <a href="/RegistrationChoice"><span className="details">Register Now</span></a>   
             </div>
          <div className="input-box">
            <a href="/ForgetPassword"><span className="details">Forget Password?</span></a>   
             </div>
             
             </div>
        <div className="button">
            <button className='Loginbutton' onClick={login}>Login</button>
            {errorMessage && <p className="error">{errorMessage}</p>}
 </div>
    </div>
  </div>
  </div>
  </Fragment>
  )
}

export default Login