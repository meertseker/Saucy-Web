'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  isMobile: boolean;
  isLowPerformance: boolean;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    loadTime: 0,
    isMobile: false,
    isLowPerformance: false
  });

  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    // Detect device capabilities
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    const isLowPerformance = navigator.hardwareConcurrency <= 4 || (navigator as any).deviceMemory <= 4;
    
    // Measure load time
    const loadTime = performance.now();
    
    // FPS monitoring
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 60;
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
        
        // Update metrics
        setMetrics(prev => ({
          ...prev,
          fps,
          loadTime,
          isMobile,
          isLowPerformance,
          memoryUsage: (performance as any).memory?.usedJSHeapSize / 1048576 || 0
        }));
      }
      
      requestAnimationFrame(measureFPS);
    };
    
    requestAnimationFrame(measureFPS);
    
    // Performance optimization based on metrics
    const optimizePerformance = () => {
      if (fps < 30 || isLowPerformance) {
        // Reduce particle count
        const canvas = document.getElementById('particles') as HTMLCanvasElement;
        if (canvas) {
          canvas.style.opacity = '0.2';
        }
        
        // Disable heavy animations
        document.body.classList.add('low-performance-mode');
        
        // Add performance CSS
        const style = document.createElement('style');
        style.textContent = `
          .low-performance-mode .tilt-card {
            transform: none !important;
            transition: none !important;
          }
          .low-performance-mode .parallax-element {
            transform: none !important;
          }
          .low-performance-mode .float-animation {
            animation: none !important;
          }
          .low-performance-mode .morphing-border::before {
            animation: none !important;
          }
        `;
        document.head.appendChild(style);
      }
    };
    
    // Check performance every 5 seconds
    const performanceInterval = setInterval(optimizePerformance, 5000);
    
    // Show metrics in development or when performance is poor
    if (process.env.NODE_ENV === 'development' || fps < 30) {
      setShowMetrics(true);
    }
    
    return () => {
      clearInterval(performanceInterval);
    };
  }, []);

  // Don't show in production unless performance is poor
  if (!showMetrics && process.env.NODE_ENV === 'production' && metrics.fps >= 30) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white p-3 rounded-lg text-xs font-mono backdrop-blur-sm">
      <div className="flex flex-col gap-1">
        <div className={`flex justify-between gap-4 ${metrics.fps < 30 ? 'text-red-400' : metrics.fps < 50 ? 'text-yellow-400' : 'text-green-400'}`}>
          <span>FPS:</span>
          <span>{metrics.fps}</span>
        </div>
        
        {metrics.memoryUsage > 0 && (
          <div className={`flex justify-between gap-4 ${metrics.memoryUsage > 100 ? 'text-red-400' : metrics.memoryUsage > 50 ? 'text-yellow-400' : 'text-green-400'}`}>
            <span>Memory:</span>
            <span>{metrics.memoryUsage.toFixed(1)}MB</span>
          </div>
        )}
        
        <div className="flex justify-between gap-4">
          <span>Load:</span>
          <span>{metrics.loadTime.toFixed(0)}ms</span>
        </div>
        
        {metrics.isMobile && (
          <div className="text-blue-400">
            <span>📱 Mobile</span>
          </div>
        )}
        
        {metrics.isLowPerformance && (
          <div className="text-orange-400">
            <span>⚡ Low Perf</span>
          </div>
        )}
        
        {metrics.fps < 30 && (
          <div className="text-red-400 text-center mt-1">
            Performance mode active
          </div>
        )}
      </div>
      
      <button
        onClick={() => setShowMetrics(false)}
        className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center hover:bg-red-600"
      >
        ×
      </button>
    </div>
  );
} 