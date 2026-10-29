/** Fichas públicas seleccionadas; el tarifario original y los acuerdos no se importan. */
import {HERRERA_CONTACT,HERRERA_RESERVATION_ADVANCE,HERRERA_TAX_NOTICE,HERRERA_REQUIREMENTS,SERVICE_OPTIONS,PHOTO_MAGNET_OPTION,optionsExplanation} from './herrera-public.js';
import {PUBLIC_PACKS} from './pack-catalog.js';
import {ESTRELLA_MEDIA} from './media.js';

const mediaRoot='/assets/services/';
const gallery=(id,placement,stem,caption,description)=>({id,type:'video',placement,src:`${mediaRoot}${stem}.mp4`,poster:`${mediaRoot}${stem}.webp`,caption,description,authorized:true});
const PUNTO_MEDIA=[
  gallery('punto-presentacion','punto','punto-foto/punto-foto','Tu rincón, en foto','El tótem, las poses y las tiras que se llevan los invitados. La decoración pertenece al rincón del cliente.'),
  gallery('punto-grupo','punto','punto-foto/punto-foto-grupo','Una foto en grupo','El encuadre puede reunir a más de seis personas si el espacio lo permite. Los accesorios que usan los invitados no forman parte del servicio.'),
  gallery('punto-captura','punto','punto-foto/punto-foto-captura','Así se vive la captura','Una mirada a la pantalla del tótem durante una sesión real.'),
];
const ECO_MEDIA=[
  gallery('eco-uso','eco','eco-de-amor/eco-de-amor','Un saludo que se queda','Una invitada deja su mensaje de voz. El vídeo se muestra sin audio; los mensajes se entregan a los anfitriones.'),
  gallery('eco-detalle','eco','eco-de-amor/eco-de-amor-detalle','De cerca, a su manera','Levantar el teléfono, hablar y dejar un recuerdo con la propia voz.'),
];
const CEREMONY_MEDIA=[gallery('arco-uso','ceremonia','ceremonia/arco-hexagonal','Un marco para ese momento','El arco hexagonal en una celebración real. La elección de puertas se coordina por separado y no está representada en este clip.')];
const equipment=[
  {id:'plataforma',label:'Plataforma 360',note:'Hasta 4 adultos por vídeo. Requiere suelo plano y espacio de 3 × 3 metros; el QR necesita señal o internet.'},
  {id:'aero',label:'Aero360',note:'Hasta 12 personas. Requiere al menos 3 × 3 metros y 3 metros de altura; sin lluvia y con espacio revisado por el equipo.'},
];
const booking={question:'¿Cómo confirmamos la reserva?',answer:`Primero revisamos disponibilidad, horario, lugar y total con traslado. Con la propuesta acordada, coordinamos el ${HERRERA_RESERVATION_ADVANCE}, que se descuenta del total. El saldo se paga 48 horas antes del evento; nuestro equipo confirma después de verificar pago y aceptación.`};
const cancellation={question:'¿Puedo cambiar la fecha?',answer:'El reagendamiento está sujeto a disponibilidad. Si cancelas la contratación, el abono no se reembolsa. Revisa con nuestro equipo las condiciones aplicables antes de confirmar tu propuesta.'};
const tax={question:'¿El precio incluye traslado e IVA?',answer:HERRERA_TAX_NOTICE};
const base=(data)=>({organization:'Herrera Producciones',locale:'es-CL',currency:'CLP',contact:HERRERA_CONTACT,coverage:'Talca, San Clemente y otros destinos del Maule, previa evaluación.',template:'service-detail',experiences:[],options:[],media:[],requirements:[...HERRERA_REQUIREMENTS],reservationNote:`Revisamos disponibilidad y total antes de confirmar. Coordinamos el ${HERRERA_RESERVATION_ADVANCE}, descontado del total, y el saldo 48 horas antes del evento.`,...data,faq:[...(data.faq??[]),tax,booking,cancellation]});
const durations=(two,three,four)=>[{hours:2,label:'2 horas',price:two},{hours:3,label:'3 horas',price:three},...(four?[{hours:4,label:'4 horas',price:four}]:[])];

