'use client'

import { useAudioUnlock } from "@/lib/sound/useAudioUnlock"



export default function Providers({ children }) {
  useAudioUnlock()
  return children
}
