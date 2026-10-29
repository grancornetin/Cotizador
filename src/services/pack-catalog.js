/** Proyección comercial pública ratificada21-10-2026. Nunca importar el seed privado. */
import {PACK_ESTRELLA} from './pack-estrella.js';
import {DUO_FIESTA} from './duo-fiesta.js';

const duration=(two,three)=>[{hours:2,label:'2 horas',price:two},{hours:3,label:'3 horas',price:three}];
const photo='/assets/services/pack-estrella/fotocabina.webp';
const video='/assets/services/pack-estrella/aero360-resultado.webp';
const point='/assets/services/punto-foto/punto-foto.webp';
const eco='/assets/services/eco-de-amor/eco-de-amor.webp';
const row=(id,name,slug,summary,components,durations,image,flags={})=>({id,name,slug,summary,components,durations,image,...flags});

export const PUBLIC_PACKS=Object.freeze([
  row('fiesta','Dúo Fiesta','duo-fiesta','Fotos para llevarse. Vídeos para volver a vivirlo.',
    ['Fotocabina','Plataforma 360 o Aero360'],DUO_FIESTA.durations,photo,{photo:'cabina',video:true,featured:true}),
  row('estrella','Pack Estrella','pack-estrella','Tres formas de participar. Recuerdos para todos los estilos.',
    ['Fotocabina','Plataforma 360 o Aero360','Selfie Mirror'],PACK_ESTRELLA.durations,photo,{photo:'cabina',video:true,mirror:true,featured:true}),
  row('todocabina','Todo Incluido Fotocabina','todo-incluido','Fotos, vídeos, selfies y las voces de quienes quieres.',
    ['Fotocabina','Plataforma 360 o Aero360','Selfie Mirror','Eco de Amor'],duration(390000,540000),eco,{photo:'cabina',video:true,mirror:true,voices:true,featured:true,family:'todo',variant:'cabina'}),
  row('todopunto','Todo Incluido Punto Foto','todo-incluido','Cuatro experiencias con Punto Foto en tu rincón decorado.',
    ['Punto Foto','Plataforma 360 o Aero360','Selfie Mirror','Eco de Amor'],duration(360000,490000),point,{photo:'punto',video:true,mirror:true,voices:true,family:'todo',variant:'punto'}),
  row('content','Dúo Content','duo-content','Vídeos en movimiento y selfies a su manera.',
    ['Plataforma 360 o Aero360','Selfie Mirror'],duration(160000,220000),video,{video:true,mirror:true}),
  row('fotos','Dúo de Fotos','duo-de-fotos','Tiras impresas para guardar y un espejo para compartir.',
    ['Fotocabina','Selfie Mirror'],duration(200000,270000),photo,{photo:'cabina',mirror:true}),
  row('fiestadigital','Dúo Fiesta Digital','duo-fiesta-digital','Tu rincón de fotos y una experiencia de vídeo.',
    ['Punto Foto','Plataforma 360 o Aero360'],duration(230000,360000),point,{photo:'punto',video:true}),
  row('digital','Dúo Digital','duo-digital','Fotos personalizadas y selfies durante la celebración.',
    ['Punto Foto','Selfie Mirror'],duration(160000,210000),point,{photo:'punto',mirror:true}),
].map(Object.freeze));

export function packHref(pack){
  return `/servicios/${pack.slug}/${pack.variant?`#${pack.variant}`:''}`;
}
export function packPhotoDescription(pack){
  return pack.photo==='punto'?'Hasta 216 tiras de 5×15 cm y entrega digital al instante.':
    pack.photo==='cabina'?'Impresiones ilimitadas durante el servicio contratado.':'Vídeos personalizados y selfies con tu teléfono.';
}
