/**
 * Home page copy, transcribed verbatim from the captured source
 * (reference/scrape → imhookedfishingcharters.com.au_.json / .md).
 *
 * Section order, headings, body copy, button labels, destinations, anchor ids
 * and image alt/title attributes all mirror the original Divi layout.
 */

import { origin, media, site } from './site.mjs';

export const hero = {
  h1: 'Fishing Charter',
  h2: 'Fun, friendly fishing charters for individuals or groups',
  cta: { label: 'Book Now', href: origin('/fishing-charter-bookings/#bookings') },
};

export const about = {
  h2: 'Over 40 Years Of Fishing Experience To Help You',
  body: `Run by Mal, a qualified charter operator, who is passionate about fishing and brings a positive attitude to his charters. His customers describe the experience as <b>fun, f</b><strong>riendly and e</strong><strong>njoyable</strong>. Years of experience means Mal can bring you to the best fishing spots. He is happy to help beginner through to experienced anglers. (<a href="${site.social.googleReviews}" target="_blank" rel="noopener">see reviews</a>)`,
  h3: 'Take Me Straight To The Charters (Use buttons below)',
  buttons: [
    { label: 'Snapper Charters Oct - Dec', href: origin('/snapper-fishing-charters/') },
    { label: 'Offshore Charters - Tuna Shark Kingfish', href: origin('/offshore-fishing/') },
  ],
};

export const spots = {
  eyebrow: 'Victoria’s Best Fishing Spots!',
  h2: 'Fishing Charters',
  items: [
    { label: 'Port Phillip Bay', icon: 'waves' },
    { label: 'Western Port Bay', icon: 'fish' },
    { label: 'Bass straight', icon: 'anchor' },
  ],
  cta: { label: 'Specials', href: origin('/fishing-charter-specials/') },
};

export const intro = {
  h2: 'Melbourne Fishing Charters',
  body: `Our <a href="${origin('/fishing-charter-bookings/')}">fishing charters</a> target assorted species in Port Phillip Bay, Western Port Bay, Bass Strait fishing grounds. The local Melbourne fishing charters are typically 5 to 6 hours in length, whilst offshore charters in Bass Straight are typically 7- 8 hours in length. One of the unique differences with an I’m Hooked Fishing Charter is the fun that Mal brings to the trip. Mal is known for bringing a smile and making the trip and enjoyable experience. From the inexperienced angler through to the seasoned fisho, Mal’s local knowledge and experience are what can transform a day into a memorable experience. Want to see how much fun people have? View the gallery by clicking the button below.`,
  cta: { label: 'Gallery', href: origin('/gallery/') },
  image: {
    src: media('2020/01/new-snapper.jpg'),
    srcset: [
      `${media('2020/01/new-snapper.jpg')} 1224w`,
      `${media('2020/01/new-snapper-980x927.jpg')} 980w`,
      `${media('2020/01/new-snapper-480x454.jpg')} 480w`,
    ].join(', '),
    sizes: '(max-width: 480px) 480px, (max-width: 980px) 980px, 640px',
    width: 1224,
    height: 1158,
    alt: 'I’m Hooked Fishing Charters customers with a catch of snapper',
    title: 'new-snapper',
  },
};