export const PUNTO_FOTO=base({
  id:'punto',slug:'punto-foto',name:'Punto Foto',conversationName:'el Punto Foto',kind:'punto',
  hero:{title:'Tu rincón.\nSus mejores recuerdos.',description:'Convierte ese espacio que preparaste con tanto cariño en fotos para guardar y compartir.'},
  lead:'Un tótem compacto que deja ver tu decoración, reúne a tus invitados y entrega fotos personalizadas, impresas y digitales.',
  preview:'/assets/services/punto-foto/punto-foto-preview.mp4',poster:'/assets/services/punto-foto/punto-foto.webp',
  socialImage:'/assets/services/punto-foto/punto-foto-lanzamiento.webp',supportImage:'/assets/services/punto-foto/punto-foto-rincon.webp',
  heroAlt:'Invitadas posan frente a un Punto Foto instalado junto al rincón decorado de una celebración.',
  durations:durations(120000,170000,240000),additionalHourPrice:70000,
  options:[SERVICE_OPTIONS.find(x=>x.id==='pendrive'),PHOTO_MAGNET_OPTION],media:PUNTO_MEDIA,
  included:['Tótem de altura y ángulo regulables, cómodo también para niños.','Hasta 216 tiras de fotos de 5×15 cm, con diseño personalizado.','Cada invitado recibe su foto digital al instante; al final, todas las fotos para el anfitrión.','Un encuadre abierto para tu rincón decorado y para grupos, según el espacio disponible.'],
  storyTitle:'Ese rincón que imaginaste.\nAhora, lleno de recuerdos.',
  story:'Cumpleaños, baby showers, bautizos, matrimonios civiles o una activación de tu marca: tú preparas el fondo y la decoración; Punto Foto los convierte en parte de cada toma.',
  detailTitle:'Una foto impresa.\nY otra lista para compartir.',
  detail:'El servicio incluye hasta 216 tiras de 5×15 cm. Cada foto también llega en formato digital. Si se agota el papel, la experiencia continúa con entrega digital durante el tiempo contratado.',
  photoDescription:'Hasta 216 tiras de 5×15 cm y foto digital al instante.',
  faq:[
    {question:'¿Mi decoración aparece en las fotos?',answer:'Sí. Punto Foto está pensado para tu rincón decorado: el fondo, los globos o la ambientación los preparas tú. También podemos personalizar la tira con el nombre de tu celebración o el logo de tu marca.'},
    {question:'¿Cuántas fotos impresas incluye?',answer:'Hasta 216 tiras de 5×15 cm. Normalmente usamos dos tiras por hoja, con un máximo de 108 hojas. No es un límite de invitados. Cuando se agota el papel, seguimos con fotos digitales durante el tiempo contratado.'},
    {question:'¿Cómo recibimos las fotos digitales?',answer:'Cada invitado recibe su foto al instante mediante QR con señal o internet, AirDrop en iPhone o envío por WhatsApp según compatibilidad. Al terminar se entregan todas las fotos al anfitrión.'},
    {question:'¿Sirve para niños y grupos?',answer:'El tótem es más bajo y su ángulo se regula, por lo que funciona bien con niños. Un grupo puede ser mayor a seis personas si el espacio permite encuadrarlo. El servicio no incluye cotillón.'},
    {question:'¿Podemos agregar fotos imantadas o más tiempo?',answer:'Puedes sumar fotos imantadas por $15.000 para todo el evento. La hora adicional cuesta $70.000 y está sujeta a disponibilidad de papel; si se termina, el servicio continúa con fotos digitales. Revisamos la extensión contigo.'},
  ],
});

export const ECO_DE_AMOR=base({
  id:'eco',slug:'eco-de-amor',name:'Eco de Amor',conversationName:'Eco de Amor',kind:'eco',
  hero:{title:'Hay voces\nque quieres guardar.',description:'Mensajes de quienes quieres, para volver a escucharlos después de la celebración.'},
  lead:'Un teléfono, una invitación a hablar desde el corazón y saludos que conservan la voz de tus personas favoritas.',
  preview:'/assets/services/eco-de-amor/eco-de-amor-preview.mp4',poster:'/assets/services/eco-de-amor/eco-de-amor.webp',heroAlt:'Una invitada deja un mensaje en el teléfono rojo de Eco de Amor.',
  durations:durations(90000,120000),media:ECO_MEDIA,
  included:['Teléfono de mensajes de voz con saludo personalizado.','Mesa, decoración, señalética y letrero neón «Deja tu mensaje».','Organización de los audios y entrega mediante Drive a los anfitriones.'],
  storyTitle:'Un saludo. Una risa.\nSu manera de decirlo.',story:'Eco de Amor invita a detenerse un momento y dejar unas palabras. Para matrimonios íntimos, aniversarios y celebraciones familiares donde las voces también merecen quedarse.',
  detailTitle:'Tan sencillo\ncomo levantar el teléfono.',detail:'Tus invitados escuchan el saludo personalizado y dejan su mensaje. Después reunimos los audios para que puedas volver a escucharlos. Coordinamos contigo el horario de activación y la entrega.',
  faq:[
    {question:'¿Qué recuerdo nos entregan?',answer:'Los mensajes de voz de tus invitados, organizados y entregados mediante Drive. El plazo de entrega se acuerda con nuestro equipo; no ofrecemos un plazo automático.'},
    {question:'¿Se queda durante todo el evento?',answer:'Contratas un horario concreto. Aquí puedes consultar por dos o tres horas; revisamos contigo el inicio y cualquier extensión. En los packs Todo Incluido, el horario y la duración de Eco de Amor se especifican en la propuesta.'},
    {question:'¿Dónde conviene instalarlo?',answer:'En un espacio tranquilo, visible y accesible, para que los invitados puedan dejar su saludo con comodidad. Coordinamos la ubicación, el punto de energía y los requisitos del lugar contigo.'},
  ],
});

const todoCabina=PUBLIC_PACKS.find(x=>x.id==='todocabina'),todoPunto=PUBLIC_PACKS.find(x=>x.id==='todopunto');
export const TODO_INCLUIDO=base({
  id:'todo',slug:'todo-incluido',name:'Todo Incluido',conversationName:'el pack Todo Incluido',kind:'todo',
  hero:{title:'Fotos. Vídeos.\nSelfies. Sus voces.',description:'Cuatro experiencias para participar a su manera y recordar juntos.'},
  lead:'Elige cómo quieres tus fotos y reúne las cuatro formas de recordar: fotografía, un equipo 360, Selfie Mirror y Eco de Amor.',
  preview:'/assets/services/eco-de-amor/eco-de-amor-preview.mp4',poster:'/assets/services/eco-de-amor/eco-de-amor.webp',heroAlt:'Una invitada deja un saludo de voz en Eco de Amor, una de las cuatro experiencias del pack.',
  durations:todoCabina.durations,experiences:equipment,
  variants:[{id:'cabina',label:'Con Fotocabina',durations:todoCabina.durations,note:'Impresiones ilimitadas durante el servicio contratado, cotillón y tiras personalizadas.'},{id:'punto',label:'Con Punto Foto',durations:todoPunto.durations,note:'Hasta 216 tiras de 5×15 cm y foto digital al instante. El fondo y la decoración los preparas tú.'}],
  options:[...SERVICE_OPTIONS.map(x=>({...x,...(x.id==='album'?{variants:['cabina']}: {})})),PHOTO_MAGNET_OPTION],
  media:[...ESTRELLA_MEDIA.filter(x=>['cabina','mirror'].includes(x.placement)||['plataforma','aero'].includes(x.id)),...PUNTO_MEDIA.slice(0,2),...ECO_MEDIA],
  included:['Fotocabina o Punto Foto, según la opción elegida.','Plataforma 360 o Aero360: eliges un equipo, con el espacio revisado.','Selfie Mirror instalado durante todo el evento para usar con el teléfono propio.','Eco de Amor con saludo personalizado, mesa, decoración y entrega organizada de audios.'],
  storyTitle:'Cada invitado\ntiene su manera.',story:'Las poses en grupo, la energía de un vídeo, una selfie espontánea o unas palabras al teléfono. Cuatro experiencias que se complementan sin obligar a todos a participar de la misma forma.',
  detailTitle:'Tu elección de fotos.\nCuatro formas de recordar.',detail:'Fotocabina incluye impresión ilimitada durante el horario contratado. Punto Foto se integra en tu rincón decorado y ofrece hasta 216 tiras de 5×15 cm. Ambos entregan fotos digitales. Las diferencias quedan claras antes de elegir.',
  faq:[
    {question:'¿Cuánto dura cada experiencia?',answer:'Las opciones de dos o tres horas se refieren a los servicios activos de fotografía y 360. Selfie Mirror permanece durante todo el evento. El horario y la duración específicos de Eco de Amor se acuerdan expresamente en la propuesta; no se presume que esté activo todo el evento.'},
    {question:'¿Qué cambia entre Fotocabina y Punto Foto?',answer:'Fotocabina ofrece impresiones ilimitadas durante el servicio y cotillón. Punto Foto incluye hasta 216 tiras de 5×15 cm y entrega digital al instante, deja ver tu fondo decorado y no incluye cotillón. El precio cambia con la opción elegida.'},
    {question:'¿Los opcionales forman parte del pack?',answer:optionsExplanation+' Las fotos imantadas son opcionales por $15.000 para el evento. El álbum corresponde a la opción Fotocabina.'},
  ],
});

