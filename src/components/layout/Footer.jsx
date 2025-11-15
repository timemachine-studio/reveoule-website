/**
 * Footer Component
 * Luxury footer with brand information and links
 */

import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Products', path: '/products' },
      { name: 'Bestsellers', path: '/products?filter=bestsellers' },
      { name: 'New Arrivals', path: '/products?filter=new' },
      { name: 'Collections', path: '/products?filter=collections' },
    ],
    help: [
      { name: 'AI Skin Advisor', path: '/skin-advisor' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'FAQ', path: '/faq' },
    ],
    company: [
      { name: 'About Rêveoulé', path: '/about' },
      { name: 'Our Philosophy', path: '/philosophy' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Accessibility', path: '/accessibility' },
    ],
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* Brand Section */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-text">Rêveoulé</span>
            <span className="footer__logo-tagline">Skincare & Beauty Inc.</span>
          </div>
          <p className="footer__description">
            Ultra-luxury skincare crafted with precision and elegance.
            Experience the pinnacle of beauty innovation.
          </p>
          <div className="footer__social">
            <a href="https://instagram.com" className="footer__social-link" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 9.38 16.28 10.07 15.97 10.75C15.65 11.42 15.23 12.06 14.69 12.6C13.96 13.33 13.03 13.86 12 14.14C10.97 14.42 9.88 14.42 8.85 14.14C7.82 13.86 6.89 13.33 6.16 12.6C5.62 12.06 5.2 11.42 4.88 10.75C4.57 10.07 4.36 9.38 4.21 8.8H6.87C7.13 9.47 7.54 10.07 8.08 10.54C8.87 11.23 9.91 11.61 11 11.61C12.09 11.61 13.13 11.23 13.92 10.54C14.46 10.07 14.87 9.47 15.13 8.8H16.64Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://facebook.com" className="footer__social-link" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.891H13.563V21.878C18.343 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="footer__social-link" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.2845C14.0247 3.61182 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer__links">
          <div className="footer__column">
            <h4 className="footer__column-title">Shop</h4>
            <ul className="footer__list">
              {footerLinks.shop.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Help</h4>
            <ul className="footer__list">
              {footerLinks.help.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Company</h4>
            <ul className="footer__list">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Legal</h4>
            <ul className="footer__list">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__container container">
          <p className="footer__copyright">
            © {currentYear} Rêveoulé Skincare & Beauty Inc. All rights reserved.
          </p>
          <p className="footer__crafted">
            Crafted with precision and elegance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
