import { c as create_ssr_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/firebase.js";
import "firebase/firestore";
const Uploads_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.s-38T5AAi31Egs>h1.s-38T5AAi31Egs{font-weight:bold}@media(max-width: 400px){div.s-38T5AAi31Egs>h1.s-38T5AAi31Egs{font-size:1.3rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${``}`;
});
export {
  Page as default
};
