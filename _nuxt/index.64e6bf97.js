import $ from"./Icon.b5f4994f.js";import"./entry.936b54be.js";import{s as L,_ as I,a as M,b as S,p as H,l as b,f as C,t as B}from"./mail.77773caf.js";import{_ as g}from"./_plugin-vue_export-helper.c27b6911.js";import{L as l,X as a,O as e,Z as y,Y as i,H as m,_ as w,$ as T,j as z,a as E,E as N,N as v,G as p,a1 as f,M as x}from"./swiper-vue.ae9cc6ce.js";import{_ as V}from"./nuxt-link.2d8b5d86.js";import"./config.a41f359c.js";const W=""+new URL("author.349613fe.jpg",import.meta.url).href;const A={data:()=>({authorImage:W,siteMetadata:L}),methods:{scrollTo(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"end"})}}},u=t=>(w("data-v-54d392d7"),t=t(),T(),t),O={class:"section h-screen flex justify-center items-center mt-10"},F={class:"container grid md:grid-cols-3 grid-flow-col"},R={class:"col-span-2"},D={class:"pl-5 items-center"},G={class:"text-3xl text-gray-500"},P=["innerHTML"],U={class:"xl:mr-10 lg:mr-10 sm:mr-0"},X=u(()=>e("hr",{class:"my-1 h-1 bg-blue-500 rounded border-0 md:my-6 dark:bg-gray-700"},null,-1)),Y=["innerHTML"],Z={class:"flex mb-3 space-x-4 w-fit"},q=["href"],J=u(()=>e("span",{class:"sr-only"},"github",-1)),K=u(()=>e("img",{class:"profile-icon",src:I},null,-1)),Q=[J,K],ee=["href"],te=u(()=>e("span",{class:"sr-only"},"Linkedin",-1)),se=u(()=>e("img",{class:"profile-icon",src:M},null,-1)),oe=[te,se],ne=["href"],le=u(()=>e("span",{class:"sr-only"},"mail",-1)),re=u(()=>e("img",{class:"profile-icon",src:S},null,-1)),ae=[le,re],ce={class:"hidden rounded-md shadow-sm mt-5 sm:inline-flex space-x-4 px-4",role:"group"},ie=["src"];function de(t,r,h,d,o,_){const c=$;return l(),a("div",O,[e("div",F,[e("div",R,[e("div",D,[e("p",G,[y(i(t.$t("header.greet"))+" ",1),m(c,{name:"twemoji:clapping-hands"})]),e("h1",{class:"text-bold text-5xl",innerHTML:t.$t("header.role")},null,8,P),e("div",U,[X,e("p",{class:"mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify text-xl",innerHTML:t.$t("header.about")},null,8,Y)]),e("div",Z,[e("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:t.siteMetadata.github},Q,8,q),e("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:t.siteMetadata.linkedin},oe,8,ee),e("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:`mailto:${t.siteMetadata.email}`},ae,8,ne)])]),e("div",ce,[e("button",{onClick:r[0]||(r[0]=s=>_.scrollTo("work"))}," Projekte "),e("button",{onClick:r[1]||(r[1]=s=>_.scrollTo("expertise"))}," Skills & Tools ")])]),e("div",null,[e("img",{src:t.authorImage,alt:"me",class:"shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full hidden sm:block object-cover"},null,8,ie)])])])}const _e=g(A,[["render",de],["__scopeId","data-v-54d392d7"]]),ue=z({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:r,attrs:h}){const d=E(!1);return N(()=>{d.value=!0}),o=>{var n;if(d.value)return(n=r.default)==null?void 0:n.call(r);const _=r.fallback||r.placeholder;if(_)return _();const c=o.fallback||o.placeholder||"",s=o.fallbackTag||o.placeholderTag||"span";return a(s,h,c)}}}),he={name:"Work",data(){return{id:"work",workList:H}}},me=["id"],pe={class:"header"},fe={class:"max-w-3xl mx-auto"},ge={class:"mx-auto content-center"},xe={class:"grid grid-col-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center"},ke={class:"max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5"},be=["src"],ve={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},$e=["innerHTML"],ye=e("svg",{"aria-hidden":"true",class:"w-4 h-4 ml-2 -mr-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1);function we(t,r,h,d,o,_){const c=V,s=ue;return l(),a("div",{id:o.id,ref:o.id,class:"section"},[e("div",pe,[e("div",fe,[e("h2",null,i(t.$t("work.header")),1)])]),e("div",ge,[e("div",xe,[m(s,{placeholder:"Loading..."},{default:v(()=>[(l(!0),a(p,null,f(o.workList,(n,j)=>(l(),a("div",{key:j,class:"flex flex-wrap items-center justify-center"},[m(c,{to:n.link,target:"_blank"},{default:v(()=>[e("div",ke,[e("img",{class:"mx-auto rounded-t-lg object-cover h-32 sm:h-48 md:h-64 pb-5",src:n.imageSrc,loading:"lazy",alt:""},null,8,be),e("h5",ve,i(t.$t(n.header)),1),e("p",{class:"mb-3 font-normal text-gray-700 dark:text-gray-400",innerHTML:t.$t(n.intro)},null,8,$e),e("button",null,[y(i(n.linkText?n.linkText:"Read More")+" ",1),ye])])]),_:2},1032,["to"])]))),128))]),_:1})])])],8,me)}const Te=g(he,[["render",we]]),je={data(){return{id:"expertise",skillList:b,frameWorks:C,languages:b,tools:B}}};const k=t=>(w("data-v-1444f8e9"),t=t(),T(),t),Le=["id"],Ie={class:"header"},Me=k(()=>e("div",{class:"max-w-3xl mx-auto py-5"},[e("h2",null," Skills & Tools ")],-1)),Se={class:"container"},He={class:"flex flex-wrap items-center justify-center skill-list load-hidden v-scroll-reveal"},Ce=["title"],Be={class:"font-bold block mt-3 mb-1"},ze={class:"container"},Ee=k(()=>e("h3",null,"Frameworks",-1)),Ne={class:"flex flex-wrap items-center justify-center skill-list load-hidden v-scroll-reveal"},Ve=["title"],We={class:"font-bold block mt-3 mb-1"},Ae={class:"container"},Oe=k(()=>e("h3",null,"Tools",-1)),Fe={class:"flex flex-wrap items-center justify-center skill-list load-hidden v-scroll-reveal"},Re=["title"],De={class:"font-bold block mt-3 mb-1"};function Ge(t,r,h,d,o,_){const c=$;return l(),a("div",{id:o.id,class:"section sm:h-screen"},[e("div",Ie,[Me,e("div",Se,[e("h3",null,i(t.$t("tools.languages")),1),e("ul",He,[(l(!0),a(p,null,f(o.languages,(s,n)=>(l(),a("li",{key:n,class:"p-4 rounded-lg flex items-end justify-center m-2",title:s.title},[e("div",null,[(l(),x(c,{key:s.title,name:s.component,size:"3rem",class:"w-auto mx-auto h-auto block"},null,8,["name"])),e("span",Be,i(s.title),1)])],8,Ce))),128))])]),e("div",ze,[Ee,e("ul",Ne,[(l(!0),a(p,null,f(o.frameWorks,(s,n)=>(l(),a("li",{key:n,class:"p-4 rounded-lg flex items-end justify-center m-2",title:s.title},[e("div",null,[(l(),x(c,{key:s.title,name:s.component,size:"3rem",class:"w-auto mx-auto h-auto block"},null,8,["name"])),e("span",We,i(s.title),1)])],8,Ve))),128))])]),e("div",Ae,[Oe,e("ul",Fe,[(l(!0),a(p,null,f(o.tools,(s,n)=>(l(),a("li",{key:n,class:"p-4 rounded-lg flex items-end justify-center m-2",title:s.title},[e("div",null,[(l(),x(c,{key:s.title,name:s.component,size:"3rem",class:"w-auto mx-auto h-auto block"},null,8,["name"])),e("span",De,i(s.title),1)])],8,Re))),128))])])])],8,Le)}const Pe=g(je,[["render",Ge],["__scopeId","data-v-1444f8e9"]]),Ue={},Xe={class:"dark:bg-gray-900"};function Ye(t,r){const h=_e,d=Te,o=Pe;return l(),a("div",Xe,[m(h),m(d),m(o)])}const st=g(Ue,[["render",Ye]]);export{st as default};