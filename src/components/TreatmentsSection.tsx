
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';
import { cardTitleToSlug } from '@/data/treatments';
import dermaImg from '@/assets/11-tratamiento-dermatoscopia.webp.asset.json';
import prpImg from '@/assets/03-tratamiento-prp.webp.asset.json';
import mesoImg from '@/assets/04-tratamiento-mesoterapia.webp.asset.json';
import bioImg from '@/assets/05-tratamiento-bioestimulacion.webp.asset.json';
import botoxImg from '@/assets/06-tratamiento-toxina-botulinica.webp.asset.json';
import rellenosImg from '@/assets/07-tratamiento-rellenos-dermicos.webp.asset.json';
import peelingImg from '@/assets/08-tratamiento-peeling-quimico.webp.asset.json';
import mesoliftImg from '@/assets/09-tratamiento-mesolifting.webp.asset.json';
import crioImg from '@/assets/10-tratamiento-criocirugia.webp.asset.json';

type Treatment = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const TreatmentCard = ({ treatment, index }: { treatment: Treatment; index: number }) => {
  const { ref, visible } = useReveal<HTMLElement>();
  const slug = cardTitleToSlug[treatment.title];
  const cardContent = (
    <figure
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
      className={`tratamiento-card reveal ${visible ? 'reveal-visible' : ''} relative bg-blanco-calido rounded-2xl border border-rosa-empolvado overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-rosa-coral duration-300`}
    >
      <img
        src={treatment.image}
        alt={treatment.alt}
        className="tratamiento-img w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        decoding="async"
        width="400"
        height="192"
      />
      <figcaption className="p-4 md:p-6">
        <h3 className="tratamiento-nombre text-base md:text-lg font-medium text-gris-muy-oscuro leading-tight transition-colors duration-300 group-hover:text-rosa-coral">
          {treatment.title}
        </h3>
        {slug && (
          <span className="relative z-10 mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-rosa-coral group-hover:gap-2.5 transition-all duration-300">
            Ver más
            <ArrowRight size={16} aria-hidden="true" />
          </span>
        )}
        <p
          className={`tratamiento-desc pointer-events-none absolute top-0 left-0 right-0 ${
            slug ? 'bottom-14 md:bottom-16' : 'bottom-0'
          } bg-blanco-calido/95 backdrop-blur-sm p-4 md:p-6 text-gris-muy-oscuro font-light leading-relaxed text-sm md:text-base opacity-0 transform translate-y-[-10px] transition-all duration-300 ease-out flex items-center justify-center text-center group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0`}
        >
          {treatment.description}
        </p>
      </figcaption>
    </figure>
  );

  if (!slug) return cardContent;

  return (
    <Link
      to={`/tratamientos/${slug}`}
      className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-rosa-coral focus-visible:ring-offset-2"
      aria-label={`Ver más sobre ${treatment.title}`}
    >
      {cardContent}
    </Link>
  );
};

