
import React from 'react';

const AppointmentSection = () => {
  return (
    <section id="turnos" className="bg-blanco-nieve py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gris-paloma mb-8">Reserva tu Turno</h2>
          
          <p className="text-xl text-gris-paloma/80 mb-12 font-light leading-relaxed">
            Agenda tu consulta de manera fácil y rápida a través de DrApp. 
            Selecciona la fecha y horario que mejor se adapte a ti.
          </p>

          <div className="bg-rosa-pastel/20 p-12 rounded-3xl mb-12">
            <div className="space-y-6 text-gris-paloma/80 font-light mb-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-8 h-8 bg-rosa-pastel rounded-full flex items-center justify-center">
                  <span className="text-gris-paloma font-medium text-sm">1</span>
                </div>
                <span>Selecciona el tipo de consulta</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-8 h-8 bg-rosa-pastel rounded-full flex items-center justify-center">
                  <span className="text-gris-paloma font-medium text-sm">2</span>
                </div>
                <span>Elige fecha y horario</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-8 h-8 bg-rosa-pastel rounded-full flex items-center justify-center">
                  <span className="text-gris-paloma font-medium text-sm">3</span>
                </div>
                <span>Completa tus datos</span>
              </div>
            </div>

            <a
              href="https://drapp.com.ar/dra.danielabravo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rosa-pastel text-gris-paloma px-12 py-4 rounded-full font-medium hover:bg-rosa-pastel/90 transition-all duration-300 shadow-md hover:shadow-lg text-lg"
            >
              Reservar Turno
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gris-paloma/10 p-6 rounded-2xl">
              <h3 className="text-lg font-medium text-gris-paloma mb-4">Vicente López</h3>
              <div className="space-y-2 text-gris-paloma/70 font-light">
                <p>📍 Av. Maipú 1651, Piso 2</p>
                <p>🕒 Lunes: 15 a 19 hs</p>
                <p>🕒 Martes: 9 a 13 hs y 15 a 19 hs</p>
              </div>
            </div>
            
            <div className="bg-gris-paloma/10 p-6 rounded-2xl">
              <h3 className="text-lg font-medium text-gris-paloma mb-4">Capilla del Señor</h3>
              <div className="space-y-2 text-gris-paloma/70 font-light">
                <p>📍 Bartolomé Mitre 480</p>
                <p>🕒 Miércoles: 9 a 13 hs</p>
                <p>🕒 Jueves: 9 a 13 hs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
