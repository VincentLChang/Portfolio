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
          <p className="hero-label"> GLOBAL GAME JAM 2024</p>

          <h1>Tickle Time</h1>

          <p className="project-intro">
            A game created during Global Game Jam 2024, where I worked
            on item logic, 2D art, game concept and level design.
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
              Tickle Time is a game created during Global Game Jam 2024.
              The game is a multiplayer game where the there are two players; a tickler and a hider.
              The tickler has to find the hider and the hider has to avoid the tickler.
              Each level is procedurally generated with multiple kinds of rooms and items that can be used to help the hider avoid the tickler.
              It is a fun and somewhat scary game which can be played with a friend or solo. The game was created in Unity and C#.
            </p>
          </div>

          <div>
            <p className="hero-label">MY CONTRIBUTIONS</p>
            <h2>What I Worked On</h2>

            <ul>
              <li>Item logic</li>
              <li>2D art</li>
              <li>Game concept</li>
              <li>Level design</li>
            </ul>
          </div>
        </section>

        <section className="technical-section">
          <p className="hero-label">TECHNOLOGIES</p>

          <h2>Tools</h2>

          <div className="project-tags">
            <span>Unity</span>
            <span>C#</span>
            <span>Git</span>
          </div>
        </section>

        <section className="project-links">
          <p className="hero-label">PLAY TICKLE TIME</p>
            <span>
              <a
                href="YOUR_ITCH_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Tickle Time on itch.io
              </a>
            </span>
        </section>

        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>
      </main>
    </div>
  )
}

export default TickleTime