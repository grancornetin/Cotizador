/** Solo datos comerciales públicos. No importar el seed, cuentas o condiciones históricas. */
export const HERRERA_CONTACT = { phone: '+56 9 5534 7032', whatsapp: '56955347032' };
export const SERVICE_OPTIONS = [
  { id: 'album', label: 'Álbum de Fotocabina', conversationName: 'el álbum', price: 30000, note: 'Para reunir fotos y mensajes de tus invitados.' },
  { id: 'pendrive', label: 'Pendrive personalizado', conversationName: 'el pendrive personalizado', price: 15000, note: 'Todos los medios digitales del evento y grabado personalizado.' },
];
export const publicMoney = value => new Intl.NumberFormat('es-CL', {
  style: 'currency', currency: 'CLP', maximumFractionDigits: 0,
}).format(value);
export const optionsExplanation = `El álbum de Fotocabina cuesta ${publicMoney(SERVICE_OPTIONS[0].price)} para reunir fotos y mensajes. El pendrive personalizado cuesta ${publicMoney(SERVICE_OPTIONS[1].price)} e incluye todos los medios digitales del evento y grabado personalizado. Puedes agregar el que prefieras.`;

// Nuevo predeterminado comercial Herrera confirmado por el propietario20-10-2026.
export const HERRERA_RESERVATION_DEPOSIT_MINOR=25000;
export const HERRERA_RESERVATION_ADVANCE=`abono fijo de ${publicMoney(HERRERA_RESERVATION_DEPOSIT_MINOR)} CLP`;

// Proyección web21-10-2026 confirmada por el propietario; no cambia documentos privados.
export const HERRERA_TAX_NOTICE='Valor final para particulares. Empresas con boleta o factura: + 19 % IVA. Traslado cotizado aparte según la ubicación exacta.';
export const PHOTO_MAGNET_OPTION=Object.freeze({id:'magnet',label:'Fotos imantadas',conversationName:'las fotos imantadas',price:15000,note:'Por todo el evento, para todas las fotos impresas que salgan durante el servicio.'});
export const PHOTO_SERVICE_OPTIONS=Object.freeze([...SERVICE_OPTIONS,PHOTO_MAGNET_OPTION]);
export const HERRERA_REQUIREMENTS=Object.freeze([
  'Un espacio de al menos 3 × 3 metros y energía eléctrica cerca del montaje.',
  'Acceso y estacionamiento para descargar los equipos, y una persona que reciba a nuestro equipo.',
  'Señal o internet para las descargas con QR de Punto Foto, Plataforma 360 y Aero360.',
  'Los montajes en exterior requieren un lugar sin lluvia. Revisamos suelo, viento y resguardo antes de confirmar.',
]);
