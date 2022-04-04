import React from 'react'
import { FiInstagram, FiFacebook, FiPhone } from 'react-icons/fi'

import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='grid'>
            <img src="/vm_logo.png" alt="" />

            <div className='grid_'>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>
                        <a href='https://instagram.com/victoriamanny_empire' target='_blank' rel='noreferrer noopener' >
                            <FiInstagram />
                        </a>
                    </li>
                    <li>
                        <a href='' target='_blank' rel='noreferrer noopener' >
                            <FiFacebook />
                        </a>
                    </li>
                    <li>
                        <a href='tel:+2347014090495' >
                            <FiPhone />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <p>&copy;Copyright 2022. Victoria Manny Empire. All rights reserved.</p>
    </footer>
  )
}

export default Footer