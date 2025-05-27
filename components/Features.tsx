export default function Features() {
  return (
    <section className="features" id="features" style={{background: 'var(--section-bg)'}}>
      <div className="container">
        <div className="comparison-header">
          <h2 style={{
            background: 'var(--gradient-secondary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Powerful Features</h2>
          <p className="hero-subtitle" style={{color: 'var(--text-secondary)'}}>Everything you need for professional vocal production</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <div className="feature-icon pulse-ring" style={{
              background: 'var(--gradient-primary)',
              color: 'var(--dark-bg)',
              boxShadow: 'var(--glow-primary)'
            }}>
              <i className="fas fa-magic"></i>
            </div>
            <h3 className="feature-title" style={{color: 'var(--text-primary)'}}>Smart AI Processing</h3>
            <p className="feature-description" style={{color: 'var(--text-muted)'}}>
              Our AI analyzes your vocal's unique characteristics and creates a custom processing 
              chain with EQ, compression, reverb, and effects tailored specifically for your voice.
            </p>
          </div>
          <div className="feature-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <div className="feature-icon pulse-ring" style={{
              background: 'var(--secondary-color)',
              color: 'var(--dark-bg)',
              boxShadow: 'var(--glow-secondary)'
            }}>
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="feature-title" style={{color: 'var(--text-primary)'}}>Lightning Fast</h3>
            <p className="feature-description" style={{color: 'var(--text-muted)'}}>
              Get professional results in under 3 seconds. No more spending hours tweaking 
              settings - our AI does the heavy lifting so you can focus on creating.
            </p>
          </div>
          <div className="feature-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <div className="feature-icon pulse-ring" style={{
              background: 'var(--accent-color)',
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow-accent)'
            }}>
              <i className="fas fa-sliders-h"></i>
            </div>
            <h3 className="feature-title" style={{color: 'var(--text-primary)'}}>Multiple Styles</h3>
            <p className="feature-description" style={{color: 'var(--text-muted)'}}>
              Choose from 50+ preset styles including Drill, Trap, R&B, Pop, and more. 
              Each style is crafted by professional engineers for authentic sound.
            </p>
          </div>
          <div className="feature-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <div className="feature-icon pulse-ring" style={{
              background: 'var(--waveform-green)',
              color: 'var(--dark-bg)',
              boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)'
            }}>
              <i className="fas fa-cog"></i>
            </div>
            <h3 className="feature-title" style={{color: 'var(--text-primary)'}}>FL Studio Ready</h3>
            <p className="feature-description" style={{color: 'var(--text-muted)'}}>
              Presets work seamlessly with FL Studio's native plugins. No additional 
              software required - just drag, drop, and you're ready to go.
            </p>
          </div>
          <div className="feature-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <div className="feature-icon pulse-ring" style={{
              background: 'var(--frequency-yellow)',
              color: 'var(--dark-bg)',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)'
            }}>
              <i className="fas fa-microphone"></i>
            </div>
            <h3 className="feature-title" style={{color: 'var(--text-primary)'}}>Any Recording Quality</h3>
            <p className="feature-description" style={{color: 'var(--text-muted)'}}>
              Whether you recorded on your phone or in a professional studio, our AI 
              adapts to your source material and delivers consistent, high-quality results.
            </p>
          </div>
          <div className="feature-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <div className="feature-icon pulse-ring" style={{
              background: 'var(--gradient-secondary)',
              color: 'var(--text-primary)',
              boxShadow: 'var(--glow-secondary)'
            }}>
              <i className="fas fa-cloud"></i>
            </div>
            <h3 className="feature-title" style={{color: 'var(--text-primary)'}}>Cloud Processing</h3>
            <p className="feature-description" style={{color: 'var(--text-muted)'}}>
              Powerful cloud infrastructure ensures fast processing and 99.9% uptime. 
              Access your presets from anywhere, anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 