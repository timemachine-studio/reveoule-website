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
      count: '8 Products'
    },
    {
      id: 2,
      name: 'Moisturizers',
      description: 'Luxurious hydration for all skin types',
      count: '6 Products'
    },
    {
      id: 3,
      name: 'Cleansers',
      description: 'Gentle purification and renewal',
      count: '5 Products'
    },
    {
      id: 4,
      name: 'Eye Care',
      description: 'Specialized treatments for delicate areas',
      count: '4 Products'
    },
    {
      id: 5,
      name: 'Masks',
      description: 'Intensive care for weekly rituals',
      count: '6 Products'
    },
    {
      id: 6,
      name: 'Sun Care',
      description: 'Advanced protection with elegance',
      count: '3 Products'
    }
  ];

  return (
    <section className="category-grid">
      <div className="category-grid__container container">
        <div className="category-grid__header">
          <h2 className="category-grid__title">Explore by Category</h2>
        </div>

        <div className="category-grid__grid">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/products?category=${category.name.toLowerCase()}`}
              className="category-card"
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M13 6L19 12L13 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
