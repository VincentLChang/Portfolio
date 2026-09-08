import { Link } from 'react-router-dom'
import windInYourBackImage from '../assets/wind-in-your-back.png'
import tickleTimeImage from '../assets/tickle-time.png'

function Projects() {
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

      <main className="projects-page">
        <section className="projects-header">
          <p className="hero-label">MY WORK</p>

          <h1>Projects</h1>

          <p>
            A selection of games and interactive projects I've worked on.
          </p>
        </section>

        <section className="projects-grid">

          <article className="project-card">
            <div className="project-image">
                <img
                src={windInYourBackImage}
                alt="Wind in Your Back gameplay"
                />
        </div>

            <div className="project-info">
              <p className="project-meta">
                Juniper Dev GameJam 2026 · Rank #15
              </p>

              <h2>Wind in Your Back</h2>

              <p>
                A game created during the Juniper Dev GameJam,
                focusing on enemy logic, player bounce mechanics,
                and narrative design.
              </p>

              <div className="project-tags">
                <span>Unity</span>
                <span>C#</span>
              </div>

              <Link
                to="/projects/wind-in-your-back"
                className="project-link"
              >
                View Project →
              </Link>
            </div>
          </article>


          <article className="project-card">
            <div className="project-image">
              <img
                src={tickleTimeImage}
                alt="Tickle Time gameplay"
              />
            </div>

            <div className="project-info">
              <p className="project-meta">
                Game Jam 2024
              </p>

              <h2>Tickle Time</h2>

              <p>
                A game created during Game Jam 2024, where I worked
                on item logic, item art, and level design.
              </p>

              <div className="project-tags">
                <span>Unity</span>
              </div>

              <Link
                to="/projects/tickle-time"
                className="project-link"
              >
                View Project →
              </Link>
            </div>
          </article>

        </section>
      </main>
    </div>
  )
}

export default Projects