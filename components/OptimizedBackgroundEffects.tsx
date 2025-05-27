'use client';

import { useEffect, useRef, useState } from 'react';

export default function OptimizedBackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Detect mobile and performance capabilities
    const checkDevice = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      const isLowPerfDevice = navigator.hardwareConcurrency <= 4 || (navigator as any).deviceMemory <= 4;
      
      setIsMobile(isMobileDevice);
      setIsLowPerformance(isLowPerfDevice);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    // Throttled scroll handler
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const navbar = document.getElementById('navbar');
        const scrollY = window.scrollY;
        
        if (navbar) {
          if (scrollY > 50) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        }

        // Only apply parallax on desktop
        if (!isMobile) {
          const parallaxElements = document.querySelectorAll('.parallax-element');
          parallaxElements.forEach((element, index) => {
            const speed = 0.3 + (index * 0.05); // Reduced speed
            const yPos = -(scrollY * speed);
            (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
          });
        }
      }, 16); // ~60fps
    };

    // Optimized mouse move handler (desktop only)
    let mouseTimeout: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return; // Skip on mobile
      
      if (mouseTimeout) clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        // Simplified 3D tilt effect
        const cards = document.querySelectorAll('.tilt-card');
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20; // Reduced intensity
            const rotateY = (centerX - x) / 20;
            
            (card as HTMLElement).style.transform = 
              `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
          } else {
            (card as HTMLElement).style.transform = 
              'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
          }
        });
      }, 32); // ~30fps for mouse effects
    };

    // Intersection Observer for animations with reduced motion support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const observerOptions = {
      threshold: isMobile ? 0.05 : 0.1, // Lower threshold for mobile
      rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (!prefersReducedMotion) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '1';
          }
        }
      });
    }, observerOptions);

    // Setup animated elements with reduced motion support
    const animatedElements = document.querySelectorAll('.stat-card, .testimonial-card, .step-card, .feature-card, .pricing-card');
    animatedElements.forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      
      if (!prefersReducedMotion) {
        element.style.transform = 'translateY(20px)';
        element.style.transition = isMobile ? 'all 0.4s ease-out' : 'all 0.6s ease-out';
      } else {
        element.style.transition = 'opacity 0.3s ease-out';
      }
      
      observer.observe(element);
    });

    // Optimized particle effect
    const createOptimizedParticles = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reduced particle count based on device capability
      let particleCount = 50; // Default for desktop
      if (isMobile) particleCount = 20;
      if (isLowPerformance) particleCount = 10;
      
      const colorPalette = [
        { r: 139, g: 92, b: 246 },   // Purple
        { r: 59, g: 130, b: 246 },   // Blue
        { r: 99, g: 102, b: 241 },   // Indigo
      ];
      
      const particles: Array<{
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        opacity: number;
        colorIndex: number;
      }> = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          colorIndex: Math.floor(Math.random() * colorPalette.length)
        });
      }
      
      let animationId: number;
      let lastTime = 0;
      const targetFPS = isMobile ? 30 : 60;
      const frameInterval = 1000 / targetFPS;
      
      const animate = (currentTime: number) => {
        if (currentTime - lastTime >= frameInterval) {
          ctx.fillStyle = 'rgba(15, 15, 35, 0.1)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.y > canvas.height) particle.y = 0;
            if (particle.y < 0) particle.y = canvas.height;
            
            const color = colorPalette[particle.colorIndex];
            ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${particle.opacity})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
          });
          
          // Simplified connections (only on desktop)
          if (!isMobile && !isLowPerformance) {
            particles.forEach((particle, index) => {
              for (let j = index + 1; j < particles.length; j++) {
                const dx = particles[j].x - particle.x;
                const dy = particles[j].y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 80) {
                  const opacity = 0.1 * (1 - distance / 80);
                  const color = colorPalette[particle.colorIndex];
                  
                  ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(particles[j].x, particles[j].y);
                  ctx.stroke();
                }
              }
            });
          }
          
          lastTime = currentTime;
        }
        
        animationId = requestAnimationFrame(animate);
      };
      
      animationId = requestAnimationFrame(animate);
      
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    };

    // Create floating elements (desktop only)
    const createFloatingElements = () => {
      if (isMobile) return;
      
      const container = document.querySelector('.floating-elements');
      if (!container) return;
      
      const numElements = isLowPerformance ? 3 : 6;
      
      for (let i = 0; i < numElements; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element parallax-element';
        element.style.width = Math.random() * 150 + 50 + 'px';
        element.style.height = element.style.width;
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animationDelay = -Math.random() * 20 + 's';
        container.appendChild(element);
      }
    };

    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Initialize effects
    const cleanupParticles = createOptimizedParticles();
    createFloatingElements();

    // Handle window resize
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
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', checkDevice);
      observer.disconnect();
      if (cleanupParticles) cleanupParticles();
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (mouseTimeout) clearTimeout(mouseTimeout);
    };
  }, [isMobile, isLowPerformance]);

  return (
    <>
      <div className="background-gradient"></div>
      <canvas 
        ref={canvasRef} 
        className="particles-container" 
        id="particles"
        style={{ 
          willChange: 'auto',
          transform: 'translateZ(0)' // Force hardware acceleration
        }}
      ></canvas>
      {!isMobile && <div className="floating-elements"></div>}
    </>
  );
} 