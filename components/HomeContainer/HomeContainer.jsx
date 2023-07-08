"use client";
import React, { useState } from 'react'
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel'
import MemeBuildContainer from '@/components/MemeBuildContainer/MemeBuildContainer'

export default function HomeContainer({ memeData }) {
    const [selectedMeme, setSelectedMeme] = useState([])

    return (
        <div>
            <ImageCarousel memeData={memeData} onImgClick={setSelectedMeme} />
            {Object.keys(selectedMeme).length > 0 && <MemeBuildContainer selectedMeme={selectedMeme} />}
        </div>
    )
}