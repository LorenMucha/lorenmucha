import d from"./ContentQuery.9d0f04ff.js";import{j as c,a8 as l,l as p}from"./swiper-vue.8d3fd75f.js";import"./entry.56d1b6cf.js";import"./query.ef19782e.js";import"./preview.13e75e59.js";const u=(r,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),h=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=l(),{path:f,query:a}=r,m={...a||{},path:f||(a==null?void 0:a.path)||"/"};return p(d,m,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:n})=>t.default({list:e,refresh:o,isPartial:n,...this.$attrs}):e=>u("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):u("not-found",e==null?void 0:e.data)}})}}),S=h;export{S as default};