import { c as create_ssr_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/firebase.js";
import "firebase/firestore";
const Uploads_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${``}`;
});
export {
  Page as default
};
