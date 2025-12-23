// lib/sound/SoundManager.js

class SoundManager {
  constructor() {
    this.ctx = null
    this.buffers = new Map()
    this.enabled = true
    this.unlocked = false

    // BGM
    this.bgmSource = null
    this.bgmGain = null
    this.bgmPlaying = false
  }

  async unlock() {
    if (this.unlocked) return

    this.ctx = new (window.AudioContext || window.webkitAudioContext)()
    await this.ctx.resume()
    this.unlocked = true
  }

  async load(key, url) {
    if (this.buffers.has(key)) return

    const res = await fetch(url)
    const arrayBuffer = await res.arrayBuffer()
    const audioBuffer = await this.ctx.decodeAudioData(arrayBuffer)

    this.buffers.set(key, audioBuffer)
  }

  async preload(sounds) {
    if (!this.unlocked) return
    await Promise.all(
      Object.entries(sounds).map(([k, v]) => this.load(k, v))
    )
  }

  // 🔊 UI / SFX
  play(key, volume = 0.9) {
    if (!this.enabled || !this.buffers.has(key)) return

    const source = this.ctx.createBufferSource()
    const gain = this.ctx.createGain()

    source.buffer = this.buffers.get(key)
    gain.gain.value = volume

    source.connect(gain)
    gain.connect(this.ctx.destination)

    source.start()
  }

  // 🎵 BACKGROUND MUSIC (LOOP)
  playBGM(key, volume = 0.9) {
    if (!this.buffers.has(key) || this.bgmPlaying) return

    this.bgmSource = this.ctx.createBufferSource()
    this.bgmGain = this.ctx.createGain()

    this.bgmSource.buffer = this.buffers.get(key)
    this.bgmSource.loop = true
    this.bgmGain.gain.value = volume

    this.bgmSource.connect(this.bgmGain)
    this.bgmGain.connect(this.ctx.destination)

    this.bgmSource.start()
    this.bgmPlaying = true
  }

  pauseBGM() {
    if (!this.bgmPlaying) return

    this.bgmGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1)
    this.bgmPlaying = false
  }

  resumeBGM(volume = 0.2) {
    if (!this.bgmGain) return

    this.bgmGain.gain.setTargetAtTime(volume, this.ctx.currentTime, 0.1)
    this.bgmPlaying = true
  }
}

export const soundManager = new SoundManager()
