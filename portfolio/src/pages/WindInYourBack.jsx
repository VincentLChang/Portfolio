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

      {/* =========================
          Navbar
      ========================= */}

      <header className="navbar">
        <Link to="/" className="logo">
          Vincent Chang
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <a href="/#about">About</a>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <a href="/#contact">Contact</a>
        </nav>

        <a href="/CV.pdf" className="cv-button">
          Download CV
        </a>
      </header>


      <main className="project-page">

        {/* =========================
            Project Hero
        ========================= */}

        <section className="project-hero">

          <p className="hero-label">
            JUNIPER DEV GAMEJAM 2026
          </p>

          <h1>
            Wind in Your Back
          </h1>

          <p className="project-rank">
            🏆 #15 of 3,503 submissions
          </p>

          <p className="project-intro">
            A fast-paced 3D platformer created during the Juniper
            Dev GameJam 2026. I worked on gameplay systems, enemy
            logic, player mechanics, and narrative design.
          </p>

        </section>


        {/* =========================
            Project Image Slider
        ========================= */}

        <section className="project-showcase">

          <ImageSlider images={windInYourBackImages} />

        </section>


        {/* =========================
            About The Game
        ========================= */}

        <section className="project-details">

          <div>

            <p className="hero-label">
              OVERVIEW
            </p>

            <h2>
              About the Game
            </h2>

            <p>
              Wind in Your Back is a fast-paced 3D platformer created
              for the Juniper Dev GameJam 2026. You play as a faulty
              wind-up toy trying to escape a factory that wants to
              destroy you.
            </p>

            <p>
              Use your winding key to move through the levels as
              quickly as possible while avoiding obstacles and
              enemies.
            </p>

          </div>


          <div>

            <p className="hero-label">
              GAMEPLAY
            </p>

            <h2>
              The Goal
            </h2>

            <p>
              The focus of the game is speed and movement. Players
              must carefully manage their movement and use the
              environment to make it through each level as quickly
              as possible.
            </p>

            <p>
              The game combines platforming, hazards, enemies, and
              movement mechanics around the central wind-up toy
              concept.
            </p>

          </div>

        </section>


        {/* =========================
            My Contributions
        ========================= */}

        <section className="contributions-section">

          <p className="hero-label">
            MY CONTRIBUTIONS
          </p>

          <h2>
            What I Worked On
          </h2>

          <div className="contributions-grid">

            <article className="contribution-card">
              <h3>
                Gameplay Systems
              </h3>

              <p>
                Player bounce mechanics, charge effects, and other
                gameplay systems.
              </p>
            </article>


            <article className="contribution-card">
              <h3>
                Enemy Logic
              </h3>

              <p>
                Implemented and worked on enemy behaviour and logic
                used during gameplay.
              </p>
            </article>


            <article className="contribution-card">
              <h3>
                Lance Logic
              </h3>

              <p>
                Worked on the lance system and its interaction with
                the player's gameplay mechanics.
              </p>
            </article>


            <article className="contribution-card">
              <h3>
                Game Design
              </h3>

              <p>
                Helped brainstorm and develop the core game concept
                around the "Spin to Win" theme.
              </p>
            </article>


            <article className="contribution-card">
              <h3>
                Narrative
              </h3>

              <p>
                Worked on the game's narrative design and story
                writing.
              </p>
            </article>


            <article className="contribution-card">
              <h3>
                UI & Audio
              </h3>

              <p>
                Helped with UI implementation and sound design
                throughout development.
              </p>
            </article>


            <article className="contribution-card">
              <h3>
                Project Architecture
              </h3>

              <p>
                Helped with the initial project setup and architecture
                to keep the code modular and scalable.
              </p>
            </article>


            <article className="contribution-card">
              <h3>
                Bug Fixing
              </h3>

              <p>
                Helped identify, troubleshoot, and fix issues during
                development and testing.
              </p>
            </article>

          </div>

        </section>


        {/* =========================
            Technical Development
        ========================= */}

        <section className="technical-section">

          <p className="hero-label">
            DEVELOPMENT
          </p>

          <h2>
            Technical Development
          </h2>

          <div className="development-grid">

            <article className="development-item">

              <h3>
                Game Concept
              </h3>

              <p>
                We explored several ideas around the "Spin to Win"
                theme before deciding on a wind-up toy trying to
                escape a factory.
              </p>

            </article>


            <article className="development-item">

              <h3>
                Project Architecture
              </h3>

              <p>
                I helped with the initial project setup and
                architecture, focusing on keeping the systems
                modular and scalable.
              </p>

            </article>


            <article className="development-item">

              <h3>
                Gameplay Systems
              </h3>

              <p>
                I worked on the lance logic, enemy logic, player
                charge effects, and player bounce mechanics.
              </p>

            </article>


            <article className="development-item">

              <h3>
                Code & Debugging
              </h3>

              <p>
                I worked with interfaces and existing systems to
                extend functionality and helped identify and fix
                bugs throughout development.
              </p>

            </article>

          </div>

        </section>


        {/* =========================
            Technologies
        ========================= */}

        <section className="technical-section">

          <p className="hero-label">
            TECHNOLOGIES
          </p>

          <h2>
            Tools
          </h2>

          <div className="project-tags">
            <span>Unity</span>
            <span>C#</span>
            <span>Git</span>
          </div>

        </section>


        {/* =========================
            Result
        ========================= */}

        <section className="technical-section">

          <p className="hero-label">
            RESULT
          </p>

          <h2>
            Juniper Dev GameJam 2026
          </h2>

          <p className="project-rank">
            🏆 #15 of 3,503 submissions · Score 4.34
          </p>

        </section>


        {/* =========================
            Game Link
        ========================= */}

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


        {/* =========================
            Back To Projects
        ========================= */}

        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>

      </main>

    </div>
  )
}

export default WindInYourBack