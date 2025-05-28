
import React from 'react';

const TreatmentsSection = () => {
  const treatments = [
    {
      title: "Plasma Rico en Plaquetas (PRP)",
      description: "Regeneración natural de la piel utilizando factores de crecimiento de tu propia sangre."
    },
    {
      title: "Mesoterapia Facial y Capilar",
      description: "Microinyecciones para revitalizar la piel del rostro y fortalecer el cabello."
    },
    {
      title: "Toxina Botulínica (Botox)",
      description: "Tratamiento para suavizar arrugas de expresión y prevenir líneas futuras."
    },
    {
      title: "Rellenos Dérmicos",
      description: "Corrección de surcos y aumento de volumen con ácido hialurónico."
    },
    {
      title: "Peelings Químicos",
      description: "Exfoliación controlada para renovar la piel y mejorar su textura."
    },
    {
      title: "Mesolifting",
      description: "Combinación de vitaminas y antioxidantes para un efecto lifting natural."
    },
    {
      title: "Criocirugía",
      description: "Tratamiento con frío para eliminar lesiones benignas de la piel."
    },
    {
      title: "Dermatoscopía",
      description: "Examen detallado de lunares y lesiones para detección temprana."
    },
  ];

  return (
    <section id="tratamientos" className="bg-blanco border-t border-rosa-empolvado py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gris-muy-oscuro mb-6">Tratamientos</h2>
            <p className="text-xl text-gris-oscuro font-light">
              Cada tratamiento es personalizado según tus necesidades específicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <div 
                key={index} 
                className="bg-blanco-calido p-8 rounded-2xl border border-rosa-empolvado hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-medium text-gris-muy-oscuro mb-4">{treatment.title}</h3>
                <p className="text-gris-oscuro font-light leading-relaxed">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
