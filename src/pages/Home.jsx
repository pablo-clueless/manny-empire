import React from 'react'

import { Catalogue, Contact, Footer, Header, Services, Showcase } from '../components'

const Home = () => {

  return (
    <div className='flex flex-col items-center bg-white dark:bg-black'>
      <Header />
      <Showcase />
      <Services />
      <Catalogue />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home