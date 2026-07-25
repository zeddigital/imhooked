import { layout, businessSchema } from '../templates/layout.mjs';
import { icon, stars } from '../templates/icons.mjs';
import { site, origin } from '../data/site.mjs';
import reviews from '../data/reviews.json' with { type: 'json' };
import {
  hero,
  about,
  spots,
  intro,
  grounds,
  boat,
  pricing,
  reviewsSection,
  charters,
  video,
} from '../data/home.mjs';

/** Button with the arrow reveal used throughout the original theme. */
const btn = (b, extra = '') =>
  `<a class="btn${extra ? ` ${extra}` : ''}" href="${b.href}">${b.label}</a>`;

const img = (i, cls = '', { loading = 'lazy', sizes } = {}) => `
        <span class="media${cls ? ` ${cls}` : ''}">
          <img src="${i.src}"${i.srcset ? ` srcset="${i.srcset}"` : ''}${
            sizes || i.sizes ? ` sizes="${sizes || i.sizes}"` : ''
          } width="${i.width}" height="${i.height}" alt="${i.alt}"${
            i.title ? ` title="${i.title}"` : ''
          } loading="${loading}" decoding="async" referrerpolicy="no-referrer">
        </span>`;

const heroSection = () => `
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__media" role="presentation">
      <picture>
        <source media="(max-width: 640px)" srcset="/assets/img/hero-640.jpg">
        <source media="(max-width: 1024px)" srcset="/assets/img/hero-1024.jpg">
        <source media="(max-width: 1440px)" srcset="/assets/img/hero-1440.jpg">
        <img src="/assets/img/hero-1920.jpg" width="1920" height="924" alt="" fetchpriority="high" decoding="async">
      </picture>
    </div>
    <div class="hero__inner">
      <h1 class="hero__title" id="hero-title">${hero.h1}</h1>
      <p class="hero__sub">${hero.h2}</p>
      <span class="hero__rule" aria-hidden="true"></span>
      ${btn(hero.cta, 'btn--lg')}
    </div>
    <a class="hero__scroll" href="#about" aria-label="Scroll to about">${icon('caret')}</a>
  </section>`;

const aboutSection = () => `
  <section class="section section--deep" id="about" aria-labelledby="about-title">
    <div class="wrap wrap--narrow u-center">
      <h2 class="section__title section__title--light" id="about-title">${about.h2}</h2>
      <p class="lead lead--justify">${about.body}</p>
      <h3 class="section__kicker">${about.h3}</h3>
      <div class="btn-pair">
        ${about.buttons.map((b) => btn(b)).join('\n        ')}
      </div>
    </div>
  </section>`;

const spotsSection = () => `
  <section class="section section--spots" aria-labelledby="spots-title">
    <div class="wrap spots">
      <div class="spots__copy">
        <p class="eyebrow">${spots.eyebrow}</p>
        <h2 class="section__title section__title--light" id="spots-title">${spots.h2}</h2>
        <ul class="spots__list">
          ${spots.items
            .map(
              (item) => `<li class="spot">
            <span class="spot__icon">${icon(item.icon)}</span>
            <h3 class="spot__label">${item.label}</h3>
          </li>`
            )
            .join('\n          ')}
        </ul>
      </div>
      <div class="spots__cta">
        ${btn(spots.cta, 'btn--lg')}
      </div>
    </div>
  </section>`;

const introSection = () => `
  <section class="section" aria-labelledby="intro-title">
    <div class="wrap split split--40-60">
      <div class="split__text">
        <h2 class="section__title" id="intro-title">${intro.h2}</h2>
        <span class="rule" aria-hidden="true"></span>
        <p>${intro.body}</p>
        ${btn(intro.cta)}
      </div>
      <div class="split__media">
        ${img(intro.image, 'media--framed', { sizes: '(max-width: 980px) 92vw, 620px' })}
      </div>
    </div>

    <div class="wrap grounds">
      ${grounds
        .map(
          (g) => `<article class="ground">
        ${
          g.linkImage === false
            ? img(g.image, 'media--ground')
            : `<a class="ground__media" href="${g.href}">${img(g.image, 'media--ground')}</a>`
        }
        <div class="ground__body">
          <h3 class="ground__title">${g.heading}</h3>
          <p>${g.body}</p>
        </div>
      </article>`
        )
        .join('\n      ')}
    </div>

    <div class="wrap wrap--narrow u-center boat">
      <p class="lead lead--justify">${boat.body}</p>
      ${btn(boat.cta, 'btn--lg')}
    </div>
  </section>`;

