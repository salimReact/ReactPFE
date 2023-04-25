import React, { Fragment,useState  } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../../assets/css/profile.css'
import axios from 'axios';
import {useLocation,useNavigate } from 'react-router-dom';


export default function CreateDevis() {
  const navigate = useNavigate();

    const location = useLocation();
    const campaign = location.state.data
    const ed  = sessionStorage.getItem('ed_id');
  const [formData, setFormData] = useState({
    deliverable: "",
    nb_deliverable: "",
    price: "",
    devEd: ed,
    devCampaign: campaign.idcampaign,

  });
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const [data, setData] = useState([]);


const handleSubmit = async (event) => {
  
  event.preventDefault();
  const requiredFields = ["deliverable", "nb_deliverable", "price"]; 
  const emptyFields = requiredFields.filter(
    (field) => !formData[field].trim()
  );
  if (emptyFields.length > 0) {
    alert(`Please fill in the following fields: ${emptyFields.join(", ")}`);
    return;
  }
  try {
    const response = await axios.put(`http://localhost:3000/addDevis`, formData, {
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.status === 200) {
      console.log('devis data updated successfully');
      alert('Devis added!');
      await axios.post(`http://localhost:3000/addIdToListId/${campaign.idcampaign}`, { ed }, {
        headers: { 'Content-Type': 'application/json' },
      });
      
      console.log('ed added to campaign successfully');
    }
  
    setData(response.data.data);
  } catch (error) {
    console.log(error);
  }
  navigate('/YourOffers'); 

};




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
                        <input type="text" id="input-username" className="form-control form-control-alternative" value={campaign.nom_camp} readOnly required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-email">Deliverable</label>
                        <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="Photo , video , etc" onChange={handleChange} name='deliverable' required/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-first-name">Number of deliverable</label>
                        <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="3 , 4 , 5" onChange={handleChange} name='nb_deliverable' required/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-last-name">Price</label>
                        <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="in DT" onChange={handleChange} name='price' required/>
                      </div>
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

        
             
        <Footer/>
    </Fragment>
  )
}
