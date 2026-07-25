import { site, nav, footerNav, origin } from '../data/site.mjs';
import { optin } from '../data/home.mjs';
import { icon } from './icons.mjs';

const year = new Date().getFullYear();

const isCurrent = (href, path) => href === path;

const navItem = (item, path) => {
  const current = isCurrent(item.href, path);
  if (!item.children) {
    return `<li class="nav__item">
            <a class="nav__link${current ? ' is-current' : ''}" href="${item.href}"${current ? ' aria-current="page"' : ''}>${item.label}</a>
          </li>`;
  }
  const id = `menu-${item.label.toLowerCase().replace(/\s+/g, '-')}`;
  return `<li class="nav__item nav__item--has-children">
            <a class="nav__link" href="${item.href}" aria-expanded="false" aria-controls="${id}">${item.label}${icon('caret', 'nav__caret')}</a>
            <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="${id}"><span class="u-sr-only">Show ${item.label} submenu</span>${icon('caret', 'nav__caret')}</button>
            <ul class="subnav" id="${id}">
              ${item.children
                .map((child) => `<li><a href="${child.href}">${child.label}</a></li>`)
                .join('\n              ')}
            </ul>
          </li>`;
};

const header = (path) => `
  <a class="skip-link" href="#main">Skip to content</a>

  <div class="topbar">
    <div class="topbar__inner">
      <a class="topbar__promo" href="${site.announcement.href}">
        ${icon('spark', 'topbar__spark')}
        <span>${site.announcement.text}</span>
      </a>
      <a class="topbar__cart" href="${site.cart.href}">${icon('cart', 'topbar__icon')}<span>${site.cart.label}</span></a>
    </div>
  </div>

  <header class="masthead" id="masthead">
    <div class="masthead__inner">
      <a class="brand" href="/" aria-label="${site.name} — home">
        <img class="brand__logo" src="/assets/img/logo.png" width="586" height="198" alt="${site.name}" fetchpriority="high" decoding="async">
      </a>

      <nav class="nav" id="primary-nav" aria-label="Primary">
        <ul class="nav__list">
          ${nav.map((item) => navItem(item, path)).join('\n          ')}
          <li class="nav__item nav__item--phone">
            <a class="nav__phone" href="${site.phoneHref}">${icon('phone', 'nav__phoneIcon')}<span>${site.phone}</span></a>
          </li>
        </ul>
      </nav>

      <a class="masthead__call" href="${site.phoneHref}" aria-label="Call ${site.phone}">${icon('phone')}</a>
      <button class="burger" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Menu">
        <span class="burger__bar"></span>
        <span class="burger__bar"></span>
        <span class="burger__bar"></span>
      </button>
    </div>
  </header>
  <div class="nav-scrim" hidden></div>`;

