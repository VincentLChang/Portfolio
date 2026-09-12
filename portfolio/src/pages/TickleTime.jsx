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
        <Link to="/" className="logo">Vincent Chang</Link>

        <nav>
          <Link to="/">Home</Link>
          <a href="/#about">About</a>
          <Link to="/projects">Projects</Link>
          <a href="/#skills">Skills</a>
          <a href="/#contact">Contact</a>
        </nav>

        <a href="/CV.pdf" className="cv-button">Download CV</a>
      </header>

      <main className="project-page">

        {/* PROJECT HERO */}
        <section className="project-hero">
          <p className="hero-label">GLOBAL GAME JAM 2024</p>

          <h1>Tickle Time</h1>

          <p className="project-intro">
            A multiplayer game created during Global Game Jam 2024.
            I worked on gameplay systems, item logic, 2D art, game
            concept, and level design.
          </p>
        </section>


        {/* IMAGE SLIDER */}
        <section className="project-showcase">
          <ImageSlider images={tickleTimeImages} />
        </section>


        {/* PROJECT DETAILS */}
        <section className="project-details">

          <div>
            <p className="hero-label">OVERVIEW</p>

            <h2>About the Game</h2>

            <p>
              Tickle Time is a multiplayer game created during
              Global Game Jam 2024. Players take on one of two
              roles: the tickler or the hider.
            </p>

            <p>
              The tickler has to find the hider, while the hider
              has to avoid being caught. The game combines playful
              and creepy elements to create a fun experience
              that can be played with a friend or solo.
            </p>
          </div>


          <div>
            <p className="hero-label">GAMEPLAY</p>

            <h2>The Goal</h2>

            <p>
              The main objective depends on the player's role.
              The tickler needs to find and catch the hider, while
              the hider needs to stay hidden and survive as long
              as possible.
            </p>

            <p>
              Levels are procedurally generated using multiple
              types of rooms, creating different layouts for each
              playthrough.
            </p>

            <p>
              The hider can also make use of different items to
              help avoid the tickler and gain an advantage during
              the game.
            </p>
          </div>

        </section>


        {/* CONTRIBUTIONS */}
        <section className="contributions-section">
          <p className="hero-label">MY CONTRIBUTIONS</p>

          <h2>What I Worked On</h2>

          <div className="contributions-grid">

            <article className="contribution-card">
              <h3>Item Logic</h3>

              <p>
                Implemented gameplay logic for the different items
                that the hider could use during the game.
              </p>
            </article>


            <article className="contribution-card">
              <h3>2D Art</h3>

              <p>
                Created and worked on 2D art assets used throughout
                the game.
              </p>
            </article>


            <article className="contribution-card">
              <h3>Game Concept</h3>

              <p>
                Helped develop the core game concept and gameplay
                idea around the tickler and hider roles.
              </p>
            </article>


            <article className="contribution-card">
              <h3>Level Design</h3>

              <p>
                Worked on level design and the different room types
                used to create the procedurally generated levels.
              </p>
            </article>

          </div>
        </section>


        {/* TECHNICAL DEVELOPMENT */}
        <section className="technical-section">
          <p className="hero-label">DEVELOPMENT</p>

          <h2>Technical Development</h2>

          <div className="development-grid">

            <article className="development-item">
              <h3>Game Concept</h3>

              <p>
                We developed the idea of a multiplayer hide-and-seek
                style game where one player hunts the other while
                the hider uses the environment and items to survive.
              </p>
            </article>


            <article className="development-item">
              <h3>Procedural Levels</h3>

              <p>
                The game uses procedural generation to create levels
                from multiple room types, providing different layouts
                during each playthrough.
              </p>
            </article>


            <article className="development-item">
              <h3>Item Systems</h3>

              <p>
                I worked on the logic behind the items available to
                the hider, giving players different ways to avoid
                or escape from the tickler.
              </p>
            </article>


            <article className="development-item">
              <h3>Game Jam Development</h3>

              <p>
                The project was developed in Unity with C# and
                completed during the weekend-long Global Game Jam.
              </p>
            </article>

          </div>
        </section>


        {/* TECHNOLOGIES */}
        <section className="technical-section">
          <p className="hero-label">TECHNOLOGIES</p>

          <h2>Tools</h2>

          <div className="project-tags">
            <span>Unity</span>
            <span>C#</span>
            <span>Git</span>
          </div>
        </section>


        {/* RESULT */}
        <section className="technical-section">
          <p className="hero-label">RESULT</p>

          <h2>Global Game Jam 2024</h2>

          <p>
            A completed multiplayer game developed over the
            weekend-long Global Game Jam 2024 by a team of 6 developers.
          </p>
        </section>


        {/* PROJECT LINK */}
        <section className="project-links">
          <p className="hero-label">PLAY TICKLE TIME</p>

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