import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

const SRC_ROOT = process.argv[2]
  ? path.resolve(process.argv[2])
  : (() => { throw new Error('Usage: node scripts/import-archive-classify.mjs <path-to-avantcontra-site>'); })();
const DST_ROOT = path.join(PROJECT_ROOT, 'src', 'content');

const INCLUDE_DIRS = ['comfyui', 'coding-druid', 'natureofcode-remix', 'interactive-media'];

function walk(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function extract(re, s) {
  const m = s.match(re);
  return m ? m[1].trim() : '';
}

function stripTags(s) {
  return s
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/[^a-z0-9\-\.]+/g, '-')
    .replace(/\.+/g, '-')
    .replace(/\-+/g, '-')
    .replace(/^\-+|\-+$/g, '');
}

function yamlScalar(v) {
  if (v == null || v === '') return '""';
  return JSON.stringify(String(v));
}

function inferDomains(dir, slug) {
  if (dir === 'comfyui') return ['ai-image-generation', 'workflow-automation'];
  if (dir === 'interactive-media') return ['interactive-media', 'audio-computation'];
  if (slug.includes('fourier')) return ['computational-basics', 'signal-processing'];
  if (slug.includes('trig') || slug.startsWith('noc-')) return ['computational-basics', 'visual-computation'];
  return ['creative-coding', 'visual-computation'];
}

function inferTools(slug, title) {
  const t = [];
  const s = `${slug} ${title}`.toLowerCase();
  if (s.includes('blender')) t.push('blender');
  if (s.includes('maxmsp') || s.includes('max/msp') || s.includes('max msp')) t.push('maxmsp');
  if (s.includes('puredata') || s.includes('pure-data') || s.includes('pure data')) t.push('puredata');
  if (s.includes('react') || s.includes('javascript') || s.includes('js')) t.push('javascript');
  if (s.includes('python')) t.push('python');
  if (s.includes('unity')) t.push('unity');
  if (s.includes('comfyui')) t.push('comfyui');
  if (s.includes('sverchok')) t.push('sverchok');
  return [...new Set(t)];
}

function inferRelatedTerms(slug, title) {
  const out = [];
  const s = `${slug} ${title}`.toLowerCase();
  if (s.includes('noc') || s.includes('nature of code')) out.push('nature-of-code');
  if (s.includes('vector')) out.push('vector-math');
  if (s.includes('fourier')) out.push('fourier-series');
  if (s.includes('trig') || s.includes('sine')) out.push('trigonometric-functions');
  if (s.includes('comfyui')) out.push('comfyui');
  if (s.includes('workflow')) out.push('workflow');
  if (s.includes('maxmsp')) out.push('maxmsp');
  if (s.includes('blender')) out.push('blender');
  if (s.includes('python')) out.push('python');
  if (s.includes('react') || s.includes('javascript')) out.push('javascript');
  if (s.includes('unity')) out.push('unity');
  return [...new Set(out)];
}

function inferSeries(dir, slug) {
  if (dir === 'comfyui') {
    const m = slug.match(/comfyui-(\d+)/);
    return { id: 'comfyui-notes', order: m ? Number(m[1]) : 0 };
  }
  if (dir === 'natureofcode-remix') {
    const m = slug.match(/noc-(\d+)[.-](\d+)/);
    const order = m ? Number(m[1]) * 10 + Number(m[2]) : 0;
    return { id: 'nature-of-code-remix', order };
  }
  if (dir === 'coding-druid') {
    const orderMap = {
      'math-trig-sine-maxmsp': 1,
      'math-trig-sine-js': 2,
      'math-trig-sine-python': 3,
      'math-trig-sine-unity': 4,
      'math-fourier-series-react': 5,
      'math-fourier-series-unity': 6,
      'math-fourier-series-blender': 7,
      'math-fourier-series-blender-3d': 8,
    };
    return { id: 'coding-druid-math', order: orderMap[slug] ?? 0 };
  }
  if (dir === 'interactive-media') {
    return { id: 'interactive-media-notes', order: 1 };
  }
  return { id: 'archive-notes', order: 0 };
}

function inferDifficulty(slug, title) {
  const s = `${slug} ${title}`.toLowerCase();
  if (s.includes('install') || s.includes('安装') || s.includes('入门')) return 'beginner';
  if (s.includes('workflow') || s.includes('基础')) return 'intermediate';
  return 'intermediate';
}

function normalizeBody(bodyHtml, relDir) {
  let body = bodyHtml;
  body = body.replace(/<header>[\s\S]*?<\/header>/i, '');
  body = body.replace(/<footer[\s\S]*$/i, '');
  body = body.replace(/<a[^>]*class="hash-link"[^>]*>[\s\S]*?<\/a>/gi, '');

  // normalize relative urls to absolute historic site links
  body = body.replace(/(href|src)="\.\.\/(.*?)"/g, (_m, attr, p1) => `${attr}="https://avantcontra.github.io/${p1}"`);
  body = body.replace(/(href|src)="(?!https?:|data:|#)([^"]+)"/g, (_m, attr, p1) => {
    const base = relDir ? `${relDir}/` : '';
    return `${attr}="https://avantcontra.github.io/${base}${p1}"`;
  });

  return body.trim();
}

