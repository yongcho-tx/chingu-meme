"use client";
import React, { useState, useEffect } from 'react'

import styles from './page.module.css'
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel'
import MemeBuildContainer from '@/components/MemeBuildContainer/MemeBuildContainer';


export default function Home() {
  const [memeData, setMemeData] = useState([])
  const [selectedMeme, setSelectedMeme] = useState([])

  useEffect(() => {
    async function fetchData() {
      const raw = await fetch("https://api.imgflip.com/get_memes")
      const data = await raw.json()
      setMemeData(data.data.memes)
    }
    fetchData()
  }, [])

  

  const handleImgClick = (meme) => {
    setSelectedMeme(meme)
  }
if (Object.keys(memeData).length===0) { return <div>Loading...</div> }

  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      {Object.keys(memeData).length > 0 &&  <ImageCarousel memeData={memeData} onImgClick={handleImgClick} /> }
      {Object.keys(selectedMeme).length > 0 && <MemeBuildContainer selectedMeme={selectedMeme} />}
    </main>
  )
}
