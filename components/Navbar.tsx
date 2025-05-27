'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          Saucy AI
        </Link>

        <ul className="nav-links">
          <li>
            <button
              onClick={() => scrollToSection('features')}
              className="nav-link"
            >
              Features
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="nav-link"
            >
              How It Works
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('pricing')}
              className="nav-link"
            >
              Pricing
            </button>
          </li>
          <li>
            <Link href="#" className="nav-link nav-cta">
              Get Early Access
            </Link>
          </li>
        </ul>

        <button className="mobile-menu-btn">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
} 