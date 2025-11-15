/**
 * Card Component
 * Luxury product/content card with minimal design
 */

import { motion } from 'framer-motion';
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
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={hoverable ? { y: -4 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
