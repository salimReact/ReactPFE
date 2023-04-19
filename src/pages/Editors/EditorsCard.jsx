import React, { Fragment } from 'react'


export default function EditorsCard(props) {

    const Edata = props.Edata;
    const community_type=JSON.parse(Edata.community_type).join(' ');
    const img = "http://localhost:3000/images/"+Edata.image;

    return (
    <Fragment>
    <div className="col-lg-4">
    <div className="item">
        <div className="thumb">
            <div className="hover-content">
                <ul>
                    <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                    <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                    <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
            <img src={img} alt=""
            />
        </div>
        <div className="down-content"> 
            <h4>{Edata.full_name}</h4>
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
