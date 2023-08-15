/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@analytics/cookie-utils/dist/analytics-util-cookie.module.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@analytics/cookie-utils/dist/analytics-util-cookie.module.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COOKIE: () => (/* binding */ t),
/* harmony export */   getCookie: () => (/* binding */ r),
/* harmony export */   hasCookies: () => (/* binding */ a),
/* harmony export */   removeCookie: () => (/* binding */ u),
/* harmony export */   setCookie: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @analytics/global-storage-utils */ "./node_modules/@analytics/global-storage-utils/dist/analytics-util-global-storage.module.js");
var t="cookie",i=a(),r=d,c=d;function u(o){return i?d(o,"",-1):(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.remove)(o)}function a(){if(void 0!==i)return i;var e="cookiecookie";try{d(e,e),i=-1!==document.cookie.indexOf(e),u(e)}catch(e){i=!1}return i}function d(e,t,r,c,u,a){if("undefined"!=typeof window){var d=arguments.length>1;return!1===i&&(d?(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.set)(e,t):(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.get)(e)),d?document.cookie=e+"="+encodeURIComponent(t)+(r?"; expires="+new Date(+new Date+1e3*r).toUTCString()+(c?"; path="+c:"")+(u?"; domain="+u:"")+(a?"; secure":""):""):decodeURIComponent((("; "+document.cookie).split("; "+e+"=")[1]||"").split(";")[0])}}
//# sourceMappingURL=analytics-util-cookie.module.js.map


/***/ }),

