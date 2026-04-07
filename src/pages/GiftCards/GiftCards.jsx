import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GIFT_CARDS } from '../../data/content';
import { useCart } from '../../context/CartContext';
import { useScrollReveal } from '../../hooks/useAnimations';
import './GiftCards.css';

export default function GiftCards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [balanceCode, setBalanceCode] = useState('');
  const ref = useScrollReveal({ staggerChildren: true, stagger: 0.15 });

  return (
    <div className="gift-page">
      <section className="gift-hero">
        <div className="container">
          <span className="section-label">Give the Gift of Noir</span>
          <h1>Gift <span className="text-gradient">Cards</span></h1>
          <p>Share the art of extraordinary coffee with someone you love</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Choose Your Gift</span>
            <h2 className="section-title">Digital Gift Cards</h2>
            <p className="section-subtitle">Delivered instantly via email</p>
          </div>

          <div className="gift-grid" ref={ref}>
            {GIFT_CARDS.map(card => (
              <div
                key={card.id}
                className={`gift-card-item ${selectedCard?.id === card.id ? 'selected' : ''}`}
                onClick={() => setSelectedCard(card)}
              >
                <div className="gift-card-preview" style={{ background: card.color }}>
                  <span className="gift-card-brand">Maison Noir</span>
                  <span className="gift-card-amount">${card.amount}</span>
                </div>
                <p className="gift-card-label">{card.label}</p>
              </div>
            ))}
          </div>

          {selectedCard && (
            <div className="gift-purchase" style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>
                Selected: <strong>{selectedCard.label}</strong> — ${selectedCard.amount}
              </p>
              <button className="btn btn-primary btn-lg">Purchase Gift Card</button>
            </div>
          )}

          <div className="gift-balance-section">
            <h3>Check Your Balance</h3>
            <p>Enter your gift card code to check the remaining balance.</p>
            <form className="gift-balance-form" onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                placeholder="Enter card code"
                value={balanceCode}
                onChange={e => setBalanceCode(e.target.value)}
                className="input-field"
              />
              <button type="submit" className="btn btn-secondary">Check Balance</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
