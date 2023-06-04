import React, { Fragment,useState,useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../assets/css/profile.css'
import axios from 'axios';

export default function Profile() {
  const role = sessionStorage.getItem('role')
  const userId = sessionStorage.getItem('userId');


  const [formData, setFormData] = useState(role === 2 ? {
    Fname: "",
    email: "",
    phone: "",
    aboutme: "",
  } : {
    Fname: "",
    username: "",
    email: "",
    phone: "",
    aboutme: "",
  });
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const [data, setData] = useState([]);
  console.log(userId);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/profile/${userId}`, { mode: 'cors' });
      setData(response.data.data);
      setFormData({
        Fname: response.data.data.full_name,
        username: response.data.data.username,
        email: response.data.data.email,
        phone: response.data.data.phone_number,
        aboutme: response.data.data.aboutMe
      });
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, [userId]);



const handleSubmit = async (event) => {
  
  event.preventDefault();
  const requiredFields = ["Fname", "email"]; 
  const emptyFields = requiredFields.filter(
    (field) => !formData[field].trim()
  );
  if (emptyFields.length > 0) {
    alert(`Please fill in the following fields: ${emptyFields.join(", ")}`);
    return;
  }
  try {
    const response = await axios.put(`http://localhost:3000/updateUser/${userId}?role=${role}`, formData, {
      headers: { 'Content-Type': 'application/json' },
    });
    setData(response.data.data);
    
 
    console.log('User data updated successfully');
  } catch (error) {
    console.log(error);
  }
  
  window.location.reload();

};
const img = "http://localhost:3000/images/"+data.image;




  return (
    <Fragment>
        <Header/>
        <div className="container-fluid">
        <div className="profile">
      <div className="row">
        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img src={img} className="rounded-circle"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div className="d-flex justify-content-between">
                <a href="/ChangePassword" className="btn btn-sm btn-default float-right">Change Password</a>
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                 {data.full_name}<span className="font-weight-light">, {data.age}</span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>tunisia, tunis
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>{data.followers}
                </div>
                <div>
                  <i className="ni education_hat mr-2"></i>{data.platforms}
                </div>
                <hr className="my-4"/>
                <p>{data.aboutMe}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 order-xl-1">
          <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">My account</h3>
                </div>
                <div className="col-4 text-right">
                  <button onClick={handleSubmit} className='btn btn-sm btn-primary'>Update your information</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form>
                <h6 className="heading-small text-muted mb-4">User information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    {role == 1 ?
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-username">Username</label>
                        <input type="text" id="input-username" className="form-control form-control-alternative" placeholder={data.username} onChange={handleChange} name='username' required />
                      </div>
                    </div>
                    :
                    null
                    }
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-email">Email address</label>
                        <input type="email" id="input-email" className="form-control form-control-alternative" placeholder={data.email} onChange={handleChange} name='email' required/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-first-name">full name</label>
                        <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder={data.full_name} onChange={handleChange} name='Fname' required/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-last-name">phone number</label>
                        <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder={data.phone_number} onChange={handleChange} name='phone' required/>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4"/>
                <h6 className="heading-small text-muted mb-4">About me</h6>
                <div className="pl-lg-4">
                  <div className="form-group focused">
                    <label>About Me</label>
                    <textarea rows="4" className="form-control form-control-alternative" placeholder={data.aboutMe} onChange={handleChange} name='aboutme' required></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  </div>
  </div>
  </div>

        
             
        <Footer/>
    </Fragment>
  )
}
