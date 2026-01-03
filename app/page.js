"use client"
import { ContactList } from '@/components/ContactList'
import Navbar from '@/components/Navbar'
import NightSky from '@/components/NightSky'
import { PixelBtn } from '@/components/PixelBtn'
import TechStackBtn from '@/components/TechStackBtn'
import { soundManager } from '@/lib/sound/SoundManager'
import { FileUser } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ProjectPage from '@/components/ProjectPage'
import AboutPage from '@/components/AboutPage'

const page = () => {
  return (
    <div className='bg-[#030841]'>
      <NightSky>
        <div className='h-fit w-full flex items-center flex-col justify-center '>
          {/* hero bg */}
          <div className="mask-x-from-90% mask-x-to-99% mask-y-from-90% mask-y-to-99% pointer-events-none absolute top-0 aspect-4/3 w-full max-w-5xl opacity-20">
            <Image
              src="/images/herobgmoon.webp"
              alt="hero"
              fill
              className="object-cover w-full h-full object-center"
              priority
            />
          </div>
          <div className='relative z-0 flex h-full w-full px-2 mt-5 md:mt-10 text-white'>
            <div className=' w-full h-full max-w-5xl mx-auto font-gojo'>
              <div className='flex items-center justify-start gap-2 md:gap-4'>
                {/* hero img + text */}
                <div
                  // onMouseEnter={() => soundManager.play('click')}
                  className='transition-transform duration-300 ease-out shrink-0 w-25 h-25 md:h-40 md:w-40 border-[#3f4178] border-4 bg-[#272575] rounded-xl hover:scale-105'>
                  <Image
                    src="/images/hero.gif"
                    alt="hero"
                    height={300}
                    width={300}
                    className="object-cover w-full h-full object-center"
                    priority
                  />
                </div>
                <div className='flex flex-col self-end'>
                  <h1 className='text-3xl md:text-5xl'>{`Hi, I'm KK`}</h1>
                  <div className="relative w-fit">
                    {/* Shadow text */}
                    <h1 className="absolute top-0.5 md:top-1 left-px sm:left-0.5 text-3xl md:text-5xl text-pink-500 pointer-events-none">
                      A Full Stack Web  Developer. <span className='inline-block'>{" "}</span>
                    </h1>

                    {/* Main text */}
                    <h1 className="relative text-3xl md:text-5xl text-white">
                      A Full Stack Web  Developer. <span className='inline-block'>{" "}</span>
                    </h1>
                  </div>
                </div>
              </div>
              {/* hero text intro */}
              <div className='mt-5'>
                <h1 className='text-xl md:text-2xl font-light'>
                  I build clean, fast, and scalable web applications with
                  <span className='mx-2'>
                    <TechStackBtn url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" name="JavaScript" />
                  </span>
                  ,
                  <span className='mx-2'>
                    <TechStackBtn url="https://react.dev/" name="React.js" />
                  </span>
                  ,
                  <span className='mx-2'>
                    <TechStackBtn url="https://expressjs.com/" name="Express.js" />
                  </span>
                  ,
                  <span className='mx-2'>
                    <TechStackBtn url="https://nodejs.org/" name="Node.js" />
                  </span>
                  and
                  <span className='mx-2'>
                    <TechStackBtn url="https://nextjs.org/" name="Next.js" />
                  </span>
                  — focused on strong UI, real performance, and production-ready code.
                </h1>
              </div>
              {/* go to resume */}
              <div className='mt-5 flex flex-col sm:flex-row items-center justify-start gap-2 md:gap-8'>
                <div>
                  <PixelBtn
                    onClick={() => soundManager.play('whoosh')}
                    className="px-5 text-2xl text-white font-light">
                    <span><FileUser className='w-6 h-6' /></span>
                    Resume/CV
                  </PixelBtn>
                </div>
                <div className='flex items-center justify-center'>
                  <span className='text-5xl font-medium'>{`<`}</span>
                  <ul className="flex gap-2.5 md:gap-4">
                    <ContactList
                      items={[
                        { type: "youtube", label: "YouTube", href: "https://www.youtube.com/@Code_Gully" },
                        { type: "linkedin", label: "LinkedIn", href: "www.linkedin.com/in/karan-kadam-777621366" },
                        { type: "instagram", label: "Instagram", href: "https://www.instagram.com/ig_kk.dev" },
                        { type: "github", label: "GitHub", href: "https://github.com/codewithmrkay" },
                        { type: "mail", label: "Email", href: "mailto:kkadam58707@gmail.com" },
                      ]}
                    />
                  </ul>
                  <span className='text-5xl font-medium'>{`>`}</span>

                </div>
              </div>
              {/* project section */}
              <div className='mt-5 md:mt-30'>
                <div className='inline-block'>
                  <h1 
                   onMouseEnter={() => soundManager.play('hover')}
                  className='hover:scale-105 text-4xl md:text-5xl font-extralight cursor-pointer opacity-80 hover:opacity-100'>$-Projects</h1>
                </div>
                <ProjectPage/>
              </div>
              <div className='mt-0 md:mt-10'>
                <div className='inline-block'>
                  <h1 
                   onMouseEnter={() => soundManager.play('hover')}
                  className='hover:scale-105 text-4xl md:text-5xl font-extralight cursor-pointer opacity-80 hover:opacity-100'>$-About Me</h1>
                </div>
                <AboutPage/>
              </div>
            </div>
          </div>
        </div>
      </NightSky>
    </div>
  )
}

export default page