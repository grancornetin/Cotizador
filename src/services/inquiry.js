import { PACK_ESTRELLA } from './pack-estrella.js';

export function serviceVariant(service, id) {
  const variants=service.variants??[];
  const selected=variants.find(item=>item.id===(id??variants[0]?.id));
  if(variants.length&&!selected||!variants.length&&id!==undefined)throw new RangeError('Elige una opción disponible para este servicio.');
  return selected;
}
export function serviceDurations(service, variantId) {
  return serviceVariant(service,variantId)?.durations??service.durations;
}
export function availableServiceOptions(service, selection={}) {
  const variant=serviceVariant(service,selection.variant);
  return service.options.filter(item=>!item.variants||item.variants.includes(variant?.id));
}

/** La selección pública no altera precios del catálogo ni cotizaciones existentes. */
export function normalizeSelection(selection = {}, service = PACK_ESTRELLA) {
  if (!selection || typeof selection !== 'object' || Array.isArray(selection)) {
    throw new TypeError('La selección debe ser un objeto.');
  }
  const fixed = service.pricing?.type === 'fixed';
  const variant=serviceVariant(service,selection.variant);
  const durations=variant?.durations??service.durations;
  const duration = fixed ? undefined : (selection.duration ?? durations[0].hours);
  const experience = selection.experience ?? service.experiences[0]?.id;
  const album = selection.album ?? false;
  const pendrive = selection.pendrive ?? false;
  const magnet=selection.magnet??false;
  if (fixed ? selection.duration !== undefined : !durations.some((item) => item.hours === duration)) {
    throw new RangeError(fixed ? 'La tarifa de este servicio no usa una duración por horas.' : 'Elige una duración disponible.');
  }
  if (service.experiences.length ? !service.experiences.some((item) => item.id === experience) : experience !== undefined) {
    throw new RangeError('Elige una variante disponible para este servicio.');
  }
  if (typeof album !== 'boolean' || typeof pendrive !== 'boolean'||typeof magnet!=='boolean') {
    throw new TypeError('Los opcionales deben indicar si están seleccionados.');
  }
  const options=availableServiceOptions(service,selection);
  for (const [id, chosen] of Object.entries({album,pendrive,magnet})) {
    if (chosen && !options.some(item => item.id === id)) {
      throw new RangeError('Elige un opcional disponible para este servicio.');
    }
  }
  return { ...(duration === undefined ? {} : { duration }), ...(experience === undefined ? {} : { experience }), ...(variant?{variant:variant.id}:{}), album, pendrive,...(magnet?{magnet:true}:{}) };
}

/** El subtotal suma los opcionales confirmados; el traslado se cotiza aparte. */
export function calculateServicePrice(selection = {}, service = PACK_ESTRELLA) {
  const selected = normalizeSelection(selection, service);
  const variant=serviceVariant(service,selected.variant);
  const base = service.pricing?.type === 'fixed' ? variant?.price??service.pricing.price : serviceDurations(service,selected.variant).find((item) => item.hours === selected.duration).price;
  const options = availableServiceOptions(service,selected).filter((item) => selected[item.id]);
  const extras = options.reduce((sum, item) => sum + (item.price ?? 0), 0);
  return {
    base, extras, subtotal: base + extras, currency: service.currency,
    travelIncluded: false,
    pending: ['Traslado', ...options.filter((item) => item.price === null).map((item) => item.label)],
  };
}

function textValue(value, maximum) {
  if (value == null) return '';
  if (typeof value !== 'string' || /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/u.test(value)) return null;
  const cleaned = value.replace(/\s+/gu, ' ').trim();
  return cleaned.length <= maximum ? cleaned : null;
}

function calendarDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/u.exec(value);
  if (!match) return false;
  const [, yearString, monthString, dayString] = match;
  const year = Number(yearString);
  const month = Number(monthString);
  const day = Number(dayString);
  const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return year > 0 && month >= 1 && month <= 12 && day >= 1 && day <= days[month - 1];
}

