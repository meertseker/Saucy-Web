import BackgroundEffects from '@/components/BackgroundEffects';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import SoundComparison from '@/components/SoundComparison';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import VideoSection from '@/components/VideoSection';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SocialProof />
        <SoundComparison />
        <HowItWorks />
        <Features />
        <VideoSection />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}
