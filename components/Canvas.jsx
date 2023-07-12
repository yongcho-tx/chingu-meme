'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// https://therohanbhatia.com/blog/star-wars-intro-generator-react-p5/
//https://creative-coding.decontextualize.com/text-and-type/


function Canvas({ selectedMeme, caption, userSave, setUserSave }) {

  // Will only import `react-p5` on client-side
  const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  })

  //canvas parameters
  const canvasHeight = 300
  const canvasWidth = 300
  const textAreaMargin = 1
  const textAreaWidth = canvasWidth - (textAreaMargin * 2)

  //import meme image for background
  let img;
  const preload = (p5) => {
    img = p5.loadImage(selectedMeme.url);
  }

  //set up canvas
  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.noLoop();
  };

  //draw canvas content
  const draw = (p5) => {
    p5.image(img, 0, 0, canvasWidth, canvasHeight);
    p5.strokeWeight(2)


    //top text string display
    const topFontSize = 32
    p5.textSize(topFontSize);
    p5.textAlign(p5.LEFT, p5.TOP);
    p5.fill(255);
    p5.stroke(51)
    p5.textLeading(topFontSize)
    const wrappedTopText = wrapText(p5, caption.topCaption)
    p5.text(wrappedTopText, textAreaMargin, textAreaMargin)

    // bottom text string display
    const bottomFontSize = 32
    p5.textSize(bottomFontSize);
    p5.textAlign(p5.LEFT, p5.BOTTOM);
    p5.fill(255);
    p5.stroke(51)
    p5.textLeading(bottomFontSize)
    const wrappedBottomText = wrapText(p5, caption.bottomCaption)
    p5.text(wrappedBottomText, textAreaMargin, canvasHeight)

    if (userSave === true) {
      p5.save('meme.png');
      setUserSave(false)
    }
  };

  //wrap text function
  function wrapText(p5, text) {
    const textWidth = p5.textWidth(text)
    let wrappedText = ''
    if (textWidth > textAreaWidth) {
      for (let i = 0, j = textAreaWidth; i < text.length; i++) {
        const nextTextWidth = p5.textWidth(wrappedText + text[i])
        if (nextTextWidth >= j) {
          if (text[i] === ' ') {
            wrappedText = wrappedText + '\n'
          } else {
            wrappedText = wrappedText + '\n' + text[i]
          }
          j += textAreaWidth
        } else {
          wrappedText = wrappedText + text[i]
        }
      }
    } else {
      wrappedText = text
    }
    return wrappedText
  }


  return (
    <Sketch preload={preload} setup={setup} draw={draw} />
  )
}

export default Canvas
