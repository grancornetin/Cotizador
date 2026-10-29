/** Proyección pública: sin originales, rutas privadas, datos de clientes ni URLs arbitrarias. */
import { SERVICE_OPTIONS, publicMoney } from './herrera-public.js';
const root = '/assets/services/pack-estrella/';
export function publicMedia(items) {
  if (!Array.isArray(items)) return [];
  const used = new Set();
  const safe = (path, extension) => typeof path === 'string' &&
    /^\/assets\/services\/[a-z0-9/_-]+\.[a-z0-9]+$/.test(path) && extension.test(path);
  return items.filter((item) => {
    if (!item || item.authorized !== true || typeof item.id !== 'string' || used.has(item.id) ||
      !['cabina', '360', 'mirror', 'album','punto','eco','ceremonia'].includes(item.placement) ||
      !['image', 'video'].includes(item.type) || typeof item.caption !== 'string' || !item.caption.trim() ||
      !safe(item.src, item.type === 'video' ? /\.mp4$/ : /\.(webp|jpg|png)$/) ||
      (item.type === 'video' && !safe(item.poster, /\.(webp|jpg|png)$/))) return false;
    used.add(item.id);
    return true;
  });
}

export const ESTRELLA_MEDIA = publicMedia([
  { id: 'cabina', type: 'video', placement: 'cabina', src: root + 'fotocabina.mp4', poster: root + 'fotocabina.webp', sourceId: 'M12', caption: 'Una sesión en cámara rápida', description: 'Poses, cotillón y risas dentro de la Fotocabina. La cabina inflable depende del espacio y del tipo de evento.', authorized: true },
  { id: 'cabina-exterior', type: 'video', placement: 'cabina', src: root + 'fotocabina-exterior.mp4', poster: root + 'fotocabina-exterior.webp', sourceId: 'M15', caption: 'La cabina en el lugar', description: 'Una vista exterior para imaginar cómo se integra a la celebración. El montaje se revisa según el espacio.', authorized: true },
  { id: 'plataforma', type: 'video', placement: '360', src: root + 'plataforma-360.mp4', poster: root + 'plataforma-360.webp', sourceId: 'M24', caption: 'Plataforma 360', description: 'Una muestra de la experiencia en una celebración real.', authorized: true },
  { id: 'aero', type: 'video', placement: '360', src: root + 'aero360.mp4', poster: root + 'aero360.webp', sourceId: 'M01', caption: 'Aero360', description: 'Otra forma de vivir el 360. Es alternativa a Plataforma 360 y requiere evaluar el espacio.', authorized: true },
  { id: 'mirror', type: 'video', placement: 'mirror', src: root + 'selfie-mirror.mp4', poster: root + 'selfie-mirror.webp', sourceId: 'M36', caption: 'Selfies con su propio teléfono', description: 'Los invitados se fotografían frente al espejo decorativo con sus móviles.', authorized: true },
  { id: 'mirror-detalles', type: 'video', placement: 'mirror', src: root + 'selfie-mirror-detalles.mp4', poster: root + 'selfie-mirror-detalles.webp', sourceId: 'M33', caption: 'El rincón para sus selfies', description: 'Una mirada al espejo, el vinilo y el neón. El montaje se acuerda según espacio y disponibilidad.', authorized: true },
  { id: 'album', type: 'video', placement: 'album', src: root + 'album-opcional.mp4', poster: root + 'album-opcional.webp', sourceId: 'M05', caption: 'Álbum de Fotocabina · opcional', description: `Fotos y mensajes escritos en el álbum. Se agrega aparte por ${publicMoney(SERVICE_OPTIONS.find(item => item.id === 'album').price)}.`, authorized: true },
  { id: 'celebracion', type: 'video', placement: '360', src: root + 'celebracion-360.mp4', poster: root + 'celebracion-360.webp', sourceId: 'M23', caption: 'El recuerdo en vídeo', description: 'Así se ve un resultado de Plataforma 360, listo para revivir el momento y compartirlo.', authorized: true },
  { id: 'montaje', type: 'image', placement: '360', src: root + 'montaje-plataforma-360.webp', sourceId: 'M20', caption: 'Una instalación real de Plataforma 360', alt: 'Plataforma 360 instalada con brazo, aro de luz, iluminación y separadores en un recinto exterior.', description: 'Mira cómo ocupa el espacio. Revisamos las condiciones del recinto antes de confirmar; su decoración no forma parte del pack.', authorized: true },
]);

/** Staff del servicio individual, sin ampliar la galería de Pack Estrella. */
export const PLATAFORMA_STAFF_MEDIA = publicMedia([
  { id:'plataforma-equipo', type:'video', placement:'360', src:root+'plataforma-360-equipo.mp4', poster:root+'plataforma-360-equipo.webp', sourceId:'M25', caption:'Nuestro equipo se encarga', description:'Operamos la plataforma y acompañamos a tus invitados durante la experiencia. Tú disfruta de tu celebración.', authorized:true },
]);

