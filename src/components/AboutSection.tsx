
import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-blanco-calido border-t border-rosa-empolvado py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Texto a la izquierda */}
            <div className="lg:order-1 order-2">
              <h2 className="text-3xl md:text-4xl font-light text-gris-muy-oscuro mb-6 md:mb-8">
                Sobre la Dra. Daniela Bravo - Dermatóloga en Vicente López
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-gris-oscuro font-light leading-relaxed">
                <p>
                  <strong>Daniela Bravo</strong> es médica egresada de la Universidad de Buenos Aires (UBA) y <strong>especialista en Dermatología</strong>, formación que completó en el Hospital Dr. Houssay de Vicente López, donde también ejerció durante varios años como dermatóloga.
                </p>
                
                <p>
                  Es miembro de la <strong>Sociedad Argentina de Dermatología</strong> y ha realizado múltiples cursos de posgrado en <strong>dermatología clínica y estética</strong>, manteniéndose en constante actualización en las últimas técnicas de tratamientos dermatológicos y estéticos.
                </p>
                
                <p>
                  A lo largo de su carrera como <strong>dermatóloga en Vicente López</strong>, se ha dedicado al cuidado integral de la piel, combinando ciencia, experiencia y una atención cercana. Acompaña a sus pacientes con información clara, desmitificando creencias y promoviendo hábitos saludables basados en evidencia científica.
                </p>

                <p>
                  Su <strong>centro estético en Vicente López</strong> ofrece un abordaje personalizado que integra los tratamientos más modernos de <strong>dermatología estética</strong>, siempre priorizando la seguridad y los resultados naturales.
                </p>
              </div>
            </div>

            {/* Imagen a la derecha */}
            <div className="lg:order-2 order-1 flex justify-center">
              <div className="w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-lg bg-rosa-empolvado/20">
                <img 
                  src="/lovable-uploads/93a76c5c-7129-421e-a548-62cade32065f.png" 
                  alt="Dra. Daniela Bravo especialista dermatología estética Vicente López" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
