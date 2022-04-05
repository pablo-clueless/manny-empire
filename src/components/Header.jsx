import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram } from 'react-icons/fi'

import '../styles/Header.css'

const Header = () => {

  return (
    <header className='header'>
      <div className='right'></div>
      <div className='left'>
      </div>
      
      <div className='button'>
        <Link to={'/gallery'}>
          explore our beautiful crafts
        </Link>
      </div>
    </header>
  )
}

export default Header