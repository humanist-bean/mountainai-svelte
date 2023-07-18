import{s as le,v as ke,n as be,G as ye,e as H,g as k,h as b,q as X,k as y,A as F,p as ee,l as V,c as O,i as S,m as q,d as U,j as ue,E as Y,D as we}from"./scheduler.9341ea61.js";import{h as oe,u as Me}from"./await_block.0d1876eb.js";import{p as Z,f as A,q as ie,r as re,g as xe}from"./header.8449f224.js";import{S as fe,i as de,d as T,v as he,a as R,h as Ce,t as G,c as Ie,b as J,e as v,p as B,g,n as _,s as N,q as se}from"./index.66f07722.js";import{t as Se,a as je}from"./transitions.c6f22e03.js";async function ae(a){const e=`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&
    inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${a}`;let t;try{t=(await(await fetch(e)).json()).query.search[0],console.log("Retrieved top prediction result from wikipedia successfully:")}catch(s){console.log("An error occurred in 1:",s)}console.log(t);const o=await t.title,l=encodeURI(`https://en.wikipedia.org/w/api.php?action=parse&origin=*&format=json&page=${o}`);let r;try{const s=await fetch(l);console.log(s),r=await(await s.json()).parse.text["*"],console.log("Retrieved top page html from wikipedia api successfully:")}catch(s){console.log("An error occurred in 2:",s)}const c=await r,{mainImageUrl:n,extractedText:u}=await Ee(c);return new Promise((s,i)=>{try{s({mainImageUrl:n,extractedText:u,topTitle:o})}catch(f){console.log("An error occurred in 3:",f),i(f)}})}async function Ee(a){return new Promise((e,t)=>{try{const o=document.createElement("div");o.innerHTML=a;const l=o.querySelector(".infobox"),r=o.querySelectorAll("p"),c=o.querySelector("h2");let n="";for(const i of r){if(i===c)break;n+=i.textContent.trim()+" "}n=n.trim();const s=l.querySelector("img").getAttribute("src");console.log("Main Image URL:",s),console.log("Extracted Text is: ",n),console.log("Successfully extracted relevant mountain information from wikipedia!"),e({mainImageUrl:s,extractedText:n})}catch(o){console.log("An error occurred in 3:",o),t(o)}})}const{console:Re}=xe,M="src/routes/result/MainMountain.svelte";function me(a){let e,t="Click Choose File to Upload Image for Prediction!",o,l;const r={c:function(){e=k("div"),e.textContent=t,this.h()},l:function(n){e=b(n,"DIV",{["data-svelte-h"]:!0}),X(e)!=="svelte-jqtfbs"&&(e.textContent=t),this.h()},h:function(){y(e,M,69,4,2667)},m:function(n,u){R(n,e,u),l=!0},p:F,i:function(n){l||(n&&ee(()=>{l&&(o||(o=B(e,A,{},!0)),o.run(1))}),l=!0)},o:function(n){n&&(o||(o=B(e,A,{},!1)),o.run(0)),l=!1},d:function(n){n&&v(e),n&&o&&o.end()}};return T("SvelteRegisterBlock",{block:r,id:me.name,type:"else",source:"(69:0) {:else}",ctx:a}),r}function _e(a){let e,t,o,l=a[0].class_id.toUpperCase()+"",r,c,n,u,s=(a[0].prediction_confidence*100).toFixed(2)+"",i,f,d,j,E,p={ctx:a,current:null,token:null,hasCatch:!0,pending:ge,then:ve,catch:pe,value:3,error:4,blocks:[,,,]};oe(j=a[1],p);const P={c:function(){e=k("div"),t=k("h1"),o=V("Top Prediction Result: "),r=V(l),c=O(),n=k("br"),u=V(` \r
            Confidence: `),i=V(s),f=O(),d=H(),p.block.c(),this.h()},l:function(m){e=b(m,"DIV",{class:!0});var h=S(e);t=b(h,"H1",{class:!0});var C=S(t);o=q(C,"Top Prediction Result: "),r=q(C,l),c=U(C),n=b(C,"BR",{}),u=q(C,` \r
            Confidence: `),i=q(C,s),C.forEach(v),h.forEach(v),f=U(m),d=H(),p.block.l(m),this.h()},h:function(){y(n,M,45,78,1838),g(t,"class","s-Vz_61xhys8Zb"),y(t,M,45,8,1768),g(e,"class","prediction-container s-Vz_61xhys8Zb"),y(e,M,44,4,1724)},m:function(m,h){R(m,e,h),_(e,t),_(t,o),_(t,r),_(t,c),_(t,n),_(t,u),_(t,i),R(m,f,h),R(m,d,h),p.block.m(m,p.anchor=h),p.mount=()=>d.parentNode,p.anchor=d,E=!0},p:function(m,h){a=m,(!E||h&1)&&l!==(l=a[0].class_id.toUpperCase()+"")&&N(r,l),(!E||h&1)&&s!==(s=(a[0].prediction_confidence*100).toFixed(2)+"")&&N(i,s),p.ctx=a,h&2&&j!==(j=a[1])&&oe(j,p)||Me(p,a,h)},i:function(m){E||(J(p.block),E=!0)},o:function(m){for(let h=0;h<3;h+=1){const C=p.blocks[h];G(C)}E=!1},d:function(m){m&&(v(e),v(f),v(d)),p.block.d(m),p.token=null,p=null}};return T("SvelteRegisterBlock",{block:P,id:_e.name,type:"if",source:"(44:0) {#if $prediction_store}",ctx:a}),P}function pe(a){let e,t=a[4].message+"",o;const l={c:function(){e=k("p"),o=V(t),this.h()},l:function(c){e=b(c,"P",{style:!0});var n=S(e);o=q(n,t),n.forEach(v),this.h()},h:function(){ue(e,"color","red"),y(e,M,66,8,2597)},m:function(c,n){R(c,e,n),_(e,o)},p:function(c,n){n&2&&t!==(t=c[4].message+"")&&N(o,t)},i:F,o:F,d:function(c){c&&v(e)}};return T("SvelteRegisterBlock",{block:l,id:pe.name,type:"catch",source:"(66:4) {:catch error}",ctx:a}),l}function ve(a){let e,t,o,l=a[3].topTitle+"",r,c,n,u,s,i,f,d,j="Description",E,p,P=a[3].extractedText+"",x,m,h;const C={c:function(){e=k("div"),t=k("div"),o=k("h2"),r=V(l),c=O(),n=k("img"),i=O(),f=k("div"),d=k("h3"),d.textContent=j,E=O(),p=k("p"),x=V(P),this.h()},l:function(w){e=b(w,"DIV",{class:!0});var I=S(e);t=b(I,"DIV",{class:!0});var L=S(t);o=b(L,"H2",{style:!0});var te=S(o);r=q(te,l),te.forEach(v),c=U(L),n=b(L,"IMG",{class:!0,height:!0,src:!0,alt:!0}),L.forEach(v),i=U(I),f=b(I,"DIV",{class:!0});var W=S(f);d=b(W,"H3",{["data-svelte-h"]:!0}),X(d)!=="svelte-1ihs9ro"&&(d.textContent=j),E=U(W),p=b(W,"P",{class:!0});var ne=S(p);x=q(ne,P),ne.forEach(v),W.forEach(v),I.forEach(v),this.h()},h:function(){ue(o,"font-weight","bold"),y(o,M,53,16,2133),g(n,"class","top-mountain-image s-Vz_61xhys8Zb"),g(n,"height","20rem"),Y(n.src,u=a[3].mainImageUrl)||g(n,"src",u),g(n,"alt",s=a[3].topTitle),y(n,M,56,16,2252),g(t,"class","s-Vz_61xhys8Zb"),y(t,M,52,12,2110),y(d,M,59,16,2425),g(p,"class","s-Vz_61xhys8Zb"),y(p,M,60,16,2463),g(f,"class","scroll-overflow s-Vz_61xhys8Zb"),y(f,M,58,12,2378),g(e,"class","flex-container s-Vz_61xhys8Zb"),y(e,M,51,8,2052)},m:function(w,I){R(w,e,I),_(e,t),_(t,o),_(o,r),_(t,c),_(t,n),_(e,i),_(e,f),_(f,d),_(f,E),_(f,p),_(p,x),h=!0},p:function(w,I){(!h||I&2)&&l!==(l=w[3].topTitle+"")&&N(r,l),(!h||I&2&&!Y(n.src,u=w[3].mainImageUrl))&&g(n,"src",u),(!h||I&2&&s!==(s=w[3].topTitle))&&g(n,"alt",s),(!h||I&2)&&P!==(P=w[3].extractedText+"")&&N(x,P)},i:function(w){h||(w&&ee(()=>{h&&(m||(m=B(e,A,{},!0)),m.run(1))}),h=!0)},o:function(w){w&&(m||(m=B(e,A,{},!1)),m.run(0)),h=!1},d:function(w){w&&v(e),w&&m&&m.end()}};return T("SvelteRegisterBlock",{block:C,id:ve.name,type:"then",source:"(51:4) {:then wiki}",ctx:a}),C}function ge(a){let e,t="...waiting for contents from wikipedia";const o={c:function(){e=k("p"),e.textContent=t,this.h()},l:function(r){e=b(r,"P",{["data-svelte-h"]:!0}),X(e)!=="svelte-x4olrp"&&(e.textContent=t),this.h()},h:function(){y(e,M,49,8,1979)},m:function(r,c){R(r,e,c)},p:F,i:F,o:F,d:function(r){r&&v(e)}};return T("SvelteRegisterBlock",{block:o,id:ge.name,type:"pending",source:"(49:20)           <p>...waiting for contents from wikipedia</p>      {:then wiki}",ctx:a}),o}function $(a){let e,t,o,l;const r=[_e,me],c=[];function n(s,i){return s[0]?0:1}e=n(a),t=c[e]=r[e](a);const u={c:function(){t.c(),o=H()},l:function(i){t.l(i),o=H()},m:function(i,f){c[e].m(i,f),R(i,o,f),l=!0},p:function(i,[f]){let d=e;e=n(i),e===d?c[e].p(i,f):(Ce(),G(c[d],1,1,()=>{c[d]=null}),Ie(),t=c[e],t?t.p(i,f):(t=c[e]=r[e](i),t.c()),J(t,1),t.m(o.parentNode,o))},i:function(i){l||(J(t),l=!0)},o:function(i){G(t),l=!1},d:function(i){i&&v(o),c[e].d(i)}};return T("SvelteRegisterBlock",{block:u,id:$.name,type:"component",source:"",ctx:a}),u}function Te(a,e,t){let o;ke(Z,"prediction_store"),be(a,Z,s=>t(0,o=s));let{$$slots:l={},$$scope:r}=e;he("MainMountain",l,[]);async function c(){if(o){console.log("Prediction store set, attempting to get Wikipedia data");try{const s=await ie(o.class_id);if(s)return console.log("WikiInfo Retrieved from Firestore wikiCache"),s;{console.log("WikiInfo not in Firestore cache, retrieving it from Wikipedia and uploading to Firestore");const i=await ae(o.class_id);return await re(o.class_id,i.mainImageUrl,i.extractedText,i.topTitle),Promise.resolve(i)}}catch(s){return console.log("An error occurred:",s),Promise.reject(s)}}else return console.log("Prediction store is undefined!"),Promise.reject(new Error("Prediction store is undefined"))}let n;const u=[];return Object.keys(e).forEach(s=>{!~u.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&Re.warn(`<MainMountain> was created with unknown prop '${s}'`)}),a.$capture_state=()=>({fade:A,get:ye,transition_start:Se,transition_end:je,prediction_store:Z,getWikiInfoFromName:ae,getWikiCache:ie,uploadWikiInfoToFirestore:re,fetchWikiData:c,promise:n,$prediction_store:o}),a.$inject_state=s=>{"promise"in s&&t(1,n=s.promise)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),a.$$.update=()=>{a.$$.dirty&1&&o&&t(1,n=c())},[o,n]}class Oe extends fe{constructor(e){super(e),de(this,e,Te,$,le,{}),T("SvelteRegisterComponent",{component:this,tagName:"MainMountain",options:e,id:$.name})}}const z="src/routes/result/MountainList.svelte";function ce(a,e,t){const o=a.slice();return o[1]=e[t],o}function K(a){let e,t,o=a[1]+"",l,r,c,n,u;const s={c:function(){e=k("div"),t=k("h3"),l=V(o),r=O(),c=k("img"),u=O(),this.h()},l:function(f){e=b(f,"DIV",{class:!0});var d=S(e);t=b(d,"H3",{class:!0});var j=S(t);l=q(j,o),j.forEach(v),r=U(d),c=b(d,"IMG",{src:!0,alt:!0,class:!0}),u=U(d),d.forEach(v),this.h()},h:function(){g(t,"class","s-OOuafSNkY0Fu"),y(t,z,11,12,352),Y(c.src,n="/images/"+a[1]+".jpg")||g(c,"src",n),g(c,"alt",""),g(c,"class","s-OOuafSNkY0Fu"),y(c,z,12,12,385),g(e,"class","s-OOuafSNkY0Fu"),y(e,z,10,8,333)},m:function(f,d){R(f,e,d),_(e,t),_(t,l),_(e,r),_(e,c),_(e,u)},p:F,d:function(f){f&&v(e)}};return T("SvelteRegisterBlock",{block:s,id:K.name,type:"each",source:"(10:4) {#each mountains as mountain}",ctx:a}),s}function Q(a){let e,t,o,l=se(a[0]),r=[];for(let n=0;n<l.length;n+=1)r[n]=K(ce(a,l,n));const c={c:function(){e=k("div");for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l:function(u){e=b(u,"DIV",{class:!0});var s=S(e);for(let i=0;i<r.length;i+=1)r[i].l(s);s.forEach(v),this.h()},h:function(){g(e,"class","list-flex-container s-OOuafSNkY0Fu"),y(e,z,8,0,239)},m:function(u,s){R(u,e,s);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(e,null);o=!0},p:function(u,[s]){if(s&1){l=se(u[0]);let i;for(i=0;i<l.length;i+=1){const f=ce(u,l,i);r[i]?r[i].p(f,s):(r[i]=K(f),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=l.length}},i:function(u){o||(u&&ee(()=>{o&&(t||(t=B(e,A,{},!0)),t.run(1))}),o=!0)},o:function(u){u&&(t||(t=B(e,A,{},!1)),t.run(0)),o=!1},d:function(u){u&&v(e),we(r,u),u&&t&&t.end()}};return T("SvelteRegisterBlock",{block:c,id:Q.name,type:"component",source:"",ctx:a}),c}function Pe(a,e,t){let{$$slots:o={},$$scope:l}=e;he("MountainList",o,[]);let r=["Mt. Rainier","Mt. Thielsen","Diamond Peak","Mt. Hood","Mt. Jefferson"];const c=[];return Object.keys(e).forEach(n=>{!~c.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<MountainList> was created with unknown prop '${n}'`)}),a.$capture_state=()=>({fade:A,mountains:r}),a.$inject_state=n=>{"mountains"in n&&t(0,r=n.mountains)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),[r]}class Ue extends fe{constructor(e){super(e),de(this,e,Pe,Q,le,{}),T("SvelteRegisterComponent",{component:this,tagName:"MountainList",options:e,id:Q.name})}}export{Oe as M,Ue as a};
