
import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contacto</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            ¿Tienes alguna duda? Ponte en contacto con nuestro consultorio. 
            Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="h-80">
                <iframe 
                  title="Ubicación del consultorio"
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.2836464862384!2d-58.47483058417768!3d-34.53169986116018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb425602b035b%3A0x26dee22a65f2babb!2sAv.%20Maip%C3%BA%201651%2C%20Vicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1653021439569!5m2!1ses!2sar" 
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Consultorio Dermatológico</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">Dirección</div>
                      <div className="text-gray-600">Av. Maipú 1651, Piso 2, Vicente López, Buenos Aires, Argentina</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">Teléfono</div>
                      <a href="tel:+541147912345" className="text-gray-600 hover:text-blue-600 transition-colors">+54 11 4791-2345</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">Correo electrónico</div>
                      <a href="mailto:consultas@dradanielabravo.com" className="text-gray-600 hover:text-blue-600 transition-colors">consultas@dradanielabravo.com</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Instagram className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">Instagram</div>
                      <a href="https://instagram.com/dra.danielabravo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">@dra.danielabravo</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="(011) 1234-5678"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Escribe tu consulta aquí..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Enviar mensaje
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                Al enviar este formulario, aceptas nuestra política de privacidad y protección de datos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
