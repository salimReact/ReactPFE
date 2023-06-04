import React, { Fragment,useState ,useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../../assets/css/profile.css'
import axios from 'axios';
import {useLocation,useNavigate } from 'react-router-dom';


export default function GetDevis() {
    const navigate = useNavigate();
    const location = useLocation();
    const { Edata, campaign } = location.state;
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/getDevis', { mode: 'cors' });
            let filteredData = response.data;
             filteredData = filteredData.filter(item => item.devCampaign == campaign.idcampaign);
            setData(filteredData[0]);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
      console.log(data)
      const fData = data;

      const AccDevis = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/updateDevisStatus/${fData.idDevis}`, {
                status: 'Accepted'
            });
            console.log(response.data); 
        } catch (error) {
            console.error(`Error updating contract status: ${error}`);
        }
        navigate('/CampaignListAnnoncer');

    };
    const refDevis = async () => {
      try {
          const response = await axios.put(`http://localhost:3000/updateDevisStatus/${fData.idDevis}`, {
              status: 'Refused'
          });
          console.log(response.data); 
      } catch (error) {
          console.error(`Error updating contract status: ${error}`);
      }
      navigate('/CampaignListAnnoncer');

  };  return (
    <Fragment> <Header/>
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
              <button onClick={AccDevis} className='btn btn-sm btn-primary'>Accept Devis</button>
              <button onClick={refDevis} className='btn btn-sm btn-primary'>Refuse Devis</button>
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
                    <input type="text" id="input-username" className="form-control form-control-alternative" placeholder={campaign.nom_camp} readOnly required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-email">Deliverable</label>
                    <input type="email" id="input-email" className="form-control form-control-alternative" placeholder={fData.deliverable}  name='deliverable' readOnly required/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" htmlFor="input-first-name">Number of deliverable</label>
                    <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder={fData.nb_deliverable}  name='nb_deliverable' readOnly required/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" htmlFor="input-last-name">Price</label>
                    <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder={fData.price}  name='price' readOnly required/>
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

    
         
    <Footer/></Fragment>
  )
}
