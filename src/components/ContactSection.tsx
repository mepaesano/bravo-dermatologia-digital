
import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="bg-rosa-pastel/10 py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gris-paloma mb-6">Contacto</h2>
            <p className="text-xl text-gris-paloma/80 font-light">
              Estamos aquí para resolver todas tus consultas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulario */}
            <div className="bg-blanco-nieve p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-light text-gris-paloma mb-8">Envíanos tu consulta</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nombre"
                    className="w-full px-4 py-4 border border-gris-paloma/20 rounded-xl focus:outline-none focus:border-rosa-pastel transition-colors font-light"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-4 border border-gris-paloma/20 rounded-xl focus:outline-none focus:border-rosa-pastel transition-colors font-light"
                  />
                </div>
                <div>
                  <textarea 
                    rows={5} 
                    placeholder="Consulta"
                    className="w-full px-4 py-4 border border-gris-paloma/20 rounded-xl focus:outline-none focus:border-rosa-pastel transition-colors font-light resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-rosa-pastel text-gris-paloma py-4 rounded-xl font-medium hover:bg-rosa-pastel/90 transition-all duration-300"
                >
                  Enviar
                </button>
              </form>
            </div>

            {/* Información */}
            <div className="space-y-8">
              <div className="bg-blanco-nieve p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-medium text-gris-paloma mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-rosa-pastel" />
                  Vicente López
                </h3>
                <div className="space-y-3 text-gris-paloma/70 font-light">
                  <p>Av. Maipú 1651, Piso 2</p>
                  <p>Vicente López, Buenos Aires</p>
                  <div className="pt-4 border-t border-gris-paloma/20">
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

              <div className="bg-blanco-nieve p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-medium text-gris-paloma mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-rosa-pastel" />
                  Capilla del Señor
                </h3>
                <div className="space-y-3 text-gris-paloma/70 font-light">
                  <p>Bartolomé Mitre 480</p>
                  <p>Exaltación de la Cruz, Provincia de Buenos Aires</p>
                  <div className="pt-4 border-t border-gris-paloma/20">
                    <p>Miércoles: 9 a 13 hs</p>
                    <p>Jueves: 9 a 13 hs</p>
                  </div>
                </div>
                <div className="mt-6">
                  <iframe 
                    title="Ubicación Capilla del Señor"
                    className="w-full h-48 rounded-xl"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.1234567890123!2d-59.1234567890123!3d-34.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95e5f1234567890a%3A0x1234567890abcdef!2sBartolom%C3%A9%20Mitre%20480%2C%20Capilla%20del%20Se%C3%B1or%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1653021439569!5m2!1ses!2sar" 
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
                  className="inline-flex items-center text-rosa-pastel hover:text-rosa-pastel/80 transition-colors font-light"
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
