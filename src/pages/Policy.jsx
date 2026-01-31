/**
 * Policy Page
 * Shipping, Returns, Privacy, Terms
 */

import { useState } from 'react';
import './Policy.css';

const Policy = () => {
    const [activeSection, setActiveSection] = useState('shipping');

    const policies = {
        shipping: {
            title: 'Shipping Policy',
            content: [
                {
                    heading: 'Processing Time',
                    text: 'All orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed on the next business day.'
                },
                {
                    heading: 'Domestic Shipping',
                    text: 'Standard shipping (5-7 business days): Free on orders over $75. Express shipping (2-3 business days): $15. Overnight shipping: $25.'
                },
                {
                    heading: 'International Shipping',
                    text: 'We ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination. Import duties and taxes may apply.'
                },
                {
                    heading: 'Order Tracking',
                    text: 'Once your order ships, you will receive a confirmation email with tracking information. Track your package directly through our website or the carrier\'s website.'
                }
            ]
        },
        returns: {
            title: 'Returns & Exchanges',
            content: [
                {
                    heading: 'Return Window',
                    text: 'We accept returns within 30 days of purchase for unopened products in original packaging. Opened products may be returned within 14 days if you experience an adverse reaction.'
                },
                {
                    heading: 'How to Return',
                    text: 'Contact our customer service team to initiate a return. You will receive a prepaid return label via email. Pack items securely with original packaging.'
                },
                {
                    heading: 'Refund Processing',
                    text: 'Refunds are processed within 5-7 business days after we receive your return. The refund will be credited to your original payment method.'
                },
                {
                    heading: 'Exchanges',
                    text: 'To exchange an item, please return the original product and place a new order. This ensures the fastest processing time for your new items.'
                }
            ]
        },
        privacy: {
            title: 'Privacy Policy',
            content: [
                {
                    heading: 'Information We Collect',
                    text: 'We collect information you provide directly, such as name, email, shipping address, and payment information when you make a purchase or create an account.'
                },
                {
                    heading: 'How We Use Information',
                    text: 'Your information is used to process orders, communicate with you, improve our services, and personalize your shopping experience. We never sell your data to third parties.'
                },
                {
                    heading: 'Data Security',
                    text: 'We implement industry-standard security measures to protect your personal information. All transactions are encrypted using SSL technology.'
                },
                {
                    heading: 'Your Rights',
                    text: 'You have the right to access, correct, or delete your personal data. Contact our privacy team at privacy@reveoule.com for any privacy-related requests.'
                }
            ]
        },
        terms: {
            title: 'Terms of Service',
            content: [
                {
                    heading: 'Acceptance of Terms',
                    text: 'By accessing and using our website, you accept and agree to be bound by these Terms of Service. If you disagree, please do not use our services.'
                },
                {
                    heading: 'Products and Pricing',
                    text: 'All product descriptions, images, and prices are subject to change without notice. We reserve the right to modify or discontinue products at any time.'
                },
                {
                    heading: 'Intellectual Property',
                    text: 'All content on this website, including text, images, logos, and designs, is the property of Rêveoulé Beauty Inc. and protected by intellectual property laws.'
                },
                {
                    heading: 'Limitation of Liability',
                    text: 'Rêveoulé shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.'
                }
            ]
        }
    };

    const sectionKeys = Object.keys(policies);

    return (
        <main className="policy-page">
            {/* Hero Section */}
            <section className="policy-hero">
                <div className="container">
                    <div className="policy-hero__content">
                        <span className="policy-hero__eyebrow">Information</span>
                        <h1 className="policy-hero__title">Policies</h1>
                        <p className="policy-hero__description">
                            Learn about our shipping, returns, privacy practices, and terms of service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Policy Content */}
            <section className="policy-content">
                <div className="container">
                    <div className="policy-content__layout">
                        {/* Navigation Tabs */}
                        <nav className="policy-nav">
                            {sectionKeys.map((key) => (
                                <button
                                    key={key}
                                    className={`policy-nav__item ${activeSection === key ? 'policy-nav__item--active' : ''}`}
                                    onClick={() => setActiveSection(key)}
                                >
                                    {policies[key].title}
                                </button>
                            ))}
                        </nav>

                        {/* Active Policy Content */}
                        <div className="policy-details">
                            <h2 className="policy-details__title">{policies[activeSection].title}</h2>
                            <div className="policy-details__items">
                                {policies[activeSection].content.map((item, index) => (
                                    <div key={index} className="policy-item">
                                        <h3 className="policy-item__heading">{item.heading}</h3>
                                        <p className="policy-item__text">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="policy-contact">
                <div className="container">
                    <div className="policy-contact__content">
                        <h2 className="policy-contact__title">Have Questions?</h2>
                        <p className="policy-contact__description">
                            Our customer service team is here to help with any policy-related questions.
                        </p>
                        <a href="/contact" className="policy-contact__link">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Policy;
