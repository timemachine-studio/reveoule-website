/**
 * Products Page
 * Full product catalog with filtering
 */

import { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'serums', 'moisturizers', 'cleansers', 'eye-care', 'masks', 'sun-care'];

  const products = [
    {
      id: 1,
      name: 'Radiance Renewal Serum',
      category: 'serums',
      description: 'Advanced peptide complex for visible skin transformation.',
      price: '$285',
      benefits: ['Brightening', 'Anti-Aging', 'Hydration']
    },
    {
      id: 2,
      name: 'Velvet Touch Moisturizer',
      category: 'moisturizers',
      description: 'Ultra-luxe hydration with botanical ceramides.',
      price: '$245',
      benefits: ['Deep Hydration', 'Barrier Support', 'Smoothing']
    },
    {
      id: 3,
      name: 'Luminous Eye Concentrate',
      category: 'eye-care',
      description: 'Precision-targeted treatment for delicate eye area.',
      price: '$195',
      benefits: ['Dark Circles', 'Fine Lines', 'Firmness']
    },
    {
      id: 4,
      name: 'Pure Essence Cleanser',
      category: 'cleansers',
      description: 'Gentle yet effective clarifying treatment.',
      price: '$165',
      benefits: ['Deep Cleansing', 'pH Balance', 'Softening']
    },
    {
      id: 5,
      name: 'Intensive Renewal Mask',
      category: 'masks',
      description: 'Weekly treatment for deep rejuvenation.',
      price: '$195',
      benefits: ['Renewal', 'Radiance', 'Texture']
    },
    {
      id: 6,
      name: 'Supreme Protection SPF 50',
      category: 'sun-care',
      description: 'Advanced UV defense with elegant finish.',
      price: '$145',
      benefits: ['Broad Spectrum', 'Lightweight', 'Anti-Aging']
    },
    {
      id: 7,
      name: 'Night Recovery Serum',
      category: 'serums',
      description: 'Overnight regeneration with retinol alternative.',
      price: '$295',
      benefits: ['Cell Renewal', 'Smoothing', 'Firmness']
    },
    {
      id: 8,
      name: 'Hydration Essence Moisturizer',
      category: 'moisturizers',
      description: 'Weightless hydration for all skin types.',
      price: '$225',
      benefits: ['Moisture Boost', 'Plumping', 'Comfort']
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <main className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero__content">
            <span className="products-hero__eyebrow">Our Collection</span>
            <h1 className="products-hero__title">Luxury Skincare</h1>
            <p className="products-hero__description">
              Explore our complete range of precision-formulated products,
              each designed to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="products-filters">
        <div className="container">
          <div className="products-filters__wrapper">
            <span className="products-filters__label">Filter by Category:</span>
            <div className="products-filters__buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`products-filters__button ${
                    selectedCategory === category ? 'products-filters__button--active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid">
        <div className="container">
          <div className="products-grid__wrapper">
            {filteredProducts.map((product, index) => (
              <div key={product.id}>
                <Card variant="white" hoverable>
                  <div className="product-item">
                    <div className="product-item__image">
                      <div className="product-item__image-placeholder">
                        <span className="product-item__category">{product.category}</span>
                      </div>
                    </div>

                    <div className="product-item__content">
                      <div className="product-item__header">
                        <h3 className="product-item__name">{product.name}</h3>
                        <span className="product-item__price">{product.price}</span>
                      </div>

                      <p className="product-item__description">{product.description}</p>

                      <div className="product-item__benefits">
                        {product.benefits.map((benefit, idx) => (
                          <span key={idx} className="product-item__benefit">
                            {benefit}
                          </span>
                        ))}
                      </div>

                      <Button variant="primary" size="small" className="product-item__button">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
