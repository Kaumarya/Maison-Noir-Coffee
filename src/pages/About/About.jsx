import { useScrollReveal } from '../../hooks/useAnimations';
import './About.css';

export default function About() {
  const story1Ref = useScrollReveal({ y: 40 });
  const story2Ref = useScrollReveal({ y: 40 });
  const valuesRef = useScrollReveal({ staggerChildren: true, stagger: 0.15 });

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1>Born from <span className="text-gradient">Darkness</span></h1>
          <p>A journey of obsession, craftsmanship, and the relentless pursuit of the perfect cup.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="story-section" ref={story1Ref}>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=800&q=80" alt="Coffee roasting process" />
            </div>
            <div className="story-content">
              <h2>A Legacy of Obsession</h2>
              <p>Maison Noir was born in 2019, in a small roastery in Brooklyn, from a singular obsession: to create coffee so extraordinary it would redefine what a cup could be.</p>
              <p>Our founder, a former sommelier, believed that coffee deserved the same reverence as the world's finest wines — attention to terroir, process, and the invisible alchemy of craft.</p>
            </div>
          </div>

          <div className="story-section reverse" ref={story2Ref}>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1524350876685-274059332603?w=800&q=80" alt="Coffee origins and beans" />
            </div>
            <div className="story-content">
              <h2>From Soil to Soul</h2>
              <p>We source directly from over 240 partner farms across Ethiopia, Colombia, Guatemala, and Kenya. Every relationship is built on mutual respect, fair compensation, and a shared commitment to excellence.</p>
              <p>Our beans are hand-selected, meticulously processed, and roasted in small batches to unlock their full potential — from the first bloom to the final pour.</p>
            </div>
          </div>

          <div className="section-header" style={{ marginTop: 'var(--space-16)' }}>
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Values</h2>
          </div>

          <div className="values-grid" ref={valuesRef}>
            {[
              { icon: '✦', title: 'Uncompromising Quality', desc: 'Every bean is scored, cupped, and approved by our master roasters before it reaches your cup.' },
              { icon: '🌍', title: 'Radical Transparency', desc: 'We publish every sourcing detail — from farm coordinates to the premium we pay above market price.' },
              { icon: '🤝', title: 'Community First', desc: 'Our cafés are designed to be sanctuaries — third spaces where connection and conversation flourish.' },
            ].map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="section-header" style={{ marginTop: 'var(--space-20)' }}>
            <span className="section-label">Milestones</span>
            <h2 className="section-title">Our Journey</h2>
          </div>

          <div className="timeline">
            {[
              { year: '2019', text: 'Founded in Brooklyn, NY. Our first micro-roastery opens its doors.' },
              { year: '2020', text: 'Launch of direct trade partnerships with farms in Ethiopia and Colombia.' },
              { year: '2021', text: 'First flagship café opens in SoHo, New York. 100% compostable packaging adopted.' },
              { year: '2022', text: 'International expansion — Maison Noir Marais opens in Paris.' },
              { year: '2023', text: 'Tokyo launches. Maison Noir Rewards program reaches 500,000 members.' },
              { year: '2024', text: 'London flagship opens. Carbon-neutral operations achieved across all locations.' },
              { year: '2026', text: 'Named "Most Innovative Coffee Brand" by World Coffee Forum.' },
            ].map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-year">{item.year}</div>
                <p className="timeline-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
