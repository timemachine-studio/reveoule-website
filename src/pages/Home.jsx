/**
 * Home Page
 * Main landing page with all luxury sections
 */

import Hero from '../components/sections/Hero';
import LogoMarquee from '../components/sections/LogoMarquee';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import CategoryGrid from '../components/sections/CategoryGrid';
import AISkinAdvisor from '../components/sections/AISkinAdvisor';
import Testimonials from '../components/sections/Testimonials';
import ContactForm from '../components/sections/ContactForm';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <div className="hero-tagline-mobile">
        <span className="hero-tagline-mobile__text">Your French beauty saloon at home</span>
      </div>
      <LogoMarquee />
      <FeaturedProducts />
      <CategoryGrid />
      <AISkinAdvisor />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default Home;

