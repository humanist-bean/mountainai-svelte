import{s as C,v as O,q as R,g,l as E,c as B,h as b,i as w,m as $,d as D,k as S,n as k}from"../chunks/scheduler.ff9b50f9.js";import{S as H,i as N,d as y,v as P,e as d,a as u,n as j,s as q}from"../chunks/index.5fbdb1aa.js";import{p as _}from"../chunks/stores.b2e9693f.js";const x="node_modules/@sveltejs/kit/src/runtime/components/error.svelte";function f(r){var v;let e,i=r[0].status+"",o,l,n,c=((v=r[0].error)==null?void 0:v.message)+"",s;const h={c:function(){e=g("h1"),o=E(i),l=B(),n=g("p"),s=E(c),this.h()},l:function(t){e=b(t,"H1",{});var a=w(e);o=$(a,i),a.forEach(d),l=D(t),n=b(t,"P",{});var p=w(n);s=$(p,c),p.forEach(d),this.h()},h:function(){S(e,x,4,0,57),S(n,x,5,0,81)},m:function(t,a){u(t,e,a),j(e,o),u(t,l,a),u(t,n,a),j(n,s)},p:function(t,[a]){var p;a&1&&i!==(i=t[0].status+"")&&q(o,i),a&1&&c!==(c=((p=t[0].error)==null?void 0:p.message)+"")&&q(s,c)},i:k,o:k,d:function(t){t&&(d(e),d(l),d(n))}};return y("SvelteRegisterBlock",{block:h,id:f.name,type:"component",source:"",ctx:r}),h}function z(r,e,i){let o;O(_,"page"),R(r,_,s=>i(0,o=s));let{$$slots:l={},$$scope:n}=e;P("Error",l,[]);const c=[];return Object.keys(e).forEach(s=>{!~c.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Error> was created with unknown prop '${s}'`)}),r.$capture_state=()=>({page:_,$page:o}),[o]}class I extends H{constructor(e){super(e),N(this,e,z,f,C,{}),y("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:f.name})}}export{I as component};
