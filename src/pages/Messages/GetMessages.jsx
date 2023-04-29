import React, { Fragment,useState,useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../../assets/css/profile.css'
import axios from 'axios'
import {useLocation,useNavigate } from 'react-router-dom';
export default function GetMessages() {
    const role = sessionStorage.getItem('role');
    const [data, setData] = useState([]);

    const location = useLocation();
    const dataM = location.state.data
      useEffect(() => {
    const fetchData = async () => {
      try {
         const response = await axios.get('http://localhost:3000/data', { mode: 'cors' });
          let filtered =response.data
          filtered = filtered.filter((item) => item.id == dataM.sender_id);
          setData(filtered[0]);
         } catch (error) {
              console.log(error);
              }
          };
        fetchData();
    }, []);
          const navigate = useNavigate();
          const toMessages=()=>{
            navigate('/Messages',{state:{ dataM: data , reply : "true"}});
              }
              console.log(dataM)

              console.log(data)


  return (
    <Fragment><Header/>
    <div className="container-fluid">
    <div className="profile">
  <div className="d-flex justify-content-center bg-white">
    <div className="col-xl-8 order-xl-1">
      <div className="card bg-secondary shadow">
        <div className="card-header bg-white border-0">
          <div className="row align-items-center">
            <div className="col-8">
              <h3 className="mb-0">Message</h3>
            </div>
            <div className="col-4 text-right">
              <button onClick={toMessages} className='btn btn-sm btn-primary'>Send Message</button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form>
          <h6 className="heading-small text-muted mb-4">sent at : {Date(dataM.timestamp)}</h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" htmlFor="input-username">From</label>
                    <input type="text" id="input-username" className="form-control form-control-alternative" value={data.full_name} readOnly required />
                  </div>
                </div>
              </div>
              <div className="pl-lg-4">
                <div className="form-group focused">
                <label className="form-control-label" htmlFor="input-first-name">Massage</label>
                    <textarea rows="6" className="form-control form-control-alternative" placeholder="Send Massage" value={dataM.message} readOnly name='msg' required></textarea>
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
