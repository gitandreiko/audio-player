import { useRef, useState } from 'react'

import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'
import Volume from './Volume'
import Duration from './Duration'

const AudioPlayer = ({ currentSong }) => {
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const audioRef = useRef()
  const progressBarRef = useRef()

  return (
    <>
      <div className="audio-player">
        <DisplayTrack
          {...{
            audioRef,
            setDuration,
            progressBarRef,
            currentSong,
          }}
        />
        <Controls
          {...{
            audioRef,
            progressBarRef,
            duration,

            setTimeProgress,
          }}
        />
        <ProgressBar {...{ progressBarRef, audioRef }} />
        <div className="durvol-wrapper">
          <Duration timeProgress={timeProgress} />
          <Volume audioRef={audioRef} />
        </div>
      </div>
    </>
  )
}
export default AudioPlayer
