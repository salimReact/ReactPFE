import React, { Fragment ,useState } from 'react'
import axios from 'axios';


export default function CreateCampaign() {
  const [formData, setFormData] = useState({
    companyName: '',
    campaignType: '',
    campaignSector: '',
    campaignTargetAudience: '',
    campaignPeriod: '',
    campaignChannels: '',
    description: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createCampaign(formData)
      .then((response) => {
        console.log(response.data);
        // handle success
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const createCampaign = (data) => {
    return axios.post('http://localhost:3000/addCampaign', data);
  };

  return (
    <Fragment>    
    <div className="reg">
    <div className="container1">
  <div className="title">Create your Campaign</div>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="content">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Campaign Name</span>
                  <input type="text" placeholder="Enter your campaign name" name="companyName" value={formData.companyName} onChange={handleChange} required />
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
                  <input type="text" placeholder="Enter your campaign target audience" name="campaignTargetAudience" value={formData.campaignTargetAudience} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <span className="details">Campaign Period</span>
                  <input type="text" placeholder="Enter your campaign period" name="campaignPeriod" value={formData.campaignPeriod} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <span className="details">Channels</span>
                  <input type="text" placeholder="Enter your campaign channels" name="campaignChannels" value={formData.campaignChannels} onChange={handleChange} required />
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
 
 </div></Fragment>
  )
}
