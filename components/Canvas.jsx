'use client'

import React, { useState } from 'react'
import Image from 'next/image'
// import Sketch from "react-p5";
import dynamic from 'next/dynamic'

// https://therohanbhatia.com/blog/star-wars-intro-generator-react-p5/
//https://creative-coding.decontextualize.com/text-and-type/


function Canvas({ selectedMeme, caption, userSave, setUserSave }) {
  // Will only import `react-p5` on client-side
  const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  })

  const canvasHeight = 300
  const canvasWidth = 300

  let img;
  const preload = (p5) => {
    img = p5.loadImage(selectedMeme.url);
  }


  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.noLoop();
  };

  const draw = (p5) => {
    // p5.background(0);
    p5.image(img, 0, 0, canvasWidth, canvasHeight);
    p5.redraw()
    p5.strokeWeight(2)

    let topFontSize = 32
    p5.textSize(topFontSize);
    p5.textAlign(p5.LEFT, p5.TOP);
    p5.fill(255);
    p5.stroke(51)
    p5.textLeading(topFontSize)
    p5.text(caption.topCaption, 2, 2, canvasWidth-4, canvasHeight)

    let bottomFontSize = 32
    p5.textSize(bottomFontSize);
    p5.textAlign(p5.LEFT, p5.BOTTOM);
    p5.fill(255);
    p5.stroke(51)
    p5.textLeading(bottomFontSize)
    let bottomWidth = p5.textWidth(caption.bottomCaption)
    let bottomPosition
    if (bottomWidth > 300) {
      const adjustPos = Math.ceil((bottomWidth -canvasWidth)/ canvasWidth) * bottomFontSize
      console.log(bottomWidth , adjustPos)
      bottomPosition = canvasHeight - adjustPos - 2
    } else {
      bottomPosition = canvasHeight - 2
    }
    p5.text(caption.bottomCaption, 2, bottomPosition, canvasWidth-4)

    if (userSave === true) {
      p5.save('meme.png');
      setUserSave(false)
    }
  };

  return (
    <Sketch preload={preload} setup={setup} draw={draw} />
  )
}

export default Canvas
