// 健康检查端点。在纯静态模式（output: 'static'）下，此端点为构建期预渲染产物，
// 仅用于验证构建成功（dist/api/health.json 存在即表示构建正常），不具备运行时动态响应能力。
export const GET = () => new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });