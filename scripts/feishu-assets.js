// Node 18+
// 用法：node scripts/feishu-assets.js src/content/posts
//       node scripts/feishu-assets.js src/content/activities
// 二次处理：把 .md frontmatter 里引用的远程图片下载到 public/uploads/ 并回写为本地路径
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

/**
 * 解析 .md 文件的 frontmatter 区域和 body
 * @returns {{ raw: string, frontmatterStart: number, frontmatterEnd: number, body: string }}
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;
  return {
    fmText: match[1],
    fmStart: 0,
    fmEnd: match[0].length,
    body: content.slice(match[0].length),
  };
}

/**
 * 替换 frontmatter 文本中某个 key 的值（仅处理单行 key: "value" 形式）
 */
function replaceFmValue(fmText, key, oldVal, newVal) {
  return fmText.split(oldVal).join(newVal);
}

async function processMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const parsed = parseFrontmatter(content);
  if (!parsed) return false;

  let { fmText, body } = parsed;
  let changed = false;

  // 匹配 coverUrl 和 authorAvatarUrl 中的 http(s) URL
  const urlFields = ['coverUrl', 'authorAvatarUrl'];
  for (const field of urlFields) {
    const re = new RegExp(`^${field}:\\s*"(https?://[^"]+)"`, 'm');
    const m = fmText.match(re);
    if (!m) continue;
    const remoteUrl = m[1];
    try {
      const localPath = await download(remoteUrl, ASSET_DIR);
      fmText = replaceFmValue(fmText, remoteUrl, localPath);
      changed = true;
      console.log(`  ${field}: ${remoteUrl} → ${localPath}`);
    } catch (e) {
      console.warn(`  ${field} download failed: ${remoteUrl}`, e.message);
    }
  }

  // 替换 body 中的远程图片 ![alt](http...)
  const imgRe = /!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g;
  let bodyMatch;
  while ((bodyMatch = imgRe.exec(body)) !== null) {
    const remoteUrl = bodyMatch[2];
    try {
      const localPath = await download(remoteUrl, ASSET_DIR);
      body = body.split(remoteUrl).join(localPath);
      changed = true;
      console.log(`  body img: ${remoteUrl} → ${localPath}`);
    } catch (e) {
      console.warn(`  body img download failed: ${remoteUrl}`, e.message);
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, `---\n${fmText}\n---\n${body}`, 'utf-8');
  }
  return changed;
}

async function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  if (files.length === 0) {
    console.log(`No .md files found in ${dirPath}`);
    return;
  }

  let count = 0;
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    console.log(`Processing ${file}...`);
    const updated = await processMarkdownFile(filePath);
    if (updated) count++;
  }
  console.log(`✅ Assets localized in ${count}/${files.length} files → ${dirPath}`);
}

const target = process.argv[2] || 'src/content/posts';
processDirectory(target).catch((e) => { console.error(e); process.exit(1); });
