import{q as x}from"./entry.620e7b85.js";import{L as o,X as r,O as e,G as h,a1 as g,Y as u,ag as p,ad as _,H as f,ab as b}from"./swiper-vue.8d2bcb7f.js";import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";import{s as v,_ as k,a as w,b as y}from"./mail.7fc676fc.js";const $=x("languages",{state:()=>({language:"de"}),getters:{get:t=>t.language,opposite:t=>t.language==="de"?"gb":"de"},actions:{change(){this.language=this.opposite}}}),M={name:"AppHeader",setup(){return{languages:$()}},data(){return{isActive:!1,menuItems:[{link:"/files/CV_DE.pdf",name:"header.cv",target:"_blank"},{link:"mailto:lorenmucha@gmail.com",name:"header.contact",target:"_blank"}]}},computed:{flag(){return`fi fi-${this.languages.opposite}`}},methods:{show_mobile_menu(){this.isActive=!this.isActive},switch_language(){this.languages.change(),this.$i18n.setLocale(this.languages.get)}}},C={class:"bg-white shadow-lg fixed w-screen top-0 z-10"},A={class:"max-w-6xl mx-auto px-4"},L={class:"flex justify-between"},S=e("div",null,[e("a",{class:"flex items-center py-4 px-2"},[e("span",{class:"font-semibold md:text-lg text-gray-800"},"Loren Mucha")])],-1),B={class:"flex space-x-7"},I=["href","target"],D={class:"hidden md:flex items-center"},F=e("div",{class:"md:hidden flex items-center"},[e("button",{class:"mobile-menu-button focus:outline-none"},[e("i",{class:"bx bx-menu text-3xl mt-1"})])],-1),V={class:"md:hidden flex items-center"},j=e("svg",{class:"w-6 h-6 text-gray-500 hover:text-blue-500","x-show":"!showMenu",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M4 6h16M4 12h16M4 18h16"})],-1),z=[j],E=["href","target"];function H(t,n,l,c,i,a){return o(),r("nav",C,[e("div",A,[e("div",L,[S,e("div",B,[(o(!0),r(h,null,g(i.menuItems,(s,d)=>(o(),r("div",{key:d,class:"hidden md:flex items-center space-x-1"},[e("a",{href:s.link,target:s.target,class:"py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"},u(t.$t(s.name)),9,I)]))),128)),e("div",D,[e("button",{onClick:n[0]||(n[0]=(...s)=>a.switch_language&&a.switch_language(...s)),onScroll:n[1]||(n[1]=p(()=>{},["prevent"]))},[e("span",{class:_(a.flag)},null,2)],32)])]),F,e("div",V,[e("button",{class:"outline-none mobile-menu-button",onClick:n[2]||(n[2]=(...s)=>a.show_mobile_menu&&a.show_mobile_menu(...s))},z)])])]),e("div",{class:_([[i.isActive?"active":"hidden"],"mobile-menu"])},[e("ul",null,[(o(!0),r(h,null,g(i.menuItems,(s,d)=>(o(),r("li",{key:d},[e("a",{href:s.link,target:s.target,class:"block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"},u(t.$t(s.name)),9,E)]))),128)),e("li",null,[e("a",{class:"block text-sm px-2 py-4",onClick:n[3]||(n[3]=(...s)=>a.switch_language&&a.switch_language(...s)),onScroll:n[4]||(n[4]=p(()=>{},["prevent"]))},[e("span",{class:_(a.flag)},null,2)],32)])])],2)])}const N=m(M,[["render",H]]),Y={name:"AppFooter",data:()=>({siteMetadata:v})},q={class:"flex flex-col items-center mt-16"},G={class:"flex mb-3 space-x-4 w-fit"},O=["href"],X=e("span",{class:"sr-only"},"github",-1),J=e("img",{class:"w-8 h-8",src:k},null,-1),K=[X,J],P=["href"],Q=e("span",{class:"sr-only"},"Linkedin",-1),R=e("img",{class:"w-8 h-8",src:w},null,-1),T=[Q,R],U=["href"],W=e("span",{class:"sr-only"},"mail",-1),Z=e("img",{class:"w-8 h-8",src:y},null,-1),ee=[W,Z],te={class:"flex px-5 sm:mb-2 sm:space-x-2 space-x-0 text-sm text-gray-500 dark:text-gray-400"};function se(t,n,l,c,i,a){return o(),r("footer",null,[e("div",q,[e("div",G,[e("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:t.siteMetadata.github},K,8,O),e("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:t.siteMetadata.linkedin},T,8,P),e("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:`mailto:${t.siteMetadata.email}`},ee,8,U)]),e("div",te,[e("div",null,"Copyright © "+u(new Date().getFullYear()),1)])])])}const ne=m(Y,[["render",se]]),ae={},oe={class:"layout"};function re(t,n){const l=N,c=ne;return o(),r("div",oe,[f(l),b(t.$slots,"default"),f(c)])}const _e=m(ae,[["render",re]]);export{_e as default};
