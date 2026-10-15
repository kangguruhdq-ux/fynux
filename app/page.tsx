import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Comparison from './components/Comparison';
import Services from './components/Services';
import PortfolioTeaser from './components/PortfolioTeaser';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <PortfolioTeaser />
      <Pricing /> {/* Ini menggunakan komponen super buatanmu! */}
      <Comparison />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}