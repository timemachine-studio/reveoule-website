/**
 * About Page
 * Brand story and philosophy
 */

import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './About.css';

const About = () => {
  const values = [
    {
      title: 'Scientific Excellence',
      description: 'Every formulation is backed by rigorous research and clinical validation, ensuring measurable results.'
    },
    {
      title: 'Sustainable Luxury',
      description: 'We combine premium quality with environmental responsibility, sourcing ethically and sustainably.'
    },
    {
      title: 'Timeless Elegance',
      description: 'Our products honor the art of skincare with refined aesthetics and exceptional sensorial experiences.'
    },
    {
      title: 'Proven Efficacy',
      description: 'Results-driven formulations that deliver visible improvements through advanced active ingredients.'
    }
  ];

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="about-hero__eyebrow">Our Story</span>
            <h1 className="about-hero__title">Rêveoulé</h1>
            <p className="about-hero__subtitle">Where Science Meets Timeless Beauty</p>
            <p className="about-hero__description">
              Founded on the principle that luxury skincare should deliver transformative results,
              Rêveoulé represents the intersection of cutting-edge science and refined elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about-philosophy">
        <div className="container">
          <motion.div
            className="about-philosophy__content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-philosophy__title">Our Philosophy</h2>
            <p className="about-philosophy__text">
              At Rêveoulé, we believe skincare is both an art and a science. Each product is
              meticulously crafted to honor your skin's natural intelligence while delivering
              precision-targeted solutions. We combine the finest ingredients with advanced
              delivery systems, creating formulations that respect your skin's delicate balance
              while achieving visible, lasting results.
            </p>
            <p className="about-philosophy__text">
              Our commitment extends beyond efficacy. Every aspect of the Rêveoulé experience—from
              formulation to packaging—reflects our dedication to sustainability, ethical sourcing,
              and timeless elegance. We create products that enhance not only your skin but also
              your daily ritual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <motion.div
            className="about-values__header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-values__title">Our Values</h2>
          </motion.div>

          <div className="about-values__grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card variant="white">
                  <div className="about-value">
                    <h3 className="about-value__title">{value.title}</h3>
                    <p className="about-value__description">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="about-cta__content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-cta__title">Experience Rêveoulé</h2>
            <p className="about-cta__description">
              Discover how precision formulation and timeless elegance can transform your skincare routine.
            </p>
            <div className="about-cta__actions">
              <Button variant="primary" size="large" href="/products">
                Explore Collection
              </Button>
              <Button variant="secondary" size="large" href="/contact">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
