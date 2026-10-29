/** Página estática de comparación; datos públicos, enlaces útiles incluso sin JavaScript. */
import {PUBLIC_PACKS,packHref,packPhotoDescription} from '../src/services/pack-catalog.js';
import {HERRERA_CONTACT,HERRERA_TAX_NOTICE,publicMoney} from '../src/services/herrera-public.js';

const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const directMessage='¡Hola! Me gustaría conocer los packs de Herrera Producciones. ¿Me ayudas a elegir para mi celebración?';
const generalContact=`https://wa.me/${HERRERA_CONTACT.whatsapp}?text=${encodeURIComponent(directMessage)}`;

function prices(pack){return `<dl class="catalog-prices">${pack.durations.map(d=>`<div><dt>${esc(d.label)}</dt><dd>${publicMoney(d.price)}</dd></div>`).join('')}</dl>`;}
function packCard(pack,all){
  const family=pack.family==='todo'?all.filter(p=>p.family==='todo'):[pack];
  const components=pack.family==='todo'?['Fotocabina o Punto Foto','Plataforma 360 o Aero360','Selfie Mirror','Eco de Amor']:pack.components;
  const second=pack.voices?'/assets/services/pack-estrella/fotocabina.webp':pack.mirror?'/assets/services/pack-estrella/selfie-mirror.webp':pack.video?'/assets/services/pack-estrella/aero360-resultado.webp':null;
  return `<article class="catalog-pack${pack.featured?' is-featured':''}" data-pack="${esc(pack.family??pack.id)}" data-photo="${!!pack.photo}" data-video="${!!pack.video}" data-voices="${!!pack.voices}" aria-labelledby="pack-${esc(pack.id)}">
    <a class="catalog-image" href="${packHref(pack)}" tabindex="-1" aria-hidden="true"><img src="${esc(pack.image)}" alt="" width="720" height="1280" loading="lazy" decoding="async">${second&&second!==pack.image?`<img src="${second}" alt="" width="720" height="1280" loading="lazy" decoding="async">`:''}</a>
    <div class="catalog-pack-copy"><h3 id="pack-${esc(pack.id)}">${esc(pack.family==='todo'?'Todo Incluido':pack.name)}</h3><p class="catalog-pack-summary">${esc(pack.summary)}</p>
    <ul class="catalog-components">${components.map(c=>`<li>${esc(c)}</li>`).join('')}</ul>
    <p class="catalog-photo-note">${esc(pack.family==='todo'?'Elige Fotocabina o Punto Foto; sus impresiones y precios son distintos.':packPhotoDescription(pack))}</p>
    <div class="catalog-pack-prices">${family.map(p=>`<div class="catalog-price-option">${family.length>1?`<a class="catalog-variant-link" aria-label="${esc(p.name)} · ver ficha" href="${packHref(p)}">${p.variant==='cabina'?'Con Fotocabina':'Con Punto Foto'}</a>`:''}${prices(p)}</div>`).join('')}</div>
    <a class="catalog-card-link" href="${packHref(pack)}">Ver ${pack.family==='todo'?'las opciones':esc(pack.name)} ${arrow}</a></div>
  </article>`;
}

