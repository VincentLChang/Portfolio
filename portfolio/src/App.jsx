import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Projects from './pages/Projects'
import WindInYourBack from './pages/WindInYourBack'
import TickleTime from './pages/TickleTime.jsx'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route
          path="/skills"
          element={<Skills />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App