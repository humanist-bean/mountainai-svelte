import * as server from '../entries/pages/dashboard/_uid_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_uid_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/[uid]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.578bb3b0.js","_app/immutable/chunks/scheduler.88a1fd1b.js","_app/immutable/chunks/index.cc81a9b1.js","_app/immutable/chunks/index.0cec23fc.js"];
export const stylesheets = ["_app/immutable/assets/5.84cc8ab1.css"];
export const fonts = [];
