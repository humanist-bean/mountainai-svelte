import * as server from '../entries/pages/dashboard/_uid_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_uid_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/[uid]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.ce87c0a0.js","_app/immutable/chunks/scheduler.9341ea61.js","_app/immutable/chunks/index.66f07722.js","_app/immutable/chunks/header.8449f224.js","_app/immutable/chunks/index.9eb50c3c.js","_app/immutable/chunks/await_block.0d1876eb.js","_app/immutable/chunks/navigation.d88271c3.js","_app/immutable/chunks/singletons.b20a34aa.js"];
export const stylesheets = ["_app/immutable/assets/5.c0ae499b.css"];
export const fonts = [];