const TreatmentsSection = () => {
  const treatments = [
    {
      title: "PRP (Plasma Rico en Plaquetas) – Facial y Capilar",
      description: "Tratamiento de medicina regenerativa que utiliza plasma rico en plaquetas del propio paciente. Estimula la regeneración celular, mejora la calidad de la piel y trata la caída del cabello. Ideal para rejuvenecimiento facial natural y fortalecimiento capilar.",
      image: prpImg.url,
      alt: "Tratamiento PRP plasma rico en plaquetas facial y capilar en Vicente López y Zona Norte, dermatología regenerativa"
    },
    {
      title: "Mesoterapia Facial y Capilar en Vicente López",
      description: "Técnica mínimamente invasiva que consiste en microinyecciones de principios activos específicos. Revitaliza la piel del rostro, mejora la hidratación y estimula el crecimiento capilar. Tratamiento personalizado según las necesidades de cada paciente.",
      image: mesoImg.url,
      alt: "Mesoterapia facial y capilar en Vicente López y Zona Norte, microinyecciones para revitalización de la piel"
    },
    {
      title: "Bioestimulación Facial - Rejuvenecimiento Natural",
      description: "Tratamiento no invasivo que activa los procesos naturales de regeneración cutánea. Estimula la producción de colágeno y elastina, mejorando la textura, firmeza y luminosidad de la piel. Resultados graduales y naturales para un rostro renovado.",
      image: bioImg.url,
      alt: "Bioestimulación facial para producción de colágeno y elastina, rejuvenecimiento natural en Vicente López y Zona Norte"
    },
    {
      title: "Toxina Botulínica en Vicente López",
      description: "Aplicación profesional de toxina botulínica para suavizar arrugas de expresión y prevenir líneas futuras. Tratamiento seguro y efectivo para frente, entrecejo y patas de gallo. Resultados naturales que respetan la expresión facial.",
      image: botoxImg.url,
      alt: "Aplicación de toxina botulínica en Vicente López y Zona Norte para arrugas de expresión, frente y entrecejo"
    },
    {
      title: "Rellenos Dérmicos con Ácido Hialurónico",
      description: "Corrección de surcos nasogenianos, aumento de volumen en labios y pómulos con ácido hialurónico de alta calidad. Restaura la armonía facial de manera natural y segura. Técnica precisa para resultados equilibrados y duraderos.",
      image: rellenosImg.url,
      alt: "Rellenos dérmicos con ácido hialurónico para labios y pómulos en Vicente López y Zona Norte, dermatología estética"
    },
    {
      title: "Peelings Químicos - Renovación Cutánea",
      description: "Exfoliación controlada con ácidos específicos para renovar la capa superficial de la piel. Mejora textura, reduce manchas, cicatrices de acné y signos de envejecimiento. Diferentes intensidades según el tipo de piel y objetivos del tratamiento.",
      image: peelingImg.url,
      alt: "Peeling químico para exfoliación y renovación cutánea, tratamiento de manchas y acné en Vicente López y Zona Norte"
    },
    {
      title: "Mesolifting - Lifting Natural sin Cirugía",
      description: "Combinación de vitaminas, aminoácidos y antioxidantes aplicados mediante microinyecciones. Produce un efecto lifting natural, mejora la firmeza cutánea y aporta luminosidad. Alternativa no quirúrgica para rejuvenecer el rostro.",
      image: mesoliftImg.url,
      alt: "Mesolifting con vitaminas y aminoácidos, lifting natural sin cirugía en Vicente López y Zona Norte"
    },
    {
      title: "Criocirugía - Tratamiento con Frío Terapéutico",
      description: "Técnica dermatológica que utiliza frío extremo para eliminar lesiones cutáneas benignas y malignas. Procedimiento preciso y efectivo para verrugas, queratosis actínicas y otros tumores de piel. Mínimo tiempo de recuperación.",
      image: crioImg.url,
      alt: "Criocirugía con frío terapéutico para tratamiento de verrugas y queratosis en Vicente López y Zona Norte"
    },
    {
      title: "Dermatoscopía - Diagnóstico Avanzado de Lunares",
      description: "Examen no invasivo con dermatoscopio para evaluación detallada de lunares y lesiones cutáneas. Permite detección temprana de melanoma y otros tipos de cáncer de piel. Control dermatológico preventivo esencial para la salud cutánea.",
      image: dermaImg.url,
      alt: "Dermatoscopía para diagnóstico de lunares y detección de melanoma en Vicente López y Zona Norte"
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
              Centro especializado en <strong>dermatología clínica y estética</strong>. Además de los procedimientos de rejuvenecimiento, la Dra. Bravo atiende <strong>consultas médicas dermatológicas generales</strong>: diagnóstico y tratamiento de afecciones de la piel, control de lunares, acné y otras patologías. Cada procedimiento es personalizado según las necesidades específicas de tu piel.
            </p>
          </div>

          <div className="tratamientos-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {treatments.map((treatment, index) => (
              <TreatmentCard key={index} treatment={treatment} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
