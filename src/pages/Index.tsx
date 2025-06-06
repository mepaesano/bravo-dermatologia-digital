
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TreatmentsSection from '../components/TreatmentsSection';
import Footer from '../components/Footer';

const Index = () => {
  React.useEffect(() => {
    document.title = "Dra. Daniela Bravo | Dermatóloga en Vicente López | Centro de Dermatología Estética";
    
    // Ensure proper meta description is set
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dra. Daniela Bravo, dermatóloga especialista en Vicente López. Centro estético con tratamientos de botox, mesoterapia, PRP, peelings químicos, rellenos dérmicos. Consultorio dermatológico en Vicente López y Capilla del Señor.');
    }

    // Add breadcrumb structured data for better SEO
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://dradanielabravo.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sobre la Doctora",
          "item": "https://dradanielabravo.com/#sobre"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tratamientos",
          "item": "https://dradanielabravo.com/#tratamientos"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Turnos",
          "item": "https://dradanielabravo.com/turnos"
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      // Cleanup when component unmounts
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.textContent?.includes('BreadcrumbList')) {
        existingScript.remove();
      }
    };
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
