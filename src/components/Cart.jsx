import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { HiX } from 'react-icons/hi'

import { useContextProvider } from '../contexts/ContextProvider'
import { CartItem } from './'
import { clearCart } from '../store/slices/cart-slice'

const Cart = () => {
  const { handleUnclick } = useContextProvider()
  const { isSelected, amount, total } = useSelector(store => store.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-translucent backdrop cart'>
      <div className='float-right w-72 h-full bg-white overflow-y-scroll p-4 cart__inner'>
        <div className='mt-4 w-full flex items-center justify-between border-b-1 border-r-gray-500'>
          <p className='sm:text-2xl text-lg font-bold'>Cart</p>
          <button onClick={() => handleUnclick('cart')} className='rounded-full p-2'>
            <HiX />
          </button>
        </div>
        {amount < 1 ? (
          <div className='h-4/5 grid place-items-center text-center'>
            <div className='flex flex-col items-center gap-4'>
              <p>Your cart is empty</p>
              <Link to='/catalogue' onClick={() => handleUnclick('cart')} className='px-4 py-2 bg-black dark:bg-white text-white dark:text-black border-1 border-transparent'>
                Start Shopping
              </Link>
              </div>
          </div>
        ) : (
          <div className='overflow-y-scroll h-4/5 flex flex-col items-center gap-2 sm:mt-4 mt-2'>
            {isSelected.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        )}
        <div className='flex flex-col items-center sm:mt-4 mt-1'>
          <p className='sm:text-lg text-base'>Total: NGN {total}</p>
          <div className='sm:mt-4 mt-2 flex items-center gap-4'>
            <button disabled={amount < 1} onClick={() => dispatch(clearCart())} className='flex items-center gap-2 px-3 sm:py-2 py-1 bg-red-500 text-white border-1 border-transparent disabled:bg-red-300'>
              Clear Cart
            </button>
            <button disabled={amount < 1} onClick={() => {navigate('/checkout');handleUnclick('cart')}} className='flex items-center gap-2 px-3 sm:py-2 py-1 bg-black text-white border-1 border-black disabled:bg-gray-400 disabled:text-black disabled:border-0'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart