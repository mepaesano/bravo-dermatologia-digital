
import React, { useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';

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
    <header className="bg-blanco-nieve shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo centrado en mobile, izquierda en desktop */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-light text-gris-paloma tracking-wide">
              Dra. Daniela Bravo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="text-gris-paloma hover:text-rosa-pastel transition-colors font-light"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('tratamientos')} 
              className="text-gris-paloma hover:text-rosa-pastel transition-colors font-light"
            >
              Tratamientos
            </button>
            <button 
              onClick={() => scrollToSection('turnos')} 
              className="text-gris-paloma hover:text-rosa-pastel transition-colors font-light"
            >
              Turnos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="text-gris-paloma hover:text-rosa-pastel transition-colors font-light"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gris-paloma"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 border-t border-gris-paloma/20 pt-4">
            <div className="flex flex-col space-y-4 text-center">
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="text-gris-paloma hover:text-rosa-pastel transition-colors font-light py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('tratamientos')} 
                className="text-gris-paloma hover:text-rosa-pastel transition-colors font-light py-2"
              >
                Tratamientos
              </button>
              <button 
                onClick={() => scrollToSection('turnos')} 
                className="text-gris-paloma hover:text-rosa-pastel transition-colors font-light py-2"
              >
                Turnos
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="text-gris-paloma hover:text-rosa-pastel transition-colors font-light py-2"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
