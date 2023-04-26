import React, { Fragment, useState, useEffect } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';


export default function YourContract() {
    const [contract, setContract] = useState([]);
    const ed = sessionStorage.getItem('ed_id');

  
    useEffect(() => {
      async function fetchContract() {
        try {
          const response = await axios.get(`http://localhost:3000/getContract`);
          setContract(response.data);
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
        
        <Footer />
    </Fragment>
  )
}
