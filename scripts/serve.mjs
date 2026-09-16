import { createReadStream } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../dist', import.meta.url)));
const host = '127.0.0.1';
const port = Number(process.env.PORT || 4322);
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};
const securityHeaders = Object.fromEntries(
  (await readFile(join(root, '_headers'), 'utf8'))
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && line !== '/*')
    .map((line) => {
      const separator = line.indexOf(':');
      return [line.slice(0, separator).trim(), line.slice(separator + 1).trim()];
    }),
);

function safePath(requestPath) {
  const decoded = decodeURIComponent(requestPath.split('?')[0]);
  const candidate = resolve(root, `.${normalize(decoded)}`);
  return relative(root, candidate).startsWith('..') ? null : candidate;
}

async function resolveFile(requestPath) {
  const candidate = safePath(requestPath);
  if (!candidate) return null;
  const preferred = requestPath.endsWith('/') ? join(candidate, 'index.html') : candidate;
  try {
    const info = await stat(preferred);
    if (info.isFile()) return preferred;
  } catch {
    // Fall through to the custom static 404 page.
  }
  return null;
}

const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end();
    return;
  }

  const requestPath = new URL(request.url || '/', `http://${host}:${port}`).pathname;
  const file = (await resolveFile(requestPath)) || join(root, '404.html');
  const type = contentTypes[extname(file)] || 'application/octet-stream';
  const status = file.endsWith('404.html') && requestPath !== '/404.html' ? 404 : 200;
  const info = await stat(file);

  response.writeHead(status, {
    ...securityHeaders,
    'Content-Length': info.size,
    'Content-Type': type,
    'Cache-Control': 'no-cache',
  });
  if (request.method === 'HEAD') response.end();
  else createReadStream(file).pipe(response);
});

server.listen(port, host);
