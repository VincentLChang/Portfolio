import { Link } from 'react-router-dom'

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
            skills: ['Visual Studio', 'Visual Studio Code', 'Git', 'GitHub']
        },
        {
            category: 'Development Methods',
            description: 'Methods I use to organize development, collaborate with teams, and manage projects.',
            skills: ['Agile', 'Scrum']
        }
    ]

    return (
        <div className="portfolio">
            <header className="navbar">
                <Link to="/" className="logo">
                    Vincent Chang
                </Link>

                <nav>
                    <Link to="/">Home</Link>
                    <a href="/#about">About</a>
                    <Link to="/projects">Projects</Link>
                    <Link to="/skills">Skills</Link>
                    <a href="/#contact">Contact</a>
                </nav>

                <a href="/CV.pdf" className="cv-button">
                    Download CV
                </a>
            </header>

            <main className="skills-page">
                <section className="skills-header">
                    <p className="hero-label">WHAT I USE</p>

                    <h1>Skills</h1>

                    <p>
                        The technologies, tools, and skills I use to create
                        games, websites, and interactive experiences.
                    </p>
                </section>

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
            </main>
        </div>
    )
}

export default Skills