import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Stats } from '@/components/sections/Stats';
import { Pricing } from '@/components/sections/Pricing';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-space_indigo-500 text-platinum-500 overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Stats />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
