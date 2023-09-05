"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{622:function(e,t,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,l={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!u.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:c,props:l,_owner:a.current}}t.Fragment=l,t.jsx=s,t.jsxs=s},7437:function(e,t,n){e.exports=n(622)},4869:function(e,t,n){let r,o;n.d(t,{V:function(){return ez}});var l,i,a,u,s,c,d,f,p,m,v,h,g,E,w,b,y,L=n(2265),T=n.t(L,2);function S(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,S),r}function O(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}var P=((l=P||{})[l.None=0]="None",l[l.RenderStrategy=1]="RenderStrategy",l[l.Static=2]="Static",l),k=((i=k||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function C({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:i}){let a=R(t,e);if(l)return F(a,n,r,i);let u=null!=o?o:0;if(2&u){let{static:e=!1,...t}=a;if(e)return F(t,n,r,i)}if(1&u){let{unmount:e=!0,...t}=a;return S(e?0:1,{0:()=>null,1:()=>F({...t,hidden:!0,style:{display:"none"}},n,r,i)})}return F(a,n,r,i)}function F(e,t={},n,r){let{as:o=n,children:l,refName:i="ref",...a}=N(e,["unmount","static"]),u=void 0!==e.ref?{[i]:e.ref}:{},s="function"==typeof l?l(t):l;"className"in a&&a.className&&"function"==typeof a.className&&(a.className=a.className(t));let c={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(c["data-headlessui-state"]=n.join(" "))}if(o===L.Fragment&&Object.keys(x(a)).length>0){if(!(0,L.isValidElement)(s)||Array.isArray(s)&&s.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=s.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>O(null==e?void 0:e.className(...t),a.className):O(null==e?void 0:e.className,a.className),n=t?{className:t}:{};return(0,L.cloneElement)(s,Object.assign({},R(s.props,x(N(a,["ref"]))),c,u,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(s.ref,u.ref),n))}return(0,L.createElement)(o,Object.assign({},N(a,["ref"]),o!==L.Fragment&&u,o!==L.Fragment&&c),s)}function R(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function M(e){var t;return Object.assign((0,L.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function x(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function N(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var A=Object.defineProperty,D=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t,n)=>(D(e,"symbol"!=typeof t?t+"":t,n),n);let H=new class{constructor(){j(this,"current",this.detect()),j(this,"handoffState","pending"),j(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},I=(e,t)=>{H.isServer?(0,L.useEffect)(e,t):(0,L.useLayoutEffect)(e,t)};function _(e){let t=(0,L.useRef)(e);return I(()=>{t.current=e},[e]),t}let B=function(e){let t=_(e);return L.useCallback((...e)=>t.current(...e),[t])},W=Symbol();function $(...e){let t=(0,L.useRef)(e);(0,L.useEffect)(()=>{t.current=e},[e]);let n=B(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[W]))?void 0:n}var U=((a=U||{}).Space=" ",a.Enter="Enter",a.Escape="Escape",a.Backspace="Backspace",a.Delete="Delete",a.ArrowLeft="ArrowLeft",a.ArrowUp="ArrowUp",a.ArrowRight="ArrowRight",a.ArrowDown="ArrowDown",a.Home="Home",a.End="End",a.PageUp="PageUp",a.PageDown="PageDown",a.Tab="Tab",a);function V(){let e;let t=(e="undefined"==typeof document,(0,T.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,r]=L.useState(H.isHandoffComplete);return n&&!1===H.isHandoffComplete&&r(!1),L.useEffect(()=>{!0!==n&&r(!0)},[n]),L.useEffect(()=>H.handoff(),[]),!t&&n}let q=null!=(y=L.useId)?y:function(){let e=V(),[t,n]=L.useState(e?()=>H.nextId():null);return I(()=>{null===t&&n(H.nextId())},[t]),null!=t?""+t:void 0};var Y=((u=Y||{})[u.None=1]="None",u[u.Focusable=2]="Focusable",u[u.Hidden=4]="Hidden",u);let G=M(function(e,t){let{features:n=1,...r}=e;return C({ourProps:{ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});function K(e){return H.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let z=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Z=((s=Z||{})[s.First=1]="First",s[s.Previous=2]="Previous",s[s.Next=4]="Next",s[s.Last=8]="Last",s[s.WrapAround=16]="WrapAround",s[s.NoScroll=32]="NoScroll",s),X=((c=X||{})[c.Error=0]="Error",c[c.Overflow=1]="Overflow",c[c.Success=2]="Success",c[c.Underflow=3]="Underflow",c),J=((d=J||{})[d.Previous=-1]="Previous",d[d.Next=1]="Next",d),Q=((f=Q||{})[f.Strict=0]="Strict",f[f.Loose=1]="Loose",f),ee=((p=ee||{})[p.Keyboard=0]="Keyboard",p[p.Mouse=1]="Mouse",p);function et(e){null==e||e.focus({preventScroll:!0})}function en(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var l,i,a;let u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(z)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);o.length>0&&s.length>1&&(s=s.filter(e=>!o.includes(e))),r=null!=r?r:u.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,m=s.length,v;do{if(p>=m||p+m<=0)return 0;let e=d+p;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(v=s[e])||v.focus(f),p+=c}while(v!==u.activeElement);return 6&t&&null!=(a=null==(i=null==(l=v)?void 0:l.matches)?void 0:i.call(l,"textarea,input"))&&a&&v.select(),2}function er(e,t,n){let r=_(t);(0,L.useEffect)(()=>{function t(e){r.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));var eo=((m=eo||{})[m.Forwards=0]="Forwards",m[m.Backwards=1]="Backwards",m);function el(){let e=(0,L.useRef)(!1);return I(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ei(...e){return(0,L.useMemo)(()=>K(...e),[...e])}function ea(e,t,n,r){let o=_(n);(0,L.useEffect)(()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)},[e,t,r])}function eu(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}function es(e,t){let n=(0,L.useRef)([]),r=B(e);(0,L.useEffect)(()=>{let e=[...n.current];for(let[o,l]of t.entries())if(n.current[o]!==l){let o=r(t,e);return n.current=t,o}},[r,...t])}function ec(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add(()=>e.removeEventListener(n,r,o))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(n))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let n=setTimeout(...e);return t.add(()=>clearTimeout(n))},microTask(...e){let n={current:!0};return eu(()=>{n.current&&e[0]()}),t.add(()=>{n.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(e){let t=ec();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function ed(e){let t=B(e),n=(0,L.useRef)(!1);(0,L.useEffect)(()=>(n.current=!1,()=>{n.current=!0,eu(()=>{n.current&&t()})}),[t])}function ef(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var ep=((v=ep||{})[v.None=1]="None",v[v.InitialFocus=2]="InitialFocus",v[v.TabLock=4]="TabLock",v[v.FocusLock=8]="FocusLock",v[v.RestoreFocus=16]="RestoreFocus",v[v.All=30]="All",v);let em=Object.assign(M(function(e,t){let n,r=(0,L.useRef)(null),o=$(r,t),{initialFocus:l,containers:i,features:a=30,...u}=e;V()||(a=1);let s=ei(r);!function({ownerDocument:e},t){let n=function(e=!0){let t=(0,L.useRef)(ev.slice());return es(([e],[n])=>{!0===n&&!1===e&&eu(()=>{t.current.splice(0)}),!1===n&&!0===e&&(t.current=ev.slice())},[e,ev,t]),B(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(t);es(()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&et(n())},[t]),ed(()=>{t&&et(n())})}({ownerDocument:s},!!(16&a));let c=function({ownerDocument:e,container:t,initialFocus:n},r){let o=(0,L.useRef)(null),l=el();return es(()=>{if(!r)return;let i=t.current;i&&eu(()=>{if(!l.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t){o.current=t;return}}else if(i.contains(t)){o.current=t;return}null!=n&&n.current?et(n.current):en(i,Z.First)===X.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement})},[r]),o}({ownerDocument:s,container:r,initialFocus:l},!!(2&a));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=el();ea(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!l.current)return;let i=ef(n);t.current instanceof HTMLElement&&i.add(t.current);let a=r.current;if(!a)return;let u=e.target;u&&u instanceof HTMLElement?eh(i,u)?(r.current=u,et(u)):(e.preventDefault(),e.stopPropagation(),et(a)):et(r.current)},!0)}({ownerDocument:s,container:r,containers:i,previousActiveElement:c},!!(8&a));let d=(n=(0,L.useRef)(0),er("keydown",e=>{"Tab"===e.key&&(n.current=e.shiftKey?1:0)},!0),n),f=B(e=>{let t=r.current;t&&S(d.current,{[eo.Forwards]:()=>{en(t,Z.First,{skipElements:[e.relatedTarget]})},[eo.Backwards]:()=>{en(t,Z.Last,{skipElements:[e.relatedTarget]})}})}),p=function(){let[e]=(0,L.useState)(ec);return(0,L.useEffect)(()=>()=>e.dispose(),[e]),e}(),m=(0,L.useRef)(!1);return L.createElement(L.Fragment,null,!!(4&a)&&L.createElement(G,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Y.Focusable}),C({ourProps:{ref:o,onKeyDown(e){"Tab"==e.key&&(m.current=!0,p.requestAnimationFrame(()=>{m.current=!1}))},onBlur(e){let t=ef(i);r.current instanceof HTMLElement&&t.add(r.current);let n=e.relatedTarget;n instanceof HTMLElement&&"true"!==n.dataset.headlessuiFocusGuard&&(eh(t,n)||(m.current?en(r.current,S(d.current,{[eo.Forwards]:()=>Z.Next,[eo.Backwards]:()=>Z.Previous})|Z.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&et(e.target)))}},theirProps:u,defaultTag:"div",name:"FocusTrap"}),!!(4&a)&&L.createElement(G,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Y.Focusable}))}),{features:ep}),ev=[];function eh(e,t){for(let n of e)if(n.contains(t))return!0;return!1}!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&ev[0]!==e.target&&(ev.unshift(e.target),(ev=ev.filter(e=>null!=e&&e.isConnected)).splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});var eg=n(4887);let eE=(0,L.createContext)(!1);function ew(e){return L.createElement(eE.Provider,{value:e.force},e.children)}let eb=L.Fragment,ey=L.Fragment,eL=(0,L.createContext)(null),eT=(0,L.createContext)(null),eS=Object.assign(M(function(e,t){let n=(0,L.useRef)(null),r=$(function(e,t=!0){return Object.assign(e,{[W]:t})}(e=>{n.current=e}),t),o=ei(n),l=function(e){let t=(0,L.useContext)(eE),n=(0,L.useContext)(eL),r=ei(e),[o,l]=(0,L.useState)(()=>{if(!t&&null!==n||H.isServer)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,L.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,L.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),o}(n),[i]=(0,L.useState)(()=>{var e;return H.isServer?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),a=(0,L.useContext)(eT),u=V();return I(()=>{!l||!i||l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i))},[l,i]),I(()=>{if(i&&a)return a.register(i)},[a,i]),ed(()=>{var e;l&&i&&(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&(null==(e=l.parentElement)||e.removeChild(l)))}),u&&l&&i?(0,eg.createPortal)(C({ourProps:{ref:r},theirProps:e,defaultTag:eb,name:"Portal"}),i):null}),{Group:M(function(e,t){let{target:n,...r}=e,o={ref:$(t)};return L.createElement(eL.Provider,{value:n},C({ourProps:o,theirProps:r,defaultTag:ey,name:"Popover.Group"}))})}),eO=(0,L.createContext)(null),eP=Object.assign(M(function(e,t){let n=q(),{id:r=`headlessui-description-${n}`,...o}=e,l=function e(){let t=(0,L.useContext)(eO);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),i=$(t);return I(()=>l.register(r),[r,l.register]),C({ourProps:{ref:i,...l.props,id:r},theirProps:o,slot:l.slot||{},defaultTag:"p",name:l.name||"Description"})}),{}),ek=(0,L.createContext)(null);ek.displayName="OpenClosedContext";var eC=((h=eC||{})[h.Open=1]="Open",h[h.Closed=2]="Closed",h[h.Closing=4]="Closing",h[h.Opening=8]="Opening",h);let eF=(0,L.createContext)(()=>{});eF.displayName="StackContext";var eR=((g=eR||{})[g.Add=0]="Add",g[g.Remove=1]="Remove",g);function eM({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=(0,L.useContext)(eF),i=B((...e)=>{null==t||t(...e),l(...e)});return I(()=>{let e=void 0===o||!0===o;return e&&i(0,n,r),()=>{e&&i(1,n,r)}},[i,n,r,o]),L.createElement(eF.Provider,{value:i},e)}function ex(e,t,n){let r=_(t);(0,L.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}let{useState:eN,useEffect:eA,useLayoutEffect:eD,useDebugValue:ej}=T;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;let eH=T.useSyncExternalStore,eI=(E={PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:ec(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r,o;let l={doc:e,d:t,meta:function(e){let t={};for(let n of e)Object.assign(t,n(t));return t}(n)},i=[/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0?{before(){r=window.pageYOffset},after({doc:e,d:t,meta:n}){function o(e){return n.containers.flatMap(e=>e()).some(t=>t.contains(e))}t.microTask(()=>{if("auto"!==window.getComputedStyle(e.documentElement).scrollBehavior){let n=ec();n.style(e.documentElement,"scroll-behavior","auto"),t.add(()=>t.microTask(()=>n.dispose()))}t.style(e.body,"marginTop",`-${r}px`),window.scrollTo(0,0);let n=null;t.addEventListener(e,"click",t=>{if(t.target instanceof HTMLElement)try{let r=t.target.closest("a");if(!r)return;let{hash:l}=new URL(r.href),i=e.querySelector(l);i&&!o(i)&&(n=i)}catch{}},!0),t.addEventListener(e,"touchmove",e=>{e.target instanceof HTMLElement&&!o(e.target)&&e.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+r),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null)})})}}:{},{before({doc:e}){var t;let n=e.documentElement;o=(null!=(t=e.defaultView)?t:window).innerWidth-n.clientWidth},after({doc:e,d:t}){let n=e.documentElement,r=o-(n.clientWidth-n.offsetWidth);t.style(n,"paddingRight",`${r}px`)}},{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];i.forEach(({before:e})=>null==e?void 0:e(l)),i.forEach(({after:e})=>null==e?void 0:e(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}},r=new Map,o=new Set,{getSnapshot:()=>r,subscribe:e=>(o.add(e),()=>o.delete(e)),dispatch(e,...t){let n=E[e].call(r,...t);n&&(r=n,o.forEach(e=>e()))}});eI.subscribe(()=>{let e=eI.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&eI.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&eI.dispatch("TEARDOWN",n)}});let e_=new Map,eB=new Map;function eW(e,t=!0){I(()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=eB.get(r))?n:0;return eB.set(r,o+1),0!==o||(e_.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=eB.get(r))?e:1;if(1===t?eB.delete(r):eB.set(r,t-1),1!==t)return;let n=e_.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,e_.delete(r))}},[e,t])}var e$=((w=e$||{})[w.Open=0]="Open",w[w.Closed=1]="Closed",w),eU=((b=eU||{})[b.SetTitleId=0]="SetTitleId",b);let eV={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},eq=(0,L.createContext)(null);function eY(e){let t=(0,L.useContext)(eq);if(null===t){let t=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,eY),t}return t}function eG(e,t){return S(t.type,eV,e,t)}eq.displayName="DialogContext";let eK=P.RenderStrategy|P.Static,ez=Object.assign(M(function(e,t){var n;let r,o,l,i,a;let u=q(),{id:s=`headlessui-dialog-${u}`,open:c,onClose:d,initialFocus:f,__demoMode:p=!1,...m}=e,[v,h]=(0,L.useState)(0),g=(0,L.useContext)(ek);void 0===c&&null!==g&&(c=(g&eC.Open)===eC.Open);let E=(0,L.useRef)(null),w=$(E,t),b=ei(E),y=e.hasOwnProperty("open")||null!==g,T=e.hasOwnProperty("onClose");if(!y&&!T)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!y)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!T)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof c)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c}`);if("function"!=typeof d)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${d}`);let O=c?0:1,[P,k]=(0,L.useReducer)(eG,{titleId:null,descriptionId:null,panelRef:(0,L.createRef)()}),F=B(()=>d(!1)),R=B(e=>k({type:0,id:e})),M=!!V()&&!p&&0===O,x=v>1,N=null!==(0,L.useContext)(eq),[A,D]=(r=(0,L.useContext)(eT),o=(0,L.useRef)([]),l=B(e=>(o.current.push(e),r&&r.register(e),()=>i(e))),i=B(e=>{let t=o.current.indexOf(e);-1!==t&&o.current.splice(t,1),r&&r.unregister(e)}),a=(0,L.useMemo)(()=>({register:l,unregister:i,portals:o}),[l,i,o]),[o,(0,L.useMemo)(()=>function({children:e}){return L.createElement(eT.Provider,{value:a},e)},[a])]),{resolveContainers:j,mainTreeNodeRef:H,MainTreeNode:_}=function({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=(0,L.useRef)(null!=(r=null==n?void 0:n.current)?r:null),l=ei(o),i=B(()=>{var n;let r=[];for(let t of e)null!==t&&(t instanceof HTMLElement?r.push(t):"current"in t&&t.current instanceof HTMLElement&&r.push(t.current));if(null!=t&&t.current)for(let e of t.current)r.push(e);for(let e of null!=(n=null==l?void 0:l.querySelectorAll("html > *, body > *"))?n:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(o.current)||r.some(t=>e.contains(t))||r.push(e));return r});return{resolveContainers:i,contains:B(e=>i().some(t=>t.contains(e))),mainTreeNodeRef:o,MainTreeNode:(0,L.useMemo)(()=>function(){return null!=n?null:L.createElement(G,{features:Y.Hidden,ref:o})},[o,n])}}({portals:A,defaultContainers:[null!=(n=P.panelRef.current)?n:E.current]}),W=x?"parent":"leaf",Z=null!==g&&(g&eC.Closing)===eC.Closing,X=!N&&!Z&&M;eW((0,L.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==b?void 0:b.querySelectorAll("body > *"))?e:[]).find(e=>"headlessui-portal-root"!==e.id&&e.contains(H.current)&&e instanceof HTMLElement))?t:null},[H]),X);let J=!!x||M;eW((0,L.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==b?void 0:b.querySelectorAll("[data-headlessui-portal]"))?e:[]).find(e=>e.contains(H.current)&&e instanceof HTMLElement))?t:null},[H]),J),function(e,t,n=!0){let r=(0,L.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let l=o(n);if(null!==l&&l.getRootNode().contains(l)&&l.isConnected){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(l)||n.composed&&n.composedPath().includes(e))return}return!function(e,t=0){var n;return e!==(null==(n=K(e))?void 0:n.body)&&S(t,{0:()=>e.matches(z),1(){let t=e;for(;null!==t;){if(t.matches(z))return!0;t=t.parentElement}return!1}})}(l,Q.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}}(0,L.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let l=(0,L.useRef)(null);ex("pointerdown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),ex("mousedown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),ex("click",e=>{l.current&&(o(e,()=>l.current),l.current=null)},!0),ex("touchend",e=>o(e,()=>e.target instanceof HTMLElement?e.target:null),!0),er("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}(j,F,!(!M||x));let ee=!(x||0!==O);ea(null==b?void 0:b.defaultView,"keydown",e=>{ee&&(e.defaultPrevented||e.key===U.Escape&&(e.preventDefault(),e.stopPropagation(),F()))}),function(e,t,n=()=>[document.body]){var r;let o,l;r=e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}},o=eH(eI.subscribe,eI.getSnapshot,eI.getSnapshot),(l=e?o.get(e):void 0)&&l.count,I(()=>{if(!(!e||!t))return eI.dispatch("PUSH",e,r),()=>eI.dispatch("POP",e,r)},[t,e])}(b,!(Z||0!==O||N),j),(0,L.useEffect)(()=>{if(0!==O||!E.current)return;let e=new ResizeObserver(e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&F()}});return e.observe(E.current),()=>e.disconnect()},[O,E,F]);let[et,en]=function(){let[e,t]=(0,L.useState)([]);return[e.length>0?e.join(" "):void 0,(0,L.useMemo)(()=>function(e){let n=B(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,L.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return L.createElement(eO.Provider,{value:r},e.children)},[t])]}(),eo=(0,L.useMemo)(()=>[{dialogState:O,close:F,setTitleId:R},P],[O,P,F,R]),el=(0,L.useMemo)(()=>({open:0===O}),[O]),eu={ref:w,id:s,role:"dialog","aria-modal":0===O||void 0,"aria-labelledby":P.titleId,"aria-describedby":et};return L.createElement(eM,{type:"Dialog",enabled:0===O,element:E,onUpdate:B((e,t)=>{"Dialog"===t&&S(e,{[eR.Add]:()=>h(e=>e+1),[eR.Remove]:()=>h(e=>e-1)})})},L.createElement(ew,{force:!0},L.createElement(eS,null,L.createElement(eq.Provider,{value:eo},L.createElement(eS.Group,{target:E},L.createElement(ew,{force:!1},L.createElement(en,{slot:el,name:"Dialog.Description"},L.createElement(em,{initialFocus:f,containers:j,features:M?S(W,{parent:em.features.RestoreFocus,leaf:em.features.All&~em.features.FocusLock}):em.features.None},L.createElement(D,null,C({ourProps:eu,theirProps:m,slot:el,defaultTag:"div",features:eK,visible:0===O,name:"Dialog"}))))))))),L.createElement(_,null))}),{Backdrop:M(function(e,t){let n=q(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},i]=eY("Dialog.Backdrop"),a=$(t);(0,L.useEffect)(()=>{if(null===i.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[i.panelRef]);let u=(0,L.useMemo)(()=>({open:0===l}),[l]);return L.createElement(ew,{force:!0},L.createElement(eS,null,C({ourProps:{ref:a,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:M(function(e,t){let n=q(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},i]=eY("Dialog.Panel"),a=$(t,i.panelRef),u=(0,L.useMemo)(()=>({open:0===l}),[l]);return C({ourProps:{ref:a,id:r,onClick:B(e=>{e.stopPropagation()})},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:M(function(e,t){let n=q(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:i}]=eY("Dialog.Overlay");return C({ourProps:{ref:$(t),id:r,"aria-hidden":!0,onClick:B(e=>{if(e.target===e.currentTarget){if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}})},theirProps:o,slot:(0,L.useMemo)(()=>({open:0===l}),[l]),defaultTag:"div",name:"Dialog.Overlay"})}),Title:M(function(e,t){let n=q(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:i}]=eY("Dialog.Title"),a=$(t);return(0,L.useEffect)(()=>(i(r),()=>i(null)),[r,i]),C({ourProps:{ref:a,id:r},theirProps:o,slot:(0,L.useMemo)(()=>({open:0===l}),[l]),defaultTag:"h2",name:"Dialog.Title"})}),Description:eP})},9874:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});t.Z=o},5946:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"}))});t.Z=o},4238:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"}))});t.Z=o},832:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"}))});t.Z=o},3633:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});t.Z=o}}]);