export const CEREMONIA=base({
  id:'ceremonia',slug:'ceremonia',name:'Ceremonia',conversationName:'el montaje de Ceremonia',conversationScope:'para mi ceremonia',kind:'ceremonia',
  hero:{title:'Un marco\npara el gran sí.',description:'Madera, un espacio especial y el comienzo de una historia.'},lead:'Arco hexagonal o puertas de roble con arco: elige la estructura para ese momento y dale tu propia ambientación.',
  preview:'/assets/services/ceremonia/arco-hexagonal-preview.mp4',poster:'/assets/services/ceremonia/arco-estructura.webp',heroAlt:'Estructura de madera del arco hexagonal de Herrera, instalada en un jardín.',
  pricing:{type:'fixed',price:80000,label:'Por evento'},durations:[],
  variants:[{id:'arco',label:'Arco hexagonal',price:80000,note:'Estructura de madera con instalación y retiro coordinados.'},{id:'puertas',label:'Puertas de roble + arco',price:100000,note:'Puertas para la entrada y arco hexagonal para el punto principal de la ceremonia.'}],
  media:CEREMONY_MEDIA,
  included:['Arco hexagonal de madera.','Puertas de roble cuando eliges la opción con puertas.','Instalación previa y retiro posterior, coordinados según el lugar y la disponibilidad.'],
  storyTitle:'El lugar donde\nempieza el recuerdo.',story:'Una estructura de madera para enmarcar tu ceremonia o crear un punto de fotos. Tú decides la ambientación floral y los detalles que completan ese espacio.',
  detailTitle:'La estructura.\nTu propia ambientación.',detail:'El arriendo incluye la estructura seleccionada, su instalación y retiro coordinados. Flores, arreglos y decoración adicional se preparan por separado. Las imágenes de esta página muestran el arco; no representan el conjunto con puertas.',
  faq:[
    {question:'¿Cuál es la diferencia entre las dos opciones?',answer:'El arco hexagonal cuesta $80.000 por evento. La opción de $100.000 agrega las puertas de roble al arco. Valor final para particulares. Empresas con boleta o factura: + 19 % IVA. El traslado se cotiza aparte.'},
    {question:'¿Incluye flores y decoración?',answer:'El arriendo corresponde a las estructuras de madera. Flores, arreglos florales y decoración adicional no están incluidos. Puedes coordinarlos con quien prepare la ambientación de tu ceremonia.'},
    {question:'¿Cuándo se instala y se retira?',answer:'Coordinamos instalación previa y retiro posterior contigo y con el recinto, según disponibilidad. Revisamos acceso, suelo, viento, energía y el espacio de al menos 3 × 3 metros antes de confirmar el montaje.'},
  ],
});

