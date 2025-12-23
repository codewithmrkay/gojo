"use client"
import Navbar from '@/components/Navbar'
import NightSky from '@/components/NightSky'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#030841]'>
      <Navbar/>
      <NightSky>
        <div className='h-fit w-full flex items-center flex-col justify-center '>
          {/* hero bg */}
          <div className="pointer-events-none absolute inset-0 w-full h-[150vh] opacity-30">
            <Image
              src="/images/herobg.webp"
              alt="hero"
              fill
              className="object-cover w-full h-full object-center"
              priority
            />
          </div>
          <div className='pointer-events-auto flex h-screen w-full'>
            <h1 className='text-4xl font-gojo'>hellow bhai</h1>
            <div onClick={() => { console.log("red was clicked") }} className='cursor-pointer pointer-events-auto w-50 h-50 bg-red-800'>

            </div>
          </div>
        </div>
        <div className='h-screen w-full flex items-center justify-center'>
        </div>
        <div className='h-screen w-full flex items-center justify-center'>

        </div>
      </NightSky>
    </div>
  )
}

export default page