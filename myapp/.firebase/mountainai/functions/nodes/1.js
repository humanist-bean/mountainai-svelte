

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.aecd3705.js","_app/immutable/chunks/scheduler.9341ea61.js","_app/immutable/chunks/index.66f07722.js","_app/immutable/chunks/stores.a2cb788f.js","_app/immutable/chunks/singletons.5465c374.js","_app/immutable/chunks/index.9eb50c3c.js"];
export const stylesheets = [];
export const fonts = [];
