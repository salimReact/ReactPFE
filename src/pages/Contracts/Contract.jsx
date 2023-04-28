import React, { Fragment,useState  } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../../assets/css/profile.css'
import axios from 'axios';
import {useLocation,useNavigate } from 'react-router-dom';


export default function Contract() {
  const navigate = useNavigate();
  const location = useLocation();
  const Edata = location.state.data


    const an  = sessionStorage.getItem('an_id');
    
  const [formData, setFormData] = useState({
    object: "",
    cont_disc: "",
    period: "",
    an_id: an,
    ed_id: Edata.id,

  });
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const [data, setData] = useState([]);


const handleSubmit = async (event) => {
  
  event.preventDefault();
  const requiredFields = ["object", "cont_disc", "period"]; 
  const emptyFields = requiredFields.filter(
    (field) => !formData[field].trim()
  );
  if (emptyFields.length > 0) {
    alert(`Please fill in the following fields: ${emptyFields.join(", ")}`);
    return;
  }
  try {
    const response = await axios.put(`http://localhost:3000/Contract`, formData, {
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.status === 200) {
      console.log('Contract data updated successfully');
      alert('Contract added!');
    }
  
    setData(response.data.data);
  } catch (error) {
    console.log(error);
  }
  navigate('/YourContract'); 

};
const toMessages=()=>{
  navigate('/Messages',{state:{ data: Edata.id }});
    }

  return (
    <Fragment> <Header/>
    <div className="container-fluid">
    <div className="profile">
  <div className="d-flex justify-content-center bg-white">
    <div className="col-xl-8 order-xl-1">
      <div className="card bg-secondary shadow">
        <div className="card-header bg-white border-0">
          <div className="row align-items-center">
            <div className="col-8">
              <h3 className="mb-0">Contract</h3>
            </div>
            <div className="col-4 text-right">
              <button onClick={handleSubmit} className='btn btn-sm btn-primary'>Create Contract</button>
              <button onClick={toMessages} className='btn btn-sm btn-primary'>Message</button>
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
                    <label className="form-control-label" htmlFor="input-username">Editor Name</label>
                    <input type="text" id="input-username" className="form-control form-control-alternative" value={Edata.full_name} readOnly required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-email">object</label>
                    <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="Objective" onChange={handleChange} name='object' required/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" htmlFor="input-last-name">Period</label>
                    <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="in Months" onChange={handleChange} name='period' required/>
                  </div>
                </div>
              </div>
              <div className="pl-lg-4">
                <div className="form-group focused">
                <label className="form-control-label" htmlFor="input-first-name">Contract discription</label>
                    <textarea rows="6" className="form-control form-control-alternative" placeholder="Contract discription" onChange={handleChange} name='cont_disc' required></textarea>
                  </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>
</div>
</div>

    
         
    <Footer/></Fragment>
  )
}
