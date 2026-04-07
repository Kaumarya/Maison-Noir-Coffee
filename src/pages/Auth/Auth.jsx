import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
  const [mode, setMode] = useState('signin'); // signin, signup, forgot

  return (
    <div className="auth-page">
      <div className="auth-bg" />
      <div className="auth-container">
        <Link to="/" className="auth-logo">
          <span className="logo-icon" style={{
            width: 40, height: 40, background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, color: 'var(--color-espresso)', fontWeight: 800,
          }}>MN</span>
          <span>Maison Noir</span>
        </Link>

        <div className="auth-card">
          {mode === 'signin' && (
            <>
              <h1>Welcome Back</h1>
              <p className="auth-subtitle">Sign in to your Maison Noir account</p>
              <form onSubmit={e => e.preventDefault()}>
                <div className="input-group">
                  <label className="input-label">Email</label>
                  <input className="input-field" type="email" placeholder="your@email.com" required />
                </div>
                <div className="input-group">
                  <label className="input-label">Password</label>
                  <input className="input-field" type="password" placeholder="••••••••" required />
                </div>
                <div className="auth-options">
                  <label className="auth-remember">
                    <input type="checkbox" /> Remember me
                  </label>
                  <button type="button" className="auth-link" onClick={() => setMode('forgot')}>Forgot password?</button>
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Sign In</button>
              </form>
              <p className="auth-switch">
                Don't have an account?{' '}
                <button className="auth-link" onClick={() => setMode('signup')}>Create one</button>
              </p>
            </>
          )}

          {mode === 'signup' && (
            <>
              <h1>Join Maison Noir</h1>
              <p className="auth-subtitle">Create your account and start earning rewards</p>
              <form onSubmit={e => e.preventDefault()}>
                <div className="auth-name-row">
                  <div className="input-group">
                    <label className="input-label">First Name</label>
                    <input className="input-field" type="text" placeholder="First" required />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Last Name</label>
                    <input className="input-field" type="text" placeholder="Last" required />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Email</label>
                  <input className="input-field" type="email" placeholder="your@email.com" required />
                </div>
                <div className="input-group">
                  <label className="input-label">Password</label>
                  <input className="input-field" type="password" placeholder="Min 8 characters" required />
                </div>
                <div className="input-group">
                  <label className="input-label">Birthday (for your free drink!)</label>
                  <input className="input-field" type="date" />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Create Account</button>
              </form>
              <p className="auth-switch">
                Already have an account?{' '}
                <button className="auth-link" onClick={() => setMode('signin')}>Sign in</button>
              </p>
            </>
          )}

          {mode === 'forgot' && (
            <>
              <h1>Reset Password</h1>
              <p className="auth-subtitle">Enter your email and we'll send you a reset link</p>
              <form onSubmit={e => e.preventDefault()}>
                <div className="input-group">
                  <label className="input-label">Email</label>
                  <input className="input-field" type="email" placeholder="your@email.com" required />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Send Reset Link</button>
              </form>
              <p className="auth-switch">
                Remember your password?{' '}
                <button className="auth-link" onClick={() => setMode('signin')}>Sign in</button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
