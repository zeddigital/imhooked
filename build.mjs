#!/usr/bin/env node
/**
 * Static site generator.
 *
 *   node build.mjs        → writes ./dist
 *   SITE_URL=… node build.mjs
 *
 * No dependencies: templates are plain ES modules that return HTML strings.
 */

import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { site } from './src/data/site.mjs';
import { layout } from './src/templates/layout.mjs';
import { homePage } from './src/pages/home.mjs';
import { categories, categoryPage } from './src/pages/category.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');

const write = async (route, html) => {
  const file = join(dist, route.replace(/^\//, ''), 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html, 'utf8');
  return route;
};

const routes = [];

async function build() {
  const started = Date.now();
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });

  // Pages ------------------------------------------------------------------
  routes.push(await write('/', homePage()));
  for (const category of categories) {
    routes.push(await write(`/category/${category.slug}/`, categoryPage(category)));
  }

  // 404 --------------------------------------------------------------------
  await writeFile(join(dist, '404.html'), notFound(), 'utf8');

  // Static assets ----------------------------------------------------------
  await cp(join(root, 'src/assets'), join(dist, 'assets'), { recursive: true });

  // Crawler files ----------------------------------------------------------
  await writeFile(join(dist, 'robots.txt'), robots(), 'utf8');
  await writeFile(join(dist, 'sitemap.xml'), sitemap(), 'utf8');
  await writeFile(join(dist, '_headers'), headers(), 'utf8');

  const ms = Date.now() - started;
  console.log(`built ${routes.length} pages + assets in ${ms}ms → dist/`);
  routes.forEach((r) => console.log(`  ${r}`));
}

function robots() {
  return `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;
}

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${site.url}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.6'}</priority>
  </url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

/** Long-lived caching for fingerprint-free assets, revalidation for HTML. */
function headers() {
  return `/assets/*
  Cache-Control: public, max-age=604800, stale-while-revalidate=86400
  X-Content-Type-Options: nosniff

/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: geolocation=(), microphone=(), camera=()
`;
}

function notFound() {
  return layout({
    title: `Page not found — ${site.name}`,
    description: 'The page you were looking for could not be found.',
    path: '/404',
    bodyClass: 'page-404',
    body: `
  <section class="section section--deep" style="min-height:52vh;display:grid;place-items:center">
    <div class="wrap wrap--narrow u-center">
      <p class="eyebrow">Error 404</p>
      <h1 class="section__title section__title--light">That one got away</h1>
      <p class="lead">The page you were looking for isn’t here. Head back to the home page, or give Mal a call on <a href="${site.phoneHref}">${site.phone}</a>.</p>
      <p style="margin-top:28px"><a class="btn btn--lg" href="/">Back To Home</a></p>
    </div>
  </section>`,
  });
}

await build();