export function mountServiceMedia(document, items) {
  const media = publicMedia(items);
  function figure(item) {
    const figure = document.createElement('figure');
    figure.className = 'media-card';
    figure.dataset.service = item.placement;
    figure.dataset.mediaId = item.id;
    const element = document.createElement(item.type === 'video' ? 'video' : 'img');
    element.src = item.src;
    if (item.type === 'video') {
      element.controls = true;
      element.playsInline = true;
      element.preload = 'none';
      element.muted = true;
      element.defaultMuted = true;
      element.poster = item.poster;
      element.setAttribute('aria-label', item.caption);
      const status = document.createElement('p');
      status.className = 'media-status';
      status.setAttribute('role', 'status');
      const retry = document.createElement('button');
      retry.className = 'media-retry';
      retry.type = 'button';
      retry.textContent = 'Reintentar vídeo';
      retry.hidden = true;
      const showError = () => {
        status.textContent = navigator.onLine ? 'No pudimos cargar el vídeo. Puedes reintentarlo.' : 'Conéctate a internet para reproducir este vídeo.';
        retry.hidden = false;
      };
      element.addEventListener('error', showError);
      element.addEventListener('waiting', () => { status.textContent = 'Cargando vídeo…'; });
      element.addEventListener('playing', () => { status.textContent = ''; retry.hidden = true; });
      element.addEventListener('play', () => document.querySelectorAll('video').forEach((video) => {
        if (video !== element) video.pause();
      }));
      retry.addEventListener('click', () => { element.load(); element.play().catch(showError); });
      figure.append(element, status, retry);
    } else {
      element.alt = item.alt || item.caption;
      element.loading = 'lazy';
      element.decoding = 'async';
      element.width = 1440;
      element.height = 1080;
      element.addEventListener('error', () => {
        element.hidden = true;
        const status = document.createElement('p');
        status.className = 'media-status';
        status.textContent = 'No pudimos cargar esta foto. Recarga la página para reintentarlo.';
        figure.prepend(status);
      });
      figure.append(element);
    }
    const caption = document.createElement('figcaption');
    const title = document.createElement('strong');
    title.textContent = item.caption;
    const description = document.createElement('p');
    description.textContent = item.description || '';
    caption.append(title, description);
    figure.append(caption);
    return figure;
  }
  for (const slot of document.querySelectorAll('[data-media-slot]')) {
    slot.setAttribute('role', 'group');
    const assigned = media.filter((item) => item.placement === slot.dataset.mediaSlot);
    if (slot.dataset.mediaSlot === '360' && assigned.some(item => item.id === 'aero') && assigned.some(item => item.id === 'plataforma')) {
      const hint = document.createElement('p');
      hint.className = 'media-track-hint';
      hint.textContent = 'Desliza para ver Plataforma 360 y Aero360. El pack incluye una opción.';
      slot.before(hint);
    }
    assigned.forEach((item) => slot.append(figure(item)));
    if (assigned.length < 2) continue;
    const track = slot;
    const name = slot.dataset.mediaName || { cabina: 'Fotocabina', '360': '360 y Aero360', mirror: 'Selfie Mirror' }[slot.dataset.mediaSlot];
    track.id = `service-media-${slot.dataset.mediaSlot}`;
    const controls = document.createElement('div');
    controls.className = 'media-controls';
    const counter = document.createElement('span');
    counter.className = 'media-counter';
    for (const [direction, label] of [[-1, 'Anterior'], [1, 'Siguiente']]) {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = label;
      button.setAttribute('aria-label', `${label} de ${name}`);
      button.setAttribute('aria-controls', track.id);
      button.addEventListener('click', () => track.scrollBy({ left: direction * (track.firstElementChild.getBoundingClientRect().width + 18),
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
      controls.append(button);
    }
    controls.insertBefore(counter, controls.children[1]);
    track.after(controls);
    const previous = controls.firstElementChild;
    const next = controls.lastElementChild;
    const updateNavigation = () => {
      controls.hidden = track.scrollWidth <= track.clientWidth + 2;
      previous.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      const step = track.firstElementChild.getBoundingClientRect().width + 18;
      counter.textContent = `${Math.min(assigned.length, Math.round(track.scrollLeft / step) + 1)} de ${assigned.length}`;
    };
    track.addEventListener('scroll', updateNavigation, { passive: true });
    if ('ResizeObserver' in document.defaultView) new document.defaultView.ResizeObserver(updateNavigation).observe(track);
    requestAnimationFrame(updateNavigation);
  }
  // Cambiar experiencia o plegar el álbum detiene el vídeo oculto y su sonido.
  document.addEventListener('click', () => queueMicrotask(() => document.querySelectorAll('video').forEach((video) => {
    if (video.closest('[hidden]') || video.closest('details:not([open])')) video.pause();
  })));
  document.querySelectorAll('details.optional-media').forEach((details) => details.addEventListener('toggle', () => {
    if (!details.open) details.querySelectorAll('video').forEach((video) => video.pause());
  }));
}
