import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { SHOWCASE } from '../assets'

const initial = {y: -100,opacity: 0}
const animate = {y: 0, opacity: 1,transition: {duration: 2,ease: 'easeInOut' }}

const Catalogue = () => {
  return (
    <div id='catalogue' className='w-full h-auto'>
      <div className='w-full grid place-items-center text-center p-4'>
        <motion.p initial={initial} whileInView={animate} className='text-3xl uppercase my-2 outline-text'>
          an inside look into our inspirations.
        </motion.p>

        <div className='flex flex-wrap items-center justify-center gap-6 mt-8 mb-12'>
          {SHOWCASE.map((item) => (
            <div key={item.id} className='w-200 h-300 scale-95 hover:scale-100 opacity-75 hover:opacity-100 transition-all duration-500 ease-in-out border-1 border-gray-500'>
              <img src={item.image} alt='showcase' className='w-full h-full object-cover' />
            </div>
          ))}
        </div>
        <Link to='/catalogue' className='px-4 py-2 bg-black dark:bg-white text-white dark:text-black border-1 border-transparent'>
          Shop 4k
        </Link>
      </div>
    </div>
  )
}

export default Catalogue