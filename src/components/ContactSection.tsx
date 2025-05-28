
import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="bg-blanco border-t border-rosa-empolvado py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gris-muy-oscuro mb-6">Contacto</h2>
            <p className="text-xl text-gris-oscuro font-light">
              Estamos aquí para resolver todas tus consultas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulario */}
            

            {/* Información */}
            <div className="space-y-8">
              <div className="bg-blanco-calido border border-rosa-empolvado p-8 rounded-3xl">
                <h3 className="text-xl font-medium text-gris-muy-oscuro mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-rosa-coral" />
                  Vicente López
                </h3>
                <div className="space-y-3 text-gris-oscuro font-light">
                  <p>Av. Maipú 1651, Piso 2</p>
                  <p>Vicente López, Buenos Aires</p>
                  <div className="pt-4 border-t border-rosa-empolvado">
                    <p>Lunes: 15 a 19 hs</p>
                    <p>Martes: 9 a 13 hs y 15 a 19 hs</p>
                  </div>
                </div>
                <div className="mt-6">
                  <iframe 
                    title="Ubicación Vicente López" 
                    className="w-full h-48 rounded-xl" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.2836464862384!2d-58.47483058417768!3d-34.53169986116018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb425602b035b%3A0x26dee22a65f2babb!2sAv.%20Maip%C3%BA%201651%2C%20Vicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1653021439569!5m2!1ses!2sar" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="bg-blanco-calido border border-rosa-empolvado p-8 rounded-3xl">
                <h3 className="text-xl font-medium text-gris-muy-oscuro mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-rosa-coral" />
                  Capilla del Señor
                </h3>
                <div className="space-y-3 text-gris-oscuro font-light">
                  <p>Bartolomé Mitre 480</p>
                  <p>Exaltación de la Cruz, Provincia de Buenos Aires</p>
                  <p>B2812</p>
                  <div className="pt-4 border-t border-rosa-empolvado">
                    <p>Miércoles: 9 a 13 hs</p>
                  </div>
                </div>
                <div className="mt-6">
                  <iframe 
                    title="Ubicación Capilla del Señor" 
                    className="w-full h-48 rounded-xl" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.8947368421053!2d-59.11285368479532!3d-34.380944580489825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95e5f0b1e1234567%3A0x1234567890abcdef!2sBartolom%C3%A9%20Mitre%20480%2C%20B2812%20Capilla%20del%20Se%C3%B1or%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1653021439569!5m2!1ses!2sar" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="text-center">
                <a 
                  href="https://instagram.com/dradanielabravo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-rosa-coral hover:text-rosa-coral/80 transition-colors font-light"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  @dradanielabravo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
