'use client';

export default function VideoSection() {
  const handleVideoPlay = () => {
    alert('Video demo would play here');
  };

  return (
    <section className="video-section" style={{background: 'var(--section-bg)'}}>
      <div className="container">
        <div className="video-container">
          <h2 className="comparison-header" style={{
            marginBottom: '1rem',
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>See Saucy AI in Action</h2>
          <p className="hero-subtitle" style={{color: 'var(--text-secondary)'}}>Watch how easy it is to get professional vocal mixes</p>
          
          <div className="video-wrapper" style={{
            background: 'var(--card-bg)',
            border: '2px solid var(--border-color)',
            borderRadius: '20px',
            overflow: 'hidden'
          }}>
            <div className="video-placeholder" style={{
              background: 'var(--gradient-dark)',
              position: 'relative'
            }}>
              <button className="video-play-btn" onClick={handleVideoPlay} style={{
                background: 'var(--gradient-primary)',
                color: 'var(--dark-bg)',
                boxShadow: 'var(--glow-primary)',
                border: 'none',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                fontSize: '24px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <i className="fas fa-play"></i>
              </button>
            </div>
            <div style={{padding: '1.5rem'}}>
              <h3 style={{
                marginTop: '0',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>From Raw Recording to Radio Ready</h3>
              <p style={{
                color: 'var(--text-secondary)',
                margin: '0'
              }}>See the complete workflow in under 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 