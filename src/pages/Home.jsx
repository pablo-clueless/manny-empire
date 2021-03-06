import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Section from '../components/Section'
import StoreAd from '../components/StoreAd'
import SwiperComponent from '../components/Swiper'

const Home = () => {
  return (
    <>
    <Header />
    <NavBar />
    <StoreAd />
    {/* <SwiperComponent /> */}
    <Section />
    <Footer />
    </>
  )
}

export default Home