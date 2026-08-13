import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useReveal } from '@/hooks/use-reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { treatmentPagesBySlug, type TreatmentPageData } from '@/data/treatments';

const BASE_URL = 'https://dradanielabravo.com';
const DEFAULT_DESCRIPTION =
  'Dra. Daniela Bravo, dermatóloga especialista en Vicente López y Zona Norte. Centro estético con tratamientos de toxina botulínica, mesoterapia, PRP, peelings químicos, rellenos dérmicos. Consultorio dermatológico en Vicente López y Capilla del Señor.';

const RevealBlock = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const TreatmentContent = ({ treatment }: { treatment: TreatmentPageData }) => {
  React.useEffect(() => {
    document.title = treatment.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute('content', treatment.metaDescription);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE_URL}/` },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Tratamientos',
            item: `${BASE_URL}/#tratamientos`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: treatment.name,
            item: `${BASE_URL}/tratamientos/${treatment.slug}`,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: treatment.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ]);
    script.setAttribute('data-treatment-schema', treatment.slug);
    document.head.appendChild(script);

    return () => {
      metaDescription?.setAttribute('content', DEFAULT_DESCRIPTION);
      script.remove();
    };
  }, [treatment]);

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [treatment.slug]);

  return (
    <div className="min-h-screen bg-blanco-calido">
      <Header />
      <main>
        <article className="container mx-auto px-4 md:px-6 py-8 md:py-14">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6 md:mb-10">
              <ol className="flex flex-wrap items-center gap-1 text-xs md:text-sm text-gris-oscuro font-light">
                <li>
                  <Link to="/" className="hover:text-rosa-coral transition-colors duration-200">
                    Inicio
                  </Link>
                </li>
                <ChevronRight size={14} className="text-rosa-empolvado" aria-hidden="true" />
                <li>
                  <Link
                    to="/#tratamientos"
                    className="hover:text-rosa-coral transition-colors duration-200"
                  >
                    Tratamientos
                  </Link>
                </li>
                <ChevronRight size={14} className="text-rosa-empolvado" aria-hidden="true" />
                <li aria-current="page" className="text-rosa-coral">
                  {treatment.name}
                </li>
              </ol>
            </nav>

            <header className="mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl font-light text-gris-muy-oscuro leading-tight mb-6">
                {treatment.h1}
              </h1>
              <img
                src={treatment.image}
                alt={treatment.alt}
                className="w-full h-56 md:h-80 object-cover rounded-2xl border border-rosa-empolvado"
                loading="lazy"
                decoding="async"
                width="896"
                height="320"
              />
            </header>

            <RevealBlock className="space-y-4 md:space-y-6 mb-12 md:mb-16">
              {treatment.intro.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg text-gris-muy-oscuro font-light leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </RevealBlock>

            <RevealBlock className="mb-12 md:mb-16">
              <section className="bg-blanco border border-rosa-empolvado rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-light text-gris-muy-oscuro mb-6">
                  ¿Cómo es la sesión?
                </h2>
                <ol className="space-y-4">
                  {treatment.session.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rosa-coral text-blanco text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-base md:text-lg text-gris-muy-oscuro font-light leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            </RevealBlock>

            <RevealBlock className="mb-12 md:mb-16">
              <section className="bg-blanco-calido border border-rosa-empolvado rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-light text-gris-muy-oscuro mb-6">
                  Cuidados posteriores
                </h2>
                <ul className="space-y-3 list-disc pl-5">
                  {treatment.aftercare.map((care, index) => (
                    <li
                      key={index}
                      className="text-base md:text-lg text-gris-muy-oscuro font-light leading-relaxed"
                    >
                      {care}
                    </li>
                  ))}
                </ul>
              </section>
            </RevealBlock>

            <RevealBlock className="mb-12 md:mb-16">
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-gris-muy-oscuro mb-6">
                  Preguntas frecuentes
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {treatment.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="border-rosa-empolvado"
                    >
                      <AccordionTrigger className="text-left text-base md:text-lg font-medium text-gris-muy-oscuro hover:text-rosa-coral">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-gris-muy-oscuro font-light leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </RevealBlock>

            <RevealBlock>
              <section className="text-center bg-blanco border border-rosa-empolvado rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-light text-gris-muy-oscuro mb-4">
                  Reservá tu turno en Vicente López
                </h2>
                <p className="text-base md:text-lg text-gris-muy-oscuro font-light mb-8 max-w-2xl mx-auto">
                  Coordinamos una consulta para evaluar tu piel y definir si este tratamiento es el
                  indicado para vos.
                </p>
                <a
                  href="https://wa.me/5491133681890?text=Hola%2C%20quiero%20consultar%20por%20un%20turno%20con%20la%20Dra.%20Bravo%20en%20Vicente%20L%C3%B3pez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-rosa-coral text-blanco px-8 md:px-12 py-3 md:py-4 rounded-full font-medium hover:bg-rosa-coral/85 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
                  aria-label={`Reservar turno para ${treatment.name} en Vicente López por WhatsApp`}
                >
                  Reservar turno
                </a>
              </section>
            </RevealBlock>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

const Tratamiento = () => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = slug ? treatmentPagesBySlug[slug] : undefined;

  if (!treatment) {
    return <Navigate to="/#tratamientos" replace />;
  }

  return <TreatmentContent treatment={treatment} />;
};

export default Tratamiento;
