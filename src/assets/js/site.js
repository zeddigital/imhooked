/* I'm Hooked Fishing Charters — front-end behaviour.
   Vanilla, no dependencies, progressive: every feature degrades to plain HTML. */

(() => {
  'use strict';

  const html = document.documentElement;
  const body = document.body;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------- scroll state */

  const onScroll = () => {
    const y = window.scrollY;
    body.classList.toggle('is-scrolled', y > 40);
    body.classList.toggle('is-scrolled-far', y > 600);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* --------------------------------------------------------- mobile menu */

  const burger = document.querySelector('.burger');
  const nav = document.getElementById('primary-nav');
  const scrim = document.querySelector('.nav-scrim');

  const setMenu = (open) => {
    body.classList.toggle('nav-open', open);
    burger?.setAttribute('aria-expanded', String(open));
    if (scrim) scrim.hidden = !open;
    body.style.overflow = open ? 'hidden' : '';
  };

  burger?.addEventListener('click', () => setMenu(!body.classList.contains('nav-open')));
  scrim?.addEventListener('click', () => setMenu(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('nav-open')) setMenu(false);
  });

  // Submenu accordions (mobile only — desktop uses hover/focus in CSS).
  nav?.querySelectorAll('.nav__toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const submenu = document.getElementById(toggle.getAttribute('aria-controls'));
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      submenu?.classList.toggle('is-open', !open);
    });
  });

  // Close the panel when navigating to an in-page anchor.
  nav?.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.getAttribute('href')?.startsWith('/#')) setMenu(false);
  });

  const mq = window.matchMedia('(min-width: 1081px)');
  mq.addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ------------------------------------------------------------- to top */

  document.querySelector('.to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* -------------------------------------------------- image fallbacks */

  document.querySelectorAll('.media img').forEach((img) => {
    const flag = () => img.closest('.media')?.classList.add('is-missing');
    if (img.complete && img.naturalWidth === 0) flag();
    img.addEventListener('error', flag);
  });

  /* ------------------------------------------------------------- video */

  document.querySelectorAll('[data-video]').forEach((wrap) => {
    const video = wrap.querySelector('video');
    const play = wrap.querySelector('.video__play');
    if (!video || !play) return;
    play.addEventListener('click', () => {
      wrap.classList.add('is-playing');
      video.play();
    });
    video.addEventListener('pause', () => wrap.classList.remove('is-playing'));
    video.addEventListener('ended', () => wrap.classList.remove('is-playing'));
  });

  /* ------------------------------------------------- reviews “read more” */

  document.querySelectorAll('.review').forEach((review) => {
    const text = review.querySelector('.review__text');
    const more = review.querySelector('.review__more');
    if (!text || !more) return;
    text.classList.add('is-clamped');
    requestAnimationFrame(() => {
      if (text.scrollHeight - text.clientHeight > 4) {
        more.hidden = false;
      } else {
        text.classList.remove('is-clamped');
      }
    });
    more.addEventListener('click', () => {
      const clamped = text.classList.toggle('is-clamped');
      more.textContent = clamped ? 'Read more' : 'Show less';
    });
  });

  /* ------------------------------------------------------------ slider */

  document.querySelectorAll('[data-slider]').forEach((slider) => {
    const track = slider.querySelector('.slider__track');
    const slides = Array.from(track?.children || []);
    const prev = slider.querySelector('.slider__nav--prev');
    const next = slider.querySelector('.slider__nav--next');
    const dotsWrap = slider.querySelector('.slider__dots');
    if (!track || slides.length === 0) return;

    let index = 0;
    let timer = null;
    const autoplay = Number(slider.dataset.autoplay || 0);

    const perView = () => {
      const slideWidth = slides[0].getBoundingClientRect().width;
      const viewport = track.parentElement.getBoundingClientRect().width;
      return Math.max(1, Math.round(viewport / (slideWidth + 24)));
    };
    const maxIndex = () => Math.max(0, slides.length - perView());

    const buildDots = () => {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      for (let i = 0; i <= maxIndex(); i += 1) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'slider__dot';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Go to review ${i + 1}`);
        dot.addEventListener('click', () => { go(i); pause(); });
        dotsWrap.append(dot);
      }
    };

    const paint = () => {
      const slideWidth = slides[0].getBoundingClientRect().width + 24;
      track.style.transform = `translate3d(${-index * slideWidth}px, 0, 0)`;
      slides.forEach((slide, i) => {
        const visible = i >= index && i < index + perView();
        slide.toggleAttribute('inert', !visible);
        slide.setAttribute('aria-hidden', String(!visible));
      });
      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index >= maxIndex();
      dotsWrap?.querySelectorAll('.slider__dot').forEach((dot, i) => {
        dot.setAttribute('aria-selected', String(i === index));
      });
    };

    const go = (i) => {
      index = Math.min(Math.max(i, 0), maxIndex());
      paint();
    };

    const advance = () => go(index >= maxIndex() ? 0 : index + 1);

    const start = () => {
      if (!autoplay || reduceMotion) return;
      stop();
      timer = window.setInterval(advance, autoplay);
    };
    const stop = () => { if (timer) window.clearInterval(timer); timer = null; };
    const pause = () => { stop(); };

    prev?.addEventListener('click', () => { go(index - 1); pause(); });
    next?.addEventListener('click', () => { advance(); pause(); });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);
    slider.addEventListener('focusin', stop);

    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { go(index + 1); pause(); }
      if (e.key === 'ArrowLeft') { go(index - 1); pause(); }
    });

    // Touch swipe.
    let startX = 0;
    let delta = 0;
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      delta = 0;
      stop();
    }, { passive: true });
    track.addEventListener('touchmove', (e) => { delta = e.touches[0].clientX - startX; }, { passive: true });
    track.addEventListener('touchend', () => {
      if (Math.abs(delta) > 45) go(index + (delta < 0 ? 1 : -1));
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => { buildDots(); go(index); }, 150);
    });

    buildDots();
    paint();
    start();
  });

  /* --------------------------------------------------------- opt-in popup */

  const optin = document.getElementById('optin');
  if (optin) {
    const KEY = 'imhooked:optin-dismissed';
    const days = Number(optin.dataset.cookieDays || 5);
    const delay = Number(optin.dataset.delay || 45) * 1000;

    const dismissedUntil = Number(window.localStorage?.getItem(KEY) || 0);
    const suppressed = dismissedUntil > Date.now();

    const close = (remember = true) => {
      optin.classList.remove('is-open');
      if (remember) {
        try {
          window.localStorage.setItem(KEY, String(Date.now() + days * 864e5));
        } catch { /* storage unavailable — nothing to remember */ }
      }
      window.setTimeout(() => { optin.hidden = true; }, 450);
    };

    if (!suppressed) {
      window.setTimeout(() => {
        optin.hidden = false;
        requestAnimationFrame(() => optin.classList.add('is-open'));
      }, delay);
    }

    optin.querySelector('.optin__close')?.addEventListener('click', () => close());
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && optin.classList.contains('is-open')) close();
    });

    optin.querySelector('.optin__form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const email = form.querySelector('#optin-email');
      if (!email.value || !email.checkValidity()) {
        email.focus();
        return;
      }
      // No mailing-list integration in this build — show the original
      // confirmation state and stop there.
      form.hidden = true;
      optin.querySelector('.optin__media').hidden = true;
      optin.querySelector('.optin__success').hidden = false;
      window.setTimeout(() => close(), 4000);
    });
  }

  /* ------------------------------------------------ reveal on first view */

  if (!reduceMotion && 'IntersectionObserver' in window) {
    html.classList.add('has-reveal');
    // Anything already on screen stays put; only below-the-fold content animates.
    const targets = Array.from(
      document.querySelectorAll(
        '.section__title, .lead, .spot, .ground, .charter, .review, .rate, .split__media, .post'
      )
    ).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);

    targets.forEach((el) => el.classList.add('will-reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    targets.forEach((el) => io.observe(el));
  }
})();
