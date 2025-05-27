
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TreatmentsSection from '../components/TreatmentsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AppointmentSection from '../components/AppointmentSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  React.useEffect(() => {
    document.title = "Dra. Daniela Bravo | Dermatología Clínica y Estética";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TreatmentsSection />
        <TestimonialsSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
