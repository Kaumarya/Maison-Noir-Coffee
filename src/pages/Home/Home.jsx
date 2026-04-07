import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS, TESTIMONIALS, BLOG_POSTS, SUSTAINABILITY_STATS } from '../../data/content';
import { useCart } from '../../context/CartContext';
import { useScrollReveal } from '../../hooks/useAnimations';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.to('.hero-label', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0)
        .fromTo('.hero-title', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, 0.2)
        .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.5)
        .to('.hero-ctas', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.7)
        .to('.hero-scroll-cue', { opacity: 1, duration: 0.8, ease: 'power3.out' }, 1);

      gsap.to('.hero-content', {
        y: -80,
        opacity: 0.3,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.hero-bg-image', {
        scale: 1.1,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <img
          src="/images/hero-coffee.png"
          alt="Premium espresso pour"
          className="hero-bg-image"
        />
        <div className="hero-bg-overlay" />
      </div>

      <div className="floating-beans">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="floating-bean">☕</div>
        ))}
      </div>

      <div className="hero-steam">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="steam-particle" />
        ))}
      </div>

      <div className="hero-content">
        <p className="hero-label" style={{ transform: 'translateY(20px)' }}>Est. 2019 — New York • Paris • Tokyo</p>
        <h1 className="hero-title">
          Darkness,<br />
          <span className="accent">Refined</span>
        </h1>
        <p className="hero-subtitle" style={{ transform: 'translateY(20px)' }}>
          Exceptional coffee, ethically sourced from the world's finest estates.
          Every cup, a masterpiece of flavor and intention.
        </p>
        <div className="hero-ctas" style={{ transform: 'translateY(20px)' }}>
          <Link to="/menu" className="btn btn-primary btn-lg">Explore the Menu</Link>
          <Link to="/about" className="btn btn-secondary btn-lg">Our Story</Link>
        </div>
      </div>

      <div className="hero-scroll-cue">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}

