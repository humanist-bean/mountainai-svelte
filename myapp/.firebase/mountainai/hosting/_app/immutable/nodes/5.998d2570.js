import{s as _e,u as M,o as V,g as v,h as b,i as F,k,p as Q,l as pe,m as ge,j as je,A as O,e as z,D as De,c as I,d as q,q as T,E as Y,F as Z,r as Se}from"../chunks/scheduler.9341ea61.js";import{S as ve,i as be,d as y,v as ke,e as p,g,a as D,b as P,p as S,t as N,q as x,n as _,s as ye,h as we,c as Ue,o as $,j as Ne,k as Be,m as Ie,l as qe}from"../chunks/index.66f07722.js";import{M as ee,$ as te,i as ne,I as oe,j as ae,k as ie,l as H,p as se,n as re,m as le,f as C,g as Oe,e as ce}from"../chunks/header.8449f224.js";import{h as ue,u as ze}from"../chunks/await_block.0d1876eb.js";import{g as de}from"../chunks/navigation.d0bc707d.js";const{console:fe}=Oe,j="src/routes/dashboard/[uid]/Uploads.svelte";function he(o,e,c){const n=o.slice();return n[5]=e[c],n}function Pe(o){let e,c=o[8].message+"",n;const s={c:function(){e=v("p"),n=pe(c),this.h()},l:function(a){e=b(a,"P",{style:!0});var r=F(e);n=ge(r,c),r.forEach(p),this.h()},h:function(){je(e,"color","red"),k(e,j,67,8,2567)},m:function(a,r){D(a,e,r),_(e,n)},p:function(a,r){r&1&&c!==(c=a[8].message+"")&&ye(n,c)},i:O,o:O,d:function(a){a&&p(e)}};return y("SvelteRegisterBlock",{block:s,id:Pe.name,type:"catch",source:"(67:4) {:catch error}",ctx:o}),s}function Ce(o){let e,c,n=x(o[0]),s=[];for(let r=0;r<n.length;r+=1)s[r]=A(he(o,n,r));const t=r=>N(s[r],1,1,()=>{s[r]=null}),a={c:function(){for(let i=0;i<s.length;i+=1)s[i].c();e=z()},l:function(i){for(let l=0;l<s.length;l+=1)s[l].l(i);e=z()},m:function(i,l){for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(i,l);D(i,e,l),c=!0},p:function(i,l){if(l&3){n=x(i[0]);let u;for(u=0;u<n.length;u+=1){const d=he(i,n,u);s[u]?(s[u].p(d,l),P(s[u],1)):(s[u]=A(d),s[u].c(),P(s[u],1),s[u].m(e.parentNode,e))}for(we(),u=n.length;u<s.length;u+=1)t(u);Ue()}},i:function(i){if(!c){for(let l=0;l<n.length;l+=1)P(s[l]);c=!0}},o:function(i){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)N(s[l]);c=!1},d:function(i){i&&p(e),De(s,i)}};return y("SvelteRegisterBlock",{block:a,id:Ce.name,type:"then",source:"(55:4) {:then uploads}",ctx:o}),a}function A(o){let e,c=o[5].data().uploadName+"",n,s,t,a,r,i,l,u="View Prediction Results",d,h,B="Delete",E,w,U,L,W;const X={c:function(){e=v("div"),n=pe(c),s=I(),t=v("img"),i=I(),l=v("button"),l.textContent=u,d=I(),h=v("button"),h.textContent=B,E=I(),this.h()},l:function(m){e=b(m,"DIV",{class:!0});var f=F(e);n=ge(f,c),s=q(f),t=b(f,"IMG",{src:!0,alt:!0,class:!0}),i=q(f),l=b(f,"BUTTON",{class:!0,["data-svelte-h"]:!0}),T(l)!=="svelte-16uosh0"&&(l.textContent=u),d=q(f),h=b(f,"BUTTON",{class:!0,["data-svelte-h"]:!0}),T(h)!=="svelte-1bra3dl"&&(h.textContent=B),E=q(f),f.forEach(p),this.h()},h:function(){Y(t.src,a=o[5].data().imageURL)||g(t,"src",a),g(t,"alt",r=o[5].data().uploadName),g(t,"class","s-as9z3iyEn4oD"),k(t,j,57,16,2197),g(l,"class","s-as9z3iyEn4oD"),k(l,j,58,16,2280),g(h,"class","s-as9z3iyEn4oD"),k(h,j,61,16,2410),g(e,"class","s-as9z3iyEn4oD"),k(e,j,56,12,2133)},m:function(m,f){D(m,e,f),_(e,n),_(e,s),_(e,t),_(e,i),_(e,l),_(e,d),_(e,h),_(e,E),U=!0,L||(W=[$(l,"click",function(){Z(o[1](o[5]))&&o[1](o[5]).apply(this,arguments)},!1,!1,!1,!1),$(h,"click",function(){Z(H(o[5]))&&H(o[5]).apply(this,arguments)},!1,!1,!1,!1)],L=!0)},p:function(m,f){o=m,(!U||f&1)&&c!==(c=o[5].data().uploadName+"")&&ye(n,c),(!U||f&1&&!Y(t.src,a=o[5].data().imageURL))&&g(t,"src",a),(!U||f&1&&r!==(r=o[5].data().uploadName))&&g(t,"alt",r)},i:function(m){U||(m&&Q(()=>{U&&(w||(w=S(e,C,{},!0)),w.run(1))}),U=!0)},o:function(m){m&&(w||(w=S(e,C,{},!1)),w.run(0)),U=!1},d:function(m){m&&p(e),m&&w&&w.end(),L=!1,Se(W)}};return y("SvelteRegisterBlock",{block:X,id:A.name,type:"each",source:"(56:8) {#each uploads as upload}",ctx:o}),X}function Ee(o){let e,c="...loading uploads...";const n={c:function(){e=v("p"),e.textContent=c,this.h()},l:function(t){e=b(t,"P",{["data-svelte-h"]:!0}),T(e)!=="svelte-3n8ha6"&&(e.textContent=c),this.h()},h:function(){k(e,j,53,8,2038)},m:function(t,a){D(t,e,a)},p:O,i:O,o:O,d:function(t){t&&p(e)}};return y("SvelteRegisterBlock",{block:n,id:Ee.name,type:"pending",source:"(53:20)          <p>...loading uploads...</p>     {:then uploads}",ctx:o}),n}function G(o){let e,c,n,s,t={ctx:o,current:null,token:null,hasCatch:!0,pending:Ee,then:Ce,catch:Pe,value:0,error:8,blocks:[,,,]};ue(c=o[0],t);const a={c:function(){e=v("div"),t.block.c(),this.h()},l:function(i){e=b(i,"DIV",{class:!0});var l=F(e);t.block.l(l),l.forEach(p),this.h()},h:function(){g(e,"class","flex-container s-as9z3iyEn4oD"),k(e,j,51,0,1964)},m:function(i,l){D(i,e,l),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null,s=!0},p:function(i,[l]){o=i,t.ctx=o,l&1&&c!==(c=o[0])&&ue(c,t)||ze(t,o,l)},i:function(i){s||(P(t.block),i&&Q(()=>{s&&(n||(n=S(e,C,{},!0)),n.run(1))}),s=!0)},o:function(i){for(let l=0;l<3;l+=1){const u=t.blocks[l];N(u)}i&&(n||(n=S(e,C,{},!1)),n.run(0)),s=!1},d:function(i){i&&p(e),t.block.d(),t.token=null,t=null,i&&n&&n.end()}};return y("SvelteRegisterBlock",{block:a,id:G.name,type:"component",source:"",ctx:o}),a}function Te(o,e,c){let{$$slots:n={},$$scope:s}=e;ke("Uploads",n,[]);let{uid:t}=e,a;const r=ee(ne(ie,"uploaded-images"),te("uid","==",t)),i=oe(r,d=>{c(0,a=d.docs)});a=ae(t),M(()=>{i()});function l(d){re(d.data().imageURL,d.data().uploadName).then(B=>{B?le(B).then(E=>{se.set(E),de("/result")}).catch(E=>console.log("There was an error making the prediction: ",E)):console.log("Failed to create file from image URL.")})}o.$$.on_mount.push(function(){t===void 0&&!("uid"in e||o.$$.bound[o.$$.props.uid])&&fe.warn("<Uploads> was created without expected prop 'uid'")});const u=["uid"];return Object.keys(e).forEach(d=>{!~u.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&fe.warn(`<Uploads> was created with unknown prop '${d}'`)}),o.$$set=d=>{"uid"in d&&c(2,t=d.uid)},o.$capture_state=()=>({getUploads:ae,db:ie,deleteUpload:H,prediction_store:se,createFileFromImageUrl:re,makePrediction:le,onSnapshot:oe,query:ee,collection:ne,where:te,onMount:V,onDestroy:M,fade:C,goto:de,uid:t,uploads:a,q:r,unsub:i,viewPrediction:l}),o.$inject_state=d=>{"uid"in d&&c(2,t=d.uid),"uploads"in d&&c(0,a=d.uploads)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),[a,l,t]}class Re extends ve{constructor(e){super(e),be(this,e,Te,G,_e,{uid:2}),y("SvelteRegisterComponent",{component:this,tagName:"Uploads",options:e,id:G.name})}get uid(){throw new Error("<Uploads>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set uid(e){throw new Error("<Uploads>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const me="src/routes/dashboard/[uid]/+page.svelte";function J(o){let e,c,n="Upload History",s,t,a,r;t=new Re({props:{uid:o[0].uid},$$inline:!0});const i={c:function(){e=v("div"),c=v("h1"),c.textContent=n,s=I(),Ne(t.$$.fragment),this.h()},l:function(u){e=b(u,"DIV",{});var d=F(e);c=b(d,"H1",{["data-svelte-h"]:!0}),T(c)!=="svelte-10euemd"&&(c.textContent=n),s=q(d),Be(t.$$.fragment,d),d.forEach(p),this.h()},h:function(){k(c,me,15,8,419),k(e,me,14,4,388)},m:function(u,d){D(u,e,d),_(e,c),_(e,s),Ie(t,e,null),r=!0},p:function(u,d){const h={};d&1&&(h.uid=u[0].uid),t.$set(h)},i:function(u){r||(P(t.$$.fragment,u),u&&Q(()=>{r&&(a||(a=S(e,C,{},!0)),a.run(1))}),r=!0)},o:function(u){N(t.$$.fragment,u),u&&(a||(a=S(e,C,{},!1)),a.run(0)),r=!1},d:function(u){u&&p(e),qe(t),u&&a&&a.end()}};return y("SvelteRegisterBlock",{block:i,id:J.name,type:"if",source:"(14:0) {#if intro_transition_ready}",ctx:o}),i}function K(o){let e,c,n=o[1]&&J(o);const s={c:function(){n&&n.c(),e=z()},l:function(a){n&&n.l(a),e=z()},m:function(a,r){n&&n.m(a,r),D(a,e,r),c=!0},p:function(a,[r]){a[1]?n?(n.p(a,r),r&2&&P(n,1)):(n=J(a),n.c(),P(n,1),n.m(e.parentNode,e)):n&&(we(),N(n,1,1,()=>{n=null}),Ue())},i:function(a){c||(P(n),c=!0)},o:function(a){N(n),c=!1},d:function(a){a&&p(e),n&&n.d(a)}};return y("SvelteRegisterBlock",{block:s,id:K.name,type:"component",source:"",ctx:o}),s}function Fe(o,e,c){let{$$slots:n={},$$scope:s}=e;ke("Page",n,[]);let{data:t}=e,a=!1;V(()=>{c(1,a=!0),ce()}),o.$$.on_mount.push(function(){t===void 0&&!("data"in e||o.$$.bound[o.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const r=["data"];return Object.keys(e).forEach(i=>{!~r.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Page> was created with unknown prop '${i}'`)}),o.$$set=i=>{"data"in i&&c(0,t=i.data)},o.$capture_state=()=>({fade:C,onMount:V,onDestroy:M,Uploads:Re,show_header:ce,data:t,intro_transition_ready:a}),o.$inject_state=i=>{"data"in i&&c(0,t=i.data),"intro_transition_ready"in i&&c(1,a=i.intro_transition_ready)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),[t,a]}class Ge extends ve{constructor(e){super(e),be(this,e,Fe,K,_e,{data:0}),y("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:K.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ge as component};