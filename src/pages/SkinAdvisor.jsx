/**
 * Skin Advisor Page
 * Dedicated AI consultation page
 */

import { motion } from 'framer-motion';
import AISkinAdvisor from '../components/sections/AISkinAdvisor';
import './SkinAdvisor.css';

const SkinAdvisor = () => {
  return (
    <main className="skin-advisor-page">
      {/* Hero Section */}
      <section className="skin-advisor-hero">
        <div className="container">
          <motion.div
            className="skin-advisor-hero__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="skin-advisor-hero__eyebrow">Personalized Consultation</span>
            <h1 className="skin-advisor-hero__title">AI Skin Advisor</h1>
            <p className="skin-advisor-hero__description">
              Receive precision-tailored skincare recommendations based on your unique profile.
              Our advanced algorithm analyzes your skin type, concerns, and goals to create
              a customized regimen designed for optimal results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Advisor Component */}
      <AISkinAdvisor />

      {/* Information Section */}
      <section className="skin-advisor-info">
        <div className="container">
          <motion.div
            className="skin-advisor-info__content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="skin-advisor-info__title">How It Works</h2>
            <div className="skin-advisor-info__grid">
              <div className="skin-advisor-info__step">
                <div className="skin-advisor-info__number">1</div>
                <h3 className="skin-advisor-info__step-title">Share Your Profile</h3>
                <p className="skin-advisor-info__step-text">
                  Answer targeted questions about your skin type, concerns, and goals.
                </p>
              </div>
              <div className="skin-advisor-info__step">
                <div className="skin-advisor-info__number">2</div>
                <h3 className="skin-advisor-info__step-title">AI Analysis</h3>
                <p className="skin-advisor-info__step-text">
                  Our algorithm processes your responses using evidence-based skincare principles.
                </p>
              </div>
              <div className="skin-advisor-info__step">
                <div className="skin-advisor-info__number">3</div>
                <h3 className="skin-advisor-info__step-title">Custom Regimen</h3>
                <p className="skin-advisor-info__step-text">
                  Receive a personalized routine with product recommendations and usage guidance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SkinAdvisor;
