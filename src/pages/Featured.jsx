/**
 * Featured Page
 * Displays the Featured Products section
 */

import FeaturedProducts from '../components/sections/FeaturedProducts';
import './Featured.css';

const Featured = () => {
    return (
        <main className="featured-page">
            <FeaturedProducts />
        </main>
    );
};

export default Featured;