/** Datos opcionales: una consulta puede empezar sin fecha. No evalúa capacidad ni reserva. */
export function validateInquiryDetails(details = {}) {
  const errors = {};
  const input = details && typeof details === 'object' && !Array.isArray(details) ? details : {};
  if (input !== details) errors.form = 'Revisa los datos de tu consulta.';
  const values = {
    date: textValue(input.date, 10),
    time: textValue(input.time, 5),
    location: textValue(input.location, 200),
    occasion: textValue(input.occasion, 120),
  };
  if (values.date === null || (values.date && !calendarDate(values.date))) {
    errors.date = 'Indica una fecha válida con año.';
  }
  if (values.time === null || (values.time && !/^(?:[01]\d|2[0-3]):[0-5]\d$/u.test(values.time))) {
    errors.time = 'Indica una hora válida (00:00 a 23:59).';
  }
  if (values.location === null) errors.location = 'Usa hasta 200 caracteres para el lugar.';
  if (values.occasion === null) errors.occasion = 'Usa hasta 120 caracteres para la celebración.';
  return { valid: Object.keys(errors).length === 0, errors, values };
}

function money(value, service) {
  return new Intl.NumberFormat(service.locale, {
    style: 'currency', currency: service.currency, maximumFractionDigits: 0,
  }).format(value);
}

export function createInquiryMessage(selection = {}, details = {}, service = PACK_ESTRELLA) {
  const selected = normalizeSelection(selection, service);
  const validation = validateInquiryDetails(details);
  if (!validation.valid) {
    const error = new RangeError('Revisa los datos de la consulta.');
    error.validation = validation;
    throw error;
  }
  const { date, time, location, occasion } = validation.values;
  const price = calculateServicePrice(selected, service);
  const experience = service.experiences.find((item) => item.id === selected.experience);
  const variant=serviceVariant(service,selected.variant);
  const extras = service.options.filter(item => selected[item.id]);
  const scope = service.pricing?.type === 'fixed' ? ` ${service.conversationScope || ''}`.trimEnd() : ` por ${selected.duration} ${selected.duration===1?"hora":"horas"}`;
  const variantText=variant?`, en la opción ${variant.label.replace(/^Con\s+/i,'')}`:'';
  let opening = `¡Hola! Me interesa ${service.conversationName || service.name}${scope}${variantText}${experience ? `, con ${experience.label}` : ''}.`;
  if (extras.length) {
    const names = new Intl.ListFormat(service.locale, {style:'long',type:'conjunction'})
      .format(extras.map(item => item.conversationName || item.label));
    opening += ` Me gustaría agregar ${names}.`;
  }
  const paragraphs = [opening];
  if (date || time || location || occasion) {
    let context = occasion ? `Sería para ${occasion}` : 'Sería';
    if (date) context += `${occasion ? ',' : ''} el ${date.split('-').reverse().join('/')}`;
    if (time) context += ` a las ${time}`;
    if (location) context += `${date || time || occasion ? ',' : ''} en ${location}`;
    paragraphs.push(`${context}.`);
  }
  // Contexto de precio en una sola frase; el total con traslado se conversa con el equipo.
  paragraphs.push(`Vi mi selección en ${money(price.subtotal, service)}. Valor final para particulares. Empresas con boleta o factura: + 19 % IVA. Traslado aparte. ¿Me ayudas a cotizar?`);
  return paragraphs.join('\n\n');
}

/** Solo texto escrito/seleccionado voluntariamente. No lee URL actual, cookies ni almacenamiento. */
export function createInquiryUrl(selection = {}, details = {}, service = PACK_ESTRELLA) {
  const url = new URL(`https://wa.me/${service.contact.whatsapp}`);
  url.searchParams.set('text', createInquiryMessage(selection, details, service));
  return url.href;
}
