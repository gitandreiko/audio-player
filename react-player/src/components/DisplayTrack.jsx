const DisplayTrack = ({
  audioRef,
  setDuration,
  progressBarRef,

  currentSong,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration
    setDuration(seconds)
    progressBarRef.current.max = seconds
  }

  return (
    <div>
      <audio
        src={currentSong}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        loop
      />
    </div>
  )
}
export default DisplayTrack
