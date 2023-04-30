import React, { Fragment , useState,useEffect} from 'react'
import '../../assets/css/Card.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function MessageCard(props) {
    const data=props.dataM
    const [dataS, setDataS] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
             const response = await axios.get('http://localhost:3000/data', { mode: 'cors' });
              let filtered =response.data
              filtered = filtered.filter((item) => item.id == data.sender_id);
              setDataS(filtered[0]);
             } catch (error) {
                  console.log(error);
                  }
              };
            fetchData();
        }, []);
        const navigate = useNavigate();
        const toMessages=()=>{
          navigate('/GetMessages',{state:{ data: data }});
            }
  return (
    <Fragment>     
        <div className="cardCampaign">
    <div className="flex justify-center items-center h-screen">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div>
        <div className="section-heading mt-5">
            <h1>{""}</h1>
        </div>
    </div>
    <div className="nb px-6 py-4">
      <div className="font-bold text-xl mb-2">Message time : {Date(data.timestamp)}</div>
      <p className="text-gray-700 text-base">Message: {data.message}</p>
    </div>
    <div className="nb px-6 py-4">
     
    
    <span>Message sent by : {dataS.full_name}</span>
    </div>
    <div  className="nb" id='button-container'>
    <button className='Loginbutton w-75' onClick={toMessages}>Reply</button>

</div>
  </div>
  
</div>

</div>
</Fragment>
  )
}
