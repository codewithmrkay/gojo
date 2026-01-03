import React from 'react'
import TechStackIcon from './TechStackIcon'
import Image from 'next/image'
import { ArrowUpRight, Github } from 'lucide-react'
import { soundManager } from '@/lib/sound/SoundManager'

export const ProjectItem = ({ project }) => {
  return (
    <div className='w-full max-w-2xl text-white'>
      <h1 className='text-3xl md:text-7xl md:mt-3 font-light'>{project.title}</h1>
      <p className='font-light text-xl md:text-2xl opacity-90 mt-3'>{project.description}</p>
      
      <div className='mt-3'>
        <h1 className='text-2xl md:text-3xl'>Technologies & Tools</h1>
      </div>
      <div className='flex items-center justify-start gap-1 md:gap-3 flex-wrap mt-2'>
        {project.techStack.map((tech, index) => (
          <span key={index}>
            <TechStackIcon url={tech} name={tech}/>
          </span>
        ))}
      </div>
      
      <div className='mt-3'>
        <h1 className='text-2xl md:text-3xl'>Source Code & Demo</h1>
        <div className='flex items-center justify-start gap-3 mt-2'>
          <div className='inline-block p-2 bg-white rounded-full hover:scale-105 opacity-80 hover:opacity-100'>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={25} color='black' />
            </a>
          </div>
          <div className='inline-block p-2 bg-white rounded-full hover:scale-105 opacity-80 hover:opacity-100'>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={25} color='black' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
