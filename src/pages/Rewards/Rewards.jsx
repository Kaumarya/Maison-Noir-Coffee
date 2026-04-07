import { Link } from 'react-router-dom';
import { REWARDS_TIERS } from '../../data/content';
import { useScrollReveal } from '../../hooks/useAnimations';
import './Rewards.css';

export default function Rewards() {
  const tiersRef = useScrollReveal({ staggerChildren: true, stagger: 0.15 });
  const stepsRef = useScrollReveal({ staggerChildren: true, stagger: 0.2 });

  return (
    <div className="rewards-page">
      <section className="rewards-hero">
        <div className="container">
          <span className="section-label">Maison Noir Rewards</span>
          <h1>Earn with <span className="text-gradient">Every Sip</span></h1>
          <p>Join our loyalty program and unlock a world of exclusive benefits, complimentary drinks, and unforgettable experiences.</p>
          <Link to="/auth" className="btn btn-primary btn-lg">Join Now — It's Free</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Membership Tiers</span>
            <h2 className="section-title">Rise Through the Ranks</h2>
            <p className="section-subtitle">The more you sip, the more you earn</p>
          </div>

          <div className="tiers-grid" ref={tiersRef}>
            {REWARDS_TIERS.map(tier => (
              <div key={tier.name} className="tier-card">
                <div className="tier-card-icon" style={{ background: tier.color, color: tier.name === 'Noir' ? 'var(--color-gold)' : 'var(--color-cream)' }}>
                  {tier.name[0]}
                </div>
                <h3 className="tier-card-name">{tier.name}</h3>
                <p className="tier-card-points">
                  {tier.pointsRequired === 0 ? 'Starting tier' : `${tier.pointsRequired.toLocaleString()} points`}
                </p>
                <div className="tier-card-perks">
                  {tier.perks.map((perk, i) => (
                    <div key={i} className="tier-perk">{perk}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="how-it-works">
            <span className="section-label">Simple & Rewarding</span>
            <h2 className="section-title">How It Works</h2>
            <div className="how-steps" ref={stepsRef}>
              {[
                { title: 'Join', desc: 'Create your free Maison Noir Rewards account in seconds.' },
                { title: 'Earn', desc: 'Collect 2 points for every dollar spent on drinks and merchandise.' },
                { title: 'Enjoy', desc: 'Redeem points for free drinks, exclusive blends, and VIP experiences.' },
              ].map((step, i) => (
                <div key={i} className="how-step">
                  <div className="how-step-num">0{i + 1}</div>
                  <h3 className="how-step-title">{step.title}</h3>
                  <p className="how-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rewards-benefits">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="section-label">Member Perks</span>
              <h2 className="section-title">Exclusive Benefits</h2>
            </div>
            <div className="benefits-grid">
              {[
                { icon: '🎂', title: 'Birthday Reward', desc: 'A complimentary drink of your choice on your special day.' },
                { icon: '⚡', title: 'Double Point Days', desc: 'Earn 4x points on select days throughout the year.' },
                { icon: '🎁', title: 'Surprise Offers', desc: 'Personalized offers and gifts delivered just for you.' },
                { icon: '🏆', title: 'VIP Access', desc: 'Early access to new releases and invite-only tasting events.' },
              ].map((b, i) => (
                <div key={i} className="benefit-item">
                  <span className="benefit-icon">{b.icon}</span>
                  <div>
                    <p className="benefit-title">{b.title}</p>
                    <p className="benefit-desc">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rewards-cta-section">
            <h2>Ready to <span className="text-gradient">Begin</span>?</h2>
            <p>Start earning rewards with your very first purchase. No minimum spend, no annual fees.</p>
            <Link to="/auth" className="btn btn-primary btn-lg">Create Your Account</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
