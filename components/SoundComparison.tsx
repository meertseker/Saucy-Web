'use client';

import { useState } from 'react';

export default function SoundComparison() {
  const [playingStates, setPlayingStates] = useState<{ [key: string]: boolean }>({});

  const togglePlay = (audioId: string) => {
    setPlayingStates(prev => ({
      ...prev,
      [audioId]: !prev[audioId]
    }));
  };

  return (
    <section className="sound-comparison" id="demo" style={{background: 'var(--darker-bg)'}}>
      <div className="container">
        <div className="comparison-header">
          <h2 style={{
            background: 'var(--gradient-secondary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Hear the Difference</h2>
          <p className="hero-subtitle" style={{color: 'var(--text-secondary)'}}>Listen to before and after examples of our AI processing</p>
        </div>
        
        <div className="audio-comparison">
          <div className="audio-card tilt-card glass-effect morphing-border" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <h3 style={{color: 'var(--text-primary)'}}>Before: Raw Vocal</h3>
            <div className="audio-player cyber-grid">
              <button 
                className="play-button pulse-ring btn-3d"
                onClick={() => togglePlay('before')}
                style={{
                  background: 'var(--error-red)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 0 20px rgba(255, 51, 102, 0.4)'
                }}
              >
                <i className={`fas fa-${playingStates['before'] ? 'pause' : 'play'}`}></i>
              </button>
              <div className="waveform holographic" style={{
                background: 'linear-gradient(90deg, var(--error-red), var(--warning-yellow))'
              }}></div>
              <p style={{color: 'var(--text-muted)'}}>Unprocessed iPhone recording</p>
            </div>
          </div>
          <div className="audio-card tilt-card glass-effect morphing-border" style={{
            background: 'var(--card-hover-bg)',
            border: '2px solid var(--success-green)',
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)'
          }}>
            <h3 style={{color: 'var(--text-primary)'}}>After: Saucy AI</h3>
            <div className="audio-player cyber-grid">
              <button 
                className="play-button pulse-ring btn-3d"
                onClick={() => togglePlay('after')}
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'var(--dark-bg)',
                  boxShadow: 'var(--glow-primary)'
                }}
              >
                <i className={`fas fa-${playingStates['after'] ? 'pause' : 'play'}`}></i>
              </button>
              <div className="waveform holographic" style={{
                background: 'var(--gradient-primary)'
              }}></div>
              <p style={{color: 'var(--success-green)'}}>Professional mix in 3 seconds</p>
            </div>
          </div>
        </div>

        <div className="audio-comparison">
          <div className="audio-card tilt-card glass-effect morphing-border" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--beat-red)'
          }}>
            <h3 style={{color: 'var(--beat-red)'}}>Drill Style</h3>
            <div className="audio-player cyber-grid">
              <button 
                className="play-button pulse-ring btn-3d"
                onClick={() => togglePlay('drill')}
                style={{
                  background: 'var(--beat-red)',
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--glow-beat)'
                }}
              >
                <i className={`fas fa-${playingStates['drill'] ? 'pause' : 'play'}`}></i>
              </button>
              <div className="waveform holographic" style={{
                background: 'linear-gradient(90deg, var(--beat-red), var(--primary-color))'
              }}></div>
              <p style={{color: 'var(--text-muted)'}}>Aggressive, punchy vocals</p>
            </div>
          </div>
          <div className="audio-card tilt-card glass-effect morphing-border" style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--accent-color)'
          }}>
            <h3 style={{color: 'var(--accent-color)'}}>R&B Style</h3>
            <div className="audio-player cyber-grid">
              <button 
                className="play-button pulse-ring btn-3d"
                onClick={() => togglePlay('rnb')}
                style={{
                  background: 'var(--accent-color)',
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-accent)'
                }}
              >
                <i className={`fas fa-${playingStates['rnb'] ? 'pause' : 'play'}`}></i>
              </button>
              <div className="waveform holographic" style={{
                background: 'linear-gradient(90deg, var(--accent-color), var(--secondary-color))'
              }}></div>
              <p style={{color: 'var(--text-muted)'}}>Smooth, polished vocals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 