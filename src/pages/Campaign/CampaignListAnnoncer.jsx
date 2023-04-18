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