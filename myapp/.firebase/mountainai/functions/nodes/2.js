

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e04aab2e.js","_app/immutable/chunks/scheduler.ff9b50f9.js","_app/immutable/chunks/index.5fbdb1aa.js","_app/immutable/chunks/stores.b2e9693f.js","_app/immutable/chunks/singletons.f965f5d7.js","_app/immutable/chunks/index.f5ae6842.js"];
export const stylesheets = [];
export const fonts = [];
