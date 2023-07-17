import { c as create_ssr_component, a as validate_store, b as subscribe, d as createEventDispatcher, e as escape, f as each, v as validate_component, o as onDestroy } from "../../chunks/ssr.js";
import "firebase/firestore";
import { w as writable } from "../../chunks/index2.js";
import { a as auth } from "../../chunks/firebase.js";
import { t as transition, r as results_page } from "../../chunks/results_page.js";
import { onAuthStateChanged } from "firebase/auth";
const user_store = writable(false);
const css$6 = {
  code: ".mtn-upload-btn.s-yUZs8pZ_Ck3y{background-color:black;font-family:sans-serif;border-radius:0.7rem;cursor:pointer;display:flex;color:white;text-align:center;padding:0.66rem;margin:0.66rem;text-decoration:none}.mtn-upload-btn.s-yUZs8pZ_Ck3y:hover{background-color:blue}.hidden-input.s-yUZs8pZ_Ck3y{height:100%}",
  map: null
};
const MtnBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user_store, $$unsubscribe_user_store;
  validate_store(user_store, "user_store");
  $$unsubscribe_user_store = subscribe(user_store, (value) => $user_store = value);
  createEventDispatcher();
  $$result.css.add(css$6);
  {
    if ($user_store) {
      $user_store.uid;
    }
  }
  $$unsubscribe_user_store();
  return `<div> <form class="mtn-upload-btn s-yUZs8pZ_Ck3y" method="POST"><label>Choose File
            <input class="hidden-input s-yUZs8pZ_Ck3y" name="mtn-img" id="upload" type="file" hidden></label></form> </div>`;
});
const css$5 = {
  code: "article.s-9eCoTt0bE3Z3{background:linear-gradient(\r\n            to right, \r\n            hsl(07 100% 62%), \r\n            hsl(182 100% 59%)\r\n        );-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center}h1.s-9eCoTt0bE3Z3{font-size:calc(var(--logo_size) * 1vmin);line-height:1.1}h1.s-9eCoTt0bE3Z3{margin:0}",
  map: null
};
const MountainLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { logo_size = 3 } = $$props;
  if ($$props.logo_size === void 0 && $$bindings.logo_size && logo_size !== void 0)
    $$bindings.logo_size(logo_size);
  $$result.css.add(css$5);
  return `<article class="s-9eCoTt0bE3Z3"><h1 style="${"--logo_size:" + escape(logo_size, true) + ";"}" class="s-9eCoTt0bE3Z3">Mountain AI</h1> </article>`;
});
const MainMountain_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".flex-container.s-nGoVnwKZLfVw.s-nGoVnwKZLfVw.s-nGoVnwKZLfVw{display:flex;background-color:black;background:rgba(1, 0, 0, .15);width:fit-content;height:fit-content}.flex-container.s-nGoVnwKZLfVw>div.s-nGoVnwKZLfVw.s-nGoVnwKZLfVw{background-color:#f1f1f1;margin:10px;padding:20px;size:25rem;font-size:3rem;min-width:auto;min-height:25rem;width:fit-content;height:fit-content;text-align:center;resize:none}.flex-container.s-nGoVnwKZLfVw>div.s-nGoVnwKZLfVw>p.s-nGoVnwKZLfVw{font-size:12px;overflow:visible;flex:1}.top-mountain-image.s-nGoVnwKZLfVw.s-nGoVnwKZLfVw.s-nGoVnwKZLfVw{height:22rem;width:auto}",
  map: null
};
const MainMountain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="flex-container s-nGoVnwKZLfVw"><div class="s-nGoVnwKZLfVw"><h2 data-svelte-h="svelte-mddltg">North Cascades</h2> <img class="top-mountain-image s-nGoVnwKZLfVw" src="/images/north-cascades-2.jpg" alt="North Cascades"></div> <div class="s-nGoVnwKZLfVw"><p class="s-nGoVnwKZLfVw" data-svelte-h="svelte-1h7lfsr">North Cascades National Park is in northern Washington State. Its a vast wilderness of conifer-clad mountains, glaciers and lakes. The North Cascades Highway passes viewpoints and leads to trails such as the steep Thunder Creek Trail. Boats dot Ross Lake. The remote community of Stehekin lies at the northern tip of deep Lake Chelan. The park shelters grizzly bears and gray wolves, plus more than 200 bird species.</p></div> </div>`;
});
const MountainList_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".list-flex-container.s-onnRy7IDN1bO.s-onnRy7IDN1bO.s-onnRy7IDN1bO{display:flex;background-color:black;background:rgba(1, 0, 0, .15);min-width:40rem;width:fit-content;height:fit-content;flex-direction:column;justify-content:center;align-items:center}.list-flex-container.s-onnRy7IDN1bO>div.s-onnRy7IDN1bO.s-onnRy7IDN1bO{background-color:#f1f1f1;margin:10px;padding:5px;font-size:2rem;display:flex;min-width:inherit;width:fit-content;height:fit-content;text-align:center;resize:none;flex-direction:row;justify-content:space-between}.list-flex-container.s-onnRy7IDN1bO>div.s-onnRy7IDN1bO>h3.s-onnRy7IDN1bO{font-size:1.5rem}.list-flex-container.s-onnRy7IDN1bO>div.s-onnRy7IDN1bO>img.s-onnRy7IDN1bO{height:5rem;width:auto}",
  map: null
};
const MountainList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mountains = ["Mt. Rainier", "Mt. Thielsen", "Diamond Peak", "Mt. Hood", "Mt. Jefferson"];
  $$result.css.add(css$3);
  return ` <div class="list-flex-container s-onnRy7IDN1bO">${each(mountains, (mountain) => {
    return `<div class="s-onnRy7IDN1bO"><h3 class="s-onnRy7IDN1bO">${escape(mountain)}</h3> <img src="${"/images/" + escape(mountain, true) + ".jpg"}" alt="" class="s-onnRy7IDN1bO"> </div>`;
  })} </div>`;
});
const Auth_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.s-OtWvLuRSXbvp.s-OtWvLuRSXbvp{flex-direction:column;align-content:center;text-align:center;justify-content:center;align-items:center;display:flex}div.s-OtWvLuRSXbvp>a.s-OtWvLuRSXbvp{text-decoration:none}.mtn-auth-btn.s-OtWvLuRSXbvp.s-OtWvLuRSXbvp{background-color:lightgrey;font-family:sans-serif;border-radius:0.7rem;cursor:pointer;display:flex;color:black;text-align:center;padding:0.66rem;margin:0.66rem;text-decoration:none;outline:0.2rem solid black}.mtn-auth-btn.s-OtWvLuRSXbvp.s-OtWvLuRSXbvp:hover{background-color:darkgreen}",
  map: null
};
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user_store, $$unsubscribe_user_store;
  validate_store(user_store, "user_store");
  $$unsubscribe_user_store = subscribe(user_store, (value) => $user_store = value);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      user_store.set(user);
    } else {
      user_store.set(
        false
      );
    }
  });
  $$result.css.add(css$2);
  $$unsubscribe_user_store();
  return `<div data-sveltekit-preload-data="off" class="s-OtWvLuRSXbvp">${$user_store !== false ? `<a href="${"/dashboard/" + escape($user_store.uid, true)}" class="s-OtWvLuRSXbvp"><button class="mtn-auth-btn s-OtWvLuRSXbvp" id="upload" data-svelte-h="svelte-1n4sxi5">Dashboard</button></a> <button class="mtn-auth-btn s-OtWvLuRSXbvp" id="upload" data-svelte-h="svelte-rl5r37">Sign Out</button>` : `<button class="mtn-auth-btn s-OtWvLuRSXbvp" id="upload" data-svelte-h="svelte-1kyqd1b">Sign In</button>`} </div>`;
});
const Home_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.s-eIjPGJ1o5HKT{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}h1.s-eIjPGJ1o5HKT{width:100%}.welcome.s-eIjPGJ1o5HKT{display:block;position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let logo_size = 11;
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-1swxrvl_START -->${$$result.title = `<title>MountainAI</title>`, ""}<meta name="description" content="Mountain AI Svelte Practice Project by Alder French"><!-- HEAD_svelte-1swxrvl_END -->`, ""} <section class="s-eIjPGJ1o5HKT"><h1 class="s-eIjPGJ1o5HKT"><span class="welcome s-eIjPGJ1o5HKT">${validate_component(MountainLogo, "MountainLogo").$$render($$result, { logo_size }, {}, {})}</span>

		Upload image of mountain to identify with AI.</h1> <h2> ${validate_component(MtnBtn, "MtnBtn").$$render($$result, {}, {}, {})} ${validate_component(Auth, "Auth").$$render($$result, {}, {}, {})}</h2> </section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.s-y_bCXRrkrYfP{display:flex;flex-direction:column;min-height:100vh;justify-content:center;align-items:center;margin:0 auto;box-sizing:border-box}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let transition_ready = true;
  const unsub_transition = transition.subscribe((value) => {
    transition_ready = value;
  });
  let toggle_results_page = false;
  const unsub_results = results_page.subscribe((value) => {
    toggle_results_page = value;
  });
  onDestroy(() => {
    unsub_transition();
    unsub_results();
  });
  $$result.css.add(css);
  return `<div class="app s-y_bCXRrkrYfP">${!toggle_results_page && transition_ready ? `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}` : ``} ${toggle_results_page && transition_ready ? `${validate_component(MainMountain, "MainMountain").$$render($$result, {}, {}, {})} ${validate_component(MountainList, "MountainList").$$render($$result, {}, {}, {})}` : ``} </div>`;
});
export {
  Page as default
};
