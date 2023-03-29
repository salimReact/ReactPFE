import React, { Fragment } from 'react'

export default function Womencard() {
  return (
    <Fragment>
            <div className="col-lg-4">
 <div className="item">
    <div className="thumb">
      <div className="hover-content">
        <ul>
          <li><a href="/profile"><i className="fa fa-eye" /></a></li>
          <li><a href="/profile"><i className="fa fa-star" /></a></li>
          <li><a href="/profile"><i className="fa fa-shopping-cart" /></a></li>
        </ul>
      </div>
      <img src="" alt="" />
    </div>
    <div className="down-content">
      <h4>New Green Jacket</h4>
      <span>$75.00</span>
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
