"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { ProjectItem } from './ProjectItem'
import { PixelCard, projectsData } from './PixelCard'

const ProjectPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const currentProject = projectsData[selectedIndex];
    return (
        <div className='relative mb-35 min-h-screen w-full max-w-5xl mx-auto flex items-center flex-col justify-start '>
            {/* hero bg */}
            <div className="z-0 mask-x-from-90% mask-x-to-99% mask-y-from-90% mask-y-to-99% pointer-events-none absolute top-0 aspect-4/3 w-full max-w-5xl opacity-30">
                <Image
                    src="/images/heroproject.webp"
                    alt="hero"
                    fill
                    className="object-cover w-full h-full object-center"
                    priority
                />
            </div>
            {/* project card */}
            <div className='relative z-1 mt-20 md:mt-0 w-full h-fit text-white'>
                <ProjectItem project={currentProject} />
            </div>
            {/* cart casoul */}
            <div className='absolute right-0 to-0% w-full h-full'>
                <div className='absolute right-0 top-[80%] md:top-[60%]'>
                    <PixelCard
                        selectedIndex={selectedIndex}
                        onSelectIndex={setSelectedIndex}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectPage