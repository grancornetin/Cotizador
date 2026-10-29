import { ESTRELLA_MEDIA, publicMedia } from './media.js';
import { HERRERA_CONTACT, HERRERA_RESERVATION_ADVANCE, SERVICE_OPTIONS, publicMoney } from './herrera-public.js';

const additionalHourPrice = 60000;
const pendrive = SERVICE_OPTIONS.find(item => item.id === 'pendrive');
/** Datos comerciales públicos del servicio individual, separados de catálogo y acuerdos. */
export const AERO360 = {
  id:'aero', slug:'aero360', name:'Aero360', conversationName:'Aero360',
  organization:'Herrera Producciones', locale:'es-CL', currency:'CLP', contact:HERRERA_CONTACT,
  hero:{title:'Tu celebración.\nDesde otra perspectiva.'},
  durations:[{hours:2,price:120000,label:'2 horas'},{hours:3,price:180000,label:'3 horas'},{hours:4,price:240000,label:'4 horas'}],
  experiences:[], options:[pendrive], additionalHourPrice,
  included:[
    'Estructura aérea con cámara desde arriba.',
    'Kit neón e iluminación.',
    'Separadores para organizar el espacio.',
    'Vídeos personalizados para tu celebración.',
    'Entrega digital de los vídeos.',
    'Humo y burbujas según las condiciones del recinto.',
  ],
  reservationNote:'Revisamos disponibilidad, horario, lugar y total con traslado. Con la propuesta acordada, coordinamos un '+HERRERA_RESERVATION_ADVANCE+' y el saldo 48 horas antes del evento.',
  inquiryNote:'La fecha y reserva se confirman con el equipo.',
  faq:[
    {question:'¿Cómo funciona Aero360?',answer:'Una estructura aérea permite que la cámara capture desde arriba la energía de tu grupo. Creamos vídeos personalizados y los entregamos en formato digital para volver a disfrutarlos y compartirlos.'},
    {question:'¿Cuánto dura el servicio?',answer:'Puedes elegir 2 o 3 horas. Acordamos la hora de inicio y el montaje al revisar tu celebración.'},
    {question:'¿Se puede instalar en nuestro recinto?',answer:'Revisamos el espacio y las condiciones del lugar antes de confirmar. Compártenos el recinto para coordinar una instalación adecuada.'},
    {question:'¿Siempre se usan humo y burbujas?',answer:'Los efectos se coordinan según las condiciones y restricciones del recinto. Lo revisamos contigo al cotizar.'},
    {question:'¿Puedo agregar otra hora?',answer:`La hora adicional cuesta ${publicMoney(additionalHourPrice)} y está sujeta a disponibilidad. Si necesitas más tiempo, conversemos para revisar tu horario.`},
    {question:'¿Qué incluye el pendrive personalizado?',answer:`Puedes agregarlo por ${publicMoney(pendrive.price)}. Incluye todos los medios digitales del evento y grabado personalizado.`},
    {question:'¿Cómo se calcula el traslado?',answer:'Se cotiza según la ubicación. Tenemos base en Talca y San Clemente; cuéntanos la comuna o el recinto para revisar el traslado.'},
    {question:'¿Cómo confirmamos la reserva?',answer:'Primero revisamos fecha, horario, lugar, disponibilidad y total con extras y traslado. Con la propuesta acordada, coordinamos el '+HERRERA_RESERVATION_ADVANCE+'; el saldo se paga 48 horas antes del evento. El equipo confirma después de verificar pago y aceptación.'},
  ],
  media:publicMedia([
    {...ESTRELLA_MEDIA.find(item=>item.id==='aero'), caption:'Del montaje al recuerdo', description:'Mira la estructura aérea y cómo cambia la perspectiva en el vídeo. Revisamos el espacio antes de confirmar la instalación.'},
    {id:'aero-resultado',type:'video',placement:'360',src:'/assets/services/pack-estrella/aero360-resultado.mp4',poster:'/assets/services/pack-estrella/aero360-resultado.webp',sourceId:'M03',caption:'Para revivirlo juntos',description:'La energía del grupo, vista desde arriba. Una muestra real de Aero360 con vídeos personalizados y entrega digital.',authorized:true},
  ]),
};
