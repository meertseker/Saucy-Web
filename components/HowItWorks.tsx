export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works" style={{background: 'var(--section-bg)'}}>
      <div className="container">
        <div className="comparison-header">
          <h2 style={{
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>How It Works</h2>
          <p className="hero-subtitle" style={{color: 'var(--text-secondary)'}}>Get professional vocals in three simple steps</p>
        </div>
        
        <div className="steps-grid">
          <div className="step-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--primary-color)'
          }}>
            <div className="step-number" style={{
              background: 'var(--gradient-primary)',
              color: 'var(--dark-bg)'
            }}>1</div>
            <div className="step-icon" style={{
              color: 'var(--primary-color)',
              textShadow: 'var(--glow-primary)'
            }}>
              <i className="fas fa-upload"></i>
            </div>
            <h3 className="step-title" style={{color: 'var(--text-primary)'}}>Upload Your Vocal</h3>
            <p className="step-description" style={{color: 'var(--text-muted)'}}>
              Drop your raw vocal file or record directly in your browser. 
              Any format, any quality - we'll handle the rest.
            </p>
          </div>
          
          <div className="step-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--secondary-color)'
          }}>
            <div className="step-number" style={{
              background: 'var(--secondary-color)',
              color: 'var(--dark-bg)'
            }}>2</div>
            <div className="step-icon" style={{
              color: 'var(--secondary-color)',
              textShadow: 'var(--glow-secondary)'
            }}>
              <i className="fas fa-magic"></i>
            </div>
            <h3 className="step-title" style={{color: 'var(--text-primary)'}}>Choose Your Style</h3>
            <p className="step-description" style={{color: 'var(--text-muted)'}}>
              Select from 50+ professionally crafted presets including Drill, 
              Trap, R&B, Pop, and more genre-specific styles.
            </p>
          </div>
          
          <div className="step-card tilt-card glass-effect float-animation" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--accent-color)'
          }}>
            <div className="step-number" style={{
              background: 'var(--accent-color)',
              color: 'var(--text-primary)'
            }}>3</div>
            <div className="step-icon" style={{
              color: 'var(--accent-color)',
              textShadow: '0 0 20px rgba(139, 95, 191, 0.4)'
            }}>
              <i className="fas fa-download"></i>
            </div>
            <h3 className="step-title" style={{color: 'var(--text-primary)'}}>Download & Create</h3>
            <p className="step-description" style={{color: 'var(--text-muted)'}}>
              Get your processed vocal and FL Studio preset instantly. 
              Drop it in your DAW and start creating hits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 