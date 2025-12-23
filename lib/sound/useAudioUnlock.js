// lib/sound/useAudioUnlock.js
'use client'

import { useEffect } from 'react'
import { soundManager } from './SoundManager'
import { SOUNDS } from './sound'

export function useAudioUnlock() {
  useEffect(() => {
    const unlock = async () => {
      await soundManager.unlock()
      await soundManager.preload(SOUNDS)

      document.removeEventListener('pointerdown', unlock)
    }

    document.addEventListener('pointerdown', unlock, { once: true })

    return () => {
      document.removeEventListener('pointerdown', unlock)
    }
  }, [])
}
