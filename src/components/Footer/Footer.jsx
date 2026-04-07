import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-name">
              <span className="logo-icon" style={{
                width: 32, height: 32, background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, color: 'var(--color-espresso)', fontWeight: 800,
              }}>MN</span>
              Maison Noir
            </div>
            <p className="footer-brand-desc">
              Premium artisan coffee, ethically sourced from the world's finest estates.
              Darkness, refined — in every cup.
            </p>
            <div className="footer-socials">
              {['IG', 'TW', 'FB', 'YT'].map(social => (
                <a key={social} href="#" className="footer-social-link" aria-label={social}>
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Explore</h4>
            <div className="footer-links">
              <Link to="/menu" className="footer-link">Menu</Link>
              <Link to="/rewards" className="footer-link">Rewards</Link>
              <Link to="/gift-cards" className="footer-link">Gift Cards</Link>
              <Link to="/stores" className="footer-link">Locations</Link>
              <Link to="/blog" className="footer-link">Stories</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Company</h4>
            <div className="footer-links">
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/sustainability" className="footer-link">Sustainability</Link>
              <Link to="/careers" className="footer-link">Careers</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Support</h4>
            <div className="footer-links">
              <Link to="/contact" className="footer-link">Help Center</Link>
              <a href="#" className="footer-link">Shipping</a>
              <a href="#" className="footer-link">Returns</a>
              <a href="#" className="footer-link">FAQs</a>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-col-title">Stay Connected</h4>
            <p>Join our circle for exclusive offers, new releases, and the art of coffee.</p>
            <form className="footer-newsletter-form" onSubmit={e => { e.preventDefault(); }}>
              <input
                type="email"
                placeholder="Your email"
                className="footer-newsletter-input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="footer-newsletter-btn">Join</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Maison Noir Coffee Co. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
