import { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

import AudioPlayer from './components/AudioPlayer'

const App = () => {
  const [url, setUrl] = useState('')
  const [currentSong, setCurrentSong] = useState('')
  const [error, setError] = useState('')

  const handleUrl = (e) => {
    setUrl(e.target.value)

    const re =
      /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    if (!re.test(String(e.target.value))) {
      setError('Insert a URL')
    } else {
      setError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCurrentSong(url)

    setUrl('')
  }

  const handleBack = () => setCurrentSong('')

  return (
    <>
      {currentSong ? (
        <>
          <button className="back-btn" onClick={handleBack}>
            ← Back
          </button>
          <AudioPlayer currentSong={currentSong} />
        </>
      ) : (
        <>
          <h1 className="heading">Insert the link</h1>
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="https://"
              value={url}
              onChange={handleUrl}
            />
            <button type="sumbit" className="submit-button" disabled={error}>
              <AiOutlineArrowRight />
            </button>
            {error && url && <img src="./error-sign.png" alt="error" />}
          </form>
          {error && url && <p className="error">{error}</p>}
        </>
      )}
    </>
  )
}

export default App

// https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3
