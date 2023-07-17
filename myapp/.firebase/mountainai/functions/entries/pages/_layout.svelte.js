import { c as create_ssr_component, a as validate_store, b as subscribe, o as onDestroy } from "../../chunks/ssr.js";
import "firebase/firestore";
import "../../chunks/firebase.js";
import { t as transition, r as results_page } from "../../chunks/results_page.js";
import { w as writable } from "../../chunks/index2.js";
const header = writable(false);
const Header_svelte_svelte_type_style_lang = "";
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box;justify-content:center;align-items:center}footer.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.s-7IPF32Wcq3s8 a.s-7IPF32Wcq3s8{color:azure;font-weight:bold;font-size:0.66em}@media(min-width: 480px){footer.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_header;
  validate_store(header, "header");
  $$unsubscribe_header = subscribe(header, (value) => value);
  const unsub_transition = transition.subscribe((value) => {
  });
  const unsub_results = results_page.subscribe((value) => {
  });
  onDestroy(() => {
    unsub_transition();
    unsub_results();
  });
  $$result.css.add(css);
  $$unsubscribe_header();
  return `${``}`;
});
export {
  Layout as default
};
