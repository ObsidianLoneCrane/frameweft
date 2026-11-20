import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const files = [
  'README.md',
  'CONTRIBUTING.md',
  '.github/pull_request_template.md',
  ...readdirSync(join(root, 'docs'), { recursive: true })
    .filter((file) => file.endsWith('.md'))
    .map((file) => join('docs', file)),
];

const inlineLink = /!?\[[^\]\n]*\]\((?:<([^>\n]+)>|([^\s)]+))(?:[ \t]+["'][^"'\n]*["'])?\)/g;
const errors = [];

for (const file of files) {
  const path = join(root, file);
  const content = readFileSync(path, 'utf8');
  if (!content.endsWith('\n')) {
    errors.push(`${file}: missing final newline`);
  }

  for (const [index, line] of content.split(/\r?\n/).entries()) {
    const location = `${file}:${index + 1}`;
    if (/[ \t]+$/.test(line)) {
      errors.push(`${location}: trailing whitespace`);
    }

    for (const [, bracketed, bare] of line.matchAll(inlineLink)) {
      const destination = bracketed ?? bare;
      const target = destination.split(/[?#]/, 1)[0];
      if (!target || /^[a-z][a-z0-9+.-]*:/i.test(target) || destination.startsWith('//')) {
        continue;
      }

      const base = target.startsWith('/') ? root : dirname(path);
      if (!existsSync(resolve(base, decodeURIComponent(target.replace(/^\/+/, ''))))) {
        errors.push(`${location}: broken link to ${destination}`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${files.length} Markdown files.`);
}
