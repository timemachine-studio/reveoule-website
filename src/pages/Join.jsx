/**
 * Join Page
 */

import { motion } from 'framer-motion';
import './Join.css';

const Join = () => {
  return (
    <div className="join-page">
      <section className="join-container">
        <div className="container">
          <motion.div
            className="join-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Join Rêveoulé</h1>
            <p>Create your account and start your luxury skincare journey</p>
            <form className="join-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <button type="submit" className="join-btn">Create Account</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Join;
