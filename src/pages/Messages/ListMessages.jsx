import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MessageCard from './MessageCard';

export default function ListMessages() {

  const [dataM, setDataM] = useState([]);
  const role = sessionStorage.getItem('role');
  const ed = sessionStorage.getItem('ed_id');
  const an = sessionStorage.getItem('an_id');


  useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getMessage', { mode: 'cors' });
            let filtered =response.data
            if (role == 1){
            filtered = filtered.filter((item) => item.receiver_id == ed);
          }else{
            filtered = filtered.filter((item) => item.receiver_id == an);
          }
            setDataM(filtered);
            } catch (error) {
            console.log(error);
            }
        };
      fetchData();
    }, []);
  return (
    <Fragment>
      <Header />

      <div className="page-heading" id="top">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="inner-content">
                    <h2>Your Message</h2>
                    <span>Check out your Messages </span>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="containerCampaign">

{dataM.map((dataM) => (
    <MessageCard key={dataM.message_id} dataM={dataM} />
  ))}

  
      </div>
      <Footer />
    </Fragment>
  );
}