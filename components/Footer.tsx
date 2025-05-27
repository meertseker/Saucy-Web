import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{
      background: 'var(--darker-bg)',
      borderTop: '1px solid var(--border-color)'
    }}>
      <div className="footer-content">
        <div className="footer-section">
          <h3 style={{
            color: 'var(--primary-color)',
            textShadow: 'var(--glow-primary)'
          }}>Product</h3>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Features</a>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Pricing</a>
          <a href="#" style={{color: 'var(--text-secondary)'}}>API</a>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Documentation</a>
        </div>
        <div className="footer-section">
          <h3 style={{
            color: 'var(--secondary-color)',
            textShadow: 'var(--glow-secondary)'
          }}>Company</h3>
          <a href="#" style={{color: 'var(--text-secondary)'}}>About</a>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Blog</a>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Careers</a>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Contact</a>
        </div>
        <div className="footer-section">
          <h3 style={{
            color: 'var(--accent-color)',
            textShadow: '0 0 20px rgba(139, 95, 191, 0.4)'
          }}>Support</h3>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Help Center</a>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Community</a>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Status</a>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Bug Reports</a>
        </div>
        <div className="footer-section">
          <h3 style={{
            color: 'var(--success-green)',
            textShadow: '0 0 20px rgba(0, 255, 136, 0.4)'
          }}>Connect</h3>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Twitter</a>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Instagram</a>
          <a href="#" style={{color: 'var(--text-secondary)'}}>LinkedIn</a>
          <a href="#" style={{color: 'var(--text-secondary)'}}>Discord</a>
        </div>
      </div>
      <div className="footer-bottom" style={{
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-muted)'
      }}>
        <p>&copy; 2024 <span style={{
          background: 'var(--gradient-primary)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Saucy AI</span>. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
} 