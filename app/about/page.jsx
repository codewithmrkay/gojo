"use client"
import AboutPage from '@/components/AboutPage'
import NightSky from '@/components/NightSky'
import React from 'react'

const About = () => {
  return (
    <div className='bg-[#030841]'>
      <NightSky>
        <div className='px-2 flex flex-col items-center w-full font-gojo'>
          <AboutPage/>
        </div>
      </NightSky>
    </div>
  )
}

export default About