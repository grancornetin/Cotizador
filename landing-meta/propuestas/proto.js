/* Propuestas de landing · medición y lógica de cada variante (data-v en <body>) */
(function () {
  'use strict';
  var WHATSAPP = '56955347032', PIXEL_ID = '2109694313248711';
  var V = document.body.getAttribute('data-v') || 'x';
  var LANDING = 'landing-meta-' + V;
  var isLocal = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) || /\.localhost$/.test(location.hostname);
  var testLog = (window.__landingEvents = []);

  if (PIXEL_ID && !isLocal && !window.__NO_PIXEL) {
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
    try { if (window.fbq) window.fbq(standard ? 'track' : 'trackCustom', name, params); } catch (e) {}
  }
  var memo = {};
  function once(key, fn) {
    var k = 'hp_' + V + key, d = false;
    try { d = sessionStorage.getItem(k) === '1'; } catch (e) { d = !!memo[k]; }
    if (d) return; try { sessionStorage.setItem(k, '1'); } catch (e) { memo[k] = true; } fn();
  }
  function wa(msg) { return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg); }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function money(n) { return '$' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  function setWa(a, msg) { a.href = wa(msg); a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('data-msg', msg); }

  /* enlaces con mensaje fijo */
  $$('[data-msg-fixed]').forEach(function (a) { setWa(a, a.getAttribute('data-msg-fixed')); });

  /* toque en cualquier botón de WhatsApp */
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a.wa'); if (!a) return;
    var p = { origen: a.getAttribute('data-origin') || 'wa' };
    $$('[data-track]', a.closest('[data-scope]') || document).forEach(function () {});
    if (window.__proto_params) for (var k in window.__proto_params) p[k] = window.__proto_params[k];
    once('contact', function () { track('Contact', p, true); });
    track('WA_Toque', p);
  });

  /* videos: se mueven solo los visibles */
  var conn = navigator.connection || {};
  var noMotion = (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) || conn.saveData === true;
  var vids = $$('video[data-lazy]');
  if (noMotion) { $$('video').forEach(function (v) { v.removeAttribute('autoplay'); v.pause(); }); }
  else if ('IntersectionObserver' in window) {
    var vio = new IntersectionObserver(function (es) { es.forEach(function (e) {
      if (e.isIntersecting) { var p = e.target.play(); if (p && p.catch) p.catch(function () {}); } else e.target.pause();
    }); }, { threshold: 0.4, rootMargin: '120px 0px' });
    vids.forEach(function (v) { vio.observe(v); });
  }
  track('ViewContent', { content_category: 'fotocabina', variante: V }, true);

  /* chips de selección única */
  function single(group, cb) {
    var items = $$('.chip,.opt', group);
    items.forEach(function (it) { it.addEventListener('click', function () {
      items.forEach(function (o) { o.setAttribute(o.hasAttribute('aria-checked') ? 'aria-checked' : 'aria-pressed', 'false'); });
      it.setAttribute(it.hasAttribute('aria-checked') ? 'aria-checked' : 'aria-pressed', 'true'); cb(it);
    }); });
  }

  var mod = { a: modA, b: modB, c: modC, d: modD, e: modE }[V]; if (mod) mod();

  /* ---------- A · Fecha primero ---------- */
  function modA() {
    var tipo = 'evento', date = $('#fecha'), btn = $('#go');
    var d0 = new Date(); date.min = d0.getFullYear() + '-' + ('0' + (d0.getMonth() + 1)).slice(-2) + '-' + ('0' + d0.getDate()).slice(-2);
    single($('#tipos'), function (it) { tipo = it.getAttribute('data-t'); build(); });
    date.addEventListener('change', build);
    function nice(v) { if (!v) return ''; var p = v.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]);
      return new Intl.DateTimeFormat('es-CL', { weekday: 'long', day: 'numeric', month: 'long' }).format(d).replace(',', ''); }
    function build() {
      var f = nice(date.value), art = /^(matrimonio|cumpleaños|evento|baby|bautizo)/.test(tipo) ? 'un ' : 'una ';
      if (tipo === 'graduación') art = 'una '; if (tipo === 'fiesta') art = 'una ';
      var msg = 'Hola, quiero consultar si tienen libre ' + (f ? 'el ' + f : 'una fecha') + ' para ' + art + tipo + ' en el Maule. ¿Me ayudan con la cotización?';
      setWa(btn, msg); window.__proto_params = { tipo: tipo, con_fecha: !!date.value };
      if (date.value) once('fecha', function () { track('Fecha_Elegida', { tipo: tipo }); });
    } build();
    var st = $('#sticky');
    if (st && 'IntersectionObserver' in window) new IntersectionObserver(function (es) { st.hidden = es[0].isIntersecting; }, { threshold: 0.6 }).observe(btn);
    $$('.to-form').forEach(function (a) { a.addEventListener('click', function () { track('Sticky_Fecha', {}); }); });
  }

  /* ---------- B · Por tipo de evento ---------- */
  function modB() {
    var tabs = $$('[role=tab]'), panels = $$('.tp');
    var MSG = {
      matrimonio: 'Hola, estoy organizando un matrimonio y me interesa el Pack Estrella (Fotocabina + 360 + Selfie Mirror). ¿Me ayudan con la cotización?',
      cumpleaños: 'Hola, estoy organizando un cumpleaños y me interesa la Fotocabina por 2 horas. ¿Me ayudan con la cotización?',
      graduación: 'Hola, estamos organizando una graduación y me interesa el Pack Estrella (Fotocabina + 360 + Selfie Mirror). ¿Me ayudan con la cotización?',
      empresa: 'Hola, quiero cotizar para un evento de empresa: me interesa el Dúo Fiesta (Fotocabina + 360). ¿Me ayudan con la cotización?'
    };
    $$('.tp .wa').forEach(function (a) { setWa(a, MSG[a.closest('.tp').getAttribute('data-k')]); });
    function show(t) {
      tabs.forEach(function (x) { x.setAttribute('aria-selected', x === t ? 'true' : 'false'); });
      panels.forEach(function (p) { var on = p.id === t.getAttribute('aria-controls'); p.classList.toggle('on', on); $$('video', p).forEach(function (v) { if (on && !noMotion) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); } else v.pause(); }); });
      window.__proto_params = { tipo: t.getAttribute('data-k') }; track('Tipo_Elegido', { tipo: t.getAttribute('data-k') });
    }
    tabs.forEach(function (t) { t.addEventListener('click', function () { show(t); }); });
    window.__proto_params = { tipo: 'matrimonio' };
    var first = $('.tp.on video'); if (first && !noMotion) { var pr = first.play(); if (pr && pr.catch) pr.catch(function () {}); }
  }

  /* ---------- C · Arma tu pack ---------- */
  function modC() {
    var X = {
      fotocabina: { n: 'Fotocabina', h: { 1: 120000, 2: 160000, 3: 230000, 4: 300000 } },
      duo: { n: 'Dúo Fiesta (Fotocabina + 360)', h: { 2: 250000, 3: 380000 } },
      pack: { n: 'Pack Estrella (Fotocabina + 360 + Selfie Mirror)', h: { 2: 300000, 3: 430000 } }
    };
    var sel = { x: 'pack', h: 2, album: false }, ALBUM = 30000;
    var hrs = $('#hrs'), out = $('#tot'), btn = $('#go'), pv = $('#pv'), sum = $('#sum');
    function renderHours() {
      var o = X[sel.x].h; if (!o[sel.h]) sel.h = 2;
      hrs.innerHTML = '';
      Object.keys(o).forEach(function (k) {
        var b = document.createElement('button'); b.type = 'button'; b.className = 'chip'; b.setAttribute('aria-pressed', String(+k === sel.h)); b.textContent = k + (k === '1' ? ' hora' : ' horas');
        b.addEventListener('click', function () { sel.h = +k; renderHours(); update(); }); hrs.appendChild(b);
      });
    }
    function update() {
      var t = X[sel.x].h[sel.h] + (sel.album ? ALBUM : 0);
      out.textContent = money(t);
      sum.textContent = X[sel.x].n + ' · ' + sel.h + (sel.h === 1 ? ' hora' : ' horas') + (sel.album ? ' · con álbum' : '');
      var msg = 'Hola, quiero cotizar: ' + X[sel.x].n + ', ' + sel.h + (sel.h === 1 ? ' hora' : ' horas') + (sel.album ? ', con álbum de fotos' : '') + '. Total referencial ' + money(t) + '. ¿Tienen disponible mi fecha?';
      setWa(btn, msg); window.__proto_params = { plan: sel.x, horas: sel.h, album: sel.album, total: t };
    }
    single($('#exp'), function (it) {
      sel.x = it.getAttribute('data-x'); renderHours(); update();
      var s = $('source', pv); s.src = it.getAttribute('data-video'); pv.load(); if (!noMotion) { var p = pv.play(); if (p && p.catch) p.catch(function () {}); }
      track('Pack_Elegido', { plan: sel.x });
    });
    $('#album').addEventListener('click', function () { sel.album = !sel.album; this.setAttribute('aria-pressed', String(sel.album)); update(); track('Album_Toggle', { on: sel.album }); });
    renderHours(); update();
  }

  /* ---------- D · Reels ---------- */
  function modD() {
    var box = $('.reels'), slides = $$('.reel'), dots = $$('.dots i');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) {
        var v = $('video', e.target), i = slides.indexOf(e.target);
        if (e.isIntersecting) { dots.forEach(function (d, j) { d.classList.toggle('on', j === i); }); if (v && !noMotion) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } if (i > 0) once('slide' + i, function () { track('Reel_Visto', { n: i + 1 }); }); }
        else if (v) v.pause();
      }); }, { root: box, threshold: 0.6 });
      slides.forEach(function (s) { io.observe(s); });
    }
  }

  /* ---------- E · Reserva sin miedo ---------- */
  function modE() {
    if ('IntersectionObserver' in window) {
      var li = $$('.steps li');
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) once('paso' + li.indexOf(e.target), function () { track('Paso_Visto', { n: li.indexOf(e.target) + 1 }); }); }); }, { threshold: 0.8 });
      li.forEach(function (x) { io.observe(x); });
    }
  }
})();
