import React, {  Fragment } from 'react'
import {useNavigate} from 'react-router-dom'
export default function Men_card(props) {
const name = props.name;
const id = props.id;
const community_type = props.community_type;
const img = "http://localhost:3000/images/"+props.img;
const navigate = useNavigate();
const toEditor=()=>{
    navigate('/Editor',{state:{ data: id }});
      }
  return (
    <Fragment>
    <div className="col-lg-4">
                <div className="item">
                    <div className="thumb">
                        <div className="hover-content">
                            <ul>
                                <li><a onClick={toEditor}><i className="fa fa-eye"></i></a></li>
                            </ul>
                        </div>
                        <img src={img} alt=""/>
                    </div>
                    <div className="down-content">
                        <h4>{name}</h4>
                        <span>{community_type}</span>
                        <ul className="stars">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>
                    </div>
                </div>
            </div></Fragment>
  )
}
