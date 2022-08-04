import React from 'react'

const IconButton = ({icon, onClick, title, to, count}) => {
  if(to) {
    return (
      <a href={to} target='_blank' rel='noreferrer noopener' title={title} className='rounded-full p-2 text-black dark:text-white hover:drop-shadow-lg transition-all duration-300'>
        {icon}
      </a>
    )
  }
  return (
    <button title={title} onClick={onClick} className='rounded-full p-2 text-black dark:text-white hover:drop-shadow-lg transition-all duration-300  relative'>
      {count <= 0 ? 
      (<span></span>) :
      <span className='text-black dark:text-white absolute top-0 right-0 text-xs'>
        {count}
      </span>}
      {icon}
    </button>
  )
}

export default IconButton