/***/ "./node_modules/@analytics/core/dist/client/analytics-core.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@analytics/core/dist/client/analytics-core.module.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ Ve),
/* harmony export */   CONSTANTS: () => (/* binding */ j),
/* harmony export */   EVENTS: () => (/* binding */ q),
/* harmony export */   "default": () => (/* binding */ Ve),
/* harmony export */   init: () => (/* binding */ Ve)
/* harmony export */ });
/* harmony import */ var analytics_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! analytics-utils */ "./node_modules/analytics-utils/dist/analytics-utils.module.js");
/* harmony import */ var analytics_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! analytics-utils */ "./node_modules/dlv/dist/dlv.umd.js");
/* harmony import */ var analytics_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(analytics_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @analytics/global-storage-utils */ "./node_modules/@analytics/global-storage-utils/dist/analytics-util-global-storage.module.js");
/* harmony import */ var _analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @analytics/type-utils */ "./node_modules/@analytics/type-utils/dist/analytics-util-types.module.js");
function v(){return v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}var y="function",b="undefined",I="@@redux/"+Math.random().toString(36),w=/* #__PURE__ */function(){return typeof Symbol===y&&Symbol.observable||"@@observable"}(),E=" != "+y;function P(e,n,t){var r;if(typeof n===y&&typeof t===b&&(t=n,n=void 0),typeof t!==b){if(typeof t!==y)throw new Error("enhancer"+E);return t(P)(e,n)}if(typeof e!==y)throw new Error("reducer"+E);var i=e,a=n,o=[],u=o,c=!1;function s(){u===o&&(u=o.slice())}function f(){return a}function d(e){if(typeof e!==y)throw new Error("Listener"+E);var n=!0;return s(),u.push(e),function(){if(n){n=!1,s();var t=u.indexOf(e);u.splice(t,1)}}}function p(e){if(!(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(e))throw new Error("Act != obj");if(typeof e.type===b)throw new Error("ActType "+b);if(c)throw new Error("Dispatch in reducer");try{c=!0,a=i(a,e)}finally{c=!1}for(var n=o=u,t=0;t<n.length;t++)(0,n[t])();return e}return p({type:"@@redux/INIT"}),(r={dispatch:p,subscribe:d,getState:f,replaceReducer:function(e){if(typeof e!==y)throw new Error("next reducer"+E);i=e,p({type:"@@redux/INIT"})}})[w]=function(){var e,n=d;return(e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Observer != obj");function t(){e.next&&e.next(f())}return t(),{unsubscribe:n(t)}}})[w]=function(){return this},e},r}function S(e,n){var t=n&&n.type;return"action "+(t&&t.toString()||"?")+"reducer "+e+" returns "+b}function N(){var e=[].slice.call(arguments);return 0===e.length?function(e){return e}:1===e.length?e[0]:e.reduce(function(e,n){return function(){return e(n.apply(void 0,[].slice.call(arguments)))}})}function O(){var e=arguments;return function(n){return function(t,r,i){var a,o=n(t,r,i),u=o.dispatch,c={getState:o.getState,dispatch:function(e){return u(e)}};return a=[].slice.call(e).map(function(e){return e(c)}),v({},o,{dispatch:u=N.apply(void 0,a)(o.dispatch)})}}}var A=_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.PREFIX+"anon_id",_=_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.PREFIX+"user_id",x=_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.PREFIX+"user_traits",j={__proto__:null,ANON_ID:A,USER_ID:_,USER_TRAITS:x},k="userId",T="anonymousId",z=["bootstrap","params","campaign","initializeStart","initialize","initializeEnd","ready","resetStart","reset","resetEnd","pageStart","page","pageEnd","pageAborted","trackStart","track","trackEnd","trackAborted","identifyStart","identify","identifyEnd","identifyAborted","userIdChanged","registerPlugins","enablePlugin","disablePlugin","online","offline","setItemStart","setItem","setItemEnd","setItemAborted","removeItemStart","removeItem","removeItemEnd","removeItemAborted"],M=["name","EVENTS","config","loaded"],q=z.reduce(function(e,n){return e[n]=n,e},{registerPluginType:function(e){return"registerPlugin:"+e},pluginReadyType:function(e){return"ready:"+e}}),U=/^utm_/,V=/^an_prop_/,L=/^an_trait_/;function C(e){var n=e.storage.setItem;return function(t){return function(r){return function(i){if(i.type===q.bootstrap){var a=i.params,o=i.user,u=i.persistedUser,c=i.initialUser,s=u.userId===o.userId;u.anonymousId!==o.anonymousId&&n(A,o.anonymousId),s||n(_,o.userId),c.traits&&n(x,v({},s&&u.traits?u.traits:{},c.traits));var l=Object.keys(i.params);if(l.length){var f=a.an_uid,d=a.an_event,p=l.reduce(function(e,n){if(n.match(U)||n.match(/^(d|g)clid/)){var t=n.replace(U,"");e.campaign["campaign"===t?"name":t]=a[n]}return n.match(V)&&(e.props[n.replace(V,"")]=a[n]),n.match(L)&&(e.traits[n.replace(L,"")]=a[n]),e},{campaign:{},props:{},traits:{}});t.dispatch(v({type:q.params,raw:a},p,f?{userId:f}:{})),f&&setTimeout(function(){return e.identify(f,p.traits)},0),d&&setTimeout(function(){return e.track(d,p.props)},0),Object.keys(p.campaign).length&&t.dispatch({type:q.campaign,campaign:p.campaign})}}return r(i)}}}}function R(e){return function(n,t){if(void 0===n&&(n={}),void 0===t&&(t={}),t.type===q.setItemEnd){if(t.key===A)return v({},n,{anonymousId:t.value});if(t.key===_)return v({},n,{userId:t.value})}switch(t.type){case q.identify:return Object.assign({},n,{userId:t.userId,traits:v({},n.traits,t.traits)});case q.reset:return[_,A,x].forEach(function(n){e.removeItem(n)}),Object.assign({},n,{userId:null,anonymousId:null,traits:{}});default:return n}}}function $(e){return{userId:e.getItem(_),anonymousId:e.getItem(A),traits:e.getItem(x)}}var D=function(e){return _analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.PREFIX+"TEMP"+_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.PREFIX+e};function B(n){var t=n.storage,r=t.setItem,i=t.removeItem,a=t.getItem;return function(n){return function(t){return function(u){var c=u.userId,s=u.traits,l=u.options;if(u.type===q.reset&&([_,x,A].forEach(function(e){i(e)}),[k,T,"traits"].forEach(function(e){(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_1__.remove)(D(e))})),u.type===q.identify){a(A)||r(A,(0,analytics_utils__WEBPACK_IMPORTED_MODULE_2__.uuid)());var f=a(_),d=a(x)||{};f&&f!==c&&n.dispatch({type:q.userIdChanged,old:{userId:f,traits:d},new:{userId:c,traits:s},options:l}),c&&r(_,c),s&&r(x,v({},d,s))}return t(u)}}}}var X={};function J(e,n){X[e]&&(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction)(X[e])&&(X[e](n),delete X[e])}function W(e,n,t){return new Promise(function(r,i){return n()?r(e):t<1?i(v({},e,{queue:!0})):new Promise(function(e){return setTimeout(e,10)}).then(function(a){return W(e,n,t-10).then(r,i)})})}function H(e,n,t){var r=n(),i=e.getState(),a=i.plugins,o=i.queue,u=i.user;if(!i.context.offline&&o&&o.actions&&o.actions.length){var c=o.actions.reduce(function(e,n,t){return a[n.plugin].loaded?(e.process.push(n),e.processIndex.push(t)):(e.requeue.push(n),e.requeueIndex.push(t)),e},{processIndex:[],process:[],requeue:[],requeueIndex:[]});if(c.processIndex&&c.processIndex.length){c.processIndex.forEach(function(n){var i=o.actions[n],c=i.plugin,s=i.payload.type,l=r[c][s];if(l&&(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction)(l)){var f=function(e,n){return void 0===e&&(e={}),void 0===n&&(n={}),[k,T].reduce(function(t,r){return e.hasOwnProperty(r)&&n[r]&&n[r]!==e[r]&&(t[r]=n[r]),t},e)}(i.payload,u);l({payload:f,config:a[c].config,instance:t});var p=s+":"+c;e.dispatch(v({},f,{type:p,_:{called:p,from:"queueDrain"}}))}});var s=o.actions.filter(function(e,n){return!~c.processIndex.indexOf(n)});o.actions=s}}}var F=function(e){var n=e.data,t=e.action,r=e.instance,i=e.state,a=e.allPlugins,o=e.allMatches,u=e.store,c=e.EVENTS;try{var s=i.plugins,f=i.context,p=t.type,m=p.match(G),g=n.exact.map(function(e){return e.pluginName});m&&(g=o.during.map(function(e){return e.pluginName}));var h=function(e,n){return function(t,r,i){var a=r.config,o=r.name,u=o+"."+t.type;i&&(u=i.event);var c=t.type.match(G)?function(e,n,t,r,i){return function(a,o){var u=r?r.name:e,c=o&&ie(o)?o:t;if(r&&(!(c=o&&ie(o)?o:[e]).includes(e)||1!==c.length))throw new Error("Method "+n+" can only abort "+e+" plugin. "+JSON.stringify(c)+" input valid");return v({},i,{abort:{reason:a,plugins:c,caller:n,_:u}})}}(o,u,n,i,t):function(e,n){return function(){throw new Error(e.type+" action not cancellable. Remove abort in "+n)}}(t,u);return{payload:ue(t),instance:e,config:a||{},abort:c}}}(r,g),y=n.exact.reduce(function(e,n){var t=n.pluginName,r=n.methodName,i=!1;return r.match(/^initialize/)||r.match(/^reset/)||(i=!s[t].loaded),f.offline&&r.match(/^(page|track|identify)/)&&(i=!0),e[""+t]=i,e},{});return Promise.resolve(n.exact.reduce(function(e,i,o){try{var u=i.pluginName;return Promise.resolve(e).then(function(e){function i(){return Promise.resolve(e)}var o=function(){if(n.namespaced&&n.namespaced[u])return Promise.resolve(n.namespaced[u].reduce(function(e,n,t){try{return Promise.resolve(e).then(function(e){return n.method&&(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction)(n.method)?(function(e,n){var t=oe(e);if(t&&t.name===n){var r=oe(t.method);throw new Error([n+" plugin is calling method "+e,"Plugins cant call self","Use "+t.method+" "+(r?"or "+r.method:"")+" in "+n+" plugin insteadof "+e].join("\n"))}}(n.methodName,n.pluginName),Promise.resolve(n.method({payload:e,instance:r,abort:(t=e,i=u,o=n.pluginName,function(e,n){return v({},t,{abort:{reason:e,plugins:n||[i],caller:p,from:o||i}})}),config:Z(n.pluginName,s,a),plugins:s})).then(function(n){var t=(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(n)?n:{};return Promise.resolve(v({},e,t))})):e;var t,i,o})}catch(e){return Promise.reject(e)}},Promise.resolve(t))).then(function(n){e[u]=n});e[u]=t}();return o&&o.then?o.then(i):i()})}catch(e){return Promise.reject(e)}},Promise.resolve({}))).then(function(e){return Promise.resolve(n.exact.reduce(function(t,i,o){try{var c=n.exact.length===o+1,f=i.pluginName,d=a[f];return Promise.resolve(t).then(function(n){var t=e[f]?e[f]:{};if(m&&(t=n),te(t,f))return Y({data:t,method:p,instance:r,pluginName:f,store:u}),Promise.resolve(n);if(te(n,f))return c&&Y({data:n,method:p,instance:r,store:u}),Promise.resolve(n);if(y.hasOwnProperty(f)&&!0===y[f])return u.dispatch({type:"queue",plugin:f,payload:t,_:{called:"queue",from:"queueMechanism"}}),Promise.resolve(n);var i=h(e[f],a[f]);return Promise.resolve(d[p]({abort:i.abort,payload:t,instance:r,config:Z(f,s,a),plugins:s})).then(function(i){var a=(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(i)?i:{},o=v({},n,a),c=e[f];if(te(c,f))Y({data:c,method:p,instance:r,pluginName:f,store:u});else{var s=p+":"+f;(s.match(/:/g)||[]).length<2&&!p.match(K)&&!p.match(Q)&&r.dispatch(v({},m?o:t,{type:s,_:{called:s,from:"submethod"}}))}return Promise.resolve(o)})})}catch(e){return Promise.reject(e)}},Promise.resolve(t))).then(function(e){if(!(p.match(G)||p.match(/^registerPlugin/)||p.match(Q)||p.match(K)||p.match(/^params/)||p.match(/^userIdChanged/))){if(c.plugins.includes(p),e._&&e._.originalAction===p)return e;var t=v({},e,{_:{originalAction:e.type,called:e.type,from:"engineEnd"}});re(e,n.exact.length)&&!p.match(/End$/)&&(t=v({},t,{type:e.type+"Aborted"})),u.dispatch(t)}return e})})}catch(e){return Promise.reject(e)}},G=/Start$/,K=/^bootstrap/,Q=/^ready/;function Y(e){var n=e.pluginName,t=e.method+"Aborted"+(n?":"+n:"");e.store.dispatch(v({},e.data,{type:t,_:{called:t,from:"abort"}}))}function Z(e,n,t){var r=n[e]||t[e];return r&&r.config?r.config:{}}function ee(e,n){return n.reduce(function(n,t){return t[e]?n.concat({methodName:e,pluginName:t.name,method:t[e]}):n},[])}function ne(e,n){var t=e.replace(G,""),r=n?":"+n:"";return[""+e+r,""+t+r,t+"End"+r]}function te(e,n){var t=e.abort;return!!t&&(!0===t||ae(t,n)||t&&ae(t.plugins,n))}function re(e,n){var t=e.abort;if(!t)return!1;if(!0===t||(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(t))return!0;var r=t.plugins;return ie(t)&&t.length===n||ie(r)&&r.length===n}function ie(e){return Array.isArray(e)}function ae(e,n){return!(!e||!ie(e))&&e.includes(n)}function oe(e){var n=e.match(/(.*):(.*)/);return!!n&&{method:n[1],name:n[2]}}function ue(e){return Object.keys(e).reduce(function(n,t){return"type"===t||(n[t]=(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(e[t])?Object.assign({},e[t]):e[t]),n},{})}function ce(e,n,t){var r={};return function(i){return function(a){return function(o){try{var u,c=function(e){return u?e:a(f)},s=o.type,l=o.plugins,f=o;if(o.abort)return Promise.resolve(a(o));if(s===q.enablePlugin&&i.dispatch({type:q.initializeStart,plugins:l,disabled:[],fromEnable:!0,meta:o.meta}),s===q.disablePlugin&&setTimeout(function(){return J(o.meta.rid,{payload:o})},0),s===q.initializeEnd){var m=n(),g=Object.keys(m),h=g.filter(function(e){return l.includes(e)}).map(function(e){return m[e]}),y=[],b=[],I=o.disabled,w=h.map(function(e){var n=e.loaded,t=e.name,a=e.config;return W(e,function(){return n({config:a})},1e4).then(function(n){return r[t]||(i.dispatch({type:q.pluginReadyType(t),name:t,events:Object.keys(e).filter(function(e){return!M.includes(e)})}),r[t]=!0),y=y.concat(t),e}).catch(function(e){if(e instanceof Error)throw new Error(e);return b=b.concat(e.name),e})});Promise.all(w).then(function(e){var n={plugins:y,failed:b,disabled:I};setTimeout(function(){g.length===w.length+I.length&&i.dispatch(v({},{type:q.ready},n))},0)})}var E=function(){if(s!==q.bootstrap)return/^ready:([^:]*)$/.test(s)&&setTimeout(function(){return H(i,n,e)},0),Promise.resolve(function(e,n,t,r,i){try{var a=(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction)(n)?n():n,o=e.type,u=o.replace(G,"");if(e._&&e._.called)return Promise.resolve(e);var c=t.getState(),s=(m=a,void 0===(g=c.plugins)&&(g={}),void 0===(h=e.options)&&(h={}),Object.keys(m).filter(function(e){var n=h.plugins||{};return (0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(n[e])?n[e]:!1!==n.all&&(!g[e]||!1!==g[e].enabled)}).map(function(e){return m[e]}));o===q.initializeStart&&e.fromEnable&&(s=Object.keys(c.plugins).filter(function(n){var t=c.plugins[n];return e.plugins.includes(n)&&!t.initialized}).map(function(e){return a[e]}));var l=s.map(function(e){return e.name}),f=function(e,n,t){var r=ne(e).map(function(e){return ee(e,n)});return n.reduce(function(t,r){var i=r.name,a=ne(e,i).map(function(e){return ee(e,n)}),o=a[0],u=a[1],c=a[2];return o.length&&(t.beforeNS[i]=o),u.length&&(t.duringNS[i]=u),c.length&&(t.afterNS[i]=c),t},{before:r[0],beforeNS:{},during:r[1],duringNS:{},after:r[2],afterNS:{}})}(o,s);return Promise.resolve(F({action:e,data:{exact:f.before,namespaced:f.beforeNS},state:c,allPlugins:a,allMatches:f,instance:t,store:r,EVENTS:i})).then(function(e){function n(){var n=function(){if(o.match(G))return Promise.resolve(F({action:v({},s,{type:u+"End"}),data:{exact:f.after,namespaced:f.afterNS},state:c,allPlugins:a,allMatches:f,instance:t,store:r,EVENTS:i})).then(function(e){e.meta&&e.meta.hasCallback&&J(e.meta.rid,{payload:e})})}();return n&&n.then?n.then(function(){return e}):e}if(re(e,l.length))return e;var s,d=function(){if(o!==u)return Promise.resolve(F({action:v({},e,{type:u}),data:{exact:f.during,namespaced:f.duringNS},state:c,allPlugins:a,allMatches:f,instance:t,store:r,EVENTS:i})).then(function(e){s=e});s=e}();return d&&d.then?d.then(n):n()})}catch(e){return Promise.reject(e)}var m,g,h}(o,n,e,i,t)).then(function(e){return u=1,a(e)})}();return Promise.resolve(E&&E.then?E.then(c):c(E))}catch(e){return Promise.reject(e)}}}}}function se(e){return function(n){return function(n){return function(t){var r=t.type,i=t.key,a=t.value,o=t.options;if(r===q.setItem||r===q.removeItem){if(t.abort)return n(t);r===q.setItem?e.setItem(i,a,o):e.removeItem(i,o)}return n(t)}}}}var le=function(){var e=this;this.before=[],this.after=[],this.addMiddleware=function(n,t){e[t]=e[t].concat(n)},this.removeMiddleware=function(n,t){var r=e[t].findIndex(function(e){return e===n});-1!==r&&(e[t]=[].concat(e[t].slice(0,r),e[t].slice(r+1)))},this.dynamicMiddlewares=function(n){return function(t){return function(r){return function(i){var a={getState:t.getState,dispatch:function(e){return t.dispatch(e)}},o=e[n].map(function(e){return e(a)});return N.apply(void 0,o)(r)(i)}}}}};function fe(e){return function(n,t){void 0===n&&(n={});var r={};if("initialize:aborted"===t.type)return n;if(/^registerPlugin:([^:]*)$/.test(t.type)){var i=de(t.type,"registerPlugin"),a=e()[i];if(!a||!i)return n;var o=t.enabled,u=a.config;return r[i]={enabled:o,initialized:!!o&&Boolean(!a.initialize),loaded:!!o&&Boolean(a.loaded({config:u})),config:u},v({},n,r)}if(/^initialize:([^:]*)$/.test(t.type)){var c=de(t.type,q.initialize),s=e()[c];return s&&c?(r[c]=v({},n[c],{initialized:!0,loaded:Boolean(s.loaded({config:s.config}))}),v({},n,r)):n}if(/^ready:([^:]*)$/.test(t.type))return r[t.name]=v({},n[t.name],{loaded:!0}),v({},n,r);switch(t.type){case q.disablePlugin:return v({},n,pe(t.plugins,!1,n));case q.enablePlugin:return v({},n,pe(t.plugins,!0,n));default:return n}}}function de(e,n){return e.substring(n.length+1,e.length)}function pe(e,n,t){return e.reduce(function(e,r){return e[r]=v({},t[r],{enabled:n}),e},t)}function me(e){try{return JSON.parse(JSON.stringify(e))}catch(e){}return e}var ge={last:{},history:[]};function he(e,n){void 0===e&&(e=ge);var t=n.options,r=n.meta;if(n.type===q.track){var i=me(v({event:n.event,properties:n.properties},Object.keys(t).length&&{options:t},{meta:r}));return v({},e,{last:i,history:e.history.concat(i)})}return e}var ve={actions:[]};function ye(e,n){void 0===e&&(e=ve);var t=n.payload;switch(n.type){case"queue":var r;return r=t&&t.type&&t.type===q.identify?[n].concat(e.actions):e.actions.concat(n),v({},e,{actions:r});case"dequeue":return[];default:return e}}var be=/#.*$/;function Ie(e){var n=/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(e);return"/"+(n&&n[3]?n[3].split("?")[0].replace(be,""):"")}var we,Ee,Pe,Se,Ne=function(e){if(void 0===e&&(e={}),!_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser)return e;var n=document,t=n.title,r=n.referrer,i=window,a=i.location,o=i.innerWidth,u=i.innerHeight,c=a.hash,s=a.search,l=function(e){var n=function(){if(_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser)for(var e,n=document.getElementsByTagName("link"),t=0;e=n[t];t++)if("canonical"===e.getAttribute("rel"))return e.getAttribute("href")}();return n?n.match(/\?/)?n:n+e:window.location.href.replace(be,"")}(s),f={title:t,url:l,path:Ie(l),hash:c,search:s,width:o,height:u};return r&&""!==r&&(f.referrer=r),v({},f,e)},Oe={last:{},history:[]};function Ae(e,n){void 0===e&&(e=Oe);var t=n.options;if(n.type===q.page){var r=me(v({properties:n.properties,meta:n.meta},Object.keys(t).length&&{options:t}));return v({},e,{last:r,history:e.history.concat(r)})}return e}we=function(){if(!_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser)return!1;var e=navigator.appVersion;return~e.indexOf("Win")?"Windows":~e.indexOf("Mac")?"MacOS":~e.indexOf("X11")?"UNIX":~e.indexOf("Linux")?"Linux":"Unknown OS"}(),Ee=_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser?document.referrer:null,Pe=(0,analytics_utils__WEBPACK_IMPORTED_MODULE_2__.getBrowserLocale)(),Se=(0,analytics_utils__WEBPACK_IMPORTED_MODULE_2__.getTimeZone)();var _e={initialized:!1,sessionId:(0,analytics_utils__WEBPACK_IMPORTED_MODULE_2__.uuid)(),app:null,version:null,debug:!1,offline:!!_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser&&!navigator.onLine,os:{name:we},userAgent:_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser?navigator.userAgent:"node",library:{name:"analytics",version:"0.12.5"},timezone:Se,locale:Pe,campaign:{},referrer:Ee};function xe(e,n){void 0===e&&(e=_e);var t=e.initialized,r=n.campaign;switch(n.type){case q.campaign:return v({},e,{campaign:r});case q.offline:return v({},e,{offline:!0});case q.online:return v({},e,{offline:!1});default:return t?e:v({},_e,e,{initialized:!0})}}var je=["plugins","reducers","storage"];function ke(e,n,t){if(_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser){var r=window[(t?"add":"remove")+"EventListener"];e.split(" ").forEach(function(e){r(e,n)})}}function Te(e){var n=ke.bind(null,"online offline",function(n){return Promise.resolve(!navigator.onLine).then(e)});return n(!0),function(e){return n(!1)}}function ze(){return (0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_1__.set)("analytics",[]),function(e){return function(n,t,r){var i=e(n,t,r),a=i.dispatch;return Object.assign(i,{dispatch:function(e){return _analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_1__.globalContext[_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_1__.KEY].analytics.push(e.action||e),a(e)}})}}}function Me(e){return function(){return N(N.apply(null,arguments),ze())}}function qe(e){return e?(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(e)?e:[e]:[]}function Ue(n,t,r){void 0===n&&(n={});var i,a,o=(0,analytics_utils__WEBPACK_IMPORTED_MODULE_2__.uuid)();return t&&(X[o]=(i=t,a=function(e){for(var n,t=e||Array.prototype.slice.call(arguments),r=0;r<t.length;r++)if((0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction)(t[r])){n=t[r];break}return n}(r),function(e){a&&a(e),i(e)})),v({},n,{rid:o,ts:(new Date).getTime()},t?{hasCallback:!0}:{})}function Ve(n){void 0===n&&(n={});var t=n.reducers||{},c=n.initialUser||{},s=(n.plugins||[]).reduce(function(e,n){if((0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction)(n))return e.middlewares=e.middlewares.concat(n),e;if(n.NAMESPACE&&(n.name=n.NAMESPACE),!n.name)throw new Error("https://lytics.dev/errors/1");n.config||(n.config={});var t=n.EVENTS?Object.keys(n.EVENTS).map(function(e){return n.EVENTS[e]}):[];e.pluginEnabled[n.name]=!(!1===n.enabled||!1===n.config.enabled),delete n.enabled,n.methods&&(e.methods[n.name]=Object.keys(n.methods).reduce(function(e,t){var r;return e[t]=(r=n.methods[t],function(){for(var e=Array.prototype.slice.call(arguments),n=new Array(r.length),t=0;t<e.length;t++)n[t]=e[t];return n[n.length]=Q,r.apply({instance:Q},n)}),e},{}),delete n.methods);var r=Object.keys(n).concat(t),i=new Set(e.events.concat(r));if(e.events=Array.from(i),e.pluginsArray=e.pluginsArray.concat(n),e.plugins[n.name])throw new Error(n.name+"AlreadyLoaded");return e.plugins[n.name]=n,e.plugins[n.name].loaded||(e.plugins[n.name].loaded=function(){return!0}),e},{plugins:{},pluginEnabled:{},methods:{},pluginsArray:[],middlewares:[],events:[]}),f=n.storage?n.storage:{getItem:_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_1__.get,setItem:_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_1__.set,removeItem:_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_1__.remove},p=function(e){return function(n,t,r){return t.getState("user")[n]||(r&&(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(r)&&r[n]?r[n]:$(e)[n]||(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_1__.get)(D(n))||null)}}(f),h=s.plugins,w=s.events.filter(function(e){return!M.includes(e)}).sort(),E=new Set(w.concat(z).filter(function(e){return!M.includes(e)})),_=Array.from(E).sort(),x=function(){return h},j=new le,U=j.addMiddleware,V=j.removeMiddleware,L=j.dynamicMiddlewares,X=function(){throw new Error("Abort disabled inListener")},J=(0,analytics_utils__WEBPACK_IMPORTED_MODULE_2__.paramsParse)(),W=$(f),F=v({},W,c,J.an_uid?{userId:J.an_uid}:{},J.an_aid?{anonymousId:J.an_aid}:{});F.anonymousId||(F.anonymousId=(0,analytics_utils__WEBPACK_IMPORTED_MODULE_2__.uuid)());var G=v({enable:function(e,n){return new Promise(function(t){ue.dispatch({type:q.enablePlugin,plugins:qe(e),_:{originalAction:q.enablePlugin}},t,[n])})},disable:function(e,n){return new Promise(function(t){ue.dispatch({type:q.disablePlugin,plugins:qe(e),_:{originalAction:q.disablePlugin}},t,[n])})}},s.methods),K=!1,Q={identify:function(e,n,t,r){try{var i=(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(e)?e:null,a=(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(e)?e:n,o=t||{},c=Q.user();(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_1__.set)(D(k),i);var s=i||a.userId||p(k,Q,a);return Promise.resolve(new Promise(function(e){ue.dispatch(v({type:q.identifyStart,userId:s,traits:a||{},options:o,anonymousId:c.anonymousId},c.id&&c.id!==i&&{previousId:c.id}),e,[n,t,r])}))}catch(e){return Promise.reject(e)}},track:function(e,n,t,r){try{var i=(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(e)?e.event:e;if(!i||!(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(i))throw new Error("EventMissing");var a=(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(e)?e:n||{},o=(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(t)?t:{};return Promise.resolve(new Promise(function(e){ue.dispatch({type:q.trackStart,event:i,properties:a,options:o,userId:p(k,Q,n),anonymousId:p(T,Q,n)},e,[n,t,r])}))}catch(e){return Promise.reject(e)}},page:function(e,n,t){try{var r=(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(e)?e:{},i=(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(n)?n:{};return Promise.resolve(new Promise(function(a){ue.dispatch({type:q.pageStart,properties:Ne(r),options:i,userId:p(k,Q,r),anonymousId:p(T,Q,r)},a,[e,n,t])}))}catch(e){return Promise.reject(e)}},user:function(e){if(e===k||"id"===e)return p(k,Q);if(e===T||"anonId"===e)return p(T,Q);var n=Q.getState("user");return e?analytics_utils__WEBPACK_IMPORTED_MODULE_3___default()(n,e):n},reset:function(e){return new Promise(function(n){ue.dispatch({type:q.resetStart},n,e)})},ready:function(e){return K&&e({plugins:G,instance:Q}),Q.on(q.ready,function(n){e(n),K=!0})},on:function(e,n){if(!e||!(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction)(n))return!1;if(e===q.bootstrap)throw new Error(".on disabled for "+e);var t=/Start$|Start:/;if("*"===e){var r=function(e){return function(e){return function(r){return r.type.match(t)&&n({payload:r,instance:Q,plugins:h}),e(r)}}},i=function(e){return function(e){return function(r){return r.type.match(t)||n({payload:r,instance:Q,plugins:h}),e(r)}}};return U(r,Le),U(i,Ce),function(){V(r,Le),V(i,Ce)}}var a=e.match(t)?Le:Ce,o=function(t){return function(t){return function(r){return r.type===e&&n({payload:r,instance:Q,plugins:h,abort:X}),t(r)}}};return U(o,a),function(){return V(o,a)}},once:function(e,n){if(!e||!(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction)(n))return!1;if(e===q.bootstrap)throw new Error(".once disabled for "+e);var t=Q.on(e,function(e){n({payload:e.payload,instance:Q,plugins:h,abort:X}),t()});return t},getState:function(e){var n=ue.getState();return e?analytics_utils__WEBPACK_IMPORTED_MODULE_3___default()(n,e):Object.assign({},n)},dispatch:function(e){var n=(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(e)?{type:e}:e;if(z.includes(n.type))throw new Error("reserved action "+n.type);var t=v({},n,{_:v({originalAction:n.type},e._||{})});ue.dispatch(t)},enablePlugin:G.enable,disablePlugin:G.disable,plugins:G,storage:{getItem:f.getItem,setItem:function(e,n,t){ue.dispatch({type:q.setItemStart,key:e,value:n,options:t})},removeItem:function(e,n){ue.dispatch({type:q.removeItemStart,key:e,options:n})}},setAnonymousId:function(e,n){Q.storage.setItem(A,e,n)},events:{core:z,plugins:w}},Y=s.middlewares.concat([function(e){return function(e){return function(n){return n.meta||(n.meta=Ue()),e(n)}}},L(Le),ce(Q,x,{all:_,plugins:w}),se(f),C(Q),B(Q),L(Ce)]),Z={context:xe,user:R(f),page:Ae,track:he,plugins:fe(x),queue:ye},ee=N,ne=N;if(_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser&&n.debug){var te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;te&&(ee=te({trace:!0,traceLimit:25})),ne=function(){return 0===arguments.length?ze():(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(typeof arguments[0])?Me():Me().apply(null,arguments)}}var re,ie=function(e){return Object.keys(e).reduce(function(n,t){return je.includes(t)||(n[t]=e[t]),n},{})}(n),ae=s.pluginsArray.reduce(function(e,n){var t=n.name,r=n.config,i=n.loaded,a=s.pluginEnabled[t];return e[t]={enabled:a,initialized:!!a&&Boolean(!n.initialize),loaded:Boolean(i({config:r})),config:r},e},{}),oe={context:ie,user:F,plugins:ae},ue=P(function(e){for(var n=Object.keys(e),t={},r=0;r<n.length;r++){var i=n[r];typeof e[i]===y&&(t[i]=e[i])}var a,o=Object.keys(t);try{!function(e){Object.keys(e).forEach(function(n){var t=e[n];if(typeof t(void 0,{type:"@@redux/INIT"})===b||typeof t(void 0,{type:I})===b)throw new Error("reducer "+n+" "+b)})}(t)}catch(e){a=e}return function(e,n){if(void 0===e&&(e={}),a)throw a;for(var r=!1,i={},u=0;u<o.length;u++){var c=o[u],s=e[c],l=(0,t[c])(s,n);if(typeof l===b){var f=S(c,n);throw new Error(f)}i[c]=l,r=r||l!==s}return r?i:e}}(v({},Z,t)),oe,ne(ee(O.apply(void 0,Y))));ue.dispatch=(re=ue.dispatch,function(e,n,t){var r=v({},e,{meta:Ue(e.meta,n,qe(t))});return re.apply(null,[r])});var de=Object.keys(h);ue.dispatch({type:q.bootstrap,plugins:de,config:ie,params:J,user:F,initialUser:c,persistedUser:W});var pe=de.filter(function(e){return s.pluginEnabled[e]}),me=de.filter(function(e){return!s.pluginEnabled[e]});return ue.dispatch({type:q.registerPlugins,plugins:de,enabled:s.pluginEnabled}),s.pluginsArray.map(function(e,n){var t=e.bootstrap,r=e.config,i=e.name;t&&(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction)(t)&&t({instance:Q,config:r,payload:e}),ue.dispatch({type:q.registerPluginType(i),name:i,enabled:s.pluginEnabled[i],plugin:e}),s.pluginsArray.length===n+1&&ue.dispatch({type:q.initializeStart,plugins:pe,disabled:me})}),Te(function(e){ue.dispatch({type:e?q.offline:q.online})}),function(e,n,t){setInterval(function(){return H(e,n,t)},3e3)}(ue,x,Q),Q}var Le="before",Ce="after";
//# sourceMappingURL=analytics-core.module.js.map


/***/ }),

/***/ "./node_modules/@analytics/global-storage-utils/dist/analytics-util-global-storage.module.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@analytics/global-storage-utils/dist/analytics-util-global-storage.module.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLOBAL: () => (/* binding */ l),
/* harmony export */   KEY: () => (/* binding */ o),
/* harmony export */   get: () => (/* binding */ a),
/* harmony export */   globalContext: () => (/* binding */ n),
/* harmony export */   hasSupport: () => (/* binding */ b),
/* harmony export */   remove: () => (/* binding */ i),
/* harmony export */   set: () => (/* binding */ f),
/* harmony export */   wrap: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @analytics/type-utils */ "./node_modules/@analytics/type-utils/dist/analytics-util-types.module.js");
var l="global",o=_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.PREFIX+"global"+_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.PREFIX,n=typeof self===_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.OBJECT&&self.self===self&&self||typeof __webpack_require__.g===_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.OBJECT&&__webpack_require__.g.global===__webpack_require__.g&&__webpack_require__.g||void 0;function a(t){return n[o][t]}function f(t,e){return n[o][t]=e}function i(t){delete n[o][t]}function u(t,e,r){var l;try{if(b(t)){var o=window[t];l=o[e].bind(o)}}catch(t){}return l||r}n[o]||(n[o]={});var c={};function b(t){if(typeof c[t]!==_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.UNDEFINED)return c[t];try{var e=window[t];e.setItem(_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.UNDEFINED,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.UNDEFINED),e.removeItem(_analytics_type_utils__WEBPACK_IMPORTED_MODULE_0__.UNDEFINED)}catch(e){return c[t]=!1}return c[t]=!0}
//# sourceMappingURL=analytics-util-global-storage.module.js.map


/***/ }),

