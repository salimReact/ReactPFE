import React, {  Fragment } from 'react'
import img from '../../assets/images/men-01.jpg'
export default function Men_card(props) {
const name = props.name;
const price = props.price;


  return (
    <Fragment>
    <div className="col-lg-4">
                <div className="item">
                    <div className="thumb">
                        <div className="hover-content">
                            <ul>
                                <li><a href="/profile"><i className="fa fa-eye"></i></a></li>
                                <li><a href="/profile"><i className="fa fa-star"></i></a></li>
                                <li><a href="/profile"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <img src={img} alt=""/>
                    </div>
                    <div className="down-content">
                        <h4>{name}</h4>
                        <span>{price}</span>
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
