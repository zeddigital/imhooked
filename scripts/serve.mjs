#!/usr/bin/env node
/**
 * Zero-dependency preview server for ./dist.
 * Mirrors Cloudflare's static-asset behaviour closely enough for review:
 * directory URLs resolve to index.html, unknown paths return 404.html.
 *
 *   node scripts/serve.mjs [port]
 */

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const PORT = Number(process.argv[2] || process.env.PORT || 8788);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
};

const resolve = async (urlPath) => {
  const clean = normalize(decodeURIComponent(urlPath.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
  let file = join(DIST, clean);
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    return file;
  } catch {
    // Try the directory form (/foo → /foo/index.html) before falling back.
    try {
      const alt = join(DIST, clean, 'index.html');
      await stat(alt);
      return alt;
    } catch {
      return null;
    }
  }
};

createServer(async (req, res) => {
  const file = (await resolve(req.url)) || join(DIST, '404.html');
  const status = file.endsWith('404.html') && req.url !== '/404.html' ? 404 : 200;
  try {
    const body = await readFile(file);
    res.writeHead(status, {
      'content-type': MIME[extname(file)] || 'application/octet-stream',
      'cache-control': 'no-store',
    });
    res.end(body);
  } catch {
    res.writeHead(500, { 'content-type': 'text/plain' });
    res.end('Build the site first: npm run build');
  }
}).listen(PORT, () => {
  console.log(`preview → http://localhost:${PORT}`);
});
