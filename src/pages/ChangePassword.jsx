import React, { Fragment,useState,useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function ChangePassword() {
  const [passwordError, setPasswordError] = useState('');
  const [rnpasswordError, setRnpasswordError] = useState('');
  const [formData, setFormData] = useState({
    password: '',
    newPassword: '',
    repeatNewPassword: '',
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
        setFormData({});
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requiredFields = ['password', 'newPassword', 'repeatNewPassword'];
    const emptyFields = requiredFields.filter(
      (field) => !(formData[field]?.trim?.())
    );
    if (emptyFields.length > 0) {
      alert(`Please fill in the following fields: ${emptyFields.join(', ')}`);
      return;
    }
    try {
      // Check current password
      const { password } = formData;
      await checkPassword(password);
  
      // If current password is correct, update password
      const { newPassword, repeatNewPassword } = formData;
      if (newPassword !== repeatNewPassword) {
        setRnpasswordError('Passwords do not match');
        return;
      }
      const response = await axios.put(`http://localhost:3000/updateUserPassword/${userId}`, { newpassword: newPassword }, {
        headers: { 'Content-Type': 'application/json' },
      });
      setData(response.data.data);
      console.log('User data updated successfully');
      navigate('/profile', { replace: true }); // Navigate to /profile
    } catch (error) {
      console.log(error);
      setPasswordError('Current password is incorrect');
      return;
    }
    setFormData({
      password: '',
      newPassword: '',
      repeatNewPassword: '',
    });
  };

  const checkPassword = async (password) => {
    try {
      const response = await axios.post(`http://localhost:3000/checkPassword/${userId}`, { password }, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.data.message === 'Wrong password') {
        throw new Error('Current password is incorrect');
      }
    } catch (error) {
      throw error;
    }
  };


  
      console.log(data)
console.log(formData)

  return (
    <Fragment>
        <Header/>
        <div className="profile bg-white">
        <div className="d-flex justify-content-center">

        <div className="col-xl-8 order-xl-1">
          <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
              <div className="d-flex justify-content-center">
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
            </div></div> 



        <Footer/>
    </Fragment>
  )
}