function SeasonalSection() {
  const ref = useScrollReveal({ staggerChildren: true, stagger: 0.15 });
  const seasonal = PRODUCTS.filter(p => p.featured).slice(0, 4);

  return (
    <section className="section seasonal">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Limited Edition</span>
          <h2 className="section-title">Seasonal Collection</h2>
          <p className="section-subtitle">Crafted for the moment, inspired by the season</p>
        </div>
        <div className="seasonal-grid" ref={ref}>
          {seasonal.map(product => (
            <div key={product.id} className="seasonal-card">
              <span className="seasonal-badge">New</span>
              <div className="seasonal-card-img">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="seasonal-card-name">{product.name}</h3>
              <p className="seasonal-card-desc">{product.description}</p>
              <p className="seasonal-card-price">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellersSection() {
  const ref = useScrollReveal({ staggerChildren: true, stagger: 0.2 });
  const featured = PRODUCTS.filter(p => p.intensity >= 7).slice(0, 3);

  return (
    <section className="section bestsellers">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Most Loved</span>
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">The cups that keep our guests coming back</p>
        </div>
        <div className="bestsellers-grid" ref={ref}>
          {featured.map((product, i) => (
            <div key={product.id} className="bestseller-card">
              <span className="bestseller-rank">0{i + 1}</span>
              <div className="bestseller-img">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="bestseller-name">{product.name}</h3>
              <p className="bestseller-desc">{product.description}</p>
              <p className="bestseller-price">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionsSection() {
  const ref = useScrollReveal({ staggerChildren: true, stagger: 0.2 });

  const collections = [
    { label: 'Signature Line', title: 'The Noir Collection', desc: 'Our darkest, most intense expressions of coffee mastery.', bg: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80' },
    { label: 'Limited Series', title: 'Origin Stories', desc: 'Single-origin coffees that tell the tale of their terroir.', bg: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&q=80' },
  ];

  return (
    <section className="section collections">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Curated</span>
          <h2 className="section-title">Signature Collections</h2>
          <p className="section-subtitle">Curated experiences for the discerning palate</p>
        </div>
        <div className="collections-grid" ref={ref}>
          {collections.map((col, i) => (
            <Link to="/menu" key={i} className="collection-card">
              <img src={col.bg} alt={col.title} className="collection-card-bg" />
              <div className="collection-card-content">
                <span className="collection-card-label">{col.label}</span>
                <h3 className="collection-card-title">{col.title}</h3>
                <p className="collection-card-desc">{col.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RewardsPreview() {
  const ref = useScrollReveal({ y: 40 });

  return (
    <section className="section rewards-preview">
      <div className="container">
        <div className="rewards-preview-inner" ref={ref}>
          <div className="rewards-preview-content">
            <span className="section-label">Rewards Program</span>
            <h2>Earn with <span className="text-gradient">Every Sip</span></h2>
            <p>Join Maison Noir Rewards and unlock a world of exclusive benefits, from complimentary drinks to private tasting events.</p>
            <div className="rewards-perks">
              <div className="reward-perk"><span className="reward-perk-icon">✦</span> Free birthday drink every year</div>
              <div className="reward-perk"><span className="reward-perk-icon">✦</span> Earn 2 points per dollar spent</div>
              <div className="reward-perk"><span className="reward-perk-icon">✦</span> Exclusive member-only blends</div>
              <div className="reward-perk"><span className="reward-perk-icon">✦</span> Early access to seasonal releases</div>
            </div>
            <Link to="/rewards" className="btn btn-primary">Join Rewards</Link>
          </div>
          <div className="rewards-preview-visual">
            <div className="rewards-card-mock">
              <div className="rewards-card-brand">Maison Noir</div>
              <div><div className="rewards-card-tier">Gold Member</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SustainabilityPreview() {
  const ref = useScrollReveal({ y: 40 });

  return (
    <section className="section sustainability-preview">
      <div className="container">
        <div className="sustainability-inner" ref={ref}>
          <div className="sustainability-content">
            <span className="section-label">Our Commitment</span>
            <h2>Coffee That <span className="text-gradient-emerald">Cares</span></h2>
            <p>From ethical sourcing to carbon-neutral operations, we believe luxury and responsibility are inseparable.</p>
            <Link to="/sustainability" className="btn btn-emerald">Learn More</Link>
          </div>
          <div className="sustainability-stats-grid">
            {SUSTAINABILITY_STATS.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{stat.prefix || ''}{stat.value}{stat.suffix}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CafeSection() {
  const ref = useScrollReveal({ y: 40 });

  return (
    <section className="section cafe">
      <div className="container">
        <div className="cafe-grid" ref={ref}>
          <div className="cafe-image-placeholder">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80"
              alt="Maison Noir café interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-2xl)' }}
            />
          </div>
          <div className="cafe-content">
            <span className="section-label">The Space</span>
            <h2>The <span className="text-gradient">Maison Noir</span> Experience</h2>
            <p>Step into a sanctuary of calm and craftsmanship. Our cafés are designed to be third spaces — where the ritual of coffee meets the art of being present.</p>
            <div className="cafe-features">
              <div className="cafe-feature"><span className="cafe-feature-icon">☕</span> Pour Over Bar</div>
              <div className="cafe-feature"><span className="cafe-feature-icon">🎵</span> Curated Playlists</div>
              <div className="cafe-feature"><span className="cafe-feature-icon">💡</span> Warm Ambient Light</div>
              <div className="cafe-feature"><span className="cafe-feature-icon">📶</span> High-Speed WiFi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useScrollReveal({ y: 30 });

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Voices</span>
          <h2 className="section-title">What They're Saying</h2>
          <p className="section-subtitle">The words of those who know coffee best</p>
        </div>
        <div className="testimonials-track" ref={ref}>
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <p className="testimonial-author">{t.name}</p>
              <p className="testimonial-role">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppSection() {
  const ref = useScrollReveal({ y: 40 });

  return (
    <section className="section app-section">
      <div className="container">
        <div className="app-section-inner" ref={ref}>
          <div className="app-content">
            <span className="section-label">Mobile App</span>
            <h2>Your <span className="text-gradient">Noir</span> in Your Pocket</h2>
            <p>Order ahead, earn rewards, discover new blends, and find your nearest Maison Noir — all from the palm of your hand.</p>
            <div className="app-badges">
              <a href="#" className="app-badge">🍎 App Store</a>
              <a href="#" className="app-badge">▶️ Google Play</a>
            </div>
          </div>
          <div className="rewards-preview-visual">
            <div className="app-mockup">
              <div className="app-mockup-ui">
                <div className="app-ui-header">
                  <span className="app-ui-brand">Noir.</span>
                  <span className="app-ui-menu">≡</span>
                </div>
                <div className="app-ui-greeting">
                  <p>Good morning,</p>
                  <h3>Ready for your ritual?</h3>
                </div>
                <div className="app-ui-featured">
                  <img src="/images/noir-classique.png" alt="Featured Espresso" />
                  <div className="app-ui-feat-info">
                    <h4>Noir Classique</h4>
                    <p>Signature Espresso</p>
                    <button className="app-ui-btn">Order — $5.50</button>
                  </div>
                </div>
                <div className="app-ui-recent">
                  <h4>Recent Orders</h4>
                  <div className="app-ui-item">
                    <img src="/images/velvet-latte.png" alt="Recent Latte" />
                    <div className="app-ui-item-info">
                      <h5>Velvet Latte</h5>
                      <p>Oat Milk, Vanilla</p>
                    </div>
                  </div>
                </div>
                <div className="app-ui-nav">
                  <span className="app-ui-nav-active">☕</span>
                  <span>🔍</span>
                  <span>✨</span>
                  <span>👤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const ref = useScrollReveal({ staggerChildren: true, stagger: 0.15 });
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="section blog-preview">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Stories</span>
          <h2 className="section-title">From the Journal</h2>
          <p className="section-subtitle">Insights, origins, and the art of coffee</p>
        </div>
        <div className="blog-preview-grid" ref={ref}>
          {posts.map((post) => (
            <Link to="/blog" key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-body">
                <span className="blog-card-category">{post.category}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span>{post.readTime} read</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
          <Link to="/blog" className="btn btn-secondary">All Stories</Link>
        </div>
      </div>
    </section>
  );
}

function StorePreview() {
  const ref = useScrollReveal({ y: 40 });
  const cities = ['New York', 'Paris', 'Tokyo', 'London'];

  return (
    <section className="section store-preview">
      <div className="container">
        <div className="store-preview-inner" ref={ref}>
          <span className="section-label">Find Us</span>
          <h2 className="section-title">Our Locations</h2>
          <p className="section-subtitle" style={{ marginBottom: 'var(--space-12)' }}>
            Four cities. One standard of excellence.
          </p>
          <div className="store-preview-cities">
            {cities.map(city => (
              <Link to="/stores" key={city} className="store-city">{city}</Link>
            ))}
          </div>
          <Link to="/stores" className="btn btn-secondary">Find a Store</Link>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const ref = useScrollReveal({ y: 30 });

  return (
    <section className="section newsletter">
      <div className="container">
        <div className="newsletter-inner" ref={ref}>
          <span className="section-label">Stay Connected</span>
          <h2>Join the <span className="text-gradient">Inner Circle</span></h2>
          <p>Exclusive offers, new releases, and the stories behind the cup — delivered to your inbox.</p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="newsletter-input" aria-label="Email" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="home-page">
      <HeroSection />
      <SeasonalSection />
      <BestSellersSection />
      <CollectionsSection />
      <RewardsPreview />
      <SustainabilityPreview />
      <CafeSection />
      <TestimonialsSection />
      <AppSection />
      <BlogPreview />
      <StorePreview />
      <NewsletterSection />
    </div>
  );
}
