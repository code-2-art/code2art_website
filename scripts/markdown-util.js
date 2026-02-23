// scripts/markdown-util.js — HTML→Markdown 转换 + frontmatter 拼接
import TurndownService from 'turndown';

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });

/**
 * HTML → Markdown
 * @param {string} html
 * @returns {string}
 */
export function htmlToMarkdown(html) {
  if (!html || typeof html !== 'string') return '';
  return td.turndown(html).trim();
}

/**
 * 简单 YAML 序列化（仅处理 string / string[] / undefined）
 * @param {Record<string, any>} obj
 * @returns {string}
 */
function serializeYaml(obj) {
  const lines = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      lines.push(`${key}:`);
      for (const item of value) {
        lines.push(`  - ${JSON.stringify(String(item))}`);
      }
    } else {
      lines.push(`${key}: ${JSON.stringify(String(value))}`);
    }
  }
  return lines.join('\n');
}

/**
 * 拼接 frontmatter + markdown body → 完整 .md 文件内容
 * @param {Record<string, any>} frontmatter
 * @param {string} body  markdown 正文
 * @returns {string}
 */
export function buildMarkdownFile(frontmatter, body) {
  const yaml = serializeYaml(frontmatter);
  return `---\n${yaml}\n---\n\n${body}\n`;
}
