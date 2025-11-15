/**
 * Hero Section
 * Premium editorial hero with luxury aesthetics
 */

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.2
          }}
        >
          <motion.span
            className="hero__eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ultra-Luxury Skincare
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Rêveoulé
            <span className="hero__title-accent">Where Science Meets Elegance</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Experience the pinnacle of skincare innovation. Our meticulously crafted formulations
            combine cutting-edge science with timeless luxury, delivering transformative results
            that honor your skin's natural beauty.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button variant="primary" size="large" href="/products">
              Explore Collection
            </Button>
            <Button variant="secondary" size="large" href="/skin-advisor">
              AI Skin Advisor
            </Button>
          </motion.div>

          <motion.div
            className="hero__features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="hero__feature">
              <span className="hero__feature-label">Clinically Proven</span>
            </div>
            <div className="hero__feature">
              <span className="hero__feature-label">Cruelty Free</span>
            </div>
            <div className="hero__feature">
              <span className="hero__feature-label">Sustainable</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.3
          }}
        >
          <div className="hero__image-wrapper">
            <div className="hero__image-placeholder">
              {/* Placeholder for hero image */}
              <div className="hero__gradient"></div>
              <div className="hero__image-content">
                <span className="hero__image-text">Premium Skincare</span>
              </div>
            </div>
          </div>

          {/* Floating accent elements */}
          <motion.div
            className="hero__accent hero__accent--1"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="hero__accent hero__accent--2"
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="hero__scroll-line"
          animate={{ height: ['0%', '100%'] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <span className="hero__scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
