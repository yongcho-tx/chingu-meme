import React from 'react'
import Image from 'next/image'

function MemeBuildContainer({ selectedMeme }) {
  console.log(selectedMeme)

  return (

    <div>
      <h2>MemeBuildContainer</h2>
      <p> This would contain the form and image canvas</p>
      <Image
        src={selectedMeme.url}
        alt={selectedMeme.name}
        width={300}
        height={300}
        style={{ marginBottom: '2em' }}
      />
    </div>
  )
}

export default MemeBuildContainer