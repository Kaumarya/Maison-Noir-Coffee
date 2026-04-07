import { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../../data/content';
import { useCart } from '../../context/CartContext';
import { useScrollReveal } from '../../hooks/useAnimations';
import './Menu.css';

function QuickView({ product, onClose }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');

  if (!product) return null;

  return (
    <div className="quick-view-overlay" onClick={onClose}>
      <div className="quick-view" onClick={e => e.stopPropagation()}>
        <button className="quick-view-close" onClick={onClose}>✕</button>
        <div className="quick-view-image" style={{ background: product.color }}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className="quick-view-body">
          <h2 className="quick-view-name">{product.name}</h2>
          <p className="quick-view-desc">{product.description}</p>
          <p className="quick-view-price">${product.price.toFixed(2)}</p>

          {product.intensity > 0 && (
            <div className="intensity-bar">
              <span className="intensity-label">Intensity: {product.intensity}/10</span>
              <div className="intensity-track">
                <div className="intensity-fill" style={{ width: `${product.intensity * 10}%` }} />
              </div>
            </div>
          )}

          {product.sizes.length > 0 && (
            <div className="quick-view-sizes">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >{size}</button>
              ))}
            </div>
          )}

          <button
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
            onClick={() => { addItem(product, selectedSize); onClose(); }}
          >
            Add to Cart — ${product.price.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onQuickView }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');

  return (
    <div className="product-card">
      <div className="product-card-image" style={{ background: product.color }} onClick={() => onQuickView(product)}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card-body">
        <span className="product-card-category">{product.category}</span>
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-desc">{product.description}</p>
        <div className="product-card-footer">
          <span className="product-card-price">${product.price.toFixed(2)}</span>
          <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
            {product.sizes.length > 0 && (
              <div className="product-card-sizes">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    className={`size-btn ${selectedSize === s ? 'active' : ''}`}
                    onClick={() => setSelectedSize(s)}
                  >{s}</button>
                ))}
              </div>
            )}
            <button className="product-card-add" onClick={() => addItem(product, selectedSize)}>
              + Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const gridRef = useScrollReveal({ staggerChildren: true, stagger: 0.1 });

  const filtered = PRODUCTS.filter(p => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredProduct = PRODUCTS.find(p => p.id === 1);

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="container">
          <h1>The <span className="text-gradient">Menu</span></h1>
          <p>Every cup tells a story. Find yours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Featured Spotlight */}
          <div className="featured-spotlight">
            <div className="featured-spotlight-image">
              <img src={featuredProduct.image} alt={featuredProduct.name} />
            </div>
            <div className="featured-spotlight-content">
              <span className="section-label">Barista's Pick</span>
              <h2>{featuredProduct.name}</h2>
              <p>{featuredProduct.description}</p>
              <button className="btn btn-primary" onClick={() => setQuickViewProduct(featuredProduct)}>
                Order Now — ${featuredProduct.price.toFixed(2)}
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="menu-controls">
            <div className="menu-filters">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  className={`menu-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="menu-search">
              <span className="menu-search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search drinks..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Product Grid */}
          {filtered.length > 0 ? (
            <div className="menu-grid" ref={gridRef}>
              {filtered.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>
          ) : (
            <div className="menu-empty">
              <p>No items match your search</p>
              <button className="btn btn-secondary btn-sm" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {quickViewProduct && (
        <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </div>
  );
}
