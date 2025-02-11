import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DV4O7lgA.js","_app/immutable/chunks/D8AipEDR.js","_app/immutable/chunks/VCco8WXk.js"];
export const stylesheets = [];
export const fonts = [];
