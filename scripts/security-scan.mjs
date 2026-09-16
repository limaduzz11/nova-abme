import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const ignoredDirectories = new Set(['.git', 'node_modules', 'dist', '.astro', '.wrangler']);
const secretPatterns = [
  /-----BEGIN (?:RSA|OPENSSH|EC|DSA|PRIVATE) KEY-----/i,
  /(?:api[_-]?key|access[_-]?token|client[_-]?secret|password|passwd|secret)\s*[:=]\s*["'`][^"'`\n]{8,}/i,
  /\bauthorization\s*[:=]\s*["'`]bearer\s+[a-z0-9._-]{20,}/i,
];
const environmentFiles = /(^|\/)\.env(?:\.|$)/;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
}

const findings = [];
const files = await walk(root);
for (const file of files) {
  const display = relative(root, file);
  if (environmentFiles.test(display) && !display.endsWith('.env.example') && !display.endsWith('.env.template')) {
    findings.push(`${display}: environment file`);
    continue;
  }

  let content;
  try {
    content = await readFile(file, 'utf8');
  } catch {
    continue;
  }
  for (const pattern of secretPatterns) {
    if (pattern.test(content)) findings.push(`${display}: possible secret pattern`);
  }
}

if (findings.length) {
  console.error('Security scan blocked publication candidates:');
  findings.forEach((finding) => console.error(`- ${finding}`));
  process.exitCode = 1;
} else {
  console.log(`Security scan passed: ${files.length} repository files inspected; no secret pattern found.`);
}
