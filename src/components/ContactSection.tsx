
import React from 'react';
import { Instagram, MapPin, Star } from 'lucide-react';

const ContactSection = () => {
  const consultorioImages = [
    {
      src: "/lovable-uploads/0623be76-fb61-476c-a8d7-edce4f2bd8af.png",
      alt: "Consultorio dermatología Vicente López - sala de consulta moderna con escritorio blanco"
    },
    {
      src: "/lovable-uploads/b87e7768-e5c3-4ec7-9140-94251e8c08ce.png", 
      alt: "Consultorio dermatológico Vicente López - equipamiento médico especializado"
    },
    {
      src: "/lovable-uploads/e68cd1e7-ad01-450c-8543-3c23bf4d3570.png",
      alt: "Recepción centro dermatológico Vicente López - sala de espera moderna"
    },
    {
      src: "/lovable-uploads/45d8ee2a-dde6-48d9-b805-6664381690b3.png",
      alt: "Consultorio Dra. Daniela Bravo - diplomas y certificaciones dermatología"
    },
    {
      src: "/lovable-uploads/d829981e-36e1-4cae-9f55-5ee5ae983cf0.png",
      alt: "Pasillo centro médico Vicente López - instalaciones modernas dermatología"
    },
    {
      src: "/lovable-uploads/297cde49-b6d1-45aa-8e36-c79961c785f1.png",
      alt: "Consultorio dermatológico moderno - vista de la sala de consulta"
    }
  ];

  // Duplicamos las imágenes para crear el efecto infinito
  const duplicatedImages = [...consultorioImages, ...consultorioImages];

  return (
    <section id="contacto" className="bg-blanco border-t border-rosa-empolvado py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gris-muy-oscuro mb-6">Consultorios</h2>
            <p className="text-xl text-gris-oscuro font-light leading-relaxed">
              Nuestros consultorios están ubicados estratégicamente para tu comodidad
            </p>
          </div>

          {/* Carousel infinito personalizado */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-gris-muy-oscuro mb-8 text-center">
              Conocé nuestras instalaciones
            </h3>
            <div className="max-w-5xl mx-auto overflow-hidden">
              <div className="relative">
                <div 
                  className="flex"
                  style={{
                    width: `${duplicatedImages.length * 320}px`,
                    animation: 'scroll-infinite 30s linear infinite'
                  }}
                >
                  {duplicatedImages.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-80 px-3">
                      <div className="bg-blanco-calido border border-rosa-empolvado rounded-3xl overflow-hidden shadow-sm">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Responsive grid - side by side on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Vicente López */}
            <div className="bg-blanco-calido border border-rosa-empolvado p-8 rounded-3xl">
              <h3 className="text-xl font-medium text-gris-muy-oscuro mb-6 flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-rosa-coral" />
                Vicente López
              </h3>
              <div className="space-y-3 text-gris-oscuro font-light">
                <p>Av. Maipú 1651, Piso 2</p>
                <p>Vicente López, Buenos Aires</p>
                <div className="pt-4 border-t border-rosa-empolvado">
                  <p>Lunes: 15 a 19 hs</p>
                  <p>Martes: 15 a 19 hs</p>
                </div>
              </div>
              <div className="mt-6">
                <iframe title="Ubicación Vicente López" className="w-full h-48 rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.2836464862384!2d-58.47483058417768!3d-34.53169986116018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb425602b035b%3A0x26dee22a65f2babb!2sAv.%20Maip%C3%BA%201651%2C%20Vicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1653021439569!5m2!1ses!2sar" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            {/* Capilla del Señor */}
            <div className="bg-blanco-calido border border-rosa-empolvado p-8 rounded-3xl">
              <h3 className="text-xl font-medium text-gris-muy-oscuro mb-6 flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-rosa-coral" />
                Capilla del Señor
              </h3>
              <div className="space-y-3 text-gris-oscuro font-light">
                <p>Bartolomé Mitre 480</p>
                <p>Exaltación de la Cruz, Provincia de Buenos Aires</p>
                
                <div className="pt-4 border-t border-rosa-empolvado">
                  <p>Miércoles: 9 a 13 hs</p>
                </div>
              </div>
              <div className="mt-6">
                <iframe title="Ubicación Capilla del Señor" className="w-full h-48 rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.8947368421053!2d-59.11285368479532!3d-34.380944580489825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bf7f7f7f7f7f7f%3A0x7f7f7f7f7f7f7f7f!2sBartolom%C3%A9%20Mitre%20480%2C%20B2812%20Capilla%20del%20Se%C3%B1or%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1653021439569!5m2!1ses!2sar" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          {/* Social links and reviews */}
          <div className="text-center mt-12 space-y-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href="https://instagram.com/dradanielabravo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-rosa-coral hover:text-rosa-coral/80 transition-colors font-light"
              >
                <Instagram className="w-5 h-5 mr-2" />
                @dradanielabravo
              </a>
              
              <a 
                href="https://g.page/r/CdU3EFvTpSBxEBM/review" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-rosa-coral hover:text-rosa-coral/80 transition-colors font-light"
              >
                <Star className="w-5 h-5 mr-2" />
                Dejanos tu reseña en Google
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${consultorioImages.length * 320}px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection;