export function renderPackIndex(packs=PUBLIC_PACKS){
  const families=packs.filter(p=>p.id!=='todopunto');
  const featured=families.filter(p=>p.featured),others=families.filter(p=>!p.featured);
  const quick=featured.map(p=>`<a href="${packHref(p)}"><strong>${esc(p.name)}</strong><span>${publicMoney(p.durations[0].price)} · 2 h ${arrow}</span></a>`).join('');
  const solo=[['fotocabina','Fotocabina'],['punto-foto','Punto Foto'],['plataforma-360','Plataforma 360'],['aero360','Aero360'],['selfie-mirror','Selfie Mirror'],['eco-de-amor','Eco de Amor'],['ceremonia','Ceremonia']];
  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#f5f0e8">
<title>Packs para tu celebración · Herrera Producciones</title><meta name="description" content="Compara los packs de Herrera: fotos impresas, vídeos 360, selfies y mensajes de voz. Elige tus recuerdos y conversemos de tu fecha."><link rel="canonical" href="https://cotizador-grancornetin.vercel.app/packs/">
<meta property="og:title" content="Tu fiesta. Tus recuerdos. · Packs Herrera"><meta property="og:description" content="Compara las experiencias, elige tu pack y cuéntanos tu fecha."><meta property="og:image" content="https://cotizador-grancornetin.vercel.app/assets/services/pack-estrella/fotocabina.webp"><meta property="og:type" content="website">
<link rel="icon" href="/assets/icons/icon-192.png"><link rel="stylesheet" href="/src/styles/service-page.css"><link rel="stylesheet" href="/src/styles/pack-catalog.css"><script type="module" src="/src/services/catalog-page.js"></script></head>
<body class="catalog-page"><a class="skip" href="#contenido">Ir al contenido</a>
<header class="site-header wrap"><a class="brand" href="/packs/" aria-label="Herrera Producciones · Packs"><img src="/assets/branding/logo.png" alt="Herrera Producciones" width="2388" height="728"></a><nav aria-label="Navegación principal"><a href="#servicios">Servicios individuales</a><a class="header-contact" href="${generalContact}">Conversemos ${arrow}</a></nav></header>
<main id="contenido"><section class="catalog-hero wrap" aria-labelledby="titulo"><h1 id="titulo">Tu fiesta.<br><span>Tus recuerdos.</span></h1><div><nav class="catalog-quick" aria-label="Packs destacados, Valor final para particulares. Empresas con boleta o factura: + 19 % IVA, más traslado">${quick}</nav><p>Una tira de fotos, un vídeo, una selfie o unas palabras que quieres guardar. Encuentra las experiencias que van con tu celebración.</p><a class="button primary" href="#packs">Explorar los packs ${arrow}</a><p class="catalog-hero-note">Herrera Producciones · Talca, San Clemente y otros destinos del Maule, previa evaluación.</p></div></section>
<section class="catalog-selection wrap" id="packs" aria-labelledby="packs-title"><div class="catalog-section-heading"><h2 id="packs-title">¿Qué recuerdos<br>te quieres llevar?</h2><p>Compara lo que incluye cada pack. En su ficha podrás elegir duración, equipo y opcionales.</p></div>
<div class="catalog-filters" role="group" aria-label="Filtrar packs por tipo de recuerdo" hidden><button type="button" data-filter="all" aria-pressed="true">Todos</button><button type="button" data-filter="photo" aria-pressed="false">Fotos impresas</button><button type="button" data-filter="video" aria-pressed="false">Vídeo 360</button><button type="button" data-filter="voices" aria-pressed="false">Voces</button></div><p id="catalog-count" class="catalog-count" role="status" hidden></p>
<p class="catalog-tax">${esc(HERRERA_TAX_NOTICE)}</p><div class="catalog-featured">${featured.map(p=>packCard(p,packs)).join('')}</div>
<div class="catalog-other-heading"><h2>Otros dúos,<br>la misma celebración.</h2><p>Combinaciones para quien ya tiene claro qué quiere guardar.</p></div><div class="catalog-other">${others.map(p=>packCard(p,packs)).join('')}</div><p class="catalog-empty" hidden>No hay packs de este tipo por ahora. Prueba otra opción o conversemos para orientarte.</p>
<p class="catalog-duration-note">Las horas corresponden a los servicios activos. Selfie Mirror permanece durante el evento; en Todo Incluido, el horario y la duración de Eco de Amor se concretan en la propuesta. Consultar no bloquea una fecha.</p></section>
<section class="catalog-choice-note wrap" aria-labelledby="photo-choice-title"><div><h2 id="photo-choice-title">Tus fotos.<br>Dos maneras de vivirlas.</h2><p>Elige por la experiencia y el recuerdo que quieres ofrecer.</p></div><div class="catalog-photo-comparison"><div><h3>Fotocabina</h3><p>Impresiones ilimitadas durante el servicio, cotillón y tiras personalizadas. Hasta seis personas por sesión.</p><a href="/servicios/fotocabina/">Conocer Fotocabina ${arrow}</a></div><div><h3>Punto Foto</h3><p>Tu rincón decorado como fondo, hasta 216 tiras de 5×15 cm y foto digital al instante. Altura y ángulo regulables, también para niños.</p><a href="/servicios/punto-foto/">Conocer Punto Foto ${arrow}</a></div></div></section>
<section class="catalog-solo wrap" id="servicios" aria-labelledby="solo-title"><h2 id="solo-title">¿Buscas un<br>servicio en particular?</h2><ul>${solo.map(([slug,name])=>`<li><a href="/servicios/${slug}/">${name}${arrow}</a></li>`).join('')}</ul></section>
<section class="catalog-contact wrap" aria-labelledby="contact-title"><h2 id="contact-title">Cuéntanos tu idea.<br>La pensamos contigo.</h2><div><p>El tipo de celebración, la fecha y la comuna son un buen comienzo. Revisamos contigo las experiencias, el lugar y la disponibilidad.</p><a class="button primary" href="${generalContact}">Conversar por WhatsApp ${arrow}</a><p class="catalog-contact-note">Reserva con abono de $25.000, descontado del total. Saldo 48 horas antes. Confirmación revisada por nuestro equipo.</p></div></section></main>
<footer class="site-footer wrap"><img src="/assets/branding/logo.png" alt="Herrera Producciones" width="2388" height="728"><p>Talca · San Clemente · Región del Maule</p><a href="https://wa.me/${HERRERA_CONTACT.whatsapp}">${HERRERA_CONTACT.phone}</a><a href="#titulo">Volver al inicio ${arrow}</a></footer></body></html>`;
}
