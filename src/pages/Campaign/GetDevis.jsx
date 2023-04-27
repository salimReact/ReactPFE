import React, { Fragment,useState ,useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../../assets/css/profile.css'
import axios from 'axios';
import {useLocation,useNavigate } from 'react-router-dom';


export default function GetDevis() {
    const location = useLocation();
    const Edata = location.state.data
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/getDevis', { mode: 'cors' });
            setData(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
      const filteredData = data.filter(item => item.devEd == Edata.id);
console.log(filteredData)
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
              <h3 className="mb-0">Devis</h3>
            </div>
            <div className="col-4 text-right">
              <button className='btn btn-sm btn-primary'>Create Devis</button>
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
                    <input type="text" id="input-username" className="form-control form-control-alternative" readOnly required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-email">Deliverable</label>
                    <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="Photo , video , etc"  name='deliverable' required/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" htmlFor="input-first-name">Number of deliverable</label>
                    <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="3 , 4 , 5"  name='nb_deliverable' required/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" htmlFor="input-last-name">Price</label>
                    <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="in DT"  name='price' required/>
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
