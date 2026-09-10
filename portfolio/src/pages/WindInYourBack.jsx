import { Link } from 'react-router-dom'

import windInYourBackImage from '../assets/Wind-In-Your-Back/wind-in-your-back.png'
import windInYourBackGameplay from '../assets/Wind-In-Your-Back/wind-in-your-back-game.png'
import windInYourBackGIF from '../assets/Wind-In-Your-Back/wind-in-your-back.gif'

import ImageSlider from '../components/ImageSlider'

const windInYourBackImages = [
  windInYourBackImage,
  windInYourBackGameplay,
  windInYourBackGIF,
]

function WindInYourBack() {
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
          <p className="hero-label">
            JUNIPER DEV GAMEJAM 2026
          </p>

          <h1>Wind in Your Back</h1>

          <p className="project-rank">
            🏆 Rank #15
          </p>

          <p className="project-intro">
            A game created during the Juniper Dev GameJam 2026,
            where I worked on enemy logic, player bounce mechanics,
            and narrative design.
          </p>
        </section>

        <section className="project-showcase">
          <ImageSlider images={windInYourBackImages} />
        </section>

        <section className="project-details">

          <div>
            <p className="hero-label">OVERVIEW</p>

            <h2>About the Game</h2>

            <p>
              Wind in Your Back is a game created during the Juniper
              Dev GameJam 2026. The game is a fast-paced 3D platformer
              where the player must navigate through the levels as
              quickly as possible.
            </p>

            <p>
              The player is a faulty wind-up toy which the factory is
              trying to destroy, forcing you to escape. The player must
              use their winding key to move forward while avoiding
              obstacles and enemies.
            </p>

            <p>
              The project was created in Unity with C# and was
              completed in a week. The game was ranked 15th out of
              3,503 submissions, which was a great achievement for a
              game jam project.
            </p>
          </div>

          <div>
            <p className="hero-label">MY CONTRIBUTIONS</p>

            <h2>What I Worked On</h2>

            <ul>
              <li>Narrative design</li>
              <li>Game design</li>
              <li>Story writing</li>
              <li>Sound design</li>
              <li>UI</li>
              <li>Enemy logic</li>
              <li>Player charge effects</li>
              <li>Player bounce mechanics</li>
              <li>Bug fixing</li>
            </ul>
          </div>

        </section>

        <section className="technical-section">

          <p className="hero-label">DEVELOPMENT</p>

          <h2>Technical Development</h2>

          <p>
            This section will explain how you implemented the
            mechanics and systems you worked on.
          </p>

        </section>

        <section className="technical-section">

          <p className="hero-label">RESULT</p>

          <h2>Juniper Dev GameJam 2026</h2>

          <p className="project-rank">
            🏆 Overall Rank #15 · Score 4.34
          </p>

        </section>

        <section className="project-links">

          <p className="hero-label">
            PLAY WIND IN YOUR BACK
          </p>

          <a
            href="https://wubdev.itch.io/wind-in-your-back"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Wind in Your Back on itch.io
          </a>

        </section>

        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>

      </main>
    </div>
  )
}

export default WindInYourBack