export const OTHER_DUOS=PUBLIC_PACKS.filter(p=>['content','fotos','fiestadigital','digital'].includes(p.id)).map(pack=>base({
  id:pack.id,slug:pack.slug,name:pack.name,conversationName:`el ${pack.name}`,kind:'duo',
  hero:{title:pack.summary,description:'Dos experiencias que se complementan para recordar tu celebración.'},lead:`Combina ${pack.components.join(' y ')}. Elige la duración y los recuerdos que quieres sumar para tu celebración.`,
  poster:pack.image,heroAlt:`Una muestra real de una de las experiencias de ${pack.name}.`,durations:pack.durations,
  experiences:pack.video?equipment:[],options:[...SERVICE_OPTIONS.filter(x=>x.id!=='album'||pack.photo==='cabina'),...(pack.photo?[PHOTO_MAGNET_OPTION]:[])],
  components:pack.components,photography:pack.photo??null,hasMirror:!!pack.mirror,
  media:[...(pack.photo==='punto'?PUNTO_MEDIA.slice(0,2):[]),...ESTRELLA_MEDIA.filter(x=>pack.photo==='cabina'&&x.placement==='cabina'||pack.mirror&&x.placement==='mirror'||pack.video&&['plataforma','aero'].includes(x.id))],
  included:[...pack.components,...(pack.photo==='punto'?['Hasta 216 tiras de 5×15 cm y foto digital al instante.']:pack.photo==='cabina'?['Impresiones ilimitadas durante el horario contratado y cotillón.']:[]),...(pack.mirror?['Selfie Mirror permanece durante todo el evento; tus invitados usan su propio teléfono.']:[])],
  storyTitle:'Dos experiencias.\nSu propio recuerdo.',story:pack.photo==='punto'?'Tu rincón decorado se convierte en el fondo de las fotos, junto a la segunda experiencia del dúo. La fotografía se entrega impresa y digital; al agotarse el papel continúa en digital.':pack.photo==='cabina'?'Fotos impresas para llevarse y un espacio para selfies durante la celebración. Dos maneras distintas de posar y compartir.':'La energía de un vídeo y la libertad de una selfie con el propio teléfono. Tú eliges un equipo 360 y revisamos contigo el espacio.',
  detailTitle:'Elige el tiempo.\nNosotros revisamos los detalles.',detail:pack.photo==='punto'?'Punto Foto incluye hasta 216 tiras de 5×15 cm. El fondo y la decoración los preparas tú; el servicio no incluye cotillón. Los vídeos o las selfies del otro componente aportan una experiencia diferente.':'La duración elegida corresponde a los servicios activos. Selfie Mirror, cuando forma parte del dúo, permanece instalado durante todo el evento.',
  faq:[{question:'¿Qué duración tiene cada componente?',answer:`La opción de dos o tres horas corresponde a ${pack.video&&pack.photo?'fotografía y el equipo 360':pack.video?'el equipo 360':'el servicio de fotografía'}. ${pack.mirror?'Selfie Mirror permanece durante todo el evento. ':''}Coordinamos el horario de inicio y revisamos disponibilidad y montaje contigo.`},{question:'¿Qué opcionales puedo agregar?',answer:pack.photo==='cabina'?optionsExplanation+' También puedes sumar fotos imantadas por $15.000 para el evento.':pack.photo==='punto'?'Puedes sumar pendrive personalizado por $15.000 y fotos imantadas por $15.000 para el evento. El límite de impresiones de Punto Foto se mantiene.':'Puedes sumar un pendrive personalizado por $15.000, con los medios digitales del evento y grabado personalizado.'}],
}));

export const ADDITIONAL_SERVICES=[PUNTO_FOTO,ECO_DE_AMOR,TODO_INCLUIDO,CEREMONIA,...OTHER_DUOS];
