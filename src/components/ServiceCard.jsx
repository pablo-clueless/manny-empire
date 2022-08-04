import React from 'react'

const ServiceCard = ({image, title, description}) => {
  return (
    <div className='w-300 h-200 flex flex-col bg-white dark:bg-slate-800 gap-4 p-4 shadow-md hover:scale-95 transition-all duration-200 cursor-pointer'>
        <div className='w-full flex items-baseline gap-2'>
          <div className='w-8 h-8'>
            <img src={image} alt="" className='w-full h-full object-contain' />
          </div>
          <p className='text-lg text-black dark:text-white'>{title}</p>
        </div>
        <div className='w-full p-2'>
            <p className='text-gray-500'>{description}</p>
        </div>
    </div>
  )
}

export default ServiceCard