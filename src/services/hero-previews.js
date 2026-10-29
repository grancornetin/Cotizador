/** Silent samples play only on screen; full videos keep their native controls. */
export function mountHeroPreviews(document) {
  const window = document.defaultView;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const button = document.querySelector('[data-preview-toggle]');
  if (!button) return;
  const previews = [...document.querySelectorAll('[data-preview]')].map(frame => {
    const video = document.createElement('video');
    video.className = 'hero-preview';
    video.muted = video.defaultMuted = video.playsInline = video.loop = true;
    video.preload = 'none';
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('aria-hidden', 'true');
    video.tabIndex = -1;
    frame.append(video);
    return { frame, video, visible: false, blocked: false };
  });
  let userPaused = false;
  const fullVideos = [...document.querySelectorAll('.media-card video')];
  function synchronize() {
    button.hidden = reduced.matches;
    const blocked = previews.some(preview => preview.blocked);
    button.textContent = userPaused || blocked ? 'Reproducir vistas previas' : 'Pausar vistas previas';
    const suspended = reduced.matches || userPaused || document.hidden || fullVideos.some(video => !video.paused && !video.ended);
    for (const preview of previews) {
      const { video, frame } = preview;
      const active = !suspended && preview.visible && !preview.blocked;
      video.autoplay = active;
      if (!active) {
        video.pause();
        if (reduced.matches || preview.blocked) frame.classList.remove('is-playing');
        continue;
      }
      if (!video.getAttribute('src')) video.src = frame.dataset.preview;
      if (video.paused) video.play().catch(error => {
        if (error.name === 'AbortError') return;
        preview.blocked = true;
        frame.classList.remove('is-playing');
        synchronize();
      });
    }
  }
  for (const preview of previews) {
    preview.video.addEventListener('playing', () => preview.frame.classList.add('is-playing'));
    preview.video.addEventListener('error', () => {
      preview.blocked = true;
      preview.frame.classList.remove('is-playing');
      synchronize();
    });
  }
  button.addEventListener('click', () => {
    const retry = previews.some(preview => preview.blocked);
    userPaused = retry ? false : !userPaused;
    if (retry) previews.forEach(preview => {
      if (preview.video.error) preview.video.load();
      preview.blocked = false;
    });
    synchronize();
  });
  reduced.addEventListener('change', synchronize);
  document.addEventListener('visibilitychange', synchronize);
  for (const video of fullVideos) {
    for (const event of ['play', 'pause', 'ended']) video.addEventListener(event, () => queueMicrotask(synchronize));
  }
  const update = () => {
    previews.forEach(preview => {
      const rect = preview.frame.getBoundingClientRect();
      preview.visible = rect.bottom > 0 && rect.top < window.innerHeight;
    });
    synchronize();
  };
  if ('IntersectionObserver' in window) {
    const observer = new window.IntersectionObserver(entries => {
      for (const entry of entries) previews.find(preview => preview.frame === entry.target).visible = entry.isIntersecting;
      synchronize();
    }, { threshold: 0.1 });
    previews.forEach(preview => observer.observe(preview.frame));
  } else {
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
  synchronize();
}
