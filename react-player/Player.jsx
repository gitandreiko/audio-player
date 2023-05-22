import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsSkipEndCircleFill,
  BsFillSkipEndCircleFill,
} from 'react-icons/bs'

import './Player.scss'
import { useRef, useState } from 'react'

const Player = ({
  audioElem,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  songs,
}) => {
  const [volume, setVolume] = useState(0.3)
  const clickRef = useRef()

  const playPause = () => {
    setIsPlaying(!isPlaying)
  }

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth
    const offset = e.nativeEvent.offsetX

    const divprogress = (offset / width) * 100
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length
  }

  const handleVolume = (q) => {
    setVolume(q)
    audioElem.current.volume = q
  }

  return (
    <div className="player_container">
      <div className="controls">
        {isPlaying ? (
          <BsFillPauseCircleFill
            className="btn_action pp"
            onClick={playPause}
          />
        ) : (
          <BsFillPlayCircleFill className="btn_action pp" onClick={playPause} />
        )}
      </div>
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div
            className="seek_bar"
            style={{ width: `${currentSong.progress + '%'}` }}
          >
            <div className="thumb" />
          </div>
        </div>
      </div>

      <input
        value={Math.round(volume * 100)}
        type="range"
        name="volBar"
        onChange={(e) => handleVolume(e.target.value / 100)}
      />
    </div>
  )
}

export default Player