/***/ "./node_modules/@analytics/localstorage-utils/dist/analytics-util-localstorage.module.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@analytics/localstorage-utils/dist/analytics-util-localstorage.module.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCAL_STORAGE: () => (/* binding */ r),
/* harmony export */   getItem: () => (/* binding */ c),
/* harmony export */   hasLocalStorage: () => (/* binding */ g),
/* harmony export */   removeItem: () => (/* binding */ S),
/* harmony export */   setItem: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @analytics/global-storage-utils */ "./node_modules/@analytics/global-storage-utils/dist/analytics-util-global-storage.module.js");
var r="localStorage",g=_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.hasSupport.bind(null,"localStorage"),c=(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.wrap)("localStorage","getItem",_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.get),m=(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.wrap)("localStorage","setItem",_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.set),S=(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.wrap)("localStorage","removeItem",_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.remove);
//# sourceMappingURL=analytics-util-localstorage.module.js.map


/***/ }),

/***/ "./node_modules/@analytics/session-storage-utils/dist/analytics-util-session-storage.module.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@analytics/session-storage-utils/dist/analytics-util-session-storage.module.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SESSION_STORAGE: () => (/* binding */ a),
/* harmony export */   getSessionItem: () => (/* binding */ g),
/* harmony export */   hasSessionStorage: () => (/* binding */ i),
/* harmony export */   removeSessionItem: () => (/* binding */ l),
/* harmony export */   setSessionItem: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @analytics/global-storage-utils */ "./node_modules/@analytics/global-storage-utils/dist/analytics-util-global-storage.module.js");
var a="sessionStorage",i=_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.hasSupport.bind(null,"sessionStorage"),g=(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.wrap)("sessionStorage","getItem",_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.get),n=(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.wrap)("sessionStorage","setItem",_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.set),l=(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.wrap)("sessionStorage","removeItem",_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.remove);
//# sourceMappingURL=analytics-util-session-storage.module.js.map


