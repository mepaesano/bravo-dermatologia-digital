
import React from 'react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="bg-blanco-nieve">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <img 
              src="/lovable-uploads/c986d3df-aa2c-4921-9930-e556d8bf80b7.png" 
              alt="Dra. Daniela Bravo - Logo" 
              className="w-80 h-80 mx-auto rounded-full object-cover mb-12 shadow-lg"
            />
            
            <h2 className="text-4xl md:text-5xl font-light text-gris-paloma mb-8 leading-tight">
              Dermatología Estética
              <span className="block text-rosa-pastel font-normal">con Enfoque Humano</span>
            </h2>
            
            <p className="text-xl text-gris-paloma/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Más de 10 años brindando tratamientos personalizados que cuidan tu piel 
              y realzan tu belleza natural, con la calidez y profesionalismo que mereces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('turnos')}
                className="bg-rosa-pastel text-gris-paloma px-12 py-4 rounded-full font-medium hover:bg-rosa-pastel/90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Reservar Turno
              </button>
              <button 
                onClick={() => scrollToSection('tratamientos')}
                className="border-2 border-rosa-pastel text-rosa-pastel px-12 py-4 rounded-full font-medium hover:bg-rosa-pastel hover:text-gris-paloma transition-all duration-300"
              >
                Ver Tratamientos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
