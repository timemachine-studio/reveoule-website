/**
 * AI Skin Advisor Component
 * Premium concierge-style skincare consultation
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import Card from '../ui/Card';
import './AISkinAdvisor.css';

const AISkinAdvisor = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);

  const questions = [
    {
      id: 'skinType',
      question: 'What is your primary skin type?',
      options: ['Normal', 'Dry', 'Oily', 'Combination', 'Sensitive']
    },
    {
      id: 'concerns',
      question: 'Select your primary skin concerns',
      options: ['Fine Lines', 'Dark Spots', 'Dehydration', 'Uneven Texture', 'Sensitivity'],
      multiple: true
    },
    {
      id: 'goals',
      question: 'What are your skincare goals?',
      options: ['Anti-Aging', 'Brightening', 'Hydration', 'Firming', 'Clarifying']
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendation();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  const generateRecommendation = () => {
    // Simulated AI recommendation based on answers
    const recommendations = {
      products: [
        'Radiance Renewal Serum',
        'Velvet Touch Moisturizer',
        'Luminous Eye Concentrate'
      ],
      routine: [
        { step: 'Cleanse', product: 'Pure Essence Cleanser', time: 'Morning & Evening' },
        { step: 'Treat', product: 'Radiance Renewal Serum', time: 'Morning & Evening' },
        { step: 'Moisturize', product: 'Velvet Touch Moisturizer', time: 'Morning & Evening' },
        { step: 'Eye Care', product: 'Luminous Eye Concentrate', time: 'Evening' }
      ],
      rationale: 'Based on your skin profile, this regimen emphasizes hydration balance and targeted renewal for optimal results. The selected formulations work synergistically to address your concerns while maintaining skin barrier integrity.'
    };

    setRecommendation(recommendations);
  };

  return (
    <section className="ai-advisor">
      <div className="ai-advisor__container container">
        <motion.div
          className="ai-advisor__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="ai-advisor__eyebrow">Personalized Guidance</span>
          <h2 className="ai-advisor__title">AI Skin Advisor</h2>
          <p className="ai-advisor__description">
            Receive personalized skincare recommendations based on your unique skin profile.
            Our advanced algorithm analyzes your responses to create a tailored regimen.
          </p>
        </motion.div>

        <div className="ai-advisor__content">
          <AnimatePresence mode="wait">
            {!recommendation ? (
              <motion.div
                key="questionnaire"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Card variant="beige" hoverable={false}>
                  <div className="ai-advisor__questionnaire">
                    {/* Progress Bar */}
                    <div className="ai-advisor__progress">
                      <div className="ai-advisor__progress-bar">
                        <motion.div
                          className="ai-advisor__progress-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <span className="ai-advisor__progress-text">
                        Step {currentStep + 1} of {questions.length}
                      </span>
                    </div>

                    {/* Question */}
                    <div className="ai-advisor__question">
                      <h3 className="ai-advisor__question-text">
                        {questions[currentStep].question}
                      </h3>

                      <div className="ai-advisor__options">
                        {questions[currentStep].options.map((option) => (
                          <button
                            key={option}
                            className={`ai-advisor__option ${
                              answers[questions[currentStep].id] === option
                                ? 'ai-advisor__option--selected'
                                : ''
                            }`}
                            onClick={() => handleAnswer(questions[currentStep].id, option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="ai-advisor__navigation">
                      {currentStep > 0 && (
                        <Button variant="tertiary" size="medium" onClick={handleBack}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="primary"
                        size="medium"
                        onClick={handleNext}
                        disabled={!answers[questions[currentStep].id]}
                      >
                        {currentStep < questions.length - 1 ? 'Next' : 'Get Recommendation'}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card variant="white" hoverable={false}>
                  <div className="ai-advisor__results">
                    <h3 className="ai-advisor__results-title">Your Personalized Regimen</h3>

                    <div className="ai-advisor__rationale">
                      <p>{recommendation.rationale}</p>
                    </div>

                    <div className="ai-advisor__routine">
                      <h4 className="ai-advisor__routine-title">Recommended Routine</h4>
                      <div className="ai-advisor__routine-steps">
                        {recommendation.routine.map((item, index) => (
                          <div key={index} className="ai-advisor__routine-step">
                            <div className="ai-advisor__routine-number">{index + 1}</div>
                            <div className="ai-advisor__routine-details">
                              <span className="ai-advisor__routine-step-name">{item.step}</span>
                              <span className="ai-advisor__routine-product">{item.product}</span>
                              <span className="ai-advisor__routine-time">{item.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="ai-advisor__actions">
                      <Button variant="primary" size="large" href="/products">
                        View Products
                      </Button>
                      <Button variant="secondary" size="large" onClick={handleReset}>
                        Start Over
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AISkinAdvisor;
