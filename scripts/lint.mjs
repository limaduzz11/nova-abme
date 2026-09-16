import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const roots = ['src', 'public', 'tests', 'docs'];
const extensions = new Set(['.astro', '.ts', '.mjs', '.css', '.md', '.svg', '.json', '.txt']);
const forbidden = [
  { pattern: /\bdebugger\b/, label: 'debugger statement' },
  { pattern: /\bconsole\.(?:log|debug|info)\s*\(/, label: 'debug console call' },
  { pattern: /\bon(?:click|load|error)\s*=/i, label: 'inline event handler' },
  { pattern: /\beval\s*\(/, label: 'eval call' },
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else if (extensions.has(entry.name.slice(entry.name.lastIndexOf('.')))) files.push(path);
  }
  return files;
}

const violations = [];
for (const rootName of roots) {
  const files = await walk(join(root, rootName));
  for (const file of files) {
    const content = await readFile(file, 'utf8');
    for (const rule of forbidden) {
      if (rule.pattern.test(content)) violations.push(`${relative(root, file)}: ${rule.label}`);
    }
  }
}

if (violations.length) {
  console.error('Lint failed:');
  violations.forEach((violation) => console.error(`- ${violation}`));
  process.exitCode = 1;
} else {
  console.log(`Lint passed: ${roots.join(', ')} checked.`);
}
