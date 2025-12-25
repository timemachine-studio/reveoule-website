/**
 * Affiliate Program Page
 */

import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import './Affiliate.css';

const Affiliate = () => {
  return (
    <div className="affiliate-page">
      <section className="affiliate-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Join Our Affiliate Program</h1>
            <p>Partner with Rêveoulé and earn exclusive commissions by sharing our luxury skincare products.</p>
            <div className="affiliate-benefits">
              <div className="benefit">
                <h3>Up to 20% Commission</h3>
                <p>Earn competitive commissions on every sale</p>
              </div>
              <div className="benefit">
                <h3>Exclusive Resources</h3>
                <p>Access premium marketing materials</p>
              </div>
              <div className="benefit">
                <h3>Dedicated Support</h3>
                <p>Personal account manager for partners</p>
              </div>
            </div>
            <Button variant="primary" size="large">Apply Now</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Affiliate;
