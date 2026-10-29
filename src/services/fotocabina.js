import { ESTRELLA_MEDIA } from './media.js';
import { HERRERA_CONTACT, HERRERA_RESERVATION_ADVANCE, PHOTO_SERVICE_OPTIONS, optionsExplanation, publicMoney } from './herrera-public.js';

const additionalHourPrice = 70000;

/** Proyección comercial pública, independiente del catálogo privado y de acuerdos emitidos. */
export const FOTOCABINA = {
  id: 'cabina', slug: 'fotocabina', name: 'Fotocabina',
  conversationName: 'la Fotocabina',
  organization: 'Herrera Producciones', locale: 'es-CL', currency: 'CLP',
  contact: HERRERA_CONTACT,
  hero: { title: 'La fiesta se vive.\nLa foto se lleva.' },
  durations: [
    { hours: 1, price: 120000, label: '1 hora' },
    { hours: 2, price: 160000, label: '2 horas' },
    { hours: 3, price: 230000, label: '3 horas' },
    { hours: 4, price: 300000, label: '4 horas' },
  ],
  experiences: [],
  options: PHOTO_SERVICE_OPTIONS,
  additionalHourPrice,
  included: [
    'Impresiones ilimitadas durante el tiempo contratado y según el flujo de sesiones.',
    'Una tira impresa para cada invitado que participa en la sesión.',
    'Diseño personalizado de las tiras para tu celebración.',
    'Operación del servicio y cotillón. Hasta seis personas por sesión.',
    'Cabina inflable según el espacio y tipo de evento.',
  ],
  durationLabel: 'Duración de Fotocabina',
  inquiryNote: 'Consultar no bloquea una fecha ni confirma una reserva.',
  reservationNote: 'Revisamos disponibilidad, lugar y total antes de confirmar. Con la propuesta acordada, coordinamos un '+HERRERA_RESERVATION_ADVANCE+' y el saldo 48 horas antes del evento.',
  faq: [
    { question: '¿Las impresiones son ilimitadas?', answer: 'Sí, durante las 1, 2, 3 o 4 horas contratadas y según el flujo real de sesiones. Cada invitado participante recibe una tira.' },
    { question: '¿Podemos personalizar las tiras?', answer: 'Sí. Acordamos el diseño de las tiras para tu celebración antes del evento.' },
    { question: '¿Siempre se instala la cabina inflable?', answer: 'Si el espacio no permite la cabina inflable, instalamos solo el tótem al mismo precio y con el mismo servicio. Con viento fuerte preferimos evitar la cabina inflable; revisamos contigo el lugar antes de confirmar.' },
    { question: '¿Qué diferencia hay entre álbum y pendrive?', answer: optionsExplanation },
    { question: '¿Puedo agregar otra hora?', answer: `La hora adicional de Fotocabina cuesta ${publicMoney(additionalHourPrice)} y está sujeta a disponibilidad. Si necesitas más tiempo, conversemos para revisar tu horario.` },
    { question: '¿El traslado está incluido?', answer: 'No. Se cotiza aparte según la ubicación. Tenemos base en Talca/San Clemente; comparte la comuna o el recinto para evaluar factibilidad y traslado.' },
    { question: '¿Cómo se confirma la reserva?', answer: 'Revisamos fecha, horario, lugar, disponibilidad y total con extras y traslado. Con la propuesta acordada, coordinamos el '+HERRERA_RESERVATION_ADVANCE+'; el saldo se paga 48 horas antes del evento. El equipo confirma la reserva después de verificar pago y aceptación. Consultar no bloquea la fecha.' },
  ],
  media: ESTRELLA_MEDIA.filter(item => ['cabina', 'album'].includes(item.placement)),
};
