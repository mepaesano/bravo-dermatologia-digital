
import React from 'react';
import Header from '../components/Header';
import AppointmentSection from '../components/AppointmentSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Turnos = () => {
  React.useEffect(() => {
    document.title = "Turnos | Dra. Daniela Bravo | Dermatología Estética";
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
