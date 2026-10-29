import { ESTRELLA_MEDIA } from './media.js';
import { HERRERA_CONTACT, HERRERA_RESERVATION_ADVANCE } from './herrera-public.js';

/** Oferta fija: no hereda horas ni extras de los servicios operados. */
export const SELFIE_MIRROR = {
  id:'mirror', slug:'selfie-mirror', name:'Selfie Mirror', conversationName:'el Selfie Mirror',
  conversationScope:'para mi celebración', organization:'Herrera Producciones', locale:'es-CL', currency:'CLP', contact:HERRERA_CONTACT,
  hero:{title:'Las mejores poses\npasan por aquí.'},
  pricing:{type:'fixed',price:60000,label:'Durante tu celebración'}, durations:[], experiences:[], options:[],
  included:[
    'Espejo decorativo de cuerpo completo.',
    'Vinilo personalizado para tu celebración.',
    'Letrero neón y set Disco o Romance, según disponibilidad.',
    'Instalación y retiro coordinados contigo.',
    'Permanencia durante el evento.',
  ],
  reservationNote:'Revisamos fecha, lugar, horario, personalización, set y total con traslado. Con la propuesta acordada, coordinamos el '+HERRERA_RESERVATION_ADVANCE+' y el saldo 48 horas antes del evento.',
  inquiryNote:'Revisamos disponibilidad y montaje contigo antes de confirmar.',
  faq:[
    {question:'¿Cómo se toman las fotos?',answer:'Los invitados usan sus propios teléfonos para hacerse selfies o fotografiarse entre ellos frente al espejo. Sus fotos quedan en sus móviles.'},
    {question:'¿Cuánto tiempo permanece instalado?',answer:'Permanece durante el evento. Coordinamos contigo los horarios de instalación y retiro; el alcance queda en tu cotización.'},
    {question:'¿Cómo lo personalizamos?',answer:'Incluye vinilo personalizado. Coordinamos el diseño y su alcance en la cotización, junto con el letrero neón y el set Disco o Romance según disponibilidad.'},
    {question:'¿Hay alguien operando el espejo?',answer:'Lo instalamos y retiramos en los horarios acordados. Durante la celebración queda disponible para que los invitados lo disfruten con sus teléfonos, sin operador. El cliente queda a cargo de su cuidado mientras permanece en el recinto.'},
    {question:'¿Qué espacio necesitan?',answer:'Cuéntanos el recinto y dónde imaginas el rincón para revisar ubicación, acceso y montaje. Confirmamos la factibilidad contigo antes de reservar.'},
    {question:'¿Cómo se calcula el traslado?',answer:'Se cotiza según la ubicación. Tenemos base en Talca y San Clemente; compártenos tu comuna o recinto para revisar el traslado.'},
    {question:'¿Cómo confirmamos la reserva?',answer:'Primero revisamos disponibilidad, personalización, horarios y total con traslado. Con la propuesta acordada, coordinamos el '+HERRERA_RESERVATION_ADVANCE+'; el saldo se paga 48 horas antes del evento. El equipo confirma después de verificar pago y aceptación.'},
  ],
  media:ESTRELLA_MEDIA.filter(item=>['mirror','mirror-detalles'].includes(item.id)),
};
