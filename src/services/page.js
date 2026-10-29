import { PACK_ESTRELLA } from './pack-estrella.js';
import { FOTOCABINA } from './fotocabina.js';
import { PLATAFORMA_360 } from './plataforma-360.js';
import { SELFIE_MIRROR } from './selfie-mirror.js';
import { AERO360 } from './aero360.js';
import { DUO_FIESTA } from './duo-fiesta.js';
import {ADDITIONAL_SERVICES} from './additional-services.js';
import { mountServiceMedia } from './media.js';
import { mountHeroPreviews } from './hero-previews.js';
import { calculateServicePrice, createInquiryUrl, validateInquiryDetails,serviceVariant,availableServiceOptions,serviceDurations } from './inquiry.js';

// La página pública no importa la app ni accede a cuentas, catálogos o documentos privados.
const service = { 'pack-estrella':PACK_ESTRELLA, fotocabina:FOTOCABINA, 'plataforma-360':PLATAFORMA_360, 'selfie-mirror':SELFIE_MIRROR, aero360:AERO360, 'duo-fiesta':DUO_FIESTA,...Object.fromEntries(ADDITIONAL_SERVICES.map(s=>[s.slug,s])) }[document.body.dataset.service];
const heroStatement = document.querySelector('.hero-statement');
if (heroStatement) heroStatement.textContent = service.hero.title;
const packForm = document.querySelector('#pack-form');
const inquiryForm = document.querySelector('#inquiry-form');
const error = document.querySelector('#inquiry-error');
const inquiryDetails = document.querySelector('.inquiry-details');
inquiryDetails.hidden = false;
packForm.querySelectorAll('input').forEach(input => { input.disabled = false; });
const money = (value) => new Intl.NumberFormat(service.locale, {
  style: 'currency', currency: service.currency, maximumFractionDigits: 0,
}).format(value);
const selection = () => ({
  ...(service.pricing?.type==='fixed' ? {} : {duration:Number(packForm.elements.duration.value)}),
  ...(service.experiences.length ? { experience: packForm.elements.experience.value } : {}),
  ...(service.variants?.length?{variant:packForm.elements.variant.value}:{}),
  album: packForm.querySelector('input[name="album"]')?.checked ?? false,
  pendrive: packForm.querySelector('input[name="pendrive"]')?.checked ?? false,
  magnet:packForm.querySelector('input[name="magnet"]')?.checked??false,
});

function updateSelection() {
  const variantId=service.variants?.length?packForm.elements.variant.value:undefined;
  const allowed=availableServiceOptions(service,{variant:variantId});
  for(const label of packForm.querySelectorAll('[data-variants]')){
    const input=label.querySelector('input');const enabled=allowed.some(option=>option.id===input.name);
    label.hidden=!enabled;input.disabled=!enabled;if(!enabled)input.checked=false;
  }
  for(const panel of document.querySelectorAll('[data-variant-media]')){
    panel.hidden=panel.dataset.variantMedia!==variantId;
    if(panel.hidden)panel.querySelectorAll('video').forEach(video=>video.pause());
  }
  const selected = selection();
  const price = calculateServicePrice(selected, service);
  document.querySelector('#pack-total').textContent = money(price.subtotal);
  document.querySelector('#sticky-total').textContent = money(price.subtotal);
  document.querySelector('#sticky-pending').textContent = 'Valor final para particulares. Empresas con boleta o factura: + 19 % IVA · + traslado';
  const experience = service.experiences.find((item) => item.id === selected.experience);
  if (experience) document.querySelector('#equipment-note').textContent = experience.note;
  const variant=serviceVariant(service,selected.variant);
  if(variant&&document.querySelector('#variant-note'))document.querySelector('#variant-note').textContent=variant.note;
  for(const input of packForm.querySelectorAll('input[name="duration"]')){
    const rate=serviceDurations(service,selected.variant).find(item=>item.hours===Number(input.value));
    const label=input.closest('label').querySelector('small');if(rate&&label)label.textContent=money(rate.price);
  }
  const heroPrice=document.querySelector('.detail-hero-price strong');
  if(variant&&heroPrice){heroPrice.textContent=money(calculateServicePrice({variant:variant.id},service).subtotal);document.querySelector('.detail-hero-price span').textContent=`Valor final para particulares. Empresas con boleta o factura: + 19 % IVA · ${variant.label} · ${service.pricing?.type==='fixed'?service.pricing.label:'2 horas'} · más traslado`;}
  document.querySelector('#inquiry-selection').textContent = [service.name, service.pricing?.type==='fixed' ? service.pricing.label : `${selected.duration} ${selected.duration===1?"hora":"horas"}`,variant?.label, experience?.label,
    selected.album ? 'con álbum' : '', selected.pendrive ? 'con pendrive personalizado' : '',selected.magnet?'con fotos imantadas':''].filter(Boolean).join(' · ');
}
packForm.addEventListener('change',event=>{updateSelection();if(event.target.name==='variant')history.replaceState(null,'',`#${packForm.elements.variant.value}`);});
function applyVariantHash(){
  const variant=service.variants?.find(item=>`#${item.id}`===location.hash);
  if(variant){packForm.querySelector(`input[name="variant"][value="${variant.id}"]`).checked=true;updateSelection();}
}
applyVariantHash();
addEventListener('hashchange',applyVariantHash);

