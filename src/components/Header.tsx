import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const sectionLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'tratamientos', label: 'Tratamientos' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Focus trap + Escape for the mobile panel
  useEffect(() => {
    if (!isMenuOpen) return;

    const panel = panelRef.current;
    const focusables = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []
      );

    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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

  const linkClass =
    'text-ink-2 hover:text-sage transition-colors inline-flex items-center min-h-[44px]';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-bone/90 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center gap-4">
          <a
            href="/#inicio"
            onClick={(e) => handleSectionClick(e, 'inicio')}
            className="font-display text-xl md:text-2xl text-ink hover:text-sage transition-colors"
          >
            Dra. Daniela Bravo
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-7">
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
            <Link to="/turnos" className={linkClass}>
              Turnos
            </Link>
            <a
              href="/#consultorios"
              onClick={(e) => handleSectionClick(e, 'consultorios')}
              className={linkClass}
            >
              Consultorios
            </a>
            <Link
              to="/turnos"
              className={`inline-flex items-center justify-center min-h-[44px] bg-clay text-white px-6 py-2 rounded-full font-medium shadow-soft transition-opacity duration-200 ${
                scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-hidden={!scrolled}
              tabIndex={scrolled ? 0 : -1}
            >
              Reservar turno
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] text-ink"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen panel */}
      {isMenuOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="md:hidden fixed inset-0 z-50 bg-bone flex flex-col"
        >
          <div className="flex justify-between items-center px-4 py-3 border-b border-line">
            <span className="font-display text-xl text-ink">Dra. Daniela Bravo</span>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                toggleRef.current?.focus();
              }}
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] text-ink"
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col gap-2 px-6 py-8">
            {sectionLinks.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleSectionClick(e, item.id)}
                className="font-display text-2xl text-ink py-3"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/turnos"
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-2xl text-ink py-3"
            >
              Turnos
            </Link>
            <a
              href="/#consultorios"
              onClick={(e) => handleSectionClick(e, 'consultorios')}
              className="font-display text-2xl text-ink py-3"
            >
              Consultorios
            </a>
          </nav>

          <div className="px-6 pb-10">
            <Link
              to="/turnos"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center min-h-[48px] bg-clay text-white px-6 py-3 rounded-full font-medium shadow-soft"
            >
              Reservar turno
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
