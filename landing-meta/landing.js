/* Landing Meta v2 · Herrera Producciones
   Mide: ViewContent (ver las opciones), Contact (1 vez por sesión), WA_Toque (cada toque),
   Plan_Visto, Scroll_50/90. El píxel NO se carga en localhost. */
(function () {
  'use strict';

  var WHATSAPP = '56955347032';
  var PIXEL_ID = '2109694313248711';
  var LANDING = 'landing-meta';

  var MESSAGES = {
    general: 'Hola, vi el video de la fotocabina y quiero cotizar para mi evento. ¿Me ayudan?',
    fotocabina: 'Hola, quiero cotizar la Fotocabina para mi evento. ¿Me ayudan con la fecha?',
    duo: 'Hola, quiero cotizar el Dúo Fiesta (Fotocabina + 360) para mi evento. ¿Me ayudan con la fecha?',
    pack: 'Hola, quiero cotizar el Pack Estrella (Fotocabina + 360 + Selfie Mirror) para mi evento. ¿Me ayudan con la fecha?'
  };
  var PLAN_OF = { general: 'general', fotocabina: 'fotocabina', duo: 'duo-fiesta', pack: 'pack-estrella' };

  var testLog = (window.__landingEvents = []);
  var isLocal = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) || /\.localhost$/.test(location.hostname);

  /* ---------- Píxel de Meta ---------- */
  if (PIXEL_ID && !isLocal) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  function track(name, params, standard) {
    params = params || {};
    params.landing = LANDING;
    testLog.push({ name: name, params: params, standard: !!standard });
    try { if (isLocal && window.console) console.log('[evento]', name, params); } catch (e) {}
    try { if (window.fbq) window.fbq(standard ? 'track' : 'trackCustom', name, params); } catch (e) {}
  }

  /* una vez por sesión, con respaldo en memoria si sessionStorage falla */
  var memo = {};
  function once(key, fn) {
    var k = 'hp_' + key, done = false;
    try { done = sessionStorage.getItem(k) === '1'; } catch (e) { done = !!memo[k]; }
    if (done) return;
    try { sessionStorage.setItem(k, '1'); } catch (e) { memo[k] = true; }
    fn();
  }
  var local = {};
  function onceLocal(key, fn) { if (local[key]) return; local[key] = true; fn(); }

  /* ---------- Enlaces de WhatsApp ---------- */
  function waUrl(kind) {
    return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(MESSAGES[kind] || MESSAGES.general);
  }
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.href = waUrl(a.getAttribute('data-wa'));
    a.target = '_blank';
    a.rel = 'noopener';
  });

  var maxScroll = 0;
  function scrollPct() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    return h > 0 ? Math.round((window.pageYOffset / h) * 100) : 0;
  }

  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[data-wa]');
    if (!a) return;
    var kind = a.getAttribute('data-wa');
    var params = { origen: a.getAttribute('data-origin') || kind, plan: PLAN_OF[kind] || kind, scroll: Math.max(maxScroll, scrollPct()) };
    once('contact', function () { track('Contact', params, true); });
    track('WA_Toque', params);
  });

  /* ---------- Videos: solo se mueve el que se ve; respeta ahorro de datos y "reducir movimiento" ---------- */
  var conn = navigator.connection || {};
  var noMotion = (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) || conn.saveData === true;
  var heroVideo = document.getElementById('hero-video');
  if (heroVideo && noMotion) { heroVideo.removeAttribute('autoplay'); heroVideo.pause(); }
  var cardVideos = document.querySelectorAll('.card-media video');
  if (!noMotion && 'IntersectionObserver' in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else { v.pause(); }
      });
    }, { threshold: 0.35, rootMargin: '150px 0px' });
    cardVideos.forEach(function (v) { vio.observe(v); });
  }

  /* ---------- Observadores ---------- */
  if ('IntersectionObserver' in window) {
    var opciones = document.getElementById('opciones');
    if (opciones) {
      new IntersectionObserver(function (en, ob) {
        if (en[0].isIntersecting) { once('viewcontent', function () { track('ViewContent', { content_name: 'Escalera de opciones', content_category: 'fotocabina' }, true); }); ob.disconnect(); }
      }, { threshold: 0.2 }).observe(opciones);
    }
    var planIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = e.target.getAttribute('data-plan-id');
        onceLocal('plan_' + id, function () { track('Plan_Visto', { plan: id }); });
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('.card').forEach(function (p) { planIO.observe(p); });

    /* barra fija: visible salvo cuando un botón principal ya está en pantalla */
    var sticky = document.getElementById('sticky');
    var visibleMain = [];
    function refreshSticky() { if (sticky) sticky.hidden = visibleMain.length > 0; }
    var mainIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var i = visibleMain.indexOf(e.target);
        if (e.isIntersecting && i < 0) visibleMain.push(e.target);
        if (!e.isIntersecting && i >= 0) visibleMain.splice(i, 1);
      });
      refreshSticky();
    }, { threshold: 0.6 });
    document.querySelectorAll('[data-cta-main]').forEach(function (b) { mainIO.observe(b); });
  } else {
    var s = document.getElementById('sticky'); if (s) s.hidden = false;
  }

  window.addEventListener('scroll', function () {
    var p = scrollPct(); if (p > maxScroll) maxScroll = p;
    if (maxScroll >= 50) onceLocal('s50', function () { track('Scroll_50'); });
    if (maxScroll >= 90) onceLocal('s90', function () { track('Scroll_90'); });
  }, { passive: true });

})();
