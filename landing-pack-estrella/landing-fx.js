/* Efectos de vida: palabra que rota, cinta, entradas al scroll y confeti.
   No toca la medición (eso vive en landing.js). */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* palabra que rota en el título */
  var word = document.querySelector('.rot-word');
  if (word && !reduce) {
    var words = ['evento', 'matrimonio', 'cumpleaños', 'graduación', 'fiesta'], i = 0;
    setInterval(function () {
      i = (i + 1) % words.length;
      word.style.animation = 'none'; void word.offsetWidth;
      word.textContent = words[i]; word.style.animation = '';
    }, 2200);
  }

  /* entradas al hacer scroll */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }

  /* confeti al tocar cualquier botón de WhatsApp */
  if (reduce || !document.body.animate) return;
  var colors = ['#cfaf74', '#b81636', '#f5f0e8'];
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a.wa'); if (!a) return;
    var r = a.getBoundingClientRect(), x0 = r.left + r.width / 2, y0 = r.top + r.height / 2;
    for (var n = 0; n < 22; n++) {
      var d = document.createElement('div'); d.className = 'confetti';
      d.style.background = colors[n % 3];
      document.body.appendChild(d);
      var dx = (Math.random() - 0.5) * 320, dy = -80 - Math.random() * 180, rot = Math.random() * 720 - 360;
      var anim = d.animate([
        { transform: 'translate(' + x0 + 'px,' + y0 + 'px) rotate(0deg)', opacity: 1 },
        { transform: 'translate(' + (x0 + dx * 0.6) + 'px,' + (y0 + dy) + 'px) rotate(' + rot / 2 + 'deg)', opacity: 1, offset: 0.4 },
        { transform: 'translate(' + (x0 + dx) + 'px,' + (y0 + dy + 260) + 'px) rotate(' + rot + 'deg)', opacity: 0 }
      ], { duration: 900 + Math.random() * 400, easing: 'cubic-bezier(.2,.7,.3,1)' });
      anim.onfinish = (function (el) { return function () { el.remove(); }; })(d);
    }
  }, true);
})();
