import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button'
import ImageList from '@mui/material/ImageList'

function ImageCarousel({ memeData, onImgClick }) {
  const [memeIndex, setMemeIndex] = useState(0)
  const chunkSize = 20

  // Display chunkSize number of memes at a time
  const meme = memeData.slice(memeIndex, memeIndex + chunkSize).map((meme) => {
    return (
      <Image
        key={meme.id}
        src={meme.url}
        alt={meme.name}
        width={100}
        height={100}
        style={{ margin: '1em' }}
        onClick={() => {
          onImgClick(meme)
        }}
      />
    )
  })

  // Handle next button, increment memeIndex by chunkSize, return to beginning if at end of array
  function handleNext() {
    setMemeIndex((memeIndex) =>
      memeIndex < memeData.length - chunkSize ? memeIndex + chunkSize : 0
    )
  }

  //Handle previous button, decrement memeIndex by chunkSize, return to end if at beginning of array
  function handlePrevious() {
    setMemeIndex((memeIndex) => (memeIndex > 0 ? memeIndex - chunkSize : 0))
  }

  return (
    <div className='carousel-container'>
      <h2 style={{ margin: '.3em', fontSize: '3em' }}>Pick an Image</h2>
      <div className='carousel-image-container'>{meme}</div>
      <div className='carousel-button-container'>
        {memeIndex > 0 && (
          <Button
            variant='outlined'
            style={{ margin: '.5em' }}
            onClick={handlePrevious}
          >
            Previous {chunkSize}
          </Button>
        )}

        {memeIndex < memeData.length - chunkSize ? (
          <Button
            variant='contained'
            className='next-button'
            onClick={handleNext}
          >
            Next {chunkSize}
          </Button>
        ) : (
          <Button
            variant='contained'
            classname='first-button'
            onClick={handleNext}
          >
            Back to first
          </Button>
        )}
      </div>
    </div>
  )
}

export default ImageCarousel
