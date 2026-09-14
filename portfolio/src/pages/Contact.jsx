import { Link } from 'react-router-dom'
import { useForm } from '@formspree/react'
import './Contact.css'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

function Contact() {

    const [state, handleSubmit] = useForm('mppzgnno')
    return (
        <div className="portfolio">
            <Navbar />

            <main className="page">

                <PageHeader
                    className="header"
                    label="MY CONTACT"
                    title="Let's Work Together"
                    description="Have a project, game, or idea in mind? Feel free to get in touch. I'd be happy to connect and discuss how we can work together."
                />

                <section className="contact-content">

                    <div className="contact-info">

                        <div className="contact-card">
                            <p className="contact-label">EMAIL</p>

                            <h2>Get in Touch</h2>

                            <p>
                                I'm always open to discussing new projects, opportunities,
                                or ideas.
                            </p>

                            <a
                                href="mailto:changvincent55@gmail.com"
                                className="contact-email"
                            >
                                changvincent55@gmail.com
                            </a>

                            <a
                                href="tel:+31615177374"
                                className="contact-phone"
                            >
                                +31 6 15177374
                            </a>
                        </div>

                        <div className="contact-card">
                            <p className="contact-label">SOCIALS</p>

                            <h2>Find Me Online</h2>

                            <div className="contact-links">
                                <a
                                    href="https://github.com/VincentLChang"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/vincent-chang-05908a269/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>

                                <a
                                    href="https://lef9013.itch.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Itch.io
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="contact-form-card">
                        <p className="contact-label">SEND A MESSAGE</p>

                        <h2>Contact Me</h2>

                        {state.succeeded && (
                            <p className="contact-success">
                                Thanks! Your message has been sent.
                            </p>
                        )}

                        {state.errors && (
                            <p className="contact-error">
                                Something went wrong. Please try again.
                            </p>
                        )}

                        {!state.succeeded && (
                            <form onSubmit={handleSubmit}>

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="contact-submit"
                                    disabled={state.submitting}
                                >
                                    {state.submitting
                                        ? 'Sending...'
                                        : 'Send Message →'}
                                </button>

                            </form>
                        )}
                    </div>

                </section>

            </main>
        </div>
    )
}

export default Contact
