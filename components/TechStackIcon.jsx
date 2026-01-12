"use client"
import { soundManager } from '@/lib/sound/SoundManager';
import Image from 'next/image';
import React from 'react'

const ICON_MAP = {
    JavaScript: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
};

export default function TechStackIcon({ url, name }) {
    const iconUrl =
        ICON_MAP[name] ||
        `https://www.google.com/s2/favicons?domain=${url}&sz=64`;

    return (
        <a
            onMouseEnter={() => soundManager.play('hover')}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
        >
            <Image
                preload
                width={100} height={100} src={iconUrl} alt={name} className="rounded-full w-8 h-8" />
        </a>
    );
}
