import React, { Fragment , useState,useEffect} from 'react'
import '../../assets/css/Card.scss'
import { Link } from 'react-router-dom'
import axios from 'axios';


export default function CampaignCard( { campaign }) {
  const role = sessionStorage.getItem('role');

  const dataToSend = {
    campaignName: campaign.id_list,
  }
 const [Andata, setAnData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/data',{ mode: 'cors' }         );
          setAnData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
    const announcers = Andata.filter(item => item.an_id === campaign.an_id);
    const announcerNames = announcers.map(item => item.full_name);
    console.log(announcerNames);
console.log(announcers);
    

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
         
        {role === 1
  ? <span>{campaign.editorsCount} Editors want to work with you</span>
  : <span>{announcerNames} want to work with you</span>
}
        </div>
      
        <button className='Loginbutton w-75'> <Link  to={{pathname: '/next-page', state: { data: dataToSend }}}>Check them out</Link></button>

      </div>
      
</div>

</div>
    </Fragment>
  )
}
