

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.81f63f23.js","_app/immutable/chunks/scheduler.88a1fd1b.js","_app/immutable/chunks/index.cc81a9b1.js","_app/immutable/chunks/stores.a99d0e33.js","_app/immutable/chunks/singletons.96c09bf1.js","_app/immutable/chunks/index.c33d41b0.js"];
export const stylesheets = [];
export const fonts = [];
