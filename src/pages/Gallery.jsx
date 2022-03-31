import React from 'react'
import MasonryLayout from '../components/MasonryLayout'

import NavBar from '../components/NavBar'
import{ MasonryData } from '../../masonry-data'

const Gallery = () => {
  return (
    <>
    <NavBar />
    <MasonryLayout images={MasonryData} />
    </>
  )
}

export default Gallery