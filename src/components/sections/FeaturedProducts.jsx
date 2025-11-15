/**
 * Featured Products Section
 * Luxury product showcase with elegant presentation
 */

import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Radiance Renewal Serum',
      category: 'Serum',
      description: 'Advanced peptide complex for visible skin transformation.',
      price: '$285',
      benefits: ['Brightening', 'Anti-Aging', 'Hydration']
    },
    {
      id: 2,
      name: 'Velvet Touch Moisturizer',
      category: 'Moisturizer',
      description: 'Ultra-luxe hydration with botanical ceramides.',
      price: '$245',
      benefits: ['Deep Hydration', 'Barrier Support', 'Smoothing']
    },
    {
      id: 3,
      name: 'Luminous Eye Concentrate',
      category: 'Eye Care',
      description: 'Precision-targeted treatment for delicate eye area.',
      price: '$195',
      benefits: ['Dark Circles', 'Fine Lines', 'Firmness']
    },
    {
      id: 4,
      name: 'Pure Essence Cleanser',
      category: 'Cleanser',
      description: 'Gentle yet effective clarifying treatment.',
      price: '$165',
      benefits: ['Deep Cleansing', 'pH Balance', 'Softening']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="featured-products">
      <div className="featured-products__container container">
        <motion.div
          className="featured-products__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="featured-products__eyebrow">Bestsellers</span>
          <h2 className="featured-products__title">Featured Collection</h2>
          <p className="featured-products__description">
            Our most coveted formulations, meticulously crafted to deliver exceptional results.
            Each product represents the pinnacle of skincare innovation and luxury.
          </p>
        </motion.div>

        <motion.div
          className="featured-products__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="featured-products__item"
            >
              <Card variant="white" hoverable>
                <div className="product-card">
                  <div className="product-card__image">
                    <div className="product-card__image-placeholder">
                      <span className="product-card__category">{product.category}</span>
                    </div>
                  </div>

                  <div className="product-card__content">
                    <div className="product-card__header">
                      <h3 className="product-card__name">{product.name}</h3>
                      <span className="product-card__price">{product.price}</span>
                    </div>

                    <p className="product-card__description">{product.description}</p>

                    <div className="product-card__benefits">
                      {product.benefits.map((benefit, index) => (
                        <span key={index} className="product-card__benefit">
                          {benefit}
                        </span>
                      ))}
                    </div>

                    <Button variant="secondary" size="small" className="product-card__button">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="featured-products__footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="primary" size="large" href="/products">
            View Full Collection
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
