import '../App.css'

function Home() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="/" className="logo">
          Vincent Chang
        </a>

        <nav>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="/projects">Projects</a>
          <a href="/skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="/CV.pdf" className="cv-button">
          Download CV
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-label">JUNIOR GAME DEVELOPER</p>

            <h1>
              Hi, I'm <span>Vincent.</span>
            </h1>

            <p className="hero-description">
              I'm a recent HBO-ICT Game Development graduate passionate
              about creating games, gameplay systems, and interactive
              experiences.
            </p>

            <div className="hero-buttons">
              <a href="/projects" className="primary-button">
                View My Projects
              </a>

              <a href="/CV.pdf" className="secondary-button">
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home