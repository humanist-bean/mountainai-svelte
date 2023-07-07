import * as server from '../entries/pages/dashboard/_uid_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_uid_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/[uid]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.1220788b.js","_app/immutable/chunks/scheduler.ff9b50f9.js","_app/immutable/chunks/index.5fbdb1aa.js","_app/immutable/chunks/index.2527a6c0.js"];
export const stylesheets = [];
export const fonts = [];
