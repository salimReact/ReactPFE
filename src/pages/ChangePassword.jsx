import React, { Fragment,useState,useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios';
export default function ChangePassword() {
    const [passwordError, setPasswordError] = useState('');
    const [rnpasswordError, setRnpasswordError] = useState('');
    const [formData, setFormData] = useState({
        password: "",
        newPassword: "",
        repeatNewPassword :""
      });
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        const requiredFields = ["password", "newPassword", "repeatnewPassword"]; // add other required fields here
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
  return (
    <Fragment>
        <Header/>
        <div className="profile">

        <div className="col-xl-8 order-xl-1">
          <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">My account</h3>
                </div>
                <div className="col-4 text-right">
                  <button onClick={handleSubmit} className='btn btn-sm btn-primary'>Update your password</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form>
                <h6 className="heading-small text-muted mb-4">User information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                  <div className="col-md-6"> <div className="form-group focused"> <label className="form-control-label" htmlFor="input-Password">Old Password</label> <input type="password"  id="input-Password" className="form-control form-control-alternative" placeholder="Previous password" onChange={handleChange} name='password'/> 
                    <div className="col-lg-6">
                    </div>
                  </div>
                  <div className="row">
                  </div>
                </div>
                 <div className="col-lg-6"> <div className="form-group focused"> 
                 <label className="form-control-label" htmlFor="input-NP">New Password</label> 
                 <input type="password" id="input-NP" className="form-control form-control-alternative" placeholder="New password"  onChange={handleChange} name='newPassword'/>
                  </div> 
                  </div> 
                  <div className="col-lg-6"> <div className="form-group focused"> <label className="form-control-label" htmlFor="input-RNP">Repeat New Password</label>
                   <input type="password" id="input-RNP" className="form-control form-control-alternative" placeholder="Repeat new password"  onChange={handleChange} name='repeatNewPassword'/> 
                   </div>
                    </div> 
                    </div> 
                    {passwordError && <div>{passwordError}</div>} {rnpasswordError && <div>{rnpasswordError}</div>} 
                </div> 
    
              
        

              </form>
            </div>
            </div>
            </div>
            </div> 


        <Footer/>
    </Fragment>
  )
}
