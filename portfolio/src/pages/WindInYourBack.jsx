import { Link } from 'react-router-dom'

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
          <div className="project-placeholder">
            Wind in Your Back
            <br />
            Gameplay / Screenshot
          </div>
        </section>


        <section className="project-details">

          <div>
            <p className="hero-label">OVERVIEW</p>

            <h2>About the Game</h2>

            <p>
              Describe the game here. Explain what the player does,
              what the objective is, and what makes the experience
              interesting.
            </p>
          </div>


          <div>
            <p className="hero-label">MY CONTRIBUTIONS</p>

            <h2>What I Worked On</h2>

            <ul>
              <li>Enemy logic</li>
              <li>Player bounce mechanics</li>
              <li>Narrative design</li>
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
            🏆 Rank #15
          </p>

        </section>


        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>

      </main>
    </div>
  )
}

export default WindInYourBack