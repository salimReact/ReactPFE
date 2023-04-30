import React, { Fragment , useState,useEffect} from 'react'
import '../../assets/css/Card.scss'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function ContractCard(props) {
    const role = sessionStorage.getItem('role');
    const contract = props.contract;
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/data', { mode: 'cors' });
            let filteredData = response.data;
      
            if (role == 1) {
              filteredData = filteredData.filter(item => item.an_id == contract.an_id);
            } else if (role == 2) {
              filteredData = filteredData.filter(item => item.ed_id == contract.ed_id);
            }
      
            setData(filteredData[0]);
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, [contract, role]);
console.log(data)

      const AccCon = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/updateContractStatus/${contract.cont_id}`, {
                status: 'Accepted'
            });
            console.log(response.data); 
        } catch (error) {
            console.error(`Error updating contract status: ${error}`);
        }
    };
  return (
    <Fragment>        
        <div className="cardCampaign">
    <div className="flex justify-center items-center h-screen">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div>
        <div className="section-heading mt-5">
            <h1>Contract</h1>
        </div>
    </div>
    <div className="nb px-6 py-4">
      <div className="font-bold text-xl mb-2"> Object : {contract.object}</div>
      <p className="font-bold text-gray-700 text-base"> Description : {contract.cont_disc}</p>
      <p className="font-bold text-gray-700 text-base"> Period : {contract.period}</p>
    </div>
    <div className="nb px-6 py-4">
     
    {role == 2
      ?<div><span>Contract For : {data.full_name}</span><br/>
            <span>Contract status : {contract.status}</span></div>
      
      : role == 1 ? <span>{data.full_name} sent you contract</span>
      : null
    }
    </div>
  
    <div className="nb px-6 py-4" id='button-container'>
    {role == 1 && contract.status !== 'Accepted' &&
  <button className='Loginbutton w-75' onClick={AccCon}>Accept Contract</button>
}
</div>
  </div>
  
</div>

</div>
</Fragment>
  )
}
