import { d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  $$payload.out += `<a${attr("href", `${stringify(base)}/`)}>Домой!</a> <p>test buil</p><h1>About</h1>`;
}
export {
  _page as default
};
