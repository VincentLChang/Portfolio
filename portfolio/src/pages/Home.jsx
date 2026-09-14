import './Home.css'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

function Home() {
  return (
    <div className="portfolio">
      <Navbar />

      <main>
        <PageHeader
          className="hero"
          label="JUNIOR GAME DEVELOPER"
          title={<>Hi, I'm <span>Vincent.</span></>}
          description="I'm a recent HBO-ICT Game Development graduate passionate about creating games, gameplay systems, and interactive experiences."
          descriptionClassName="hero-description"
        >
          <div className="hero-buttons">
            <a href="/projects" className="primary-button">
              View My Projects
            </a>

            <a href="/CV.pdf" className="secondary-button">
              Download CV
            </a>
          </div>
        </PageHeader>
      </main>
    </div>
  )
}

export default Home