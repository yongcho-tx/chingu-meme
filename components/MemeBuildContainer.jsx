'use client'

import React, { useState } from 'react'
import Image from 'next/image'

function MemeBuildContainer({ selectedMeme }) {
  console.log(selectedMeme)
  const [caption, setCaption] = useState({ topCaption: '', bottomCaption: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCaption({ ...caption, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCaption(e.target.value)
  }
  return (
    <div>
      <h2>MemeBuildContainer</h2>
      <p> This would contain the form and image canvas</p>
      <div className='memeimage-container'>
        <Image
          src={selectedMeme.url}
          alt={selectedMeme.name}
          width={300}
          height={300}
          style={{ marginBottom: '2em' }}
        />
        <h2 className='top-caption'>{caption.topCaption}</h2>
        <h2 className='bottom-caption'>{caption.bottomCaption}</h2>
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
      </form>
    </div>
  )
}

export default MemeBuildContainer
