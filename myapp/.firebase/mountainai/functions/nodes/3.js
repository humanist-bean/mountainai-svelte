import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.a1b9e512.js","_app/immutable/chunks/scheduler.9341ea61.js","_app/immutable/chunks/index.66f07722.js","_app/immutable/chunks/MountainList.46919e7c.js","_app/immutable/chunks/await_block.0d1876eb.js","_app/immutable/chunks/header.65a1ee7b.js","_app/immutable/chunks/index.9eb50c3c.js","_app/immutable/chunks/transitions.c6f22e03.js","_app/immutable/chunks/results_page.577f958a.js","_app/immutable/chunks/navigation.6f169f94.js","_app/immutable/chunks/singletons.1f96287d.js"];
export const stylesheets = ["_app/immutable/assets/3.010ea0c0.css","_app/immutable/assets/MountainList.9e41b811.css","_app/immutable/assets/results_page.c602a819.css"];
export const fonts = [];
