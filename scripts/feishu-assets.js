// Node 18+
// 用法：node scripts/feishu-assets.js public/feeds/posts.json
// 二次处理：把 JSON 里引用的图片下载到 public/uploads/ 并回写 JSON（路径改成本地）
import fs from 'node:fs';
import path from 'node:path';

const ASSET_DIR = 'public/uploads';

async function download(url, destDir) {
  const u = new URL(url);
  const base = path.basename(u.pathname).split('?')[0] || `asset-${Date.now()}`;
  const file = path.join(destDir, base);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(file, buf);
  return file.replace(/^public\//, '/');
}

async function rewriteHtmlImages(html) {
  if (!html) return html;
  // 占位：保留原 src。需要“下载并替换正文图片”时，再解析 src 列表逐一下载并替换。
  return html;
}

async function processFile(jsonPath) {
  const raw = fs.readFileSync(jsonPath, 'utf-8');
  const arr = JSON.parse(raw);
  for (const item of arr) {
    if (item.coverUrl?.startsWith('http')) {
      try { item.coverUrl = await download(item.coverUrl, ASSET_DIR); } catch(e) { console.warn('cover fail', e.message); }
    }
    if (item.authorAvatarUrl?.startsWith('http')) {
      try { item.authorAvatarUrl = await download(item.authorAvatarUrl, ASSET_DIR); } catch(e) { console.warn('avatar fail', e.message); }
    }
    if (item.contentHtml) {
      item.contentHtml = await rewriteHtmlImages(item.contentHtml);
    }
  }
  fs.writeFileSync(jsonPath, JSON.stringify(arr, null, 2), 'utf-8');
  console.log(`✅ Assets localized & JSON updated → ${jsonPath}`);
}

const target = process.argv[2] || 'public/feeds/posts.json';
processFile(target).catch((e)=>{ console.error(e); process.exit(1); });
