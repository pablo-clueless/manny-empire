import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Section.css'

const Section = (props) => {
  return (
    <section className={`section ${props.reverse && 'reverse'}`}>
        <div className='section-image'>
            <img src='/stock_2.jpeg' alt='stock image' />
        </div>
        <div className='section-caption'>
            <h1>elegantly made</h1>
            <span></span>
            <p>At Victoria Manny Empire, we focus on bringing out the elegance in you.</p>
            <a href='tel:+2347014090495'>
                get in touch
            </a>
        </div>
    </section>
  )
}

export default Section