import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.e9ca5672.js","_app/immutable/chunks/scheduler.9341ea61.js","_app/immutable/chunks/index.66f07722.js","_app/immutable/chunks/MountainList.5ab237f5.js","_app/immutable/chunks/await_block.0d1876eb.js","_app/immutable/chunks/header.8449f224.js","_app/immutable/chunks/index.9eb50c3c.js","_app/immutable/chunks/transitions.c6f22e03.js","_app/immutable/chunks/results_page.b6730eb4.js","_app/immutable/chunks/navigation.d0bc707d.js","_app/immutable/chunks/singletons.55805241.js"];
export const stylesheets = ["_app/immutable/assets/3.010ea0c0.css","_app/immutable/assets/MountainList.376c617c.css","_app/immutable/assets/results_page.84d6b202.css"];
export const fonts = [];
