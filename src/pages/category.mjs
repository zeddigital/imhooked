import { layout } from '../templates/layout.mjs';
import { icon } from '../templates/icons.mjs';
import { site, origin } from '../data/site.mjs';
import blog from '../data/blog.json' with { type: 'json' };

const postsFor = (slug) =>
  blog.posts.filter((p) => p.categories.some((c) => c.slug === slug));

const postCard = (post) => `
        <article class="post">
          <a class="post__media" href="${post.url}">
            <span class="media">
              <img src="${post.image}" width="1080" height="675" alt="${post.imageAlt}" loading="lazy" decoding="async" referrerpolicy="no-referrer">
            </span>
          </a>
          <div class="post__body">
            <h2 class="post__title"><a href="${post.url}">${post.title}</a></h2>
            <p class="post__meta">
              by <a href="${post.authorUrl}" rel="author">${post.author}</a>
              <span aria-hidden="true">|</span> <span class="post__date">${post.date}</span>
              <span aria-hidden="true">|</span> ${post.categories
                .map((c) => `<a href="/category/${c.slug}/" rel="category tag">${c.name}</a>`)
                .join(', ')}
            </p>
            <p class="post__excerpt">${post.excerpt}</p>
            <a class="post__more" href="${post.url}">Read more ${icon('arrowRight', 'post__moreIcon')}</a>
          </div>
        </article>`;

const sidebar = (activeSlug) => `
      <aside class="sidebar" aria-label="Blog categories">
        <section class="widget">
          <h2 class="widget__title">Fish Species &amp; Tips</h2>
          <ul class="widget__list">
            ${blog.categories
              .map(
                (c) =>
                  `<li${c.slug === activeSlug ? ' class="is-current"' : ''}><a href="/category/${c.slug}/">${c.name}</a> <span class="widget__count">${postsFor(c.slug).length}</span></li>`
              )
              .join('\n            ')}
          </ul>
        </section>
        <section class="widget widget--cta">
          <h2 class="widget__title">Ready to get out there?</h2>
          <p>Grab some mates and let Mal guide you to the hottest spots in Port Phillip Bay, Western Port Bay and Bass Strait.</p>
          <a class="btn btn--sm" href="${origin('/fishing-charter-bookings/#bookings')}">Book A Charter</a>
          <p class="widget__phone">${icon('phone', 'widget__icon')}<a href="${site.phoneHref}">${site.phone}</a></p>
        </section>
      </aside>`;

export function categoryPage(category) {
  const posts = postsFor(category.slug);
  const description =
    category.description ||
    `${category.name} fishing articles, tips and guides from ${site.name} — charters across Port Phillip Bay, Western Port Bay and Bass Strait.`;

  const body = `
  <div class="page-head">
    <div class="wrap">
      <nav class="crumbs" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li aria-current="page">${category.name}</li>
        </ol>
      </nav>
      <p class="eyebrow">Fishing Tips</p>
      <h1 class="page-head__title">${category.name}</h1>
      ${category.description ? `<p class="page-head__intro">${category.description}</p>` : ''}
    </div>
  </div>

  <section class="section section--archive">
    <div class="wrap archive">
      <div class="archive__main">
        ${posts.map(postCard).join('\n')}
        <p class="archive__count">${posts.length} ${posts.length === 1 ? 'article' : 'articles'} in ${category.name}</p>
      </div>
      ${sidebar(category.slug)}
    </div>
  </section>`;

  return layout({
    title: category.metaTitle,
    description: description.length > 300 ? `${description.slice(0, 297)}…` : description,
    path: `/category/${category.slug}/`,
    bodyClass: 'page-archive',
    body,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: category.name,
      description,
      url: `${site.url}/category/${category.slug}/`,
      isPartOf: { '@type': 'WebSite', name: site.name, url: site.url },
      hasPart: posts.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        url: p.url,
        image: p.image,
        author: { '@type': 'Person', name: p.author },
        datePublished: new Date(p.date).toISOString().slice(0, 10),
      })),
    },
  });
}

export const categories = blog.categories;
