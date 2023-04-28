import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function EditorsCard(props) {

 
  const role = sessionStorage.getItem('role');
  const Edata = props.Edata;
  const contract=props.contract;
  const campaign=props.campaign;
  const campaignId = props.campaignId;
  const community_type = JSON.parse(Edata.community_type).join(' ');
  const img = 'http://localhost:3000/images/' + Edata.image;
  const edid = Edata.id;
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => {
    axios
      .post(`http://localhost:3000/addIdToCampaign/${campaignId}`, { edid })
      .then((response) => {
        setButtonClicked(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const navigate = useNavigate();

  const toEditor=()=>{
    navigate('/Editor',{state:{ data: edid }});
      }
  const toContract=()=>{
    navigate('/Contract',{state:{ data: Edata }});
    }
  const toDevis=()=>{
      navigate('/GetDevis',{state:{ data: Edata , campaign:campaign }});
      }
      
    

  return (
    <Fragment>
      <div className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li>
                  <a onClick={toEditor}>
                    <i className="fa fa-eye"></i>
                  </a>
                </li>
                {contract === "true" ? (
                    <>
                    <li><a onClick={toContract}><i className={`fa fa-plus`}></i></a></li>
                    <li><a onClick={toDevis}><i className={`fa  fa-info`}></i></a></li>
                    </>
                ) : (
                role == 2 && (
                  <li>
                    <button onClick={handleButtonClick}>
                    <a>
                      <i className={`fa ${buttonClicked ? 'fa-check' : 'fa-plus'}`}></i></a>
                    </button>
                  </li> 
                ))}
              </ul>
            </div>
            <img src={img} alt="" />
          </div>
          <div className="down-content">
            <h4>{Edata.full_name}</h4>
            <span>{community_type}</span>
            <ul className="stars">
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}