const pricingSection = () => `
  <section class="section section--tint" aria-labelledby="pricing-title">
    <div class="wrap split split--40-60 split--top">
      <div class="split__text">
        <h2 class="section__title" id="pricing-title">${pricing.h2}</h2>
        <p class="muted">${pricing.lead}</p>
        <span class="rule" aria-hidden="true"></span>
        ${pricing.blocks
          .map(
            (block) => `<div class="rate">
          <h3 class="rate__title">${block.h2}</h3>
          ${block.lines.map((line) => `<p>${line}</p>`).join('\n          ')}
          ${block.note ? `<p class="rate__note">${block.note}</p>` : ''}
        </div>`
          )
          .join('\n        ')}
      </div>
      <div class="split__media split__media--sticky">
        ${img(pricing.image, 'media--framed', { sizes: '(max-width: 980px) 92vw, 600px' })}
        <h3 class="split__heading">${pricing.h3}</h3>
        <p class="u-justify">${pricing.body}</p>
      </div>
    </div>
  </section>`;

const reviewCard = (r, index) => `
          <li class="review" role="group" aria-label="Review ${index + 1} of ${reviews.length}">
            <div class="review__inner">
              <div class="review__head">
                <span class="review__platform" title="Posted on Google">${icon('google')}</span>
                ${
                  r.avatar
                    ? `<img class="review__avatar" src="${r.avatar}" width="40" height="40" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer">`
                    : `<span class="review__avatar review__avatar--initial" aria-hidden="true">${r.name.charAt(0)}</span>`
                }
                <span class="review__meta">
                  <span class="review__name">${r.name}</span>
                  <span class="review__date">${r.date}</span>
                </span>
              </div>
              ${stars(r.stars)}
              <div class="review__text">
                <p>${r.text.replace(/\n+/g, '</p><p>')}</p>
              </div>
              <button class="review__more" type="button" hidden>Read more</button>
            </div>
          </li>`;

const reviewsBlock = () => `
  <section class="section section--reviews" aria-labelledby="reviews-title">
    <div class="wrap">
      <h2 class="section__title u-center" id="reviews-title">${reviewsSection.h2}</h2>
      <p class="reviews__source u-center">Posted on Google</p>

      <div class="slider" data-slider data-autoplay="6000">
        <button class="slider__nav slider__nav--prev" type="button" aria-label="Previous review">${icon('arrowLeft')}</button>
        <div class="slider__viewport">
          <ul class="slider__track">
            ${reviews.map(reviewCard).join('')}
          </ul>
        </div>
        <button class="slider__nav slider__nav--next" type="button" aria-label="Next review">${icon('arrowRight')}</button>
        <div class="slider__dots" role="tablist" aria-label="Choose review"></div>
      </div>

      <p class="u-center reviews__link">
        <a href="${site.social.googleReviews}" target="_blank" rel="noopener">Read all reviews on Google</a>
      </p>
    </div>
  </section>`;

const charterRow = (c) => `
      <article class="charter${c.mediaFirst ? ' charter--media-first' : ''}" id="${c.id}">
        <div class="charter__body">
          <h2 class="charter__title">${c.h2}</h2>
          <p class="charter__season">${c.body}</p>
          <p class="charter__price">${c.price}</p>
          <div class="charter__actions">
            ${c.buttons.map((b) => btn(b, 'btn--sm')).join('\n            ')}
          </div>
        </div>
        <div class="charter__media">
          ${img(c.image, 'media--framed', { sizes: '(max-width: 980px) 92vw, 560px' })}
        </div>
      </article>`;

const chartersSection = () => `
  <section class="section section--charters" aria-labelledby="charters-title">
    <div class="wrap">
      <h2 class="u-sr-only" id="charters-title">Charter options</h2>
      ${charters.map(charterRow).join('\n')}
    </div>
  </section>`;

const videoSection = () => `
  <section class="section section--deep" id="video" aria-labelledby="video-title">
    <div class="wrap wrap--narrow u-center">
      <h2 class="section__title section__title--light" id="video-title">${video.h2}</h2>
      <div class="video" data-video>
        <video controls preload="none" poster="${video.poster}" playsinline referrerpolicy="no-referrer">
          <source src="${video.src}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <button class="video__play" type="button" aria-label="Play video">${icon('play')}</button>
      </div>
      ${btn(video.cta, 'btn--lg')}
    </div>
  </section>`;

export function homePage() {
  const body = [
    heroSection(),
    aboutSection(),
    spotsSection(),
    introSection(),
    pricingSection(),
    reviewsBlock(),
    chartersSection(),
    videoSection(),
  ].join('\n');

  return layout({
    title: 'Fishing Charter - Port Phillip Bay - Friendliest charter operator in Melbourne',
    description: site.description,
    path: '/',
    bodyClass: 'page-home',
    body,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        businessSchema(),
        {
          '@type': 'WebSite',
          '@id': `${site.url}/#website`,
          url: site.url,
          name: site.name,
          description: site.description,
          publisher: { '@id': `${site.url}/#business` },
          inLanguage: 'en-AU',
        },
        {
          '@type': 'Service',
          name: 'Melbourne Fishing Charters',
          provider: { '@id': `${site.url}/#business` },
          areaServed: site.areaServed.map((name) => ({ '@type': 'Place', name })),
          url: origin('/fishing-charter-bookings/'),
          offers: charters.map((c) => ({
            '@type': 'Offer',
            name: c.h2.replace(/&amp;/g, '&'),
            url: c.buttons[0].href,
          })),
        },
      ],
    },
  });
}
