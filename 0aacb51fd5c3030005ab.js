(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{178:function(e,t,n){var content=n(181);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("b55c4abc",content,!0,{sourceMap:!1})},179:function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=10)}([function(e,t){e.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}}},function(e,t,n){"use strict";function r(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var a=n(2),o=n(0),i=n.n(o);t.a=function(e,t){var o=t.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==e.tagName.toLocaleUpperCase()){var u=e.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);e=u[0]}e.oninput=function(t){if(t.isTrusted){var i=e.selectionEnd,u=e.value[i-1];for(e.value=n.i(a.a)(e.value,o.mask,!0,o.tokens);i<e.value.length&&e.value.charAt(i-1)!==u;)i++;e===document.activeElement&&(e.setSelectionRange(i,i),setTimeout((function(){e.setSelectionRange(i,i)}),0)),e.dispatchEvent(r("input"))}};var s=n.i(a.a)(e.value,o.mask,!0,o.tokens);s!==e.value&&(e.value=s,e.dispatchEvent(r("input")))}},function(e,t,n){"use strict";var r=n(6),a=n(5);t.a=function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(t)?n.i(a.a)(r.a,t,i)(e,t,o,i):n.i(r.a)(e,t,o,i)}},function(e,t,n){"use strict";function r(e){e.component(s.a.name,s.a),e.directive("mask",i.a)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(1),u=n(7),s=n.n(u);n.d(t,"TheMask",(function(){return s.a})),n.d(t,"mask",(function(){return i.a})),n.d(t,"tokens",(function(){return o.a})),n.d(t,"version",(function(){return l}));var l="0.11.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),i=n(2);t.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e,(e=n.i(i.a)(e,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}}},function(e,t,n){"use strict";t.a=function(e,t,n){return t=t.sort((function(e,t){return e.length-t.length})),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<t.length;){var u=t[i];i++;var s=t[i];if(!(s&&e(r,s,!0,n).length>u.length))return e(r,u,o,n)}return""}}},function(e,t,n){"use strict";t.a=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];e=e||"",t=t||"";for(var a=0,o=0,i="";a<t.length&&o<e.length;){var s=r[u=t[a]],l=e[o];s&&!s.escape?(s.pattern.test(l)&&(i+=s.transform?s.transform(l):l,a++),o++):(s&&s.escape&&(u=t[++a]),n&&(i+=u),l===u&&o++,a++)}for(var c="";a<t.length&&n;){var u;if(r[u=t[a]]){c="";break}c+=u,a++}return i+c}},function(e,t,n){var r=n(8)(n(4),n(9),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var a,o=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(a=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach((function(e){var t=r[e];s[e]=function(){return t}}))}return{esModule:a,exports:o,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])},180:function(e,t,n){"use strict";var r=n(178);n.n(r).a},181:function(e,t,n){(t=n(38)(!1)).push([e.i,".form-person{height:70px;margin-bottom:16px;position:relative}.form-person fieldset{position:absolute;width:100%}",""]),e.exports=t},182:function(e,t,n){"use strict";n.r(t);n(6),n(4),n(3),n(1),n(5),n(15);var r=n(0),o=n(41),l=n(179);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var f={props:{fields:Object},directives:{mask:l.mask},data:function(){return{show:!1,modal:!1}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["setPersonData"]),{checkFields:function(){this.fields.family?this.show=!0:this.show=!1,this.fields.name?this.modal=!0:this.modal=!1},setPersonalDataAndFinal:function(){this.fields.phone&&(this.setPersonData(this.fields),this.$router.push("/result"))}})},d=(n(180),n(37)),m={components:{AppFormPerson:Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"form-person"},[n("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[e.show?e._e():n("b-form-group",{attrs:{label:"Family"}},[n("b-form-input",{attrs:{placeholder:"Family"},model:{value:e.fields.family,callback:function(t){e.$set(e.fields,"family",t)},expression:"fields.family"}})],1)],1),e._v(" "),n("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[e.show?n("b-form-group",{attrs:{label:"Name"}},[n("b-form-input",{attrs:{placeholder:"Name"},model:{value:e.fields.name,callback:function(t){e.$set(e.fields,"name",t)},expression:"fields.name"}})],1):e._e()],1)],1),e._v(" "),n("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[e.fields.family?n("b-button",{staticClass:"w-100",attrs:{variant:"primary"},on:{click:e.checkFields}},[e._v("Next")]):e._e()],1),e._v(" "),n("b-modal",{ref:"modal",attrs:{centered:"",title:"Your Phone"},on:{ok:function(t){return e.setPersonalDataAndFinal()}},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("form",{ref:"form"},[n("b-form-group",{attrs:{label:"Phone"}},[n("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"+#(###)###-##-##",expression:"'+#(###)###-##-##'"}],staticClass:"phone",model:{value:e.fields.phone,callback:function(t){e.$set(e.fields,"phone",t)},expression:"fields.phone"}})],1)],1)])],1)}),[],!1,null,null,null).exports},data:function(){return{title:"Step 2",fields:{family:"",name:"",phone:""}}}},v=Object(d.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v(this._s(this.title))]),this._v(" "),t("AppFormPerson",{attrs:{fields:this.fields}})],1)}),[],!1,null,null,null);t.default=v.exports}}]);