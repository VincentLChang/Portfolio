import { Link } from 'react-router-dom'
import './About.css'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

function About() {
    return (
        <div className="portfolio">
            <Navbar />

            <main className="page">

                {/* About Header */}

                <PageHeader
                    className="header"
                    label="ABOUT ME"
                    title="About Me"
                    description="A little about who I am, my background, and what motivates me as a developer."
                />


                {/* Introduction */}

                <section className="about-introduction">

                    <div className="about-card about-intro-card">

                        <p className="about-label">
                            WHO I AM
                        </p>

                        <h2>Hi, I'm Vincent.</h2>

                        <p>
                            I'm a Junior Software Developer and HBO-ICT
                            graduate based in Amsterdam. I enjoy building
                            software and working on projects where I can
                            combine creativity, technology, and problem
                            solving.
                        </p>

                        <p>
                            Throughout my studies and professional experience,
                            I've had the opportunity to work on different
                            types of projects, from educational platforms
                            and backend systems to games and interactive
                            experiences.
                        </p>

                        <p>
                            I enjoy learning through practical projects and
                            challenging myself to understand how things work
                            and how they can be improved.
                        </p>

                    </div>


                    <div className="about-card about-interests-card">

                        <p className="about-label">
                            MY INTERESTS
                        </p>

                        <h2>What I Enjoy</h2>

                        <ul className="about-interests">
                            <li>Building Software</li>
                            <li>Game Development</li>
                            <li>Interactive Experiences</li>
                            <li>Learning New Technologies</li>
                            <li>Solving Technical Problems</li>
                        </ul>

                    </div>

                </section>


                {/* Education */}

                <section className="education-section">

                    <div className="education-header">

                        <p className="hero-label">
                            EDUCATION
                        </p>

                        <h2>My Education</h2>

                        <p>
                            My academic background and the foundation of my
                            development journey.
                        </p>

                    </div>


                    <div className="education-list">

                        <article className="education-card">

                            <div className="education-year">
                                Sep 21 — Jul 26
                            </div>

                            <div className="education-info">

                                <h3>
                                    HBO-ICT — Bachelor of Science
                                </h3>

                                <p className="education-school">
                                    Amsterdam University of Applied Sciences
                                </p>

                                <p>
                                    I studied Information and Communication
                                    Technology, developing a broad foundation
                                    in software development, project work,
                                    and IT.
                                </p>

                                <p>
                                    My bachelor thesis focused on evaluating
                                    and designing an optimal backend
                                    architecture for the deTechHelden
                                    learning platform.
                                </p>

                            </div>

                        </article>


                        <article className="education-card">

                            <div className="education-year">
                                Sep 17 — Jul 21
                            </div>

                            <div className="education-info">

                                <h3>
                                    HAVO — Natuur en Techniek
                                </h3>

                                <p className="education-school">
                                    DENISE, Amsterdam
                                </p>

                                <p>
                                    Completed HAVO with a focus on the
                                    Natuur en Techniek profile.
                                </p>

                            </div>

                        </article>

                    </div>

                </section>


                {/* Languages */}

                <section className="about-languages">

                    <div className="about-card">

                        <p className="about-label">
                            LANGUAGES
                        </p>

                        <h2>Languages</h2>

                        <ul className="about-interests">
                            <li>German — Native</li>
                            <li>Dutch — C1</li>
                            <li>English — C1</li>
                        </ul>

                    </div>

                </section>


                {/* What I'm Looking For */}

                <section className="about-goals">

                    <div className="about-card">

                        <p className="about-label">
                            WHAT'S NEXT
                        </p>

                        <h2>What I'm Looking For</h2>

                        <p>
                            I'm looking for opportunities where I can grow
                            as a software developer, contribute to meaningful
                            projects, and continue learning from experienced
                            developers and teams.
                        </p>

                        <p>
                            I'm particularly interested in projects where I
                            can work on challenging technical problems while
                            continuing to develop as an engineer.
                        </p>

                        <Link
                            to="/contact"
                            className="about-link"
                        >
                            Get in Touch →
                        </Link>

                    </div>

                </section>

            </main>
        </div>
    )
}

export default About