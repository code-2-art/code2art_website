// scripts/feishu-doc-util.js
export const API_BASE = 'https://open.feishu.cn/open-apis';

export function parseDocLink(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    // 识别 /docx/{id} 或 /doc/{id}
    const mDocx = u.pathname.match(/\/docx\/([A-Za-z0-9]+)/);
    if (mDocx) return { type: 'docx', id: mDocx[1] };
    const mDoc = u.pathname.match(/\/doc\/([A-Za-z0-9]+)/);
    if (mDoc) return { type: 'doc', id: mDoc[1] };
    return null;
  } catch {
    return null;
  }
}

export async function getTenantAccessToken(appId, appSecret) {
  const res = await fetch(`${API_BASE}/auth/v3/tenant_access_token/internal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
  });
  if (!res.ok) throw new Error(`Auth failed: ${res.status}`);
  const data = await res.json();
  if (data.code !== 0) throw new Error(`Auth error: ${data.code} ${data.msg}`);
  return data.tenant_access_token;
}

/** 仅支持老版 doc → 直接返回 HTML；docx 暂无官方直出 HTML */
export async function fetchDocHtml({ docId, token }) {
  const res = await fetch(`${API_BASE}/doc/v2/${docId}/content`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`doc content failed: ${res.status}`);
  const data = await res.json();
  // 返回体在不同版本 SDK 下字段名略有差异，做多分支兜底
  return (
    data?.data?.content?.content ??
    data?.data?.content ??
    data?.content ??
    ''
  );
}
