import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const offices = [
  {
    name: 'Vicente López',
    address: 'Av. Maipú 1651, Piso 2',
    city: 'Vicente López, Buenos Aires',
    hours: ['Lunes: 15 a 19 hs', 'Martes: 15 a 19 hs'],
    mapTitle: 'Ubicación consultorio Vicente López',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.2836464862384!2d-58.47483058417768!3d-34.53169986116018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb425602b035b%3A0x26dee22a65f2babb!2sAv.%20Maip%C3%BA%201651%2C%20Vicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1653021439569!5m2!1ses!2sar',
  },
  {
    name: 'Capilla del Señor',
    address: 'Bartolomé Mitre 480',
    city: 'Exaltación de la Cruz, Provincia de Buenos Aires',
    hours: ['Miércoles: 9 a 13 hs'],
    mapTitle: 'Ubicación consultorio Capilla del Señor',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.8947368421053!2d-59.11285368479532!3d-34.380944580489825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bf7f7f7f7f7f7f%3A0x7f7f7f7f7f7f7f7f!2sBartolom%C3%A9%20Mitre%20480%2C%20B2812%20Capilla%20del%20Se%C3%B1or%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1653021439569!5m2!1ses!2sar',
  },
];

const OfficesSection = () => {
  return (
    <section id="consultorios" className="bg-blanco border-t border-rosa-empolvado py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gris-muy-oscuro mb-6">Consultorios</h2>
            <p className="text-xl text-gris-oscuro font-light leading-relaxed">
              Dos ubicaciones para tu comodidad, en Vicente López y Capilla del Señor
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {offices.map((office) => (
              <div
                key={office.name}
                className="bg-blanco-calido border border-rosa-empolvado p-8 rounded-3xl"
              >
                <h3 className="text-xl font-medium text-gris-muy-oscuro mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-rosa-coral" />
                  {office.name}
                </h3>
                <div className="space-y-3 text-gris-oscuro font-light">
                  <p>{office.address}</p>
                  <p>{office.city}</p>
                  <div className="pt-4 border-t border-rosa-empolvado space-y-1">
                    <p className="flex items-center text-gris-muy-oscuro">
                      <Clock className="w-4 h-4 mr-2 text-rosa-coral" />
                      Horarios de atención
                    </p>
                    {office.hours.map((hour) => (
                      <p key={hour}>{hour}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <iframe
                    title={office.mapTitle}
                    className="w-full h-48 rounded-xl"
                    src={office.mapSrc}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/turnos"
              className="inline-block bg-rosa-coral text-blanco px-8 py-4 rounded-full font-light hover:bg-rosa-coral/90 transition-colors"
            >
              Reservar un turno
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;