const tabs = [...document.querySelectorAll('[data-tab]')];
function showExperience(id, moveFocus = false) {
  const current = tabs.find((tab) => tab.dataset.tab === id) || tabs[0];
  for (const tab of tabs) {
    const active = tab === current;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    panel.hidden = !active;
    if (!active) panel.querySelectorAll('video').forEach((video) => video.pause());
  }
  if (moveFocus) current.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => showExperience(tab.dataset.tab));
  tab.addEventListener('keydown', (event) => {
    const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 :
      (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    showExperience(tabs[next].dataset.tab, true);
  });
});
document.querySelectorAll('[data-experience-link]').forEach((link) => {
  link.addEventListener('click', () => showExperience(link.dataset.experienceLink));
});
if (tabs.length) {
  document.querySelector('.experience-tabs').dataset.enhanced = 'true';
  showExperience('cabina');
}

function validateDetails() {
  const details = Object.fromEntries(new FormData(inquiryForm));
  const result = validateInquiryDetails(details);
  // La disponibilidad real la evalúa el equipo, pero una fecha pasada no es una consulta futura.
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  if (result.valid && details.date && details.date < today) {
    result.valid = false;
    result.errors.date = 'Esa fecha ya pasó. Revisa el día, mes y año, o consulta sin indicar fecha.';
  }
  for (const field of ['date', 'time', 'location', 'occasion']) {
    const input = inquiryForm.elements[field];
    const invalid = Boolean(result.errors[field]) || input.validity.badInput;
    input.setAttribute('aria-invalid', String(invalid));
    if (invalid) input.setAttribute('aria-describedby', 'inquiry-error');
    else if (field === 'date') input.setAttribute('aria-describedby', 'date-help');
    else input.removeAttribute('aria-describedby');
    if (input.validity.badInput) {
      result.valid = false;
      result.errors[field] = field === 'date' ? 'Completa una fecha válida con año, o déjala vacía.' : 'Completa una hora válida, o déjala vacía.';
    }
  }
  error.hidden = result.valid;
  error.textContent = Object.values(result.errors).join(' ');
  return { details, result };
}
inquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const { details, result } = validateDetails();
  if (!result.valid) {
    inquiryDetails.open = true;
    inquiryForm.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }
  // Navegación iniciada por la persona. WhatsApp le permite revisar el mensaje antes de enviarlo.
  window.location.assign(createInquiryUrl(selection(), details, service));
});
inquiryForm.addEventListener('input', () => {
  if (!error.hidden) validateDetails();
});
document.querySelector('#inquiry-submit').hidden = false;
document.querySelector('#inquiry-fallback').hidden = true;
document.documentElement.dataset.enhanced = 'true';
updateSelection();

// La barra se retira mientras se usa el formulario o el teclado; no tapa el CTA ni los campos.
const sticky = document.querySelector('.mobile-consult');
let inquiryVisible = false;
let heroActionVisible = true;
function updateSticky() {
  const focused = inquiryForm.contains(document.activeElement);
  sticky.dataset.hidden = String(heroActionVisible || inquiryVisible || focused);
  sticky.inert = heroActionVisible || inquiryVisible || focused;
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(([entry]) => {
    inquiryVisible = entry.isIntersecting;
    updateSticky();
  }, { threshold: 0.1 });
  observer.observe(document.querySelector('.inquiry-card'));
  const heroObserver = new IntersectionObserver(([entry]) => {
    heroActionVisible = entry.isIntersecting;
    updateSticky();
  });
  heroObserver.observe(document.querySelector('[data-hero-action]') || document.querySelector('.hero-intro .button'));
} else {
  heroActionVisible = false;
}
updateSticky();
document.addEventListener('focusin', updateSticky);
document.addEventListener('focusout', () => requestAnimationFrame(updateSticky));

// Medios reales seleccionados, sin acceso a la biblioteca privada.
mountServiceMedia(document, service.media);
mountHeroPreviews(document);
