
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToTurnos = () => {
    navigate('/turnos');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setIsMenuOpen(false);
  };

  const navigateToConsultorios = () => {
    navigate('/turnos');
    setTimeout(() => {
      const element = document.getElementById('consultorios');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-blanco border-b border-rosa-empolvado sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 md:flex-none text-center md:text-left">
            <div 
              className="cursor-pointer flex justify-center md:justify-start"
              onClick={() => navigate('/')}
            >
              <img 
                src="/lovable-uploads/ae1567a4-9f17-4e47-8bbc-987dcd747ac0.png" 
                alt="Dra. Daniela Bravo - Dermatóloga Vicente López" 
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="text-gris-oscuro hover:text-rosa-coral transition-colors font-light"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="text-gris-oscuro hover:text-rosa-coral transition-colors font-light"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('tratamientos')} 
              className="text-gris-oscuro hover:text-rosa-coral transition-colors font-light"
            >
              Tratamientos
            </button>
            <button 
              onClick={navigateToTurnos} 
              className="text-gris-oscuro hover:text-rosa-coral transition-colors font-light"
            >
              Turnos
            </button>
            <button 
              onClick={navigateToConsultorios} 
              className="text-gris-oscuro hover:text-rosa-coral transition-colors font-light"
            >
              Consultorios
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gris-oscuro"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 border-t border-rosa-empolvado pt-4">
            <div className="flex flex-col space-y-4 text-center">
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="text-gris-oscuro hover:text-rosa-coral transition-colors font-light py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="text-gris-oscuro hover:text-rosa-coral transition-colors font-light py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('tratamientos')} 
                className="text-gris-oscuro hover:text-rosa-coral transition-colors font-light py-2"
              >
                Tratamientos
              </button>
              <button 
                onClick={navigateToTurnos} 
                className="text-gris-oscuro hover:text-rosa-coral transition-colors font-light py-2"
              >
                Turnos
              </button>
              <button 
                onClick={navigateToConsultorios} 
                className="text-gris-oscuro hover:text-rosa-coral transition-colors font-light py-2"
              >
                Consultorios
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
