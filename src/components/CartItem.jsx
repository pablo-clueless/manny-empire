import React from 'react'
import { useDispatch } from 'react-redux'

import { increaseItem, decreaseItem, removeItem } from '../store/slices/cart-slice'

const CartItem = ({id, image, name, price, amount}) => {
  const dispatch = useDispatch()

  return (
    <div className='w-full border-1 border-black'>
      <div className='w-full h-100'>
        <img src={image} alt={name} className='h-full w-full object-cover object-top' />
      </div>
      <div className='w-full flex items-center justify-between px-2 mt-1'>
        <p className='text-sm'>{name}</p>
        <p className='text-sm'>NGN {price}</p>
      </div>
      
      <div className='flex items-center'>
        <button onClick={() => {
          if(amount <= 1) return dispatch(removeItem(id));dispatch(decreaseItem(id))}} className='w-1/3 bg-gray-400'>
          -
        </button>
        <p className='w-1/3 text-center inset-5'>{amount}</p>
        <button onClick={() => dispatch(increaseItem(id))} className='w-1/3 bg-gray-400'>
          +
        </button>
      </div>
    </div>
  )
}

export default CartItem