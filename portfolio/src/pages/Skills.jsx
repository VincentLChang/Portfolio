import { useState } from 'react'
import './Skills.css'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

function Skills() {

    const skillGroups = [
        {
            category: 'Backend Development',
            description:
                'Technologies I use to build backend applications, services, and server-side systems.',
            skills: ['Node.js', 'JavaScript']
        },
        {
            category: 'DevOps & Cloud',
            description:
                'Tools and technologies I use for cloud infrastructure, deployment, and development environments.',
            skills: ['AWS Lambda', 'Amazon EventBridge', 'AWS SAM', 'Docker']
        },
        {
            category: 'Frontend Development',
            description:
                'Technologies I use to build websites, applications, and interactive user interfaces.',
            skills: [ 'React', 'JSX', 'JavaScript', 'HTML', 'CSS']
        },
        {
            category: 'Game Development',
            description:
                'Technologies I use to create games, gameplay systems, and interactive experiences.',
            skills: ['Unity', 'C#']
        },
        {
            category: 'Databases',
            description:
                'Technologies I use to store, manage, and work with application data.',
            skills: ['MongoDB', 'SQL', 'MySQL', 'NoSQL']
        },
        {
            category: 'Development Tools & Methods',
            description:
                'Tools and practices I use to manage projects, collaborate with teams, and organize development.',
            skills: ['Git', 'GitHub', 'Visual Studio', 'Visual Studio Code', 'Agile', 'Scrum']
        }
    ]
    const workItems = [
        {
            title: 'Problem Solving',
            description:
                'I break technical problems into smaller parts, research possible solutions, and consider factors such as maintainability, performance, and usability before implementing a solution.'
        },
        {
            title: 'Planning',
            description:
                'I break projects into manageable tasks, prioritize my work, and organize development around clear goals and requirements.'
        },
        {
            title: 'Teamwork',
            description:
                'I enjoy collaborating with others, sharing ideas, communicating clearly, and contributing towards a shared goal.'
        },
        {
            title: 'Version Control',
            description:
                'I use Git to manage changes, keep projects organized, and collaborate effectively during development.'
        },
        {
            title: 'Iteration & Feedback',
            description:
                'I test ideas, gather feedback, identify areas for improvement, and continuously refine my work based on what I learn.'
        },
        {
            title: 'Learning & Adaptability',
            description:
                'I am comfortable working with unfamiliar technologies when a project requires them. I research new tools, experiment with different approaches, and apply what I learn to practical problems.'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const firstIndex = currentIndex
    const secondIndex = (currentIndex + 1) % workItems.length
    const thirdIndex = (currentIndex + 2) % workItems.length

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % workItems.length)
    }

    const previousSlide = () => {
        setCurrentIndex(
            (currentIndex - 1 + workItems.length) % workItems.length
        )
    }

    return (
        <div className="portfolio">
            <Navbar />

            <main className="page">

                {/* Page Header */}

                <PageHeader
                    className="header"
                    label="MY TOOLKIT"
                    title="Skills"
                    description="The technologies I use and the practices I follow when building software."
                />


                {/* Technical Skills */}

                <section className="skills-grid">

                    {skillGroups.map((group) => (
                        <article
                            className="skill-card"
                            key={group.category}
                        >
                            <div className="skill-info">

                                <p className="skill-meta">
                                    CORE SKILL
                                </p>

                                <h2>
                                    {group.category}
                                </h2>

                                <p>
                                    {group.description}
                                </p>

                                <div className="skill-tags">

                                    {group.skills.map((skill) => (
                                        <span key={skill}>
                                            {skill}
                                        </span>
                                    ))}

                                </div>

                            </div>
                        </article>
                    ))}

                </section>
                {/* Additional Technologies */}

                <section className="skills-grid additional-skills">

                    <article className="skill-card">

                        <div className="skill-info">

                            <p className="skill-meta">
                                FAMILIAR WITH
                            </p>

                            <h2>
                                Additional Technologies
                            </h2>

                            <p>
                                Technologies and tools I have encountered through
                                education and personal projects.
                            </p>

                            <div className="skill-tags">

                                <span>PHP</span>
                                <span>Java</span>
                                <span>Arduino IDE</span>
                                <span>Fritzing</span>
                                <span>Figma</span>

                            </div>

                        </div>

                    </article>

                </section>


                {/* How I Work */}

                <section className="how-i-work">

                    <div className="how-i-work-header">

                        <p className="hero-label">
                            MY APPROACH
                        </p>

                        <h2>
                            How I Work
                        </h2>

                        <p>
                            The approach and practices I use when working
                            on software projects.
                        </p>

                    </div>


                    <div className="work-carousel">

                        <button
                            className="carousel-button"
                            onClick={previousSlide}
                            aria-label="Previous"
                        >
                            ←
                        </button>


                        <div
                            className="work-track"
                            key={currentIndex}
                        >

                            <article className="work-card">

                                <div className="work-card-title">

                                    <span className="work-number">
                                        {String(firstIndex + 1).padStart(2, '0')}
                                    </span>

                                    <h3>
                                        {workItems[firstIndex].title}
                                    </h3>

                                </div>

                                <p>
                                    {workItems[firstIndex].description}
                                </p>

                            </article>


                            <article className="work-card">

                                <div className="work-card-title">

                                    <span className="work-number">
                                        {String(secondIndex + 1).padStart(2, '0')}
                                    </span>

                                    <h3>
                                        {workItems[secondIndex].title}
                                    </h3>

                                </div>

                                <p>
                                    {workItems[secondIndex].description}
                                </p>

                            </article>


                            <article className="work-card">

                                <div className="work-card-title">

                                    <span className="work-number">
                                        {String(thirdIndex + 1).padStart(2, '0')}
                                    </span>

                                    <h3>
                                        {workItems[thirdIndex].title}
                                    </h3>

                                </div>

                                <p>
                                    {workItems[thirdIndex].description}
                                </p>

                            </article>

                        </div>


                        <button
                            className="carousel-button"
                            onClick={nextSlide}
                            aria-label="Next"
                        >
                            →
                        </button>

                    </div>


                    <div className="carousel-dots">

                        {workItems.map((_, index) => (

                            <button
                                key={index}
                                className={`carousel-dot ${index === currentIndex
                                    ? 'active'
                                    : ''
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to item ${index + 1}`}
                            />

                        ))}

                    </div>

                </section>
            </main>
        </div>
    )
}

export default Skills
