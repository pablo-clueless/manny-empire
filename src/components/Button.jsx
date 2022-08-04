import React from 'react'

const Button = ({type, label, onClick}) => {
  return (
    <button type={type} onClick={onClick} className='w-100 h-11 px-4 py-2 bg-black dark:bg-white text-primary grid place-items-center hover:translate-x-1 transition-all duration-300 ease-in-out'>
      {label}
    </button>
  )
}

export default Button