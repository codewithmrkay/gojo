// lib/sound/useSoundInit.js

'use client'

import { useEffect } from 'react'
import { SOUNDS } from './sound'
import { soundManager } from './SoundManager'

export function useSoundInit() {
  useEffect(() => {
    soundManager.preload(SOUNDS)
  }, [])
}
