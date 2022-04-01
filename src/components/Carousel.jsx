import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'

import { Data } from '../../data'
import '../styles/Carousel.css'

const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const length = Data.length
  
    const next = () => {
     setCurrent(current === length - 1 ? 0 : current + 1)
    }
  
    const prev = () => {
     setCurrent(current === 0 ? length - 1: current - 1)
    }
    return(
      <div className='carousel'>
        <button className='left-button' onClick={prev}>
            <FiArrowLeftCircle />
        </button>
        <button className='right-button' onClick={next}>
            <FiArrowRightCircle />
        </button>
         {Data.map((slide, index) => {
                  return(
                      <div  className={index === current ? 'slide active' : 'slide'} key={index}>
                          {index === current && (<img src={slide.image} key={index} alt={slide.alt}/>)}
                      </div>
                  )
              })}
      </div>
    )
}

export default Carousel