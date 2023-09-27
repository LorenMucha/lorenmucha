import{c as Ve,d as qe,_ as Qe}from"./entry.81ccddf5.js";import{u as Ue}from"./config.450528f4.js";import{d as Ce,f as se,b as Ke,e as k,w as Ge,ad as We,H as F,U as ie,ac as A,I as ce,u as Je,P as Xe,ab as Ye,W as Ze,V as et,ae as tt}from"./swiper-vue.d45c8407.js";const ke=Object.freeze({left:0,top:0,width:16,height:16}),je=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),X=Object.freeze({...ke,...je});Object.freeze({...X,body:"",hidden:!1});({...ke});const Te=Object.freeze({width:null,height:null}),Pe=Object.freeze({...Te,...je});function nt(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in Te?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const ot=/[\s,]+/;function rt(e,t){t.split(ot).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function st(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}const it=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ct=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function le(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(it);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=ct.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const lt=e=>e==="unset"||e==="undefined"||e==="none";function at(e,t){const n={...X,...e},r={...Pe,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(b=>{const f=[],p=b.hFlip,x=b.vFlip;let y=b.rotate;p?x?y+=2:(f.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),f.push("scale(-1 1)"),o.top=o.left=0):x&&(f.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),f.push("scale(1 -1)"),o.top=o.left=0);let v;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:v=o.height/2+o.top,f.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:f.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:v=o.width/2+o.left,f.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}y%2===1&&(o.left!==o.top&&(v=o.left,o.left=o.top,o.top=v),o.width!==o.height&&(v=o.width,o.width=o.height,o.height=v)),f.length&&(s='<g transform="'+f.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=o.width,a=o.height;let u,d;i===null?(d=c===null?"1em":c==="auto"?a:c,u=le(d,l/a)):(u=i==="auto"?l:i,d=c===null?le(u,a/l):c==="auto"?a:c);const h={},m=(b,f)=>{lt(f)||(h[b]=f.toString())};return m("width",u),m("height",d),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:h,body:s}}const ut=/\sid="(\S+)"/g,ft="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let dt=0;function pt(e,t=ft){const n=[];let r;for(;r=ut.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(dt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}function ht(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function gt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function mt(e){return"data:image/svg+xml,"+gt(e)}function yt(e){return'url("'+mt(e)+'")'}const ae={...Pe,inline:!1},bt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},vt={display:"inline-block"},q={backgroundColor:"currentColor"},Oe={backgroundColor:"transparent"},ue={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},fe={webkitMask:q,mask:q,background:Oe};for(const e in fe){const t=fe[e];for(const n in ue)t[e+n]=ue[n]}const M={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";M[e+"-flip"]=t,M[e.slice(0,1)+"-flip"]=t,M[e+"Flip"]=t});function de(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const wt=(e,t)=>{const n=nt(ae,t),r={...bt},o=t.mode||"svg",s={},i=t.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let f in t){const p=t[f];if(p!==void 0)switch(f){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[f]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&rt(n,p);break;case"color":s.color=p;break;case"rotate":typeof p=="string"?n[f]=st(p):typeof p=="number"&&(n[f]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete r["aria-hidden"];break;default:{const x=M[f];x?(p===!0||p==="true"||p===1)&&(n[x]=!0):ae[f]===void 0&&(r[f]=p)}}}const l=at(e,n),a=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,a);let f=0,p=t.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),r.innerHTML=pt(l.body,p?()=>p+"ID"+f++:"iconifyVue"),se("svg",r)}const{body:u,width:d,height:h}=e,m=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),b=ht(u,{...a,width:d+"",height:h+""});return r.style={...s,"--svg":yt(b),width:de(a.width),height:de(a.height),...vt,...m?q:Oe,...c},se("span",r)},xt=Object.create(null),It=Ce({inheritAttrs:!1,render(){const e=this.$attrs,t=e.icon,n=typeof t=="string"?xt[t]:typeof t=="object"?t:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:wt({...X,...n},e)}}),T=/^[a-z0-9]+(-[a-z0-9]+)*$/,N=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!z(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!z(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!z(c,n)?null:c}return null},z=(e,t)=>e?!!((e.provider===""||e.provider.match(T))&&(t&&e.prefix===""||e.prefix.match(T))&&e.name.match(T)):!1,Ee=Object.freeze({left:0,top:0,width:16,height:16}),$=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...Ee,...$}),Q=Object.freeze({...Y,body:"",hidden:!1});function St(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function pe(e,t){const n=St(e,t);for(const r in Q)r in $?r in e&&!(r in n)&&(n[r]=$[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Ct(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function kt(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=pe(r[c]||o[c],s)}return i(t),n.forEach(i),pe(e,s)}function Fe(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=Ct(e);for(const o in r){const s=r[o];s&&(t(o,kt(e,o,s)),n.push(o))}return n}const jt={provider:"",aliases:{},not_found:{},...Ee};function B(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Ae(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!B(e,jt))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(T)||typeof s.body!="string"||!B(s,Q))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(T)||typeof i!="string"||!n[i]&&!r[i]||!B(s,Q))return null}return t}const he=Object.create(null);function Tt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function S(e,t){const n=he[e]||(he[e]=Object.create(null));return n[t]||(n[t]=Tt(e,t))}function Z(e,t){return Ae(t)?Fe(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Pt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let P=!1;function _e(e){return typeof e=="boolean"&&(P=e),P}function Ot(e){const t=typeof e=="string"?N(e,!0,P):e;if(t){const n=S(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Et(e,t){const n=N(e,!0,P);if(!n)return!1;const r=S(n.provider,n.prefix);return Pt(r,n.name,t)}function Ft(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),P&&!t&&!e.prefix){let o=!1;return Ae(e)&&(e.prefix="",Fe(e,(s,i)=>{i&&Et(s,i)&&(o=!0)})),o}const n=e.prefix;if(!z({provider:t,prefix:n,name:"a"}))return!1;const r=S(t,n);return!!Z(r,e)}const At=Object.freeze({width:null,height:null}),_t=Object.freeze({...At,...$});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const U=Object.create(null);function Mt(e,t){U[e]=t}function K(e){return U[e]||U[""]}function ee(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const te=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],L=[];for(;j.length>0;)j.length===1||Math.random()>.5?L.push(j.shift()):L.push(j.pop());te[""]=ee({resources:["https://api.iconify.design"].concat(L)});function zt(e,t){const n=ee(t);return n===null?!1:(te[e]=n,!0)}function ne(e){return te[e]}const Lt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ge=Lt();function $t(e,t){const n=ne(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Nt(e){return e===404}const Dt=(e,t,n)=>{const r=[],o=$t(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function Rt(e){if(typeof e=="string"){const t=ne(e);if(t)return t.path}return"/"}const Bt=(e,t,n)=>{if(!ge){n("abort",424);return}let r=Rt(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;ge(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Nt(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Ht={prepare:Dt,send:Bt};function Vt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=S(s,i));let u;c in a.icons?u=t.loaded:i===""||a.missing.has(c)?u=t.missing:u=t.pending;const d={provider:s,prefix:i,name:c};u.push(d)}),t}function Me(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function qt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Me([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Qt=0;function Ut(e,t,n){const r=Qt++,o=Me.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Kt(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?N(o,t,n):o;s&&r.push(s)}),r}var Gt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Wt(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let g=e.resources.slice(0);for(i=[];g.length>1;){const w=Math.floor(Math.random()*g.length);i.push(g[w]),g=g.slice(0,w).concat(g.slice(w+1))}i=i.concat(g)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,u,d=null,h=[],m=[];typeof r=="function"&&m.push(r);function b(){d&&(clearTimeout(d),d=null)}function f(){l==="pending"&&(l="aborted"),b(),h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function p(g,w){w&&(m=[]),typeof g=="function"&&m.push(g)}function x(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:h.length,subscribe:p,abort:f}}function y(){l="failed",m.forEach(g=>{g(void 0,u)})}function v(){h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function He(g,w,C){const E=w!=="success";switch(h=h.filter(I=>I!==g),l){case"pending":break;case"failed":if(E||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){u=C,y();return}if(E){u=C,h.length||(i.length?R():y());return}if(b(),v(),!e.random){const I=e.resources.indexOf(g.resource);I!==-1&&I!==e.index&&(e.index=I)}l="completed",m.forEach(I=>{I(C)})}function R(){if(l!=="pending")return;b();const g=i.shift();if(g===void 0){if(h.length){d=setTimeout(()=>{b(),l==="pending"&&(v(),y())},e.timeout);return}y();return}const w={status:"pending",resource:g,callback:(C,E)=>{He(w,C,E)}};h.push(w),a++,d=setTimeout(R,e.rotate),n(g,t,w.callback)}return setTimeout(R),x}function ze(e){const t={...Gt,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const u=Wt(t,c,l,(d,h)=>{r(),a&&a(d,h)});return n.push(u),u}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function me(){}const H=Object.create(null);function Jt(e){if(!H[e]){const t=ne(e);if(!t)return;const n=ze(t),r={config:t,redundancy:n};H[e]=r}return H[e]}function Xt(e,t,n){let r,o;if(typeof e=="string"){const s=K(e);if(!s)return n(void 0,424),me;o=s.send;const i=Jt(e);i&&(r=i.redundancy)}else{const s=ee(e);if(s){r=ze(s);const i=e.resources?e.resources[0]:"",c=K(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),me):r.query(t,o,n)().abort}const ye="iconify2",O="iconify",Le=O+"-count",be=O+"-version",$e=36e5,Yt=168;function G(e,t){try{return e.getItem(t)}catch{}}function oe(e,t,n){try{return e.setItem(t,n),!0}catch{}}function ve(e,t){try{e.removeItem(t)}catch{}}function W(e,t){return oe(e,Le,t.toString())}function J(e){return parseInt(G(e,Le))||0}const D={local:!0,session:!0},Ne={local:new Set,session:new Set};let re=!1;function Zt(e){re=e}let _=typeof window>"u"?{}:window;function De(e){const t=e+"Storage";try{if(_&&_[t]&&typeof _[t].length=="number")return _[t]}catch{}D[e]=!1}function Re(e,t){const n=De(e);if(!n)return;const r=G(n,be);if(r!==ye){if(r){const c=J(n);for(let l=0;l<c;l++)ve(n,O+l.toString())}oe(n,be,ye),W(n,0);return}const o=Math.floor(Date.now()/$e)-Yt,s=c=>{const l=O+c.toString(),a=G(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,c))return!0}catch{}ve(n,l)}};let i=J(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,W(n,i)):Ne[e].add(c))}function Be(){if(!re){Zt(!0);for(const e in D)Re(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=S(r,o);if(!Z(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function en(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in D)Re(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function tn(e,t){re||Be();function n(r){let o;if(!D[r]||!(o=De(r)))return;const s=Ne[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=J(o),!W(o,i+1))return;const c={cached:Math.floor(Date.now()/$e),provider:e.provider,data:t};return oe(o,O+i.toString(),JSON.stringify(c))}t.lastModified&&!en(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function we(){}function nn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,qt(e)}))}function on(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=K(n)))return;s.prepare(n,r,o).forEach(c=>{Xt(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=Z(e,l);if(!a.length)return;const u=e.pendingIcons;u&&a.forEach(d=>{u.delete(d)}),tn(e,l)}catch(a){console.error(a)}nn(e)})})}))}const rn=(e,t)=>{const n=Kt(e,!0,_e()),r=Vt(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,we)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===i)return;i=a,c=u,s.push(S(a,u));const d=o[a]||(o[a]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:u,name:d}=l,h=S(a,u),m=h.pendingIcons||(h.pendingIcons=new Set);m.has(d)||(m.add(d),o[a][u].push(d))}),s.forEach(l=>{const{provider:a,prefix:u}=l;o[a][u].length&&on(l,o[a][u])}),t?Ut(t,r,s):we},sn=e=>new Promise((t,n)=>{const r=typeof e=="string"?N(e,!0):e;if(!r){n(e);return}rn([r||e],o=>{if(o.length&&r){const s=Ot(r);if(s){t({...Y,...s});return}}n(e)})});({..._t});const xe={backgroundColor:"currentColor"},cn={backgroundColor:"transparent"},Ie={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Se={webkitMask:xe,mask:xe,background:cn};for(const e in Se){const t=Se[e];for(const n in Ie)t[e+n]=Ie[n]}const V={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";V[e+"-flip"]=t,V[e.slice(0,1)+"-flip"]=t,V[e+"Flip"]=t});_e(!0);Mt("",Ht);if(typeof document<"u"&&typeof window<"u"){Be();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Ft(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;zt(n,o)||console.error(r)}catch{console.error(r)}}}}({...Y});const ln=["width","height"],an=Ce({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(e){var b;let t,n;const r=e,o=qe(),s=Ue();(b=s==null?void 0:s.nuxtIcon)!=null&&b.aliases;const i=Ve("icons",()=>({})),c=Ke(!1),l=k(()=>{var f;return(((f=s.nuxtIcon)==null?void 0:f.aliases)||{})[r.name]||r.name}),a=k(()=>{var f;return(f=i.value)==null?void 0:f[l.value]}),u=k(()=>o.vueApp.component(l.value)),d=k(()=>{var p,x,y;if(!r.size&&typeof((p=s.nuxtIcon)==null?void 0:p.size)=="boolean"&&!((x=s.nuxtIcon)!=null&&x.size))return;const f=r.size||((y=s.nuxtIcon)==null?void 0:y.size)||"1em";return String(Number(f))===f?`${f}px`:f}),h=k(()=>{var f;return((f=s==null?void 0:s.nuxtIcon)==null?void 0:f.class)??"icon"});async function m(){var f;u.value||(f=i.value)!=null&&f[l.value]||(c.value=!0,i.value[l.value]=await sn(l.value).catch(()=>{}),c.value=!1)}return Ge(()=>l.value,m),!u.value&&([t,n]=We(()=>m()),t=await t,n()),(f,p)=>c.value?(F(),ie("span",{key:0,class:A(h.value),width:d.value,height:d.value},null,10,ln)):a.value?(F(),ce(Je(It),{key:1,icon:a.value,class:A(h.value),width:d.value,height:d.value},null,8,["icon","class","width","height"])):u.value?(F(),ce(Xe(u.value),{key:2,class:A(h.value),width:d.value,height:d.value},null,8,["class","width","height"])):(F(),ie("span",{key:3,class:A(h.value),style:tt({fontSize:d.value,lineHeight:d.value,width:d.value,height:d.value})},[Ye(f.$slots,"default",{},()=>[Ze(et(e.name),1)],!0)],6))}});const pn=Qe(an,[["__scopeId","data-v-dc707951"]]);export{pn as default};
