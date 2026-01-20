/**
 * Contact Page
 * Luxury contact form and information
 */

import { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      title: 'Customer Service',
      details: ['Available Monday-Friday, 9AM-6PM EST', 'Email: service@reveoule.com', 'Phone: +1 (555) 123-4567']
    },
    {
      title: 'Press Inquiries',
      details: ['Email: press@reveoule.com', 'Response within 24 hours']
    },
    {
      title: 'Headquarters',
      details: ['Rêveoulé Beauty Inc.', '123 Luxury Avenue', 'New York, NY 10001']
    }
  ];

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero__content">
            <span className="contact-hero__eyebrow">Get in Touch</span>
            <h1 className="contact-hero__title">Contact Us</h1>
            <p className="contact-hero__description">
              We're here to assist with your skincare journey.
              Reach out with questions, concerns, or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-content__grid">
            {/* Contact Form */}
            <div>
              <Card variant="white" hoverable={false}>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2 className="contact-form__title">Send us a Message</h2>

                  {submitted && (
                    <div className="contact-form__success">
                      Thank you for your message. We will respond within 24 hours.
                    </div>
                  )}

                  <div className="contact-form__field">
                    <label htmlFor="name" className="contact-form__label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-form__input"
                      required
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="email" className="contact-form__label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-form__input"
                      required
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="subject" className="contact-form__label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="contact-form__input"
                      required
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="message" className="contact-form__label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-form__textarea"
                      rows="6"
                      required
                    />
                  </div>

                  <Button variant="primary" size="large" type="submit" className="contact-form__submit">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <Card key={index} variant="beige" hoverable={false}>
                  <div className="contact-info-card">
                    <h3 className="contact-info-card__title">{info.title}</h3>
                    <div className="contact-info-card__details">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="contact-info-card__detail">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
