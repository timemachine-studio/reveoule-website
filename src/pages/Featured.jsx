/**
 * Featured Page
 * Showcases featured/trending products
 */

import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Featured.css';

const Featured = () => {
    const featuredProducts = [
        {
            id: 1,
            name: 'Luxe Renewal Serum',
            description: 'Advanced anti-aging formula with retinol and peptides for visibly younger-looking skin.',
            price: '$125',
            tag: 'Bestseller'
        },
        {
            id: 2,
            name: 'Radiance Brightening Cream',
            description: 'Illuminating moisturizer that evens skin tone and boosts natural radiance.',
            price: '$95',
            tag: 'New'
        },
        {
            id: 3,
            name: 'Hydra-Boost Essence',
            description: 'Intensive hydration serum with hyaluronic acid for plump, dewy skin.',
            price: '$85',
            tag: 'Trending'
        },
        {
            id: 4,
            name: 'Velvet Night Mask',
            description: 'Overnight repair treatment that rejuvenates while you sleep.',
            price: '$110',
            tag: 'Staff Pick'
        },
        {
            id: 5,
            name: 'Rose Petal Cleanser',
            description: 'Gentle, luxurious cleanser with rose extracts for a fresh complexion.',
            price: '$65',
            tag: 'Editor\'s Choice'
        },
        {
            id: 6,
            name: 'Firming Eye Elixir',
            description: 'Targeted treatment to reduce fine lines and dark circles.',
            price: '$75',
            tag: 'Popular'
        }
    ];

    return (
        <main className="featured-page">
            {/* Hero Section */}
            <section className="featured-hero">
                <div className="container">
                    <div className="featured-hero__content">
                        <span className="featured-hero__eyebrow">Curated Selection</span>
                        <h1 className="featured-hero__title">Featured Products</h1>
                        <p className="featured-hero__description">
                            Discover our most-loved skincare essentials, carefully selected for exceptional results and luxurious experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Products Grid */}
            <section className="featured-products">
                <div className="container">
                    <div className="featured-products__grid">
                        {featuredProducts.map((product) => (
                            <Card key={product.id} variant="white" hoverable>
                                <div className="featured-product-card">
                                    <span className="featured-product-card__tag">{product.tag}</span>
                                    <div className="featured-product-card__placeholder"></div>
                                    <h3 className="featured-product-card__name">{product.name}</h3>
                                    <p className="featured-product-card__description">{product.description}</p>
                                    <div className="featured-product-card__footer">
                                        <span className="featured-product-card__price">{product.price}</span>
                                        <Button variant="primary" size="small">Add to Cart</Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="featured-cta">
                <div className="container">
                    <div className="featured-cta__content">
                        <h2 className="featured-cta__title">Explore More</h2>
                        <p className="featured-cta__description">
                            Browse our complete collection of luxury skincare products.
                        </p>
                        <Button variant="primary" size="large" href="/category">
                            View All Categories
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Featured;
