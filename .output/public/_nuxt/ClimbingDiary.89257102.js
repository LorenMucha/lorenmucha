import{X as a,H as d,N as l,u as s,a0 as v,L as t,G as w,a1 as f,a2 as S,a3 as y,a4 as j,a5 as x,M as A,O as e,Y as $,a6 as D,a7 as L}from"./swiper-vue.c7fbfdd7.js";import{_ as g}from"./_plugin-vue_export-helper.c27b6911.js";import"./entry.312da8b1.js";const E={name:"PageSlider",props:{inputData:Object}};const T={class:"center"},k=["innerHTML"],B={class:"mt-5 text-base"};function C(i,p,o,c,_,u){const n=D,b=v;return t(),a("div",null,[d(b,{class:"mt-10",loop:!0,navigation:!0,modules:["SwiperAutoplay"in i?i.SwiperAutoplay:s(S),"SwiperEffectCreative"in i?i.SwiperEffectCreative:s(y),"SwiperScrollbar"in i?i.SwiperScrollbar:s(j),"SwiperNavigation"in i?i.SwiperNavigation:s(x)],autoplay:{delay:8e3,disableOnInteraction:!0}},{default:l(()=>[(t(!0),a(w,null,f(o.inputData,(r,h)=>(t(),A(n,{key:h},{default:l(()=>[e("div",T,[e("div",{innerHTML:r.img},null,8,k),e("p",B,$(r.text),1)])]),_:2},1024))),128))]),_:1},8,["modules"])])}const m=g(E,[["render",C],["__scopeId","data-v-60c72363"]]),N={name:"ClimbingDiary",components:{PageSwiper:m},setup(){return{slides:[{img:'<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/barchart.png"/>',text:"Statistische Auswertung deiner Erfolge in Balken Diagramm"},{img:'<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/tabelle.png"/>',text:"Statistische Auswertung deiner Erfolge in einer Tabellarischen Ansicht"},{img:'<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/linechart.png"/>',text:"Statistische Auswertung deiner Erfolge in einer Linearen Ansicht"},{img:'<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/routen.png"/>'},{img:'<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/projects.png"/>'},{img:'<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/filter.png"/>'}]}}},P=""+globalThis.__publicAssetsURL("images/climbing_diary_launcher.png"),U=""+globalThis.__publicAssetsURL("images/google_play.png"),R=""+globalThis.__publicAssetsURL("images/climbing.png"),F=""+globalThis.__publicAssetsURL("images/bouldering.png"),H={class:"page"},K={class:"bg-slate-100"},M={class:"section"},O=e("div",{class:"inline-flex items-baseline"},[e("h1",null,"Climbing-Diary"),e("img",{class:"h-12 w-12 ml-10",src:P})],-1),V=e("div",null," Schöne & umfangreiche Tracking-App deiner Erfolge beim Klettern und Bouldern. ",-1),G=e("button",{class:"btn",href:"#",title:"Google Play"},[e("img",{class:"h-24 w-48 object-cover",src:U})],-1),I=L('<section class="bg-orange-100"><div class="section container"><h2>Umfangreiche Funktionen</h2><div class="grid grid-cols-2"><div class="container"><img class="mx-auto h-24 rounded-lg object-cover" src="'+R+'"><p>Klettern</p></div><div class="container"><img class="mx-auto h-24 rounded-lg object-cover" src="'+F+'"><p>Bouldern</p></div></div></div></section><section class="bg-red-100"><div class="section"><h2>Deine Daten deine Kontrolle</h2></div>&gt; </section>',2);function X(i,p,o,c,_,u){const n=m;return t(),a("div",H,[e("section",K,[e("div",M,[O,V,G,d(n,{"input-data":c.slides},null,8,["input-data"])])]),I])}const J=g(N,[["render",X]]);export{J as default};
