import React from 'react'

const CheckoutCard = ({image, name, price, amount}) => {
  return (
    <div className='w-300 md:w-500 flex items-center gap-4 rounded-md border-1 border-gray-500 p-2'>
        <div className='w-100 h-100 border-1 border-gray-500 rounded-md relative'>
            <div className='absolute -top-2 -right-1 w-4 h-4 grid place-items-center rounded-full bg-black dark:bg-white text-white dark:text-black text-xs'>
                {amount}
            </div>
            <img src={image} alt={name} className='w-full h-full' />
        </div>
        <div className='flex flex-col'>
            <p>Item: {name}</p>
            <p>Unit Price: {price}</p>
            <p className='text-sm'>Subtotal: {amount * price}</p>
        </div>
    </div>
  )
}

export default CheckoutCard