import { SUSTAINABILITY_STATS } from '../../data/content';
import { useScrollReveal } from '../../hooks/useAnimations';
import './Sustainability.css';

export default function Sustainability() {
  const statsRef = useScrollReveal({ staggerChildren: true, stagger: 0.1 });
  const s1Ref = useScrollReveal({ y: 40 });
  const s2Ref = useScrollReveal({ y: 40 });

  return (
    <div className="sustain-page">
      <section className="sustain-hero">
        <div className="container">
          <span className="section-label">Our Commitment</span>
          <h1>Coffee That <span className="text-gradient-emerald">Cares</span></h1>
          <p>From ethical sourcing to carbon-neutral operations, luxury and responsibility are inseparable.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sustain-stats" ref={statsRef}>
            {SUSTAINABILITY_STATS.map((stat, i) => (
              <div key={i} className="sustain-stat">
                <div className="sustain-stat-value">{stat.prefix || ''}{stat.value}{stat.suffix}</div>
                <div className="sustain-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="sustain-story" ref={s1Ref}>
            <div className="sustain-story-img">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80" alt="Coffee farmers and cherries" />
            </div>
            <div className="sustain-story-content">
              <h2>Ethical Sourcing</h2>
              <p>We pay an average of 35% above Fair Trade prices and maintain long-term partnerships with over 240 farms across four continents.</p>
              <p>Every farm we work with receives annual investment in infrastructure, education, and sustainable agriculture practices.</p>
            </div>
          </div>

          <div className="sustain-story reverse" ref={s2Ref}>
            <div className="sustain-story-img">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" alt="Sustainable leaves and nature" />
            </div>
            <div className="sustain-story-content">
              <h2>Packaging Revolution</h2>
              <p>Every Maison Noir package is 100% compostable. Our cups decompose in 90 days, and our bags are made from plant-based polymers.</p>
              <p>We're on track to eliminate all single-use plastics from our supply chain by the end of 2027.</p>
            </div>
          </div>

          <div className="sustain-goals">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="section-label">Looking Ahead</span>
              <h2 className="section-title">Our 2030 Goals</h2>
            </div>
            <div className="goals-grid">
              {[
                { title: 'Zero Waste', desc: 'Eliminate all waste from café operations through composting, recycling, and circular design.', progress: 72 },
                { title: 'Carbon Positive', desc: 'Go beyond carbon neutral — actively remove more carbon than we produce.', progress: 45 },
                { title: 'Water Stewardship', desc: 'Return 150% of the water we use to local watersheds through conservation projects.', progress: 60 },
              ].map((goal, i) => (
                <div key={i} className="goal-card">
                  <h3>{goal.title}</h3>
                  <p>{goal.desc}</p>
                  <div className="goal-progress">
                    <div className="goal-progress-fill" style={{ width: `${goal.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
