import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav className='nav'>
        <Link to={'/'}>
            <img src="/vm_logo.png" alt="brand logo" />
        </Link>
        

        <h1>Victoria Manny Empire</h1>

        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/gallery'}>Gallery</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar