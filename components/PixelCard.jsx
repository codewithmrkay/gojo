import Image from 'next/image';
import React, { useState } from 'react';

// Project data array
export const projectsData = [
  {
    id: 1,
    title: "TrendIQ",
    description: "A modern social media app built with Next.js, MongoDB, and Gemini AI, allowing users to post the posts, explore smart strategy by using AI Chat Bot for more Engagement and Reach.",
    techStack: ["JavaScript", "https://nextjs.org/", "https://reactnative.dev/", "https://www.mongodb.com/", "https://aistudio.google.com/", "https://tailwindcss.com/", "https://ui.shadcn.com/", "https://www.postman.com/", "https://github.com/"],
    githubUrl: "https://github.com/codewithmrkay/post",
    demoUrl: "https://post-vu47.vercel.app/"
  },
  {
    id: 2,
    title: "Ai Trip Planner",
    description: "A modern trip planning app built with React.js, FireBase, and Gemini AI, empowering travelers — from solo adventures to group journeys. Enjoy personalized travel plans featuring budget-friendly hotel recommendations, curated points of interest, and robust secure authentication.",
    techStack: ["JavaScript", "https://nextjs.org/", "https://reactnative.dev/", "https://www.mongodb.com/", "https://aistudio.google.com/", "https://tailwindcss.com/", "https://ui.shadcn.com/", "https://www.postman.com/", "https://github.com/"],
    githubUrl: "https://github.com/codewithmrkay/lonavala",
    demoUrl: "https://lonavala-alpha.vercel.app/"
  },
  {
    id: 3,
    title: "Personal Insta Page",
    description: "A curated portfolio showcasing your personal brand, skills, and creative journey online Build your unique digital presence with an engaging and visually driven personal Instagram page",
    techStack: ["JavaScript", "https://nextjs.org/", "https://reactnative.dev/", "https://tailwindcss.com/"],
    githubUrl: "https://github.com/codewithmrkay",
    demoUrl: "https://mrk01.netlify.app/"
  }
];

// PixelCard Component
export const PixelCard = ({ selectedIndex, onSelectIndex }) => {
  const handleNext = () => {
    onSelectIndex((prev) => (prev + 1) % 3);
  };

  const handleBack = () => {
    onSelectIndex((prev) => (prev - 1 + 3) % 3);
  };

  const defaultColors = ['bg-purple-500', 'bg-blue-500', 'bg-green-500'];
  const images = ['images/social.webp', 'images/trip.webp', 'images/insta.webp'];

  const clipPathStyle = {
    imageRendering: 'pixelated',
    clipPath: `polygon(
      12px 0, calc(100% - 12px) 0,
      calc(100% - 12px) 4px, calc(100% - 8px) 4px,
      calc(100% - 8px) 8px, calc(100% - 4px) 8px,
      calc(100% - 4px) 12px, 100% 12px,
      100% calc(100% - 12px), calc(100% - 4px) calc(100% - 12px),
      calc(100% - 4px) calc(100% - 8px), calc(100% - 8px) calc(100% - 8px),
      calc(100% - 8px) calc(100% - 4px), calc(100% - 12px) calc(100% - 4px),
      calc(100% - 12px) 100%, 12px 100%,
      12px calc(100% - 4px), 8px calc(100% - 4px),
      8px calc(100% - 8px), 4px calc(100% - 8px),
      4px calc(100% - 12px), 0 calc(100% - 12px),
      0 12px, 4px 12px,
      4px 8px, 8px 8px,
      8px 4px, 12px 4px
    )`
  };

  return (
    <div className="flex items-center justify-center gap-3 overflow-x-hidden">
      <button
        onClick={handleBack}
        className="text-5xl hover:scale-105 cursor-pointer text-white opacity-80 hover:opacity-100"
      >
        &lt;
      </button>

      <div className="grid grid-cols-3 gap-4 items-center max-w-md w-fit">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            onClick={() => onSelectIndex(index)}
            className={`
              relative cursor-pointer transition-all duration-200 w-20 md:w-32 aspect-3/4
              ${defaultColors[index]}
              ${selectedIndex === index ? 'opacity-100' : 'opacity-50'}
            `}
            style={clipPathStyle}
          >
            {images[index] && (
              <Image
                src={`/${images[index]}`}
                alt={`Card ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="text-5xl hover:scale-105 cursor-pointer text-white opacity-80 hover:opacity-100"
      >
        &gt;
      </button>
    </div>
  );
};