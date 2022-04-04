import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/StoreAd.css'

const StoreHeader = () => {

  return (
      <header className='store-ad'>
          <div className='caption'>
              <h1>new & amazing stuff are here</h1>

              <p>shop today and get <b>20% discount</b></p>

              <Link to={'/store'}>
                  shop now
              </Link>
          </div>
          <div className='image-container'>
              <div className="frame">
                  <img src="/stock_2.jpeg" alt="" />
              </div>
          </div>
      </header>
  )
}

export default StoreHeader