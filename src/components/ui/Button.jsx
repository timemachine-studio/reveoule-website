/**
 * Button Component
 * Luxury brand button with primary and secondary variants
 * Follows strict luxury design guidelines
 */

import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  href,
  className = '',
  disabled = false,
  ariaLabel,
  ...props
}) => {
  const baseClass = 'luxury-button';
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${size} ${className}`;

  const MotionButton = motion.button;
  const MotionLink = motion.a;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1]
    }
  };

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
        {...props}
      >
        <span className="luxury-button__text">{children}</span>
      </MotionLink>
    );
  }

  return (
    <MotionButton
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
      {...motionProps}
      {...props}
    >
      <span className="luxury-button__text">{children}</span>
    </MotionButton>
  );
};

export default Button;
