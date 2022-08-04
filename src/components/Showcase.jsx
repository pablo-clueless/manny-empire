import React from 'react'
import { motion } from 'framer-motion'

import image from '../assets/images/trans-1.png'

const initial = {x: '-100%',opacity: 0}
const animate = {x: 0, opacity: 1, transition: {duration: 2,ease: 'easeInOut' }}
const initialDiv = {x: '200%',opacity: 0}
const animateDiv = {x: 0, opacity: 1, transition: {duration: 2,ease: 'easeInOut' }}

const Showcase = () => {
  return (
    <div className='w-full h-auto my-4'>
      <div className='grid place-items-center p-4 text-center'>
        <motion.p initial={initial} whileInView={animate} className='text-3xl uppercase my-2 outline-text'>
          why we are here
        </motion.p>
        <div className='flex flex-col md:flex-row gap-4 my-0 md:my-8'>
          <div className='flex flex-col text-left py-4 text-black dark:text-white'>
            <p className='text-4xl mt-4 mb-8'>
              It's all about high standards.
            </p>
            <p className='text-2xl my-4'>
              At Victoria Manny Empire, we focus on bringing out the elegance in you. We believe fashion is an accessory for someone with great style. Let's work on that style and bring out the beauty in you.
            </p>
            <p className='text-lg text-right'>
              - 💛 Victoria Manny
            </p>
          </div>
          <div className='p-8 grid place-items-center'>
            <motion.div initial={initialDiv} animate={animateDiv} className='w-200 h-300 relative bg-gray-500 z-10 before:-z-20 before:absolute before:-top-2 before:-right-8 before:w-full before:h-full before:bg-transparent before:border-1 before:border-gray-500'>
              <img src={image} alt="" className='w-full h-full object-contain' />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase