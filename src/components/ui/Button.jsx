/**
 * Button Component
 * Luxury brand button with primary and secondary variants
 * Follows strict luxury design guidelines
 */

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
  type = 'button',
  ...props
}) => {
  const baseClass = 'luxury-button';
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${size} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...props}
      >
        <span className="luxury-button__text">{children}</span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
      type={type}
      {...props}
    >
      <span className="luxury-button__text">{children}</span>
    </button>
  );
};

export default Button;
