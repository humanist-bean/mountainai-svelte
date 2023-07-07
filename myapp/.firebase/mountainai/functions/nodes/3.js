import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.dfaf09e2.js","_app/immutable/chunks/scheduler.ff9b50f9.js","_app/immutable/chunks/index.5fbdb1aa.js","_app/immutable/chunks/index.2527a6c0.js","_app/immutable/chunks/results_page.698fd667.js","_app/immutable/chunks/index.f5ae6842.js"];
export const stylesheets = ["_app/immutable/assets/3.01002dd2.css","_app/immutable/assets/results_page.fb3392e1.css"];
export const fonts = [];
