// app/providers.jsx
'use client'

import { useAudioUnlock } from "@/lib/sound/useAudioUnlock"
import { useSoundInit } from "@/lib/sound/useSoundInit"


export default function Providers({ children }) {
  useAudioUnlock()

  return children
}
