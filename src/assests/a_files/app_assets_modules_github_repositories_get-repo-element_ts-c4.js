"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_repositories_get-repo-element_ts"],{76250:(e,t,o)=>{o.d(t,{$S:()=>r,Fk:()=>a,sz:()=>i});var n=o(43786);function r(e,t,o){let r={hydroEventPayload:e,hydroEventHmac:t,visitorPayload:"",visitorHmac:"",hydroClientContext:o},a=document.querySelector("meta[name=visitor-payload]");a instanceof HTMLMetaElement&&(r.visitorPayload=a.content);let i=document.querySelector("meta[name=visitor-hmac]")||"";i instanceof HTMLMetaElement&&(r.visitorHmac=i.content),(0,n.b)(r,!0)}function a(e){let t=e.getAttribute("data-hydro-view")||"",o=e.getAttribute("data-hydro-view-hmac")||"",n=e.getAttribute("data-hydro-client-context")||"";r(t,o,n)}function i(e){let t=e.getAttribute("data-hydro-click-payload")||"",o=e.getAttribute("data-hydro-click-hmac")||"",n=e.getAttribute("data-hydro-client-context")||"";r(t,o,n)}},60435:(e,t,o)=>{function n(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}o.d(t,{X:()=>n}),(0,o(36071).N7)(".js-remove-unless-platform",function(e){!function(e){let t=(e.getAttribute("data-platforms")||"").split(","),o=n();return!!(o&&t.includes(o))}(e)&&e.remove()})},25999:(e,t,o)=>{o.d(t,{b:()=>u});var n=o(76006),r=o(60435),a=o(56363),i=o(76250);function s(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i}let{getItem:l,setItem:c}=(0,a.Z)("localStorage"),d="code-button-default-tab",u=class GetRepoElement extends HTMLElement{showDownloadMessage(e){let t=this.findPlatform(e);t&&this.showPlatform(t)}showCodespaces(e){let t=this.findPlatform(e);t&&(this.showPlatform(t),this.loadAndUpdateContent())}showCodespaceSelector(e){let t=this.findPlatform(e);t&&(this.showPlatform(t),this.codespaceSelector&&(this.codespaceSelector.hidden=!1))}showOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&(this.openOrCreateInCodespace.hidden=!1)}removeOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&this.openOrCreateInCodespace.remove()}refreshList(){this.shouldRefreshList&&(this.shouldRefreshList=!1,this.loadAndUpdateContent())}trackDelete(){this.shouldRefreshList=!0}hideSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!0),this.codespaceList&&(this.codespaceList.hidden=!1)}showSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!1),this.codespaceList&&(this.codespaceList.hidden=!0)}onDetailsToggle(e){for(let e of(this.modal.hidden=!1,this.platforms))e.hidden=!0;let t=e.target;if(t&&t.open){!this.hasForcedCodespaceTabDefault&&this.forceCodespaceTabDefault?(this.hasForcedCodespaceTabDefault=!0,this.selectDefaultTab(!0)):this.selectDefaultTab(!1);let e=this.copilotTip;e&&(0,i.Fk)(e)}}onDetailsKeydown(e){if("Escape"===e.key){this.modal.hidden=!0;let t=e.target;t?.closest("details")?.removeAttribute("open")}}showPlatform(e){for(let t of(this.modal.hidden=!0,this.platforms))t.hidden=t.getAttribute("data-platform")!==e}findPlatform(e){return e.currentTarget.getAttribute("data-open-app")||(0,r.X)()}refreshOnError(){window.location.reload()}pollForVscode(e){this.showPlatform("vscode");let t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}backToCodespacesFromVscodePolling(){this.loadAndUpdateContent(),this.showPlatform("codespaces")}localTabSelected(){c(d,"local")}cloudTabSelected(){c(d,"cloud"),this.codespaceList?.id==="lazyLoadedCodespacesList"&&this.loadAndUpdateContent()}copilotTabSelected(){c(d,"copilot")}selectDefaultTab(e){let t=e?"cloud":l(d);if(!t)return;let o=this.querySelector(`button[data-tab="${t}"`);o&&o.click()}loadAndUpdateContent(){this.codespaceList?.setAttribute("src",this.codespaceList.getAttribute("data-src"))}constructor(...e){super(...e),this.forceCodespaceTabDefault=!1,this.shouldRefreshList=!1,this.hasForcedCodespaceTabDefault=!1}};s([n.Lj],u.prototype,"forceCodespaceTabDefault",void 0),s([n.fA],u.prototype,"modal",void 0),s([n.fA],u.prototype,"codespaceForm",void 0),s([n.fA],u.prototype,"codespaceLoadingMenu",void 0),s([n.fA],u.prototype,"codespaceList",void 0),s([n.fA],u.prototype,"codespaceSelector",void 0),s([n.fA],u.prototype,"openOrCreateInCodespace",void 0),s([n.fA],u.prototype,"vscodePoller",void 0),s([n.GO],u.prototype,"platforms",void 0),s([n.fA],u.prototype,"copilotTip",void 0),u=s([n.Ih],u)},40578:(e,t,o)=>{let n;function r(){if(!n)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return n}function a(){return n?.locale??"en-US"}o.d(t,{Kd:()=>a,dU:()=>r}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{n=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},87274:(e,t,o)=>{o.d(t,{C:()=>a,x:()=>r});var n=o(71207);let r=n.n4?.readyState==="interactive"||n.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),a=n.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.iG?.addEventListener("load",e)})},18515:(e,t,o)=>{o.d(t,{$:()=>c,c:()=>l});var n=o(15205),r=o(40578),a=o(71207);function i(){let e=(0,r.dU)().featureFlags,t=e.map(e=>e.toUpperCase());return new Set(t)}let s=a.W6?i:(0,n.Z)(i);function l(e){return s().has(e.toUpperCase())}let c={isFeatureEnabled:l}},54508:(e,t,o)=>{o.d(t,{A:()=>s,k:()=>i});var n=o(15205),r=o(71207);let a=(0,n.Z)(function(){return r.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),i=(0,n.Z)(function(){return"enterprise"===a()}),s="webpack-react-next"},56363:(e,t,o)=>{o.d(t,{Z:()=>i,_:()=>s});var n=o(71207),r=o(43786);let a=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(e,t={throwQuotaErrorsOnSet:!1},o=n.iG,i=e=>e,s=e=>e){let l;try{if(!o)throw Error();l=o[e]||new a}catch{l=new a}let{throwQuotaErrorsOnSet:c}=t;function d(e){t.sendCacheStats&&(0,r.b)({incrementKey:e})}function u(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let o=l.getItem(e);if(!o)return null;let n=`${e}:expiry`,r=Number(l.getItem(n));if(r&&t>r)return u(e),u(n),d("SAFE_STORAGE_VALUE_EXPIRED"),null;return d("SAFE_STORAGE_VALUE_WITHIN_TTL"),i(o)}catch(e){return null}},setItem:function(e,o,n=new Date().getTime()){try{if(l.setItem(e,s(o)),t.ttl){let o=`${e}:expiry`,r=n+t.ttl;l.setItem(o,r.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:u,clear:l.clear,key:l.key,get length(){return l.length}}}function s(e){return i(e,{throwQuotaErrorsOnSet:!1},n.iG,JSON.parse,JSON.stringify)}},71207:(e,t,o)=>{o.d(t,{Qg:()=>n.Qg,W6:()=>n.W6,cF:()=>n.cF,iG:()=>r.iG,n4:()=>r.n4,ssrSafeLocation:()=>r.jX,zu:()=>r.zu});var n=o(60327),r=o(66199)},66199:(e,t,o)=>{o.d(t,{iG:()=>r,jX:()=>i,n4:()=>n,zu:()=>a});let n="undefined"==typeof document?void 0:document,r="undefined"==typeof window?void 0:window,a="undefined"==typeof history?void 0:history,i="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},60327:(e,t,o)=>{o.d(t,{Qg:()=>a,W6:()=>r,cF:()=>i});var n=o(66199);let r=void 0===n.n4,a=!r;function i(){return!!r||!!n.n4.querySelector('react-app[data-ssr="true"]')}},43786:(e,t,o)=>{o.d(t,{B:()=>h,b:()=>l});var n=o(71207),r=o(87274),a=o(54508),i=o(18515);let s=[];function l(e,t=!1,o=1){if(!0!==(0,i.c)("BROWSER_STATS_DISABLED")){if(o<0||o>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!n.n4?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=h(),e.bundler=a.A,Math.random()<o&&s.push(e),t?u():d()}}let c=null;async function d(){await r.C,null==c&&(c=window.requestIdleCallback(u))}function u(){if(c=null,!s.length)return;let e=n.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=function(e){let t=[],o=e.map(e=>JSON.stringify(e));for(;o.length>0;)t.push(function(e){let t=e.shift(),o=[t],n=t.length;for(;e.length>0&&n<=65536;){let t=e[0].length;if(n+t<=65536){let r=e.shift();o.push(r),n+=t}else break}return o}(o));return t}(s);for(let o of t)!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${o.join(",")}] }`);s=[]}function h(){return!!n.n4?.head?.querySelector('meta[name="user-staff"]')?.content}n.n4?.addEventListener("pagehide",u),n.n4?.addEventListener("visibilitychange",u)}}]);
//# sourceMappingURL=app_assets_modules_github_repositories_get-repo-element_ts-90aa657193e7.js.map