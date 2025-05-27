export default function SocialProof() {
  return (
    <section className="social-proof" style={{background: 'var(--darker-bg)'}}>
      <div className="container">
        <div className="social-proof-content">
          <h2 style={{
            background: 'var(--gradient-secondary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Trusted by Producers Worldwide</h2>
          <p className="hero-subtitle" style={{color: 'var(--text-secondary)'}}>Join thousands of artists creating professional music</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--primary-color)'
          }}>
            <div className="stat-number" style={{
              color: 'var(--primary-color)',
              textShadow: 'var(--glow-primary)'
            }}>2,300+</div>
            <div className="stat-label" style={{color: 'var(--text-muted)'}}>Beta Users</div>
          </div>
          <div className="stat-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--secondary-color)'
          }}>
            <div className="stat-number" style={{
              color: 'var(--secondary-color)',
              textShadow: 'var(--glow-secondary)'
            }}>&lt;3s</div>
            <div className="stat-label" style={{color: 'var(--text-muted)'}}>Processing Time</div>
          </div>
          <div className="stat-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--accent-color)'
          }}>
            <div className="stat-number" style={{
              color: 'var(--accent-color)',
              textShadow: '0 0 20px rgba(139, 95, 191, 0.4)'
            }}>50+</div>
            <div className="stat-label" style={{color: 'var(--text-muted)'}}>Preset Styles</div>
          </div>
          <div className="stat-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--success-green)'
          }}>
            <div className="stat-number" style={{
              color: 'var(--success-green)',
              textShadow: '0 0 20px rgba(0, 255, 136, 0.4)'
            }}>99.9%</div>
            <div className="stat-label" style={{color: 'var(--text-muted)'}}>Uptime</div>
          </div>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card tilt-card glass-effect morphing-border" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <div className="testimonial-content" style={{color: 'var(--text-secondary)'}}>
              "Just got a better mix in 10 seconds than my 3-hour work. This is game-changing for independent artists."
            </div>
            <div className="testimonial-author">
              <div className="author-avatar pulse-ring" style={{
                background: 'var(--gradient-primary)',
                color: 'var(--dark-bg)'
              }}>OG</div>
              <div className="author-info">
                <h4 style={{color: 'var(--text-primary)'}}>Oguz Sglmz</h4>
                <p style={{color: 'var(--text-muted)'}}>Producer & Artist</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card tilt-card glass-effect morphing-border" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <div className="testimonial-content" style={{color: 'var(--text-secondary)'}}>
              "Finally, presets that actually work. My vocals sit perfectly in the mix every time."
            </div>
            <div className="testimonial-author">
              <div className="author-avatar pulse-ring" style={{
                background: 'var(--secondary-color)',
                color: 'var(--dark-bg)'
              }}>MK</div>
              <div className="author-info">
                <h4 style={{color: 'var(--text-primary)'}}>Mike Chen</h4>
                <p style={{color: 'var(--text-muted)'}}>Hip-Hop Producer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card tilt-card glass-effect morphing-border" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <div className="testimonial-content" style={{color: 'var(--text-secondary)'}}>
              "Saucy AI saved me hundreds of hours. The quality is indistinguishable from professional mixing."
            </div>
            <div className="testimonial-author">
              <div className="author-avatar pulse-ring" style={{
                background: 'var(--accent-color)',
                color: 'var(--text-primary)'
              }}>SA</div>
              <div className="author-info">
                <h4 style={{color: 'var(--text-primary)'}}>Sarah Adams</h4>
                <p style={{color: 'var(--text-muted)'}}>Singer-Songwriter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 