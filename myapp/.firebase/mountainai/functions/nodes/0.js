import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.bf0709bf.js","_app/immutable/chunks/scheduler.9341ea61.js","_app/immutable/chunks/index.66f07722.js","_app/immutable/chunks/results_page.577f958a.js","_app/immutable/chunks/header.65a1ee7b.js","_app/immutable/chunks/index.9eb50c3c.js","_app/immutable/chunks/navigation.6f169f94.js","_app/immutable/chunks/singletons.1f96287d.js","_app/immutable/chunks/transitions.c6f22e03.js"];
export const stylesheets = ["_app/immutable/assets/0.d6316bdb.css","_app/immutable/assets/results_page.c602a819.css"];
export const fonts = ["_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2","_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff","_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2","_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2","_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2","_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2","_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2"];
