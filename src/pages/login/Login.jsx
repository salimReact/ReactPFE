import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isLoggedIn = sessionStorage.getItem('log') === "true";

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
        sessionStorage.setItem('userId', response.data.userId);
          axios.get(`http://localhost:3000/profile/${response.data.userId}`)
            .then((response) => {
              const userData = response.data.data;
              const ed_id = userData.ed_id;
              const an_id = userData.an_id;
              sessionStorage.setItem('ed_id', ed_id);
              sessionStorage.setItem('an_id', an_id);
              sessionStorage.setItem('log', true);
              window.location.href = "/";
            })
            .catch((error) => {
              console.log(error);
            });
        sessionStorage.setItem('log', true);
      } else {
        setErrorMessage("Invalid email or password");
      }
    })
    .catch((error) => {
      console.log(error);
      setErrorMessage("An error occurred while logging in");
    });
  }

  useEffect(() => {
    if (isLoggedIn) {
      window.location.href = "/";
    }
  }, [isLoggedIn]);

  return (
    <Fragment>
      <div className="reg">
        <div className="container1">
          <div className="title">Login</div>
          <div className="content">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Email</span>
                <input type="email" placeholder="Enter your email" required onChange={((e)=> {setEmail(e.target.value)})}/>
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
