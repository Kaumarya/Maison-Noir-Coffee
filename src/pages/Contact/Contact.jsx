import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: 'What are your opening hours?', a: 'Hours vary by location. Visit our Store Locator for specific times.' },
    { q: 'Do you offer catering?', a: 'Yes! We offer curated coffee catering for events and corporate functions. Contact us for a custom quote.' },
    { q: 'Can I buy your beans online?', a: 'Absolutely. Visit our online store or order through the Maison Noir app.' },
    { q: 'Do you have dairy-free options?', a: 'Yes. We offer oat, almond, and coconut milk at every location at no extra charge.' },
    { q: 'How does the rewards program work?', a: 'Earn 2 points per dollar spent. Redeem points for free drinks, merchandise, and exclusive experiences.' },
  ];

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">Get in Touch</span>
          <h1><span className="text-gradient">Contact</span> Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Send a Message</h2>
              {submitted ? (
                <div className="contact-success">
                  <span style={{ fontSize: 48 }}>✓</span>
                  <h3>Message Sent</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label className="input-label">Name</label>
                    <input className="input-field" type="text" placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Email</label>
                    <input className="input-field" type="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Subject</label>
                    <input className="input-field" type="text" placeholder="What's this about?" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Message</label>
                    <textarea className="input-field" rows="5" placeholder="Tell us more..." required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Send Message</button>
                </form>
              )}
            </div>

            <div className="contact-info-section">
              <div className="contact-info-card">
                <h3>Headquarters</h3>
                <p>142 Mercer Street<br />New York, NY 10012</p>
              </div>
              <div className="contact-info-card">
                <h3>Email</h3>
                <p>hello@maisonnoir.coffee</p>
              </div>
              <div className="contact-info-card">
                <h3>Phone</h3>
                <p>(212) 555-0142</p>
              </div>
              <div className="contact-info-card">
                <h3>Hours</h3>
                <p>Mon–Fri: 8AM–6PM EST</p>
              </div>
            </div>
          </div>

          <div className="faq-section">
            <div className="section-header">
              <span className="section-label">Help</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                    <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
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
