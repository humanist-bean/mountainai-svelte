import{s as O,v as q,q as H,E,g,l as R,h as m,i as b,m as Z,k as p,n as v,r as V,j as I}from"./scheduler.88a1fd1b.js";import{S as x,i as P,d as j,v as A,e as _,g as f,a as D,n as w,o as B}from"./index.cc81a9b1.js";import{p as G,e as J,x as K,u as T}from"./index.0cec23fc.js";import{w as z}from"./index.c33d41b0.js";const Q=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,L=z(!1);const{console:W}=Q,M="src/routes/MtnBtn.svelte";function C(o){let e,t,a,d,c,u,n;const i={c:function(){e=g("div"),t=g("form"),a=g("label"),d=R(`Choose File\r
            `),c=g("input"),this.h()},l:function(l){e=m(l,"DIV",{});var h=b(e);t=m(h,"FORM",{class:!0,method:!0});var y=b(t);a=m(y,"LABEL",{});var r=b(a);d=Z(r,`Choose File\r
            `),c=m(r,"INPUT",{class:!0,name:!0,id:!0,type:!0}),r.forEach(_),y.forEach(_),h.forEach(_),this.h()},h:function(){f(c,"class","hidden-input s-yUZs8pZ_Ck3y"),f(c,"name","mtn-img"),f(c,"id","upload"),f(c,"type","file"),c.hidden=!0,p(c,M,50,12,1276),p(a,M,48,8,1230),f(t,"class","mtn-upload-btn s-yUZs8pZ_Ck3y"),f(t,"method","POST"),p(t,M,47,4,1177),p(e,M,37,0,836)},m:function(l,h){D(l,e,h),w(e,t),w(t,a),w(a,d),w(a,c),u||(n=[B(c,"change",o[5]),B(c,"change",o[1],!1,!1,!1,!1)],u=!0)},p:v,i:v,o:v,d:function(l){l&&_(e),u=!1,V(n)}};return j("SvelteRegisterBlock",{block:i,id:C.name,type:"component",source:"",ctx:o}),i}function X(o,e,t){let a;q(L,"user_store"),H(o,L,r=>t(4,a=r));let{$$slots:d={},$$scope:c}=e;A("MtnBtn",d,[]);const u=E();let n=!1,i;function s(){u("uploaded-file")}let l;const h=[];Object.keys(e).forEach(r=>{!~h.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&W.warn(`<MtnBtn> was created with unknown prop '${r}'`)});function y(){l=this.files,t(0,l),t(2,n),t(3,i),t(4,a)}return o.$capture_state=()=>({createEventDispatcher:E,addDoc:G,collection:J,serverTimestamp:K,user_store:L,uploadPhoto:T,dispatch:u,loggedIn:n,user_id:i,uploadedFile:s,files:l,$user_store:a}),o.$inject_state=r=>{"loggedIn"in r&&t(2,n=r.loggedIn),"user_id"in r&&t(3,i=r.user_id),"files"in r&&t(0,l=r.files)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{o.$$.dirty&16&&(a?(t(2,n=!0),t(3,i=a.uid)):(t(2,n=!1),t(3,i="0"))),o.$$.dirty&13&&l&&l[0]&&(console.log(l[0].name),T(l[0],n,i),t(0,l=null),s())},[l,s,n,i,a,y]}class ae extends x{constructor(e){super(e),P(this,e,X,C,O,{}),j("SvelteRegisterComponent",{component:this,tagName:"MtnBtn",options:e,id:C.name})}}const S="src/routes/MountainLogo.svelte";function k(o){let e,t,a,d,c;const u={c:function(){e=g("article"),t=g("h1"),a=R("Mountain AI"),this.h()},l:function(i){e=m(i,"ARTICLE",{class:!0});var s=b(e);t=m(s,"H1",{style:!0,class:!0});var l=b(t);a=Z(l,"Mountain AI"),l.forEach(_),s.forEach(_),this.h()},h:function(){I(t,"--logo_size",o[0]),f(t,"class","s-9eCoTt0bE3Z3"),p(t,S,15,4,367),f(e,"class","s-9eCoTt0bE3Z3"),p(e,S,14,0,352)},m:function(i,s){D(i,e,s),w(e,t),w(t,a),d||(c=B(t,"click",o[1],!1,!1,!1,!1),d=!0)},p:function(i,[s]){s&1&&I(t,"--logo_size",i[0])},i:v,o:v,d:function(i){i&&_(e),d=!1,c()}};return j("SvelteRegisterBlock",{block:u,id:k.name,type:"component",source:"",ctx:o}),u}function Y(o,e,t){let{$$slots:a={},$$scope:d}=e;A("MountainLogo",a,[]);const c=E();function u(){c("clicked-home-btn")}let{logo_size:n=3}=e;const i=["logo_size"];return Object.keys(e).forEach(s=>{!~i.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<MountainLogo> was created with unknown prop '${s}'`)}),o.$$set=s=>{"logo_size"in s&&t(0,n=s.logo_size)},o.$capture_state=()=>({createEventDispatcher:E,dispatch:c,clickedHomeBtn:u,logo_size:n}),o.$inject_state=s=>{"logo_size"in s&&t(0,n=s.logo_size)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),[n,u]}class ie extends x{constructor(e){super(e),P(this,e,Y,k,O,{logo_size:0}),j("SvelteRegisterComponent",{component:this,tagName:"MountainLogo",options:e,id:k.name})}get logo_size(){throw new Error("<MountainLogo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo_size(e){throw new Error("<MountainLogo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const F=z(!0);function le(){console.log("transition_end fired"),F.set(!0)}function ce(){console.log("transition_start fired"),F.set(!1)}const N=z(!1);function $(){console.log("show_header fired"),N.set(!0)}function ee(){console.log("hide_header fired"),N.set(!1)}const U=z(!1);function re(){console.log("show_results_page fired"),U.set(!0),$()}function ue(){console.log("hide_results_page fired"),U.set(!1),ee()}export{ie as M,ae as a,le as b,F as c,N as d,$ as e,ee as f,Q as g,ue as h,U as r,re as s,ce as t,L as u};
