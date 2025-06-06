
import React from 'react';

const TreatmentsSection = () => {
  const treatments = [
    {
      title: "PRP (Plasma Rico en Plaquetas) – Facial y Capilar",
      description: "Tratamiento de medicina regenerativa que utiliza plasma rico en plaquetas del propio paciente. Estimula la regeneración celular, mejora la calidad de la piel y trata la caída del cabello. Ideal para rejuvenecimiento facial natural y fortalecimiento capilar.",
      image: "/lovable-uploads/deb698f4-52a8-4703-bc6c-4fa84db26863.png",
      alt: "Tratamiento PRP plasma rico en plaquetas facial y capilar en Vicente López, dermatología regenerativa"
    },
    {
      title: "Mesoterapia Facial y Capilar en Vicente López",
      description: "Técnica mínimamente invasiva que consiste en microinyecciones de principios activos específicos. Revitaliza la piel del rostro, mejora la hidratación y estimula el crecimiento capilar. Tratamiento personalizado según las necesidades de cada paciente.",
      image: "/lovable-uploads/9b0582e5-9635-4d75-b1fc-d234bf70d989.png",
      alt: "Mesoterapia facial y capilar en Vicente López, microinyecciones para revitalización de la piel"
    },
    {
      title: "Bioestimulación Facial - Rejuvenecimiento Natural",
      description: "Tratamiento no invasivo que activa los procesos naturales de regeneración cutánea. Estimula la producción de colágeno y elastina, mejorando la textura, firmeza y luminosidad de la piel. Resultados graduales y naturales para un rostro renovado.",
      image: "/lovable-uploads/9fc54570-1151-45db-994f-5126dd8a216d.png",
      alt: "Bioestimulación facial para producción de colágeno y elastina, rejuvenecimiento natural en Vicente López"
    },
    {
      title: "Toxina Botulínica (Botox) en Vicente López",
      description: "Aplicación profesional de toxina botulínica para suavizar arrugas de expresión y prevenir líneas futuras. Tratamiento seguro y efectivo para frente, entrecejo y patas de gallo. Resultados naturales que respetan la expresión facial.",
      image: "/lovable-uploads/c30640c7-f0dc-4c13-8453-0c2674278869.png",
      alt: "Aplicación de Botox y toxina botulínica en Vicente López para arrugas de expresión, frente y entrecejo"
    },
    {
      title: "Rellenos Dérmicos con Ácido Hialurónico",
      description: "Corrección de surcos nasogenianos, aumento de volumen en labios y pómulos con ácido hialurónico de alta calidad. Restaura la armonía facial de manera natural y segura. Técnica precisa para resultados equilibrados y duraderos.",
      image: "/lovable-uploads/895e3ba1-baf9-42d3-bf68-830dcd2343ed.png",
      alt: "Rellenos dérmicos con ácido hialurónico para labios y pómulos en Vicente López, dermatología estética"
    },
    {
      title: "Peelings Químicos - Renovación Cutánea",
      description: "Exfoliación controlada con ácidos específicos para renovar la capa superficial de la piel. Mejora textura, reduce manchas, cicatrices de acné y signos de envejecimiento. Diferentes intensidades según el tipo de piel y objetivos del tratamiento.",
      image: "/lovable-uploads/db89a893-3442-417d-a37c-ab1caea791df.png",
      alt: "Peeling químico para exfoliación y renovación cutánea, tratamiento de manchas y acné en Vicente López"
    },
    {
      title: "Mesolifting - Lifting Natural sin Cirugía",
      description: "Combinación de vitaminas, aminoácidos y antioxidantes aplicados mediante microinyecciones. Produce un efecto lifting natural, mejora la firmeza cutánea y aporta luminosidad. Alternativa no quirúrgica para rejuvenecer el rostro.",
      image: "/lovable-uploads/e083de57-8c25-4fad-99d3-a0dce7648ffb.png",
      alt: "Mesolifting con vitaminas y aminoácidos, lifting natural sin cirugía en Vicente López"
    },
    {
      title: "Criocirugía - Tratamiento con Frío Terapéutico",
      description: "Técnica dermatológica que utiliza frío extremo para eliminar lesiones cutáneas benignas y malignas. Procedimiento preciso y efectivo para verrugas, queratosis actínicas y otros tumores de piel. Mínimo tiempo de recuperación.",
      image: "/lovable-uploads/183df9c3-3a87-4def-9297-bc265dfa8fa7.png",
      alt: "Criocirugía con frío terapéutico para tratamiento de verrugas y queratosis en Vicente López"
    },
    {
      title: "Dermatoscopía - Diagnóstico Avanzado de Lunares",
      description: "Examen no invasivo con dermatoscopio digital para evaluación detallada de lunares y lesiones cutáneas. Permite detección temprana de melanoma y otros cáncer de piel. Control dermatológico preventivo esencial para la salud cutánea.",
      image: "/lovable-uploads/2b013886-941f-4b58-8294-820f763935a6.png",
      alt: "Dermatoscopía digital para diagnóstico de lunares y detección de melanoma en Vicente López"
    },
  ];

  return (
    <section id="tratamientos" className="bg-blanco border-t border-rosa-empolvado py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gris-muy-oscuro mb-4 md:mb-6">
              Tratamientos Dermatológicos y Estéticos en Vicente López
            </h2>
            <p className="text-lg md:text-xl text-gris-muy-oscuro font-light max-w-4xl mx-auto px-4">
              Centro especializado en <strong>dermatología estética</strong> con los tratamientos más avanzados. Cada procedimiento es personalizado según las necesidades específicas de tu piel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {treatments.map((treatment, index) => (
              <article 
                key={index} 
                className="bg-blanco-calido p-4 md:p-6 rounded-2xl border border-rosa-empolvado hover:shadow-md transition-all duration-300 group"
              >
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.alt}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                  />
                </div>
                <h3 className="text-base md:text-lg font-medium text-gris-muy-oscuro mb-3 leading-tight">
                  {treatment.title}
                </h3>
                <p className="text-gris-muy-oscuro font-light leading-relaxed text-sm md:text-base">
                  {treatment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
