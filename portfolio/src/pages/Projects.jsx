import { Link } from 'react-router-dom'
import './Projects.css'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import windInYourBackImage from '../assets/Wind-In-Your-Back/wind-in-your-back.png'
import tickleTimeImage from '../assets/Tickle-Time/tickle-time.png'

function Projects() {
  return (
    <div className="portfolio">
      <Navbar />

      <main className="page">
        <PageHeader
          className="header"
          label="MY WORK"
          title="Projects"
          description="A selection of games and interactive projects I've worked on."
        />

        <section className="projects-grid">

          <Link to="/projects/wind-in-your-back" className="project-card">
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
                A game created during The Very Serious Juniper Dev Game Jam. Hosted by Juniper Dev.
              </p>

              <div className="project-tags">
                <span>Unity</span>
                <span>C#</span>
              </div>

              <span className="project-link">
                View Project →
              </span>
            </div>
          </Link>


          <Link to="/projects/tickle-time" className="project-card">
            <div className="project-image">
              <img
                src={tickleTimeImage}
                alt="Tickle Time gameplay"
              />
            </div>

            <div className="project-info">
              <p className="project-meta">
                Global Game Jam 2024
              </p>

              <h2>Tickle Time</h2>

              <p>
                A game created during the Global Game Jam 2024. The theme was "Make me laugh". 
              </p>

              <div className="project-tags">
                <span>Unity</span>
                <span>C#</span>
              </div>

              <span className="project-link">
                View Project →
              </span>
            </div>
          </Link>

        </section>
      </main>
    </div>
  )
}

export default Projects