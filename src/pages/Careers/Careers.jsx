import { Link } from 'react-router-dom';
import { CAREERS_POSITIONS } from '../../data/content';
import { useScrollReveal } from '../../hooks/useAnimations';
import './Careers.css';

export default function Careers() {
  const rolesRef = useScrollReveal({ staggerChildren: true, stagger: 0.1 });
  const valRef = useScrollReveal({ staggerChildren: true, stagger: 0.15 });

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="container">
          <span className="section-label">Join Our Team</span>
          <h1>Build Your <span className="text-gradient">Career</span></h1>
          <p>Shape the future of coffee with us</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="careers-culture">
            <div className="section-header">
              <span className="section-label">Our Culture</span>
              <h2 className="section-title">Why Maison Noir</h2>
              <p className="section-subtitle">We believe extraordinary coffee comes from extraordinary people</p>
            </div>
            <div className="careers-values-grid" ref={valRef}>
              {[
                { icon: '🌱', title: 'Growth', desc: 'Continuous learning with mentorship, tastings, and skill development programs.' },
                { icon: '🌍', title: 'Impact', desc: 'Your work directly supports sustainable farming communities worldwide.' },
                { icon: '✨', title: 'Excellence', desc: 'We set the standard for craft and customer experience in everything we do.' },
                { icon: '❤️', title: 'Community', desc: 'A diverse, welcoming team united by a shared passion for coffee culture.' },
              ].map((v, i) => (
                <div key={i} className="careers-value-card">
                  <span className="careers-value-icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="careers-benefits">
            <div className="section-header">
              <span className="section-label">Perks & Benefits</span>
              <h2 className="section-title">What We Offer</h2>
            </div>
            <div className="benefits-list">
              {['Competitive salary', 'Health & dental insurance', 'Free daily coffee', '401(k) matching', 'Paid parental leave', 'Annual origin trips', 'Professional development fund', 'Flexible scheduling'].map((b, i) => (
                <div key={i} className="benefit-tag">✦ {b}</div>
              ))}
            </div>
          </div>

          <div className="careers-roles">
            <div className="section-header">
              <span className="section-label">Open Positions</span>
              <h2 className="section-title">Current Openings</h2>
            </div>
            <div className="roles-list" ref={rolesRef}>
              {CAREERS_POSITIONS.map(role => (
                <div key={role.id} className="role-card">
                  <div className="role-info">
                    <h3 className="role-title">{role.title}</h3>
                    <div className="role-meta">
                      <span>{role.location}</span>
                      <span>•</span>
                      <span>{role.type}</span>
                      <span>•</span>
                      <span>{role.department}</span>
                    </div>
                  </div>
                  <button className="btn btn-secondary btn-sm">Apply</button>
                </div>
              ))}
            </div>
          </div>

          <div className="careers-cta">
            <h2>Don't see your role?</h2>
            <p>We're always looking for exceptional talent. Send us your story.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