/***/ }),

/***/ "./node_modules/@analytics/storage-utils/dist/analytics-util-storage.module.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@analytics/storage-utils/dist/analytics-util-storage.module.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL: () => (/* reexport safe */ _analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.ALL),
/* harmony export */   ANY: () => (/* reexport safe */ _analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.ANY),
/* harmony export */   COOKIE: () => (/* reexport safe */ _analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.COOKIE),
/* harmony export */   GLOBAL: () => (/* reexport safe */ _analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL),
/* harmony export */   LOCAL_STORAGE: () => (/* reexport safe */ _analytics_localstorage_utils__WEBPACK_IMPORTED_MODULE_2__.LOCAL_STORAGE),
/* harmony export */   SESSION_STORAGE: () => (/* reexport safe */ _analytics_session_storage_utils__WEBPACK_IMPORTED_MODULE_3__.SESSION_STORAGE),
/* harmony export */   "default": () => (/* binding */ J),
/* harmony export */   getCookie: () => (/* reexport safe */ _analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.getCookie),
/* harmony export */   getItem: () => (/* binding */ C),
/* harmony export */   globalContext: () => (/* reexport safe */ _analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.globalContext),
/* harmony export */   hasCookies: () => (/* reexport safe */ _analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.hasCookies),
/* harmony export */   hasLocalStorage: () => (/* reexport safe */ _analytics_localstorage_utils__WEBPACK_IMPORTED_MODULE_2__.hasLocalStorage),
/* harmony export */   hasSessionStorage: () => (/* reexport safe */ _analytics_session_storage_utils__WEBPACK_IMPORTED_MODULE_3__.hasSessionStorage),
/* harmony export */   removeCookie: () => (/* reexport safe */ _analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.removeCookie),
/* harmony export */   removeItem: () => (/* binding */ b),
/* harmony export */   setCookie: () => (/* reexport safe */ _analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.setCookie),
/* harmony export */   setItem: () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var _analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @analytics/global-storage-utils */ "./node_modules/@analytics/global-storage-utils/dist/analytics-util-global-storage.module.js");
/* harmony import */ var _analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @analytics/cookie-utils */ "./node_modules/@analytics/cookie-utils/dist/analytics-util-cookie.module.js");
/* harmony import */ var _analytics_localstorage_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @analytics/localstorage-utils */ "./node_modules/@analytics/localstorage-utils/dist/analytics-util-localstorage.module.js");
/* harmony import */ var _analytics_session_storage_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @analytics/session-storage-utils */ "./node_modules/@analytics/session-storage-utils/dist/analytics-util-session-storage.module.js");
/* harmony import */ var _analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @analytics/type-utils */ "./node_modules/@analytics/type-utils/dist/analytics-util-types.module.js");
function I(t){var o=t;try{if("true"===(o=JSON.parse(t)))return!0;if("false"===o)return!1;if((0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.isObject)(o))return o;parseFloat(o)===o&&(o=parseFloat(o))}catch(t){}if(null!==o&&""!==o)return o}var k=(0,_analytics_localstorage_utils__WEBPACK_IMPORTED_MODULE_2__.hasLocalStorage)(),O=(0,_analytics_session_storage_utils__WEBPACK_IMPORTED_MODULE_3__.hasSessionStorage)(),x=(0,_analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.hasCookies)();function C(o,e){if(o){var r=A(e),a=!N(r),i=d(r)?I(localStorage.getItem(o)):void 0;if(a&&!(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(i))return i;var n=h(r)?I((0,_analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.getCookie)(o)):void 0;if(a&&n)return n;var l=E(r)?I(sessionStorage.getItem(o)):void 0;if(a&&l)return l;var u=(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.get)(o);return a?u:{localStorage:i,sessionStorage:l,cookie:n,global:u}}}function L(r,a,l){if(r&&!(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(a)){var u={},g=A(l),m=JSON.stringify(a),S=!N(g);return d(g)&&(u[_analytics_localstorage_utils__WEBPACK_IMPORTED_MODULE_2__.LOCAL_STORAGE]=F(_analytics_localstorage_utils__WEBPACK_IMPORTED_MODULE_2__.LOCAL_STORAGE,a,I(localStorage.getItem(r))),localStorage.setItem(r,m),S)?u[_analytics_localstorage_utils__WEBPACK_IMPORTED_MODULE_2__.LOCAL_STORAGE]:h(g)&&(u[_analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.COOKIE]=F(_analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.COOKIE,a,I((0,_analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.getCookie)(r))),(0,_analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.setCookie)(r,m),S)?u[_analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.COOKIE]:E(g)&&(u[_analytics_session_storage_utils__WEBPACK_IMPORTED_MODULE_3__.SESSION_STORAGE]=F(_analytics_session_storage_utils__WEBPACK_IMPORTED_MODULE_3__.SESSION_STORAGE,a,I(sessionStorage.getItem(r))),sessionStorage.setItem(r,m),S)?u[_analytics_session_storage_utils__WEBPACK_IMPORTED_MODULE_3__.SESSION_STORAGE]:(u[_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL]=F(_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL,a,(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.get)(r)),(0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.set)(r,a),S?u[_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL]:u)}}function b(t,e){if(t){var a=A(e),s=C(t,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.ALL),n={};return!(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(s.localStorage)&&d(a)&&(localStorage.removeItem(t),n[_analytics_localstorage_utils__WEBPACK_IMPORTED_MODULE_2__.LOCAL_STORAGE]=s.localStorage),!(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(s.cookie)&&h(a)&&((0,_analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.removeCookie)(t),n[_analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.COOKIE]=s.cookie),!(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(s.sessionStorage)&&E(a)&&(sessionStorage.removeItem(t),n[_analytics_session_storage_utils__WEBPACK_IMPORTED_MODULE_3__.SESSION_STORAGE]=s.sessionStorage),!(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(s.global)&&G(a,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL)&&((0,_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.remove)(t),n[_analytics_global_storage_utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL]=s.global),n}}function A(t){return t?(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.isString)(t)?t:t.storage:_analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.ANY}function d(t){return k&&G(t,_analytics_localstorage_utils__WEBPACK_IMPORTED_MODULE_2__.LOCAL_STORAGE)}function h(t){return x&&G(t,_analytics_cookie_utils__WEBPACK_IMPORTED_MODULE_1__.COOKIE)}function E(t){return O&&G(t,_analytics_session_storage_utils__WEBPACK_IMPORTED_MODULE_3__.SESSION_STORAGE)}function N(t){return t===_analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.ALL||"all"===t}function G(t,o){return t===_analytics_type_utils__WEBPACK_IMPORTED_MODULE_4__.ANY||t===o||N(t)}function F(t,o,e){return{location:t,current:o,previous:e}}var J={setItem:L,getItem:C,removeItem:b};
//# sourceMappingURL=analytics-util-storage.module.js.map


/***/ }),

/***/ "./node_modules/@analytics/type-utils/dist/analytics-util-types.module.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@analytics/type-utils/dist/analytics-util-types.module.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL: () => (/* binding */ m),
/* harmony export */   ANY: () => (/* binding */ b),
/* harmony export */   ARRAY: () => (/* binding */ u),
/* harmony export */   ASYNC_FUNCTION: () => (/* binding */ d),
/* harmony export */   ASYNC_GENERATOR_FUNCTION: () => (/* binding */ y),
/* harmony export */   BOOLEAN: () => (/* binding */ r),
/* harmony export */   BUTTON: () => (/* binding */ A),
/* harmony export */   CHANGE: () => (/* binding */ N),
/* harmony export */   ENV: () => (/* binding */ P),
/* harmony export */   ERROR: () => (/* binding */ f),
/* harmony export */   FORM: () => (/* binding */ O),
/* harmony export */   FUNCTION: () => (/* binding */ n),
/* harmony export */   GENERATOR_FUNCTION: () => (/* binding */ p),
/* harmony export */   HIDDEN: () => (/* binding */ h),
/* harmony export */   INPUT: () => (/* binding */ S),
/* harmony export */   NONE: () => (/* binding */ v),
/* harmony export */   NULL: () => (/* binding */ a),
/* harmony export */   NUMBER: () => (/* binding */ i),
/* harmony export */   OBJECT: () => (/* binding */ o),
/* harmony export */   PREFIX: () => (/* binding */ j),
/* harmony export */   REGEX_EMAIL: () => (/* binding */ z),
/* harmony export */   REGEX_ISO: () => (/* binding */ D),
/* harmony export */   REGEX_JSON: () => (/* binding */ Z),
/* harmony export */   SELECT: () => (/* binding */ E),
/* harmony export */   STRING: () => (/* binding */ t),
/* harmony export */   SUBMIT: () => (/* binding */ w),
/* harmony export */   SYMBOL: () => (/* binding */ c),
/* harmony export */   SYNTAX_ERROR: () => (/* binding */ l),
/* harmony export */   TYPE_ERROR: () => (/* binding */ s),
/* harmony export */   UNDEFINED: () => (/* binding */ e),
/* harmony export */   ctorName: () => (/* binding */ yn),
/* harmony export */   ensureArray: () => (/* binding */ Hn),
/* harmony export */   getType: () => (/* binding */ R),
/* harmony export */   getTypeName: () => (/* binding */ J),
/* harmony export */   isArguments: () => (/* binding */ Nn),
/* harmony export */   isArray: () => (/* binding */ rn),
/* harmony export */   isAsyncFunction: () => (/* binding */ pn),
/* harmony export */   isBoolean: () => (/* binding */ Q),
/* harmony export */   isBrowser: () => (/* binding */ $),
/* harmony export */   isBuffer: () => (/* binding */ vn),
/* harmony export */   isButton: () => (/* binding */ Bn),
/* harmony export */   isClass: () => (/* binding */ en),
/* harmony export */   isDate: () => (/* binding */ Pn),
/* harmony export */   isDefined: () => (/* binding */ K),
/* harmony export */   isDeno: () => (/* binding */ k),
/* harmony export */   isDev: () => (/* binding */ L),
/* harmony export */   isElement: () => (/* binding */ $n),
/* harmony export */   isEmail: () => (/* binding */ Fn),
/* harmony export */   isEmpty: () => (/* binding */ Cn),
/* harmony export */   isError: () => (/* binding */ hn),
/* harmony export */   isErrorLike: () => (/* binding */ jn),
/* harmony export */   isFalse: () => (/* binding */ Zn),
/* harmony export */   isFalsy: () => (/* binding */ Dn),
/* harmony export */   isForm: () => (/* binding */ kn),
/* harmony export */   isFunction: () => (/* binding */ W),
/* harmony export */   isGenerator: () => (/* binding */ ln),
/* harmony export */   isGeneratorFunction: () => (/* binding */ dn),
/* harmony export */   isHidden: () => (/* binding */ Un),
/* harmony export */   isInput: () => (/* binding */ Gn),
/* harmony export */   isIsoDate: () => (/* binding */ xn),
/* harmony export */   isJsDom: () => (/* binding */ G),
/* harmony export */   isJson: () => (/* binding */ cn),
/* harmony export */   isLocalHost: () => (/* binding */ T),
/* harmony export */   isMap: () => (/* binding */ bn),
/* harmony export */   isMethod: () => (/* binding */ fn),
/* harmony export */   isNoOp: () => (/* binding */ En),
/* harmony export */   isNode: () => (/* binding */ _),
/* harmony export */   isNodeList: () => (/* binding */ Ln),
/* harmony export */   isNodeType: () => (/* binding */ Tn),
/* harmony export */   isNull: () => (/* binding */ Y),
/* harmony export */   isNumber: () => (/* binding */ nn),
/* harmony export */   isNumberLike: () => (/* binding */ tn),
/* harmony export */   isObject: () => (/* binding */ on),
/* harmony export */   isObjectLike: () => (/* binding */ un),
/* harmony export */   isPrimitive: () => (/* binding */ an),
/* harmony export */   isProd: () => (/* binding */ x),
/* harmony export */   isPromise: () => (/* binding */ sn),
/* harmony export */   isRegex: () => (/* binding */ mn),
/* harmony export */   isSelect: () => (/* binding */ Mn),
/* harmony export */   isSet: () => (/* binding */ gn),
/* harmony export */   isStaging: () => (/* binding */ C),
/* harmony export */   isString: () => (/* binding */ q),
/* harmony export */   isSymbol: () => (/* binding */ X),
/* harmony export */   isSyntaxError: () => (/* binding */ An),
/* harmony export */   isTrue: () => (/* binding */ zn),
/* harmony export */   isTruthy: () => (/* binding */ wn),
/* harmony export */   isTypeError: () => (/* binding */ Sn),
/* harmony export */   isUndefined: () => (/* binding */ I),
/* harmony export */   isWebWorker: () => (/* binding */ B),
/* harmony export */   noOp: () => (/* binding */ g)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
var n="function",t="string",e="undefined",r="boolean",o="object",u="array",i="number",c="symbol",a="null",f="error",s="typeError",l="syntaxError",d="asyncFunction",p="generatorFunction",y="asyncGeneratorFunction",g=function(){},b="any",m="*",v="none",h="hidden",j="__",O="form",S="input",A="button",E="select",N="change",w="submit",D=/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/,z=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Z=/^\{[\s\S]*\}$|^\[[\s\S]*\]$/,F="undefined"!=typeof process?process:{},P=F.env&&F.env.NODE_ENV||"",x="production"===P,C="staging"===P,L="development"===P,$="undefined"!=typeof document,T=$&&"localhost"===window.location.hostname,_=null!=F.versions&&null!=F.versions.node,k="undefined"!=typeof Deno&&void 0!==Deno.core,B="object"==typeof self&&self.constructor&&"DedicatedWorkerGlobalScope"===self.constructor.name,G=$&&"nodejs"===window.name||"undefined"!=typeof navigator&&void 0!==navigator.userAgent&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));function M(n,t){return t.charAt(0)[n]()+t.slice(1)}var U=M.bind(null,"toUpperCase"),H=M.bind(null,"toLowerCase");function J(n){return Y(n)?U("null"):"object"==typeof n?yn(n):Object.prototype.toString.call(n).slice(8,-1)}function R(n,t){void 0===t&&(t=!0);var e=J(n);return t?H(e):e}function V(n,t){return typeof t===n}var W=V.bind(null,"function"),q=V.bind(null,"string"),I=V.bind(null,"undefined");function K(n){return!I(n)}var Q=V.bind(null,"boolean"),X=V.bind(null,"symbol");function Y(n){return null===n}function nn(n){return"number"===R(n)&&!isNaN(n)}function tn(n){return!isNaN(parseFloat(n))}function en(n){return!!W(n)&&/^class /.test(Function.prototype.toString.call(n))}function rn(n){return"array"===R(n)}function on(n){if(!un(n))return!1;for(var t=n;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(n)===t}function un(n){return n&&("object"==typeof n||null!==n)}function cn(n){if(!q(n)||!Z.test(n))return!1;try{JSON.parse(n)}catch(n){return!1}return!0}function an(n){if(Y(n))return!0;switch(typeof n){case"string":case"number":case"symbol":case"undefined":case"boolean":return!0;default:return!1}}function fn(n,t){return on(n)&&W(n[t])}function sn(n){return!!n&&!!(!I(Promise)&&n instanceof Promise||n.then&&W(n.then))}function ln(n){return un(n)&&W(n.throw)&&W(n.return)&&W(n.next)}function dn(n){return"generatorFunction"===R(n)}function pn(n){return"asyncFunction"===R(n)}function yn(n){return W(n.constructor)?n.constructor.name:null}function gn(n){return n instanceof Set}function bn(n){return n instanceof Map}function mn(n){return n instanceof RegExp}function vn(n){return!(!n.constructor||!W(n.constructor.isBuffer))&&n.constructor.isBuffer(n)}function hn(n){return n instanceof Error||q(n.message)&&n.constructor&&nn(n.constructor.stackTraceLimit)}function jn(n){return un(n)&&q(n.message)&&q(n.name)}function On(n,t){if("object"!=typeof t||Y(t))return!1;if(t instanceof n)return!0;var e=R(new n(""));if(hn(t))for(;t;){if(R(t)===e)return!0;t=Object.getPrototypeOf(t)}return!1}var Sn=On.bind(null,TypeError),An=On.bind(null,SyntaxError);function En(n){if(!W(n))return!1;var t=/{(\r|\n|\s)*}/gm,e=g+"";return e===(n.toString().match(t)||[""])[0].replace(t,e)}function Nn(n){try{if(nn(n.length)&&W(n.callee))return!0}catch(n){if(-1!==n.message.indexOf("callee"))return!0}return!1}function wn(n){return!(q(n)&&"false"===n.toLowerCase()||!n)}function Dn(n){return!n}function zn(n){return!0===n}function Zn(n){return!1===n}function Fn(n){return!(n.length>320)&&z.test(n)}function Pn(n){return n instanceof Date||W(n.toDateString)&&W(n.getDate)&&W(n.setDate)}function xn(n){return D.test(n)}function Cn(n){return!(!Y(n)&&(rn(n)?n.length:gn(n)||bn(n)?n.size:on(n)&&Object.keys(n).length))}function Ln(n){return NodeList.prototype.isPrototypeOf(n)}function $n(n,t){var e=n instanceof Element||n instanceof HTMLDocument;return e&&t?Tn(n,t):e}function Tn(n,t){return void 0===t&&(t=""),n&&n.nodeName===t.toUpperCase()}function _n(n){var t=[].slice.call(arguments,1);return function(){return n.apply(void 0,[].slice.call(arguments).concat(t))}}var kn=_n($n,"form"),Bn=_n($n,"button"),Gn=_n($n,"input"),Mn=_n($n,"select");function Un(n,t){if(!n||"hidden"===getComputedStyle(n).visibility)return!0;for(;n;){if(null!=t&&n===t)return!1;if("none"===getComputedStyle(n).display)return!0;n=n.parentElement}return!1}function Hn(n){return n?rn(n)?n:[n]:[]}
//# sourceMappingURL=analytics-util-types.module.js.map


/***/ }),

/***/ "./node_modules/analytics-utils/dist/analytics-utils.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/analytics-utils/dist/analytics-utils.module.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeUri: () => (/* binding */ n),
/* harmony export */   dotProp: () => (/* reexport default from dynamic */ dlv__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   getBrowserLocale: () => (/* binding */ o),
/* harmony export */   getTimeZone: () => (/* binding */ a),
/* harmony export */   isExternalReferrer: () => (/* binding */ i),
/* harmony export */   isScriptLoaded: () => (/* binding */ u),
/* harmony export */   paramsClean: () => (/* binding */ c),
/* harmony export */   paramsGet: () => (/* binding */ l),
/* harmony export */   paramsParse: () => (/* binding */ s),
/* harmony export */   paramsRemove: () => (/* binding */ f),
/* harmony export */   parseReferrer: () => (/* binding */ v),
/* harmony export */   throttle: () => (/* binding */ b),
/* harmony export */   url: () => (/* binding */ d),
/* harmony export */   uuid: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var dlv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dlv */ "./node_modules/dlv/dist/dlv.umd.js");
/* harmony import */ var dlv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dlv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _analytics_type_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @analytics/type-utils */ "./node_modules/@analytics/type-utils/dist/analytics-util-types.module.js");
function n(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function o(){if(_analytics_type_utils__WEBPACK_IMPORTED_MODULE_1__.isBrowser){var r=navigator,t=r.languages;return r.userLanguage||(t&&t.length?t[0]:r.language)}}function a(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){}}function i(r){if(!_analytics_type_utils__WEBPACK_IMPORTED_MODULE_1__.isBrowser)return!1;var t=r||document.referrer;if(t){var n=window.document.location.port,o=t.split("/")[2];return n&&(o=o.replace(":"+n,"")),o!==window.location.hostname}return!1}function u(n){if(!_analytics_type_utils__WEBPACK_IMPORTED_MODULE_1__.isBrowser)return!0;var o=document.getElementsByTagName("script");return!!Object.keys(o).filter(function(e){var a=o[e].src;return (0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_1__.isString)(n)?-1!==a.indexOf(n):!!(0,_analytics_type_utils__WEBPACK_IMPORTED_MODULE_1__.isRegex)(n)&&a.match(n)}).length}function c(e,r){var t=(e.split("?")||[,])[1];if(!t||-1===t.indexOf(r))return e;var n=new RegExp("(\\&|\\?)"+r+'([_A-Za-z0-9"+=.\\/\\-@%]+)',"g"),o=("?"+t).replace(n,"").replace(/^&/,"?");return e.replace("?"+t,o)}function l(e,r){return n((RegExp(e+"=(.+?)(&|$)").exec(r)||[,""])[1])}function s(r){return function(e){for(var r,t=Object.create(null),o=/([^&=]+)=?([^&]*)/g;r=o.exec(e);){var a=n(r[1]),i=n(r[2]);"[]"===a.substring(a.length-2)?(t[a=a.substring(0,a.length-2)]||(t[a]=[])).push(i):t[a]=""===i||i}for(var u in t){var c=u.split("[");c.length>1&&(m(t,c.map(function(e){return e.replace(/[?[\]\\ ]/g,"")}),t[u]),delete t[u])}return t}(function(r){if(r){var t=r.match(/\?(.*)/);return t&&t[1]?t[1].split("#")[0]:""}return _analytics_type_utils__WEBPACK_IMPORTED_MODULE_1__.isBrowser&&window.location.search.substring(1)}(r))}function m(e,r,t){for(var n=r.length-1,o=0;o<n;++o){var a=r[o];if("__proto__"===a||"constructor"===a)break;a in e||(e[a]={}),e=e[a]}e[r[n]]=t}function f(r,t){return _analytics_type_utils__WEBPACK_IMPORTED_MODULE_1__.isBrowser?new Promise(function(e,n){if(window.history&&window.history.replaceState){var o=window.location.href,a=c(o,r);o!==a&&history.replaceState({},"",a)}return t&&t(),e()}):Promise.resolve()}function g(r){if(!_analytics_type_utils__WEBPACK_IMPORTED_MODULE_1__.isBrowser)return null;var t=document.createElement("a");return t.setAttribute("href",r),t.hostname}function p(e){return(g(e)||"").split(".").slice(-2).join(".")}function x(e){var r=e.split(".");return r.length>1?r.slice(0,-1).join("."):e}var d={trimTld:x,getDomainBase:p,getDomainHost:g};function v(r,t){if(!_analytics_type_utils__WEBPACK_IMPORTED_MODULE_1__.isBrowser)return!1;var n={source:"(direct)",medium:"(none)",campaign:"(not set)"};r&&i(r)&&(n.referrer=r);var o=function(r){if(!r||!_analytics_type_utils__WEBPACK_IMPORTED_MODULE_1__.isBrowser)return!1;var t=p(r),n=document.createElement("a");if(n.href=r,n.hostname.indexOf("google")>-1&&(t="google"),w[t]){var o=w[t],a=new RegExp(("string"==typeof o?o:o.p)+"=.*?([^&#]*|$)","gi"),u=n.search.match(a);return{source:o.n||x(t),medium:"organic",term:(u?u[0].split("=")[1]:"")||"(not provided)"}}var c=i(r)?"referral":"internal";return{source:n.hostname,medium:c}}(r);o&&Object.keys(o).length&&(n=Object.assign({},n,o));var a=s(t),u=Object.keys(a);if(!u.length)return n;var c=u.reduce(function(e,r){return r.match(/^utm_/)&&(e[""+r.replace(/^utm_/,"")]=a[r]),r.match(/^(d|g)clid/)&&(e.source="google",e.medium=a.gclid?"cpc":"cpm",e[r]=a[r]),e},{});return Object.assign({},n,c)}var h="q",w={"daum.net":h,"eniro.se":"search_word","naver.com":"query","yahoo.com":"p","msn.com":h,"aol.com":h,"ask.com":h,"baidu.com":"wd","yandex.com":"text","rambler.ru":"words",google:h,"bing.com":{p:h,n:"live"}};function y(){for(var e="",r=0,t=4294967295*Math.random()|0;r++<36;){var n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[r-1],o=15&t;e+="-"==n||"4"==n?n:("x"==n?o:3&o|8).toString(16),t=r%8==0?4294967295*Math.random()|0:t>>4}return e}function b(e,r){var t,n,o,a=null,i=0,u=function(){i=new Date,a=null,o=e.apply(t,n)};return function(){var c=new Date;i||(i=c);var l=r-(c-i);return t=this,n=arguments,l<=0?(clearTimeout(a),a=null,i=c,o=e.apply(t,n)):a||(a=setTimeout(u,l)),o}}
//# sourceMappingURL=analytics-utils.module.js.map


