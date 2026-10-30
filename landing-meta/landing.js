/* Landing Meta v5 · Herrera Producciones
   Reels + Reserva sin miedo. Mide: ViewContent, Reel_Visto, Horas_Elegidas, Incluye_Abierto,
   Contact (1 vez por sesión), WA_Toque (cada toque). El píxel NO se carga en localhost. */
(function () {
  'use strict';
  var WHATSAPP = '56955347032';
  var PIXEL_ID = '2109694313248711';
  var LANDING = 'landing-meta';

  var SETS = {
    fotocabina: { name: 'la Fotocabina', title: 'Fotocabina', kicker: 'Qué incluye', price: { 1: 120000, 2: 160000, 3: 230000 },
      items: ['Hasta 6 personas por sesión', 'Fotos impresas ilimitadas durante el servicio', 'Cotillón y tira personalizada con tu nombre o logo', 'Álbum opcional: +$30.000'],
      note: 'La hora es el tiempo de funcionamiento de la fotocabina en tu evento.' },
    duo: { name: 'el Dúo Fiesta (Fotocabina + 360)', title: 'Dúo Fiesta', kicker: 'Fotocabina + 360', price: { 1: 190000, 2: 250000, 3: 380000 },
      items: ['Fotocabina: fotos impresas ilimitadas durante el servicio', 'Plataforma 360 (hasta 4 personas por video) o Aero360 (hasta 12, al aire libre), según tu lugar', 'Videos personalizados que tus invitados descargan con un QR (necesita señal)'],
      note: 'Fotocabina y 360 funcionan durante las horas que elijas.' },
    pack: { name: 'el Pack Estrella (Fotocabina + 360 + Selfie Mirror)', title: 'Pack Estrella', kicker: 'Todo en uno', price: { 1: 240000, 2: 300000, 3: 430000 },
      items: ['Fotocabina: fotos impresas ilimitadas durante el servicio', '360 o Aero360, según tu lugar: videos personalizados con QR', 'Selfie Mirror: un espejo para que tus invitados se fotografíen con su celular; se queda instalado todo el evento'],
      note: 'Fotocabina y 360 funcionan durante las horas que elijas. El espejo se queda todo el evento.' }
  };
  var GENERAL = 'Hola, vi el video de la fotocabina y quiero cotizar para mi evento. ¿Me ayudan?';

  var testLog = (window.__landingEvents = []);
  var isLocal = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) || /\.localhost$/.test(location.hostname);

  if (PIXEL_ID && !isLocal) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', PIXEL_ID); window.fbq('track', 'PageView');
  }
  function track(name, params, standard) {
    params = params || {}; params.landing = LANDING;
    testLog.push({ name: name, params: params, standard: !!standard });
    try { if (isLocal && window.console) console.log('[evento]', name, params); } catch (e) {}
    try { if (window.fbq) window.fbq(standard ? 'track' : 'trackCustom', name, params); } catch (e) {}
  }
  var memo = {};
  function once(key, fn) {
    var k = 'hp_' + key, d = false;
    try { d = sessionStorage.getItem(k) === '1'; } catch (e) { d = !!memo[k]; }
    if (d) return; try { sessionStorage.setItem(k, '1'); } catch (e) { memo[k] = true; } fn();
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function money(n) { return '$' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  function hword(h) { return h + (h === 1 ? ' hora' : ' horas'); }
  function waUrl(msg) { return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg); }
  function setWa(a, msg) { a.href = waUrl(msg); a.target = '_blank'; a.rel = 'noopener'; }
  function msgFor(key, h) {
    var s = SETS[key];
    return 'Hola, quiero cotizar ' + s.name + ' por ' + hword(h) + ' (' + money(s.price[h]) + '). ¿Tienen disponible mi fecha?';
  }

  /* ---------- Sets: horas, precio y mensaje ---------- */
  var state = {};
  $$('.reel.svc').forEach(function (sec) {
    var key = sec.getAttribute('data-svc'), s = SETS[key];
    state[key] = 1;
    var chips = $$('.chip', sec), price = $('[data-price]', sec), per = $('[data-per]', sec), btn = $('[data-svc-btn]', sec);
    function render() {
      var h = state[key];
      price.textContent = money(s.price[h]); per.textContent = hword(h);
      chips.forEach(function (c) { c.setAttribute('aria-checked', String(+c.getAttribute('data-h') === h)); });
      setWa(btn, msgFor(key, h));
    }
    chips.forEach(function (c) { c.addEventListener('click', function () {
      state[key] = +c.getAttribute('data-h'); render();
      track('Horas_Elegidas', { plan: key, horas: state[key] });
    }); });
    render();
  });
  $$('a.wa:not([data-svc-btn]):not(#sh-btn)').forEach(function (a) { setWa(a, GENERAL); });

  /* ---------- Ventanita: qué incluye ---------- */
  var sheet = $('#sheet'), lastFocus = null, openKey = null;
  function openSheet(key, opener) {
    var s = SETS[key]; openKey = key; lastFocus = opener;
    $('#sh-k').textContent = s.kicker; $('#sh-t').textContent = s.title;
    $('#sh-l').innerHTML = ''; s.items.forEach(function (t) { var li = document.createElement('li'); li.textContent = t; $('#sh-l').appendChild(li); });
    $('#sh-n').textContent = s.note;
    setWa($('#sh-btn'), msgFor(key, state[key]));
    sheet.hidden = false; $('.sheet-x', sheet).focus();
    track('Incluye_Abierto', { plan: key });
  }
  function closeSheet() { sheet.hidden = true; openKey = null; if (lastFocus) lastFocus.focus(); }
  $$('[data-incl]').forEach(function (b) { b.addEventListener('click', function () { openSheet(b.getAttribute('data-incl'), b); }); });
  $$('[data-close]', sheet).forEach(function (x) { x.addEventListener('click', closeSheet); });
  document.addEventListener('keydown', function (e) {
    if (sheet.hidden) return;
    if (e.key === 'Escape') closeSheet();
    if (e.key === 'Tab') { var f = $$('button,a', sheet).filter(function (n) { return n.offsetParent !== null; }); if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } }
  });

  /* ---------- Toque en WhatsApp ---------- */
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a.wa'); if (!a) return;
    var sec = a.closest('.svc'), key = sec ? sec.getAttribute('data-svc') : (a.id === 'sh-btn' ? openKey : null);
    var p = { origen: a.getAttribute('data-origin') || 'wa', scroll: scrollPct() };
    if (key) { p.plan = key; p.horas = state[key]; }
    once('contact', function () { track('Contact', p, true); });
    track('WA_Toque', p);
  });
  var box = $('#reels');
  function scrollPct() { var h = box.scrollHeight - box.clientHeight; return h > 0 ? Math.round(box.scrollTop / h * 100) : 0; }

  /* ---------- Videos y puntos: solo se mueve el que se ve ---------- */
  var conn = navigator.connection || {};
  var noMotion = (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) || conn.saveData === true;
  var slides = $$('.reel'), dots = $$('.dots i');
  if (noMotion) { $$('video').forEach(function (v) { v.removeAttribute('autoplay'); v.pause(); }); }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) {
      var v = $('video', e.target), i = slides.indexOf(e.target);
      if (e.isIntersecting) {
        dots.forEach(function (d, j) { d.classList.toggle('on', j === i); });
        if (v && !noMotion) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        if (i === 1) once('vc', function () { track('ViewContent', { content_name: 'Sets', content_category: 'fotocabina' }, true); });
        if (i > 0) once('slide' + i, function () { track('Reel_Visto', { n: i + 1, plan: e.target.getAttribute('data-svc') || (e.target.classList.contains('info') ? 'reservar' : 'cierre') }); });
        if (i === slides.length - 1) once('end', function () { track('Scroll_90', {}); });
      } else if (v) { v.pause(); }
    }); }, { root: box, threshold: 0.6 });
    slides.forEach(function (s) { io.observe(s); });
  }
})();
