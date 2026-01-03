"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
const NightSky = ({ children }) => {
  const [stars, setStars] = useState([]);
  const pathname = usePathname()
  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const starArray = [];
      let numStars = 200; // Number of stars
      if(pathname!="/"){
        numStars=100
      }
      for (let i = 0; i < numStars; i++) {
        starArray.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 4 + 1,
          animationDelay: Math.random() * 3,
          animationDuration: Math.random() * 2 + 2
        });
      }

      setStars(starArray);
    };

    generateStars();
  }, []);

  return (
    <div className="relative min-h-screen w-full pt-20">
      {/* Content Layer (Behind) */}
      <div className="relative w-full">
        {children}
      </div>

      {/* Stars Overlay Layer (On Top) */}
      <div className="absolute w-full h-full inset-0 pointer-events-none z-50 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 1)`
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default NightSky