import React from 'react';

const TreatmentsSection = () => {
  const treatments = [
    {
      title: "Plasma Rico en Plaquetas (PRP)",
      description: "Regeneración celular natural utilizando factores de crecimiento de tu propia sangre para rejuvenecer la piel.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      benefits: ["Estimula colágeno", "Mejora textura", "Resultados naturales"]
    },
    {
      title: "Mesoterapia Facial y Capilar",
      description: "Técnica de microinyecciones para revitalizar la piel del rostro y fortalecer el cabello.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      benefits: ["Hidratación profunda", "Nutrición celular", "Prevención de caída"]
    },
    {
      title: "Rellenos Dérmicos",
      description: "Corrección de surcos, arrugas y aumento de volumen con ácido hialurónico de última generación.",
      image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      benefits: ["Efecto inmediato", "Resultados naturales", "Larga duración"]
    },
    {
      title: "Toxina Botulínica (Botox)",
      description: "Tratamiento para arrugas de expresión que suaviza líneas y previene nuevas marcas.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      benefits: ["Prevención de arrugas", "Resultados sutiles", "Procedimiento rápido"]
    },
    {
      title: "Peelings Químicos",
      description: "Exfoliación controlada para renovar la piel, mejorar manchas y textura.",
      image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      benefits: ["Renovación celular", "Mejora manchas", "Piel más luminosa"]
    },
    {
      title: "Mesolifting",
      description: "Combinación de mesoterapia con vitaminas y antioxidantes para un lifting natural.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      benefits: ["Efecto lifting", "Hidratación intensa", "Luminosidad natural"]
    },
    {
      title: "Criocirugía",
      description: "Tratamiento con frío extremo para eliminar lesiones benignas de la piel.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      benefits: ["Precisión máxima", "Mínima invasión", "Recuperación rápida"]
    },
    {
      title: "Dermatoscopía",
      description: "Examen detallado de lunares y lesiones cutáneas para detección temprana.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      benefits: ["Diagnóstico precoz", "Control evolutivo", "Prevención"]
    },
  ];

  return (
    <section id="tratamientos" className="py-24 bg-rosa-pastel">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Tratamientos</h2>
          <div className="h-1 w-20 bg-pink-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Ofrecemos un amplio espectro de tratamientos dermatológicos clínicos y estéticos, 
            personalizados para cada paciente y sus necesidades específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className="bg-blanco-nieve rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={treatment.image} 
                  alt={treatment.title} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{treatment.title}</h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <div className="border-t border-gray-100 pt-4 mt-2">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Beneficios:</h4>
                  <ul className="space-y-1">
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