const footer = () => `
  <footer class="footer" id="contact">
    <div class="footer__inner">
      <div class="footer__brand">
        <span class="footer__logo"><img src="/assets/img/logo.png" width="586" height="198" alt="${site.name}" loading="lazy" decoding="async"></span>
        <p class="footer__blurb">Fun, friendly fishing charters for individuals or groups. Run by Mal, a qualified charter operator with over 40 years of fishing experience, targeting snapper, whiting, calamari, kingfish, tuna and shark across Port Phillip Bay, Western Port Bay and Bass Strait.</p>
        <ul class="footer__social">
          <li><a href="${site.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon('facebook')}</a></li>
          <li><a href="${site.social.googleReviews}" target="_blank" rel="noopener" aria-label="Reviews on Google">${icon('google')}</a></li>
        </ul>
      </div>

      ${footerNav
        .map(
          (group) => `<nav class="footer__col" aria-label="${group.title}">
        <h2 class="footer__title">${group.title}</h2>
        <ul class="footer__links">
          ${group.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('\n          ')}
        </ul>
      </nav>`
        )
        .join('\n\n      ')}

      <div class="footer__col footer__col--contact">
        <h2 class="footer__title">Get In Touch</h2>
        <ul class="footer__contact">
          <li>${icon('phone', 'footer__icon')}<a href="${site.phoneHref}">${site.phone}</a></li>
          <li>${icon('pin', 'footer__icon')}<span>Port Phillip Bay, Western Port Bay &amp; Bass Strait, Victoria</span></li>
          <li>${icon('user', 'footer__icon')}<span>${site.operator}, qualified charter operator</span></li>
        </ul>
        <a class="btn btn--sm footer__cta" href="${origin('/fishing-charter-bookings/#bookings')}">Book Now</a>
      </div>
    </div>

    <div class="footer__bar">
      <p>© ${year} ${site.name}. All rights reserved.</p>
      <p class="footer__note">Charters depart Melbourne, Mornington Peninsula &amp; Western Port.</p>
    </div>
  </footer>

  <button class="to-top" type="button" aria-label="Back to top">${icon('arrowUp')}</button>

  <aside class="optin" id="optin" hidden data-delay="${optin.delaySeconds}" data-cookie-days="${optin.cookieDays}" aria-labelledby="optin-title">
    <div class="optin__panel" role="dialog" aria-modal="false" aria-labelledby="optin-title">
      <button class="optin__close" type="button" aria-label="Close">${icon('close')}</button>
      <div class="optin__media">
        <img src="/assets/img/logo.png" width="586" height="198" alt="${site.name}" loading="lazy" decoding="async">
        <h2 class="optin__title" id="optin-title">${optin.h2}</h2>
        <p>${optin.body}</p>
      </div>
      <form class="optin__form" novalidate>
        <p class="optin__field"><label class="u-sr-only" for="optin-name">Name</label><input id="optin-name" name="name" placeholder="Name" maxlength="50" autocomplete="name"></p>
        <p class="optin__field"><label class="u-sr-only" for="optin-email">Email</label><input id="optin-email" name="email" type="email" placeholder="Email" autocomplete="email" required></p>
        <button class="btn optin__submit" type="submit">${optin.button}</button>
        <p class="optin__small">Preview build — the newsletter form is not connected.</p>
      </form>
      <div class="optin__success" hidden>
        <span class="optin__check">${icon('check')}</span>
        <h2>${optin.success}</h2>
      </div>
    </div>
  </aside>`;

/**
 * Renders a complete document.
 * @param {{title:string, description:string, path:string, body:string,
 *          bodyClass?:string, ogType?:string, schema?:object, canonical?:string}} page
 */
export function layout(page) {
  const canonical = page.canonical || `${site.url}${page.path}`;
  const ogImage = `${site.url}/assets/img/og-image.jpg`;

  return `<!DOCTYPE html>
<html lang="${site.locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="theme-color" content="#0d2434">

<meta property="og:type" content="${page.ogType || 'website'}">
<meta property="og:site_name" content="${site.name}">
<meta property="og:locale" content="${site.language}">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Fishing Charters">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${page.title}">
<meta name="twitter:description" content="${page.description}">
<meta name="twitter:image" content="${ogImage}">

<link rel="icon" href="/assets/img/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">

<link rel="preload" href="/assets/fonts/nunito-sans-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/site.css">
${page.head || ''}
<script type="application/ld+json">${JSON.stringify(page.schema || businessSchema(), null, 0)}</script>
</head>
<body class="${page.bodyClass || ''}">
${header(page.path)}
<main id="main">
${page.body}
</main>
${footer()}
<script src="/assets/js/site.js" defer></script>
</body>
</html>
`;
}

export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/assets/img/og-image.jpg`,
    telephone: site.phone,
    priceRange: '$$',
    founder: { '@type': 'Person', name: site.operator },
    areaServed: site.areaServed.map((name) => ({ '@type': 'Place', name })),
    sameAs: [site.social.facebook],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'VIC',
      addressCountry: 'AU',
    },
  };
}
