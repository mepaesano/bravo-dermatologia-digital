import React from 'react';
import { Instagram, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openGoogleReviews = () => {
    window.open('https://www.google.com/maps/place/Dra.+Daniela+Bravo/@-34.5224001,-58.4868692,765m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95bcb1f837d2c531:0x7120a5d35b1037d5!8m2!3d-34.5224001!4d-58.4842943!16s%2Fg%2F11xdy7m8bc?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <footer className="bg-blanco-calido border-t border-rosa-empolvado py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gris-muy-oscuro mb-4">Dra. Daniela Bravo</h2>
          <p className="text-gris-oscuro font-light mb-6">Dermatología clínica y estética</p>
          
          <a 
            href="https://instagram.com/dradanielabravo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-rosa-coral hover:text-rosa-coral/80 transition-colors font-light mb-6"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @dradanielabravo
          </a>

          <div className="mb-8">
            <button 
              onClick={openGoogleReviews}
              className="bg-rosa-coral text-blanco px-6 py-3 rounded-full font-medium hover:bg-rosa-coral/85 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mx-auto"
              aria-label="Déjanos tu reseña en Google"
            >
              <Star className="w-5 h-5" />
              Déjanos tu reseña en Google
            </button>
          </div>

          <div className="border-t border-rosa-empolvado pt-6">
            <p className="text-gris-oscuro font-light text-sm">
              © {currentYear} Dra. Daniela Bravo - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
