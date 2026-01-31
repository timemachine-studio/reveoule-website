/**
 * Cart Page
 * Shopping cart with empty state
 */

import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import './Cart.css';

const Cart = () => {
    // Placeholder empty cart state - can be connected to state management later
    const cartItems = [];
    const isEmpty = cartItems.length === 0;

    return (
        <main className="cart-page">
            {/* Hero Section */}
            <section className="cart-hero">
                <div className="container">
                    <div className="cart-hero__content">
                        <h1 className="cart-hero__title">Shopping Cart</h1>
                    </div>
                </div>
            </section>

            {/* Cart Content */}
            <section className="cart-content">
                <div className="container">
                    {isEmpty ? (
                        <div className="cart-empty">
                            <div className="cart-empty__icon">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg>
                            </div>
                            <h2 className="cart-empty__title">Your Cart is Empty</h2>
                            <p className="cart-empty__description">
                                Discover our luxury skincare collection and find the perfect products for your routine.
                            </p>
                            <div className="cart-empty__actions">
                                <Button variant="primary" size="large" href="/featured">
                                    Explore Featured
                                </Button>
                                <Button variant="secondary" size="large" href="/category">
                                    Browse Categories
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="cart-items">
                            {/* Cart items would be rendered here */}
                            <p>Cart items will appear here.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="cart-benefits">
                <div className="container">
                    <div className="cart-benefits__grid">
                        <div className="cart-benefit">
                            <div className="cart-benefit__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="1" y="3" width="22" height="18" rx="2" />
                                    <line x1="1" y1="9" x2="23" y2="9" />
                                </svg>
                            </div>
                            <h3 className="cart-benefit__title">Secure Payment</h3>
                            <p className="cart-benefit__text">SSL encrypted checkout</p>
                        </div>
                        <div className="cart-benefit">
                            <div className="cart-benefit__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                            <h3 className="cart-benefit__title">Free Shipping</h3>
                            <p className="cart-benefit__text">On orders over $75</p>
                        </div>
                        <div className="cart-benefit">
                            <div className="cart-benefit__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
                                    <path d="M12 8v4l2 2" />
                                </svg>
                            </div>
                            <h3 className="cart-benefit__title">30-Day Returns</h3>
                            <p className="cart-benefit__text">Easy return process</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cart;
