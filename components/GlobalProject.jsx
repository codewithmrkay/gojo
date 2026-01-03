import { Download, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
const item = [
    {
        title: "Env Masker",
        img:'/images/env.webp',
        publishat: "MiscroSoft Marketplace",
        Download: '180+',
        rating: '5'
    },
    {
        title: "Mini Youtube React",
        img:'/images/miniyt.webp',
        publishat: "NPM Packages",
        Download: '100+',
        rating: '4.5+'
    },
]
const GlobalProject = () => {
    return (
        <div className='w-full max-w-5xl mx-auto h-fit font-light mb-20'>
            <div className='flex md:flex-row items-start justify-center md:justify-between flex-col gap-7 md:gap-15'>
                {item.map((e, key) => (
                    <div key={key} className='flex items-center justify-center gap-2 w-fit h-fit'>
                        <div className='w-25 h-25 md:h-40 md:w-40 shrink-0 border-2 border-[#3f4178]  rounded-md md:rounded-xl overflow-hidden'>
                            <Image className='w-full h-full object-cover object-center' src={e.img} alt={e.title} width={300} height={300}/>
                        </div>
                        <div className='flex flex-col items-start justify-center'>
                            <h1 className='text-2xl text-white'>{e.title}</h1>
                            <p className='text-xl md:text-2xl text-white'>Publish : {e.publishat}</p>
                            <p className='text-xl md:text-2xl text-white'>Download : {e.Download}</p>
                            <p className='text-xl md:text-2xl text-white flex items-center justify-center'>Rating : {e.rating}<Star className='inline-block border-0 text-black' size={25} fill='yellow'/></p>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default GlobalProject