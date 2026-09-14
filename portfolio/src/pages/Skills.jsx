import { useState } from 'react'
import './Skills.css'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

function Skills() {

    const skillGroups = [
        {
            category: 'Web Development',
            description:
                'Technologies I use to build websites, applications, and interactive web experiences.',
            skills: ['JavaScript', 'HTML', 'CSS', 'JSX', 'Node.js', 'PHP', 'React']
        },
        {
            category: 'Databases',
            description:
                'Technologies I use to store, manage, and work with application data.',
            skills: ['MySQL', 'MongoDB', 'NoSQL']
        },
        {
            category: 'Cloud & DevOps',
            description:
                'Tools and platforms I use for deployment, infrastructure, and development environments.',
            skills: ['AWS', 'Docker']
        },
        {
            category: 'Game Development',
            description:
                'I use these technologies to create games and interactive experiences.',
            skills: ['Unity', 'C#', 'Java']
        },
        {
            category: 'Hardware & Embedded',
            description:
                'Tools I use to work with electronics, microcontrollers, and physical computing projects.',
            skills: ['Arduino IDE', 'Fritzing']
        },
        {
            category: 'Development Tools',
            description:
                'Tools I use to develop, design, and manage my projects.',
            skills: ['Visual Studio', 'Visual Studio Code', 'Git', 'Figma']
        },
        {
            category: 'Development Methods',
            description: 'Methods I use to organize development, collaborate with teams, and manage projects.',
            skills: ['Agile', 'Scrum']
        }
    ]

    const workItems = [
        {
            title: 'Problem Solving',
            description:
                'I analyze problems, break them down into smaller parts, and research effective solutions while considering code quality, performance, and usability.'
        },
        {
            title: 'Planning',
            description:
                'I break projects into manageable tasks, prioritize my work, and organize development towards clear goals.'
        },
        {
            title: 'Agile Development',
            description:
                'I use Agile and Scrum principles to organize development, break work into manageable tasks, and improve projects iteratively.'
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
                'I am always looking to expand my knowledge and adapt to new technologies, tools, and approaches when working on different projects.'
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
                <PageHeader
                    className="header"
                    label="WHAT I USE"
                    title="Skills"
                    description="The technologies, tools, and skills I use to create games, websites, and interactive experiences."
                />

                <section className="skills-grid">
                    {skillGroups.map((group) => (
                        <article className="skill-card" key={group.category}>
                            <div className="skill-info">
                                <p className="skill-meta">
                                    SKILLSET
                                </p>

                                <h2>{group.category}</h2>

                                <p>
                                    {group.description}
                                </p>

                                <div className="skill-tags">
                                    {group.skills.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="how-i-work">

                    <div className="how-i-work-header">
                        <p className="hero-label">
                            MY APPROACH
                        </p>

                        <h2>How I Work</h2>

                        <p>
                            The approach and practices I use when working on projects.
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

                        <div className="work-track" key={currentIndex}>

                            <article className="work-card">
                                <div className="work-card-title">
                                    <span className="work-number">
                                        {String(firstIndex + 1).padStart(2, '0')}
                                    </span>

                                    <h3>{workItems[firstIndex].title}</h3>
                                </div>

                                <p>{workItems[firstIndex].description}</p>
                            </article>

                            <article className="work-card">
                                <div className="work-card-title">
                                    <span className="work-number">
                                        {String(secondIndex + 1).padStart(2, '0')}
                                    </span>

                                    <h3>{workItems[secondIndex].title}</h3>
                                </div>

                                <p>{workItems[secondIndex].description}</p>
                            </article>

                            <article className="work-card">
                                <div className="work-card-title">
                                    <span className="work-number">
                                        {String(thirdIndex + 1).padStart(2, '0')}
                                    </span>

                                    <h3>{workItems[thirdIndex].title}</h3>
                                </div>

                                <p>{workItems[thirdIndex].description}</p>
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
                                className={`carousel-dot ${index === currentIndex ? 'active' : ''
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