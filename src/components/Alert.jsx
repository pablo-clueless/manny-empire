import React from 'react'
import { HiX } from 'react-icons/hi'

const Alert = ({type, message, onClose}) => {

    if(type === 'success') {
        return (
            <div className='min-w-200 flex items-center gap-4 bg-green-200 text-green-600 border-1 border-green-600 text-center p-2 rounded-md fixed top-8 alert'>
                <p>{message}</p>
                <HiX className='cursor-pointer' onClick={onClose}/>
            </div>
        )
    }

    if(type === 'error') {
        return (
            <div className='min-w-200 flex items-center gap-4 bg-red-200 text-red-600 border-1 border-red-600 text-center p-2 rounded-md fixed top-8 alert'>
                <p>{message}</p>
                <HiX className='cursor-pointer' onClick={onClose}/>
            </div>
        )
    }

    if(type === 'warning') {
        return (
            <div className='min-w-200 flex items-center gap-4 bg-orange-200 text-orange-600 border-1 border-orange-600 text-center p-2 rounded-md fixed top-8 alert'>
                <p>{message}</p>
                <HiX className='cursor-pointer' onClick={onClose}/>
            </div>
        )
    }

  return (
    <div className='min-w-200 flex items-center gap-4 bg-blue-200 text-blue-600 border-1 border-blue-600 text-center p-2 rounded-md fixed top-8 alert'>
        <p>{message}</p>
        <HiX className='cursor-pointer' onClick={onClose}/>
    </div>
  )
}

export default Alert