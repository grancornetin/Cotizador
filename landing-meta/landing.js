/* Landing de anuncio Meta · Herrera Producciones
   - Mide: clic en tipo de evento, opción vista, horas elegidas, toque a WhatsApp.
   - El píxel NO se carga en localhost, para no ensuciar los datos reales con pruebas. */
(function () {
  'use strict';

  var WHATSAPP = '56955347032';
  var META_PIXEL_ID = '2109694313248711';
  var CAMPAIGN_TAG = 'landing-meta';

  var state = { event: null, hours: { fotocabina: 1 } };
  var testLog = (window.__landingEvents = []);

  /* ---------- Píxel de Meta ---------- */
  var isLocal = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) || /\.localhost$/.test(location.hostname);
  if (META_PIXEL_ID && !isLocal) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  /* standard=true usa un evento estándar de Meta; si no, un evento personalizado */
  function track(name, params, standard) {
    params = params || {};
    params.landing = CAMPAIGN_TAG;
    testLog.push({ name: name, params: params, standard: !!standard });
    try { if (window.console && isLocal) console.log('[evento]', name, params); } catch (e) {}
    try {
      if (window.fbq) window.fbq(standard ? 'track' : 'trackCustom', name, params);
    } catch (e) {}
  }

  /* ---------- Mensajes de WhatsApp ---------- */
  function hoursLabel(h) { return h === 1 ? '1 hora' : h + ' horas'; }

  function planText(card) {
    var id = card.getAttribute('data-plan-id');
    var name = card.getAttribute('data-plan');
    if (id === 'fotocabina') return 'la Fotocabina de ' + hoursLabel(state.hours.fotocabina);
    if (id === 'duo-fiesta') return 'el Dúo Fiesta de 2 horas';
    if (id === 'pack-estrella') return 'el Pack Estrella de 2 horas';
    return name;
  }

  function buildMessage(kind, card) {
    var forPhrases = {
      'matrimonio': ' para un matrimonio',
      'cumpleaños o fiesta familiar': ' para un cumpleaños o fiesta familiar',
      'graduación': ' para una graduación',
      'evento de empresa': ' para un evento de empresa'
    };
    var forWhat = forPhrases[state.event] || '';
    var head;
    if (kind === 'plan' && card) {
      head = '¡Hola! Vi su anuncio y me interesa ' + planText(card) + forWhat + '.';
    } else if (kind === 'help') {
      head = '¡Hola! Vi su anuncio y quisiera que me recomienden qué opción me conviene' + forWhat + '.';
    } else {
      head = '¡Hola! Vi su anuncio y quisiera consultar por sus servicios' + forWhat + '.';
    }
    return head + '\n\nFecha del evento:\nLugar (comuna o recinto):\n\n¿Tienen disponibilidad?';
  }

  function waUrl(kind, card) {
    return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(buildMessage(kind, card));
  }

  function refreshLinks() {
    document.querySelectorAll('[data-wa]').forEach(function (a) {
      var kind = a.getAttribute('data-wa');
      var card = a.closest('.card');
      a.href = waUrl(kind, card);
      a.target = '_blank';
      a.rel = 'noopener';
    });
  }

  /* ---------- Selector "¿Qué celebras?" ---------- */
  var replies = {
    'matrimonio': 'Felicidades. Mira las opciones para tu matrimonio.',
    'cumpleaños o fiesta familiar': 'Qué buena razón para juntarse. Mira las opciones para tu fiesta.',
    'graduación': 'Una fecha para recordar. Mira las opciones para tu graduación.',
    'evento de empresa': 'Para boleta o factura se agrega 19 % de IVA. Mira las opciones.'
  };
  document.querySelectorAll('.chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      document.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      chip.setAttribute('aria-pressed', 'true');
      state.event = chip.getAttribute('data-event');
      document.getElementById('chooser-reply').textContent = replies[state.event] || '';
      refreshLinks();
      track('EventoElegido', { evento: state.event });
    });
  });

  /* ---------- Horas de Fotocabina ---------- */
  var hourHints = { 1: 'Por $40.000 más tienes 2 horas.', 2: 'Dos horas: más tiempo para que pase todo el mundo.' };
  document.querySelectorAll('.hour').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.card');
      card.querySelectorAll('.hour').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      btn.setAttribute('aria-pressed', 'true');
      var h = parseInt(btn.getAttribute('data-hours'), 10);
      state.hours.fotocabina = h;
      card.querySelector('.price-value').textContent = btn.getAttribute('data-price');
      card.querySelector('.price-hint').textContent = hourHints[h];
      refreshLinks();
      track('HorasElegidas', { plan: 'fotocabina', horas: h });
    });
  });

  /* ---------- Clics ---------- */
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('a');
    if (!a) return;
    if (a.hasAttribute('data-wa')) {
      var card = a.closest('.card');
      var kind = a.getAttribute('data-wa');
      var params = { origen: kind, evento: state.event || 'sin_elegir' };
      if (card) { params.plan = card.getAttribute('data-plan-id'); if (params.plan === 'fotocabina') params.horas = state.hours.fotocabina; }
      track('Contact', params, true); /* evento estándar: toque a WhatsApp */
    } else if (a.getAttribute('data-track') === 'detail_click') {
      track('FichaAbierta', { plan: a.getAttribute('data-plan-id') });
    } else if (a.getAttribute('data-track') === 'see_options') {
      track('VerOpciones', { evento: state.event || 'sin_elegir' });
    }
  });

  /* ---------- Opción vista (cuando una tarjeta ocupa la pantalla) ---------- */
  if ('IntersectionObserver' in window) {
    var seen = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.getAttribute('data-plan-id');
        if (seen[id]) return;
        seen[id] = true;
        track('OpcionVista', { plan: id });
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('.card').forEach(function (c) { io.observe(c); });
  }

  /* ---------- Barra fija móvil: aparece al pasar la portada ---------- */
  var sticky = document.getElementById('sticky');
  var hero = document.querySelector('.hero');
  if (sticky && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { sticky.hidden = e[0].isIntersecting; }, { threshold: 0 }).observe(hero);
  }

  refreshLinks();
})();
