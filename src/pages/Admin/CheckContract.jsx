import React, { Fragment,useState,useEffect } from 'react'
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/admin.css'
import { useNavigate } from 'react-router-dom';

export default function CheckContract() {
    const [contract, setContract] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/getContract')
        .then(response => {
            setContract(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  return (
    <Fragment>  <Header/>
    <div className="admin">
    <div className="container">
      <h1 className="text-center">Admin Panel - Contract</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>object</th>
            <th>Contract Description</th>
            <th>Period</th>
            <th>Annoncer ID</th>
            <th>Editor ID</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contract.map(contract => (
            <tr key={contract.cont_id}>
              <td>{contract.cont_id}</td>
              <td>{contract.object}</td>
              <td>{contract.cont_disc}</td>
              <td>{contract.period}</td>
              <td>{contract.an_id}</td>
              <td>{contract.ed_id}</td>
              <td>{contract.status}</td>
              <td>
                <button 
                    className="btn btn-danger" 
                    onClick={() => {
                        fetch(`http://localhost:3000/deleteContract/${contract.cont_id}`, {
                          method: 'DELETE'
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            alert(JSON.stringify(data));
                        })
                        .catch(err => console.error(err));
                      }}
                >
                    Delete
                </button> 
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

    <Footer/>

</Fragment>
  )
}
