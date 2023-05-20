import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Men from '../components/Men/Men'
import Women from '../components/Women/Women'
import RateUs from '../components/RateUs'

export default function Index() {

  return (
      <Fragment>
        <Header />
         <Banner/>
          <Men/>
          <Women/>
          <RateUs/>
        <Footer/>
      </Fragment>
  )
}
