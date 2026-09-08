import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import WindInYourBack from './pages/WindInYourBack'
import TickleTime from './pages/TickleTime.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/wind-in-your-back"
          element={<WindInYourBack />}
        />
        <Route
          path="/projects/tickle-time"
          element={<TickleTime />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App