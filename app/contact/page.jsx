import ContactPage from '@/components/ContactPage'
import NightSky from '@/components/NightSky'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#030841]'>
      <div className='bg-[#030841]'>
        <NightSky>
          <div className='px-2 flex flex-col items-center w-full font-gojo'>
            <ContactPage />
          </div>
        </NightSky>
      </div>
    </div>
  )
}

export default page