/**
 * Home Page
 * Main landing page with all luxury sections
 */

import Hero from '../components/sections/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import CategoryGrid from '../components/sections/CategoryGrid';
import AISkinAdvisor from '../components/sections/AISkinAdvisor';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <FeaturedProducts />
      <CategoryGrid />
      <AISkinAdvisor />
      <Testimonials />
    </main>
  );
};

export default Home;
