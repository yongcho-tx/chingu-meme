'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Canvas from './Canvas'

function MemeBuildContainer({ selectedMeme }) {
  const [userSave, setUserSave] = useState(false)
  const [caption, setCaption] = useState({ topCaption: '', bottomCaption: '' })
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setCaption({ ...caption, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserSave(true)
  }

  const handleFormReset = () => {
    setCaption({ topCaption: '', bottomCaption: '' });
  };



  return (
    <div>
      <h2>MemeBuildContainer</h2>
      <div className='memeimage-container'>
        <Canvas selectedMeme={selectedMeme} caption={caption} userSave={userSave} setUserSave={setUserSave} />
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
        <button type='submit'>Download Meme</button>
        <button type="reset"  onClick={handleFormReset}>Clear Text</button>
      </form>
    </div>
  )
}

export default MemeBuildContainer
