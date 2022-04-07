import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/StoreHeader.css'

const StoreHeader = () => {

  return (
      <header className='store-header'>
          <h1>4k Boutique by Manny</h1>
          <p>This store is currently stocking materials, please check back later.</p>
          <img src='/empty_cart.svg' alt="empty cart" />
      </header>
  )
}

export default StoreHeader