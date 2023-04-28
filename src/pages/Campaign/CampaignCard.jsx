import React, { Fragment , useState,useEffect} from 'react'
import '../../assets/css/Card.scss'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function CampaignCard( { campaign }) {
  const role = sessionStorage.getItem('role');


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
    const idlist = campaign.id_list.split(',')

    const editors = idlist.map((e)=>Andata.filter(item => item.ed_id == e))
    const editor = editors.map((e)=>e[0])


const navigate = useNavigate();
const toDevis=()=>{
  navigate('/CreateDevis',{state:{ data: campaign }});
    }
    const toEditor=()=>{
      navigate('/CampEditors', { state: { editor: editor, campaign: campaign } });
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
         
        {role == 2
          ? <span>{campaign.editorsCount} Editors want to work with you</span>
          : role == 1 ? <span>{announcerNames} want to work with you</span>
          : null
        }
        </div>
      
        <div id='button-container'>
      {role == 1
        ? <button className='Loginbutton w-75' onClick={toDevis}>Create Devis</button>

        : role == 2
          ? 
            <button className='Loginbutton w-75' onClick={toEditor}>Check them out</button>
          : null
      }
    </div>
      </div>
      
</div>

</div>
    </Fragment>
  )
}
