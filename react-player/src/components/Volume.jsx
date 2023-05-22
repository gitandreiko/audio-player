import { useState, useEffect } from 'react'

const Volume = ({ audioRef }) => {
  const [volume, setVolume] = useState(60)

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100
    }
  }, [volume, audioRef])
  return (
    <div className="volume">
      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        style={{
          background: `linear-gradient(to right, #000000 ${volume}%, #ccc ${volume}%)`,
        }}
      />
    </div>
  )
}

export default Volume
