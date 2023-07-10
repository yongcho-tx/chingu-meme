'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Sketch from "react-p5";
import dynamic from 'next/dynamic'


function Canvas({ selectedMeme, caption }) {
  // Will only import `react-p5` on client-side
  const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
      ssr: false,
    })
  

    let img;
    const preload = (p5) => {
      img = p5.loadImage(selectedMeme.url);
    }
  
  let m= true
  

    const setup = (p5, canvasParentRef) => {
      const cnv = p5.createCanvas(300, 300).parent(canvasParentRef);
      const btn = p5.createButton('save image');
      btn.position(10, 310);
      cnv.mousePressed((event) => {
        console.log("Clicked on the canvas. Event:", event)
        // saveDrawing()
      })
      

      // p5.noLoop();
    };
  
    const draw = (p5) => {
      // p5.background(0);
      p5.image(img, 0, 0, 300, 300);
      p5.redraw()
     
      p5.textSize(32);
      p5.fill(255);
      p5.textAlign(p5.LEFT, p5.TOP);
      p5.text(caption.topCaption,0,0,300,300)
  
      p5.textSize(32);
      p5.textAlign(p5.LEFT, p5.BOTTOM);
      p5.fill(255);
      p5.text(caption.bottomCaption, 0, 300)
  if (m===true){
      p5.save('Img1a.png');
      m=false
  }

    };
    function saveDrawing(p5) {
      p5.save("Picture.png");
    }


    return (
  
<Sketch preload={preload} setup={setup} draw={draw} />

  )
}

export default Canvas