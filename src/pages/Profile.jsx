import React, { Fragment,useState,useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../assets/css/profile.css'
import axios from 'axios';

export default function Profile() {
  const [passwordError, setPasswordError] = useState('');
  const [rnpasswordError, setRnpasswordError] = useState('');

  const [formData, setFormData] = useState({
    Fname: "",
    username: '',
    email: '',
    phone: '',
    password: '',
    newPassword:'',
    repeatNewPassword:'',
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const [data, setData] = useState([]);
  const userId = sessionStorage.getItem('userId');
  console.log(userId );
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/profile/${userId}`, { mode: 'cors' });
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, [userId]);
const img = "http://localhost:3000/images/"+data.image;

const handleSubmit = async (event) => {
  event.preventDefault();

  if (formData.password !== data.password) {
    setPasswordError('Old password is incorrect');
    return;
  }

  if (formData.newPassword !== formData.repeatNewPassword) {
    setRnpasswordError('New passwords do not match');
    return;
  }
  try {
    const response = await axios.put(`http://localhost:3000/updateUser/${userId}`, formData, {
      headers: { 'Content-Type': 'application/json' },
    });
    setData(response.data.data);
    
 
    console.log('User data updated successfully');
  } catch (error) {
    console.log(error);
  }

};
console.log(formData)
console.log(data)

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
                <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
                <a href="#" className="btn btn-sm btn-default float-right">Message</a>
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span className="heading">22</span>
                      <span className="description">Friends</span>
                    </div>
                    <div>
                      <span className="heading">10</span>
                      <span className="description">Photos</span>
                    </div>
                    <div>
                      <span className="heading">89</span>
                      <span className="description">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                  Jessica Jones<span className="font-weight-light">, 27</span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>Bucharest, Romania
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                </div>
                <div>
                  <i className="ni education_hat mr-2"></i>University of Computer Science
                </div>
                <hr className="my-4"/>
                <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
                <a href="#">Show more</a>
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
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-username">Username</label>
                        <input type="text" id="input-username" className="form-control form-control-alternative" placeholder={data.username} onChange={handleChange} name='username' />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-email">Email address</label>
                        <input type="email" id="input-email" className="form-control form-control-alternative" placeholder={data.email} onChange={handleChange} name='email'/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-first-name">full name</label>
                        <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder={data.full_name} onChange={handleChange} name='Fname'/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-last-name">phone number</label>
                        <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder={data.phone_number} onChange={handleChange} name='phone'/>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4"/>
                <h6 className="heading-small text-muted mb-4">Password</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-Password">Old Password</label>
                        <input type="password"  id="input-Password" className="form-control form-control-alternative" placeholder="Previous password" onChange={handleChange} name='password'/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-NP">New Password</label>
                        <input type="password" id="input-NP" className="form-control form-control-alternative" placeholder="New password"  onChange={handleChange} name='newPassword'/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-RNP">Repeat New Password</label>
                        <input type="password" id="input-RNP" className="form-control form-control-alternative" placeholder="Repeat new password"  onChange={handleChange} name='repeatNewPassword'/>
                      </div>
                    </div>
                  </div>
                </div>
                {passwordError && <div>{passwordError}</div>}
                {rnpasswordError && <div>{rnpasswordError}</div>}
                <hr className="my-4"/>
                <h6 className="heading-small text-muted mb-4">About me</h6>
                <div className="pl-lg-4">
                  <div className="form-group focused">
                    <label>About Me</label>
                    <textarea rows="4" className="form-control form-control-alternative" value={"A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."} placeholder="A few words about you ..." onChange={handleChange} name='email'></textarea>
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
