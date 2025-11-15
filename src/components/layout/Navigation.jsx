/**
 * Navigation Component
 * Premium navigation bar with scroll behavior
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'AI Skin Advisor', path: '/skin-advisor' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="navigation__container container">
        {/* Logo */}
        <Link to="/" className="navigation__logo">
          <span className="navigation__logo-text">Rêveoulé</span>
          <span className="navigation__logo-tagline">Skincare & Beauty</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navigation__links">
          {navLinks.map((link) => (
            <li key={link.path} className="navigation__item">
              <Link
                to={link.path}
                className={`navigation__link ${
                  location.pathname === link.path ? 'navigation__link--active' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className={`navigation__toggle ${isMobileMenuOpen ? 'navigation__toggle--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navigation__toggle-line"></span>
          <span className="navigation__toggle-line"></span>
          <span className="navigation__toggle-line"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="navigation__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <ul className="navigation__mobile-links">
              {navLinks.map((link) => (
                <motion.li
                  key={link.path}
                  className="navigation__mobile-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`navigation__mobile-link ${
                      location.pathname === link.path ? 'navigation__mobile-link--active' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
