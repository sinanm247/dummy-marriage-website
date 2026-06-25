import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Loader from './components/Loader/Loader'
import Blessings from './components/Blessings/Blessings'
import CoupleDetails from './components/CoupleDetails/CoupleDetails'
import EventDetails from './components/EventDetails/EventDetails'
import VenueDetails from './components/VenueDetails/VenueDetails'
import ClosingMessage from './components/ClosingMessage/ClosingMessage'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'

function App() {
  const [loaderFading, setLoaderFading] = useState(false)
  const [loaderDone, setLoaderDone] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setLoaderFading(true), 2700)
    const doneTimer = setTimeout(() => setLoaderDone(true), 3450)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  return (
    <>
      {!loaderDone && <Loader fading={loaderFading} />}
      <AudioPlayer />
      <div className="page-shell">
        <main className="page-main">
          <Hero />
          <Blessings />
          <CoupleDetails />
          <EventDetails />
          <VenueDetails />
          <ClosingMessage />
        </main>
      </div>
    </>
  )
}

export default App
