import dermaImg from '@/assets/11-tratamiento-dermatoscopia.webp.asset.json';
import prpImg from '@/assets/03-tratamiento-prp.webp.asset.json';
import mesoImg from '@/assets/04-tratamiento-mesoterapia.webp.asset.json';
import botoxImg from '@/assets/06-tratamiento-toxina-botulinica.webp.asset.json';
import rellenosImg from '@/assets/07-tratamiento-rellenos-dermicos.webp.asset.json';
import peelingImg from '@/assets/08-tratamiento-peeling-quimico.webp.asset.json';

export type TreatmentPageData = {
  slug: string;
  /** Short name used in menus, breadcrumbs and cards */
  name: string;
  /** Unique <h1> */
  h1: string;
  title: string;
  metaDescription: string;
  image: string;
  alt: string;
  intro: string[];
  session: string[];
  aftercare: string[];
  faqs: { question: string; answer: string }[];
};

export const treatmentPages: TreatmentPageData[] = [
  {
    slug: 'toxina-botulinica',
    name: 'Toxina Botulínica',
    h1: 'Toxina Botulínica en Vicente López',
    title: 'Toxina Botulínica en Vicente López | Dra. Daniela Bravo',
    metaDescription:
      'Aplicación de toxina botulínica en Vicente López con la Dra. Daniela Bravo, dermatóloga. Suavizá arrugas de expresión en frente, entrecejo y patas de gallo con resultados naturales.',
    image: botoxImg.url,
    alt: 'Aplicación de toxina botulínica en Vicente López para arrugas de expresión, frente y entrecejo',
    intro: [
      'La toxina botulínica es uno de los tratamientos más elegidos dentro de la dermatología estética para suavizar las arrugas de expresión. Actúa relajando de manera temporal la musculatura responsable de las líneas dinámicas del rostro, sin modificar los rasgos ni la naturalidad del gesto.',
      'En el consultorio de Vicente López la aplicación es siempre personalizada: se evalúa la fuerza muscular, la calidad de la piel y los objetivos de cada paciente para definir las zonas y las dosis. Las áreas más tratadas son frente, entrecejo y patas de gallo.',
      'Además de su uso estético, la toxina botulínica tiene indicaciones médicas como el tratamiento de la sudoración excesiva (hiperhidrosis) en axilas, palmas y plantas. En todos los casos la indicación la define la evaluación dermatológica previa.',
    ],
    session: [
      'Consulta inicial y evaluación de la dinámica facial en reposo y en movimiento.',
      'Definición del plan de tratamiento: zonas a tratar, unidades y expectativas de resultado.',
      'Limpieza y antisepsia de la piel; si es necesario se aplica frío local para mayor confort.',
      'Aplicación con aguja muy fina en los puntos musculares seleccionados. La sesión dura entre 15 y 20 minutos.',
      'Indicaciones posteriores y control a los 15 días para evaluar el resultado y realizar ajustes si corresponde.',
    ],
    aftercare: [
      'No masajear ni presionar las zonas tratadas durante las primeras 24 horas.',
      'Mantener la cabeza erguida y evitar acostarse durante las 4 horas posteriores.',
      'Evitar actividad física intensa, sauna y exposición solar directa por 24 a 48 horas.',
      'Es normal observar pequeñas pápulas o enrojecimiento leve que desaparecen en pocas horas.',
      'El efecto comienza a notarse entre el día 3 y 7, con resultado completo a los 15 días.',
    ],
    faqs: [
      {
        question: '¿Cuánto dura el efecto de la toxina botulínica?',
        answer:
          'En promedio entre 4 y 6 meses, según el metabolismo, la zona tratada y la fuerza muscular de cada paciente. Con aplicaciones periódicas suele espaciarse la frecuencia.',
      },
      {
        question: '¿Duele la aplicación?',
        answer:
          'La molestia es mínima porque se utilizan agujas muy finas. La mayoría de los pacientes lo describe como una pequeña picadura y puede aplicarse frío local para mayor confort.',
      },
      {
        question: '¿Voy a perder expresión facial?',
        answer:
          'No. El objetivo del tratamiento es un resultado natural: se relaja el músculo lo necesario para suavizar la línea manteniendo la expresión propia de cada rostro.',
      },
      {
        question: '¿Puedo volver a mis actividades el mismo día?',
        answer:
          'Sí. Es un procedimiento ambulatorio que permite retomar la rutina de inmediato, respetando las indicaciones de las primeras 24 horas.',
      },
    ],
  },
  {
    slug: 'rellenos-dermicos',
    name: 'Rellenos Dérmicos',
    h1: 'Rellenos Dérmicos con Ácido Hialurónico en Vicente López',
    title: 'Rellenos Dérmicos con Ácido Hialurónico en Vicente López',
    metaDescription:
      'Rellenos dérmicos con ácido hialurónico en Vicente López: labios, pómulos y surcos nasogenianos. Armonía facial natural con la Dra. Daniela Bravo, dermatóloga.',
    image: rellenosImg.url,
    alt: 'Rellenos dérmicos con ácido hialurónico para labios y pómulos en Vicente López, dermatología estética',
    intro: [
      'Los rellenos dérmicos con ácido hialurónico permiten restaurar volúmenes perdidos y corregir surcos de manera segura y reversible. El ácido hialurónico es una sustancia presente de forma natural en la piel, con gran capacidad de retener agua y aportar sostén.',
      'Se utilizan para corregir surcos nasogenianos, definir e hidratar labios, reponer volumen en pómulos y mejorar el contorno mandibular o el mentón. El objetivo siempre es la armonía facial, no el exceso.',
      'En la consulta en Vicente López se realiza un análisis facial completo para elegir el tipo de ácido hialurónico y la técnica adecuada según la zona, la edad y las características de la piel de cada paciente.',
    ],
    session: [
      'Evaluación facial y planificación de las zonas a tratar con el paciente frente al espejo.',
      'Aplicación de crema anestésica tópica para minimizar la molestia.',
      'Antisepsia de la piel y marcación de los puntos de entrada.',
      'Infiltración con aguja o cánula según la zona, en pequeñas cantidades y de forma progresiva.',
      'Modelado suave del producto y evaluación del resultado inmediato. La sesión dura entre 30 y 45 minutos.',
    ],
    aftercare: [
      'Aplicar frío local en las primeras horas para reducir hinchazón y hematomas.',
      'Evitar actividad física intensa, sauna y pileta durante 48 horas.',
      'No realizar masajes ni tratamientos con aparatología en la zona durante 2 semanas.',
      'Evitar exposición solar directa y usar protector solar a diario.',
      'La hinchazón y los pequeños moretones son esperables y se resuelven en 3 a 7 días.',
    ],
    faqs: [
      {
        question: '¿Cuánto duran los rellenos con ácido hialurónico?',
        answer:
          'Entre 9 y 18 meses según la zona tratada, el tipo de producto y el metabolismo de cada paciente. Las zonas con más movimiento, como los labios, suelen reabsorberse un poco antes.',
      },
      {
        question: '¿Es reversible?',
        answer:
          'Sí. Una de las ventajas del ácido hialurónico es que puede disolverse con una enzima llamada hialuronidasa si fuera necesario ajustar o revertir el resultado.',
      },
      {
        question: '¿Se ve natural?',
        answer:
          'Con una planificación adecuada y cantidades conservadoras el resultado es natural. La idea es reponer lo que se perdió y equilibrar proporciones, no cambiar el rostro.',
      },
      {
        question: '¿Puedo combinarlo con toxina botulínica?',
        answer:
          'Sí, son tratamientos complementarios y frecuentemente se planifican juntos, ya que uno trabaja sobre las líneas dinámicas y el otro sobre volúmenes y surcos.',
      },
    ],
  },
  {
    slug: 'prp',
    name: 'PRP (Plasma Rico en Plaquetas)',
    h1: 'PRP (Plasma Rico en Plaquetas) en Vicente López',
    title: 'PRP Facial y Capilar en Vicente López | Dra. Daniela Bravo',
    metaDescription:
      'PRP (plasma rico en plaquetas) facial y capilar en Vicente López. Medicina regenerativa para mejorar la calidad de la piel y tratar la caída del cabello con la Dra. Daniela Bravo.',
    image: prpImg.url,
    alt: 'Tratamiento PRP plasma rico en plaquetas facial y capilar en Vicente López, dermatología regenerativa',
    intro: [
      'El PRP o plasma rico en plaquetas es un tratamiento de medicina regenerativa que utiliza componentes de la propia sangre del paciente. Al concentrar las plaquetas se obtienen factores de crecimiento que estimulan la reparación de los tejidos.',
      'A nivel facial mejora la calidad, el brillo y la firmeza de la piel, y resulta especialmente útil en pieles apagadas, con signos iniciales de envejecimiento o secuelas de acné. A nivel capilar ayuda a fortalecer el folículo y a frenar la caída del cabello.',
      'Al tratarse de un producto autólogo —derivado del propio paciente— el riesgo de reacción alérgica es prácticamente nulo. En el consultorio de Vicente López se realiza como parte de un plan dermatológico individualizado.',
    ],
    session: [
      'Extracción de una pequeña muestra de sangre del paciente, como en un análisis de rutina.',
      'Centrifugado de la muestra para separar y concentrar el plasma rico en plaquetas.',
      'Antisepsia de la zona y aplicación de crema anestésica cuando corresponde.',
      'Aplicación del plasma mediante microinyecciones en el rostro o en el cuero cabelludo.',
      'La sesión completa dura entre 45 y 60 minutos. Habitualmente se planifican 3 sesiones separadas por 4 semanas.',
    ],
    aftercare: [
      'No lavar la zona tratada ni aplicar cosméticos durante las primeras horas.',
      'Evitar exposición solar directa y usar protector solar a diario.',
      'Suspender actividad física intensa, sauna y pileta por 24 a 48 horas.',
      'En tratamiento capilar, esperar al día siguiente para lavar el cabello.',
      'Puede haber enrojecimiento o leve hinchazón que se resuelve en 24 a 48 horas.',
    ],
    faqs: [
      {
        question: '¿Cuántas sesiones de PRP necesito?',
        answer:
          'El esquema habitual es de 3 sesiones separadas por un mes, con mantenimiento posterior según la respuesta. El plan definitivo se define en la consulta.',
      },
      {
        question: '¿Cuándo se ven los resultados?',
        answer:
          'Los cambios son progresivos: suelen notarse a partir de la segunda sesión y continúan mejorando durante las semanas siguientes, ya que dependen de la regeneración del propio tejido.',
      },
      {
        question: '¿El PRP sirve para la caída del cabello?',
        answer:
          'Sí, es un tratamiento indicado como coadyuvante en alopecia androgenética y en caída difusa, siempre luego de un diagnóstico dermatológico que identifique la causa.',
      },
      {
        question: '¿Tiene riesgo de rechazo o alergia?',
        answer:
          'Al utilizarse un derivado de la propia sangre del paciente, no genera reacciones de rechazo ni alergia al producto.',
      },
    ],
  },
  {
    slug: 'peelings-quimicos',
    name: 'Peelings Químicos',
    h1: 'Peelings Químicos en Vicente López',
    title: 'Peelings Químicos en Vicente López | Dra. Daniela Bravo',
    metaDescription:
      'Peelings químicos en Vicente López para manchas, acné y textura de la piel. Renovación cutánea personalizada con la Dra. Daniela Bravo, dermatóloga.',
    image: peelingImg.url,
    alt: 'Peeling químico para exfoliación y renovación cutánea, tratamiento de manchas y acné en Vicente López',
    intro: [
      'Los peelings químicos consisten en una exfoliación controlada de la piel mediante la aplicación de ácidos específicos. Al renovar las capas superficiales se estimula la producción de células nuevas y de colágeno.',
      'Son un recurso muy versátil en dermatología: mejoran la textura, unifican el tono, atenúan manchas, ayudan en el manejo del acné y de sus cicatrices, y suavizan signos iniciales de envejecimiento.',
      'Existen distintas profundidades e ingredientes activos. En la consulta en Vicente López se elige el peeling adecuado según el fototipo, la sensibilidad y el objetivo de cada paciente, y se planifica la cantidad de sesiones necesarias.',
    ],
    session: [
      'Evaluación de la piel y elección del tipo de peeling e intensidad.',
      'Limpieza profunda y desengrasado de la superficie cutánea.',
      'Aplicación del ácido por tiempos controlados, con monitoreo permanente de la reacción de la piel.',
      'Neutralización cuando corresponde y aplicación de productos calmantes y protector solar.',
      'La sesión dura entre 20 y 40 minutos y suele repetirse cada 2 a 4 semanas según el esquema indicado.',
    ],
    aftercare: [
      'Usar protector solar de amplio espectro todos los días y reaplicarlo, evitando la exposición solar directa.',
      'Hidratar la piel con los productos indicados y no exfoliar ni frotar la zona.',
      'No arrancar las escamas o costras: la descamación debe resolverse sola.',
      'Suspender retinoides, ácidos y tratamientos abrasivos hasta la indicación médica.',
      'Evitar pileta, sauna y actividad física intensa las primeras 48 horas.',
    ],
    faqs: [
      {
        question: '¿Cuántas sesiones de peeling necesito?',
        answer:
          'Depende del objetivo. Los esquemas habituales van de 3 a 6 sesiones separadas por 2 a 4 semanas, con mantenimiento posterior.',
      },
      {
        question: '¿La piel se descama mucho?',
        answer:
          'Depende de la profundidad elegida. Los peelings superficiales generan una descamación fina y discreta; los más profundos requieren algunos días de recuperación.',
      },
      {
        question: '¿Se puede hacer en verano?',
        answer:
          'Sí, siempre con peelings adecuados a la época y con protección solar estricta. En pieles con tendencia a manchas puede preferirse esperar los meses de menor exposición.',
      },
      {
        question: '¿Sirve para las marcas del acné?',
        answer:
          'Ayuda a mejorar las manchas post-inflamatorias y la textura. En cicatrices más profundas se combina con otros tratamientos dermatológicos.',
      },
    ],
  },
  {
    slug: 'mesoterapia',
    name: 'Mesoterapia Facial y Capilar',
    h1: 'Mesoterapia Facial y Capilar en Vicente López',
    title: 'Mesoterapia Facial y Capilar en Vicente López | Dra. Bravo',
    metaDescription:
      'Mesoterapia facial y capilar en Vicente López: microinyecciones de activos para revitalizar la piel y fortalecer el cabello. Turnos con la Dra. Daniela Bravo.',
    image: mesoImg.url,
    alt: 'Mesoterapia facial y capilar en Vicente López, microinyecciones para revitalización de la piel',
    intro: [
      'La mesoterapia es una técnica mínimamente invasiva que consiste en aplicar microinyecciones de principios activos directamente en la dermis o en el cuero cabelludo, donde son necesarios.',
      'A nivel facial se utilizan vitaminas, aminoácidos, antioxidantes y ácido hialurónico no reticulado para mejorar la hidratación profunda, la luminosidad y la elasticidad de la piel. A nivel capilar se emplean activos que fortalecen el folículo y acompañan el tratamiento de la caída del cabello.',
      'Es un tratamiento progresivo y muy bien tolerado, que se planifica en sesiones sucesivas. En el consultorio de Vicente López la fórmula se adapta a las necesidades específicas de cada paciente.',
    ],
    session: [
      'Evaluación de la piel o del cuero cabelludo y selección de los activos a utilizar.',
      'Limpieza y antisepsia de la zona; aplicación de crema anestésica cuando es necesario.',
      'Microinyecciones superficiales con aguja muy fina distribuidas de manera uniforme.',
      'Aplicación final de productos calmantes y protector solar.',
      'La sesión dura entre 20 y 30 minutos. Habitualmente se indican 4 a 6 sesiones con intervalos de 1 a 2 semanas.',
    ],
    aftercare: [
      'No aplicar maquillaje ni cosméticos durante las primeras horas.',
      'Evitar exposición solar directa y usar protector solar a diario.',
      'Suspender actividad física intensa, sauna y pileta por 24 horas.',
      'En mesoterapia capilar, lavar el cabello a partir del día siguiente.',
      'Es normal un enrojecimiento leve o pequeñas pápulas que ceden en pocas horas.',
    ],
    faqs: [
      {
        question: '¿Duele la mesoterapia?',
        answer:
          'La molestia es leve porque se utilizan agujas muy finas y aplicaciones superficiales. Cuando es necesario se usa crema anestésica previa.',
      },
      {
        question: '¿Cuántas sesiones se necesitan?',
        answer:
          'Lo habitual son 4 a 6 sesiones iniciales cada 1 o 2 semanas, con sesiones de mantenimiento posteriores según la respuesta de cada paciente.',
      },
      {
        question: '¿Sirve para la caída del cabello?',
        answer:
          'Sí, la mesoterapia capilar es un tratamiento coadyuvante muy útil, siempre indicado luego de un diagnóstico que determine la causa de la caída.',
      },
      {
        question: '¿Puedo combinarla con otros tratamientos?',
        answer:
          'Sí, se combina frecuentemente con peelings, PRP o toxina botulínica dentro de un plan dermatológico integral.',
      },
    ],
  },
];

export const treatmentPagesBySlug = Object.fromEntries(
  treatmentPages.map((t) => [t.slug, t]),
) as Record<string, TreatmentPageData>;

/** Maps the home card title to its dedicated page slug (cards without page stay as-is) */
export const cardTitleToSlug: Record<string, string> = {
  'PRP (Plasma Rico en Plaquetas) – Facial y Capilar': 'prp',
  'Mesoterapia Facial y Capilar en Vicente López': 'mesoterapia',
  'Toxina Botulínica en Vicente López': 'toxina-botulinica',
  'Rellenos Dérmicos con Ácido Hialurónico': 'rellenos-dermicos',
  'Peelings Químicos - Renovación Cutánea': 'peelings-quimicos',
};

export const unusedDermaImg = dermaImg.url;
