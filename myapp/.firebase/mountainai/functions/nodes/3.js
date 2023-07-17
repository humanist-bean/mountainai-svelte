import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.68750125.js","_app/immutable/chunks/scheduler.88a1fd1b.js","_app/immutable/chunks/index.cc81a9b1.js","_app/immutable/chunks/index.0cec23fc.js","_app/immutable/chunks/results_page.65a293fe.js","_app/immutable/chunks/index.c33d41b0.js"];
export const stylesheets = ["_app/immutable/assets/3.01002dd2.css","_app/immutable/assets/results_page.55d0e555.css"];
export const fonts = [];
