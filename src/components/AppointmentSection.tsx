
import React from 'react';

const AppointmentSection = () => {
  return (
    <section id="turnos" className="bg-blanco-calido border-t border-rosa-empolvado py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gris-muy-oscuro mb-8">Reserva tu Turno</h2>
          
          <p className="text-xl text-gris-oscuro mb-12 font-light leading-relaxed">
            Agenda tu consulta de manera fácil y rápida a través de DrApp. 
            Selecciona la fecha y horario que mejor se adapte a ti.
          </p>

          <div className="bg-blanco border border-rosa-empolvado p-12 rounded-3xl mb-12">
            <div className="space-y-6 text-gris-oscuro font-light mb-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-8 h-8 bg-rosa-coral rounded-full flex items-center justify-center">
                  <span className="text-blanco font-medium text-sm">1</span>
                </div>
                <span>Selecciona el tipo de consulta</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-8 h-8 bg-rosa-coral rounded-full flex items-center justify-center">
                  <span className="text-blanco font-medium text-sm">2</span>
                </div>
                <span>Elige fecha y horario</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-8 h-8 bg-rosa-coral rounded-full flex items-center justify-center">
                  <span className="text-blanco font-medium text-sm">3</span>
                </div>
                <span>Completa tus datos</span>
              </div>
            </div>

            <a
              href="https://drapp.com.ar/dra.danielabravo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rosa-coral text-blanco px-12 py-4 rounded-full font-medium hover:bg-rosa-coral/85 transition-all duration-300 shadow-md hover:shadow-lg text-lg"
            >
              Reservar Turno
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-blanco border border-rosa-empolvado p-6 rounded-2xl">
              <h3 className="text-lg font-medium text-gris-muy-oscuro mb-4">Vicente López</h3>
              <div className="space-y-2 text-gris-oscuro font-light">
                <p>📍 Av. Maipú 1651, Piso 2</p>
                <p>🕒 Lunes: 15 a 19 hs</p>
                <p>🕒 Martes: 9 a 13 hs y 15 a 19 hs</p>
              </div>
            </div>
            
            <div className="bg-blanco border border-rosa-empolvado p-6 rounded-2xl">
              <h3 className="text-lg font-medium text-gris-muy-oscuro mb-4">Capilla del Señor</h3>
              <div className="space-y-2 text-gris-oscuro font-light">
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
