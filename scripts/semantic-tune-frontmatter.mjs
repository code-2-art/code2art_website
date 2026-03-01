import fs from 'node:fs';
import path from 'node:path';

const roots = [
  'src/content/tutorials/zh',
  'src/content/projects/zh',
];

function listMdFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => path.join(dir, f));
}

function getField(fm, key) {
  const re = new RegExp(`^${key}:\\s*"([^"]*)"`, 'm');
  const m = fm.match(re);
  return m ? m[1].trim() : '';
}

function getDateField(fm, key) {
  const re = new RegExp(`^${key}:\\s*"?([0-9]{4}-[0-9]{2}-[0-9]{2})"?`, 'm');
  const m = fm.match(re);
  return m ? m[1] : '';
}

function slugInfo(slug) {
  const s = slug.toLowerCase();

  if (s.startsWith('comfyui-')) {
    const m = s.match(/^comfyui-(\d+)/);
    const order = m ? Number(m[1]) : 0;
    return {
      type: 'tutorial',
      domains: ['ai-image-generation', 'workflow-automation'],
      series: { id: 'comfyui-learning-path', order },
      related_terms: ['comfyui', 'stable-diffusion', 'node-workflow'],
      tags: ['comfyui', 'stable-diffusion', 'workflow'],
      tools: ['comfyui', 'stable-diffusion'],
      difficulty: order === 1 ? 'beginner' : 'intermediate',
    };
  }

  if (s.startsWith('math-trig-sine-')) {
    const orderMap = {
      'math-trig-sine-maxmsp': 1,
      'math-trig-sine-js': 2,
      'math-trig-sine-python': 3,
      'math-trig-sine-unity': 4,
    };
    const tools = [];
    if (s.includes('maxmsp')) tools.push('maxmsp');
    if (s.endsWith('-js')) tools.push('javascript', 'react');
    if (s.endsWith('-python')) tools.push('python');
    if (s.endsWith('-unity')) tools.push('unity');
    return {
      type: 'tutorial',
      domains: ['computational-basics', 'visual-computation'],
      series: { id: 'coding-druid-math', order: orderMap[s] ?? 0 },
      related_terms: ['trigonometric-functions', 'sine-wave', 'mathematical-visualization'],
      tags: ['trigonometry', 'math-visualization', ...tools],
      tools,
      difficulty: 'intermediate',
    };
  }

  if (s.startsWith('math-fourier-series-')) {
    const orderMap = {
      'math-fourier-series-react': 5,
      'math-fourier-series-unity': 6,
      'math-fourier-series-blender': 7,
      'math-fourier-series-blender-3d': 8,
    };
    const tools = [];
    if (s.includes('react')) tools.push('javascript', 'react');
    if (s.includes('unity')) tools.push('unity');
    if (s.includes('blender')) tools.push('blender', 'python');
    return {
      type: 'tutorial',
      domains: ['computational-basics', 'signal-processing'],
      series: { id: 'coding-druid-math', order: orderMap[s] ?? 0 },
      related_terms: ['fourier-series', 'epicycles', 'mathematical-visualization'],
      tags: ['fourier-series', 'math-visualization', ...tools],
      tools,
      difficulty: 'intermediate',
    };
  }

  if (s.startsWith('noc-')) {
    const m = s.match(/^noc-(\d+)-(\d+)-/);
    const order = m ? Number(m[1]) * 10 + Number(m[2]) : 0;
    const tools = [];
    if (s.includes('blender')) tools.push('blender', 'sverchok');
    if (s.includes('maxmsp')) tools.push('maxmsp');
    return {
      type: 'tutorial',
      domains: ['computational-basics', 'visual-computation'],
      series: { id: 'nature-of-code-remix', order },
      related_terms: ['nature-of-code', 'vector-math', 'creative-coding'],
      tags: ['nature-of-code', 'vector-math', ...tools],
      tools,
      difficulty: 'intermediate',
    };
  }

  if (s === 'generative-art-intro') {
    return {
      type: 'tutorial',
      domains: ['generative-art', 'computational-creativity'],
      series: { id: 'generative-art-foundations', order: 1 },
      related_terms: ['generative-art', 'creative-coding', 'algorithmic-aesthetics'],
      tags: ['generative-art', 'creative-coding', 'beginner-guide'],
      tools: ['p5js', 'processing', 'touchdesigner', 'glsl'],
      difficulty: 'beginner',
    };
  }

  if (s === 'workshop-touchdesigner-2026') {
    return {
      type: 'project',
      domains: ['interactive-media', 'real-time-visuals'],
      series: { id: 'touchdesigner-workshops', order: 1 },
      related_terms: ['touchdesigner', 'vj', 'real-time-visuals'],
      tags: ['touchdesigner', 'workshop', 'live-visuals'],
      tools: ['touchdesigner', 'glsl', 'ndi'],
      difficulty: 'beginner',
    };
  }

  if (s === 'maxmsp-puredata-sdr') {
    return {
      type: 'project',
      domains: ['interactive-media', 'audio-computation'],
      series: { id: 'interactive-media-practice', order: 1 },
      related_terms: ['software-defined-radio', 'maxmsp', 'puredata'],
      tags: ['sdr', 'maxmsp', 'puredata', 'radio-art'],
      tools: ['maxmsp', 'puredata', 'rtl-sdr'],
      difficulty: 'intermediate',
    };
  }

  // Fallback (should be rare)
  return {
    type: 'tutorial',
    domains: ['creative-coding', 'visual-computation'],
    series: { id: 'archive-import', order: 0 },
    related_terms: ['creative-coding'],
    tags: ['creative-coding'],
    tools: ['javascript'],
    difficulty: 'intermediate',
  };
}

