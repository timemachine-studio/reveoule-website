/**
 * Testimonials Section
 * Medical-grade credibility with structured presentation
 */

import { motion } from 'framer-motion';
import Card from '../ui/Card';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      title: 'Board-Certified Dermatologist',
      content: 'Rêveoulé represents a significant advancement in luxury skincare formulation. The peptide complex demonstrates measurable efficacy in clinical settings, delivering consistent results for patients seeking evidence-based solutions.',
      results: ['95% satisfaction', '12-week study', 'Clinical validation']
    },
    {
      id: 2,
      name: 'Catherine Reynolds',
      title: 'Verified Customer',
      age: '52',
      content: 'After six weeks of consistent use, I observed visible improvement in skin texture and luminosity. The formulations are elegant, absorb efficiently, and deliver on their promises without irritation.',
      results: ['Visible results', '6 weeks', 'No sensitivity']
    },
    {
      id: 3,
      name: 'Dr. James Park',
      title: 'Cosmetic Chemist',
      content: 'The precision in formulation is exceptional. Rêveoulé combines cutting-edge actives with stability-focused delivery systems, ensuring optimal bioavailability and sustained efficacy over time.',
      results: ['Advanced formulation', 'Stable actives', 'Proven efficacy']
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__container container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonials__eyebrow">Clinical Validation</span>
          <h2 className="testimonials__title">Evidence-Based Results</h2>
          <p className="testimonials__description">
            Trusted by dermatologists and discerning clients worldwide.
            Our formulations deliver measurable outcomes backed by clinical research.
          </p>
        </motion.div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <Card variant="white" hoverable={false}>
                <div className="testimonial-card">
                  <div className="testimonial-card__quote">
                    <svg className="testimonial-card__quote-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M10 18C10 14.6863 12.6863 12 16 12V8C10.4772 8 6 12.4772 6 18C6 23.5228 10.4772 28 16 28V24C12.6863 24 10 21.3137 10 18Z" fill="currentColor"/>
                      <path d="M22 18C22 14.6863 24.6863 12 28 12V8C22.4772 8 18 12.4772 18 18C18 23.5228 22.4772 28 28 28V24C24.6863 24 22 21.3137 22 18Z" fill="currentColor"/>
                    </svg>
                  </div>

                  <blockquote className="testimonial-card__content">
                    {testimonial.content}
                  </blockquote>

                  <div className="testimonial-card__results">
                    {testimonial.results.map((result, idx) => (
                      <span key={idx} className="testimonial-card__result">
                        {result}
                      </span>
                    ))}
                  </div>

                  <div className="testimonial-card__author">
                    <div className="testimonial-card__author-info">
                      <cite className="testimonial-card__name">{testimonial.name}</cite>
                      <span className="testimonial-card__title">
                        {testimonial.title}
                        {testimonial.age && `, Age ${testimonial.age}`}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="testimonials__stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="testimonials__stat">
            <span className="testimonials__stat-value">98%</span>
            <span className="testimonials__stat-label">Client Satisfaction</span>
          </div>
          <div className="testimonials__stat">
            <span className="testimonials__stat-value">15+</span>
            <span className="testimonials__stat-label">Years Research</span>
          </div>
          <div className="testimonials__stat">
            <span className="testimonials__stat-value">50K+</span>
            <span className="testimonials__stat-label">Trusted Clients</span>
          </div>
          <div className="testimonials__stat">
            <span className="testimonials__stat-value">100%</span>
            <span className="testimonials__stat-label">Cruelty Free</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
