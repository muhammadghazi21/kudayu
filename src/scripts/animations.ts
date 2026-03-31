// ─── Entrance Animation System ───────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Mark all animatable elements before they are visible ──────────────
  function prepareRevealTargets() {
    // Hero elements: explicit staggered delays for cinematic entrance
    const heroTargets = [
      { selector: '.hero-title',    delay: 0.15 },
      { selector: '.hero-subtitle', delay: 0.35 },
      { selector: '.hero-cta',      delay: 0.55 },
    ];
    heroTargets.forEach(({ selector, delay }) => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add('reveal', 'reveal--up');
        (el as HTMLElement).style.setProperty('--reveal-delay', `${delay}s`);
      });
    });

    // Page-header (non-index pages): staggered entrance
    const pageHeaderTargets = [
      { selector: '.page-header h1', delay: 0.1 },
      { selector: '.page-header p',  delay: 0.25 },
    ];
    pageHeaderTargets.forEach(({ selector, delay }) => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add('reveal', 'reveal--up');
        (el as HTMLElement).style.setProperty('--reveal-delay', `${delay}s`);
      });
    });

    // Individual reveal targets (slide-up by default)
    const singleTargets = [
      '.section-title',
      '.filter-bar',
      '.video-embed',
      '.horse-hero-content h1',
      '.horse-hero-content .horse-breed',
      '.horse-hero-content .badge-featured',
      '.footer-col',
    ];

    singleTargets.forEach(selector => {
      document.querySelectorAll(selector).forEach((el, i) => {
        if (!el.classList.contains('reveal')) {
          el.classList.add('reveal', 'reveal--up');
          (el as HTMLElement).style.setProperty('--reveal-delay', `${i * 0.1}s`);
        }
      });
    });

    // Staggered children inside containers
    const staggerContainers: { selector: string; childSelector: string; direction: string }[] = [
      { selector: '.showcase-grid',    childSelector: '.showcase-item',   direction: 'up-scale' },
      { selector: '.races-list',        childSelector: '.race-banner',      direction: 'up' },
      { selector: '.races-list',        childSelector: '.race-item',        direction: 'up' },
      { selector: '.timeline-list',     childSelector: '.timeline-item',    direction: 'left' },
      { selector: '#horses-grid',       childSelector: '.horse-card',       direction: 'up' },
      { selector: '.news-grid',         childSelector: '.news-card',        direction: 'up' },
      { selector: '.gallery',           childSelector: '.gallery-item',     direction: 'up-scale' },
      { selector: '.podium',            childSelector: '.podium-item',      direction: 'up-scale' },
      { selector: '.detail-card',       childSelector: '.info-item',        direction: 'up' },
      { selector: '.stats-bars',        childSelector: '.stat-bar',         direction: 'left' },
      { selector: '.achievements-list', childSelector: 'li',                direction: 'left' },
      { selector: '.horse-detail-grid .sidebar', childSelector: '.card',   direction: 'right' },
    ];

    staggerContainers.forEach(({ selector, childSelector, direction }) => {
      document.querySelectorAll(selector).forEach(container => {
        container.querySelectorAll(childSelector).forEach((child, i) => {
          if (!child.classList.contains('reveal')) {
            child.classList.add('reveal', `reveal--${direction}`);
            (child as HTMLElement).style.setProperty('--reveal-delay', `${i * 0.1}s`);
          }
        });
      });
    });

    // Section-level slide (whole section fades in)
    document.querySelectorAll('.section').forEach(el => {
      if (!el.classList.contains('reveal') && !el.classList.contains('featured-showcase')) {
        el.classList.add('reveal', 'reveal--section');
      }
    });
  }

  prepareRevealTargets();

  // ── 2. IntersectionObserver triggers ─────────────────────────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -20% 0px',
  });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ── 3. Cursor sparkle ────────────────────────────────────────────────────
  let sparkleTimer: number;
  document.addEventListener('mousemove', (e) => {
    if (sparkleTimer) clearTimeout(sparkleTimer);
    sparkleTimer = window.setTimeout(() => createSparkle(e.clientX, e.clientY), 50);
  });

  function createSparkle(x: number, y: number) {
    const sparkle = document.createElement('div');
    sparkle.className = 'cursor-sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.innerHTML = '✨';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }

  // ── 4. Smooth scroll ─────────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href') || '');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ── 5. Floating accents ──────────────────────────────────────────────────
  document.querySelectorAll('.logo-icon, .badge-featured').forEach((el, i) => {
    (el as HTMLElement).style.animationDelay = `${i * 0.2}s`;
    el.classList.add('float');
  });

});

// View Transitions API (for browsers that support it)
if ('startViewTransition' in document) {
  window.addEventListener('beforeunload', () => {
    (document as any).startViewTransition?.(() => {
      // Transition animation
    });
  });
}
