import React from 'react'
import { motion } from 'framer-motion'

import logo from '../assets/images/vme-new-2.jpeg'

const initial = {scale: 0.9}
const animate = {scale: [1, 0.9, 1],transition: {duration: 2, ease: 'easeInOut', repeat: Infinity}}
const transition = {default: {duration: 2, ease: [0, 0.71, 0.2, 1.01]}}
const scale = {type: 'spring',repeat: Infinity, stiffness: 100,dumping: 5,restDelta: 0.001}
// const 

const LazyLoader = () => {
  return (
    <div className='w-screen h-screen absolute top-0 left-0'>
      <motion.div className='w-full h-full grid place-items-center bg-black'>
        <div className='rounded-full border-2 border-primary spin'>
          <motion.div initial={initial} animate={animate} transition={{default: transition, scale: scale}} className='w-200 md:w-300 h-200 md:h-300 rounded-full border-1 border-white m-8'>
            <img src={logo} alt="victoria manny empire logo vriant 3" className='w-full h-full object-contain rounded-full' />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default LazyLoader