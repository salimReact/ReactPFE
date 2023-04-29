import React, { Fragment,useState,useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../../assets/css/profile.css'
import axios from 'axios'
import {useLocation,useNavigate } from 'react-router-dom';


export default function Messages() {
    const role = sessionStorage.getItem('role');
    const ed = sessionStorage.getItem('ed_id');
    const an = sessionStorage.getItem('an_id');
    const location = useLocation();
    const edid = location.state.data
    const data = location.state.dataM
    const reply = location.state.reply
    const [reveiverData, setReveiverData] = useState([]);
    const [senderData, setSenderData] = useState([]);
    const [formData, setFormData] = useState({
        msg: "",
        sender: null,
        receiver: null,
      });
    
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/data', { mode: 'cors' });
            let reveiverfiltered = response.data
            let senderfiltered = response.data
            
            if (role === 2) {
              reveiverfiltered = reveiverfiltered.filter((item) => item.ed_id == edid);
              senderfiltered = senderfiltered.filter((item) => item.an_id == an);
            } else {
              reveiverfiltered = reveiverfiltered.filter((item) => item.an_id == data.an_id);
              senderfiltered = senderfiltered.filter((item) => item.ed_id== ed);
            }
      
            setReveiverData(reveiverfiltered[0]);
            setSenderData(senderfiltered[0]);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
      
useEffect(() => {
    if (senderData && reveiverData) {
      setFormData({
        message: "",
        sender: senderData.id,
        receiver: reveiverData.id,
      });
    }
  }, [senderData, reveiverData]);

      
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
      console.log(formData)

      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post("http://localhost:3000/addMessage", formData);
          alert("Message sent successfully!");
        } catch (error) {
          console.log(error);
          alert("Failed to send message.");
        }
      };
    


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
              <h3 className="mb-0">Contract</h3>
            </div>
            <div className="col-4 text-right">
              <button onClick={handleSubmit} className='btn btn-sm btn-primary'>Send Message</button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form>
            <h6 className="heading-small text-muted mb-4">Send your message,</h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" htmlFor="input-username">Receiver Name</label>
                    <input type="text" id="input-username" className="form-control form-control-alternative"value={reply === "true" ? data.full_name : reveiverData.full_name} readOnly required />
                  </div>
                </div>
              </div>
              <div className="pl-lg-4">
                <div className="form-group focused">
                <label className="form-control-label" htmlFor="input-first-name">Message</label>
                    <textarea rows="6" className="form-control form-control-alternative" placeholder="Send Massage" onChange={handleChange} name='message' required></textarea>
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
