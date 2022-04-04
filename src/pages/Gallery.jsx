import React from 'react'
import MasonryLayout from '../components/MasonryLayout'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import{ MasonryData } from '../../masonry-data'

const Gallery = () => {
  return (
    <>
    <NavBar />
    <MasonryLayout images={MasonryData} />
    <Footer />
    </>
  )
}

export default Gallery