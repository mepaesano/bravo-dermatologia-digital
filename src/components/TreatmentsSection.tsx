
import React from 'react';

const TreatmentsSection = () => {
  const treatments = [
    {
      title: "PRP (Plasma Rico en Plaquetas) – Facial y Capilar",
      description: "Estimula la regeneración celular y mejora la calidad de la piel y del cuero cabelludo. Se aplica para tratar envejecimiento cutáneo, flacidez y caída del cabello.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Mesoterapia Facial y Capilar",
      description: "Microinyecciones de principios activos que revitalizan la piel y estimulan el crecimiento capilar. Técnica eficaz, segura y poco invasiva.",
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Bioestimulación Facial",
      description: "Tratamiento no invasivo que activa procesos naturales de regeneración en la piel, favoreciendo la producción de colágeno y elastina. Mejora textura, firmeza y luminosidad.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Toxina Botulínica (Botox)",
      description: "Tratamiento para suavizar arrugas de expresión y prevenir líneas futuras.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Rellenos Dérmicos",
      description: "Corrección de surcos y aumento de volumen con ácido hialurónico.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Peelings Químicos",
      description: "Exfoliación controlada para renovar la piel y mejorar su textura.",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Mesolifting",
      description: "Combinación de vitaminas y antioxidantes para un efecto lifting natural.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Criocirugía",
      description: "Tratamiento con frío para eliminar lesiones tanto benignas como malignas de la piel.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Dermatoscopía",
      description: "Examen detallado de lunares y lesiones para detección temprana.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
  ];

  return (
    <section id="tratamientos" className="bg-blanco border-t border-rosa-empolvado py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gris-muy-oscuro mb-6">Tratamientos</h2>
            <p className="text-xl text-gris-muy-oscuro font-light">
              Cada tratamiento es personalizado según tus necesidades específicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div 
                key={index} 
                className="bg-blanco-calido p-6 rounded-2xl border border-rosa-empolvado hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium text-gris-muy-oscuro mb-3">{treatment.title}</h3>
                <p className="text-gris-muy-oscuro font-light leading-relaxed text-sm">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
