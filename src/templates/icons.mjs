/** Inline SVG icon set — keeps the build free of third-party icon requests. */

const svg = (body, { viewBox = '0 0 24 24', cls = '' } = {}) =>
  `<svg class="icon${cls ? ` ${cls}` : ''}" viewBox="${viewBox}" aria-hidden="true" focusable="false">${body}</svg>`;

const paths = {
  phone: `<path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1.1 1.1 0 0 1 1.1-.27c1.2.4 2.5.62 3.8.62.6 0 1.1.5 1.1 1.1V20a1.1 1.1 0 0 1-1.1 1.1A17.9 17.9 0 0 1 2.9 3.1C2.9 2.5 3.4 2 4 2h3.3c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.6.62 3.8.1.38 0 .8-.28 1.08L6.6 10.8Z" fill="currentColor"/>`,
  caret: `<path d="M6 9.5 12 15.5 18 9.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
  cart: `<path d="M3 4h2.2l2.5 11.2h9.9M8.6 19.2a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 0 0-2.6 0Zm7.2 0a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 0 0-2.6 0ZM6.4 7.6h14L18.7 15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
  spark: `<path d="M12 2.6 13.9 8l5.6.4-4.3 3.6 1.4 5.5L12 14.6l-4.6 2.9 1.4-5.5L4.5 8.4 10.1 8 12 2.6Z" fill="currentColor"/>`,
  arrowUp: `<path d="M12 5.5 12 19M12 5.5 6 11.5M12 5.5 18 11.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
  arrowRight: `<path d="M5 12h13M12 5.5 18.5 12 12 18.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
  arrowLeft: `<path d="M19 12H6M12 5.5 5.5 12 12 18.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
  close: `<path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>`,
  check: `<path d="M5 13l4.5 4.5L19 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`,
  pin: `<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/>`,
  user: `<circle cx="12" cy="8" r="3.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M4.8 20.4a7.6 7.6 0 0 1 14.4 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
  calendar: `<rect x="3.5" y="5.2" width="17" height="15.3" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.5 10h17M8 3.5v3.4M16 3.5v3.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
  play: `<path d="M8 5.4 19 12 8 18.6V5.4Z" fill="currentColor"/>`,
  fish: `<ellipse cx="13.6" cy="12" rx="8.1" ry="5.1" fill="currentColor"/><path d="M5.6 12 1.4 7.9v8.2L5.6 12Z" fill="currentColor"/>`,
  waves: `<path d="M2.5 8.5c2 0 2.6-1.6 4.8-1.6S10 8.5 12 8.5s2.6-1.6 4.8-1.6 1.7 1.6 4.7 1.6M2.5 13c2 0 2.6-1.6 4.8-1.6S10 13 12 13s2.6-1.6 4.8-1.6 1.7 1.6 4.7 1.6M2.5 17.5c2 0 2.6-1.6 4.8-1.6s2.7 1.6 4.7 1.6 2.6-1.6 4.8-1.6 1.7 1.6 4.7 1.6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
  anchor: `<circle cx="12" cy="4.6" r="2.1" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 6.7V21M7.6 10.2h8.8M3.4 14.2c0 4 3.9 6.8 8.6 6.8s8.6-2.8 8.6-6.8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
  facebook: `<path d="M13.5 21v-7.4h2.6l.4-3h-3V8.7c0-.9.3-1.5 1.6-1.5h1.6V4.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.1H7.5v3h2.9V21h3.1Z" fill="currentColor"/>`,
  google: `<path d="M21.6 12.2c0-.7-.06-1.3-.18-1.9H12v3.6h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.2Z" fill="#4285F4"/><path d="M12 22c2.7 0 4.96-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a5.9 5.9 0 0 1-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z" fill="#34A853"/><path d="M6.4 14a6 6 0 0 1 0-3.9V7.5H3.1a10 10 0 0 0 0 9L6.4 14Z" fill="#FBBC05"/><path d="M12 5.9c1.5 0 2.8.5 3.9 1.5l2.9-2.9A9.7 9.7 0 0 0 12 2 10 10 0 0 0 3.1 7.5l3.3 2.6A5.9 5.9 0 0 1 12 5.9Z" fill="#EA4335"/>`,
  star: `<path d="M12 2.6 15 8.9l6.9.9-5 4.9 1.2 6.9L12 18.3l-6.1 3.3L7 14.7l-5-4.9 6.9-.9L12 2.6Z" fill="currentColor"/>`,
  quote: `<path d="M9.6 6.4C6.5 7.8 4.8 10.4 4.8 14v3.6h5.5V11H7.7c.1-1.2.9-2.2 2.4-3l-.5-1.6Zm9.1 0c-3.1 1.4-4.8 4-4.8 7.6v3.6h5.5V11h-2.6c.1-1.2.9-2.2 2.4-3l-.5-1.6Z" fill="currentColor"/>`,
};

/** @param {keyof typeof paths} name */
export const icon = (name, cls = '') => {
  const body = paths[name];
  if (!body) throw new Error(`Unknown icon: ${name}`);
  return svg(body, { cls });
};

export const stars = (count = 5) =>
  `<span class="stars" role="img" aria-label="${count} out of 5 stars">${Array.from(
    { length: count },
    () => icon('star', 'stars__star')
  ).join('')}</span>`;
