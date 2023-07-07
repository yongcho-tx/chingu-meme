// "use client";

import React, { useState } from 'react'
import Image from 'next/image'


function ImageCarousel({ memeData , onImgClick}) {
  const [memeIndex, setMemeIndex] = useState(0)
  const chunkSize = 20;

  // Display chunkSize number of memes at a time
  const meme = memeData
    .slice(memeIndex, memeIndex + chunkSize)
    .map((meme) =>
    (<Image
      key={meme.id}
      src={meme.url}
      alt={meme.name}
      width={100}
      height={100}
      style={{ margin: '1em' }}
      onClick={() => {onImgClick(meme)}}
    />)
    )

  // Handle next button, increment memeIndex by chunkSize, return to beginning if at end of array
  function handleNext() {
    setMemeIndex((memeIndex) => (memeIndex < memeData.length - chunkSize ? memeIndex + chunkSize : 0))
  }

  return (
    <div>
      <h2>Pick an Image</h2> 
      {meme}
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default ImageCarousel