/***/ }),

/***/ "./node_modules/analytics/lib/analytics.browser.es.js":
/*!************************************************************!*\
  !*** ./node_modules/analytics/lib/analytics.browser.es.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ analyticsLib),
/* harmony export */   CONSTANTS: () => (/* reexport safe */ _analytics_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS),
/* harmony export */   EVENTS: () => (/* reexport safe */ _analytics_core__WEBPACK_IMPORTED_MODULE_0__.EVENTS),
/* harmony export */   "default": () => (/* binding */ analyticsLib),
/* harmony export */   init: () => (/* binding */ analyticsLib)
/* harmony export */ });
/* harmony import */ var _analytics_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @analytics/core */ "./node_modules/@analytics/core/dist/client/analytics-core.module.js");
/* harmony import */ var _analytics_storage_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @analytics/storage-utils */ "./node_modules/@analytics/storage-utils/dist/analytics-util-storage.module.js");




function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function analyticsLib() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultSettings = {
    storage: _analytics_storage_utils__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  return (0,_analytics_core__WEBPACK_IMPORTED_MODULE_0__.Analytics)(_objectSpread2(_objectSpread2({}, defaultSettings), opts));
}




/***/ }),

/***/ "./resources/js/web/session.js":
/*!*************************************!*\
  !*** ./resources/js/web/session.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearSession: () => (/* binding */ clearSession),
