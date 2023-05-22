import { useState, useEffect, useRef, useCallback } from 'react'

import { IoPlaySharp, IoPauseSharp } from 'react-icons/io5'

const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  const playAnimationRef = useRef()

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime
    setTimeProgress(currentTime)
    progressBarRef.current.value = currentTime
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    )

    playAnimationRef.current = requestAnimationFrame(repeat)
  }, [audioRef, duration, progressBarRef, setTimeProgress])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
    playAnimationRef.current = requestAnimationFrame(repeat)
  }, [isPlaying, audioRef, repeat])

  return (
    <button onClick={togglePlayPause} className="playpause-btn">
      {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
    </button>
  )
}

export default Controls
