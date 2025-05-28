
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gris-paloma/20 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gris-paloma mb-4">Dra. Daniela Bravo</h2>
          <p className="text-gris-paloma/70 font-light mb-6">
            Dermatología estética con enfoque humano
          </p>
          
          <a 
            href="https://instagram.com/dradanielabravo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-rosa-pastel hover:text-rosa-pastel/80 transition-colors font-light mb-8"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @dradanielabravo
          </a>

          <div className="border-t border-gris-paloma/20 pt-6">
            <p className="text-gris-paloma/60 font-light text-sm">
              © {currentYear} Dra. Daniela Bravo - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
