/**
 * Contact Form Section
 * Contact form with email subscription above the footer
 */

import './ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact-form-section">
            <div className="contact-form-section__container container">
                <div className="contact-form-section__content">
                    <div className="contact-form-section__header">
                        <h2 className="contact-form-section__title">Get in Touch</h2>
                        <p className="contact-form-section__description">
                            Have questions about our products? We'd love to hear from you.
                        </p>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="contact-form__row">
                            <div className="contact-form__field">
                                <label className="contact-form__label" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="contact-form__input"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div className="contact-form__field">
                                <label className="contact-form__label" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="contact-form__input"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact-form__field">
                            <label className="contact-form__label" htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="contact-form__input"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div className="contact-form__field">
                            <label className="contact-form__label" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="contact-form__textarea"
                                placeholder="Tell us more..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="contact-form__submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
