import React, { Fragment } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CampaignCard from './CampaignCard'

export default function CampaignListPublic() {
  return (
    <Fragment>
        <Header/>
        
        <div className="containerCampaign">
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
        </div>
        <Footer/>
    </Fragment>  
)
}
