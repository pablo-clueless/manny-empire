import React from 'react'

const initial = {y: -100}
const animate = {y: 0,transition: {duration: 1,ease: 'easeInOut' }}

const Header = () => {
  return (
    <div className='w-full min-h-screen text-black dark:text-white relative'>
      <div className='grid place-items-center w-full h-full absolute top-0 left-0 bg-image-1 bg-no-repeat bg-cover bg-center'>
        <p className='text-white text-center text-4xl'>
          Victoria Manny Empire
        </p>
        <p className='text-6xl md:text-8xl font-bold text-center text-white uppercase'>
          fashion <br /> changing <br /> always
        </p>
      </div>
    </div>
  )
}

export default Header