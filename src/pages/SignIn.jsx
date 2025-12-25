/**
 * Sign In Page
 */

import { motion } from 'framer-motion';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-page">
      <section className="signin-container">
        <div className="container">
          <motion.div
            className="signin-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Sign In</h1>
            <p>Welcome back to Rêveoulé</p>
            <form className="signin-form">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <button type="submit" className="signin-btn">Sign In</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
