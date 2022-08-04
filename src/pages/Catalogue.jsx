import React from 'react'

import { CATALOGUE } from '../assets'
import { Card, Footer } from '../components'
import logo from '../assets/images/4kboutique.png'

const Catalogue = () => {
  return (
    <div className='w-full grid place-items-center  bg-white dark:bg-black'>
      <div className='w-full grid place-items-center text-center mt-4 mb-12'>
        <div className='w-100 h-100 rounded-full mt-4 mb-8 border-1 border-transparent dark:border-white'>
          <img src={logo} alt="4k boutique logo" className='w-full h-full object-contain rounded-full' />
        </div>
        <p className='text-4xl uppercase outline-text'>
          4k Boutique
        </p>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        {CATALOGUE.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Catalogue