!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueEcho=t():e.VueEcho=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(2),s=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={install:function(e,t){if(!t)throw new Error("[Vue-Echo] cannot locate options");if("object"!==(void 0===t?"undefined":i(t)))throw new Error("[Vue-Echo] cannot initiate options");"function"==typeof t.socketId?e.prototype.$echo=t:e.prototype.$echo=new s.default(t),e.mixin({created:function(){var e=this.$options.channel;if("function"==typeof e&&(e=e.bind(this).call()),e){e.startsWith("private:")?this.channel=this.$echo.private(e.replace("private:","")):e.startsWith("presence:")?this.channel=this.$echo.join(e.replace("presence:","")):this.channel=this.$echo.channel(e);var t=this.$options.echo;t&&Object.keys(t).forEach(function(e){var n=this;this.channel.listen(e,function(i){t[e].bind(n)(i)})},this)}},beforeDestroy:function(){this.$options.channel&&this.channel.unsubscribe()}})}}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?l(e):t}function p(e){var t=h();return function(){var n,i=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return f(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var v=function(){function e(t){i(this,e),this._defaultOptions={auth:{headers:{}},authEndpoint:"/broadcasting/auth",broadcaster:"pusher",csrfToken:null,host:null,key:null,namespace:"App.Events"},this.setOptions(t),this.connect()}return s(e,[{key:"setOptions",value:function(e){return this.options=o(this._defaultOptions,e),this.csrfToken()&&(this.options.auth.headers["X-CSRF-TOKEN"]=this.csrfToken()),e}},{key:"csrfToken",value:function(){var e;return"undefined"!=typeof window&&window.Laravel&&window.Laravel.csrfToken?window.Laravel.csrfToken:this.options.csrfToken?this.options.csrfToken:"undefined"!=typeof document&&"function"==typeof document.querySelector&&(e=document.querySelector('meta[name="csrf-token"]'))?e.getAttribute("content"):null}}]),e}(),y=function(){function e(){i(this,e)}return s(e,[{key:"listenForWhisper",value:function(e,t){return this.listen(".client-"+e,t)}},{key:"notification",value:function(e){return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated",e)}},{key:"stopListeningForWhisper",value:function(e,t){return this.stopListening(".client-"+e,t)}}]),e}(),k=function(){function e(t){i(this,e),this.setNamespace(t)}return s(e,[{key:"format",value:function(e){return"."===e.charAt(0)||"\\"===e.charAt(0)?e.substr(1):(this.namespace&&(e=this.namespace+"."+e),e.replace(/\./g,"\\"))}},{key:"setNamespace",value:function(e){this.namespace=e}}]),e}(),d=function(e){function t(e,r,s){var o;return i(this,t),o=n.call(this),o.name=r,o.pusher=e,o.options=s,o.eventFormatter=new k(o.options.namespace),o.subscribe(),o}u(t,e);var n=p(t);return s(t,[{key:"subscribe",value:function(){this.subscription=this.pusher.subscribe(this.name)}},{key:"unsubscribe",value:function(){this.pusher.unsubscribe(this.name)}},{key:"listen",value:function(e,t){return this.on(this.eventFormatter.format(e),t),this}},{key:"stopListening",value:function(e,t){return t?this.subscription.unbind(this.eventFormatter.format(e),t):this.subscription.unbind(this.eventFormatter.format(e)),this}},{key:"subscribed",value:function(e){return this.on("pusher:subscription_succeeded",function(){e()}),this}},{key:"error",value:function(e){return this.on("pusher:subscription_error",function(t){e(t)}),this}},{key:"on",value:function(e,t){return this.subscription.bind(e,t),this}}]),t}(y),b=function(e){function t(){return i(this,t),n.apply(this,arguments)}u(t,e);var n=p(t);return s(t,[{key:"whisper",value:function(e,t){return this.pusher.channels.channels[this.name].trigger("client-".concat(e),t),this}}]),t}(d),m=function(e){function t(){return i(this,t),n.apply(this,arguments)}u(t,e);var n=p(t);return s(t,[{key:"whisper",value:function(e,t){return this.pusher.channels.channels[this.name].trigger("client-".concat(e),t),this}}]),t}(d),w=function(e){function t(){return i(this,t),n.apply(this,arguments)}u(t,e);var n=p(t);return s(t,[{key:"here",value:function(e){return this.on("pusher:subscription_succeeded",function(t){e(Object.keys(t.members).map(function(e){return t.members[e]}))}),this}},{key:"joining",value:function(e){return this.on("pusher:member_added",function(t){e(t.info)}),this}},{key:"leaving",value:function(e){return this.on("pusher:member_removed",function(t){e(t.info)}),this}},{key:"whisper",value:function(e,t){return this.pusher.channels.channels[this.name].trigger("client-".concat(e),t),this}}]),t}(d),g=function(e){function t(e,r,s){var o;return i(this,t),o=n.call(this),o.events={},o.listeners={},o.name=r,o.socket=e,o.options=s,o.eventFormatter=new k(o.options.namespace),o.subscribe(),o}u(t,e);var n=p(t);return s(t,[{key:"subscribe",value:function(){this.socket.emit("subscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"unsubscribe",value:function(){this.unbind(),this.socket.emit("unsubscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"listen",value:function(e,t){return this.on(this.eventFormatter.format(e),t),this}},{key:"stopListening",value:function(e,t){return this.unbindEvent(this.eventFormatter.format(e),t),this}},{key:"subscribed",value:function(e){return this.on("connect",function(t){e(t)}),this}},{key:"error",value:function(e){return this}},{key:"on",value:function(e,t){var n=this;return this.listeners[e]=this.listeners[e]||[],this.events[e]||(this.events[e]=function(t,i){n.name===t&&n.listeners[e]&&n.listeners[e].forEach(function(e){return e(i)})},this.socket.on(e,this.events[e])),this.listeners[e].push(t),this}},{key:"unbind",value:function(){var e=this;Object.keys(this.events).forEach(function(t){e.unbindEvent(t)})}},{key:"unbindEvent",value:function(e,t){this.listeners[e]=this.listeners[e]||[],t&&(this.listeners[e]=this.listeners[e].filter(function(e){return e!==t})),t&&0!==this.listeners[e].length||(this.events[e]&&(this.socket.removeListener(e,this.events[e]),delete this.events[e]),delete this.listeners[e])}}]),t}(y),j=function(e){function t(){return i(this,t),n.apply(this,arguments)}u(t,e);var n=p(t);return s(t,[{key:"whisper",value:function(e,t){return this.socket.emit("client event",{channel:this.name,event:"client-".concat(e),data:t}),this}}]),t}(g),O=function(e){function t(){return i(this,t),n.apply(this,arguments)}u(t,e);var n=p(t);return s(t,[{key:"here",value:function(e){return this.on("presence:subscribed",function(t){e(t.map(function(e){return e.user_info}))}),this}},{key:"joining",value:function(e){return this.on("presence:joining",function(t){return e(t.user_info)}),this}},{key:"leaving",value:function(e){return this.on("presence:leaving",function(t){return e(t.user_info)}),this}}]),t}(j),_=function(e){function t(){return i(this,t),n.apply(this,arguments)}u(t,e);var n=p(t);return s(t,[{key:"subscribe",value:function(){}},{key:"unsubscribe",value:function(){}},{key:"listen",value:function(e,t){return this}},{key:"stopListening",value:function(e,t){return this}},{key:"subscribed",value:function(e){return this}},{key:"error",value:function(e){return this}},{key:"on",value:function(e,t){return this}}]),t}(y),I=function(e){function t(){return i(this,t),n.apply(this,arguments)}u(t,e);var n=p(t);return s(t,[{key:"whisper",value:function(e,t){return this}}]),t}(_),E=function(e){function t(){return i(this,t),n.apply(this,arguments)}u(t,e);var n=p(t);return s(t,[{key:"here",value:function(e){return this}},{key:"joining",value:function(e){return this}},{key:"leaving",value:function(e){return this}},{key:"whisper",value:function(e,t){return this}}]),t}(_),x=function(e){function t(){var e;return i(this,t),e=n.apply(this,arguments),e.channels={},e}u(t,e);var n=p(t);return s(t,[{key:"connect",value:function(){void 0!==this.options.client?this.pusher=this.options.client:this.pusher=new Pusher(this.options.key,this.options)}},{key:"listen",value:function(e,t,n){return this.channel(e).listen(t,n)}},{key:"channel",value:function(e){return this.channels[e]||(this.channels[e]=new d(this.pusher,e,this.options)),this.channels[e]}},{key:"privateChannel",value:function(e){return this.channels["private-"+e]||(this.channels["private-"+e]=new b(this.pusher,"private-"+e,this.options)),this.channels["private-"+e]}},{key:"encryptedPrivateChannel",value:function(e){return this.channels["private-encrypted-"+e]||(this.channels["private-encrypted-"+e]=new m(this.pusher,"private-encrypted-"+e,this.options)),this.channels["private-encrypted-"+e]}},{key:"presenceChannel",value:function(e){return this.channels["presence-"+e]||(this.channels["presence-"+e]=new w(this.pusher,"presence-"+e,this.options)),this.channels["presence-"+e]}},{key:"leave",value:function(e){var t=this;[e,"private-"+e,"presence-"+e].forEach(function(e,n){t.leaveChannel(e)})}},{key:"leaveChannel",value:function(e){this.channels[e]&&(this.channels[e].unsubscribe(),delete this.channels[e])}},{key:"socketId",value:function(){return this.pusher.connection.socket_id}},{key:"disconnect",value:function(){this.pusher.disconnect()}}]),t}(v),C=function(e){function t(){var e;return i(this,t),e=n.apply(this,arguments),e.channels={},e}u(t,e);var n=p(t);return s(t,[{key:"connect",value:function(){var e=this,t=this.getSocketIO();return this.socket=t(this.options.host,this.options),this.socket.on("reconnect",function(){Object.values(e.channels).forEach(function(e){e.subscribe()})}),this.socket}},{key:"getSocketIO",value:function(){if(void 0!==this.options.client)return this.options.client;if("undefined"!=typeof io)return io;throw new Error("Socket.io client not found. Should be globally available or passed via options.client")}},{key:"listen",value:function(e,t,n){return this.channel(e).listen(t,n)}},{key:"channel",value:function(e){return this.channels[e]||(this.channels[e]=new g(this.socket,e,this.options)),this.channels[e]}},{key:"privateChannel",value:function(e){return this.channels["private-"+e]||(this.channels["private-"+e]=new j(this.socket,"private-"+e,this.options)),this.channels["private-"+e]}},{key:"presenceChannel",value:function(e){return this.channels["presence-"+e]||(this.channels["presence-"+e]=new O(this.socket,"presence-"+e,this.options)),this.channels["presence-"+e]}},{key:"leave",value:function(e){var t=this;[e,"private-"+e,"presence-"+e].forEach(function(e){t.leaveChannel(e)})}},{key:"leaveChannel",value:function(e){this.channels[e]&&(this.channels[e].unsubscribe(),delete this.channels[e])}},{key:"socketId",value:function(){return this.socket.id}},{key:"disconnect",value:function(){this.socket.disconnect()}}]),t}(v),S=function(e){function t(){var e;return i(this,t),e=n.apply(this,arguments),e.channels={},e}u(t,e);var n=p(t);return s(t,[{key:"connect",value:function(){}},{key:"listen",value:function(e,t,n){return new _}},{key:"channel",value:function(e){return new _}},{key:"privateChannel",value:function(e){return new I}},{key:"presenceChannel",value:function(e){return new E}},{key:"leave",value:function(e){}},{key:"leaveChannel",value:function(e){}},{key:"socketId",value:function(){return"fake-socket-id"}},{key:"disconnect",value:function(){}}]),t}(v),P=function(){function e(t){i(this,e),this.options=t,this.connect(),this.options.withoutInterceptors||this.registerInterceptors()}return s(e,[{key:"channel",value:function(e){return this.connector.channel(e)}},{key:"connect",value:function(){"pusher"==this.options.broadcaster?this.connector=new x(this.options):"socket.io"==this.options.broadcaster?this.connector=new C(this.options):"null"==this.options.broadcaster?this.connector=new S(this.options):"function"==typeof this.options.broadcaster&&(this.connector=new this.options.broadcaster(this.options))}},{key:"disconnect",value:function(){this.connector.disconnect()}},{key:"join",value:function(e){return this.connector.presenceChannel(e)}},{key:"leave",value:function(e){this.connector.leave(e)}},{key:"leaveChannel",value:function(e){this.connector.leaveChannel(e)}},{key:"listen",value:function(e,t,n){return this.connector.listen(e,t,n)}},{key:"private",value:function(e){return this.connector.privateChannel(e)}},{key:"encryptedPrivate",value:function(e){return this.connector.encryptedPrivateChannel(e)}},{key:"socketId",value:function(){return this.connector.socketId()}},{key:"registerInterceptors",value:function(){"function"==typeof Vue&&Vue.http&&this.registerVueRequestInterceptor(),"function"==typeof axios&&this.registerAxiosRequestInterceptor(),"function"==typeof jQuery&&this.registerjQueryAjaxSetup()}},{key:"registerVueRequestInterceptor",value:function(){var e=this;Vue.http.interceptors.push(function(t,n){e.socketId()&&t.headers.set("X-Socket-ID",e.socketId()),n()})}},{key:"registerAxiosRequestInterceptor",value:function(){var e=this;axios.interceptors.request.use(function(t){return e.socketId()&&(t.headers["X-Socket-Id"]=e.socketId()),t})}},{key:"registerjQueryAjaxSetup",value:function(){var e=this;void 0!==jQuery.ajax&&jQuery.ajaxPrefilter(function(t,n,i){e.socketId()&&i.setRequestHeader("X-Socket-Id",e.socketId())})}}]),e}();t.default=P}])});