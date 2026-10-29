/** Generación estática reproducible; la página sin JS y la consulta usan los mismos datos. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { PACK_ESTRELLA } from '../src/services/pack-estrella.js';
import { FOTOCABINA } from '../src/services/fotocabina.js';
import { PLATAFORMA_360 } from '../src/services/plataforma-360.js';
import { SELFIE_MIRROR } from '../src/services/selfie-mirror.js';
import { AERO360 } from '../src/services/aero360.js';
import { DUO_FIESTA } from '../src/services/duo-fiesta.js';
import { createInquiryUrl } from '../src/services/inquiry.js';
import { ADDITIONAL_SERVICES } from '../src/services/additional-services.js';
import { HERRERA_TAX_NOTICE,HERRERA_REQUIREMENTS } from '../src/services/herrera-public.js';
import { detailTokens } from './service-detail.mjs';
import { renderPackIndex } from './pack-index.mjs';
export const SERVICES = [PACK_ESTRELLA, FOTOCABINA, PLATAFORMA_360, SELFIE_MIRROR, AERO360, DUO_FIESTA,...ADDITIONAL_SERVICES];
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const plus = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';

export function renderServicePage(service, template) {
  const esc = escapeHtml;
  const money = value => new Intl.NumberFormat(service.locale, { style:'currency', currency:service.currency, maximumFractionDigits:0 }).format(value);
  const values = {
    'service.name': esc(service.name), 'service.slug': esc(service.slug),
    'hero.title': service.hero.title.split('\n').map(esc).join('<br>'),
    'contact.whatsapp': esc(service.contact.whatsapp), 'contact.phone': esc(service.contact.phone),
    'inquiry.selection': esc([service.name,service.pricing?.type==='fixed'?service.pricing.label:service.durations[0].label,service.experiences[0]?.label].filter(Boolean).join(' · ')),
    fallbackUrl: esc(createInquiryUrl({}, {}, service)),
    durations: service.durations.map((item,index) => `<label><input type="radio" name="duration" value="${item.hours}" disabled${index===0?' checked':''}><span><strong>${esc(item.label)}</strong><small>${money(item.price)}</small></span></label>`).join(''),
    options: service.options.map(item => `<label${item.variants?` data-variants="${esc(item.variants.join(' '))}"`:''}><input type="checkbox" name="${esc(item.id)}" disabled><span><strong>${esc(item.label)}</strong><small>${esc(item.note)}</small></span><b>+${money(item.price)}</b></label>`).join(''),
    faq: service.faq.map(item => `<details><summary>${esc(item.question)}<span aria-hidden="true">${plus}</span></summary><p>${esc(item.answer)}</p></details>`).join(''),
    included: (service.included || []).map(item => `<li>${esc(item)}</li>`).join(''),
    reservationNote: esc(service.reservationNote), inquiryNote: esc(service.inquiryNote),
    additionalHourPrice: service.additionalHourPrice ? money(service.additionalHourPrice) : '',
    'price.fixed': service.pricing?.type==='fixed' ? money(service.pricing.price) : '',
  };
  if(service.template==='service-detail')Object.assign(values,detailTokens(service,esc,values));
  for (const item of service.durations) values[`price.${item.hours}`] = money(item.price);
  for (const item of service.options) for (const key of ['price','label','note']) values[`option.${item.id}.${key}`] = key==='price' ? money(item.price) : esc(item[key]);
  return template.replace(/\{\{([\w.]+)\}\}/g, (_,key) => {
    if (!Object.hasOwn(values,key)) throw new Error(`Token desconocido: ${service.slug}/${key}`);
    return values[key];
  });
}

export function generateServicePages({check=false}={}) {
  const save=(destination,html,label)=>{
    if(check){if(readFileSync(destination,'utf8')!==html)throw new Error(`Ficha desactualizada: ${label}. Ejecuta node scripts/service-pages.mjs.`);}
    else{mkdirSync(path.dirname(destination),{recursive:true});writeFileSync(destination,html);}
  };
  save(path.join(root,'packs/index.html'),renderPackIndex(),'packs');
  for (const service of SERVICES) {
    const inquiry = readFileSync(path.join(root,'scripts/templates/inquiry.html'),'utf8');
    const specifics=service.id==='cabina'?['Hasta 6 personas por sesión. Si el espacio no permite la cabina inflable, instalamos solo el tótem al mismo precio y con el mismo servicio.']:service.id==='aero'?['Aero360 admite un máximo de 12 personas y requiere al menos 3 metros de altura. No se utiliza con lluvia.']:service.id==='360'?['Plataforma 360 admite hasta 4 adultos por vídeo y requiere suelo plano; sobre pasto se vuelve inestable.']:service.id==='mirror'?['Selfie Mirror permanece durante el evento y los invitados usan su teléfono. Con viento no se utiliza y se evita el pasto.']:['El equipo 360 es una elección: Plataforma 360 para hasta 4 adultos en suelo plano, o Aero360 para hasta 12 personas con al menos 3 metros de altura y sin lluvia.'];
    const legacyNotes=service.template==='service-detail'?'':`<section class="public-web-notes wrap" aria-label="Precios y preparación del lugar"><div><p>${escapeHtml(HERRERA_TAX_NOTICE)}</p><p>Prepara un espacio de al menos 3 × 3 metros y energía cercana. Nuestro equipo revisa el lugar contigo.</p></div><div><details><summary>Requisitos del lugar y capacidades</summary><ul>${[...specifics,...HERRERA_REQUIREMENTS].map(note=>`<li>${escapeHtml(note)}</li>`).join('')}</ul></details><a href="/packs/">Comparar todos los packs</a></div></section>`;
    const template = readFileSync(path.join(root,'scripts/templates',(service.template??service.slug)+'.html'),'utf8').replace('{{inquiry}}',legacyNotes+inquiry.trim());
    const html = renderServicePage(service, template);
    const destination = path.join(root,'servicios',service.slug,'index.html');
    save(destination,html,service.slug);
  }
}
if (process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  generateServicePages({check:process.argv.includes('--check')});
  console.log(`OK: ${SERVICES.length} fichas ${process.argv.includes('--check')?'conciliadas':'generadas'} desde datos comerciales públicos.`);
}
