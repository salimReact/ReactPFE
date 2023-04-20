import React, { Fragment, useState } from 'react';
import axios from 'axios';

export default function EditorsCard(props) {
  const role = sessionStorage.getItem('role');
  const Edata = props.Edata;
  const campaignId = props.campaignId;
  const community_type = JSON.parse(Edata.community_type).join(' ');
  const img = 'http://localhost:3000/images/' + Edata.image;
  const id = Edata.id;

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    axios
      .post(`http://localhost:3000/addIdToCampaign/${campaignId}`, { id })
      .then((response) => {
        setButtonClicked(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Fragment>
      <div className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li>
                  <a href={`/Editor?id=${id}`}>
                    <i className="fa fa-eye"></i>
                  </a>
                </li>
                {role == 2 && (
                  <li>
                    <button onClick={handleButtonClick}>
                    <a>
                      <i className={`fa ${buttonClicked ? 'fa-check' : 'fa-plus'}`}></i></a>
                    </button>
                  </li>
                )}
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