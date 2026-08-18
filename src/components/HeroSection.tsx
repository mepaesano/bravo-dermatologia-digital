import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, Star } from 'lucide-react';
import heroPortrait from '@/assets/02-sobre-dra-daniela-bravo.webp.asset.json';

const GOOGLE_PROFILE_URL =
  'https://www.google.com/maps/place/Dra.+Daniela+Bravo/@-34.5224001,-58.4868692,765m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95bcb1f837d2c531:0x7120a5d35b1037d5!8m2!3d-34.5224001!4d-58.4842943!16s%2Fg%2F11xdy7m8bc';

const credentials = [
  'Médica UBA',
  'Especialista — Hospital Houssay',
  'Sociedad Argentina de Dermatología',
];

const HeroSection = () => {
  const scrollToTreatments = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const element = document.getElementById('tratamientos');
    if (element) {
      event.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FBF9F6 0%, #F4F0EA 100%)' }}
    >
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          {/* Columna izquierda */}
          <div className="text-left">
            <p
              className="text-clay uppercase mb-5"
              style={{ fontSize: '0.75rem', letterSpacing: '0.16em', fontWeight: 650 }}
            >
              Dermatología clínica y estética
            </p>

            <h1 className="mb-6">
              <span className="block text-ink">Dra. Daniela Bravo</span>
              <span className="block text-sage">
                Dermatóloga en Vicente López y Zona Norte
              </span>
            </h1>

            <p className="text-ink-2 max-w-xl mb-6">
              Consulta médica dermatológica y tratamientos estéticos con resultados
              naturales. Dos consultorios: Vicente López y Capilla del Señor.
            </p>

            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-8 py-2 rounded-lg hover:opacity-90 transition-opacity"
              aria-label="Ver las opiniones de pacientes en Google (5,0 sobre 5, 9 opiniones)"
            >
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={16} className="text-clay fill-clay" />
                ))}
              </span>
              <span className="font-semibold text-ink">5,0 en Google</span>
              <span className="text-ink-3">· 9 opiniones de pacientes</span>
            </a>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/turnos"
                className="inline-flex items-center justify-center min-h-[44px] bg-clay text-white px-8 py-3 rounded-full font-medium shadow-soft hover:shadow-lift hover:bg-clay/90 transition-all"
              >
                Reservar un turno
              </Link>
              <a
                href="/#tratamientos"
                onClick={scrollToTreatments}
                className="inline-flex items-center justify-center min-h-[44px] border border-sage text-sage px-8 py-3 rounded-full font-medium hover:bg-sage hover:text-white transition-colors"
              >
                Ver tratamientos
              </a>
            </div>

            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-ink-3" style={{ fontSize: '0.8rem' }}>
              {credentials.map((item, index) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-sage shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                  {index < credentials.length - 1 && (
                    <span className="ml-1 text-line" aria-hidden="true">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha */}
          <div className="relative order-first lg:order-none">
            <div
              className="absolute -top-10 -right-8 w-56 h-56 md:w-72 md:h-72 rounded-full bg-clay-lt opacity-40 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative">
              <img
                src={heroPortrait.url}
                alt="Dra. Daniela Bravo dermatóloga especialista en Vicente López y Zona Norte, centro estético de dermatología clínica y estética"
                className="w-full max-w-md mx-auto object-cover rounded-[14px] shadow-lift"
                style={{ aspectRatio: '4 / 5' }}
                width="480"
                height="600"
                loading="eager"
                decoding="async"
                {...{ fetchpriority: "high" }}
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:-left-2 max-w-[16rem] bg-white rounded-xl shadow-soft px-4 py-3 flex items-start gap-3">
                <Clock size={18} className="text-sage mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-ink-2" style={{ fontSize: '0.875rem', lineHeight: 1.4 }}>
                  Lunes y martes 15-19 h · Miércoles 9-13 h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
