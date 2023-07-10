'use client'

import React, { useState } from 'react'
import Image from 'next/image'
// import dynamic from 'next/dynamic'
import Canvas from './Canvas'

//https://creative-coding.decontextualize.com/text-and-type/

function MemeBuildContainer({ selectedMeme }) {
  // Will only import `react-p5` on client-side
  // const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  //   ssr: false,
  // })
  console.log(selectedMeme)
  const [caption, setCaption] = useState({ topCaption: '', bottomCaption: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCaption({ ...caption, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // setCaption(e.target.value)
  }






  return (
    <div>
      <h2>MemeBuildContainer</h2>
      <p> This would contain the form and image canvas</p>
      <div className='memeimage-container'>
<Canvas selectedMeme={selectedMeme} caption={caption} />
        {/* 
        <h2 className='top-caption'>{caption.topCaption}</h2>
        <h2 className='bottom-caption'>{caption.bottomCaption}</h2> */}
      </div>
      <form className='caption-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='topCaption'
          placeholder='Top Caption'
          value={caption.topCaption}
          onChange={handleChange}
        />
        <input
          type='text'
          name='bottomCaption'
          placeholder='Bottom Caption'
          value={caption.bottomCaption}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default MemeBuildContainer