function q(v) {
  return JSON.stringify(String(v ?? ''));
}

function arrBlock(name, items) {
  const unique = [...new Set(items.filter(Boolean))];
  return [
    `${name}:`,
    ...unique.map((v) => `  - ${q(v)}`),
    '',
  ].join('\n');
}

function buildFrontmatter(meta) {
  const out = [];
  out.push('---');
  out.push(`id: ${q(meta.id)}`);
  out.push(`concept_id: ${q(meta.concept_id)}`);
  out.push(`type: ${q(meta.type)}`);
  out.push(`slug: ${q(meta.slug)}`);
  out.push(`title: ${q(meta.title)}`);
  out.push(`lang: ${q(meta.lang)}`);
  out.push('');
  out.push(arrBlock('domains', meta.domains));
  out.push('series:');
  out.push(`  id: ${q(meta.series.id)}`);
  out.push(`  order: ${meta.series.order}`);
  out.push('');
  out.push(arrBlock('related_terms', meta.related_terms));
  out.push(arrBlock('tags', meta.tags));
  out.push(`status: ${q(meta.status)}`);
  out.push(`created: ${q(meta.created)}`);
  out.push(`updated: ${q(meta.updated)}`);
  out.push(`version: ${meta.version}`);
  out.push('');
  out.push(arrBlock('aliases', meta.aliases));
  out.push(`summary: ${q(meta.summary)}`);
  out.push(`difficulty: ${q(meta.difficulty)}`);
  out.push('');
  out.push(arrBlock('tools', meta.tools));
  out.push(`coverUrl: ${q(meta.coverUrl)}`);
  out.push(`author: ${q(meta.author)}`);
  out.push(`publishedAt: ${q(meta.publishedAt)}`);
  if (meta.date) out.push(`date: ${q(meta.date)}`);
  out.push(`docUrl: ${q(meta.docUrl)}`);
  out.push('---');
  out.push('');
  return out.join('\n');
}

const files = roots.flatMap(listMdFiles).sort();
let updatedCount = 0;

for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) continue;
  const fm = m[1];
  const body = m[2];

  const slug = getField(fm, 'slug') || path.basename(file, '.md');
  const title = getField(fm, 'title') || slug;
  const summary = getField(fm, 'summary') || `Archive page for ${slug}.`;
  const coverUrl = getField(fm, 'coverUrl');
  const author = getField(fm, 'author') || 'Contra';
  const publishedAt = getDateField(fm, 'publishedAt') || getDateField(fm, 'date') || '2023-01-01';
  const date = getDateField(fm, 'date');
  const docUrl = getField(fm, 'docUrl') || '';
  const created = getDateField(fm, 'created') || publishedAt;
  const updated = getDateField(fm, 'updated') || publishedAt;

  const tuned = slugInfo(slug);

  const finalMeta = {
    id: `${tuned.type}-${slug}-zh`,
    concept_id: slug,
    type: tuned.type,
    slug,
    title,
    lang: 'zh',
    domains: tuned.domains,
    series: tuned.series,
    related_terms: tuned.related_terms,
    tags: tuned.tags,
    status: 'canonical',
    created,
    updated,
    version: 1,
    aliases: [title],
    summary,
    difficulty: tuned.difficulty,
    tools: tuned.tools,
    coverUrl,
    author,
    publishedAt,
    date: tuned.type === 'project' ? (date || publishedAt) : '',
    docUrl,
  };

  const out = buildFrontmatter(finalMeta) + body;
  fs.writeFileSync(file, out, 'utf8');
  updatedCount += 1;
}

console.log(`Semantic tuned ${updatedCount} files.`);
