"use client";
import React, { useState } from 'react'
import ImageCarousel from '@/components/ImageCarousel'
import MemeBuildContainer from '@/components/MemeBuildContainer'

export default function HomeContainer({ memeData }) {
    const [selectedMeme, setSelectedMeme] = useState([])

    return (
        <div>
            <ImageCarousel memeData={memeData} onImgClick={setSelectedMeme} />
            {Object.keys(selectedMeme).length > 0 && <MemeBuildContainer selectedMeme={selectedMeme} />}
        </div>
    )
}