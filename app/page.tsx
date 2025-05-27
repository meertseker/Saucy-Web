'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import OptimizedBackgroundEffects from '@/components/OptimizedBackgroundEffects';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import Navbar from '@/components/Navbar';

// Lazy load components for better performance
const Hero = lazy(() => import('@/components/Hero'));
const SocialProof = lazy(() => import('@/components/SocialProof'));
const SoundComparison = lazy(() => import('@/components/SoundComparison'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const Features = lazy(() => import('@/components/Features'));
const VideoSection = lazy(() => import('@/components/VideoSection'));
const Pricing = lazy(() => import('@/components/Pricing'));
const Footer = lazy(() => import('@/components/Footer'));

// Component loading fallback
const ComponentLoader = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
  </div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      try {
        // Preload critical components
        await Promise.all([
          import('@/components/Hero'),
          import('@/components/Navbar'),
        ]);
        
        // Add a small delay to ensure smooth transition
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setIsInitialized(true);
      } catch (error) {
        console.error('Error preloading resources:', error);
        setIsInitialized(true);
      }
    };

    preloadResources();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    // Add smooth scroll behavior after loading
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Trigger any additional initialization
    setTimeout(() => {
      const event = new CustomEvent('appLoaded');
      window.dispatchEvent(event);
    }, 100);
  };

  if (isLoading || !isInitialized) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <OptimizedBackgroundEffects />
      <PerformanceMonitor />
      <Navbar />
      <main className="relative z-10">
        <Suspense fallback={<ComponentLoader />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <SocialProof />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <SoundComparison />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <HowItWorks />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <Features />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <VideoSection />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <Pricing />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
