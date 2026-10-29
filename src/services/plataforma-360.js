import { ESTRELLA_MEDIA, PLATAFORMA_STAFF_MEDIA } from './media.js';
import { HERRERA_CONTACT, HERRERA_RESERVATION_ADVANCE, SERVICE_OPTIONS, publicMoney } from './herrera-public.js';

const additionalHourPrice = 60000;
const pendrive = SERVICE_OPTIONS.find(item => item.id === 'pendrive');
/** Datos comerciales públicos del servicio individual, separados de catálogo y acuerdos. */
export const PLATAFORMA_360 = {
  id:'360', slug:'plataforma-360', name:'Plataforma 360', conversationName:'la Plataforma 360',
  organization:'Herrera Producciones', locale:'es-CL', currency:'CLP', contact:HERRERA_CONTACT,
  hero:{title:'Tu fiesta.\nEn todos los ángulos.'},
  durations:[{hours:2,price:120000,label:'2 horas'},{hours:3,price:180000,label:'3 horas'},{hours:4,price:240000,label:'4 horas'}],
  experiences:[], options:[pendrive], additionalHourPrice,
  included:[
    'Operación a cargo de nuestro equipo durante el servicio.',
    'Vídeos personalizados para tu celebración.',
    'Iluminación para acompañar la experiencia.',
    'Separadores para organizar el espacio.',
    'Entrega digital de los vídeos.',
    'Humo y burbujas según las condiciones del recinto.',
  ],
  reservationNote:'Revisamos disponibilidad, horario, lugar y total con traslado. Con la propuesta acordada, coordinamos un '+HERRERA_RESERVATION_ADVANCE+' y el saldo 48 horas antes del evento.',
  inquiryNote:'La fecha y reserva se confirman con el equipo.',
  faq:[
    {question:'¿Quién opera la Plataforma 360?',answer:'Nuestro equipo opera la plataforma y acompaña a tus invitados durante el servicio. Tú y tus invitados solo tienen que disfrutar de la experiencia.'},
    {question:'¿Qué recibimos de la experiencia?',answer:'Vídeos personalizados de tus invitados, con entrega digital para volver a disfrutarlos y compartirlos.'},
    {question:'¿Cuánto dura el servicio?',answer:'Puedes elegir 2 o 3 horas. Acordamos la hora de inicio y el montaje al revisar tu celebración.'},
    {question:'¿Se puede instalar en nuestro recinto?',answer:'Revisamos el espacio y las condiciones del lugar antes de confirmar. Compártenos el recinto para coordinar una instalación adecuada.'},
    {question:'¿Siempre se usan humo y burbujas?',answer:'Los efectos se coordinan según las condiciones y restricciones del recinto. Lo revisamos contigo al cotizar.'},
    {question:'¿Puedo agregar otra hora?',answer:`La hora adicional cuesta ${publicMoney(additionalHourPrice)} y está sujeta a disponibilidad. Si necesitas más tiempo, conversemos para revisar tu horario.`},
    {question:'¿Qué incluye el pendrive personalizado?',answer:`Puedes agregarlo por ${publicMoney(pendrive.price)}. Incluye todos los medios digitales del evento y grabado personalizado.`},
    {question:'¿Cómo se calcula el traslado?',answer:'Se cotiza según la ubicación. Tenemos base en Talca y San Clemente; cuéntanos la comuna o el recinto para revisar el traslado.'},
    {question:'¿Cómo confirmamos la reserva?',answer:'Primero revisamos fecha, horario, lugar, disponibilidad y total con extras y traslado. Con la propuesta acordada, coordinamos el '+HERRERA_RESERVATION_ADVANCE+'; el saldo se paga 48 horas antes del evento. El equipo confirma después de verificar pago y aceptación.'},
  ],
  media:[ESTRELLA_MEDIA.find(item=>item.id==='plataforma'), ...PLATAFORMA_STAFF_MEDIA, ...ESTRELLA_MEDIA.filter(item => ['celebracion','montaje'].includes(item.id))].map(item => item.id==='montaje' ? {
    ...item, description:'Mira cómo se integra la plataforma al espacio. Coordinamos el montaje y las condiciones del recinto contigo.',
  } : item),
};
