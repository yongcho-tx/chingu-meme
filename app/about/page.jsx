'use client'

import React from 'react'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import dianaImg from '@/public/assets/images/diana_jordan.svg'
import yongImg from '@/public/assets/images/yong_cho.svg'
import Mui from '@/public/assets/icons/mui.png'
import Github from '@/public/assets/icons/github.png'
import JS from '@/public/assets/icons/javascript.png'
import NextJs from '@/public/assets/icons/nextjs.png'
import P5Js from '@/public/assets/icons/p5js.png'
import Link from 'next/link'

const About = () => {
  return (
    <div className='about-container'>
      <Typography
        variant='h2'
        gutterBottom
        sx={{
          margin: '1em 1em',
          textAlign: 'center',
        }}
      >
        Meet Chingu Peer Coding Pair
      </Typography>
      <Typography
        variant='h5'
        gutterBottom
        sx={{
          display: 'flex',
          textAlign: 'center',
          letterSpacing: '.3rem',
          color: 'inherit',
          margin: '2em 1em',
        }}
      >
        A pair of developers met at Chingu, a community for developers and
        designers to collaborate and gain real experience
      </Typography>
      <div className='about-image-container'>
        <div className='about-developer-container'>
          <Link
            href='https://www.linkedin.com/in/diana-c-jordan/'
            target='_blank'
          >
            <Image
              src={dianaImg}
              width={240}
              height={240}
              style={{ marginBottom: '1em', borderRadius: '1em' }}
              alt='diana-image'
            />
          </Link>
          <div>
            <p>
              Meet Diana, a recent Flatiron grad!: Embracing casual learning
              oportunities can lead to unexpected journeys: learning a third
              language (Korean), taiko drumming, salsa dancing, and even a
              career change into Full-Stack software engineering!
            </p>
          </div>
        </div>
        <div className='about-developer-container'>
          <Link
            href='https://www.linkedin.com/in/yong-cho-dev/'
            target='_blank'
          >
            <Image
              src={yongImg}
              width={240}
              height={240}
              style={{ marginBottom: '1em', borderRadius: '1em' }}
              alt='yong-image'
            />
          </Link>
          <p>
            Meet Yong, who enjoys making useful apps, fun apps, and learning
            something new.
          </p>
        </div>
      </div>
      <Typography variant='h4'>Tech Stack</Typography>
      <div className='techstack-icon-container'>
        <div className='icon-wrapper'>
          <Image src={NextJs} alt='nextJs' link />
          <p>Next Js</p>
        </div>
        <div className='icon-wrapper'>
          <Image src={JS} alt='javascript' />
          <p>JavaScript</p>
        </div>
        <div className='icon-wrapper'>
          <Image src={Mui} alt='mui' />
          <p>Mui</p>
        </div>
        <div className='icon-wrapper'>
          <Image src={Github} alt='github' />
          <p>Github</p>
        </div>
        <div className='icon-wrapper'>
          <Image src={P5Js} alt='p5js' />
          <p>P5Js</p>
        </div>
      </div>
    </div>
  )
}

export default About
