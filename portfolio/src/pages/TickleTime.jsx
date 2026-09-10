import { Link } from 'react-router-dom'

import tickleTimeImage from '../assets/Tickle-Time/tickle-time.png'
import tickleTimeImage1 from '../assets/Tickle-Time/tickle-time1.png'
import tickleTimeGameplay from '../assets/Tickle-Time/tickle-time-gameplay.png'

import ImageSlider from '../components/ImageSlider'

const tickleTimeImages = [
  tickleTimeImage,
  tickleTimeImage1,
  tickleTimeGameplay,
]

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

        {/* PROJECT HERO */}
        <section className="project-hero">
          <p className="hero-label">
            GLOBAL GAME JAM 2024
          </p>

          <h1>Tickle Time</h1>

          <p className="project-intro">
            A game created during Global Game Jam 2024, where I worked
            on item logic, 2D art, game concept, and level design.
          </p>
        </section>


        {/* IMAGE SLIDER */}
        <section className="project-showcase">
          <ImageSlider images={tickleTimeImages} />
        </section>


        {/* PROJECT DETAILS */}
        <section className="project-details">

          <div>
            <p className="hero-label">
              OVERVIEW
            </p>

            <h2>About the Game</h2>

            <p>
              Tickle Time is a multiplayer game created during
              Global Game Jam 2024. Two players take on different
              roles: a tickler and a hider. The tickler has to find
              the hider, while the hider has to avoid being caught.
            </p>

            <p>
              Each level is procedurally generated using multiple
              types of rooms. Various items can also be used by the
              hider to help avoid the tickler.
            </p>

            <p>
              The game combines fun and slightly scary elements and
              can be played with a friend or solo. The game was
              developed in Unity with C# and completed during the
              weekend-long game jam.
            </p>
          </div>


          <div>
            <p className="hero-label">
              MY CONTRIBUTIONS
            </p>

            <h2>What I Worked On</h2>

            <ul>
              <li>Item logic</li>
              <li>2D art</li>
              <li>Game concept</li>
              <li>Level design</li>
            </ul>
          </div>

        </section>


        {/* TECHNOLOGIES */}
        <section className="technical-section">
          <p className="hero-label">
            TECHNOLOGIES
          </p>

          <h2>Tools</h2>

          <div className="project-tags">
            <span>Unity</span>
            <span>C#</span>
            <span>Git</span>
          </div>
        </section>


        {/* PROJECT LINK */}
        <section className="project-links">
          <p className="hero-label">
            PLAY TICKLE TIME
          </p>

          <a
            href="https://rigterw.itch.io/tickle-time"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Tickle Time on itch.io
          </a>
        </section>


        {/* BACK */}
        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>

      </main>
    </div>
  )
}

export default TickleTime