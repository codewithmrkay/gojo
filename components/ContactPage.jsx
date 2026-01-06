"use client"
import React from 'react'
import Image from 'next/image'
import { soundManager } from '@/lib/sound/SoundManager'
import { ContactList2 } from './ContactList2'

const ContactPage = () => {

  return (
    <div className='relative flex flex-col items-start justify-center md:justify-start w-full max-w-5xl mt-5 md:mb-35 min-h-screen text-white'>
      <div
        // onMouseEnter={() => soundManager.playHoverLoop('campfire')}
        // onMouseLeave={() => soundManager.stopHoverLoop('campfire')}
        className="absolute top-0 aspect-4/3 w-full max-w-5xl mask-x-from-90% mask-x-to-99% mask-y-from-90% mask-y-to-99% group shrink-0 overflow-hidden transition-transform duration-300 ease-out z-0"
      >
        {/* DARK (default) */}
        <Image
          src="/images/contactdark.webp" alt="hero dark" fill priority className=" object-cover object-center transition-opacity duration-150 group-hover:opacity-0 "
        />

        {/* LIGHT (hover) */}
        <Image
          src="/images/contactlight.webp" alt="hero light" priority fill className=" object-cover object-center opacity-100 md:opacity-0 transition-opacity duration-150 group-hover:opacity-100 "
        />
      </div>
      <div className='absolute bg-transparent w-full h-80'>

      </div>
      <div className='relative mt-5 z-10 flex flex-col items-start gap-2 md:gap-4'>
        {/* aboutpage hero img + text */}
        <div className='w-full mt-5 text-white'>
          <h1 className='text-2xl md:text-3xl'>Stay Connected</h1>
        </div>
        <div className='w-full mt-5 text-white'>
          <div className='flex items-center justify-start'>
            <ul className="flex flex-col gap-2.5 md:gap-4">
              <ContactList2
                items={[
                  { type: "youtube", label: "YouTube", href: "https://www.youtube.com/@Code_Gully" },
                  { type: "linkedin", label: "LinkedIn", href: "www.linkedin.com/in/karan-kadam-777621366" },
                  { type: "instagram", label: "Instagram", href: "https://www.instagram.com/ig_kk.dev" },
                  { type: "github", label: "GitHub", href: "https://github.com/codewithmrkay" },
                  { type: "mail", label: "Email", href: "mailto:kkadam58707@gmail.com" },
                ]}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage