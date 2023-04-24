import React, { Fragment,useState,useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../../assets/css/profile.css'
import axios from 'axios';
import {useLocation} from 'react-router-dom';


export default function CreateDevis() {
    const location = useLocation();
    const announcers = location.state.data
    console.log(announcers)

  const [formData, setFormData] = useState({
    Fname: "",
    username: "",
    email: "",
    phone: "",
    aboutme :"",
  });
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const [data, setData] = useState([]);
  const userId = sessionStorage.getItem('userId');
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
  const requiredFields = ["Fname", "username", "email"]; // add other required fields here
  const emptyFields = requiredFields.filter(
    (field) => !formData[field].trim()
  );
  if (emptyFields.length > 0) {
    alert(`Please fill in the following fields: ${emptyFields.join(", ")}`);
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
  
  window.location.reload();

};
const img = "http://localhost:3000/images/"+data.image;




  return (
    <Fragment>
        <Header/>
        <div className="container-fluid">
        <div className="profile">
      <div className="d-flex justify-content-center bg-white">
        <div className="col-xl-8 order-xl-1">
          <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">Devis</h3>
                </div>
                <div className="col-4 text-right">
                  <button onClick={handleSubmit} className='btn btn-sm btn-primary'>Create Devis</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form>
                <h6 className="heading-small text-muted mb-4">Give us your Proposition,</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-username">Campaign Name</label>
                        <input type="text" id="input-username" className="form-control form-control-alternative" placeholder={data.username} onChange={handleChange} name='username' required />
                      </div>
                    </div>
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
