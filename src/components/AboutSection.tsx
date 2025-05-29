
import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-blanco-calido border-t border-rosa-empolvado py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto a la izquierda */}
            <div className="lg:order-1 order-2">
              <h2 className="text-4xl font-light text-gris-muy-oscuro mb-8">
                Sobre la Dra. Daniela Bravo
              </h2>
              
              <div className="space-y-6 text-gris-oscuro font-light leading-relaxed">
                <p>
                  La Dra. Daniela Bravo es médica egresada de la Universidad de Buenos Aires (UBA) y especialista en Dermatología, formación que completó en el Hospital Dr. Houssay de Vicente López, donde también trabajó durante varios años.
                </p>
                
                <p>
                  Es miembro de la Sociedad Argentina de Dermatología y ha realizado múltiples cursos de posgrado en dermatología clínica y estética.
                </p>
                
                <p>
                  A lo largo de su carrera, se ha dedicado al cuidado integral de la piel, combinando ciencia, actualización constante y una atención cálida y cercana. Educa a sus pacientes, derriba mitos comunes y promueve hábitos saludables basados en evidencia.
                </p>
              </div>
            </div>

            {/* Imagen a la derecha */}
            <div className="lg:order-2 order-1 flex justify-center">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-lg bg-rosa-empolvado/20">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Dra. Daniela Bravo - Especialista en Dermatología" 
                  className="w-full h-full object-cover"
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
