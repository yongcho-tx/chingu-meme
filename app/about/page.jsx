'use client'

import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@/components/Container'

const page = () => {
  return (
    <div>
      <Container />

      <h1>This Memegenerator webpage is created using Next.js with MUI</h1>
      <h2>Tech Stack: </h2>
      <h2>API Source: https://api.imgflip.com/get_memes</h2>
    </div>
  )
}

export default page
