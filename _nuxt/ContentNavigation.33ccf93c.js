import{b as f,c as v,d as g}from"./entry.fd1a2cce.js";import{q as d,w as m,h as p,e as l,s as h,j as _,u as C,a as y}from"./query.99d6a2bd.js";import{_ as w}from"./nuxt-link.962892d2.js";import{u as P}from"./preview.4d78f2a0.js";import{j as $,C as N,k as j,ab as T,l as r}from"./swiper-vue.85f9aeb7.js";const b=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=d(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${l(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(h())return(await v(()=>import("./client-db.03817dd7.js"),["./client-db.03817dd7.js","./entry.fd1a2cce.js","./swiper-vue.85f9aeb7.js","./swiper-vue.d33d3671.css","./query.99d6a2bd.js","./preview.4d78f2a0.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:_(a),previewToken:P().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=$({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=N(e),a=j(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&g("dd-navigation").value){const{navigation:n}=C();return{navigation:n}}const{data:s}=await y(`content-navigation-${p(a.value)}`,()=>b(a.value));return{navigation:s}},render(e){const t=T(),{navigation:a}=e,s=o=>r(w,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),R=D;export{R as default};
