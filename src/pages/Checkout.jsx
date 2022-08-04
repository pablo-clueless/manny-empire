import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CheckoutCard, Footer } from '../components'

const Checkout = () => {
  const { isSelected, total } =  useSelector(store => store.cart)

  return (
    <div className='w-full bg-white dark:bg-black text-black dark:text-white'>
      <div className='w-full h-full grid place-items-center p-4 mb-8'>
        <p className='text-4xl uppercase outline-text mb-8'>
          Checkout
        </p>
        <div className='grid place-items-center gap-4'>
          {isSelected.map((item) => (
            <CheckoutCard key={item.id} {...item} />
          ))}
        </div>
        <div className='flex flex-col items-center mt-12'>
          <div className='flex items-center gap-8'>
            <p className='text-lg'>Subtotal: NGN {total}</p>
          </div>
          <div className='flex items-center gap-8'>
            <p className='text-lg'>Shipping: Free</p>
          </div>
          <p className='text-xl mt-4'>
            Total: <span className='text-sm text-gray-500 mr-1'>NGN</span> 
            {total}
            </p>
        </div>

        <div className='mt-4'>
          <button type='button' className='px-4 py-2 bg-black dark:bg-white text-white dark:text-black border-1 border-transparent'>
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout