import{s as ue,v as fe,n as _e,g as p,c as H,h as y,i as C,d as z,k as E,p as de,r as Ce,q as me,j as Oe,o as ae,u as oe,w as Re,e as re,x as we,y as Me,z as je}from"../chunks/scheduler.9341ea61.js";import{S as he,i as ge,d as S,v as ve,j as W,k as U,e as h,g,a as N,n as v,m as $,o as P,b as M,p as F,t as q,l as G,c as be,h as pe}from"../chunks/index.66f07722.js";import{M as ye,a as Ee,u as T,A as qe,s as Se,h as ie,r as le}from"../chunks/results_page.3c0cbe9f.js";import{f as L,h as V}from"../chunks/header.8449f224.js";import{t as J,a as K,b as ce}from"../chunks/transitions.c6f22e03.js";const Ie=!1,Ne=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ie},Symbol.toStringTag,{value:"Module"}));const w="src/routes/Header.svelte";function Q(i){let e,n,t,f="Dashboard",a;const s={c:function(){e=p("li"),n=p("a"),t=p("button"),t.textContent=f,this.h()},l:function(_){e=y(_,"LI",{class:!0});var d=C(e);n=y(d,"A",{style:!0,href:!0,class:!0});var l=C(n);t=y(l,"BUTTON",{class:!0,["data-svelte-h"]:!0}),me(t)!=="svelte-16exvdv"&&(t.textContent=f),l.forEach(h),d.forEach(h),this.h()},h:function(){g(t,"class","dashboard-btn s-Cmt25qOMERl7"),E(t,w,29,6,899),Oe(n,"text-decoration","none"),g(n,"href",a="/dashboard/"+i[0].uid),g(n,"class","s-Cmt25qOMERl7"),E(n,w,28,5,820),g(e,"class","s-Cmt25qOMERl7"),E(e,w,27,4,810)},m:function(_,d){N(_,e,d),v(e,n),v(n,t)},p:function(_,d){d&1&&a!==(a="/dashboard/"+_[0].uid)&&g(n,"href",a)},d:function(_){_&&h(e)}};return S("SvelteRegisterBlock",{block:s,id:Q.name,type:"if",source:"(27:3) {#if $user_store}",ctx:i}),s}function X(i){let e,n,t,f,a,s,c,_,d,l,u,k,o,I,O;s=new ye({props:{logo_size:i[1]},$$inline:!0}),s.$on("clicked-home-btn",i[2]);let r=i[0]&&Q(i);u=new Ee({$$inline:!0});const b={c:function(){e=p("header"),n=p("ul"),t=p("div"),f=p("li"),a=p("a"),W(s.$$.fragment),c=H(),_=p("div"),r&&r.c(),d=H(),l=p("li"),W(u.$$.fragment),this.h()},l:function(m){e=y(m,"HEADER",{});var j=C(e);n=y(j,"UL",{class:!0});var B=C(n);t=y(B,"DIV",{class:!0});var ee=C(t);f=y(ee,"LI",{class:!0});var te=C(f);a=y(te,"A",{class:!0,href:!0});var ne=C(a);U(s.$$.fragment,ne),ne.forEach(h),te.forEach(h),ee.forEach(h),c=z(B),_=y(B,"DIV",{class:!0});var D=C(_);r&&r.l(D),d=z(D),l=y(D,"LI",{class:!0});var se=C(l);U(u.$$.fragment,se),se.forEach(h),D.forEach(h),B.forEach(h),j.forEach(h),this.h()},h:function(){g(a,"class","home-btn s-Cmt25qOMERl7"),g(a,"href","/"),E(a,w,20,7,597),g(f,"class","s-Cmt25qOMERl7"),E(f,w,20,3,593),g(t,"class","left-corner s-Cmt25qOMERl7"),E(t,w,19,2,564),g(l,"class","s-Cmt25qOMERl7"),E(l,w,35,3,996),g(_,"class","right-corner s-Cmt25qOMERl7"),E(_,w,25,2,758),g(n,"class","s-Cmt25qOMERl7"),E(n,w,18,1,557),E(e,w,14,0,440)},m:function(m,j){N(m,e,j),v(e,n),v(n,t),v(t,f),v(f,a),$(s,a,null),v(n,c),v(n,_),r&&r.m(_,null),v(_,d),v(_,l),$(u,l,null),o=!0,I||(O=[P(e,"introend",K,!1,!1,!1,!1),P(e,"outrostart",J,!1,!1,!1,!1),P(e,"outroend",K,!1,!1,!1,!1)],I=!0)},p:function(m,[j]){m[0]?r?r.p(m,j):(r=Q(m),r.c(),r.m(_,d)):r&&(r.d(1),r=null)},i:function(m){o||(M(s.$$.fragment,m),M(u.$$.fragment,m),m&&de(()=>{o&&(k||(k=F(e,L,{},!0)),k.run(1))}),o=!0)},o:function(m){q(s.$$.fragment,m),q(u.$$.fragment,m),m&&(k||(k=F(e,L,{},!1)),k.run(0)),o=!1},d:function(m){m&&h(e),G(s),r&&r.d(),G(u),m&&k&&k.end(),I=!1,Ce(O)}};return S("SvelteRegisterBlock",{block:b,id:X.name,type:"component",source:"",ctx:i}),b}function Le(i,e,n){let t;fe(T,"user_store"),_e(i,T,l=>n(0,t=l));let{$$slots:f={},$$scope:a}=e;ve("Header",f,[]);let s=5,c=!1;const _=[];Object.keys(e).forEach(l=>{!~_.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<Header> was created with unknown prop '${l}'`)});const d=()=>{ie(),J()};return i.$capture_state=()=>({MtnBtn:Ee,MountainLogo:ye,Auth:qe,fade:L,transition_start:J,transition_end:K,show_results_page:Se,hide_results_page:ie,user_store:T,logo_size:s,toggle_results_page:c,$user_store:t}),i.$inject_state=l=>{"logo_size"in l&&n(1,s=l.logo_size),"toggle_results_page"in l&&(c=l.toggle_results_page)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),[t,s,d]}class ke extends he{constructor(e){super(e),ge(this,e,Le,X,ue,{}),S("SvelteRegisterComponent",{component:this,tagName:"Header",options:e,id:X.name})}}const A="src/routes/+layout.svelte";function Y(i){let e,n,t,f,a,s,c,_="@ Alder French 2023",d,l,u=i[2]&&i[1]&&Z(i);const k=i[5].default,o=Re(k,i,i[4],null),I={c:function(){e=p("div"),u&&u.c(),n=H(),t=p("main"),o&&o.c(),f=H(),a=p("footer"),s=p("a"),c=p("p"),c.textContent=_,this.h()},l:function(r){e=y(r,"DIV",{class:!0});var b=C(e);u&&u.l(b),n=z(b),t=y(b,"MAIN",{class:!0});var R=C(t);o&&o.l(R),R.forEach(h),f=z(b),a=y(b,"FOOTER",{class:!0});var m=C(a);s=y(m,"A",{href:!0,class:!0});var j=C(s);c=y(j,"P",{["data-svelte-h"]:!0}),me(c)!=="svelte-1fywdh"&&(c.textContent=_),j.forEach(h),m.forEach(h),b.forEach(h),this.h()},h:function(){g(t,"class","s-7IPF32Wcq3s8"),E(t,A,37,2,1252),E(c,A,42,45,1337),g(s,"href","https://humanist-bean.github.io"),g(s,"class","s-7IPF32Wcq3s8"),E(s,A,42,3,1295),g(a,"class","s-7IPF32Wcq3s8"),E(a,A,41,2,1283),g(e,"class","app"),E(e,A,32,1,1150)},m:function(r,b){N(r,e,b),u&&u.m(e,null),v(e,n),v(e,t),o&&o.m(t,null),v(e,f),v(e,a),v(a,s),v(s,c),l=!0},p:function(r,b){r[2]&&r[1]?u?b&6&&M(u,1):(u=Z(r),u.c(),M(u,1),u.m(e,n)):u&&(pe(),q(u,1,1,()=>{u=null}),be()),o&&o.p&&(!l||b&16)&&we(o,k,r,r[4],l?je(k,r[4],b,null):Me(r[4]),null)},i:function(r){l||(M(u),M(o,r),r&&de(()=>{l&&(d||(d=F(e,L,{},!0)),d.run(1))}),l=!0)},o:function(r){q(u),q(o,r),r&&(d||(d=F(e,L,{},!1)),d.run(0)),l=!1},d:function(r){r&&h(e),u&&u.d(),o&&o.d(r),r&&d&&d.end()}};return S("SvelteRegisterBlock",{block:I,id:Y.name,type:"if",source:"(32:0) {#if intro_transition_ready}",ctx:i}),I}function Z(i){let e,n;e=new ke({$$inline:!0});const t={c:function(){W(e.$$.fragment)},l:function(a){U(e.$$.fragment,a)},m:function(a,s){$(e,a,s),n=!0},i:function(a){n||(M(e.$$.fragment,a),n=!0)},o:function(a){q(e.$$.fragment,a),n=!1},d:function(a){G(e,a)}};return S("SvelteRegisterBlock",{block:t,id:Z.name,type:"if",source:"(34:2) {#if (toggle_header && transition_ready)}",ctx:i}),t}function x(i){let e,n,t=i[0]&&Y(i);const f={c:function(){t&&t.c(),e=re()},l:function(s){t&&t.l(s),e=re()},m:function(s,c){t&&t.m(s,c),N(s,e,c),n=!0},p:function(s,[c]){s[0]?t?(t.p(s,c),c&1&&M(t,1)):(t=Y(s),t.c(),M(t,1),t.m(e.parentNode,e)):t&&(pe(),q(t,1,1,()=>{t=null}),be())},i:function(s){n||(M(t),n=!0)},o:function(s){q(t),n=!1},d:function(s){s&&h(e),t&&t.d(s)}};return S("SvelteRegisterBlock",{block:f,id:x.name,type:"component",source:"",ctx:i}),f}function Ae(i,e,n){let t;fe(V,"header"),_e(i,V,o=>n(3,t=o));let{$$slots:f={},$$scope:a}=e;ve("Layout",f,["default"]);let s=!1,c=!1;ae(()=>{n(1,c=!0),n(0,s=!0)});const _=ce.subscribe(o=>{n(1,c=o)});let d=!1;const l=le.subscribe(o=>{d=o});let u=!1;oe(()=>{_(),l()});const k=[];return Object.keys(e).forEach(o=>{!~k.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<Layout> was created with unknown prop '${o}'`)}),i.$$set=o=>{"$$scope"in o&&n(4,a=o.$$scope)},i.$capture_state=()=>({Header:ke,transition:ce,results_page:le,header:V,onMount:ae,onDestroy:oe,fade:L,intro_transition_ready:s,transition_ready:c,unsub_transition:_,toggle_results_page:d,unsub_results:l,toggle_header:u,$header:t}),i.$inject_state=o=>{"intro_transition_ready"in o&&n(0,s=o.intro_transition_ready),"transition_ready"in o&&n(1,c=o.transition_ready),"toggle_results_page"in o&&(d=o.toggle_results_page),"toggle_header"in o&&n(2,u=o.toggle_header)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),i.$$.update=()=>{i.$$.dirty&8&&n(2,u=t)},[s,c,u,t,a,f]}class Pe extends he{constructor(e){super(e),ge(this,e,Ae,x,ue,{}),S("SvelteRegisterComponent",{component:this,tagName:"Layout",options:e,id:x.name})}}export{Pe as component,Ne as universal};