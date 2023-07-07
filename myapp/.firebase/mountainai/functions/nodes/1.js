

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a0efca63.js","_app/immutable/chunks/scheduler.ff9b50f9.js","_app/immutable/chunks/index.5fbdb1aa.js","_app/immutable/chunks/stores.b2e9693f.js","_app/immutable/chunks/singletons.f965f5d7.js","_app/immutable/chunks/index.f5ae6842.js"];
export const stylesheets = [];
export const fonts = [];