function buildFrontmatter(meta) {
  const {
    id,
    conceptId,
    type,
    slug,
    title,
    lang,
    domains,
    series,
    relatedTerms,
    tags,
    status,
    created,
    updated,
    version,
    aliases,
    summary,
    difficulty,
    tools,
    coverUrl,
    author,
    publishedAt,
    docUrl,
  } = meta;

  const lines = [
    '---',
    `id: ${yamlScalar(id)}`,
    `concept_id: ${yamlScalar(conceptId)}`,
    `type: ${yamlScalar(type)}`,
    `slug: ${yamlScalar(slug)}`,
    `title: ${yamlScalar(title)}`,
    `lang: ${yamlScalar(lang)}`,
    '',
    'domains:',
    ...domains.map((d) => `  - ${yamlScalar(d)}`),
    '',
    'series:',
    `  id: ${yamlScalar(series.id)}`,
    `  order: ${series.order}`,
    '',
    'related_terms:',
    ...relatedTerms.map((t) => `  - ${yamlScalar(t)}`),
    '',
    'tags:',
    ...tags.map((t) => `  - ${yamlScalar(t)}`),
    '',
    `status: ${yamlScalar(status)}`,
    `created: ${yamlScalar(created)}`,
    `updated: ${yamlScalar(updated)}`,
    `version: ${version}`,
    '',
    'aliases:',
    ...aliases.map((a) => `  - ${yamlScalar(a)}`),
    '',
    `summary: ${yamlScalar(summary)}`,
    `difficulty: ${yamlScalar(difficulty)}`,
    '',
    'tools:',
    ...(tools.length ? tools.map((t) => `  - ${yamlScalar(t)}`) : ['  - ""']),
    '',
    // compatibility fields used by current site templates
    `coverUrl: ${yamlScalar(coverUrl)}`,
    `author: ${yamlScalar(author)}`,
    `publishedAt: ${yamlScalar(publishedAt)}`,
    `docUrl: ${yamlScalar(docUrl)}`,
    '---',
    '',
  ];

  return lines.join('\n');
}

const files = walk(SRC_ROOT)
  .filter((f) => f.endsWith('.html'))
  .filter((f) => INCLUDE_DIRS.some((d) => f.includes(`/${d}/`)))
  .filter((f) => !f.includes('/category/'))
  .filter((f) => !f.endsWith('/index.html'));

let imported = 0;
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(SRC_ROOT, file).replace(/\\/g, '/');
  const relDir = path.dirname(rel).replace(/\\/g, '/');
  const topDir = rel.split('/')[0];
  const base = path.basename(file, '.html');
  const slug = slugify(base);

  const h1 = stripTags(extract(/<h1[^>]*>([\s\S]*?)<\/h1>/i, html));
  const titleMeta = stripTags(extract(/<title[^>]*>([\s\S]*?)<\/title>/i, html)).replace(/\s*\|\s*实验编程\s*$/u, '').trim();
  const title = h1 || titleMeta || slug;

  const summary = stripTags(extract(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i, html)) || `Archive import from ${rel}`;

  const updated = extract(/<time datetime="([0-9\-T:.Z]+)"/i, html).slice(0, 10) || '2023-01-01';
  const created = updated;

  const contentBlock = extract(/<div class="theme-doc-markdown markdown">([\s\S]*?)<\/div><footer class="theme-doc-footer/i, html);
  const bodyHtml = normalizeBody(contentBlock || `<p>Archive source: ${rel}</p>`, relDir);

  const coverUrl = extract(/<img[^>]*src="([^"]+)"/i, bodyHtml) || '';
  const docUrl = extract(/<meta[^>]*property="og:url"[^>]*content="([^"]+)"/i, html) || `https://avantcontra.github.io/${rel.replace(/\.html$/, '')}`;

  const type = topDir === 'interactive-media' ? 'project' : 'tutorial';
  const collection = type === 'project' ? 'projects' : 'tutorials';

  const domains = inferDomains(topDir, slug);
  const series = inferSeries(topDir, slug);
  const tools = inferTools(slug, title);
  const relatedTerms = inferRelatedTerms(slug, title);
  const tags = [...new Set([...tools, ...relatedTerms])];

  const conceptId = slug;
  const id = `${type}-${slug}-zh`;
  const difficulty = inferDifficulty(slug, title);

  const frontmatter = buildFrontmatter({
    id,
    conceptId,
    type,
    slug,
    title,
    lang: 'zh',
    domains,
    series,
    relatedTerms,
    tags,
    status: 'canonical',
    created,
    updated,
    version: 1,
    aliases: [title],
    summary,
    difficulty,
    tools,
    coverUrl,
    author: 'Contra',
    publishedAt: updated,
    docUrl,
  });

  const outDir = path.join(DST_ROOT, collection, 'zh');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `${slug}.md`);

  const md = `${frontmatter}${bodyHtml}\n`;
  fs.writeFileSync(outFile, md, 'utf8');
  imported += 1;
}

console.log(`Imported ${imported} archive pages.`);
