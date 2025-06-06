
import React from 'react';
import Header from '../components/Header';
import AppointmentSection from '../components/AppointmentSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Turnos = () => {
  React.useEffect(() => {
    document.title = "Turnos Online | Dra. Daniela Bravo | Dermatóloga Vicente López";
    
    // Update meta description for Turnos page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Reserva turno online con Dra. Daniela Bravo, dermatóloga en Vicente López y Capilla del Señor. Consultorio dermatológico especializado en tratamientos estéticos y clínicos.');
    }

    // Add structured data for the Turnos page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Turnos Online - Dra. Daniela Bravo",
      "description": "Reserva turno online con Dra. Daniela Bravo, dermatóloga especialista en Vicente López y Capilla del Señor",
      "url": "https://dradanielabravo.com/turnos",
      "mainEntity": {
        "@type": "MedicalBusiness",
        "name": "Dra. Daniela Bravo",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Av. Maipú 1651, Piso 2",
            "addressLocality": "Vicente López",
            "addressRegion": "Buenos Aires",
            "addressCountry": "AR"
          },
          {
            "@type": "PostalAddress", 
            "streetAddress": "Bartolomé Mitre 480",
            "addressLocality": "Capilla del Señor",
            "addressRegion": "Buenos Aires",
            "addressCountry": "AR"
          }
        ],
        "telephone": ["+54-11-3368-1890", "+54-11-7654-6995"]
      }
    });
    document.head.appendChild(script);

    return () => {
      // Cleanup: restore original meta description when leaving page
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Dra. Daniela Bravo, dermatóloga especialista en Vicente López. Centro estético con tratamientos de botox, mesoterapia, PRP, peelings químicos, rellenos dérmicos. Consultorio dermatológico en Vicente López y Capilla del Señor.');
      }
      // Remove the script when component unmounts
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.textContent?.includes('Turnos Online')) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-blanco-calido">
      <Header />
      <main>
        <AppointmentSection />
        <div id="consultorios">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Turnos;
