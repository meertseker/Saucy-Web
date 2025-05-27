'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Musical notes that will appear on mouse movement
    const musicalNotes = ['♪', '♫', '♬', '♩', '♭', '♯', '𝄞'];
    let lastMouseMove = 0;
    const throttleDelay = 100; // Throttle mouse events to avoid too many notes

    // 3D Mouse tracking for tilt effects
    const handleMouseMove3D = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.tilt-card');
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          (card as HTMLElement).style.transform = 
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        } else {
          (card as HTMLElement).style.transform = 
            'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        }
      });
    };

    // Parallax scrolling effect
    const handleParallaxScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Mouse movement handler for musical notes
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseMove < throttleDelay) return;
      lastMouseMove = now;

      // Only create notes in the hero section
      const heroSection = document.querySelector('.hero');
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      const isInHero = e.clientY >= heroRect.top && e.clientY <= heroRect.bottom;
      
      if (!isInHero) return;

      // Create musical note
      const note = document.createElement('div');
      note.className = 'musical-note';
      note.textContent = musicalNotes[Math.floor(Math.random() * musicalNotes.length)];
      
      // Position the note at mouse location with some randomness
      note.style.left = (e.clientX + (Math.random() - 0.5) * 40) + 'px';
      note.style.top = (e.clientY + (Math.random() - 0.5) * 40) + 'px';
      
      // Add random color variation using purple/blue palette
      const colors = [
        'var(--primary-color)',      // Purple
        'var(--secondary-color)',    // Blue
        'var(--accent-color)',       // Indigo
        'var(--primary-light)',      // Light Purple
        'var(--secondary-light)',    // Light Blue
        'var(--accent-light)'        // Light Indigo
      ];
      note.style.color = colors[Math.floor(Math.random() * colors.length)];
      
      // Add to hero section
      heroSection.appendChild(note);
      
      // Remove note after animation completes
      setTimeout(() => {
        if (note.parentNode) {
          note.parentNode.removeChild(note);
        }
      }, 2000);
    };

    // Navbar scroll effect and background fade
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const backgroundGradient = document.querySelector('.background-gradient');
      const particlesContainer = document.querySelector('.particles-container');
      const floatingElements = document.querySelector('.floating-elements');
      const heroSection = document.querySelector('.hero');
      
      const scrollY = window.scrollY;
      const heroHeight = (heroSection as HTMLElement)?.offsetHeight || 0;
      
      // Navbar effect
      if (navbar) {
        if (scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
      
      // Background fade effect - start fading after 30% of hero section
      const fadeStartPoint = heroHeight * 0.3;
      
      if (scrollY > fadeStartPoint) {
        backgroundGradient?.classList.add('faded');
        particlesContainer?.classList.add('faded');
        if (floatingElements) {
          floatingElements.classList.add('faded');
        }
      } else {
        backgroundGradient?.classList.remove('faded');
        particlesContainer?.classList.remove('faded');
        if (floatingElements) {
          floatingElements.classList.remove('faded');
        }
      }

      // Handle parallax scrolling
      handleParallaxScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMouseMove3D);

    // Audio player functionality
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
      button.addEventListener('click', function(this: HTMLElement) {
        const icon = this.querySelector('i');
        if (icon?.classList.contains('fa-play')) {
          icon.classList.remove('fa-play');
          icon.classList.add('fa-pause');
        } else if (icon?.classList.contains('fa-pause')) {
          icon.classList.remove('fa-pause');
          icon.classList.add('fa-play');
        }
      });
    });

    // Video player functionality
    const videoPlayBtn = document.querySelector('.video-play-btn');
    if (videoPlayBtn) {
      videoPlayBtn.addEventListener('click', function() {
        alert('Video demo would play here');
      });
    }

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.stat-card, .testimonial-card, .step-card, .feature-card, .pricing-card');
    animatedElements.forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.6s ease-out';
      observer.observe(element);
    });

    // Add staggered animation delays
    document.querySelectorAll('.testimonial-card').forEach((card, index) => {
      (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
    });

    document.querySelectorAll('.step-card').forEach((card, index) => {
      (card as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
    });

    document.querySelectorAll('.feature-card').forEach((card, index) => {
      (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
    });

    // Enhanced particle effect
    const createBackgroundEffect = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Define color palette based on your new purple/blue theme
      const colorPalette = [
        { r: 139, g: 92, b: 246, name: 'primary' },     // --primary-color (purple)
        { r: 59, g: 130, b: 246, name: 'secondary' },   // --secondary-color (blue)
        { r: 99, g: 102, b: 241, name: 'accent' },      // --accent-color (indigo)
        { r: 167, g: 139, b: 250, name: 'light' },      // --primary-light (light purple)
        { r: 96, g: 165, b: 250, name: 'lightblue' },   // --secondary-light (light blue)
      ];
      
      const particles: Array<{
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        opacity: number;
        colorIndex: number;
        pulsePhase: number;
      }> = [];
      const particleCount = 150; // Increased particle count for more effect
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5, // Slightly larger particles
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          opacity: Math.random() * 0.6 + 0.2,
          colorIndex: Math.floor(Math.random() * colorPalette.length),
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
      
      const animate = () => {
        ctx.fillStyle = 'rgba(15, 15, 35, 0.05)'; // Slower fade for trail effect - using new dark-bg color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.pulsePhase += 0.02; // Slow pulsing animation
          
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.y > canvas.height) particle.y = 0;
          if (particle.y < 0) particle.y = canvas.height;
          
          // Get color from palette
          const color = colorPalette[particle.colorIndex];
          const pulse = Math.sin(particle.pulsePhase) * 0.3 + 0.7; // Pulsing between 0.4 and 1.0
          const finalOpacity = particle.opacity * pulse;
          
          // Draw particle with company colors
          ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${finalOpacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Add glow effect with matching color
          ctx.shadowBlur = 15;
          ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${finalOpacity * 0.8})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
        
        // Enhanced connections with dynamic colors
        particles.forEach((particle, index) => {
          for (let j = index + 1; j < particles.length; j++) {
            const dx = particles[j].x - particle.x;
            const dy = particles[j].y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
              const opacity = 0.15 * (1 - distance / 120);
              
              // Blend colors between connected particles
              const color1 = colorPalette[particle.colorIndex];
              const color2 = colorPalette[particles[j].colorIndex];
              const blendedR = Math.floor((color1.r + color2.r) / 2);
              const blendedG = Math.floor((color1.g + color2.g) / 2);
              const blendedB = Math.floor((color1.b + color2.b) / 2);
              
              ctx.strokeStyle = `rgba(${blendedR}, ${blendedG}, ${blendedB}, ${opacity})`;
              ctx.lineWidth = 1.5;
              ctx.shadowBlur = 8;
              ctx.shadowColor = `rgba(${blendedR}, ${blendedG}, ${blendedB}, ${opacity * 0.6})`;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
              ctx.shadowBlur = 0;
            }
          }
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
    };

    // Create floating elements
    const createFloatingElements = () => {
      const container = document.querySelector('.floating-elements');
      if (!container) return;
      
      const numElements = 8; // More floating elements
      
      for (let i = 0; i < numElements; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element parallax-element';
        element.style.width = Math.random() * 200 + 50 + 'px';
        element.style.height = element.style.width;
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animationDelay = -Math.random() * 20 + 's';
        container.appendChild(element);
      }
    };

    // Start background animations
    createBackgroundEffect();
    createFloatingElements();

    // Handle window resize for particles
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMouseMove3D);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="background-gradient"></div>
      <canvas ref={canvasRef} className="particles-container" id="particles"></canvas>
    </>
  );
} 