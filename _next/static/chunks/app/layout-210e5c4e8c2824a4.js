(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2698:function(e,t,n){Promise.resolve().then(n.t.bind(n,5935,23)),Promise.resolve().then(n.t.bind(n,3649,23)),Promise.resolve().then(n.t.bind(n,9039,23))},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?l[o]=!!n[e]:l.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:a}=n;return a?l.innerHTML=a.__html||"":o&&(l.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),l}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&i.push(n)}let c=t.map(l).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(o(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(a-i.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return m},default:function(){return v}});let r=n(6921),l=n(1884),o=n(7437),a=r._(n(4887)),i=l._(n(2265)),u=n(7484),c=n(3313),d=n(2185),s=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],y=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},_=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:o,children:a="",strategy:i="afterInteractive",onError:u,stylesheets:d}=e,_=n||t;if(_&&f.has(_))return;if(s.has(t)){f.add(_),s.get(t).then(r,u);return}let h=()=>{l&&l(),f.add(_)},m=document.createElement("script"),b=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),h()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(o?(m.innerHTML=o.__html||"",h()):a?(m.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",h()):t&&(m.src=t,s.set(t,b)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===i&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",i),d&&y(d),document.body.appendChild(m)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>_(e))}):_(e)}function m(e){e.forEach(h),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:c="afterInteractive",onError:s,stylesheets:p,...y}=e,{updateScripts:h,scripts:m,getIsSsr:b,appDir:v,nonce:g}=(0,i.useContext)(u.HeadManagerContext),E=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;E.current||(l&&e&&f.has(e)&&l(),E.current=!0)},[l,t,n]);let M=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!M.current&&("afterInteractive"===c?_(e):"lazyOnload"===c&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>_(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>_(e))})),M.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(h?(m[c]=(m[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:s,...y}]),h(m)):b&&b()?f.add(t||n):b&&!b()&&_(e)),v){if(p&&p.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(a.default.preload(n,y.integrity?{as:"script",integrity:y.integrity}:{as:"script"}),(0,o.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===c&&n&&a.default.preload(n,y.integrity?{as:"script",integrity:y.integrity}:{as:"script"})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9039:function(){},3649:function(e){e.exports={style:{fontFamily:"'__Inter_8c7159', '__Inter_Fallback_8c7159'",fontStyle:"normal"},className:"__className_8c7159"}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=2698)}),_N_E=e.O()}]);