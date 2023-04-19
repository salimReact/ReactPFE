import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CampaignCard from './CampaignCard';

export default function CampaignListPublic() {
  const [campaigns, setCampaigns] = useState([]);
  const announcer = sessionStorage.getItem('an_id');


  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const response = await axios.get('http://localhost:3000/campaignData');
        setCampaigns(response.data);
      } catch (error) {
        console.error(`Error fetching campaigns: ${error}`);
      }
    }

    fetchCampaigns();
  }, []);

  return (
    <Fragment>
      <Header />


      <div className="page-heading" id="top">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="inner-content">
                    <h2>Your Campaigns</h2>
                    <span>Check out your campaigns </span>
                </div>
            </div>
        </div>
    </div>
</div>

      <div className="containerCampaign">
      {campaigns
  .filter((campaign) => campaign.an_id == announcer)
  .map((campaign) => (
    <CampaignCard key={campaign.idcampaign} campaign={campaign} />
  ))}
      </div>
      <Footer />
    </Fragment>
  );
}