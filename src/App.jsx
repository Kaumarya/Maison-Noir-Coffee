import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CartDrawer from './components/CartDrawer/CartDrawer';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Rewards from './pages/Rewards/Rewards';
import About from './pages/About/About';
import Sustainability from './pages/Sustainability/Sustainability';
import Stores from './pages/Stores/Stores';
import GiftCards from './pages/GiftCards/GiftCards';
import Blog from './pages/Blog/Blog';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/Checkout/Checkout';
import Auth from './pages/Auth/Auth';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/about" element={<About />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <Footer />
      <div className="grain-overlay" />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}
