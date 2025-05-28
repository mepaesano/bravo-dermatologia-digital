
import React, { useState } from 'react';
import { MapPin, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-blanco-nieve/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rosa-pastel to-pink-200 rounded-full flex items-center justify-center">
              <span className="text-pink-600 font-bold text-lg">DB</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Dra. Daniela Bravo</h1>
              <p className="text-sm text-gray-600 flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                Vicente López, Buenos Aires
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-pink-400 transition-colors font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('tratamientos')} className="text-gray-700 hover:text-pink-400 transition-colors font-medium">
              Tratamientos
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-pink-400 transition-colors font-medium">
              Testimonios
            </button>
            <button onClick={() => scrollToSection('reserva')} className="text-gray-700 hover:text-pink-400 transition-colors font-medium">
              Reserva de Turnos
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-pink-400 transition-colors font-medium">
              Contacto
            </button>
          </nav>

          {/* Social Media */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://instagram.com/dra.danielabravo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gris-paloma">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-pink-400 transition-colors font-medium text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection('tratamientos')} className="text-gray-700 hover:text-pink-400 transition-colors font-medium text-left">
                Tratamientos
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-pink-400 transition-colors font-medium text-left">
                Testimonios
              </button>
              <button onClick={() => scrollToSection('reserva')} className="text-gray-700 hover:text-pink-400 transition-colors font-medium text-left">
                Reserva de Turnos
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-pink-400 transition-colors font-medium text-left">
                Contacto
              </button>
              <div className="pt-4 border-t border-gris-paloma">
                <a 
                  href="https://instagram.com/dra.danielabravo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
