import React, { Fragment,useState,useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../../assets/css/profile.css'
import axios from 'axios';
import { useLocation } from "react-router-dom";


export default function Editors() {
    const location = useLocation();
    const edid = location.state.data
    console.log(edid)

  const [data, setData] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/profile/${edid}`, { mode: 'cors' });
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, [edid]);

console.log(data)

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
                  {data.full_name}<span className="font-weight-light">, {data.age}</span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>Tunisia
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>{data.platforms}
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
                  <h3 className="mb-0">{data.full_name} account</h3>
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
                        <input type="text" id="input-username" className="form-control form-control-alternative" placeholder={data.username} readOnly name='username' required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-email">Email address</label>
                        <input type="email" id="input-email" className="form-control form-control-alternative" value={data.email} readOnly name='email' required/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-first-name">Platforms</label>
                        <input type="text" id="input-first-name" className="form-control form-control-alternative" value={data.platforms} readOnly name='Fname' required/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-last-name">Total Followers</label>
                        <input type="text" id="input-last-name" className="form-control form-control-alternative" value={data.followers} readOnly name='followers' required/>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4"/>
                <h6 className="heading-small text-muted mb-4">About me</h6>
                <div className="pl-lg-4">
                  <div className="form-group focused">
                    <label>About Me</label>
                    <textarea rows="4" className="form-control form-control-alternative" placeholder={data.aboutMe} readOnly name='aboutme' required></textarea>
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
