import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Vincent Chang
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <a href="/CV.pdf" className="cv-button">
        Download CV
      </a>
    </header>
  )
}

export default Navbar
