/**
 * Card Component
 * Luxury product/content card with minimal design
 */

import './Card.css';

const Card = ({
  children,
  variant = 'white',
  className = '',
  hoverable = true,
  ...props
}) => {
  const baseClass = 'luxury-card';
  const classes = `${baseClass} ${baseClass}--${variant} ${hoverable ? `${baseClass}--hoverable` : ''} ${className}`;

  return (
    <div
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
