import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { HiOutlineShoppingBag } from 'react-icons/hi'

import { CATALOGUE } from '../assets'
import { Footer } from '../components'
import { increaseItem, decreaseItem } from '../store/slices/cart-slice'
import { HiStar } from 'react-icons/hi'

// const initialState = {}
const variants = ['#DFE1E3', '#E8EAEC', '#7B3D1F']

const Product = () => {
  // const [itemDto, setItemDto] = useState()
  // const [itemSize, setItemSize] = useState('S')
  const id = useParams().id
  const product = CATALOGUE.find(item => item.id === id)
  const dispatch = useDispatch()

  return (
    <div className='w-full grid place-items-center'>
      <div className='w-full flex flex-col md:flex-row items-center bg-white dark:bg-black'>
        <div className='w-full h-auto md:h-full md:w-1/2'>
          <div className=''>
            <img src={product.image} alt={product.name} className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='w-full h-auto md:h-full md:w-1/2'>
          <div className='w-full flex flex-col px-8 py-4 text-black dark:text-white'>
            <p className='text-3xl md:text-4xl font-bold py-4'>{product.name}</p>
            <p className='text-xl'>{product.description}</p>
            <div className='flex flex-col gap-4 mt-4'>
              <p className='text-2xl font-semibold'>NGN {product.price}</p>
              <p>Category: {product.category}</p>
              <div className='flex items-center'>
                Tags:
                {product.tags.map((tag) => (
                  <p key={tag} className='mx-2'>{tag}</p>
                ))}
              </div>
            </div>
            <div className='w-full md:w-1/2 flex items-center gap-4 mt-4'>
              <p>Size:</p>
                {product.sizes.map((size) => (
                  <div key={size} className='flex items-center gap-1'>
                    <input type='radio' name='size' value={size} className='cursor-pointer' />
                    <label htmlFor={size}>{size}</label>
                  </div>
                ))}
            </div>
            <div className='flex flex-col items-start md:flex-row gap-4 mt-8'>
              <button className='flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black border-1 border-transparent' onClick={() => dispatch(increaseItem(product.id))}>
                <HiOutlineShoppingBag />Add to Cart
              </button>             
              <button className='flex items-center gap-2 px-4 py-2 bg-white dark:bg-black text-black dark:text-white border-1 border-black dark:border-white'>
                Proceed to purchase &rarr;
              </button>
            </div>
            <div className='flex flex-col gap-4 mt-8'>
              <div className='flex items-center justify-between'>
                <p>Product details</p>
                <div className='flex items-center gap-2'>
                  {variants.map((variant, index) => (
                    <div key={index} className='w-3 h-3 rounded-full' style={{background: variant}} />
                  ))}
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p>Review</p>
                <div className='flex items-center'>
                  {product.rating}<HiStar fill='#E3A008' />
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p>Delivery Info</p>
                <p>Free delivery within Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product