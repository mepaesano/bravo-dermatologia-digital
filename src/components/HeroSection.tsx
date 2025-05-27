
import React from 'react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Cuidado
                <span className="block text-blue-600">Dermatológico</span>
                <span className="block text-pink-500">Profesional</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Especialista en dermatología clínica y estética en Vicente López, Buenos Aires. 
                Tu piel merece el mejor cuidado profesional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('reserva')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Reservar Turno
              </button>
              <button 
                onClick={() => scrollToSection('tratamientos')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Ver Tratamientos
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">500+</div>
                <div className="text-sm text-gray-600">Pacientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500">15+</div>
                <div className="text-sm text-gray-600">Tratamientos especializados</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Tratamiento dermatológico profesional" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Profesional certificada</div>
                  <div className="text-sm text-gray-600">Matrícula vigente</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">★</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Excelencia</div>
                  <div className="text-sm text-gray-600">Resultados garantizados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
