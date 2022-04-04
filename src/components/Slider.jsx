import React from 'react'

// import { WeddingData } from '../../wedding-data'
import { Data } from '../../data'
import '../styles/Slider.css'


const Slider = () => {
  return (
    <div className='slider-container'>
        <h3>High Class Wedding Gowns</h3>
        <div className='slider'>
        {Data.map((slide, i) => (
          <img src={slide.image} alt={slide.alt} key={i} />
        ))}
        </div>
    </div>
  )
}

export default Slider