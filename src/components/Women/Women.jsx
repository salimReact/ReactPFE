import React from 'react'
import Womencard from './Womencard'
import WomenIntro from './WomenIntro'


export default function Women() {
  return (
    <div>
      <section className="section" id="women">
   <WomenIntro/>
   <section className="section" id="products">
    <div className="container">
        <div className="row">
    <Womencard/>
    <Womencard/>
    <Womencard/>
            </div>
          </div>
  </section>
  </section></div>
  )
}
