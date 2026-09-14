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
                    description="I'm a developer interested in creating games, applications, and interactive experiences."
                />


                {/* Introduction */}

                <section className="about-introduction">

                    <div className="about-card about-intro-card">

                        <p className="about-label">
                            WHO I AM
                        </p>

                        <h2>Hi, I'm Vincent.</h2>

                        <p>
                            I'm a developer who enjoys building interactive
                            experiences and solving technical problems.
                        </p>

                        <p>
                            I enjoy working on projects where I can combine
                            creativity and technology, while continuously
                            learning and improving my skills.
                        </p>

                    </div>

                    <div className="about-card about-interests-card">

                        <p className="about-label">
                            MY INTERESTS
                        </p>

                        <h2>What I Enjoy</h2>

                        <ul className="about-interests">
                            <li>Game Development</li>
                            <li>Web Development</li>
                            <li>Interactive Experiences</li>
                            <li>Problem Solving</li>
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
                            My educational background and the knowledge
                            I've developed along the way.
                        </p>

                    </div>

                    <div className="education-list">

                        <article className="education-card">

                            <div className="education-year">
                                202X — Present
                            </div>

                            <div className="education-info">

                                <h3>
                                    Your Current Education
                                </h3>

                                <p className="education-school">
                                    Your School / University
                                </p>

                                <p>
                                    Add a short description of your study,
                                    specialization, or the subjects you're
                                    focusing on.
                                </p>

                            </div>

                        </article>


                        <article className="education-card">

                            <div className="education-year">
                                202X — 202X
                            </div>

                            <div className="education-info">

                                <h3>
                                    Previous Education
                                </h3>

                                <p className="education-school">
                                    Your School
                                </p>

                                <p>
                                    Add a short description of your previous
                                    education or relevant achievements.
                                </p>

                            </div>

                        </article>

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
                            I'm interested in opportunities where I can
                            continue developing my skills, contribute to
                            meaningful projects, and learn from others.
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

