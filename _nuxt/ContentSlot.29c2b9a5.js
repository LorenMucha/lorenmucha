import{T as A,j as p,a8 as m,k as g,l,g as w}from"./swiper-vue.8d3fd75f.js";const T=["p","h1","h2","h3","h4","h5","h6","li"];function f(r,e){return r.type===e||typeof r.type=="object"&&r.type.tag===e||r.tag===e}function s(r){return f(r,"text")||f(r,A)}function y(r){var e;return Array.isArray(r.children)||typeof r.children=="string"?r.children:typeof((e=r.children)==null?void 0:e.default)=="function"?r.children.default():[]}function a(r){if(!r)return"";if(Array.isArray(r))return r.map(a).join("");if(s(r))return r.children||r.value||"";const e=y(r);return Array.isArray(e)?e.map(a).filter(Boolean).join(""):""}function c(r,e=["p"]){if(Array.isArray(r))return r.flatMap(n=>c(n,e));let t=r;return e.some(n=>n==="*"||f(r,n))&&(t=y(r)||r,!Array.isArray(t)&&T.some(n=>f(r,n))&&(t=[t])),t}function h(r,e=["p"]){return r=Array.isArray(r)?r:[r],e.length?r.flatMap(t=>h(c(t,[e[0]]),e.slice(1))).filter(t=>!(s(t)&&a(t).trim()==="")):r}function S(r,e=["p"]){return h(r,e).reduce((t,n)=>(s(n)?typeof t[t.length-1]=="string"?t[t.length-1]+=n.children:t.push(n.children):t.push(n),t),[])}const C=p({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(r){const{parent:e}=w(),{default:t}=m(),n=g(()=>typeof r.unwrap=="string"?r.unwrap.split(" "):["*"]);return{fallbackSlot:t,tags:n,parent:e}},render({use:r,unwrap:e,fallbackSlot:t,tags:n,parent:i}){var o;try{let u=r;return typeof r=="string"&&(u=(i==null?void 0:i.slots[r])||((o=i==null?void 0:i.parent)==null?void 0:o.slots[r]),console.warn(`Please set :use="$slots.${r}" in <MDCSlot> component to enable reactivity`)),u?e?S(u(),n):[u()]:t?t():l("div")}catch{return l("div")}}}),d=p({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(r){return l(C,r)}});export{d as default};