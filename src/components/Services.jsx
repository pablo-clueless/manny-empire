import React from 'react'
import { motion } from 'framer-motion'

import { SERVICES } from '../assets/data'
import { ServiceCard } from './'

const initial = {y: -100,opacity: 0}
const animate = {y: 0, opacity: 1,transition: {duration: 2,ease: 'easeInOut' }}

const Services = () => {
  return (
    <div className='w-full h-auto'>
      <div className='w-full grid place-items-center text-center p-4'>
        <motion.p initial={initial} whileInView={animate} className='text-3xl uppercase my-2 outline-text'>
          we are best in
        </motion.p>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4 my-4'>
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  )
}

export default Services