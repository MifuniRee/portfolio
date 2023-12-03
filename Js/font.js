window.FontAwesomeKitConfig={id:92031297,version:"6.5.1",token:"00f08a5e4b",method:"css",baseUrl:"https://ka-f.fontawesome.com",license:"pro",asyncLoading:{enabled:!1},autoA11y:{enabled:!0},baseUrlKit:"https://kit.fontawesome.com",detectConflictsUntil:null,iconUploads:{},minify:{enabled:!0},v4FontFaceShim:{enabled:!0},v4shim:{enabled:!0},v5FontFaceShim:{enabled:!0}},function(a){"function"==typeof define&&define.amd?define("kit-loader",a):a()}((function(){"use strict";function t(a,c){var u=Object.keys(a);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);c&&(f=f.filter((function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable}))),u.push.apply(u,f)}return u}function e(a){for(var c=1;c<arguments.length;c++){var u=null!=arguments[c]?arguments[c]:{};c%2?t(Object(u),!0).forEach((function(c){r(a,c,u[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(u)):t(Object(u)).forEach((function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(u,c))}))}return a}function n(a){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function r(a,c,u){return(c=function(a){var c=function(a,c){if("object"!=typeof a||null===a)return a;var u=a[Symbol.toPrimitive];if(void 0!==u){var f=u.call(a,"string");if("object"!=typeof f)return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}(a);return"symbol"==typeof c?c:String(c)}(c))in a?Object.defineProperty(a,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[c]=u,a}function o(a,c){return function(a){if(Array.isArray(a))return a}(a)||function(a,c){var u=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=u){var f,l,m,p,v=[],C=!0,D=!1;try{if(m=(u=u.call(a)).next,0===c){if(Object(u)!==u)return;C=!1}else for(;!(C=(f=m.call(u)).done)&&(v.push(f.value),v.length!==c);C=!0);}catch(a){D=!0,l=a}finally{try{if(!C&&null!=u.return&&(p=u.return(),Object(p)!==p))return}finally{if(D)throw l}}return v}}(a,c)||function(a,c){if(a){if("string"==typeof a)return i(a,c);var u=Object.prototype.toString.call(a).slice(8,-1);return"Object"===u&&a.constructor&&(u=a.constructor.name),"Map"===u||"Set"===u?Array.from(a):"Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?i(a,c):void 0}}(a,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(a,c){(null==c||c>a.length)&&(c=a.length);for(var u=0,f=new Array(c);u<c;u++)f[u]=a[u];return f}var a="sharp",c=["classic","duotone","sharp"],u=["fak","fa-kit","fakd","fa-kit-duotone"],f=["fa","fas","fa-solid","far","fa-regular","fal","fa-light","fat","fa-thin","fad","fa-duotone","fab","fa-brands","fass","fasr","fasl","fast"];function s(a,c){var u=c&&c.addOn||"",f=c&&c.baseFilename||a.license+u,l=c&&c.minify?".min":"",m=c&&c.fileSuffix||a.method,p=c&&c.subdir||a.method;return a.baseUrl+"/releases/"+("latest"===a.version?"latest":"v".concat(a.version))+"/"+p+"/"+f+l+"."+m}function d(a,c){var u=c||["fa"],f="."+Array.prototype.join.call(u,",."),l=a.querySelectorAll(f);Array.prototype.forEach.call(l,(function(c){var u=c.getAttribute("title");c.setAttribute("aria-hidden","true");var f=!c.nextElementSibling||!c.nextElementSibling.classList.contains("sr-only");if(u&&f){var l=a.createElement("span");l.innerHTML=u,l.classList.add("sr-only"),c.parentNode.insertBefore(l,c.nextSibling)}}))}var l,h=function(){},m="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,p="undefined"==typeof setImmediate?setTimeout:setImmediate,v=[];function b(){for(var a=0;a<v.length;a++)v[a][0](v[a][1]);v=[],l=!1}function y(a,c){v.push([a,c]),l||(l=!0,p(b,0))}function g(a){var c=a.owner,u=c._state,f=c._data,l=a[u],m=a.then;if("function"==typeof l){u="fulfilled";try{f=l(f)}catch(a){O(m,a)}}w(m,f)||("fulfilled"===u&&A(m,f),"rejected"===u&&O(m,f))}function w(a,c){var u;try{if(a===c)throw new TypeError("A promises callback cannot return that same promise.");if(c&&("function"==typeof c||"object"===n(c))){var f=c.then;if("function"==typeof f)return f.call(c,(function(f){u||(u=!0,c===f?S(a,f):A(a,f))}),(function(c){u||(u=!0,O(a,c))})),!0}}catch(c){return u||O(a,c),!0}return!1}function A(a,c){a!==c&&w(a,c)||S(a,c)}function S(a,c){"pending"===a._state&&(a._state="settled",a._data=c,y(E,a))}function O(a,c){"pending"===a._state&&(a._state="settled",a._data=c,y(P,a))}function j(a){a._then=a._then.forEach(g)}function E(a){a._state="fulfilled",j(a)}function P(a){a._state="rejected",j(a),!a._handled&&m&&global.process.emit("unhandledRejection",a._data,a)}function _(a){global.process.emit("rejectionHandled",a)}function F(a){if("function"!=typeof a)throw new TypeError("Promise resolver "+a+" is not a function");if(this instanceof F==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(a,c){function n(a){O(c,a)}try{a((function(a){A(c,a)}),n)}catch(a){n(a)}}(a,this)}F.prototype={constructor:F,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(a,c){var u={owner:this,then:new this.constructor(h),fulfilled:a,rejected:c};return!c&&!a||this._handled||(this._handled=!0,"rejected"===this._state&&m&&y(_,this)),"fulfilled"===this._state||"rejected"===this._state?y(g,u):this._then.push(u),u.then},catch:function(a){return this.then(null,a)}},F.all=function(a){if(!Array.isArray(a))throw new TypeError("You must pass an array to Promise.all().");return new F((function(c,u){var f=[],l=0;function i(a){return l++,function(u){f[a]=u,--l||c(f)}}for(var m,p=0;p<a.length;p++)(m=a[p])&&"function"==typeof m.then?m.then(i(p),u):f[p]=m;l||c(f)}))},F.race=function(a){if(!Array.isArray(a))throw new TypeError("You must pass an array to Promise.race().");return new F((function(c,u){for(var f,l=0;l<a.length;l++)(f=a[l])&&"function"==typeof f.then?f.then(c,u):c(f)}))},F.resolve=function(a){return a&&"object"===n(a)&&a.constructor===F?a:new F((function(c){c(a)}))},F.reject=function(a){return new F((function(c,u){u(a)}))};var C="function"==typeof Promise?Promise:F;function I(a,c){var u=c.fetch,f=c.XMLHttpRequest,l=c.token,m=a;return l&&!function(a){return a.indexOf("kit-upload.css")>-1}(a)&&("URLSearchParams"in window?(m=new URL(a)).searchParams.set("token",l):m=m+"?token="+encodeURIComponent(l)),m=m.toString(),new C((function(a,c){if("function"==typeof u)u(m,{mode:"cors",cache:"default"}).then((function(a){if(a.ok)return a.text();throw new Error("")})).then((function(c){a(c)})).catch(c);else if("function"==typeof f){var l=new f;l.addEventListener("loadend",(function(){this.responseText?a(this.responseText):c(new Error(""))})),["abort","error","timeout"].map((function(a){l.addEventListener(a,(function(){c(new Error(""))}))})),l.open("GET",m),l.send()}else c(new Error(""))}))}function U(a,c,u){var f=a;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(a,u){return"".concat(u).concat(c)}],[/(url\("?)\.\.\/webfonts/g,function(a,f){return"".concat(f).concat(c,"/releases/v").concat(u,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(a,u){return"".concat(u).concat(c)}]].forEach((function(a){var c=o(a,2),u=c[0],l=c[1];f=f.replace(u,l)})),f}function k(a,l){var m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},p=l.document||p,v=d.bind(d,p,[].concat(f,u,c.map((function(a){return"fa-".concat(a)}))));a.autoA11y.enabled&&m(v);var D=a.subsetPath&&a.baseUrl+"/"+a.subsetPath,R=[{id:"fa-main",addOn:void 0,url:D}];if(a.v4shim&&a.v4shim.enabled&&R.push({id:"fa-v4-shims",addOn:"-v4-shims"}),a.v5FontFaceShim&&a.v5FontFaceShim.enabled&&R.push({id:"fa-v5-font-face",addOn:"-v5-font-face"}),a.v4FontFaceShim&&a.v4FontFaceShim.enabled&&R.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),!D&&a.customIconsCssPath){var K=(a.customIconsCssPath.indexOf("kit-upload.css")>-1?a.baseUrlKit:a.baseUrl)+"/"+a.customIconsCssPath;R.push({id:"fa-kit-upload",url:K})}var H=R.map((function(c){return new C((function(u,f){var m=c.url||s(a,{addOn:c.addOn,minify:a.minify.enabled}),p={id:c.id},v=a.subset?p:e(e(e({},l),p),{},{baseUrl:a.baseUrl,version:a.version,id:c.id,contentFilter:function(a,c){return U(a,c.baseUrl,c.version)}});I(m,l).then((function(a){u(function T(a,c){var u=c.contentFilter||function(a,c){return a},f=document.createElement("style"),l=document.createTextNode(u(a,c));return f.appendChild(l),f.media="all",c.id&&f.setAttribute("id",c.id),c&&c.detectingConflicts&&c.detectionIgnoreAttr&&f.setAttributeNode(document.createAttribute(c.detectionIgnoreAttr)),f}(a,v))})).catch(f)}))}));return C.all(H)}function L(a,c){c.autoA11y=a.autoA11y.enabled,"pro"===a.license&&(c.autoFetchSvg=!0,c.fetchSvgFrom=a.baseUrl+"/releases/"+("latest"===a.version?"latest":"v".concat(a.version))+"/svgs",c.fetchUploadedSvgFrom=a.uploadsUrl);var u=[];return a.v4shim.enabled&&u.push(new C((function(u,f){I(s(a,{addOn:"-v4-shims",minify:a.minify.enabled}),c).then((function(a){u(x(a,e(e({},c),{},{id:"fa-v4-shims"})))})).catch(f)}))),u.push(new C((function(u,f){I(a.subsetPath&&a.baseUrl+"/"+a.subsetPath||s(a,{minify:a.minify.enabled}),c).then((function(a){var f=x(a,e(e({},c),{},{id:"fa-main"}));u(function(a,c){var u=c&&void 0!==c.autoFetchSvg?c.autoFetchSvg:void 0,f=c&&void 0!==c.autoA11y?c.autoA11y:void 0;return void 0!==f&&a.setAttribute("data-auto-a11y",f?"true":"false"),u&&(a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),a.setAttribute("data-fetch-svg-from",c.fetchSvgFrom),a.setAttribute("data-fetch-uploaded-svg-from",c.fetchUploadedSvgFrom)),a}(f,c))})).catch(f)}))),C.all(u)}function x(a,c){var u=document.createElement("SCRIPT"),f=document.createTextNode(a);return u.appendChild(f),u.referrerPolicy="strict-origin",c.id&&u.setAttribute("id",c.id),c&&c.detectingConflicts&&c.detectionIgnoreAttr&&u.setAttributeNode(document.createAttribute(c.detectionIgnoreAttr)),u}function M(a){var c,u=[],f=document,l=(f.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(f.readyState);l||f.addEventListener("DOMContentLoaded",c=function(){for(f.removeEventListener("DOMContentLoaded",c),l=1;c=u.shift();)c()}),l?setTimeout(a,0):u.push(a)}try{if(window.FontAwesomeKitConfig){var D=window.FontAwesomeKitConfig,R={detectingConflicts:D.detectConflictsUntil&&new Date<=new Date(D.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:D.token,XMLHttpRequest:window.XMLHttpRequest,document:document},K=document.currentScript,H=K?K.parentElement:document.head;(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"js"===a.method?L(a,c):"css"===a.method?k(a,c,(function(a){M(a),function N(a){"undefined"!=typeof MutationObserver&&new MutationObserver(a).observe(document,{childList:!0,subtree:!0})}(a)})):void 0})(D,R).then((function(a){a.map((function(a){try{H.insertBefore(a,K?K.nextSibling:null)}catch(c){H.appendChild(a)}})),R.detectingConflicts&&K&&M((function(){K.setAttributeNode(document.createAttribute(R.detectionIgnoreAttr));var a=function(a,c){var u=document.createElement("script");return c&&c.detectionIgnoreAttr&&u.setAttributeNode(document.createAttribute(c.detectionIgnoreAttr)),u.src=s(a,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:a.minify.enabled}),u}(D,R);document.body.appendChild(a)}))})).catch((function(a){console.error("".concat("Font Awesome Kit:"," ").concat(a))}))}}catch(a){console.error("".concat("Font Awesome Kit:"," ").concat(a))}}));