import React, { Fragment,useState,useEffect } from 'react'
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/admin.css'
import { useNavigate } from 'react-router-dom';

export default function CheckCampaign() {
    const [campaign, setCampaign] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/campaignData')
        .then(response => {
            setCampaign(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  return (
    <Fragment>  
        <Header/>
    <div className="admin">
    <div className="container">
      <h1 className="text-center">Admin Panel - Campaign</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Campaign Name</th>
            <th>Campaign Type</th>
            <th>Campaign Sector</th>
            <th>period </th>
            <th>Campaign Description</th>
            <th>Campaign audience</th>
            <th>Campaign Channels</th>
            <th>Annoncer ID</th>
            <th>Editor Accepted List</th>
            <th>Editor Invited List</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {campaign.map(campaign => (
            <tr key={campaign.idcampaign}>
              <td>{campaign.idcampaign}</td>
              <td>{campaign.nom_camp}</td>
              <td>{campaign.type_camp}</td>
              <td>{campaign.sector_camp}</td>
              <td>{campaign.period}</td>
              <td>{campaign.description}</td>
              <td>{campaign.audience}</td>
              <td>{campaign.channels}</td>
              <td>{campaign.an_id}</td>
              <td>{campaign.id_list}</td>
              <td>{campaign.inv_list}</td>
              <td>
                <button 
                    className="btn btn-danger" 
                    onClick={() => {
                        fetch(`http://localhost:3000/deleteCampaign/${campaign.idcampaign}`, {
                          method: 'DELETE'
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            alert(JSON.stringify(data));
                        })
                        .catch(err => console.error(err));
                      }}
                >
                    Delete
                </button> 
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

    <Footer/>

</Fragment>
  )
}
