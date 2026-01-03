import { soundManager } from '@/lib/sound/SoundManager';
import React from 'react';

export const PixelBtn = ({ children, onClick, className = "" }) => {
    const clip = `polygon(
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
  )`;

    return (
        <div className="relative inline-block">
            {/* SHADOW */}
            <div
                className="absolute  inset-0 bg-purple-700 translate-y-0.5 translate-x-0.5 pointer-events-none"
                style={{
                    clipPath: clip,
                    imageRendering: "pixelated",
                }}
            />
            <div
                className="absolute hover:scale-105 inset-0 bg-purple-400 -translate-y-0.5 pointer-events-none"
                style={{
                    clipPath: clip,
                    imageRendering: "pixelated",
                }}
            />

            {/* BUTTON */}
            <button
                onClick={onClick}
                onMouseEnter={() => soundManager.play("hover")}

                className={`
         cursor-pointer text-shadow-md
          relative inline-flex items-center justify-center
          font-bold
          bg-[#272575]
          opacity-90
          hover:opacity-100 
          transition-transform duration-150
          ${className}
        `}
                style={{
                    clipPath: clip,
                    imageRendering: "pixelated",
                }}
            >
                {children}
            </button>
        </div>
    );
};

