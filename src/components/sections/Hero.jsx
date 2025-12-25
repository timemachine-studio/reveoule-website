/**
 * Hero Section
 * Fiverr Pro-inspired card-based hero with tabs
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('ai-advisor');
  const [skinType, setSkinType] = useState('');
  const [concerns, setConcerns] = useState('');
  const [goals, setGoals] = useState('');
  const [aboutYourself, setAboutYourself] = useState('');

  const tabs = [
    { id: 'ai-advisor', label: 'AI Advisor' },
    { id: 'search-product', label: 'Search a product' },
    { id: 'affiliate', label: 'Affiliate program' },
  ];

  const skinTypes = [
    'Normal',
    'Dry',
    'Oily',
    'Combination',
    'Sensitive'
  ];

  const skinConcerns = [
    'Fine Lines & Wrinkles',
    'Dark Spots',
    'Acne & Blemishes',
    'Dehydration',
    'Uneven Texture',
    'Sensitivity & Redness'
  ];

  const skinGoals = [
    'Anti-Aging',
    'Brightening',
    'Deep Hydration',
    'Firming & Lifting',
    'Clarifying & Purifying',
    'Calming & Soothing'
  ];

  const handleAIAdvisorSubmit = () => {
    // This will be connected to your AI backend
    console.log({
      skinType,
      concerns,
      goals,
      aboutYourself
    });
    // Navigate to results or show modal with recommendations
  };

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__gradient"></div>
      </div>

      <div className="hero__container container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A premium skincare solution that delivers trusted beauty
          </motion.h1>

          {/* Tab Buttons */}
          <motion.div
            className="hero__tabs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`hero__tab ${activeTab === tab.id ? 'hero__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Card Container */}
          <motion.div
            className="hero__card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {/* AI Advisor Tab */}
              {activeTab === 'ai-advisor' && (
                <motion.div
                  key="ai-advisor"
                  className="hero__tab-content"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="hero__advisor">
                    <div className="hero__advisor-options">
                      {/* Skin Type Selection */}
                      <div className="hero__option-group">
                        <label className="hero__option-label">Skin Type</label>
                        <div className="hero__option-buttons">
                          {skinTypes.map((type) => (
                            <button
                              key={type}
                              className={`hero__option-btn ${skinType === type ? 'hero__option-btn--selected' : ''}`}
                              onClick={() => setSkinType(type)}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Skin Concerns */}
                      <div className="hero__option-group">
                        <label className="hero__option-label">Primary Concern</label>
                        <div className="hero__option-buttons">
                          {skinConcerns.map((concern) => (
                            <button
                              key={concern}
                              className={`hero__option-btn ${concerns === concern ? 'hero__option-btn--selected' : ''}`}
                              onClick={() => setConcerns(concern)}
                            >
                              {concern}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Skin Goals */}
                      <div className="hero__option-group">
                        <label className="hero__option-label">Skincare Goal</label>
                        <div className="hero__option-buttons">
                          {skinGoals.map((goal) => (
                            <button
                              key={goal}
                              className={`hero__option-btn ${goals === goal ? 'hero__option-btn--selected' : ''}`}
                              onClick={() => setGoals(goal)}
                            >
                              {goal}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Tell About Yourself */}
                      <div className="hero__option-group">
                        <label className="hero__option-label">Tell about yourself</label>
                        <textarea
                          className="hero__textarea"
                          placeholder="Share any additional details about your skin, lifestyle, or specific concerns..."
                          value={aboutYourself}
                          onChange={(e) => setAboutYourself(e.target.value)}
                          rows="4"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        className="hero__submit-btn"
                        onClick={handleAIAdvisorSubmit}
                        disabled={!skinType || !concerns || !goals}
                      >
                        Get AI Recommendations
                      </button>
                    </div>

                    {/* Powered by TimeMachine */}
                    <div className="hero__branding">
                      <span className="hero__branding-text">Powered by</span>
                      <span className="hero__branding-logo">TimeMachine</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Search Product Tab */}
              {activeTab === 'search-product' && (
                <motion.div
                  key="search-product"
                  className="hero__tab-content"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="hero__search">
                    <div className="hero__search-container">
                      <svg className="hero__search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                        <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <input
                        type="text"
                        className="hero__search-input"
                        placeholder="Search for serums, moisturizers, cleansers..."
                      />
                      <button className="hero__search-btn">Search</button>
                    </div>

                    <div className="hero__search-suggestions">
                      <span className="hero__suggestion-label">Popular:</span>
                      <button className="hero__suggestion">Hyaluronic Acid Serum</button>
                      <button className="hero__suggestion">Vitamin C</button>
                      <button className="hero__suggestion">Retinol</button>
                      <button className="hero__suggestion">Anti-Aging</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Affiliate Program Tab */}
              {activeTab === 'affiliate' && (
                <motion.div
                  key="affiliate"
                  className="hero__tab-content"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="hero__affiliate">
                    <div className="hero__affiliate-content">
                      <h3 className="hero__affiliate-title">Join Our Affiliate Program</h3>
                      <p className="hero__affiliate-description">
                        Partner with Rêveoulé and earn exclusive commissions by sharing our luxury skincare products.
                      </p>

                      <div className="hero__affiliate-benefits">
                        <div className="hero__benefit">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Up to 20% commission</span>
                        </div>
                        <div className="hero__benefit">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Exclusive partner resources</span>
                        </div>
                        <div className="hero__benefit">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Dedicated support team</span>
                        </div>
                      </div>

                      <button className="hero__affiliate-btn">Apply Now</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Brands Section */}
          <motion.div
            className="hero__brands"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="hero__brands-label">Trusted by beauty enthusiasts worldwide</span>
          </motion.div>
        </motion.div>

        {/* Visual Side - Images */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="hero__visual-grid">
            <div className="hero__visual-card hero__visual-card--1">
              <div className="hero__visual-placeholder">
                <span className="hero__visual-tag">Premium</span>
              </div>
            </div>
            <div className="hero__visual-card hero__visual-card--2">
              <div className="hero__visual-placeholder">
                <span className="hero__visual-tag">Luxury</span>
              </div>
            </div>
            <div className="hero__visual-card hero__visual-card--3">
              <div className="hero__visual-placeholder">
                <span className="hero__visual-tag">Elegance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
