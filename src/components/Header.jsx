import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from './NavBar'
import Carousel from './Carousel'
import Image from './Image'
import '../styles/Header.css'

const Header = () => {

  return (
    <header className='header'>
        <Link to={'/gallery'}>explore our beautiful crafts</Link>
    </header>
  )
}

export default Header