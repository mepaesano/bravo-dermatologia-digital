import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const sectionLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'tratamientos', label: 'Tratamientos' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const linkClass = 'text-gris-oscuro hover:text-rosa-coral transition-colors font-light';

  return (
    <header className="bg-blanco border-b border-rosa-empolvado sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 md:flex-none text-center md:text-left">
            <a
              href="/#inicio"
              onClick={(e) => handleSectionClick(e, 'inicio')}
              className="text-2xl md:text-3xl font-light text-gris-muy-oscuro tracking-wide cursor-pointer hover:text-rosa-coral transition-colors"
            >
              Dra. Daniela Bravo
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {sectionLinks.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleSectionClick(e, item.id)}
                className={linkClass}
              >
                {item.label}
              </a>
            ))}
            <Link to="/turnos" onClick={() => setIsMenuOpen(false)} className={linkClass}>
              Turnos
            </Link>
            <a
              href="/#consultorios"
              onClick={(e) => handleSectionClick(e, 'consultorios')}
              className={linkClass}
            >
              Consultorios
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gris-oscuro"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 border-t border-rosa-empolvado pt-4">
            <div className="flex flex-col space-y-4 text-center">
              {sectionLinks.map((item) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleSectionClick(e, item.id)}
                  className={`${linkClass} py-2`}
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/turnos"
                onClick={() => setIsMenuOpen(false)}
                className={`${linkClass} py-2`}
              >
                Turnos
              </Link>
              <a
                href="/#consultorios"
                onClick={(e) => handleSectionClick(e, 'consultorios')}
                className={`${linkClass} py-2`}
              >
                Consultorios
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
