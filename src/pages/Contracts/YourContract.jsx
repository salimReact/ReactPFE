import React, { Fragment, useState, useEffect } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import ContractCard from './ContractCard';


export default function YourContract() {
    const [contract, setContract] = useState([]);
    const role  = sessionStorage.getItem('role');
    const ed  = sessionStorage.getItem('ed_id');
    const an  = sessionStorage.getItem('an_id');

    useEffect(() => {
      async function fetchContract() {
        try {
          const response = await axios.get(`http://localhost:3000/getContract`);
          const filteredData = response.data.filter((item) => {
            if (role == 1) {
              return item.ed_id == ed;
            } else {
              return item.an_id == an;
            }
          });
          setContract(filteredData);
        } catch (error) {
          console.error(`Error fetching contract: ${error}`);
        }
      }
  
      fetchContract();
    }, []);
    console.log(contract)
  return (
    <Fragment>    
        <Header />
        <div className="page-heading" id="top">
  <div className="container">
      <div className="row">
          <div className="col-lg-12">
              <div className="inner-content">
                  <h2>Your Contracts</h2>
                  <span>Check out your Contracts </span>
              </div>
          </div>
      </div>
  </div>
</div>

    <div className="containerCampaign">
    {contract.map((item) => (
  <ContractCard key={item.cont_id} contract={item} />
))}

    </div>
        
        <Footer />
    </Fragment>
  )
}
