import { Link } from 'react-router-dom'
import tickleTimeImage from '../assets/tickle-time-gameplay.png'

function TickleTime() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <Link to="/" className="logo">
          Vincent Chang
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#contact">Contact</a>
        </nav>

        <a href="/CV.pdf" className="cv-button">
          Download CV
        </a>
      </header>

      <main className="project-page">
        <section className="project-hero">
          <p className="hero-label">GAME JAM 2024</p>

          <h1>Tickle Time</h1>

          <p className="project-intro">
            A game created during Game Jam 2024, where I worked
            on item logic, item art, and level design.
          </p>
        </section>

        <section className="project-showcase">
          <div className="project-placeholder">
            <br />
            <img
              src={tickleTimeImage}
              alt="Tickle Time gameplay"
            />
          </div>
        </section>

        <section className="project-details">
          <div>
            <p className="hero-label">OVERVIEW</p>
            <h2>About the Game</h2>

            <p>
              Describe what Tickle Time is about and what the player
              needs to accomplish.
            </p>
          </div>

          <div>
            <p className="hero-label">MY CONTRIBUTIONS</p>
            <h2>What I Worked On</h2>

            <ul>
              <li>Item logic</li>
              <li>Item art</li>
              <li>Level design</li>
            </ul>
          </div>
        </section>

        <section className="technical-section">
          <p className="hero-label">TECHNOLOGIES</p>

          <h2>Tools</h2>

          <div className="project-tags">
            <span>Unity</span>
          </div>
        </section>

        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>
      </main>
    </div>
  )
}

export default TickleTime