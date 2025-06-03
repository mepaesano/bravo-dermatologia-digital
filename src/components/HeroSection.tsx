
import React from 'react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="bg-blanco-calido">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <img 
              src="/lovable-uploads/87b0316a-aa5c-4bdd-bd9e-f23011b995a1.png" 
              alt="Dra. Daniela Bravo - Dermatóloga Vicente López" 
              className="w-80 h-80 mx-auto rounded-full object-cover mb-12 shadow-lg" 
            />
            
            <h1 className="text-4xl md:text-5xl font-light text-gris-muy-oscuro mb-8 leading-tight">
              Dra. Daniela Bravo
              <span className="block text-rosa-coral font-normal">Dermatóloga Especialista en Vicente López</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-gris-oscuro mb-8">
              Centro de Dermatología y Estética
            </h2>
            
            <p className="text-xl text-gris-oscuro mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Especialista en dermatología clínica y estética. Tratamientos de botox, mesoterapia, PRP facial, rellenos dérmicos y peelings químicos en Vicente López. Tu piel, nuestra especialidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => scrollToSection('turnos')} className="bg-rosa-coral text-blanco px-12 py-4 rounded-full font-medium hover:bg-rosa-coral/85 transition-all duration-300 shadow-md hover:shadow-lg">
                Reservar Turno Online
              </button>
              <button onClick={() => scrollToSection('tratamientos')} className="border-2 border-rosa-empolvado text-gris-oscuro px-12 py-4 rounded-full font-medium hover:bg-rosa-coral hover:text-blanco hover:border-rosa-coral transition-all duration-300">
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
