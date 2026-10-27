/**
 * Conversión de Google Ads: clic a WhatsApp del consultorio de Vicente López.
 * Etiqueta: AW-17157013036/RhEJCP-w-tcaEKz8jPU_
 * NO usar para Capilla del Señor ni otros destinos.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackWhatsAppVicenteLopez = (): void => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17157013036/RhEJCP-w-tcaEKz8jPU_',
      'value': 1.0,
      'currency': 'ARS'
    });
  }
};
