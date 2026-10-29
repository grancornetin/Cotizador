import {HERRERA_TAX_NOTICE,HERRERA_REQUIREMENTS,publicMoney} from '../src/services/herrera-public.js';
import {calculateServicePrice,createInquiryUrl} from '../src/services/inquiry.js';

const arrow='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const oldRoot='/assets/services/pack-estrella/';
const componentRoutes={'Fotocabina':'fotocabina','Punto Foto':'punto-foto','Plataforma 360 o Aero360':'plataforma-360','Selfie Mirror':'selfie-mirror','Eco de Amor':'eco-de-amor'};
const slotNames={cabina:'Fotocabina',punto:'Punto Foto','360':'La experiencia 360',mirror:'Selfie Mirror',eco:'Eco de Amor',ceremonia:'Arco hexagonal',album:'Álbum opcional'};

export function detailTokens(service,esc,fields){
  const fixed=service.pricing?.type==='fixed';
  const figure=(poster,preview,alt)=>`<figure class="detail-window"><span class="hero-preview-frame"${preview?` data-preview="${esc(preview)}"`:''}><img src="${esc(poster)}" alt="${esc(alt)}" width="720" height="1280" decoding="async" fetchpriority="high"></span></figure>`;
  const first=figure(service.poster,service.preview,service.heroAlt);
  const second=service.kind==='todo'?figure(oldRoot+'selfie-mirror.webp',oldRoot+'selfie-mirror-preview.mp4','Selfie Mirror, incluido durante el evento en ambas opciones del pack.'):service.kind==='duo'?figure(service.hasMirror?oldRoot+'selfie-mirror.webp':oldRoot+'aero360-resultado.webp',service.hasMirror?oldRoot+'selfie-mirror-preview.mp4':oldRoot+'aero360-preview.mp4',service.hasMirror?'Selfie Mirror instalado en una celebración.':'Una muestra del resultado en vídeo de Aero360.'):'';
  const groups=[...new Set(service.media.map(m=>m.placement))];
  const media=groups.map(slot=>`<section class="detail-media-section"${service.kind==='todo'&&['cabina','punto'].includes(slot)?` data-variant-media="${slot}"${slot==='punto'?' hidden':''}`:''} aria-labelledby="media-${esc(slot)}"><h3 id="media-${esc(slot)}">${esc(slotNames[slot]??slot)}, de cerca</h3><div class="experience-media" data-media-slot="${esc(slot)}" data-media-name="${esc(slotNames[slot]??slot)}" aria-label="Muestras de ${esc(slotNames[slot]??slot)}"></div></section>`).join('');
  const variants=(service.variants??[]).length?`<fieldset class="detail-variant-field"><legend>${fixed?'Elige tu estructura':'¿Cómo quieres tus fotos?'}</legend><div class="variant-options">${service.variants.map((v,i)=>`<label><input type="radio" name="variant" value="${esc(v.id)}" disabled${i===0?' checked':''}><span><strong>${esc(v.label)}</strong><small>${esc(v.note)}</small></span>${v.price!==undefined?`<b>${publicMoney(v.price)}</b>`:''}</label>`).join('')}</div><p class="field-help" id="variant-note">${esc(service.variants[0].note)}</p></fieldset>`:'';
  const durationField=fixed?`<p class="detail-fixed-scope">Arriendo por evento. Coordinamos contigo instalación y retiro.</p>`:`<fieldset><legend>Elige tu duración</legend><div class="duration-options">${fields.durations}</div></fieldset>`;
  const equipment=service.experiences.length?`<fieldset><legend>Elige un equipo 360</legend><div class="experience-options">${service.experiences.map((e,i)=>`<label><input type="radio" name="experience" value="${esc(e.id)}" disabled${i===0?' checked':''}><span><strong>${esc(e.label)}</strong><small>${esc(e.note)}</small></span></label>`).join('')}</div><p class="field-help" id="equipment-note">${esc(service.experiences[0].note)}</p></fieldset>`:'';
  const extras=service.options.length?`<fieldset class="extras"><legend>Si quieres sumar un recuerdo</legend>${fields.options}</fieldset>`:'';
  const pendrive=service.options.some(o=>o.id==='pendrive')?`<details class="optional-media pendrive-media"><summary>Ver referencia del pendrive</summary><figure class="pendrive-reference"><img src="${oldRoot}pendrive-personalizado.webp" alt="Referencia de pendrive con grabado personalizado." width="960" height="960" loading="lazy" decoding="async"><figcaption>Referencia de personalización. Incluye los medios digitales del evento y grabado personalizado.</figcaption></figure></details>`:'';
  const routes=(service.components??(service.kind==='todo'?['Fotocabina','Punto Foto','Plataforma 360 o Aero360','Selfie Mirror','Eco de Amor']:[]));
  const componentLinks=routes.length?`<nav class="detail-component-links" aria-label="Conocer las experiencias del pack">${routes.map(label=>`<a href="/servicios/${componentRoutes[label]}/">${esc(label)} ${arrow}</a>`).join('')}</nav>`:'';
  const staticChoices=service.variants?.length?service.variants.map(v=>({label:v.label,selection:{variant:v.id},rates:v.durations??[{label:'Por evento',price:v.price}]})):[{label:service.name,selection:{},rates:fixed?[{label:service.pricing.label,price:service.pricing.price}]:service.durations}];
  const noScript=`<noscript><section class="detail-no-script wrap" aria-label="Opciones sin JavaScript"><h2>Opciones y precios</h2><p>Para elegir las opciones aquí, activa JavaScript. También puedes conversar directamente con nuestro equipo.</p><ul>${staticChoices.map(choice=>`<li><strong>${esc(choice.label)}</strong><p>${choice.rates.map(rate=>`${esc(rate.label)}: ${publicMoney(rate.price)}`).join(' · ')}. Valor final para particulares. Empresas con boleta o factura: + 19 % IVA. Traslado aparte.</p><a href="${esc(createInquiryUrl(choice.selection,{},service))}">Consultar ${esc(choice.label)} ${arrow}</a></li>`).join('')}</ul></section></noscript>`;
  return {
    'meta.description':esc(service.hero.description??service.lead),
    'meta.image':esc(service.socialImage??service.poster),
    'hero.description':esc(service.lead),
    'hero.media':`<div class="detail-filmstrip${second?' has-pair':''}">${first}${second}</div>${service.preview||second?'<div class="hero-preview-controls"><button type="button" data-preview-toggle hidden>Pausar vistas previas</button></div>':''}`,
    'price.initial':publicMoney(calculateServicePrice({},service).subtotal),
    'price.scope':`${service.variants?.length?esc(service.variants[0].label)+' · ':''}${fixed?esc(service.pricing.label):'2 horas'}`,
    'detail.noScript':noScript,
    'detail.kind':esc(service.kind),
    'detail.storyTitle':service.storyTitle.split('\n').map(esc).join('<br>'),
    'detail.story':esc(service.story),
    'detail.title':service.detailTitle.split('\n').map(esc).join('<br>'),
    'detail.body':esc(service.detail),
    'detail.support':service.supportImage?`<figure class="detail-support"><img src="${esc(service.supportImage)}" alt="Punto Foto junto al fondo y decoración preparados por el cliente." width="1440" height="1920" loading="lazy" decoding="async"><figcaption>El fondo y la decoración los prepara el cliente.</figcaption></figure>`:'',
    'detail.media':media,
    'detail.components':componentLinks,
    'detail.variants':variants,
    'detail.durationField':durationField,
    'detail.equipment':equipment,
    'detail.extras':extras,
    'detail.pendrive':pendrive,
    'detail.requirements':(service.requirements??HERRERA_REQUIREMENTS).map(x=>`<li>${esc(x)}</li>`).join(''),
    'taxNotice':esc(HERRERA_TAX_NOTICE),
  };
}
