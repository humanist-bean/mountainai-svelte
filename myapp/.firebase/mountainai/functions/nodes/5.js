import * as server from '../entries/pages/dashboard/_uid_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_uid_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/[uid]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.2d5f4810.js","_app/immutable/chunks/scheduler.9341ea61.js","_app/immutable/chunks/index.66f07722.js","_app/immutable/chunks/header.65a1ee7b.js","_app/immutable/chunks/index.9eb50c3c.js","_app/immutable/chunks/await_block.0d1876eb.js","_app/immutable/chunks/navigation.6f169f94.js","_app/immutable/chunks/singletons.1f96287d.js"];
export const stylesheets = ["_app/immutable/assets/5.98f6c698.css"];
export const fonts = [];
