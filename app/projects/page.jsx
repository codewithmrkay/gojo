"use client"
import NightSky from '@/components/NightSky'
import ProjectPage from '@/components/ProjectPage'
import React from 'react'

const Project = () => {
  return (
    <div className='bg-[#030841]'>
      <NightSky>
        <div className='flex flex-col items-center w-full font-gojo'>
          <ProjectPage />
        </div>
      </NightSky>
    </div>
  )
}

export default Project