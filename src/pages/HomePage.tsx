import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/home/Hero';
import { FeatureSection } from '../components/home/FeatureSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { UtilityTools } from '../components/home/UtilityTools';
import { FinalCTA } from '../components/home/FinalCTA';

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-50">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <UtilityTools />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
