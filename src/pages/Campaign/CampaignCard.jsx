import React, { Fragment } from 'react'
import '../../assets/css/Card.scss'

export default function CampaignCard() {
  return (
    <Fragment>
     
        <div className="cardCampaign">
        <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div>
            <div className="section-heading mt-5">
                <h1>your Campaign</h1>
            </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
         
           <span>2 Editors wants to work with u</span>

        </div>
        
      </div>
      
</div>

</div>
    </Fragment>
  )
}
