/**
 * Main App Component
 * Rêveoulé Skincare & Beauty Inc.
 * Ultra-luxury skincare website
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SkinAdvisor from './pages/SkinAdvisor';
import Plans from './pages/Plans';
import Affiliate from './pages/Affiliate';
import SignIn from './pages/SignIn';
import Join from './pages/Join';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skin-advisor" element={<SkinAdvisor />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
