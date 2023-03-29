import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Subscribe from '../components/Subscribe'
import Banner from '../components/Banner'
import Men from '../components/Men/Men'
import Women from '../components/Women/Women'
import Explore from '../components/Explore'

export default function Index() {

  return (
      <Fragment>
        <Header/>
         <Banner/>
          <Men/>
          <Women/>
          <Explore/>
          <Subscribe/>
        <Footer/>
      </Fragment>
  )
}
