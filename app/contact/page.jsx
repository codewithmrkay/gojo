import Navbar from '@/components/Navbar'
import NightSky from '@/components/NightSky'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
        <div className='bg-[#030841]'>
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
        </div>
      </NightSky>
    </div>
  )
}

export default page