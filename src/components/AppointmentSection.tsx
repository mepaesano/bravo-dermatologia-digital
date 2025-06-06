
import React from 'react';
import { MessageCircle } from 'lucide-react';

const AppointmentSection = () => {
  const openWhatsApp = (phoneNumber: string, location: string) => {
    const message = encodeURIComponent(`Hola, me gustaría solicitar un turno en ${location} con la Dra. Daniela Bravo`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="turnos" className="bg-blanco-calido border-t border-rosa-empolvado py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-light text-gris-muy-oscuro mb-6 md:mb-8">
            Turnos Online con la Dra. Daniela Bravo
          </h1>
          
          <p className="text-lg md:text-xl text-gris-muy-oscuro mb-8 md:mb-12 font-light leading-relaxed px-4">
            Reserva tu <strong>consulta dermatológica</strong> de manera fácil y rápida por WhatsApp. Atención personalizada en nuestros consultorios de <strong>Vicente López</strong> y <strong>Capilla del Señor</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left">
            <article className="bg-blanco border border-rosa-empolvado p-4 md:p-6 rounded-2xl" itemScope itemType="https://schema.org/MedicalBusiness">
              <h2 className="text-lg font-medium text-gris-muy-oscuro mb-4">
                Consultorio Vicente López
              </h2>
              <div className="space-y-2 text-gris-muy-oscuro font-light mb-6 text-sm md:text-base" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p>📍 <span itemProp="streetAddress">Av. Maipú 1651, Piso 2</span>, <span itemProp="addressLocality">Vicente López</span></p>
                <p>🕒 <span itemProp="openingHours" content="Mo 15:00-19:00">Lunes: 15 a 19 hs</span></p>
                <p>🕒 <span itemProp="openingHours" content="Tu 15:00-19:00">Martes: 15 a 19 hs</span></p>
                <p className="text-sm text-rosa-coral mt-2">
                  Centro dermatológico en Vicente López
                </p>
                <meta itemProp="telephone" content="+54-11-3368-1890" />
              </div>
              <button 
                onClick={() => openWhatsApp('5491133681890', 'Vicente López')}
                className="w-full bg-rosa-coral text-blanco px-4 md:px-6 py-3 rounded-full font-medium hover:bg-rosa-coral/85 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
                aria-label="Reservar turno en Vicente López vía WhatsApp"
              >
                <MessageCircle size={18} className="text-white" />
                Reservar Turno Vicente López
              </button>
            </article>
            
            <article className="bg-blanco border border-rosa-empolvado p-4 md:p-6 rounded-2xl" itemScope itemType="https://schema.org/MedicalBusiness">
              <h2 className="text-lg font-medium text-gris-muy-oscuro mb-4">
                Consultorio Capilla del Señor
              </h2>
              <div className="space-y-2 text-gris-muy-oscuro font-light mb-6 text-sm md:text-base" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p>📍 <span itemProp="streetAddress">Bartolomé Mitre 480</span>, <span itemProp="addressLocality">Capilla del Señor</span></p>
                <p>🕒 <span itemProp="openingHours" content="We 09:00-13:00">Miércoles: 9 a 13 hs</span></p>
                <p className="text-sm text-rosa-coral mt-2">
                  Atención dermatológica en Exaltación de la Cruz
                </p>
                <meta itemProp="telephone" content="+54-11-7654-6995" />
              </div>
              <button 
                onClick={() => openWhatsApp('5491176546995', 'Capilla del Señor')}
                className="w-full bg-rosa-coral text-blanco px-4 md:px-6 py-3 rounded-full font-medium hover:bg-rosa-coral/85 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
                aria-label="Reservar turno en Capilla del Señor vía WhatsApp"
              >
                <MessageCircle size={18} className="text-white" />
                Reservar Turno Capilla del Señor
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
