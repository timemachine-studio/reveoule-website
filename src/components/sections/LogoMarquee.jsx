/**
 * Logo Marquee Component
 * Infinite scrolling marquee for brand logos/text
 */

import './LogoMarquee.css';

const LogoMarquee = () => {
    // Placeholder words - will be replaced with logos later
    const items = [
        'Luxury',
        'Elegance',
        'Radiance',
        'Beauty',
        'Skincare',
        'Premium',
        'Natural',
        'French',
        'Glow',
        'Rejuvenate',
        'Hydrate',
        'Transform',
    ];

    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items];

    return (
        <section className="logo-marquee">
            <div className="logo-marquee__track">
                <div className="logo-marquee__content">
                    {duplicatedItems.map((item, index) => (
                        <span key={index} className="logo-marquee__item">
                            {item}
                            <span className="logo-marquee__separator">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoMarquee;
