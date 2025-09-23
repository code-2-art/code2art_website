//（可用来验证构建时能触达）
export const GET = () => new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });