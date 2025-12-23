'use client'

import { SOUNDS } from '@/lib/sound/sound'
import { soundManager } from '@/lib/sound/SoundManager'
import Image from 'next/image'
import { useState } from 'react'
export default function MuteButton() {
  const [muted, setMuted] = useState(true)

  const handleClick = async () => {
    // unlock + preload (safe even if already done)
    await soundManager.unlock()
    await soundManager.preload(SOUNDS)

    if (muted) {
      // ▶️ first time OR resume
      soundManager.playBGM('bgm')
      soundManager.resumeBGM()
    } else {
      // ⏸ pause but DO NOT reset
      soundManager.pauseBGM()
    }

    setMuted(!muted)
  }

  return (
    <div
      onClick={handleClick}
      className={`w-8 h-8 ${muted?"animate-bounce":""} cursor-pointer hover:scale-110 transition-transform`}
    >
      <Image
        src={muted ? '/images/mute.webp' : '/images/unmute.webp'}
        alt="mute"
        width={32}
        height={32}
        priority
      />
    </div>
  )
}
