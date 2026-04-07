import { useState } from 'react';
import { BLOG_POSTS } from '../../data/content';
import { useScrollReveal } from '../../hooks/useAnimations';
import './Blog.css';

export default function Blog() {
  const [category, setCategory] = useState('all');
  const categories = ['all', ...new Set(BLOG_POSTS.map(p => p.category))];
  const ref = useScrollReveal({ staggerChildren: true, stagger: 0.12 });
  const filtered = category === 'all' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === category);
  const featured = BLOG_POSTS.find(p => p.featured);
  const bgColors = ['#2d1810', '#0d4a32', '#3a1f14', '#5c3a2a', '#1a6b4a', '#8b5e3c'];

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <span className="section-label">Stories & Insights</span>
          <h1>The <span className="text-gradient">Journal</span></h1>
          <p>Behind the craft, beyond the cup</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {featured && (
            <div className="blog-featured">
              <div className="blog-featured-image">
                <img src={featured.image} alt={featured.title} />
              </div>
              <div className="blog-featured-content">
                <span className="blog-card-category">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className="blog-card-meta">
                  <span>{featured.readTime} read</span>
                  <span>{new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <button className="btn btn-primary" style={{ marginTop: 'var(--space-6)' }}>Read Article</button>
              </div>
            </div>
          )}

          <div className="blog-filters">
            {categories.map(cat => (
              <button key={cat} className={`menu-filter-btn ${category === cat ? 'active' : ''}`} onClick={() => setCategory(cat)}>
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          <div className="blog-grid" ref={ref}>
            {filtered.map((post, i) => (
              <div key={post.id} className="blog-card">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
