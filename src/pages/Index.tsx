
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TreatmentsSection from '../components/TreatmentsSection';
import Footer from '../components/Footer';

const Index = () => {
  React.useEffect(() => {
    document.title = "Dra. Daniela Bravo | Dermatología Estética | Vicente López & Capilla del Señor";
  }, []);

  return (
    <div className="min-h-screen bg-blanco-calido">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TreatmentsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
