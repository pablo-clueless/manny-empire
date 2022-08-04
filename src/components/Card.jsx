import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi'

import { addToFavorite, removeFromFavorite, addToCart, increaseItem } from '../store/slices/cart-slice'

const Card = ({id, image, name, description, price, category, tags, amount}) => {
  const dispatch = useDispatch()
  const { isFavorite } = useSelector(state => state.cart)

  const isItemFavorite = isFavorite.find(item => item === id)

  return (
    <div title={`Product ${name}`} className='w-300 min-h-400 flex flex-col items-center bg-white dark:bg-black text-black dark:text-white scale-95 hover:scale-100 opacity-75 hover:opacity-100 hover:drop-shadow-xl transition-all duration-500 cursor-pointer'>
      <div className='w-full h-250'>
        <img src={image} alt={name} className='w-full h-full object-cover object-top' />
      </div>
      <div className='w-full flex flex-col items-start p-1'>
        <p className='text-lg'>{name}</p>
        <p className='text-sm text-left'>{description.substring(0, 100)}</p>
        <div className='w-full flex items-center justify-between'>
          <p className='font-semiboldbold'>NGN {price}</p>
          <p className='font-semiboldbold'>{category}</p>
        </div>
        <p className='text-xs font-semibold flex items-center gap-2'>
          {tags.map((tag, index) => (
            <span key={index}>
              {tag}
            </span>
          ))}
        </p>
      </div>
      <div className='w-full flex items-center justify-between px-4 py-1'>
        <div className='flex items-center gap-2'>
          <button type='button' onClick={() => {dispatch(addToCart(id));dispatch(increaseItem(id))}} className='text-black dark:text-white text-2xl'>
            <HiOutlineShoppingCart />
          </button>
        </div>
        {isItemFavorite ? (
          <button title='Remove from favorite' onClick={() => dispatch(removeFromFavorite(id))}>
            <HiOutlineHeart className='text-2xl' fill='red' />
          </button>
        ) : (
          <button title='Add to favorite' onClick={() => dispatch(addToFavorite(id))}>
            <HiOutlineHeart className='text-2xl' fill='white' />
          </button>
        )}
    </div>
    </div>
  )
}

export default Card