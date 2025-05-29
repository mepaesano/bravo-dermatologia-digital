
import React from 'react';

const AppointmentSection = () => {
  const openWhatsApp = (phoneNumber: string, location: string) => {
    const message = encodeURIComponent(`Hola, me gustaría solicitar un turno en ${location}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="turnos" className="bg-blanco-calido border-t border-rosa-empolvado py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gris-muy-oscuro mb-8">Reserva tu Turno</h2>
          
          <p className="text-xl text-gris-muy-oscuro mb-12 font-light leading-relaxed">
            Contactanos por WhatsApp para agendar tu consulta de manera fácil y rápida.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-blanco border border-rosa-empolvado p-6 rounded-2xl">
              <h3 className="text-lg font-medium text-gris-muy-oscuro mb-4">Vicente López</h3>
              <div className="space-y-2 text-gris-muy-oscuro font-light mb-6">
                <p>📍 Av. Maipú 1651, Piso 2</p>
                <p>🕒 Lunes: 15 a 19 hs</p>
                <p>🕒 Martes: 15 a 19 hs</p>
              </div>
              <button 
                onClick={() => openWhatsApp('5491133681890', 'Vicente López')}
                className="w-full bg-rosa-coral text-blanco px-6 py-3 rounded-full font-medium hover:bg-rosa-coral/85 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                💬 Reservar por WhatsApp
              </button>
            </div>
            
            <div className="bg-blanco border border-rosa-empolvado p-6 rounded-2xl">
              <h3 className="text-lg font-medium text-gris-muy-oscuro mb-4">Capilla del Señor</h3>
              <div className="space-y-2 text-gris-muy-oscuro font-light mb-6">
                <p>📍 Bartolomé Mitre 480</p>
                <p>🕒 Miércoles: 9 a 13 hs</p>
              </div>
              <button 
                onClick={() => openWhatsApp('5491176546995', 'Capilla del Señor')}
                className="w-full bg-rosa-coral text-blanco px-6 py-3 rounded-full font-medium hover:bg-rosa-coral/85 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                💬 Reservar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
