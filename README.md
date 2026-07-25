# I'm Hooked Fishing Charters — static reproduction

A hand-built, dependency-free static reproduction of
[imhookedfishingcharters.com.au](https://imhookedfishingcharters.com.au/), rebuilt from the
crawl data in [`reference/scrape`](reference/scrape) and deployed to Cloudflare for review.

The original is a WordPress/Divi site. This build reproduces its content, structure and visual
language as a static site: one hand-written stylesheet in place of Divi's, inline SVG in place of
icon fonts, and one small vanilla script in place of jQuery and the third-party widgets.

---

## Quick start

```bash
npm install          # only dev dependency is the Nunito Sans font package
npm run build        # generates ./dist
npm run serve        # preview at http://localhost:8788
```

## Deploying to Cloudflare

The site is a static-asset Worker (`wrangler.jsonc`) — no server code, served from the edge.

```bash
export CLOUDFLARE_API_TOKEN=…    # needs "Workers Scripts: Edit"
export CLOUDFLARE_ACCOUNT_ID=…
npm run deploy                   # production
npm run preview                  # versioned preview URL, no traffic shift
```

`.github/workflows/deploy.yml` does the same on push to `main`, using the repository secrets
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. Set the repository variable `SITE_URL` to the
final hostname so canonical URLs, Open Graph tags and `sitemap.xml` are absolute and correct.
Alternatively, connect the repo in the Cloudflare dashboard (Workers &rarr; Builds) with build
command `npm run build` and output directory `dist`.

---

## What is reproduced

| Route | Source |
| --- | --- |
| `/` | `imhookedfishingcharters.com.au_.json` (full home page) |
| `/category/best-time-to-go-fishing/` … `/category/whiting/` | the nine captured category archives |
| `/404.html` | new — Cloudflare serves it for unknown paths |

Every heading, paragraph, price, season note, button label, anchor id (`#snapper`, `#mixed`,
`#calamari`, `#whiting`, `#kingfish`, `#tuna`, `#sharks`), image `alt`/`title` attribute and all
nine Google reviews are transcribed verbatim from the crawl. Section order matches the original
Divi layout, including the image/text alternation down the charter list and the two-pairs-per-row
arrangement of the fishing-ground blocks.

Content lives in `src/data/`, templates in `src/templates/` and `src/pages/`, and `build.mjs`
writes `dist/`. Nothing else is involved — no bundler, no framework.

## Where the reproduction had to make decisions

The crawl captured page bodies only, so a few things were rebuilt rather than copied. They are
listed here so a reviewer knows exactly what to check against the original.

**Header and footer.** Divi renders these from a theme-builder template that the crawl did not
include. The header is rebuilt from the page screenshot: red announcement bar, cart indicator,
logo, `HOME / CHARTERS / GALLERY / FISHING TIPS / CONTACT` and the phone number `0418 769 384`.
Dropdown contents are assembled from URLs that appear in the crawled pages. The footer is new —
it uses only facts present in the source material (brand blurb, phone, Facebook page, Google
reviews link, areas fished).

**`CONTACT` in the navigation** points at the footer contact block (`/#contact`), because the
original contact page was not part of the capture and its URL is unknown.

**Photography** is still referenced from the origin (`MEDIA` in `src/data/site.mjs`). The crawl
recorded lazy-load placeholders rather than binary files, so the original URLs are used directly;
the review build renders with the real photos. Images that fail to load degrade to a styled
placeholder instead of a broken icon. Before this goes anywhere near production, download the
media library into `src/assets/img/` and repoint `MEDIA`.

**The hero background** has no recoverable URL (it is a Divi section background). It was
reconstructed from the captured page screenshot, with the baked-in headline painted out, and is
served locally at four widths. It is the one asset in the build that is not pixel-original — swap
`src/assets/img/hero-*.jpg` for the real file when it is available.

**Links to pages that were not captured** (bookings, gallery, products, how-to guides, cart, FAQ,
specials, the boat) resolve to the live origin via `origin()` so nothing dead-ends. Point them at
local routes as those pages are reproduced.

**The newsletter popup** reproduces Divi Bloom's behaviour — bottom slide-in after 45 seconds,
dismissal remembered for 5 days — but has no MailerLite integration. The panel says so in small
print rather than pretending to subscribe anyone.

**Category archives** additionally show the category name, breadcrumb, WordPress category
description and a sidebar. The original template rendered the posts alone with an empty sidebar
column; the description text is genuine (it is in each page's meta description).

**The reviews carousel** is rebuilt (3-up, 6-second autoplay, arrows, dots, swipe, "read more",
keyboard arrows) rather than embedding the Trustindex widget, so there is no third-party script.

## Deliberate improvements over the original

Kept small, and none of them change content:

- Self-hosted variable Nunito Sans — no Google Fonts request; one 31 KB woff2 for Latin.
- No jQuery, no icon font, no third-party widgets: the whole front end is 8 KB of CSS and
  3 KB of JS over the wire (37 KB / 10 KB uncompressed), and the home page is an 11 KB document.
- Responsive hero (4 widths), `width`/`height` on every image, lazy loading below the fold.
- Accessibility: skip link, landmarks, visible focus rings, `aria-expanded` menus, an
  `inert`/`aria-hidden` carousel, `prefers-reduced-motion` support, and a keyboard-operable
  mobile menu.
- `sitemap.xml`, `robots.txt`, canonical tags, Open Graph/Twitter cards, and JSON-LD
  (`LocalBusiness`, `WebSite`, `Service`, `CollectionPage`).
- Security and caching headers via `_headers`.

## Layout

```
build.mjs                 generator: routes → dist/
scripts/serve.mjs         zero-dependency preview server
src/data/                 site.mjs · home.mjs · blog.json · reviews.json
src/templates/            layout.mjs (head/header/footer) · icons.mjs
src/pages/                home.mjs · category.mjs
src/assets/               css/site.css · js/site.js · img/ · fonts/
reference/scrape/         the original upload, kept for provenance
wrangler.jsonc            Cloudflare static-asset Worker config
```
