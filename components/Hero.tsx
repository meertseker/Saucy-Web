'use client';

import Link from 'next/link';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero cyber-grid">
      <div className="floating-elements"></div>
      <div className="hero-content">
        <div className="hero-badge glass-effect" style={{
          background: 'rgba(255, 107, 53, 0.1)',
          border: '1px solid rgba(255, 107, 53,0.3)',
          color: 'var(--primary-color)'
        }}>
          <i className="fas fa-rocket" style={{color: 'var(--primary-color)'}}></i>
          <span>2,300+ producers on waitlist</span>
        </div>
        <h1 className="hero-title" style={{
          background: 'var(--gradient-primary)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Your Vocals. Radio-Ready. One Click.</h1>
        <p className="hero-subtitle" style={{color: 'var(--text-secondary)'}}>
          Transform raw vocals into professional mixes with AI-powered presets. 
          Get studio-quality results in seconds, not hours.
        </p>
        <div className="hero-cta">
          <a href="#" className="btn btn-primary btn-3d liquid-loader" style={{
            background: 'var(--gradient-primary)',
            color: 'var(--dark-bg)',
            boxShadow: 'var(--glow-primary)'
          }}>
            <i className="fas fa-upload"></i>
            Upload & Try Free
          </a>
          <a href="#demo" className="btn btn-secondary btn-3d holographic" style={{
            background: 'transparent',
            color: 'var(--secondary-color)',
            border: '2px solid var(--secondary-color)',
            boxShadow: 'var(--glow-secondary)'
          }}>
            <i className="fas fa-play"></i>
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
} 