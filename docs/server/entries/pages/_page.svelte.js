import { d as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { e as escape_html } from "../../chunks/escaping.js";
import { a as attr } from "../../chunks/attributes.js";
function _page($$payload) {
  let c = 0;
  $$payload.out += `<div><button>Клики ${escape_html(c)}</button></div> <a${attr("href", `${stringify(base)}/about`)}>About site</a> <h1>Welcome to SvelteKit!!</h1> <p>test folder doc!!!</p> <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>`;
}
export {
  _page as default
};
