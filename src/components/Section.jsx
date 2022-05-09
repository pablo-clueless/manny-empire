import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import '../styles/Section.css'

const Section = (props) => {

  return (
    <section className={`section ${props.reverse && 'reverse'}`}>
        <div className='section-image'>
            <img src='/stock_6.jpeg' alt='stock image' />
        </div>
        <div className='section-caption'>
          <span></span>
          <h1>high fashion</h1>
          <span></span>
          <p>At Victoria Manny Empire, we focus on bringing out the elegance in you. We believe fashion is an accessory for someone with great style. Let&apos;s work on that style and bring out the beauty in you.</p>
          <i>- 💛 VME</i>
          <Link to={'/contact'}>
            get in touch
          </Link>
        </div>
    </section>
  )
}

export default Section