// Proyección pública seleccionada. No depende del catálogo privado ni de acuerdos históricos.
import { ESTRELLA_MEDIA } from './media.js';
import { HERRERA_CONTACT, HERRERA_RESERVATION_ADVANCE, PHOTO_SERVICE_OPTIONS, optionsExplanation } from './herrera-public.js';
export const DUO_FIESTA = {
  id: 'fiesta',
  slug: 'duo-fiesta',
  name: 'Dúo Fiesta',
  conversationName: 'el Dúo Fiesta',
  organization: 'Herrera Producciones',
  locale: 'es-CL',
  currency: 'CLP',
  contact: HERRERA_CONTACT,
  coverage: 'Talca, San Clemente y otros destinos del Maule, previa evaluación.',
  hero: {
    title: 'Posen.\nDenlo todo.',
    description: 'Una tira de fotos para llevarse. Un vídeo para volver a vivirlo. Fotocabina y una experiencia 360 en tu celebración.',
    cta: 'Consultar mi fecha',
  },
  durations: [
    { hours: 2, price: 250000, label: '2 horas' },
    { hours: 3, price: 380000, label: '3 horas' },
  ],
  experiences: [
    { id: 'plataforma', label: 'Plataforma 360', note: 'Hasta 4 adultos por vídeo; suelo plano, espacio de 3 × 3 metros y señal o internet para QR.' },
    { id: 'aero', label: 'Aero360', note: 'Hasta 12 personas; espacio de 3 × 3 metros y 3 metros de altura, sin lluvia y con recinto revisado.' },
  ],
  options: PHOTO_SERVICE_OPTIONS,
  components: [
    {
      id: 'fotocabina', title: 'Fotocabina', subtitle: 'El recuerdo que se llevan.',
      description: 'Tiras personalizadas e impresiones ilimitadas durante las horas contratadas.',
      duration: '2 o 3 horas, según tu elección',
      bullets: ['Diseño personalizado de las tiras.', 'Cotillón y cabina inflable según espacio y evento.', 'Álbum y pendrive opcionales.'],
    },
    {
      id: '360', title: 'Plataforma 360 o Aero360', subtitle: 'Tus invitados, protagonistas.',
      description: 'Vídeos personalizados para volver a vivir la celebración y compartirla.',
      duration: '2 o 3 horas, según tu elección',
      bullets: ['Una experiencia 360 a elección.', 'Iluminación, separadores y entrega digital.', 'Humo y burbujas sujetos a restricciones del recinto. Aero360 requiere evaluar el espacio.'],
    },

  ],
  pricingNote: 'Valores en pesos chilenos, más traslado según ubicación. Las horas corresponden a Fotocabina y la experiencia 360 elegida.',
  reservationNote: 'Revisamos disponibilidad, lugar y total antes de confirmar. Con la propuesta acordada, coordinamos un '+HERRERA_RESERVATION_ADVANCE+' y el saldo 48 horas antes del evento.',
  inquiryNote: 'Consultar no bloquea una fecha ni confirma una reserva.',
  faq: [
    {
      question: '¿Qué diferencia hay entre 2 y 3 horas?',
      answer: 'Es el tiempo de servicio de Fotocabina y de la experiencia 360 elegida. Coordinamos el inicio y montaje de cada servicio; el horario y alcance quedan en la cotización.',
    },
    {
      question: '¿Incluye Plataforma 360 y Aero360?',
      answer: 'Incluye una de las dos experiencias. Puedes indicar tu preferencia; revisamos el recinto antes de confirmar. Aero360 requiere evaluar el espacio.',
    },
    {
      question: '¿Cómo funcionan las impresiones?',
      answer: 'Las impresiones son ilimitadas durante el tiempo contratado y el flujo de sesiones. Las tiras llevan un diseño personalizado para tu celebración.',
    },
    {
      question: '¿Podemos contratar más tiempo?',
      answer: 'Puedes consultar una ampliación del pack. Revisamos disponibilidad y duración de ambas experiencias para cotizarla y confirmar sus horarios contigo.',
    },
    {
      question: '¿Puedo agregar un álbum o pendrive?',
      answer: optionsExplanation,
    },
    {
      question: '¿El traslado está incluido?',
      answer: 'El traslado se cotiza aparte según ubicación. Tenemos base en Talca/San Clemente: comparte tu recinto, dirección o enlace de Maps para evaluar la factibilidad.',
    },
    {
      question: '¿Cómo confirmo mi reserva?',
      answer: 'Primero revisamos fecha, hora, lugar, disponibilidad y total. Con la propuesta acordada, coordinamos el '+HERRERA_RESERVATION_ADVANCE+'; el saldo se paga 48 horas antes del evento. El equipo confirma la reserva después de verificar el pago y la aceptación.',
    },
    {
      question: '¿Y si ya recibí una cotización?',
      answer: 'Compártela al escribirnos para continuar desde lo acordado. Esta página no modifica los precios o condiciones de una cotización emitida.',
    },
  ],
  // Selección real entregada por el propietario para su publicación; originales privados intactos.
  media: ESTRELLA_MEDIA.filter(item=>['cabina','cabina-exterior','plataforma','aero','celebracion','album'].includes(item.id)),
};
