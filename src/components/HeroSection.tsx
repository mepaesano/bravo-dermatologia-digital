
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const navigateToTurnos = () => {
    navigate('/turnos');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="inicio" className="bg-blanco-calido">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 md:mb-16">
            <img 
              src="/lovable-uploads/59f3c988-666d-4024-a417-3c5b3013dae4.png" 
              alt="Dra. Daniela Bravo dermatóloga especialista en Vicente López, centro estético de dermatología clínica y estética" 
              className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full object-cover mb-8 md:mb-12 shadow-lg" 
              loading="eager"
              decoding="async"
              width="320"
              height="320"
              fetchPriority="high"
            />
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gris-muy-oscuro mb-6 md:mb-8 leading-tight">
              Dra. Daniela Bravo
              <span className="block text-rosa-coral font-normal mt-2">Dermatóloga Especialista en Vicente López</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gris-oscuro mb-6 md:mb-8">
              Centro de Dermatología y Estética
            </h2>
            
            <p className="text-lg md:text-xl text-gris-oscuro mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Especialista en <strong>dermatología clínica y estética</strong>. Tratamientos de <strong>toxina botulínica, mesoterapia, PRP facial, rellenos dérmicos y peelings químicos en Vicente López</strong>. Tu piel, nuestra especialidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
              <button 
                onClick={navigateToTurnos} 
                className="bg-rosa-coral text-blanco px-8 md:px-12 py-3 md:py-4 rounded-full font-medium hover:bg-rosa-coral/85 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
                aria-label="Reservar turno online con la Dra. Daniela Bravo en Vicente López"
              >
                Reservar Turno Online
              </button>
              <button 
                onClick={() => scrollToSection('tratamientos')} 
                className="border-2 border-rosa-empolvado text-gris-oscuro px-8 md:px-12 py-3 md:py-4 rounded-full font-medium hover:bg-rosa-coral hover:text-blanco hover:border-rosa-coral transition-all duration-300 text-sm md:text-base"
                aria-label="Ver tratamientos dermatológicos y estéticos disponibles"
              >
                Ver Tratamientos Dermatológicos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
