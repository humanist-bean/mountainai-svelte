

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/result/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.41a74d29.js","_app/immutable/chunks/scheduler.9341ea61.js","_app/immutable/chunks/index.66f07722.js","_app/immutable/chunks/header.65a1ee7b.js","_app/immutable/chunks/index.9eb50c3c.js","_app/immutable/chunks/MountainList.46919e7c.js","_app/immutable/chunks/await_block.0d1876eb.js","_app/immutable/chunks/transitions.c6f22e03.js"];
export const stylesheets = ["_app/immutable/assets/6.0ab4275f.css","_app/immutable/assets/MountainList.9e41b811.css"];
export const fonts = [];
