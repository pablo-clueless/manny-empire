import React, { useState } from 'react'
import { FiDownloadCloud } from 'react-icons/fi'

import '../styles/Image.css'

const Image = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className='image_container' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
        <img src={src} alt={alt} />
        {hovered && (
          <a href={src} download className='action'>
            <FiDownloadCloud />
          </a>
        )}
    </div>
  )
}

export default Image