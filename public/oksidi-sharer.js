!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function d(){return h(" ")}function p(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){e=""+e,t.data!==e&&(t.data=e)}let g;function v(t){g=t}const $=[],w=[],x=[],b=[],y=Promise.resolve();let k=!1;function z(t){x.push(t)}let _=!1;const C=new Set;function E(){if(!_){_=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];v(e),X(e.$$)}for($.length=0;w.length;)w.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];C.has(e)||(C.add(e),e())}x.length=0}while($.length);for(;b.length;)b.pop()();k=!1,_=!1,C.clear()}}function X(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const M=new Set;function B(t,e){-1===t.$$.dirty[0]&&($.push(t),k||(k=!0,y.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(i,s,l,a,u,h,d=[-1]){const p=g;v(i);const m=s.props||{},f=i.$$={fragment:null,ctx:null,props:h,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:d};let $=!1;if(f.ctx=l?l(i,m,(t,e,...n)=>{const r=n.length?n[0]:e;return f.ctx&&u(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),$&&B(i,t)),e}):[],f.update(),$=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();s.intro&&((w=i.$$.fragment)&&w.i&&(M.delete(w),w.i(x))),function(t,n,i){const{fragment:s,on_mount:l,on_destroy:c,after_update:a}=t.$$;s&&s.m(n,i),z(()=>{const n=l.map(e).filter(o);c?c.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(z)}(i,s.target,s.anchor),E()}var w,x;v(p)}let T;function L(t){let e,n;return{c(){e=u("svg"),n=u("path"),m(n,"d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10\n          4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373\n          12-12-5.373-12-12-12zm6 16.538l-4.592-4.548\n          4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593\n          4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"),m(e,"class","share-close-icon"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 25 25")},m(t,r){l(t,e,r),s(e,n)},d(t){t&&c(e)}}}function A(t){let e,n;return{c(){e=u("svg"),n=u("path"),m(n,"d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10\n          4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373\n          12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5\n          4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"),m(e,"class","share-icon"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 25 25")},m(t,r){l(t,e,r),s(e,n)},d(t){t&&c(e)}}}function I(t){let e,n,r,o,i,u,h,p=t[1]&&N(t),f=t[2]&&R(t),g=t[6]&&j(t),v=t[3]&&H(t),$=t[4]&&D(t),w=t[5]&&U(t);return{c(){e=a("ul"),p&&p.c(),n=d(),f&&f.c(),r=d(),g&&g.c(),o=d(),v&&v.c(),i=d(),$&&$.c(),u=d(),w&&w.c(),m(e,"class",h="choices "+(t[15]?"shown":"hidden"))},m(t,c){l(t,e,c),p&&p.m(e,null),s(e,n),f&&f.m(e,null),s(e,r),g&&g.m(e,null),s(e,o),v&&v.m(e,null),s(e,i),$&&$.m(e,null),s(e,u),w&&w.m(e,null)},p(t,s){t[1]?p?p.p(t,s):(p=N(t),p.c(),p.m(e,n)):p&&(p.d(1),p=null),t[2]?f?f.p(t,s):(f=R(t),f.c(),f.m(e,r)):f&&(f.d(1),f=null),t[6]?g?g.p(t,s):(g=j(t),g.c(),g.m(e,o)):g&&(g.d(1),g=null),t[3]?v?v.p(t,s):(v=H(t),v.c(),v.m(e,i)):v&&(v.d(1),v=null),t[4]?$?$.p(t,s):($=D(t),$.c(),$.m(e,u)):$&&($.d(1),$=null),t[5]?w?w.p(t,s):(w=U(t),w.c(),w.m(e,null)):w&&(w.d(1),w=null),32768&s&&h!==(h="choices "+(t[15]?"shown":"hidden"))&&m(e,"class",h)},d(t){t&&c(e),p&&p.d(),f&&f.d(),g&&g.d(),v&&v.d(),$&&$.d(),w&&w.d()}}}function N(t){let e,n,r,o;return{c(){e=a("li"),n=a("a"),r=u("svg"),o=u("path"),m(o,"d","M34.1,17.1C34.1,7.6,26.5,0,17.1,0S0,7.6,0,17.1c0,8.5,6.2,15.6,14.4,16.9V22h-4.3v-4.9h4.3v-3.8c0-4.3,2.5-6.6,6.4-6.6\n                c1.9,0,3.8,0.3,3.8,0.3v4.2h-2.2c-2.1,0-2.8,1.3-2.8,2.7v3.2h4.7L23.7,22h-4v11.9C27.9,32.6,34.1,25.6,34.1,17.1z"),m(r,"version","1.1"),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"viewBox","0 0 35 35"),m(n,"href",t[9]),m(n,"target","_blank")},m(t,i){l(t,e,i),s(e,n),s(n,r),s(r,o)},p(t,e){512&e&&m(n,"href",t[9])},d(t){t&&c(e)}}}function R(t){let e,n,r,o;return{c(){e=a("li"),n=a("a"),r=u("svg"),o=u("path"),m(o,"d","M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609\n                1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127\n                1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515\n                2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29\n                2.213-.669 5.108 1.523\n                6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415\n                3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379\n                4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768\n                2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695\n                1.797-1.562 2.457-2.549z"),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"viewBox","0 0 24 24"),m(n,"href",t[10]),m(n,"target","_blank")},m(t,i){l(t,e,i),s(e,n),s(n,r),s(r,o)},p(t,e){1024&e&&m(n,"href",t[10])},d(t){t&&c(e)}}}function j(t){let e,n,r,o;return{c(){e=a("li"),n=a("a"),r=u("svg"),o=u("path"),m(o,"d","M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5\n                5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11\n                19h-3v-11h3v11zm-1.5-12.268c-.966\n                0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75\n                1.764-.783 1.764-1.75 1.764zm13.5\n                12.268h-3v-5.604c0-3.368-4-3.113-4\n                0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"viewBox","0 0 24 24"),m(n,"href",t[11]),m(n,"target","_blank")},m(t,i){l(t,e,i),s(e,n),s(n,r),s(r,o)},p(t,e){2048&e&&m(n,"href",t[11])},d(t){t&&c(e)}}}function H(t){let e,n,r,o;return{c(){e=a("li"),n=a("a"),r=u("svg"),o=u("path"),m(o,"d","M.057\n                24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556\n                5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488\n                2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338\n                11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305\n                1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0\n                9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452\n                0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999\n                3.648\n                3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941\n                1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198\n                0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213\n                3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489\n                1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719\n                2.006-1.413.248-.695.248-1.29.173-1.414z"),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"viewBox","0 0 24 24"),m(n,"href",t[12]),m(n,"target","_blank")},m(t,i){l(t,e,i),s(e,n),s(n,r),s(r,o)},p(t,e){4096&e&&m(n,"href",t[12])},d(t){t&&c(e)}}}function D(t){let e,n,r,o,i,h,f,g=t[16]&&O(t);return{c(){e=a("li"),n=a("a"),g&&g.c(),r=d(),o=u("svg"),i=u("path"),m(i,"d","M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591\n                6.589-.745 8.445 2.069l-2.246\n                2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304\n                4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307\n                4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929\n                2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582\n                0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096\n                2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0\n                1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44\n                1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246\n                2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704\n                1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648\n                1.444-1.087l4.304-4.305c2.512-2.511\n                2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"),m(o,"xmlns","http://www.w3.org/2000/svg"),m(o,"viewBox","0 0 24 24"),m(n,"href","#copy-link-to-clipboard"),m(n,"target","_blank")},m(c,a){l(c,e,a),s(e,n),g&&g.m(n,null),s(n,r),s(n,o),s(o,i),h||(f=p(n,"click",t[18]),h=!0)},p(t,e){t[16]?g?g.p(t,e):(g=O(t),g.c(),g.m(n,r)):g&&(g.d(1),g=null)},d(t){t&&c(e),g&&g.d(),h=!1,f()}}}function O(t){let e,n,r=K.textCopyI18n(t[0],t[8])+"";return{c(){e=a("div"),n=h(r),m(e,"class","copy-to-clipboard-tip")},m(t,r){l(t,e,r),s(e,n)},p(t,e){257&e&&r!==(r=K.textCopyI18n(t[0],t[8])+"")&&f(n,r)},d(t){t&&c(e)}}}function U(t){let e,n,r,o;return{c(){e=a("li"),n=a("a"),r=u("svg"),o=u("path"),m(o,"d","M19 9.062s-5.188-.333-7 1.938c2-4.896 7-5.938 7-5.938v-2l5\n                4-5 4.019v-2.019zm-18.974 14.938h23.947l-11.973-11.607-11.974\n                11.607zm1.673-14l10.291-7.488 3.053 2.218c.712-.459 1.391-.805\n                1.953-1.054l-5.006-3.637-11.99\n                8.725v12.476l7.352-7.127-5.653-4.113zm15.753 4.892l6.548\n                6.348v-11.612l-6.548 5.264z"),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"viewBox","0 0 24 24"),m(n,"href",t[13]),m(n,"target","_blank")},m(t,i){l(t,e,i),s(e,n),s(n,r),s(r,o)},p(t,e){8192&e&&m(n,"href",t[13])},d(t){t&&c(e)}}}function q(e){let n,r,o,i,u,g,v,$,w=K.textShare(e[0],e[7])+"";function x(t,e){return t[14]&&t[15]?L:A}let b=x(e),y=b(e),k=e[14]&&I(e);return{c(){n=a("div"),r=a("a"),y.c(),o=d(),i=a("span"),u=h(w),g=d(),k&&k.c(),this.c=t,m(i,"class","title"),m(r,"href","#share"),m(r,"class","opener"),m(n,"class","sharer")},m(t,c){l(t,n,c),s(n,r),y.m(r,null),s(r,o),s(r,i),s(i,u),s(n,g),k&&k.m(n,null),v||($=p(r,"click",e[17]),v=!0)},p(t,[e]){b!==(b=x(t))&&(y.d(1),y=b(t),y&&(y.c(),y.m(r,o))),129&e&&w!==(w=K.textShare(t[0],t[7])+"")&&f(u,w),t[14]?k?k.p(t,e):(k=I(t),k.c(),k.m(n,null)):k&&(k.d(1),k=null)},i:t,o:t,d(t){t&&c(n),y.d(),k&&k.d(),v=!1,$()}}}"function"==typeof HTMLElement&&(T=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});const J=t=>(e,n=null)=>null!==n?n:e in t?t[e]:t.en,K={textShare:J({fi:"Jaa",en:"Share"}),textCopyI18n:J({fi:"Kopiotu leikepöydälle",en:"Copied to clipboard"})};function P(t,e,n){var r,o;let i,s,l,c,a,u,h,{lang:d=(null!==(o=null===(r=null===document||void 0===document?void 0:document.documentElement)||void 0===r?void 0:r.lang)&&void 0!==o?o:"en")}=e,{shareurl:p=window.location.href}=e,{sharetitle:m=document.title}=e,{usefacebook:f=!0}=e,{usetwitter:g=!0}=e,{usewhatsapp:v=!0}=e,{uselink:$=!0}=e,{useemail:w=!0}=e,{uselinkedin:x=!1}=e,{textshare:b=null}=e,{textcopy:y=null}=e,k=!1,z=!1,_=!1;return t.$set=t=>{"lang"in t&&n(0,d=t.lang),"shareurl"in t&&n(19,p=t.shareurl),"sharetitle"in t&&n(20,m=t.sharetitle),"usefacebook"in t&&n(1,f=t.usefacebook),"usetwitter"in t&&n(2,g=t.usetwitter),"usewhatsapp"in t&&n(3,v=t.usewhatsapp),"uselink"in t&&n(4,$=t.uselink),"useemail"in t&&n(5,w=t.useemail),"uselinkedin"in t&&n(6,x=t.uselinkedin),"textshare"in t&&n(7,b=t.textshare),"textcopy"in t&&n(8,y=t.textcopy)},t.$$.update=()=>{524288&t.$$.dirty&&n(23,i=encodeURIComponent(p)),1048576&t.$$.dirty&&n(24,s=encodeURIComponent(m)),8388608&t.$$.dirty&&n(9,l="https://www.facebook.com/sharer.php?u="+i),25165824&t.$$.dirty&&n(10,c=`https://twitter.com/intent/tweet?text=${s}&url=${i}`),25165824&t.$$.dirty&&n(11,a=`https://www.linkedin.com/shareArticle?mini=true&url=${i}&title=${s}&summary=&source=LinkedIn`),8388608&t.$$.dirty&&n(12,u="whatsapp://send?text="+i),25165824&t.$$.dirty&&n(13,h=`mailto:?subject=${s}&body=${i}`)},[d,f,g,v,$,w,x,b,y,l,c,a,u,h,k,z,_,function(t){if(t.preventDefault(),k)return n(15,z=!1),void setTimeout(()=>{n(14,k=!1)},250);n(14,k=!k),setTimeout(()=>{n(15,z=k)},0)},function(t){t.preventDefault(),function(t,e){var n=document.createElement("textarea");n.value=t,e.appendChild(n),n.select(),document.execCommand("copy"),e.removeChild(n)}(p,t.currentTarget),n(16,_=!0),setTimeout(()=>{n(16,_=!1)},1500)},p,m]}customElements.define("oksidi-sharer",class extends T{constructor(t){super(),this.shadowRoot.innerHTML='<style>.sharer{color:var(--color, #000000);line-height:var(--share-btn-size, 1.5em);position:relative}.opener{display:inline-block;text-decoration:none;color:var(--color, #000000);transition:color 0.21s}.opener>svg{transition:fill 0.21s;width:var(--share-btn-size, 1.5em);height:var(--share-btn-size, 1.5em);fill:var(--color, #000000);display:inline-block;vertical-align:middle;position:relative;top:-0.08em}.opener:hover{color:var(--hover-color, gray)}.opener:hover svg{fill:var(--hover-color, gray)}.choices{list-style:none;padding:0 0 0 0.5em;margin:0;display:inline-block;position:relative;top:-0.1em}.choices li{display:inline-block;transition:transform 0.21s, opacity 0.21s;opacity:0;padding-right:0.5em}.choices>li:nth-child(1){transform:translateX(-1em)}.choices>li:nth-child(2){transform:translateX(-2em)}.choices>li:nth-child(3){transform:translateX(-3em)}.choices>li:nth-child(4){transform:translateX(-4em)}.choices>li:nth-child(5){transform:translateX(-5em)}.choices>li:nth-child(6){transform:translateX(-6em)}.choices>li:nth-child(7){transform:translateX(-7em)}.choices>li:nth-child(8){transform:translateX(-8em)}.choices>li:nth-child(9){transform:translateX(-9em)}.choices>li:nth-child(10){transform:translateX(-10em)}.choices>li:nth-child(11){transform:translateX(-11em)}.choices a{display:block}.choices a:hover svg{fill:var(--hover-color, gray)}.choices svg{width:var(--share-icon-size, 1.2em);height:var(--share-icon-size, 1.2em);display:inline-block;vertical-align:middle;transition:fill 0.21s;fill:var(--color, #000000)}.choices.shown>li{transform:translateX(0);opacity:1}.copy-to-clipboard-tip{line-height:1.2;padding:0.4em;position:absolute;font:var(--tooltip-font, 80% sans-serif);text-transform:var(--tooltip-text-transform, uppercase);background:var(--tooltip-background-color, var(--color, #000000));color:var(--tooltip-color, #ffffff);text-align:center;left:-3.5em;right:-3.5em;bottom:100%;display:block}.copy-to-clipboard-tip:before{content:"";position:absolute;display:block;left:50%;width:0;height:0;top:100%;transform:translateX(-50%);border-width:0.5em;border-style:solid;border-color:var(--tooltip-background-color, var(--color, #000000)) transparent transparent transparent}</style>',S(this,{target:this.shadowRoot},P,q,i,{lang:0,shareurl:19,sharetitle:20,usefacebook:1,usetwitter:2,usewhatsapp:3,uselink:4,useemail:5,uselinkedin:6,textshare:7,textcopy:8}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),E()))}static get observedAttributes(){return["lang","shareurl","sharetitle","usefacebook","usetwitter","usewhatsapp","uselink","useemail","uselinkedin","textshare","textcopy"]}get lang(){return this.$$.ctx[0]}set lang(t){this.$set({lang:t}),E()}get shareurl(){return this.$$.ctx[19]}set shareurl(t){this.$set({shareurl:t}),E()}get sharetitle(){return this.$$.ctx[20]}set sharetitle(t){this.$set({sharetitle:t}),E()}get usefacebook(){return this.$$.ctx[1]}set usefacebook(t){this.$set({usefacebook:t}),E()}get usetwitter(){return this.$$.ctx[2]}set usetwitter(t){this.$set({usetwitter:t}),E()}get usewhatsapp(){return this.$$.ctx[3]}set usewhatsapp(t){this.$set({usewhatsapp:t}),E()}get uselink(){return this.$$.ctx[4]}set uselink(t){this.$set({uselink:t}),E()}get useemail(){return this.$$.ctx[5]}set useemail(t){this.$set({useemail:t}),E()}get uselinkedin(){return this.$$.ctx[6]}set uselinkedin(t){this.$set({uselinkedin:t}),E()}get textshare(){return this.$$.ctx[7]}set textshare(t){this.$set({textshare:t}),E()}get textcopy(){return this.$$.ctx[8]}set textcopy(t){this.$set({textcopy:t}),E()}})}();
