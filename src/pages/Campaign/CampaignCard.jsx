import React, { Fragment } from 'react'
import '../../assets/css/Card.scss'
import { Link } from 'react-router-dom'

export default function CampaignCard( { campaign }) {
  const dataToSend = {
    campaignName: campaign.id_list,
  }
  return (
    <Fragment>
     
        <div className="cardCampaign">
        <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div>
            <div className="section-heading mt-5">
                <h1>{campaign.nom_camp}</h1>
            </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Campaign type : {campaign.type_camp}</div>
          <p className="text-gray-700 text-base">Campaign sector : {campaign.sector_camp}</p>
          <p className="text-gray-700 text-base">Campaign Discreption : {campaign.description}</p>
          <p className="text-gray-700 text-base">Campaign period : {campaign.period}</p>
          <p className="text-gray-700 text-base">Campaign audience : {campaign.audience}</p>
          <p className="text-gray-700 text-base">Campaign channels : {campaign.channels}</p>
        </div>
        <div className="px-6 py-4">
         
           <span>{campaign.editorsCount} Editors wants to work with u</span>

        </div>
      
        <button className='Loginbutton w-75'> <Link  to={{pathname: '/next-page', state: { data: dataToSend }}}>Check them out</Link></button>

      </div>
      
</div>

</div>
    </Fragment>
  )
}
