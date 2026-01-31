/**
 * Featured Products Section
 * Luxury product showcase with elegant card design
 */

import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Radiance Renewal Serum',
      price: 285,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Velvet Touch Moisturizer',
      price: 245,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Luminous Eye Concentrate',
      price: 195,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Pure Essence Cleanser',
      price: 165,
      rating: 4.5
    }
  ];

  // Star rating component
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="product-card__rating">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="product-card__star product-card__star--filled" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="product-card__star product-card__star--half" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="halfGrad">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#E5E5E5" />
              </linearGradient>
            </defs>
            <path fill="url(#halfGrad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="product-card__star product-card__star--empty" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="featured-products">
      <div className="featured-products__container container">
        <div className="featured-products__header">
          <span className="featured-products__eyebrow">Bestsellers</span>
          <h2 className="featured-products__title">Featured Collection</h2>
          <p className="featured-products__description">
            Meticulously crafted formulations representing the pinnacle of skincare innovation.
          </p>
        </div>

        <div className="featured-products__grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* Image Placeholder */}
              <div className="product-card__image">
                <div className="product-card__image-placeholder"></div>
              </div>

              {/* Product Info Row */}
              <div className="product-card__info">
                <h3 className="product-card__name">{product.name}</h3>
                <StarRating rating={product.rating} />
              </div>

              {/* Price and Buy Button Row */}
              <div className="product-card__footer">
                <span className="product-card__price">${product.price.toFixed(2)}</span>
                <button className="product-card__buy-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-products__cta">
          <a href="/products" className="featured-products__view-all">View Full Collection</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
