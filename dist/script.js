!function(e,t){"use strict";"function"==typeof define&&define.amd?define("tinysort",function(){return t}):e.tinysort=t}(this,function(){"use strict";function e(e,t){for(var r,n=e.length,o=n;o--;)r=n-o-1,t(e[r],r)}function t(e,t,r){for(var o in t)(r||e[o]===n)&&(e[o]=t[o]);return e}function r(e,t,r){d.push({prepare:e,sort:t,sortBy:r})}var n,o=!1,a=null,s=window,l=s.document,c=parseFloat,i=/(-?\d+\.?\d*)\s*$/g,u=/(\d+\.?\d*)\s*$/g,d=[],f=0,h=0,g=String.fromCharCode(4095),p={selector:a,order:"asc",attr:a,data:a,useVal:o,place:"org",returns:o,cases:o,natural:o,forceStrings:o,ignoreDashes:o,sortFunction:a,useFlex:o,emptyEnd:o};return s.Element&&function(e){e.matchesSelector=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,r=(t.parentNode||t.document).querySelectorAll(e),n=-1;r[++n]&&r[n]!=t;);return!!r[n]}}(Element.prototype),t(r,{loop:e}),t(function(r,s){function m(e){var r=!!e.selector,n=r&&":"===e.selector[0],o=t(e||{},p);D.push(t({hasSelector:r,hasAttr:!(o.attr===a||""===o.attr),hasData:o.data!==a,hasFilter:n,sortReturnNumber:"asc"===o.order?1:-1},o))}function v(e,t,r){for(var n=r(e.toString()),o=r(t.toString()),a=0;n[a]&&o[a];a++)if(n[a]!==o[a]){var s=Number(n[a]),l=Number(o[a]);return s==n[a]&&l==o[a]?s-l:n[a]>o[a]?1:-1}return n.length-o.length}function y(e){for(var t,r,n=[],o=0,a=-1,s=0;t=(r=e.charAt(o++)).charCodeAt(0);){var l=46==t||t>=48&&57>=t;l!==s&&(n[++a]="",s=l),n[a]+=r}return n}function N(){return j.forEach(function(e){w.appendChild(e.elm)}),w}function S(e){var t=e.elm,r=l.createElement("div");return e.ghost=r,t.parentNode.insertBefore(r,t),e}function b(e,t){var r=e.ghost,n=r.parentNode;n.insertBefore(t,r),n.removeChild(r),delete e.ghost}function x(e,t){var r,n=e.elm;return t.selector&&(t.hasFilter?n.matchesSelector(t.selector)||(n=a):n=n.querySelector(t.selector)),t.hasAttr?r=n.getAttribute(t.attr):t.useVal?r=n.value||n.getAttribute("value"):t.hasData?r=n.getAttribute("data-"+t.data):n&&(r=n.textContent),C(r)&&(t.cases||(r=r.toLowerCase()),r=r.replace(/\s+/g," ")),null===r&&(r=g),r}function C(e){return"string"==typeof e}C(r)&&(r=l.querySelectorAll(r)),0===r.length&&console.warn("No elements to sort");var A,F,w=l.createDocumentFragment(),E=[],j=[],q=[],D=[],M=!0,k=r.length&&r[0].parentNode,B=k.rootNode!==document,z=r.length&&(s===n||!1!==s.useFlex)&&!B&&-1!==getComputedStyle(k,null).display.indexOf("flex");return function(){0===arguments.length?m({}):e(arguments,function(e){m(C(e)?{selector:e}:e)}),f=D.length}.apply(a,Array.prototype.slice.call(arguments,1)),e(r,function(e,t){F?F!==e.parentNode&&(M=!1):F=e.parentNode;var r=D[0],n=r.hasFilter,o=r.selector,a=!o||n&&e.matchesSelector(o)||o&&e.querySelector(o)?j:q,s={elm:e,pos:t,posn:a.length};E.push(s),a.push(s)}),A=j.slice(0),j.sort(function(t,r){var a=0;for(0!==h&&(h=0);0===a&&f>h;){var s=D[h],l=s.ignoreDashes?u:i;if(e(d,function(e){var t=e.prepare;t&&t(s)}),s.sortFunction)a=s.sortFunction(t,r);else if("rand"==s.order)a=Math.random()<.5?1:-1;else{var g=o,p=x(t,s),m=x(r,s),N=""===p||p===n,S=""===m||m===n;if(p===m)a=0;else if(s.emptyEnd&&(N||S))a=N&&S?0:N?1:-1;else{if(!s.forceStrings){var b=C(p)?p&&p.match(l):o,A=C(m)?m&&m.match(l):o;b&&A&&p.substr(0,p.length-b[0].length)==m.substr(0,m.length-A[0].length)&&(g=!o,p=c(b[0]),m=c(A[0]))}a=p===n||m===n?0:s.natural&&(isNaN(p)||isNaN(m))?v(p,m,y):m>p?-1:p>m?1:0}}e(d,function(e){var t=e.sort;t&&(a=t(s,g,p,m,a))}),0==(a*=s.sortReturnNumber)&&h++}return 0===a&&(a=t.pos>r.pos?1:-1),a}),function(){var e=j.length===E.length;if(M&&e)z?j.forEach(function(e,t){e.elm.style.order=t}):F?F.appendChild(N()):console.warn("parentNode has been removed");else{var t=D[0].place,r="start"===t,n="end"===t,o="first"===t,a="last"===t;if("org"===t)j.forEach(S),j.forEach(function(e,t){b(A[t],e.elm)});else if(r||n){var s=A[r?0:A.length-1],l=s&&s.elm.parentNode,c=l&&(r&&l.firstChild||l.lastChild);c&&(c!==s.elm&&(s={elm:c}),S(s),n&&l.appendChild(s.ghost),b(s,N()))}else(o||a)&&b(S(A[o?0:A.length-1]),N())}}(),j.map(function(e){return e.elm})},{plugin:r,defaults:p})}()),jQuery(document).ready(function(e){function t(){var t=e("#subNav").height(),r=e("#header").height();e("#catalog-left-nav").css({"margin-top":t+"px"}),e("#skilljar-content").css({"padding-top":t+r+"px"}),e("#lpLeftNavBackground").css({top:r+"px",left:0})}var r=e("#subNav").detach();e(".sj-page-catalog, .sj-page-curriculum").length>0&&(e("#main-container #header").after(r),t(),e(window).resize(t)),r=null}),jQuery(document).ready(function(e){function t(t){var r=e(t).parent().children(),n=r.eq((e(t).index()+1)%r.length);return e(t).hide(),e(n).show(),n}function r(e){"asc"==e?tinysort("#catalog-courses>a",{selector:".coursebox-text",order:"asc"}):"desc"==e?tinysort("#catalog-courses>a",{selector:".coursebox-text",order:"desc"}):"default"==e&&tinysort("#catalog-courses>a",{data:"order",order:"asc"})}if(0!=e(".sj-page-catalog").length){var n=e("#tileSort").detach();e("#main-container #catalog-content #catalog-courses").before(n),e(n).find("li").each(function(t,r){e(this).data("sort-order-default",t)}),e(n).click(function(n){var o=e(this).find("li:visible");o=t(o),r(e(o).data("sort"))})}else e("#tileSort").remove()});