/** The three fishing grounds, each with a map/photo and a description. */
export const grounds = [
  {
    heading: 'Fishing Charters Port Phillip Bay',
    href: origin('/fishing-charter-port-phillip-bay/'),
    body: `<a href="${origin('/fishing-charter-port-phillip-bay/')}"><strong>Port Philip Bay</strong></a>&nbsp;is Victoria’s largest body of water and the state’s most popular recreational&nbsp;fishing&nbsp;ground which has a reputation for turning on some great fishing for snapper, flathead, King George whiting, garfish and squid.`,
    image: {
      src: media('2020/10/port-phillip-bay-map.jpg'),
      width: 225,
      height: 155,
      alt: 'port phillip bay fishing charters',
      title: 'port-phillip-bay-map',
    },
  },
  {
    heading: 'Fishing Charters Western Port Bay',
    href: origin('/fishing-charter-western-port-bay/'),
    body: `<a href="${origin('/fishing-charter-western-port-bay/')}"><strong>Western Port Bay</strong></a> is a smaller bay than Port Phillip Bay on the other side of the Mornington Peninsula, featuring two large islands, French and Phillip. There are three main areas of fishing; the northern, eastern and western arms. It offers great fishing with whiting, squid and snapper with the occasional gummy shark.`,
    image: {
      src: media('2020/10/western-port-bay-map.jpg'),
      width: 225,
      height: 161,
      alt: 'western port bay fishing charters',
      title: 'western-port-bay-map',
    },
  },
  {
    heading: 'Fishing Charters Bass Straight',
    href: origin('/product/offshore-fishing-charter/'),
    body: `<a href="${origin('/product/offshore-fishing-charter/')}"><strong>Bass Strait</strong></a>, a channel separating Victoria from Tasmania&nbsp;has a maximum width of 240 km and its depth is 50–70 m and&nbsp;named in 1798 after surgeon-explorer&nbsp;George Bass. There is great fishing for Mako Sharks, Flathead, Snapper, Whiting and Gummy Sharks.`,
    image: {
      src: media('2020/10/bass-straight-LR.jpg'),
      width: 225,
      height: 152,
      alt: 'Bass Straight Fishing Charters',
      title: 'bass-straight-LR',
    },
    linkImage: false,
  },
];

export const boat = {
  body: `Still not convinced that I’m Hooked Fishing Charters is the best value fishing charter in Melbourne? Why not check out Mal’s new charter boat. It has heaps of room and is <strong>super comfortable.</strong> Click on the button below to see some pics. (And yeah, it’s got a toilet ;-))`,
  cta: { label: 'View The Fishing Charter Boat', href: origin('/the-fishing-charters-victoria-boat/') },
};

export const pricing = {
  h2: 'Fishing Charters',
  lead: `More options available on <a href="${origin('/fishing-charter-bookings/')}">Charters</a> page`,
  blocks: [
    {
      h2: 'Fishing Charters Mornington Peninsula',
      lines: [
        'Min. 5 people. Max 8 people.',
        '<strong>Snapper or Whiting Charters</strong>',
        'Up to 5hrs $200 PER Person',
        'Also available:',
      ],
    },
    {
      h2: 'Reel Fishing Adventures in Bass Straight',
      lines: [
        '<strong>Kingfish, Wrasse, Gummy Shark, Tuna Charters</strong>',
        'Up to 8hrs From $300 PER Person',
      ],
      note: '* See Offshore Fishing Charters OR Book the Boat',
    },
  ],
  image: {
    src: media('2026/07/fishing-charter-snapper.webp'),
    srcset: [
      `${media('2026/07/fishing-charter-snapper.webp')} 600w`,
      `${media('2026/07/fishing-charter-snapper-480x274.webp')} 480w`,
    ].join(', '),
    sizes: '(max-width: 480px) 480px, 600px',
    width: 600,
    height: 343,
    alt: 'Fishing charter showing a great catch of Snapper',
    title: 'fishing-charter-snapper',
  },
  h3: 'Fishing charters available in Port Philip &amp; Western Port Bays &amp; offshore.',
  body: 'Are you looking for a genuine fishing trip with an experienced guide? Grab some friends and make a booking at let Mal guide you to the hottest spots!',
};

export const reviewsSection = {
  h2: 'What Our Customers Say',
};

