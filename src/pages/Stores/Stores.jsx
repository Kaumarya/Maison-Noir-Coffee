import { useState } from 'react';
import { STORES } from '../../data/content';
import { useScrollReveal } from '../../hooks/useAnimations';
import './Stores.css';

export default function Stores() {
  const [searchQuery, setSearchQuery] = useState('');
  const ref = useScrollReveal({ staggerChildren: true, stagger: 0.12 });

  const filtered = STORES.filter(s =>
    s.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="stores-page">
      <section className="stores-hero">
        <div className="container">
          <span className="section-label">Find Us</span>
          <h1>Our <span className="text-gradient">Locations</span></h1>
          <p>Visit us in New York, Paris, Tokyo, and London</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stores-search">
            <input
              type="text"
              placeholder="Search by city, name, or address..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="stores-map-placeholder">
            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1200&q=80" alt="Maison Noir Global Locations" className="stores-map-image" />
            <div className="map-overlay-text">
              <h3>Global Destinations</h3>
              <p>Experience Maison Noir in the world's finest cities.</p>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="stores-grid" ref={ref}>
              {filtered.map(store => (
                <div key={store.id} className="store-card">
                  <h3 className="store-card-name">{store.name}</h3>
                  <p className="store-card-address">{store.address}</p>
                  <p className="store-card-hours">{store.hours}</p>
                  <div className="store-card-services">
                    {store.services.map((s, i) => (
                      <span key={i} className="store-service-tag">{s}</span>
                    ))}
                  </div>
                  <div className="store-card-actions">
                    <a href={`tel:${store.phone}`} className="btn btn-secondary btn-sm">Call</a>
                    <button className="btn btn-primary btn-sm">Directions</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="stores-empty">
              <p>No stores found matching "{searchQuery}"</p>
              <button className="btn btn-secondary btn-sm" onClick={() => setSearchQuery('')}>Clear Search</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
