

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.caa30147.js","_app/immutable/chunks/scheduler.ff9b50f9.js","_app/immutable/chunks/index.5fbdb1aa.js"];
export const stylesheets = [];
export const fonts = [];
