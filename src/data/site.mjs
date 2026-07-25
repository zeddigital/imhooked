/**
 * Global site data: brand, contact details, navigation and link routing.
 *
 * LINK ROUTING
 * ------------
 * Only the pages captured in the source material (see reference/scrape) are
 * reproduced in this build: the home page and the nine blog category archives.
 * Every other destination in the original navigation is routed to the live
 * origin with `origin()` so that nothing in the review build dead-ends.
 * Swap `ORIGIN` for a local route once those pages are reproduced.
 */

export const ORIGIN = 'https://imhookedfishingcharters.com.au';

/** Link to a page that has not been reproduced yet (falls back to the origin). */
export const origin = (path = '/') => `${ORIGIN}${path}`;

/**
 * Media still served from the origin. The scrape captured lazy-loading
 * placeholders instead of binary files and the origin is not reachable from
 * the build environment, so photography is referenced at its original URL.
 * Point `MEDIA` at `/assets/img` after the library has been migrated locally.
 */
export const MEDIA = `${ORIGIN}/wp-content/uploads`;
export const media = (path) => `${MEDIA}/${path}`;

export const site = {
  name: "I'm Hooked Fishing Charters",
  shortName: "I'm Hooked",
  tagline: 'Fun, friendly fishing charters for individuals or groups',
  description:
    'Fishing Charters along the Mornington Peninsula including Port Phillip Bay, Western Port Bay and Bass Strait. Snapper, Whiting & Tuna Charters.',
  locale: 'en-AU',
  language: 'en_AU',
  // Absolute URLs (canonical, Open Graph, sitemap) need the deployment host.
  // Set SITE_URL at build time; the fallback is the default workers.dev name.
  url: (process.env.SITE_URL || 'https://imhooked-fishing-charters.workers.dev').replace(/\/$/, ''),
  operator: 'Malcolm May',
  phone: '0418 769 384',
  phoneHref: 'tel:+61418769384',
  areaServed: [
    'Port Phillip Bay',
    'Western Port Bay',
    'Bass Strait',
    'Mornington Peninsula',
    'Melbourne',
  ],
  social: {
    facebook: 'https://www.facebook.com/imhookedfishingcharter/',
    googleReviews: 'https://g.page/r/CZflgfbW6XLfEB4/review',
  },
  announcement: {
    text: 'Offshore fishing charters, new specials out now!',
    href: origin('/fishing-charter-specials/'),
  },
  cart: {
    label: '0 Items',
    href: origin('/cart/'),
  },
};

/** Primary navigation, mirroring the header of the original site. */
export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'Charters',
    href: origin('/fishing-charter-bookings/'),
    children: [
      { label: 'Charter Bookings', href: origin('/fishing-charter-bookings/') },
      { label: 'Snapper Charters', href: origin('/snapper-fishing-charters/') },
      { label: 'Offshore Charters', href: origin('/offshore-fishing/') },
      { label: 'Port Phillip Bay', href: origin('/fishing-charter-port-phillip-bay/') },
      { label: 'Western Port Bay', href: origin('/fishing-charter-western-port-bay/') },
      { label: 'The Boat', href: origin('/the-fishing-charters-victoria-boat/') },
      { label: 'Specials', href: origin('/fishing-charter-specials/') },
      { label: 'Charter FAQ', href: origin('/fishing-charter-faq/') },
    ],
  },
  {
    label: 'Gallery',
    href: origin('/gallery/'),
    children: [
      { label: 'Photo Gallery', href: origin('/gallery/') },
      { label: 'Catches On Video', href: '/#video' },
    ],
  },
  {
    label: 'Fishing Tips',
    href: origin('/how-to-catch-snapper/'),
    children: [
      { label: 'How To Catch Snapper', href: origin('/how-to-catch-snapper/') },
      { label: 'How To Catch Squid', href: origin('/how-to-catch-squid/') },
      { label: 'How To Catch Whiting', href: origin('/how-to-catch-whiting/') },
      { label: 'How To Catch Kingfish', href: origin('/how-to-catch-kingfish/') },
      { label: 'How To Catch Tuna', href: origin('/how-to-catch-tuna/') },
      { label: 'How To Catch Gummy Sharks', href: origin('/how-to-catch-gummy-sharks/') },
      { label: 'Ultimate Shark Fishing Guide', href: origin('/ultimate-shark-fishing-guide/') },
      { label: 'Best Time To Go Fishing', href: origin('/best-time-to-go-fishing/') },
      { label: 'Fishing Season Melbourne', href: origin('/fishing-season-melbourne/') },
    ],
  },
  // The original header links to a Contact page that was not part of the
  // captured material, so it resolves to the contact block in the footer.
  { label: 'Contact', href: '/#contact' },
];

/** Footer link groups. */
export const footerNav = [
  {
    title: 'Fishing Charters',
    links: [
      { label: 'Charter Bookings', href: origin('/fishing-charter-bookings/') },
      { label: 'Snapper Charters', href: origin('/snapper-fishing-charters/') },
      { label: 'Offshore Charters', href: origin('/offshore-fishing/') },
      { label: 'Port Phillip Bay', href: origin('/fishing-charter-port-phillip-bay/') },
      { label: 'Western Port Bay', href: origin('/fishing-charter-western-port-bay/') },
      { label: 'Charter Specials', href: origin('/fishing-charter-specials/') },
    ],
  },
  {
    title: 'Fishing Tips',
    links: [
      { label: 'How To Catch Snapper', href: origin('/how-to-catch-snapper/') },
      { label: 'How To Catch Squid', href: origin('/how-to-catch-squid/') },
      { label: 'How To Catch Whiting', href: origin('/how-to-catch-whiting/') },
      { label: 'How To Catch Kingfish', href: origin('/how-to-catch-kingfish/') },
      { label: 'How To Catch Tuna', href: origin('/how-to-catch-tuna/') },
      { label: 'Best Time To Go Fishing', href: origin('/best-time-to-go-fishing/') },
    ],
  },
];