/* harmony export */   getSession: () => (/* binding */ getSession)
/* harmony export */ });
/* harmony import */ var analytics_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! analytics-utils */ "./node_modules/analytics-utils/dist/analytics-utils.module.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var key = '__session';
function getSession() {
  var create = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var extend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
  var value = sessionStorage.getItem(key);
  var session = parseSession(value, ttl);
  if (!session) {
    if (!create) {
      return undefined;
    }
    var fresh = createSession();
    setSession(fresh);
    return fresh;
  }
  if (!extend) {
    return session;
  }
  var extended = extendSession(session);
  setSession(extended);
  return extended;
}
function clearSession() {
  sessionStorage.removeItem(key);
}
function setSession(session) {
  sessionStorage.setItem(key, JSON.stringify(session));
}
function parseSession(value, ttl) {
  if (!value) {
    return undefined;
  }
  try {
    var session = JSON.parse(value);
    var expired = unixTimestamp() >= session.modified + ttl * 60;
    return expired ? undefined : session;
  } catch (_unused) {
    return undefined;
  }
}
function createSession() {
  var timestamp = unixTimestamp();
  return {
    id: (0,analytics_utils__WEBPACK_IMPORTED_MODULE_0__.uuid)(),
    created: timestamp,
    modified: timestamp
  };
}
function extendSession(session) {
  return _objectSpread(_objectSpread({}, session), {}, {
    modified: unixTimestamp()
  });
}
function unixTimestamp() {
  return Math.floor(Date.now() * 1e-3);
}

/***/ }),

/***/ "./node_modules/dlv/dist/dlv.umd.js":
/*!******************************************!*\
  !*** ./node_modules/dlv/dist/dlv.umd.js ***!
  \******************************************/
/***/ (function(module) {

!function(t,n){ true?module.exports=function(t,n,e,i,o){for(n=n.split?n.split("."):n,i=0;i<n.length;i++)t=t?t[n[i]]:o;return t===o?e:t}:0}(this);
//# sourceMappingURL=dlv.umd.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./resources/js/web/main.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! analytics */ "./node_modules/analytics/lib/analytics.browser.es.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session */ "./resources/js/web/session.js");



/* Initialize analytics */
var analytics = (0,analytics__WEBPACK_IMPORTED_MODULE_1__["default"])({
  app: 'Statamic Analytics'
  // version: 100,
  // plugins: []
});

var session = (0,_session__WEBPACK_IMPORTED_MODULE_0__.getSession)();

/* Track a page view */
analytics.page({
  session: session
});

// analytics.identify(new Date().toISOString())

analytics.on('page', function (_ref) {
  var payload = _ref.payload;
  // console.log('page event', event)
  console.log('payload', JSON.stringify(payload));
  fetch('/!/analytics/event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
});
})();

/******/ })()
;