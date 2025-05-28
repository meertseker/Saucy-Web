'use client';

import { useEffect, useState, useRef } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [currentStep, setCurrentStep] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const loadingSteps = [
      { progress: 15, text: 'Initializing audio engine...', icon: '🎵' },
      { progress: 30, text: 'Loading AI models...', icon: '🧠' },
      { progress: 45, text: 'Preparing workspace...', icon: '⚙️' },
      { progress: 60, text: 'Optimizing for your device...', icon: '📱' },
      { progress: 75, text: 'Connecting to cloud...', icon: '☁️' },
      { progress: 90, text: 'Finalizing setup...', icon: '✨' },
      { progress: 100, text: 'Welcome to Saucy AI!', icon: '🚀' }
    ];

    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < loadingSteps.length) {
        const step = loadingSteps[stepIndex];
        setProgress(step.progress);
        setLoadingText(step.text);
        setCurrentStep(stepIndex);
        stepIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 800);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#00d4ff' : '#00ffcc'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = '#00d4ff';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Animated particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />

      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Main loading content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 gap-14">
        {/* Logo section with enhanced styling */}
        <div className="mb-16 text-center ">
          <div className="relative mb-8">
            <h1 className= "text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 animate-pulse tracking-tight leading-none h-28">
              Saucy AI
            </h1>
            <div className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-extrabold text-cyan-400/20 blur-sm tracking-tight leading-none">
              Saucy AI
            </div>
          </div>

          <div className="flex justify-center space-x-3">
            <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Enhanced progress section */}
        <div className="w-full max-w-lg mx-auto mb-12 ">
          {/* Progress bar container */}
          <div className="relative mb-8">
            <div className="h-4 bg-gray-800/60 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/50 shadow-lg">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-teal-300 opacity-50 animate-pulse"></div>
              </div>
            </div>
            <div className="absolute -top-1 left-0 w-full h-6 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-md"></div>
          </div>

          {/* Progress percentage */}
          <div className="text-center mb-6">
            <span className="text-4xl md:text-5xl font-bold text-cyan-400 tabular-nums tracking-wider">
              {progress}%
            </span>
          </div>
        </div>
       
        

        {/* Enhanced musical notes animation */}
        <div className="relative mb-8">
          <div className="flex justify-center space-x-6">
            {['♪', '♫', '♬', '♩', '♭'].map((note, index) => (
              <span
                key={index}
                className="text-4xl text-cyan-400 animate-bounce opacity-80 hover:opacity-100 transition-opacity font-bold"
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  animationDuration: '2s',
                  filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.6))'
                }}
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Loading tips */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center px-4">
          <p className="text-base text-gray-400 max-w-lg font-medium tracking-wide">
            💡 Tip: Upload high-quality audio files for the best results
          </p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-400/30"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-teal-400/30"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-cyan-400/30"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-teal-400/30"></div>
    </div>
  );
} 