/**
 * Category Grid Section
 * Luxury product category showcase
 */

import './CategoryGrid.css';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: 'Serums',
      description: 'Concentrated treatments for targeted results',
      count: '8 Products',
      featured: true
    },
    {
      id: 2,
      name: 'Moisturizers',
      description: 'Luxurious hydration for all skin types',
      count: '6 Products',
      featured: false
    },
    {
      id: 3,
      name: 'Cleansers',
      description: 'Gentle purification and renewal',
      count: '5 Products',
      featured: false
    },
    {
      id: 4,
      name: 'Eye Care',
      description: 'Specialized treatments for delicate areas',
      count: '4 Products',
      featured: false
    },
    {
      id: 5,
      name: 'Masks',
      description: 'Intensive care for weekly rituals',
      count: '6 Products',
      featured: true
    },
    {
      id: 6,
      name: 'Sun Care',
      description: 'Advanced protection with elegance',
      count: '3 Products',
      featured: false
    }
  ];

  return (
    <section className="category-grid">
      <div className="category-grid__container container">
        <div className="category-grid__header">
          <span className="category-grid__eyebrow">Product Lines</span>
          <h2 className="category-grid__title">Explore by Category</h2>
          <p className="category-grid__description">
            Each category represents years of research and refinement,
            offering specialized solutions for comprehensive skincare.
          </p>
        </div>

        <div className="category-grid__grid">
          {categories.map((category, index) => (
            <a
              key={category.id}
              href={`/products?category=${category.name.toLowerCase()}`}
              className={`category-card ${category.featured ? 'category-card--featured' : ''}`}
            >
              <div className="category-card__background">
                <div className="category-card__gradient"></div>
              </div>

              <div className="category-card__content">
                <div className="category-card__header">
                  <h3 className="category-card__name">{category.name}</h3>
                  <span className="category-card__count">{category.count}</span>
                </div>

                <p className="category-card__description">{category.description}</p>

                <div className="category-card__arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
