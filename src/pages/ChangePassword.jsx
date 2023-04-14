import React, { Fragment , useState , useEffect} from 'react'

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
      const [data, setData] = useState([]);
      const userId = sessionStorage.getItem('userId');
      console.log(userId );
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/profile/${userId}`, { mode: 'cors' });
          setData(response.data.data);
          setFormData({
            password: response.data.data.password,
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
    if (formData.password !== data.password) {
        setPasswordError('Old password is incorrect');
        return;
      }
    
      if (formData.newPassword !== formData.repeatNewPassword) {
        setRnpasswordError('New passwords do not match');
        return;
      } 
  return (
    <Fragment>
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
                  {passwordError && <div>{passwordError}</div>}
            {rnpasswordError && <div>{rnpasswordError}</div>}
            <button onClick={handleSubmit} className='btn btn-sm btn-primary'>Update your information</button>

                </div>
    </Fragment>
  )
}
