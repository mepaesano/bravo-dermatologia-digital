// Public information about the practice, mirrored from the website content.

export type Treatment = {
  slug: string;
  name: string;
  description: string;
  category: "estetica" | "clinica";
};

export const treatments: Treatment[] = [
  {
    slug: "prp",
    name: "PRP (Plasma Rico en Plaquetas) – Facial y Capilar",
    description:
      "Medicina regenerativa con plasma rico en plaquetas del propio paciente. Estimula la regeneración celular, mejora la calidad de la piel y trata la caída del cabello.",
    category: "estetica",
  },
  {
    slug: "mesoterapia",
    name: "Mesoterapia Facial y Capilar",
    description:
      "Microinyecciones de principios activos específicos. Revitaliza la piel del rostro, mejora la hidratación y estimula el crecimiento capilar.",
    category: "estetica",
  },
  {
    slug: "bioestimulacion",
    name: "Bioestimulación Facial",
    description:
      "Tratamiento no invasivo que estimula la producción de colágeno y elastina, mejorando textura, firmeza y luminosidad de la piel.",
    category: "estetica",
  },
  {
    slug: "toxina-botulinica",
    name: "Toxina Botulínica",
    description:
      "Aplicación profesional para suavizar arrugas de expresión en frente, entrecejo y patas de gallo, con resultados naturales.",
    category: "estetica",
  },
  {
    slug: "rellenos-dermicos",
    name: "Rellenos Dérmicos con Ácido Hialurónico",
    description:
      "Corrección de surcos nasogenianos y aumento de volumen en labios y pómulos con ácido hialurónico de alta calidad.",
    category: "estetica",
  },
  {
    slug: "peelings-quimicos",
    name: "Peelings Químicos",
    description:
      "Exfoliación controlada con ácidos específicos. Mejora textura, reduce manchas, cicatrices de acné y signos de envejecimiento.",
    category: "estetica",
  },
  {
    slug: "mesolifting",
    name: "Mesolifting",
    description:
      "Vitaminas, aminoácidos y antioxidantes en microinyecciones para un efecto lifting natural sin cirugía.",
    category: "estetica",
  },
  {
    slug: "criocirugia",
    name: "Criocirugía",
    description:
      "Frío terapéutico para eliminar lesiones cutáneas benignas y malignas: verrugas, queratosis actínicas y otros tumores de piel.",
    category: "clinica",
  },
  {
    slug: "dermatoscopia",
    name: "Dermatoscopía",
    description:
      "Examen no invasivo de lunares y lesiones cutáneas para detección temprana de melanoma y otros cánceres de piel.",
    category: "clinica",
  },
];

export type Office = {
  slug: string;
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  whatsapp: string;
  hours: string[];
};

export const offices: Office[] = [
  {
    slug: "vicente-lopez",
    name: "Consultorio Vicente López",
    address: "Av. Maipú 1651, Piso 2",
    city: "Vicente López",
    province: "Buenos Aires",
    postalCode: "1638",
    phone: "+54 11 3368-1890",
    whatsapp: "https://wa.me/5491133681890",
    hours: ["Lunes: 15 a 19 hs", "Martes: 15 a 19 hs"],
  },
  {
    slug: "capilla-del-senor",
    name: "Consultorio Capilla del Señor",
    address: "Bartolomé Mitre 480",
    city: "Capilla del Señor",
    province: "Buenos Aires",
    postalCode: "2812",
    phone: "+54 11 7654-6995",
    whatsapp: "https://wa.me/5491176546995",
    hours: ["Miércoles: 9 a 13 hs"],
  },
];

export const doctor = {
  name: "Dra. Daniela Bravo",
  specialty: "Dermatología clínica y estética",
  education:
    "Médica egresada de la Universidad de Buenos Aires (UBA), especialista en Dermatología con formación en el Hospital Dr. Houssay de Vicente López.",
  memberships: ["Sociedad Argentina de Dermatología"],
  summary:
    "Dedicada al cuidado integral de la piel, combinando ciencia, experiencia y atención cercana. Ofrece tratamientos dermatológicos y estéticos personalizados priorizando la seguridad y los resultados naturales.",
  website: "https://dradanielabravo.com",
  areasServed: ["Vicente López", "Capilla del Señor", "Buenos Aires"],
};
