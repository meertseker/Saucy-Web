import Link from 'next/link';

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="comparison-header">
          <h2 style={{
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Simple Pricing</h2>
          <p className="hero-subtitle" style={{color: 'var(--text-secondary)'}}>Choose the plan that fits your creative needs</p>
        </div>
        
        <div className="pricing-grid">
          <div className="pricing-card tilt-card glass-effect" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <h3 className="pricing-title" style={{color: 'var(--text-primary)'}}>Starter</h3>
            <div className="pricing-price" style={{
              color: 'var(--secondary-color)',
              textShadow: 'var(--glow-secondary)'
            }}>$9</div>
            <div className="pricing-period" style={{color: 'var(--text-muted)'}}>per month</div>
            <ul className="pricing-features">
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> 50 vocal processes/month</li>
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> 10 preset styles</li>
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> FL Studio presets</li>
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> Email support</li>
            </ul>
            <a href="#" className="btn btn-secondary btn-3d" style={{
              width: '100%',
              background: 'transparent',
              color: 'var(--secondary-color)',
              border: '2px solid var(--secondary-color)'
            }}>Get Started</a>
          </div>
          
          <div className="pricing-card featured tilt-card glass-effect morphing-border" style={{
            background: 'var(--card-hover-bg)',
            border: '2px solid var(--primary-color)',
            boxShadow: 'var(--glow-primary)',
            transform: 'scale(1.05)'
          }}>
            <div className="pricing-badge" style={{
              background: 'var(--gradient-primary)',
              color: 'var(--dark-bg)'
            }}>Most Popular</div>
            <h3 className="pricing-title" style={{color: 'var(--text-primary)'}}>Pro</h3>
            <div className="pricing-price" style={{
              color: 'var(--text-color)',
              textShadow: 'var(--glow-primary)'
            }}>$19</div>
            <div className="pricing-period" style={{color: 'var(--text-muted)'}}>per month</div>
            <ul className="pricing-features">
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> Unlimited vocal processes</li>
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> 50+ preset styles</li>
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> All DAW formats</li>
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> Priority support</li>
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> Custom style requests</li>
            </ul>
            <a href="#" className="btn btn-primary btn-3d liquid-loader" style={{
              width: '100%',
              background: 'var(--gradient-primary)',
              color: 'var(--dark-bg)',
              boxShadow: 'var(--glow-primary)'
            }}>Start Free Trial</a>
          </div>
          
          <div className="pricing-card tilt-card glass-effect" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <h3 className="pricing-title" style={{color: 'var(--text-primary)'}}>Studio</h3>
            <div className="pricing-price" style={{
              color: 'var(--accent-color)',
              textShadow: '0 0 20px rgba(139, 95, 191, 0.4)'
            }}>$49</div>
            <div className="pricing-period" style={{color: 'var(--text-muted)'}}>per month</div>
            <ul className="pricing-features">
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> Everything in Pro</li>
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> Team collaboration</li>
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> API access</li>
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> White-label options</li>
              <li style={{color: 'var(--text-secondary)'}}><i className="fas fa-check" style={{color: 'var(--success-green)'}}></i> Dedicated support</li>
            </ul>
            <a href="#" className="btn btn-secondary btn-3d" style={{
              width: '100%',
              background: 'transparent',
              color: 'var(--accent-color)',
              border: '2px solid var(--accent-color)'
            }}>Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  );
} 