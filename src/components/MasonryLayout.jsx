import React from 'react'
import Masonry from 'react-masonry-css'

import Image from './Image'
import '../styles/MasonryLayout.css'

const breakpointObj = {
    default: 4,
    3600: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1
}

const MasonryLayout = ({ images }) => {
  return (
    <Masonry className='masonry' breakpointCols={breakpointObj}>
        {images?.map((item, i) => <Image key={i} src={item.image} alt={item.alt} />)}
    </Masonry>
  )
}

export default MasonryLayout