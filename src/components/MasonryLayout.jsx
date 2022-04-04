import React from 'react'
import Masonry from 'react-masonry-css'

import Image from './Image'
import '../styles/MasonryLayout.css'

const breakpointObj = {
    default: 5,
    3600: 5,
    1575: 3,
    1200: 3,
    1000: 2,
    645: 2
}

const MasonryLayout = ({ images }) => {
  return (
    <Masonry className='masonry' breakpointCols={breakpointObj}>
        {images?.map((item, i) => <Image key={i} src={item.image} alt={item.alt} />)}
    </Masonry>
  )
}

export default MasonryLayout