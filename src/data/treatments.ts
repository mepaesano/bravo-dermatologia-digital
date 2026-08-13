import prpImg from '@/assets/03-tratamiento-prp.webp.asset.json';
import mesoImg from '@/assets/04-tratamiento-mesoterapia.webp.asset.json';
import botoxImg from '@/assets/06-tratamiento-toxina-botulinica.webp.asset.json';
import rellenosImg from '@/assets/07-tratamiento-rellenos-dermicos.webp.asset.json';
import peelingImg from '@/assets/08-tratamiento-peeling-quimico.webp.asset.json';
import bioImg from '@/assets/05-tratamiento-bioestimulacion.webp.asset.json';
import mesoliftImg from '@/assets/09-tratamiento-mesolifting.webp.asset.json';
import crioImg from '@/assets/10-tratamiento-criocirugia.webp.asset.json';
import dermaImg from '@/assets/11-tratamiento-dermatoscopia.webp.asset.json';

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
    title: 'Toxina Botulínica en Vicente López | Zona Norte | Dra. Daniela Bravo',
    metaDescription:
      'Aplicación de toxina botulínica en Vicente López, Olivos y Florida con la Dra. Daniela Bravo, dermatóloga. Suavizá arrugas de expresión en frente, entrecejo y patas de gallo con resultados naturales.',
    image: botoxImg.url,
    alt: 'Aplicación de toxina botulínica en Vicente López y Zona Norte para arrugas de expresión, frente y entrecejo',
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
    title: 'Rellenos Dérmicos con Ácido Hialurónico en Vicente López | Zona Norte',
    metaDescription:
      'Rellenos dérmicos con ácido hialurónico en Vicente López, Olivos y Florida: labios, pómulos y surcos nasogenianos. Armonía facial natural con la Dra. Daniela Bravo, dermatóloga.',
    image: rellenosImg.url,
    alt: 'Rellenos dérmicos con ácido hialurónico para labios y pómulos en Vicente López y Zona Norte, dermatología estética',
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
    title: 'PRP Facial y Capilar en Vicente López | Zona Norte | Dra. Daniela Bravo',
    metaDescription:
      'PRP (plasma rico en plaquetas) facial y capilar en Vicente López, Olivos y Florida. Medicina regenerativa para mejorar la calidad de la piel y tratar la caída del cabello con la Dra. Daniela Bravo.',
    image: prpImg.url,
    alt: 'Tratamiento PRP plasma rico en plaquetas facial y capilar en Vicente López y Zona Norte, dermatología regenerativa',
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
          'Sí, es un tratamiento indicado como coadyuvante en alopecias diversas, siempre luego de un diagnóstico médico que identifique la causa.',
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
    title: 'Peelings Químicos en Vicente López | Zona Norte | Dra. Daniela Bravo',
    metaDescription:
      'Peelings químicos en Vicente López, Olivos y Florida para manchas, acné y textura de la piel. Renovación cutánea personalizada con la Dra. Daniela Bravo, dermatóloga.',
    image: peelingImg.url,
    alt: 'Peeling químico para exfoliación y renovación cutánea, tratamiento de manchas y acné en Vicente López y Zona Norte',
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
    title: 'Mesoterapia Facial y Capilar en Vicente López | Zona Norte | Dra. Bravo',
    metaDescription:
      'Mesoterapia facial y capilar en Vicente López, Olivos y Florida: microinyecciones de activos para revitalizar la piel y fortalecer el cabello. Turnos con la Dra. Daniela Bravo.',
    image: mesoImg.url,
    alt: 'Mesoterapia facial y capilar en Vicente López y Zona Norte, microinyecciones para revitalización de la piel',
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
  {
    slug: 'bioestimulacion',
    name: 'Bioestimulación Facial',
    h1: 'Bioestimulación Facial en Vicente López',
    title: 'Bioestimulación Facial en Vicente López | Zona Norte | Dra. Daniela Bravo',
    metaDescription:
      'Bioestimulación facial en Vicente López, Olivos y Florida: estimulación de colágeno y elastina para un rejuvenecimiento natural y progresivo con la Dra. Daniela Bravo, dermatóloga.',
    image: bioImg.url,
    alt: 'Bioestimulación facial para producción de colágeno y elastina, rejuvenecimiento natural en Vicente López y Zona Norte',
    intro: [
      'La bioestimulación facial es un tratamiento no invasivo que activa los procesos naturales de regeneración de la piel. En lugar de aportar volumen de forma inmediata, estimula a las propias células a producir colágeno y elastina.',
      'El resultado es una mejora progresiva de la textura, la firmeza y la luminosidad del rostro, con un aspecto descansado y natural. Es especialmente útil en pieles con signos iniciales de envejecimiento, pérdida de tono o falta de brillo.',
      'En el consultorio de Vicente López la bioestimulación se planifica luego de una evaluación dermatológica que define el activo y la cantidad de sesiones más adecuadas para cada piel.',
    ],
    session: [
      'Evaluación de la piel y definición del plan de bioestimulación.',
      'Limpieza profunda y antisepsia de la zona a tratar.',
      'Aplicación de crema anestésica tópica cuando es necesario.',
      'Aplicación del bioestimulador mediante microinyecciones distribuidas de forma uniforme.',
      'La sesión dura entre 30 y 45 minutos. Habitualmente se indican 2 a 3 sesiones separadas por 4 a 6 semanas.',
    ],
    aftercare: [
      'Evitar maquillaje y cosméticos durante las primeras horas.',
      'Usar protector solar a diario y evitar la exposición solar directa.',
      'Suspender actividad física intensa, sauna y pileta por 48 horas.',
      'No realizar masajes ni tratamientos con aparatología en la zona durante 2 semanas.',
      'Puede haber enrojecimiento leve o pequeñas pápulas que ceden en 24 a 48 horas.',
    ],
    faqs: [
      {
        question: '¿En cuánto tiempo se ven los resultados de la bioestimulación?',
        answer:
          'Los cambios son progresivos porque dependen de la producción de colágeno propio. Suelen notarse a partir de las 4 a 6 semanas y continúan mejorando durante los meses siguientes.',
      },
      {
        question: '¿Cuántas sesiones necesito?',
        answer:
          'Lo habitual son 2 a 3 sesiones separadas por 4 a 6 semanas, con mantenimiento posterior según la respuesta de cada piel. El esquema se define en la consulta.',
      },
      {
        question: '¿Es lo mismo que un relleno con ácido hialurónico?',
        answer:
          'No. El relleno aporta volumen de manera inmediata, mientras que la bioestimulación busca mejorar la calidad de la piel estimulando su propia regeneración. Pueden combinarse dentro de un mismo plan.',
      },
      {
        question: '¿Puedo retomar mis actividades el mismo día?',
        answer:
          'Sí, es un procedimiento ambulatorio. Solo hay que respetar las indicaciones de las primeras 48 horas en cuanto a sol y actividad física.',
      },
    ],
  },
  {
    slug: 'mesolifting',
    name: 'Mesolifting',
    h1: 'Mesolifting en Vicente López',
    title: 'Mesolifting en Vicente López | Lifting sin Cirugía | Zona Norte',
    metaDescription:
      'Mesolifting en Vicente López, Olivos y Florida: microinyecciones de vitaminas y antioxidantes para un efecto lifting natural sin cirugía. Turnos con la Dra. Daniela Bravo.',
    image: mesoliftImg.url,
    alt: 'Mesolifting con vitaminas y aminoácidos, lifting natural sin cirugía en Vicente López y Zona Norte',
    intro: [
      'El mesolifting es un tratamiento que combina vitaminas, aminoácidos y antioxidantes aplicados mediante microinyecciones superficiales para revitalizar el rostro y generar un efecto tensor natural.',
      'A diferencia de un procedimiento quirúrgico, no implica cortes ni tiempo de recuperación: mejora la firmeza cutánea, aporta luminosidad y devuelve al rostro un aspecto más descansado de manera gradual.',
      'Es una alternativa muy elegida por pacientes que buscan un resultado sutil y progresivo. En el consultorio de Vicente López la fórmula y la cantidad de sesiones se definen según las necesidades de cada piel.',
    ],
    session: [
      'Evaluación de la piel y definición del cóctel de activos a utilizar.',
      'Limpieza y antisepsia de la zona; crema anestésica tópica si es necesario.',
      'Microinyecciones superficiales distribuidas de manera uniforme en el rostro, cuello o escote.',
      'Aplicación final de productos calmantes y protector solar.',
      'La sesión dura entre 20 y 30 minutos. Habitualmente se indican 4 a 6 sesiones cada 1 a 2 semanas.',
    ],
    aftercare: [
      'No aplicar maquillaje ni cosméticos durante las primeras horas.',
      'Usar protector solar a diario y evitar la exposición solar directa.',
      'Suspender actividad física intensa, sauna y pileta por 24 a 48 horas.',
      'No exfoliar ni frotar la zona tratada durante los primeros días.',
      'Es normal un enrojecimiento leve o pequeñas pápulas que ceden en pocas horas.',
    ],
    faqs: [
      {
        question: '¿El mesolifting reemplaza a un lifting quirúrgico?',
        answer:
          'No. El mesolifting mejora la firmeza, la hidratación y la luminosidad de la piel con un efecto tensor natural, pero no corrige la flacidez avanzada como lo haría una cirugía.',
      },
      {
        question: '¿Cuántas sesiones se necesitan?',
        answer:
          'Lo habitual son 4 a 6 sesiones iniciales cada 1 o 2 semanas, con mantenimiento posterior. El esquema definitivo se establece en la consulta.',
      },
      {
        question: '¿Duele?',
        answer:
          'La molestia es leve porque se utilizan agujas muy finas y aplicaciones superficiales. Cuando es necesario se aplica crema anestésica previa.',
      },
      {
        question: '¿Se puede combinar con otros tratamientos?',
        answer:
          'Sí, se combina frecuentemente con peelings, PRP, bioestimulación o toxina botulínica dentro de un plan dermatológico integral.',
      },
    ],
  },
  {
    slug: 'criocirugia',
    name: 'Criocirugía',
    h1: 'Criocirugía en Vicente López',
    title: 'Criocirugía en Vicente López | Zona Norte | Dra. Daniela Bravo',
    metaDescription:
      'Criocirugía en Vicente López, Olivos y Florida: tratamiento con frío terapéutico para verrugas, queratosis actínicas y lesiones cutáneas. Consulta con la Dra. Daniela Bravo, dermatóloga.',
    image: crioImg.url,
    alt: 'Criocirugía con frío terapéutico para tratamiento de verrugas y queratosis en Vicente López y Zona Norte',
    intro: [
      'La criocirugía es una técnica dermatológica que utiliza frío extremo, habitualmente nitrógeno líquido, para destruir de manera controlada lesiones cutáneas. Es un procedimiento ambulatorio, rápido y preciso.',
      'Se indica para verrugas, queratosis actínicas, queratosis seborreicas y otras lesiones benignas, y en casos seleccionados también para algunas lesiones malignas superficiales, siempre luego de un diagnóstico dermatológico adecuado.',
      'En el consultorio de Vicente López cada lesión se evalúa clínicamente —y con dermatoscopía cuando corresponde— antes de definir la criocirugía como tratamiento.',
    ],
    session: [
      'Evaluación clínica de la lesión y confirmación de la indicación de criocirugía.',
      'Antisepsia de la zona a tratar.',
      'Aplicación del frío mediante spray o aplicador, en ciclos de pocos segundos controlados por la médica.',
      'Se puede repetir el ciclo en la misma sesión según el tipo y el espesor de la lesión.',
      'La sesión dura pocos minutos y no requiere internación. Algunas lesiones necesitan más de una sesión.',
    ],
    aftercare: [
      'Mantener la zona limpia y seca; lavar suavemente con agua y jabón neutro.',
      'No arrancar la ampolla ni la costra que se forma: debe desprenderse sola.',
      'Aplicar la crema o el antiséptico indicado según la evolución de la zona.',
      'Evitar la exposición solar directa sobre la zona y usar protector solar una vez cicatrizada.',
      'Consultar si aparece dolor intenso, secreción o signos de infección.',
    ],
    faqs: [
      {
        question: '¿Duele la criocirugía?',
        answer:
          'Se siente una sensación de frío intenso o ardor durante unos segundos, que se tolera bien y disminuye rápidamente al finalizar la aplicación.',
      },
      {
        question: '¿Cuánto tarda en curarse la zona tratada?',
        answer:
          'Habitualmente se forma una ampolla o costra que se desprende en 1 a 3 semanas, según la zona y el tamaño de la lesión.',
      },
      {
        question: '¿Deja marca?',
        answer:
          'Puede quedar una zona transitoriamente más clara o rosada. En la mayoría de los casos la piel recupera su aspecto habitual con el tiempo y el cuidado solar adecuado.',
      },
      {
        question: '¿Cuántas sesiones necesito?',
        answer:
          'Muchas lesiones se resuelven en una sola sesión. Las verrugas y lesiones más gruesas pueden requerir sesiones adicionales separadas por algunas semanas.',
      },
    ],
  },
  {
    slug: 'dermatoscopia',
    name: 'Dermatoscopía',
    h1: 'Dermatoscopía y Control de Lunares en Vicente López',
    title: 'Dermatoscopía y Control de Lunares en Vicente López | Zona Norte',
    metaDescription:
      'Dermatoscopía y control de lunares en Vicente López, Olivos y Florida: evaluación con dermatoscopio para detección temprana de melanoma con la Dra. Daniela Bravo, dermatóloga.',
    image: dermaImg.url,
    alt: 'Dermatoscopía para diagnóstico de lunares y detección de melanoma en Vicente López y Zona Norte',
    intro: [
      'La dermatoscopía es un examen no invasivo que permite observar los lunares y las lesiones de la piel con gran aumento y con iluminación especial, revelando estructuras que no se ven a simple vista.',
      'Es la herramienta central del control dermatológico preventivo: mejora notablemente la precisión diagnóstica y permite la detección temprana del melanoma y de otros tipos de cáncer de piel, cuando el tratamiento es más simple y efectivo.',
      'En el consultorio de Vicente López el control de lunares se realiza de manera sistemática, registrando las lesiones que requieren seguimiento en el tiempo.',
    ],
    session: [
      'Consulta dermatológica con antecedentes personales y familiares de cáncer de piel.',
      'Examen de la piel de cuerpo completo, incluyendo cuero cabelludo, palmas, plantas y uñas.',
      'Evaluación de cada lesión con el dermatoscopio, sin dolor y sin necesidad de preparación previa.',
      'Registro de las lesiones que requieren seguimiento para comparar en controles futuros.',
      'Indicación del plan: control periódico, biopsia o extirpación según los hallazgos. La consulta dura entre 20 y 30 minutos.',
    ],
    aftercare: [
      'La dermatoscopía no requiere recuperación: se puede retomar la actividad normal de inmediato.',
      'Mantener el uso diario de protector solar de amplio espectro.',
      'Evitar la exposición solar en las horas centrales del día y usar ropa y sombrero como protección.',
      'Realizar autoexamen mensual de la piel y consultar ante cualquier lunar que cambie de forma, color o tamaño.',
      'Respetar la frecuencia de control indicada, habitualmente anual o menor según el riesgo.',
    ],
    faqs: [
      {
        question: '¿Cada cuánto tengo que controlarme los lunares?',
        answer:
          'En general una vez al año. En pacientes con muchos lunares, antecedentes familiares de melanoma o lesiones en seguimiento, el control puede ser cada 6 meses o según indicación médica.',
      },
      {
        question: '¿La dermatoscopía duele o requiere preparación?',
        answer:
          'No. Es un estudio indoloro y no invasivo: solo se apoya el dermatoscopio sobre la piel. No necesita preparación previa, aunque conviene asistir sin maquillaje ni esmalte en las uñas.',
      },
      {
        question: '¿Qué señales de alarma debo mirar en un lunar?',
        answer:
          'Cambios en la forma, el color o el tamaño, bordes irregulares, asimetría, picazón, sangrado o una lesión que se ve distinta al resto. Ante cualquiera de estos signos conviene consultar.',
      },
      {
        question: '¿Qué pasa si se encuentra una lesión sospechosa?',
        answer:
          'Se indica el paso siguiente según el caso: seguimiento con imágenes comparativas, biopsia o extirpación para estudio histopatológico. Todo se explica en la misma consulta.',
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
  'Toxina Botulínica en Vicente López y Zona Norte': 'toxina-botulinica',
  'Rellenos Dérmicos con Ácido Hialurónico': 'rellenos-dermicos',
  'Peelings Químicos - Renovación Cutánea': 'peelings-quimicos',
  'Bioestimulación Facial - Rejuvenecimiento Natural': 'bioestimulacion',
  'Mesolifting - Lifting Natural sin Cirugía': 'mesolifting',
  'Criocirugía - Tratamiento con Frío Terapéutico': 'criocirugia',
  'Dermatoscopía - Diagnóstico Avanzado de Lunares': 'dermatoscopia',
};
