
import React from 'react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-rosa-pastel to-pink-300 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">DB</span>
              </div>
              <h2 className="text-xl font-bold text-white">Dra. Daniela Bravo</h2>
            </div>
            <p className="mb-6">
              Especialista en dermatología clínica y estética con más de 10 años de experiencia 
              brindando tratamientos personalizados para cada paciente.
            </p>
            <a 
              href="https://instagram.com/dra.danielabravo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-300 hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @dra.danielabravo
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="hover:text-pink-300 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tratamientos')}
                  className="hover:text-pink-300 transition-colors"
                >
                  Tratamientos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonios')}
                  className="hover:text-pink-300 transition-colors"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reserva')}
                  className="hover:text-pink-300 transition-colors"
                >
                  Reserva de Turnos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="hover:text-pink-300 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-pink-300 mr-3 shrink-0" />
                <span>Av. Maipú 1651, Piso 2, Vicente López, Buenos Aires</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-pink-300 mr-3 shrink-0" />
                <a href="tel:+541147912345" className="hover:text-pink-300 transition-colors">
                  +54 11 4791-2345
                </a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-pink-300 mr-3 shrink-0" />
                <a href="mailto:consultas@dradanielabravo.com" className="hover:text-pink-300 transition-colors">
                  consultas@dradanielabravo.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Horario de atención</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lunes a Viernes:</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados:</span>
                <span>10:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos:</span>
                <span>Cerrado</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://drapp.com.ar/dra.danielabravo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-rosa-pastel to-pink-300 text-white px-6 py-2 rounded-lg font-semibold hover:from-pink-300 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Reservar Turno
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {currentYear} Dra. Daniela Bravo - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
