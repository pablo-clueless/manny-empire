import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiInstagram, FiFacebook } from 'react-icons/fi'

import '../styles/NavBar.css'

const NavBar = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

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

        <div className={clicked ? 'menu-button close': 'menu-button'} onClick={handleClick}>
            <div className="button-lines"></div>
            <div className="button-lines"></div>
            <div className="button-lines"></div>
        </div>
        <div className={clicked ? 'menu show' : 'menu'} onClick={() => setClicked(!clicked)} >
                <nav>
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

                    <div className='group'>
                        <a href='https://instagram.com/victoriamanny_empire' target='_blank' rel='noreferrer noopener' >
                            <FiInstagram />
                        </a>
                        <a href='' target='_blank' rel='noreferrer noopener' >
                            <FiFacebook />
                        </a>
                    </div>
                </nav>
        </div>
    </nav>
  )
}

export default NavBar