import { useState } from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

import DTHicon from '../assets/DTHicon.jpg'
import HvAicon from '../assets/HvAicon.jpg'


/* #region Experience */

function ExperienceStory({ paragraphs }) {

    const [expanded, setExpanded] = useState(false)

    return (
        <div
            className={`experience-story ${expanded ? 'expanded' : ''}`}
            onClick={() => setExpanded(!expanded)}
        >

            <div className="experience-story-content">

                {paragraphs.map((paragraph, index) => (
                    <p key={index}>
                        {paragraph}
                    </p>
                ))}

            </div>


            <div className="experience-story-footer">

                <span>
                    {expanded ? 'Show less' : 'Read more'}
                </span>

                <span className="experience-story-toggle">
                    {expanded ? '↑' : '↓'}
                </span>

            </div>

        </div>
    )
}

const experiences = [
    {
        date: 'Feb 26 — Jul 26',
        role: 'Backend Developer & Junior Tech Educator',
        company: 'deTechHelden B.V.',
        logo: DTHicon,

        story: [
            `During my time at deTechHelden, I worked on the backend architecture of an educational platform. I was responsible for building and improving backend functionality using Node.js and JavaScript. I worked with AWS Lambda, EventBridge, AWS SAM, and MongoDB to create an event-driven serverless architecture.`,

            `Besides the technical side of the internship, I also worked as a tech educator. I helped primary school students learn about programming and technology and had to adapt the way I explained technical concepts depending on the student.`,

            `This experience taught me a lot about designing backend systems and thinking about architecture rather than only individual pieces of code. I learned how serverless systems can be structured and how different AWS services can work together.`,

            `I also learned a lot about communication. Explaining programming concepts to children forced me to break complicated ideas down into simple and understandable steps. This also improved the way I communicate technical concepts with other developers.`,
        ],
    },

    {
        date: 'Sep 25 — Feb 26',
        role: 'Student Assistant',
        company: 'Amsterdam University of Applied Sciences',
        logo: HvAicon,

        story: [
            `As a student assistant, I supported second-year IT students with their projects and technical skills. I helped students understand problems they were encountering and guided them towards solutions rather than simply solving the problems for them.`,

            `I mainly worked with Git and Unity and provided feedback on coursework and technical projects.`,

            `This experience taught me how different people approach technical problems in completely different ways. I learned that being able to solve a problem yourself is very different from being able to explain that solution to someone else.`,

            `It also improved my communication and mentoring skills and made me more comfortable discussing technical concepts with other people.`,
        ],
    },

    {
        date: 'Sep 24 — Feb 25',
        role: 'Game Developer',
        company: 'FakeFirm Games — Startup',
        logo: null,

        story: [
            `At FakeFirm Games, I worked on game development using Unity and C#. I implemented and refined gameplay mechanics and modified existing functionality based on client requirements.`,

            `A large part of the work involved debugging existing systems, figuring out why something was not behaving as expected, and making changes without breaking other parts of the game.`,

            `This experience taught me a lot about working with an existing codebase. Instead of starting everything from scratch, I had to understand how systems that someone else had created worked before making changes to them.`,

            `I also learned how important debugging and iteration are in game development. A feature can work technically while still not feeling right, so testing and refining the implementation became an important part of my workflow.`,
        ],
    },
]
/* #endregion */


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

                        <h2>
                            Hi, I'm Vincent.
                        </h2>

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

                        <h2>
                            What I Enjoy
                        </h2>

                        <ul className="about-interests">

                            <li>
                                Building Software
                            </li>

                            <li>
                                Game Development
                            </li>

                            <li>
                                Interactive Experiences
                            </li>

                            <li>
                                Learning New Technologies
                            </li>

                            <li>
                                Solving Technical Problems
                            </li>

                        </ul>

                    </div>

                </section>


                {/* Experience */}

                <section className="experience-section">

                    <div className="experience-header">

                        <p className="hero-label">
                            EXPERIENCE
                        </p>

                        <h2>
                            My Experience
                        </h2>

                        <p>
                            My professional experience across backend development,
                            education, and game development.
                        </p>

                    </div>


                    <div className="experience-list">

                        {experiences.map((experience) => (

                            <article
                                className="experience-card"
                                key={`${experience.company}-${experience.date}`}
                            >

                                <div className="experience-sidebar">

                                    <div className="experience-date">
                                        {experience.date}
                                    </div>


                                    {experience.logo && (

                                        <div className="experience-logo">

                                            <img
                                                src={experience.logo}
                                                alt={`${experience.company} logo`}
                                            />

                                        </div>

                                    )}

                                </div>

                                <div className="experience-info">

                                    <h3>
                                        {experience.role}
                                    </h3>

                                    <p className="experience-company">
                                        {experience.company}
                                    </p>

                                    <ExperienceStory
                                        paragraphs={experience.story}
                                    />

                                </div>

                            </article>

                        ))}

                    </div>

                </section>


                {/* Education */}

                <section className="education-section">

                    <div className="education-header">

                        <p className="hero-label">
                            EDUCATION
                        </p>

                        <h2>
                            My Education
                        </h2>

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

                        <h2>
                            Languages
                        </h2>

                        <ul className="about-interests">

                            <li>
                                German — Native
                            </li>

                            <li>
                                Dutch — C1
                            </li>

                            <li>
                                English — C1
                            </li>

                        </ul>

                    </div>

                </section>


                {/* What I'm Looking For */}

                <section className="about-goals">

                    <div className="about-card">

                        <p className="about-label">
                            WHAT'S NEXT
                        </p>

                        <h2>
                            What I'm Looking For
                        </h2>

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