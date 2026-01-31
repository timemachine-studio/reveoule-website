/**
 * Category Page
 * Product categories overview
 */

import { Link } from 'react-router-dom';
import './Category.css';

const Category = () => {
    const categories = [
        {
            id: 1,
            name: 'Serums',
            description: 'Concentrated formulas for targeted treatment and visible results.',
            productCount: 12
        },
        {
            id: 2,
            name: 'Cleansers',
            description: 'Gentle yet effective formulas to purify and refresh your skin.',
            productCount: 8
        },
        {
            id: 3,
            name: 'Moisturizers',
            description: 'Rich hydration to nourish and protect your skin barrier.',
            productCount: 10
        },
        {
            id: 4,
            name: 'Masks',
            description: 'Intensive treatments for deep restoration and radiance.',
            productCount: 6
        },
        {
            id: 5,
            name: 'Eye Care',
            description: 'Delicate formulas designed for the sensitive eye area.',
            productCount: 5
        },
        {
            id: 6,
            name: 'Sunscreen',
            description: 'Premium sun protection with skincare benefits.',
            productCount: 4
        },
        {
            id: 7,
            name: 'Toners',
            description: 'Balancing essences to prep and enhance absorption.',
            productCount: 7
        },
        {
            id: 8,
            name: 'Gift Sets',
            description: 'Curated collections for the perfect skincare gift.',
            productCount: 5
        }
    ];

    return (
        <main className="category-page">
            {/* Hero Section */}
            <section className="category-hero">
                <div className="container">
                    <div className="category-hero__content">
                        <span className="category-hero__eyebrow">Browse By</span>
                        <h1 className="category-hero__title">Product Categories</h1>
                        <p className="category-hero__description">
                            Explore our complete range of luxury skincare, organized by category for your convenience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="category-grid">
                <div className="container">
                    <div className="category-grid__items">
                        {categories.map((category) => (
                            <Link key={category.id} to={`/products?category=${category.name.toLowerCase()}`} className="category-card">
                                <div className="category-card__image"></div>
                                <div className="category-card__content">
                                    <h2 className="category-card__name">{category.name}</h2>
                                    <p className="category-card__description">{category.description}</p>
                                    <span className="category-card__count">{category.productCount} Products</span>
                                </div>
                                <div className="category-card__arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Category;
