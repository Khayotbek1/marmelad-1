/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-pagevisibility-svgclippaths-webp-webpalpha-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function i(){var e,n,t,i,o,a,A;for(var s in w)if(w.hasOwnProperty(s)){if(e=[],n=w[s],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)a=e[o],A=a.split("."),1===A.length?Modernizr[A[0]]=i:(!Modernizr[A[0]]||Modernizr[A[0]]instanceof Boolean||(Modernizr[A[0]]=new Boolean(Modernizr[A[0]])),Modernizr[A[0]][A[1]]=i),v.push((i?"":"no-")+A.join("-"))}}function o(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?b.className.baseVal=n:b.className=n)}function a(e,n){if("object"==typeof e)for(var t in e)B(e,t)&&a(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),o([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function A(e,n){return!!~(""+e).indexOf(n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var i;for(var o in e)if(e[o]in n)return t===!1?e[o]:(i=n[e[o]],r(i,"function")?u(i,t||n):i);return!1}function c(){var e=n.body;return e||(e=l(_?"svg":"body"),e.fake=!0),e}function d(e,t,r,i){var o,a,A,s,f="modernizr",u=l("div"),p=c();if(parseInt(r,10))for(;r--;)A=l("div"),A.id=i?i[r]:f+(r+1),u.appendChild(A);return o=l("style"),o.type="text/css",o.id="s"+f,(p.fake?p:u).appendChild(o),p.appendChild(u),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),u.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",s=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),a=t(u,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=s,b.offsetHeight):u.parentNode.removeChild(u),!!a}function h(n,r){var i=n.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(f(n[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+f(n[i])+":"+r+")");return o=o.join(" or "),d("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function g(e,n,i,o){function a(){u&&(delete E.style,delete E.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var f=h(e,i);if(!r(f,"undefined"))return f}for(var u,p,c,d,g,m=["modernizr","tspan","samp"];!E.style&&m.length;)u=!0,E.modElem=l(m.shift()),E.style=E.modElem.style;for(c=e.length,p=0;c>p;p++)if(d=e[p],g=E.style[d],A(d,"-")&&(d=s(d)),E.style[d]!==t){if(o||r(i,"undefined"))return a(),"pfx"==n?d:!0;try{E.style[d]=i}catch(v){}if(E.style[d]!=g)return a(),"pfx"==n?d:!0}return a(),!1}function m(e,n,t,i,o){var a=e.charAt(0).toUpperCase()+e.slice(1),A=(e+" "+x.join(a+" ")+a).split(" ");return r(n,"string")||r(n,"undefined")?g(A,n,i,o):(A=(e+" "+S.join(a+" ")+a).split(" "),p(A,n,t))}var v=[],w=[],y={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=y,Modernizr=new Modernizr;var b=n.documentElement,_="svg"===b.nodeName.toLowerCase(),C={}.toString;Modernizr.addTest("svgclippaths",function(){return!!n.createElementNS&&/SVGClipPath/.test(C.call(n.createElementNS("http://www.w3.org/2000/svg","clipPath")))});var B;!function(){var e={}.hasOwnProperty;B=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),y._l={},y.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},y._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){y.addTest=a}),Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){a("webpalpha",!1,{aliases:["webp-alpha"]})},e.onload=function(){a("webpalpha",1==e.width,{aliases:["webp-alpha"]})},e.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),Modernizr.addAsyncTest(function(){function e(e,n,t){function r(n){var r=n&&"load"===n.type?1==i.width:!1,o="webp"===e;a(e,o?new Boolean(r):r),t&&t(n)}var i=new Image;i.onerror=r,i.onload=r,i.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var r=0;r<n.length;r++)e(n[r].name,n[r].uri)})});var Q="Moz O ms Webkit",S=y._config.usePrefixes?Q.toLowerCase().split(" "):[];y._domPrefixes=S;var x=y._config.usePrefixes?Q.split(" "):[];y._cssomPrefixes=x;var U=function(n){var r,i=prefixes.length,o=e.CSSRule;if("undefined"==typeof o)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+n;for(var a=0;i>a;a++){var A=prefixes[a],s=A.toUpperCase()+"_"+r;if(s in o)return"@-"+A.toLowerCase()+"-"+n}return!1};y.atRule=U;var R={elem:l("modernizr")};Modernizr._q.push(function(){delete R.elem});var E={style:R.elem.style};Modernizr._q.unshift(function(){delete E.style}),y.testAllProps=m;var D=y.prefixed=function(e,n,t){return 0===e.indexOf("@")?U(e):(-1!=e.indexOf("-")&&(e=s(e)),n?m(e,n,t):m(e,"pfx"))};Modernizr.addTest("pagevisibility",!!D("hidden",n,!1)),i(),o(v),delete y.addTest,delete y.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
