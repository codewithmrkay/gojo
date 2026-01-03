"use client"
import NightSky from '@/components/NightSky'
import React from 'react'
import Image from 'next/image'
import TechStackIcon from './TechStackIcon'
import GithubPage from './GithubPage'
import { soundManager } from '@/lib/sound/SoundManager'
import GlobalProject from './GlobalProject'

const skill = [
  "JavaScript",
  "https://expressjs.com/",
  "https://nodejs.org/en",
  "https://www.mongodb.com/",
  "https://www.typescriptlang.org/",
  "https://reactnative.dev/",
  "https://nextjs.org/",
  "https://tailwindcss.com/",
  "https://ui.shadcn.com/",
  "https://www.postman.com/",
  "https://github.com/",
  "https://zustand-demo.pmnd.rs/"
]
const AboutPage = () => {

  return (
    <div className=' w-full max-w-5xl mt-5 text-white'>
      <div className='flex flex-col items-start md:flex-row md:items-center justify-center gap-2 md:gap-4'>
        {/* aboutpage hero img + text */}
        <div
          onMouseEnter={() => soundManager.play('click')} className=" group relative shrink-0 w-25 h-25 md:h-80 md:w-80 border-[#3f4178] border-4 bg-[#272575] rounded-xl overflow-hidden transition-transform duration-300 ease-out "
        >
          {/* DARK (default) */}
          <Image
            src="/images/dark.webp" alt="hero dark" fill priority className=" object-cover object-center transition-opacity duration-150 group-hover:opacity-0 "
          />

          {/* LIGHT (hover) */}
          <Image
            src="/images/light1.webp" alt="hero light" priority fill className=" object-cover object-center opacity-100 md:opacity-0 transition-opacity duration-150 group-hover:opacity-100 "
          />
        </div>

        <div className='flex flex-col self-end'>
          <h1 className='text-3xl md:text-5xl'>{`Karan Kadam`}</h1>
          <p className='font-light text-xl md:text-2xl opacity-90 mt-3'>{`I'm a Full Stack web developer and Open Source Contributor, I love building products to solve real-world problems. I'm specialized in building MVP's.`}</p>
          <div className='flex flex-col items-start justify-center mt-5'>
            <p className='text-2xl md:text-3xl'>{`Skill`}</p>
            <div className='flex items-center justify-start gap-1 md:gap-3 flex-wrap '>
              {skill.map((tech, index) => (
                <span key={index}>
                  <TechStackIcon url={tech} name={tech} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mt-5 text-white'>
        <h1 className='text-2xl md:text-3xl'>Github Contribution</h1>
        <GithubPage />
      </div>
      <div className='w-full mt-5 text-white'>
        <h1 className='text-2xl md:text-3xl'>Global Contribution</h1>
        <GlobalProject />
      </div>
    </div>
  )
}

export default AboutPage