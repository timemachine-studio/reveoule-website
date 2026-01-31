/**
 * Navigation Component
 * Clean navigation bar with slide-in mobile menu
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Featured', path: '/featured' },
    { name: 'Category', path: '/category' },
    { name: 'Contact', path: '/contact' },
    { name: 'Policy', path: '/policy' },
  ];

  return (
    <>
      <nav className="navigation">
        <div className="navigation__container container">
          {/* Mobile Menu Toggle - Left side on mobile */}
          <button
            className={`navigation__toggle ${isMobileMenuOpen ? 'navigation__toggle--open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="navigation__toggle-line"></span>
            <span className="navigation__toggle-line"></span>
            <span className="navigation__toggle-line"></span>
          </button>

          {/* Logo - Centered on mobile */}
          <Link to="/" className="navigation__logo">
            <img src="/Reveoule_full_logo.webp" alt="Rêveoulé" className="navigation__logo-img" />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="navigation__links">
            {navLinks.map((link) => (
              <li key={link.path} className="navigation__item">
                <Link
                  to={link.path}
                  className={`navigation__link ${location.pathname === link.path ? 'navigation__link--active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <div className="navigation__actions">
            <button className="navigation__globe">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2C12 2 8 6 8 12Z" />
                <path d="M21 15H3" />
                <path d="M21 9H3" />
              </svg>
            </button>
            <Link to="/signin" className="navigation__signin">Sign in</Link>
            <Link to="/join" className="navigation__join-btn">Join</Link>
            <Link to="/cart" className="navigation__cart" aria-label="Shopping Cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="navigation__backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="navigation__sidebar">
            <div className="navigation__sidebar-header">
              <Link to="/" className="navigation__sidebar-logo" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/Reveoule_full_logo.webp" alt="Rêveoulé" className="navigation__logo-img" />
              </Link>
            </div>

            <ul className="navigation__sidebar-links">
              {navLinks.map((link, index) => (
                <li
                  key={link.path}
                  className="navigation__sidebar-item"
                >
                  <Link
                    to={link.path}
                    className={`navigation__sidebar-link ${location.pathname === link.path ? 'navigation__sidebar-link--active' : ''
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sidebar Auth Buttons */}
            <div className="navigation__sidebar-actions">
              <Link
                to="/signin"
                className="navigation__sidebar-signin"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                to="/join"
                className="navigation__sidebar-join"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
