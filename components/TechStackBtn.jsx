"use client"
import { soundManager } from '@/lib/sound/SoundManager';
import Image from 'next/image';
import React from 'react'

const ICON_MAP = {
    JavaScript: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
};

export default function TechStackBtn({ url, name }) {
    const iconUrl =
        ICON_MAP[name] ||
        `https://www.google.com/s2/favicons?domain=${url}&sz=64`;

    return (
        <a  
            onMouseEnter={() => soundManager.play('hover')}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex font-mono items-center gap-2 px-1 py-0.5 sm:px-3 sm:py-1.5
                 border border-dashed border-white/80 rounded-md bg-[#272575]
                 text-sm hover:bg-white/10 transition"
        >
            <Image
            preload
            width={100} height={100} src={iconUrl} alt={name} className="w-4 h-4" />
            <span>{name}</span>
        </a>
    );
}
