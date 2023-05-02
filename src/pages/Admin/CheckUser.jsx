import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/admin.css'
import { useNavigate } from 'react-router-dom';

const CheckUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const navigate = useNavigate();
  
  return (
    <Fragment>
    <Header/>
    <div className="admin">
    <div className="container">
      <h1 className="text-center">Admin Panel - Users</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.full_name}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              <td>{user.gender}</td>
              <td>{user.role}</td>
              <td>
                <button 
                    className="btn btn-danger" 
                    onClick={() => {
                        fetch(`http://localhost:3000/deleteUser/${user.id}`, {
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

  );
};

export default CheckUser;