/** Charter offers — one row per species, alternating image/text like the original. */
export const charters = [
  {
    id: 'snapper',
    h2: 'Snapper Fishing Charters – Oct to Dec',
    body: `Season: August to April. Our Snapper dedicated season is <strong>October to December</strong>. The main snapper fishing season begins in August (offshore), or in September in the bays (Western Port and Port Phillip), but snapper can be caught in winter. Outside of the dedicated Snapper season, please use our mixed charter option below. For more info <a href="${origin('/how-to-catch-snapper/')}">read here</a>`,
    price: 'Prices start from $200 p.p.',
    buttons: [
      { label: 'Individual Bookings', href: origin('/product/snapper-fishing-charter/') },
      { label: 'Group Bookings', href: origin('/product/snapper-fishing-charter-book-boat/') },
    ],
    image: {
      src: media('2022/02/snapper-fishing-charter.jpg'),
      srcset: [
        `${media('2022/02/snapper-fishing-charter.jpg')} 400w`,
        `${media('2022/02/snapper-fishing-charter-300x188.jpg')} 300w`,
      ].join(', '),
      width: 400,
      height: 250,
      alt: 'Snapper Fishing Charter',
      title: 'snapper-fishing-charter',
    },
    mediaFirst: false,
  },
  {
    id: 'mixed',
    h2: 'Snapper, Whiting &amp; Calamari Fishing Charters',
    body: 'Season: All year. Mixed Fishing charters commence from <strong>January 1st through to 30th September. </strong>We fish according to which fish are biting at the time to try and make sure you bring home a good catch.',
    price: 'Prices start from $200 p.p.',
    buttons: [
      { label: 'Individual Bookings', href: origin('/product/snapper-whiting-squid-fishing-charter/') },
      { label: 'Group Bookings', href: origin('/product/snapper-whiting-squid-fishing-charter-book-boat/') },
    ],
    image: {
      src: media('2022/05/fishing-charter-snapper-whiting-calamari-photo.jpg'),
      srcset: [
        `${media('2022/05/fishing-charter-snapper-whiting-calamari-photo.jpg')} 400w`,
        `${media('2022/05/fishing-charter-snapper-whiting-calamari-photo-300x300.jpg')} 300w`,
      ].join(', '),
      width: 400,
      height: 400,
      alt: 'fishing charter melbourne snapper whiting calamari',
      title: 'fishing-charter-snapper-whiting-calamari-photo',
    },
    mediaFirst: true,
  },
  {
    id: 'calamari',
    h2: 'Squid Fishing Charters',
    body: `Season: All year. For more info <a href="${origin('/how-to-catch-squid/')}">read here</a>`,
    price: 'Prices start from $200 p.p.',
    buttons: [
      { label: 'Individual Bookings', href: origin('/product/snapper-whiting-squid-fishing-charter/') },
      { label: 'Group Bookings', href: origin('/product/snapper-whiting-squid-fishing-charter-book-boat/') },
    ],
    image: {
      src: media('2022/02/squid-fishing-charter.jpg'),
      srcset: [
        `${media('2022/02/squid-fishing-charter.jpg')} 400w`,
        `${media('2022/02/squid-fishing-charter-300x188.jpg')} 300w`,
      ].join(', '),
      width: 400,
      height: 250,
      alt: 'squid fishing charter',
      title: 'squid-fishing-charter',
    },
    mediaFirst: false,
  },
  {
    id: 'whiting',
    h2: 'Whiting Fishing Charters',
    body: `Season: Traditionally it is considered December to April. However, you can catch King George whiting all year round in our local waters within Western Port Bay and Port Phillip Bay. For more info <a href="${origin('/how-to-catch-whiting/')}">read here</a>`,
    price: 'Prices start from $200 p.p.',
    buttons: [
      { label: 'Individual Bookings', href: origin('/product/snapper-whiting-squid-fishing-charter/') },
      { label: 'Group Bookings', href: origin('/product/snapper-whiting-squid-fishing-charter-book-boat/') },
    ],
    image: {
      src: media('2022/05/fishing-charter-whiting.jpg'),
      srcset: [
        `${media('2022/05/fishing-charter-whiting.jpg')} 400w`,
        `${media('2022/05/fishing-charter-whiting-300x214.jpg')} 300w`,
      ].join(', '),
      width: 400,
      height: 285,
      alt: 'fishing charter melbourne whiting',
      title: 'fishing-charter-whiting',
    },
    mediaFirst: true,
  },
  {
    id: 'kingfish',
    h2: 'Kingfish Fishing Charters',
    body: `Season: January to April. The main kingfish fishing season begins in January either in or outside the heads on Port Phillip Bay and Westernport Bays. Kingfish Fishing charters commence from <strong>January 18th. </strong>For more info <a href="${origin('/how-to-catch-kingfish/')}">read here</a>`,
    price: 'Prices start from $2,400.',
    buttons: [
      { label: 'Group Bookings (8)', href: origin('/?post_type=product&p=5111') },
    ],
    image: {
      src: media('2022/02/kingfish-fishing-charter.jpg'),
      srcset: [
        `${media('2022/02/kingfish-fishing-charter.jpg')} 400w`,
        `${media('2022/02/kingfish-fishing-charter-300x188.jpg')} 300w`,
      ].join(', '),
      width: 400,
      height: 250,
      alt: 'kingfish fishing charter',
      title: 'kingfish-fishing-charter',
    },
    mediaFirst: false,
  },
  {
    id: 'tuna',
    h2: 'Tuna Fishing Charters',
    body: `Season: In Victoria, outside the heads of Port Phillip Bay, the season is February to September. Tuna Fishing charters commence from <strong>January 18th</strong>. For more info <a href="${origin('/how-to-catch-tuna/')}">read here</a>`,
    price: 'Prices start from $2,400.',
    buttons: [
      { label: 'Group Bookings (8)', href: origin('/product/offshore-fishing-charter-book-boat/') },
      { label: 'Individual Bookings (Min. 4)', href: origin('/product/offshore-fishing-charter/') },
    ],
    image: {
      src: media('2022/05/fishing-charter-bluefin-tuna.jpg'),
      srcset: [
        `${media('2022/05/fishing-charter-bluefin-tuna.jpg')} 400w`,
        `${media('2022/05/fishing-charter-bluefin-tuna-300x188.jpg')} 300w`,
      ].join(', '),
      width: 400,
      height: 250,
      alt: 'fishing charter melbourne bluefin tuna',
      title: 'fishing-charter-bluefin-tuna',
    },
    mediaFirst: true,
  },
  {
    id: 'sharks',
    h2: 'Shark Fishing Charters',
    body: `Season: All year. Shark Fishing charters commence from <strong>January 18th. </strong>For more info on how to catch gummy sharks <a href="${origin('/how-to-catch-gummy-sharks/')}">read here</a>`,
    price: 'Prices start from $2,400.',
    buttons: [
      { label: 'Group Bookings (8)', href: origin('/product/offshore-fishing-charter-book-boat/') },
    ],
    image: {
      src: media('2022/05/fishing-charter-shark.jpg'),
      srcset: [
        `${media('2022/05/fishing-charter-shark.jpg')} 400w`,
        `${media('2022/05/fishing-charter-shark-300x214.jpg')} 300w`,
      ].join(', '),
      width: 400,
      height: 285,
      alt: 'fishing charter melbourne shark',
      title: 'fishing-charter-shark',
    },
    mediaFirst: true,
  },
];

export const video = {
  h2: 'Exciting Catches Captured On Video',
  src: media('2023/05/Tuna-Fishing-Bass-Straight.mov'),
  poster: media('2023/05/tuna-catch-bass-straight-still.png'),
  cta: { label: 'Fishing Charter FAQ', href: origin('/fishing-charter-faq/') },
};

export const optin = {
  h2: 'Want discounts and fishing tips?',
  body: 'Want&nbsp;the latest fishing news and&nbsp;charter specials from I\'m Hooked Fishing Charters?',
  button: 'Get Tips &amp; Discounts',
  success: 'You have Successfully Subscribed!',
  // Original Divi Bloom settings: fires 45s after load, remembers for 5 days.
  delaySeconds: 45,
  cookieDays: 5,
};
