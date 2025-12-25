/**
 * Plans Page
 * Subscription and membership plans
 */

import { motion } from 'framer-motion';
import './Plans.css';

const Plans = () => {
  return (
    <div className="plans-page">
      <section className="plans-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Membership Plans</h1>
            <p>Experience exclusive benefits and personalized luxury skincare.</p>
          </motion.div>
        </div>
      </section>

      <section className="plans-content">
        <div className="container">
          <p>Plans coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default Plans;
