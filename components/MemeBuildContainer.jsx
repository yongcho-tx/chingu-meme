'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Canvas from './Canvas'

function MemeBuildContainer({ selectedMeme }) {
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
