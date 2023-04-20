import React, { Fragment ,useState } from 'react'
import axios from 'axios';


export default function CreateCampaign() {
  const [formData, setFormData] = useState({
    campaignName: '',
    campaignType: '',
    campaignSector: '',
    period: '',
    description: '',
    audience: '',
    channels: '',
    an_id: 1

  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const Axios = axios.create({
    baseURL: 'http://localhost:3000/'
});
const handleSubmit = (event) => {
  event.preventDefault(); 

  Axios.post("http://localhost:3000/addCampaign", formData)
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        const campaignId = response.data.insertId;
        window.location.href = `/Editors?campaignId=${campaignId}`;
      } else {
        setErrorMessage("Error registering campaign");
      }
    })
    .catch((error) => {
      console.log(error);
      setErrorMessage("An error occurred while registering campaign");
    });
};

console.log(formData)
  return (
    <Fragment>    
    <div className="reg">
    <div className="container1">
  <div className="title">Create your Campaign</div>
          <form onSubmit={handleSubmit}>
            <div className="content">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Campaign Name</span>
                  <input type="text" placeholder="Enter your campaign name" name="campaignName" value={formData.campaignName} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <span className="details">Campaign Type</span>
                  <input type="text" placeholder="Enter your campaign type" name="campaignType" value={formData.campaignType} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <span className="details">Campaign Sector</span>
                  <input type="text" placeholder="Enter your campaign sector" name="campaignSector" value={formData.campaignSector} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <span className="details">Campaign Target audience</span>
                  <input type="text" placeholder="Enter your campaign target audience" name="audience" value={formData.audience} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <span className="details">Campaign Period</span>
                  <input type="text" placeholder="Enter your campaign period" name="period" value={formData.period} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <span className="details">Channels</span>
                  <input type="text" placeholder="Enter your campaign channels" name="channels" value={formData.channels} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <span className="details">Campaign Description</span>
                  <textarea rows="4" className="form-control form-control-alternative" placeholder="Enter your campaign description" name="description" value={formData.description} onChange={handleChange} required></textarea>
                </div>
              </div>
              <div className="button">
                <button type="submit" className="Loginbutton">Create</button>
              </div>
            </div>
          </form>

 </div>
 
 </div>
 </Fragment>
  )
}
