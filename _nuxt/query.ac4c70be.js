import{e as S,f as T,b as m,c as A}from"./entry.901f4f4b.js";import{a as g,t as k,a9 as B,F as P,b as I,u as j,g as G}from"./swiper-vue.8d3fd75f.js";import{u as b,h as D}from"./preview.a0aa4c5f.js";const N=()=>null;function ce(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);let[r,a,s={}]=e;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof a!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");s.server=s.server??!0,s.default=s.default??N,s.lazy=s.lazy??!1,s.immediate=s.immediate??!0;const i=S(),n=()=>i.isHydrating?i.payload.data[r]:i.static.data[r],c=()=>n()!==void 0;i._asyncData[r]||(i._asyncData[r]={data:g(n()??s.default()),pending:g(!c()),error:k(i.payload._errors,r),status:g("idle")});const o={...i._asyncData[r]};o.refresh=o.execute=(f={})=>{if(i._asyncDataPromises[r]){if(f.dedupe===!1)return i._asyncDataPromises[r];i._asyncDataPromises[r].cancelled=!0}if((f._initial||i.isHydrating&&f._initial!==!1)&&c())return n();o.pending.value=!0,o.status.value="pending";const d=new Promise((u,h)=>{try{u(a(i))}catch(L){h(L)}}).then(u=>{if(d.cancelled)return i._asyncDataPromises[r];let h=u;s.transform&&(h=s.transform(u)),s.pick&&(h=q(h,s.pick)),o.data.value=h,o.error.value=null,o.status.value="success"}).catch(u=>{if(d.cancelled)return i._asyncDataPromises[r];o.error.value=u,o.data.value=j(s.default()),o.status.value="error"}).finally(()=>{d.cancelled||(o.pending.value=!1,i.payload.data[r]=o.data.value,o.error.value&&(i.payload._errors[r]=T(o.error.value)),delete i._asyncDataPromises[r])});return i._asyncDataPromises[r]=d,i._asyncDataPromises[r]};const y=()=>o.refresh({_initial:!0}),v=s.server!==!1&&i.payload.serverRendered;{const f=G();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const u=f._nuxtOnBeforeMountCbs;f&&(B(()=>{u.forEach(h=>{h()}),u.splice(0,u.length)}),P(()=>u.splice(0,u.length)))}v&&i.isHydrating&&c()?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):f&&(i.payload.serverRendered&&i.isHydrating||s.lazy)&&s.immediate?f._nuxtOnBeforeMountCbs.push(y):s.immediate&&y(),s.watch&&I(s.watch,()=>o.refresh());const d=i.hook("app:data:refresh",u=>{if(!u||u.includes(r))return o.refresh()});f&&P(d)}const p=Promise.resolve(i._asyncDataPromises[r]).then(()=>o);return Object.assign(p,o),p}function q(e,t){const r={};for(const a of t)r[a]=e[a];return r}const F=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,H=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,U=/^([/\\]\s*){2,}[^/\\]/;function W(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?F.test(e):H.test(e)||(t.acceptRelative?U.test(e):!1)}const M=/\/$|\/\?/;function w(e="",t=!1){return t?M.test(e):e.endsWith("/")}function C(e="",t=!1){if(!t)return(w(e)?e.slice(0,-1):e)||"/";if(!w(e,!0))return e||"/";const[r,...a]=e.split("?");return(r.slice(0,-1)||"/")+(a.length>0?`?${a.join("?")}`:"")}function Q(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(w(e,!0))return e||"/";const[r,...a]=e.split("?");return r+"/"+(a.length>0?`?${a.join("?")}`:"")}function X(e=""){return e.startsWith("/")}function z(e=""){return X(e)?e:"/"+e}function K(e,t){if(J(t)||W(e))return e;const r=C(t);return e.startsWith(r)?e:R(r,e)}function J(e){return!e||e==="/"}function V(e){return e&&e!=="/"}const Y=/^\.?\//;function R(e,...t){let r=e||"";for(const a of t.filter(s=>V(s)))if(r){const s=a.replace(Y,"");r=Q(r)+s}else r=a;return r}const E=(e,t)=>t.split(".").reduce((r,a)=>r&&r[a],e),_=(e,t)=>Object.keys(e).filter(t).reduce((r,a)=>Object.assign(r,{[a]:e[a]}),{}),ue=e=>t=>e&&e.length?_(t,r=>!e.includes(r)):t,fe=e=>t=>Array.isArray(t)?t.map(r=>e(r)):e(t),$=e=>{const t=[],r=[];for(const a of e)["$","_"].includes(a)?t.push(a):r.push(a);return{prefixes:t,properties:r}},le=(e=[])=>t=>{if(e.length===0||!t)return t;const{prefixes:r,properties:a}=$(e);return _(t,s=>!a.includes(s)&&!r.includes(s[0]))},he=(e=[])=>t=>{if(e.length===0||!t)return t;const{prefixes:r,properties:a}=$(e);return _(t,s=>a.includes(s)||r.includes(s[0]))},de=(e,t)=>{const r=new Intl.Collator(t.$locale,{numeric:t.$numeric,caseFirst:t.$caseFirst,sensitivity:t.$sensitivity}),a=Object.keys(t).filter(s=>!s.startsWith("$"));for(const s of a)e=e.sort((i,n)=>{const c=[E(i,s),E(n,s)].map(o=>{if(o!==null)return o instanceof Date?o.toISOString():o});return t[s]===-1&&c.reverse(),r.compare(c[0],c[1])});return e},ye=(e,t="Expected an array")=>{if(!Array.isArray(e))throw new TypeError(t)},l=e=>Array.isArray(e)?e:[void 0,null].includes(e)?[]:[e],Z=["sort","where","only","without"];function ee(e,t={}){const r={};for(const n of Object.keys(t.initialParams||{}))r[n]=Z.includes(n)?l(t.initialParams[n]):t.initialParams[n];const a=(n,c=o=>o)=>(...o)=>(r[n]=c(...o),i),s=n=>{var c;return t.legacy?n!=null&&n.surround?n.surround:n&&(n!=null&&n.dirConfig&&(n.result={_path:(c=n.dirConfig)==null?void 0:c._path,...n.result,_dir:n.dirConfig}),n!=null&&n._path||Array.isArray(n)||!Object.prototype.hasOwnProperty.call(n,"result")?n:n==null?void 0:n.result):n},i={params:()=>({...r,...r.where?{where:[...l(r.where)]}:{},...r.sort?{sort:[...l(r.sort)]}:{}}),only:a("only",l),without:a("without",l),where:a("where",n=>[...l(r.where),...l(n)]),sort:a("sort",n=>[...l(r.sort),...l(n)]),limit:a("limit",n=>parseInt(String(n),10)),skip:a("skip",n=>parseInt(String(n),10)),find:()=>e(i).then(s),findOne:()=>e(a("first")(!0)).then(s),count:()=>e(a("count")(!0)).then(s),locale:n=>i.where({_locale:n}),withSurround:a("surround",(n,c)=>({query:n,...c})),withDirConfig:()=>a("dirConfig")(!0)};return t.legacy&&(i.findSurround=(n,c)=>i.withSurround(n,c).findOne().then(s)),i}function x(e){return JSON.stringify(e,te)}function te(e,t){return t instanceof RegExp?`--REGEX ${t.toString()}`:t}const re=e=>{let t=x(e);return t=typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t),t=t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(t.match(/.{1,100}/g)||[]).join("/")},O=e=>K(e,m().public.content.api.baseURL),pe=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxtjs.org/guide/writing/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},ne=()=>{const{experimental:e}=m().public.content;return e.clientDB?!0:b().isEnabled()},se=()=>async e=>{const{content:t}=m().public,r=e.params(),a=t.experimental.stripQueryParameters?O(`/query/${`${D(r)}.${t.integrity}`}/${re(r)}.json`):O(`/query/${D(r)}.${t.integrity}.json`);if(ne())return(await A(()=>import("./client-db.ea2328ea.js"),["./client-db.ea2328ea.js","./entry.901f4f4b.js","./swiper-vue.8d3fd75f.js","./swiper-vue.b2fa9f9b.css","./entry.06c0c319.css","./index.a6ef77ff.js","./preview.a0aa4c5f.js"],import.meta.url).then(n=>n.useContentDatabase())).fetch(e);const s=await $fetch(a,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:x(r),previewToken:b().getPreviewToken()}});if(typeof s=="string"&&s.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return s};function me(e,...t){const{content:r}=m().public,a=ee(se(),{initialParams:typeof e!="string"?e:{},legacy:!0});let s;typeof e=="string"&&(s=z(R(e,...t)));const i=a.params;return a.params=()=>{var c,o,y;const n=i();return s&&(n.where=n.where||[],n.first&&(n.where||[]).length===0?n.where.push({_path:C(s)}):n.where.push({_path:new RegExp(`^${s.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(c=n.sort)!=null&&c.length||(n.sort=[{_file:1,$numeric:!0}]),r.locales.length&&((y=(o=n.where)==null?void 0:o.find(p=>p._locale))!=null&&y._locale||(n.where=n.where||[],n.where.push({_locale:r.defaultLocale}))),n},a}export{O as a,ce as b,ye as c,l as d,re as e,de as f,E as g,R as h,le as i,x as j,fe as k,he as l,ee as m,K as n,ue as o,me as q,ne as s,pe as u,Q as w};
