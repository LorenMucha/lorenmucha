import x from"./Icon.e3d0313e.js";import{m as b,_}from"./entry.365f3467.js";import{s as f,_ as v,a as y,b as w}from"./mail.7d1ac802.js";import{I as m,J as h,P as e,Y as i,H as d,ag as u,ac as c,ab as k}from"./swiper-vue.8d3fd75f.js";const g=""+new URL("CV_DE.c06aeb92.pdf",import.meta.url).href,$=""+new URL("CV_EN.7b7eb20b.pdf",import.meta.url).href,C=b("languages",{state:()=>({language:"de"}),getters:{get:t=>t.language,opposite:t=>t.language==="de"?"gb":"de"},actions:{change(){this.language=this.opposite}}}),M={name:"AppHeader",setup(){return{languages:C()}},data(){return{isActive:!1,meta:f,cv:g}},computed:{flag(){return`fi fi-${this.languages.opposite}`}},methods:{open_cv(){const t=this.$i18n.locale;this.cv=t==="de"?g:$},show_mobile_menu(){this.isActive=!this.isActive},switch_language(){this.languages.change(),this.$i18n.setLocale(this.languages.get)}}},S={class:"bg-white shadow-lg fixed w-screen top-0 z-10 px-3"},A={class:"max-w-6xl mx-auto px-4"},E={class:"flex justify-between"},L={class:"inline-flex justify-center md:p-4 mb-1 mt-1 md:mt-0 md:mb-0"},V={class:"font-semibold md:text-lg text-blue-500"},B=e("span",{class:"md:text-lg text-gray-500 font-semibold"},"Software Engineering",-1),D={class:"flex space-x-7"},N={class:"hidden md:flex items-center space-x-1"},j=["href"],I={class:"hidden md:flex items-center space-x-1"},z=["href"],F={class:"hidden md:flex items-center"},H=e("div",{class:"md:hidden flex items-center"},[e("button",{class:"mobile-menu-button focus:outline-none"},[e("i",{class:"bx bx-menu text-3xl mt-1"})])],-1),R={class:"md:hidden flex items-center"},U=e("svg",{class:"w-6 h-6 text-gray-500 hover:text-blue-500","x-show":"!showMenu",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M4 6h16M4 12h16M4 18h16"})],-1),Y=[U],q=["href"],J=["href"];function P(t,s,l,r,a,n){const p=x;return m(),h("nav",S,[e("div",A,[e("div",E,[e("div",L,[e("a",null,[e("span",V,i(a.meta.title),1)]),d(p,{name:"uil:square",class:"flex items-center rotate-45 text-gray-500 mr-1 ml-1 md:mr-2 md:ml-2 mt-1"}),B]),e("div",D,[e("div",N,[e("a",{href:a.cv,target:"_blank",class:"py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300",onClick:s[0]||(s[0]=(...o)=>n.open_cv&&n.open_cv(...o))},i(t.$t("header.cv")),9,j)]),e("div",I,[e("a",{href:`mailto:${a.meta.email}`,target:"_blank",class:"py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"},i(t.$t("header.contact")),9,z)]),e("div",F,[e("button",{onClick:s[1]||(s[1]=(...o)=>n.switch_language&&n.switch_language(...o)),onScroll:s[2]||(s[2]=u(()=>{},["prevent"]))},[e("span",{class:c(n.flag)},null,2)],32)])]),H,e("div",R,[e("button",{class:"outline-none mobile-menu-button",onClick:s[3]||(s[3]=(...o)=>n.show_mobile_menu&&n.show_mobile_menu(...o))},Y)])])]),e("div",{class:c([[a.isActive?"active":"hidden"],"mobile-menu"])},[e("ul",null,[e("li",null,[e("a",{href:a.cv,target:"_blank",class:"py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300",onClick:s[4]||(s[4]=(...o)=>n.open_cv&&n.open_cv(...o))},i(t.$t("header.cv")),9,q)]),e("li",null,[e("a",{href:`mailto:${a.meta.email}`,target:"_blank",class:"py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"},i(t.$t("header.contact")),9,J)]),e("li",null,[e("a",{class:"block text-sm px-2 py-4",onClick:s[5]||(s[5]=(...o)=>n.switch_language&&n.switch_language(...o)),onScroll:s[6]||(s[6]=u(()=>{},["prevent"]))},[e("span",{class:c(n.flag)},null,2)],32)])])],2)])}const G=_(M,[["render",P]]),K={name:"AppFooter",data:()=>({siteMetadata:f})},O={class:"flex flex-col items-center mt-16"},Q={class:"flex mb-3 space-x-4 w-fit"},T=["href"],W=e("span",{class:"sr-only"},"github",-1),X=e("img",{class:"w-8 h-8",src:v},null,-1),Z=[W,X],ee=["href"],te=e("span",{class:"sr-only"},"Linkedin",-1),se=e("img",{class:"w-8 h-8",src:y},null,-1),ne=[te,se],oe=["href"],ae=e("span",{class:"sr-only"},"mail",-1),ie=e("img",{class:"w-8 h-8",src:w},null,-1),le=[ae,ie],re={class:"flex px-5 sm:mb-2 sm:space-x-2 space-x-0 text-sm text-gray-500 dark:text-gray-400"};function ce(t,s,l,r,a,n){return m(),h("footer",null,[e("div",O,[e("div",Q,[e("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:t.siteMetadata.github},Z,8,T),e("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:t.siteMetadata.linkedin},ne,8,ee),e("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:`mailto:${t.siteMetadata.email}`},le,8,oe)]),e("div",re,[e("div",null,"Copyright © "+i(new Date().getFullYear()),1)])])])}const de=_(K,[["render",ce]]),_e={},me={class:"layout"};function he(t,s){const l=G,r=de;return m(),h("div",me,[d(l),k(t.$slots,"default"),d(r)])}const xe=_(_e,[["render",he]]);export{xe as default};
