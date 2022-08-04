import React from 'react'
import { FiFacebook, FiInstagram, FiPhone } from 'react-icons/fi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5'

import { useContextProvider } from '../contexts/ContextProvider'
import { IconButton } from './'
import logo from '../assets/images/vme_light.png'
import darklogo from '../assets/images/vme_dark.png'

const Footer = () => {
  const { currentMode } = useContextProvider()

  return (
    <div className='w-full px-4 pt-2'>
      <div className='grid place-items-center mt-4 mb-8'>
        <div className='w-200 h-200'>
          {currentMode === 'Dark' ? (
            <img src={darklogo} alt='vicky manny logo' className='h-full w-full object-cover' />
          ) : (
            <img src={logo} alt='vicky manny logo' className='h-full w-full object-cover' />
          )}
        </div>
        <div className='flex flex-col items-center my-4 gap-1'>
          <div className='flex items-center gap-2'>
            <IoLocationOutline />
            <p>3, Orisunbare Close, Gbagada Phase 2, Lagos.</p>
          </div>
          <div className='flex items-center gap-2'>
            <FiPhone />
            <p>+2347014090495</p>
          </div>
          <div className='flex items-center gap-2'>
            <IoMailOutline />
            <p>victoriasambo123@gmail.com</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <IconButton title='WhatsApp' to='https://wa.me/2347014090495' icon={<AiOutlineWhatsApp className='text-2xl' />} />
          <IconButton title='Instagram' to='https://instagram.com/victoriamanny_empire' icon={<FiInstagram className='text-2xl' />} />
          <IconButton title='Facebook' to='https;//facebook.com/victoriamannyempire' icon={<FiFacebook className='text-2xl' />} />
        </div>
      </div>
      <div className='w-full p-1 text-center'>
        <p className='text-black dark:text-white'>
          All rights reserved ©{new Date().getFullYear()} VME
        </p>
      </div>
    </div>
  )
}

export default Footer