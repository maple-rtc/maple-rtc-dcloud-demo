(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var r=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),a="";if(r.length>1){var c=r.pop();a=r.join("---COMMA---"),0===c.indexOf(" at ")?a+=c:a+="---COMMA---"+c}else a=r[0];console[s](a)}n.r(e),n.d(e,"log",(function(){return s})),n.d(e,"default",(function(){return r}))},"15d1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"neil-modal",props:{title:{type:String,default:""},content:String,align:{type:String,default:"left"},cancelText:{type:String,default:"取消"},cancelColor:{type:String,default:"#333333"},confirmText:{type:String,default:"确定"},confirmColor:{type:String,default:"#007aff"},showCancel:{type:[Boolean,String],default:!0},show:{type:[Boolean,String],default:!1},autoClose:{type:[Boolean,String],default:!0}},data:function(){return{isOpen:!1}},watch:{show:function(t){this.isOpen=t}},created:function(){this.isOpen=this.show},methods:{bindTouchmove:function(){},clickLeft:function(){var t=this;setTimeout((function(){t.$emit("cancel")}),200),this.closeModal()},clickRight:function(){var t=this;setTimeout((function(){t.$emit("confirm")}),200),this.closeModal()},clickMask:function(){this.autoClose&&this.closeModal()},closeModal:function(){this.showAnimation=!1,this.isOpen=!1,this.$emit("close")},confirmModal:function(){this.showAnimation=!1,this.isOpen=!1,this.$emit("confirm")}}};e.default=i},"1c45":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.appId=void 0;var i="d1461517ccd00abf";e.appId=i},"4de6":function(t,e,n){"use strict";n("ad76");var i=s(n("8bbf")),o=s(n("883d"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}i.default.config.productionTip=!1,o.default.mpType="app";var l=new i.default(a({},o.default));l.$mount()},"5c95":function(t,e,n){"use strict";n.r(e);var i=n("ffcb"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},"60fa":function(t,e,n){"use strict";n.r(e);var i=n("8bf5"),o=n("5c95");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);var r,a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},"62ce":function(t,e,n){"use strict";n.r(e);var i=n("b45c"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},"883d":function(t,e,n){"use strict";n.r(e);var i=n("62ce");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var s,r,a,c,l=n("f0c5"),u=Object(l["a"])(i["default"],s,r,!1,null,null,null,!1,a,c);e["default"]=u.exports},"8bbf":function(t,e){t.exports=Vue},"8bf5":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","info-list"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","line-top"),attrs:{_i:1}},[n("view",{staticClass:t._$s(2,"sc","line"),attrs:{_i:2}})]),n("view",[n("neil-modal",{attrs:{show:t.show4,content:"当前appId 为空, 从蓝蘑云网站[http://account.lmaple.com/]注册appID",_i:4},on:{close:function(e){return t.closeModal("4")}}})],1),n("view",[n("button",{attrs:{_i:6},on:{click:function(e){return t.bindClick("1")}}}),n("neil-modal",{attrs:{show:t.show1,title:"请输入房间和用户名",_i:7},on:{close:function(e){return t.closeModal("1")},confirm:function(e){return t.confirmModal("1")}}},[n("view",{staticClass:t._$s(8,"sc","input-view"),attrs:{_i:8}},[n("view",{staticClass:t._$s(9,"sc","input-name"),attrs:{_i:9}},[n("view"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],attrs:{_i:11},domProps:{value:t._$s(11,"v-model",t.userId)},on:{input:function(e){e.target.composing||(t.userId=e.target.value)}}})]),n("view",{staticClass:t._$s(12,"sc","input-name"),attrs:{_i:12}},[n("view"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.roomId,expression:"roomId"}],attrs:{_i:14},domProps:{value:t._$s(14,"v-model",t.roomId)},on:{input:function(e){e.target.composing||(t.roomId=e.target.value)}}})])])])],1),n("view",{staticClass:t._$s(15,"sc","line-top"),attrs:{_i:15}},[n("view",{staticClass:t._$s(16,"sc","line"),attrs:{_i:16}})]),n("view",[n("button",{attrs:{_i:18},on:{click:function(e){return t.bindClick("2")}}}),n("neil-modal",{attrs:{show:t.show2,title:"请输入房间和用户名",_i:19},on:{close:function(e){return t.closeModal("2")},confirm:function(e){return t.confirmModal("2")}}},[n("view",{staticClass:t._$s(20,"sc","input-view"),attrs:{_i:20}},[n("view",{staticClass:t._$s(21,"sc","input-name"),attrs:{_i:21}},[n("view"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],attrs:{_i:23},domProps:{value:t._$s(23,"v-model",t.userId)},on:{input:function(e){e.target.composing||(t.userId=e.target.value)}}})]),n("view",{staticClass:t._$s(24,"sc","input-name"),attrs:{_i:24}},[n("view"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.roomId,expression:"roomId"}],attrs:{_i:26},domProps:{value:t._$s(26,"v-model",t.roomId)},on:{input:function(e){e.target.composing||(t.roomId=e.target.value)}}})])])])],1),n("view",{staticClass:t._$s(27,"sc","line-top"),attrs:{_i:27}},[n("view",{staticClass:t._$s(28,"sc","line"),attrs:{_i:28}})]),n("view",[n("button",{attrs:{_i:30},on:{click:function(e){return t.bindClick("3")}}}),n("neil-modal",{attrs:{show:t.show3,title:"请输入房间和用户名",_i:31},on:{close:function(e){return t.closeModal("3")},confirm:function(e){return t.confirmModal("3")}}},[n("view",{staticClass:t._$s(32,"sc","input-view"),attrs:{_i:32}},[n("view",{staticClass:t._$s(33,"sc","input-name"),attrs:{_i:33}},[n("view"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],attrs:{_i:35},domProps:{value:t._$s(35,"v-model",t.userId)},on:{input:function(e){e.target.composing||(t.userId=e.target.value)}}})]),n("view",{staticClass:t._$s(36,"sc","input-name"),attrs:{_i:36}},[n("view"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.roomId,expression:"roomId"}],attrs:{_i:38},domProps:{value:t._$s(38,"v-model",t.roomId)},on:{input:function(e){e.target.composing||(t.roomId=e.target.value)}}})])])])],1),n("view",{staticClass:t._$s(39,"sc","line-top"),attrs:{_i:39}},[n("view",{staticClass:t._$s(40,"sc","line"),attrs:{_i:40}})])])},s=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))},9992:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","neil-modal"),class:t._$s(0,"c",{"neil-modal--show":t.isOpen}),attrs:{_i:0},on:{touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.bindTouchmove(e)}}},[n("view",{staticClass:t._$s(1,"sc","neil-modal__mask"),attrs:{_i:1},on:{click:t.clickMask}}),n("view",{staticClass:t._$s(2,"sc","neil-modal__container"),attrs:{_i:2}},[t._$s(3,"i",t.title.length>0)?n("view",{staticClass:t._$s(3,"sc","neil-modal__header"),attrs:{_i:3}},[t._v(t._$s(3,"t0-0",t._s(t.title)))]):t._e(),n("view",{staticClass:t._$s(4,"sc","neil-modal__content"),class:t._$s(4,"c",t.content?"neil-modal--padding":""),style:t._$s(4,"s",{textAlign:t.align}),attrs:{_i:4}},[t._$s(5,"i",t.content)?[n("text",{staticClass:t._$s(6,"sc","modal-content"),attrs:{_i:6}},[t._v(t._$s(6,"t0-0",t._s(t.content)))])]:[t._t("default",null,{_i:8})]],2),n("view",{staticClass:t._$s(9,"sc","neil-modal__footer"),attrs:{_i:9}},[t._$s(10,"i",t.showCancel)?n("view",{staticClass:t._$s(10,"sc","neil-modal__footer-left"),style:t._$s(10,"s",{color:t.cancelColor}),attrs:{_i:10},on:{click:t.clickLeft}},[t._v(t._$s(10,"t0-0",t._s(t.cancelText)))]):t._e(),n("view",{staticClass:t._$s(11,"sc","neil-modal__footer-right"),style:t._$s(11,"s",{color:t.confirmColor}),attrs:{_i:11},on:{click:t.clickRight}},[t._v(t._$s(11,"t0-0",t._s(t.confirmText)))])])])])},s=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))},a62b:function(t,e,n){"use strict";n.r(e);var i=n("15d1"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},ad76:function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("60fa").default)}))},b45c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},c22f:function(t,e,n){"use strict";n.r(e);var i=n("9992"),o=n("a62b");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);var r,a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,o,s,r,a,c,l){var u,d="function"===typeof t?t.options:t;if(c){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in c)f.call(c,p)&&!f.call(d.components,p)&&(d.components[p]=c[p])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(d.mixins||(d.mixins=[])).push(l)),e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(d.functional){d._injectStyles=u;var v=d.render;d.render=function(t,e){return u.call(e),v(t,e)}}else{var _=d.beforeCreate;d.beforeCreate=_?[].concat(_,u):[u]}return{exports:t,options:d}}n.d(e,"a",(function(){return i}))},ffcb:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("1c45"),o=s(n("c22f"));function s(t){return t&&t.__esModule?t:{default:t}}uni.requireNativePlugin("modal");var r=uni.requireNativePlugin("LM-mapleRTC"),a={components:{neilModal:o.default},data:function(){return{show1:!1,show2:!1,show3:!1,show4:!1,userId:"",roomId:""}},onReady:function(){"android"==uni.getSystemInfoSync().platform&&r.checkPermission(),""!=i.appId||(this["show4"]=!0)},methods:{bindClick:function(e){t("log",this["show".concat(e)]," at pages/index/index.vue:110"),this["show".concat(e)]=!0,t("log",this["show".concat(e)]," at pages/index/index.vue:112")},closeModal:function(e){t("log","监听到close"," at pages/index/index.vue:115"),this["show".concat(e)]=!1},confirmModal:function(e){t("log","监听到confirm"," at pages/index/index.vue:119");var n=this.userId,i=this.roomId;if(""==i||""==n)return uni.showToast({title:"用户id和房间Id为空",icon:"none"}),void(this["show".concat(e)]=!1);1==e?uni.navigateTo({url:"../audioroom/audioroom?channelId="+i+"&userId="+n}):2==e?uni.navigateTo({url:"../video1v1/video1v1?channelId="+i+"&userId="+n}):3==e&&uni.navigateTo({url:"../video/video?channelId="+i+"&userId="+n}),this["show".concat(e)]=!1}}};e.default=a}).call(this,n("0de9")["default"])}},[["4de6","app-config"]]]);