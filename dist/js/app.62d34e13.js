(function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({theme:"theme","theme-analytics":"theme-analytics",themes:"themes"}[e]||e)+"."+{theme:"851ccc4b","theme-analytics":"ad954dd5",themes:"043230ee"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={theme:1,"theme-analytics":1,themes:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({theme:"theme","theme-analytics":"theme-analytics",themes:"themes"}[e]||e)+"."+{theme:"2ef39d4c","theme-analytics":"ae0db8f5",themes:"02e8bcf0"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){l=m[s],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],d.parentNode.removeChild(d),r(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var m=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",m.name="ChunkLoadError",m.type=n,m.request=a,r[1](m)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{color:"purple darken-4",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{shaped:"",dark:""}},[r("v-row",{staticClass:"mb-2",attrs:{align:"center","no-gutters":""}},[r("v-col",{attrs:{cols:"auto"}},[r("v-img",{attrs:{src:"https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png",width:"40"}})],1),r("v-col",[r("v-subheader",{staticClass:"font-weight-bold white--text"},[e._v(" Bootstrap Themes ")])],1)],1),r("v-list-item-group",{attrs:{color:"white"}},e._l(e.navs,(function(t,n){return r("v-list-item",{key:n,attrs:{to:t.path}},[r("v-list-item-icon",[r("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.text)}})],1)],1)})),1)],1)],1),r("v-app-bar",{attrs:{app:"",color:"purple darken-4",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),r("v-row",{attrs:{align:"center","no-gutters":""}},[e.drawer?e._e():[r("v-col",{attrs:{cols:"auto"}},[r("v-img",{staticClass:"mr-2",attrs:{src:"https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png",width:"40"}})],1),r("v-col",[r("v-toolbar-title",{staticClass:"font-weight-bold"},[e._v(" Bootstrap Themes ")])],1)],r("v-spacer"),r("v-col",[r("search")],1)],2)],1),r("v-main",[r("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"filterFormRef",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("v-text-field",{attrs:{type:"number",placeholder:"Days (min: 7, max: 365)",clearable:"",rules:[e.rules.required,e.rules.min,e.rules.max],rounded:"",dense:"",flat:"","hide-details":"","solo-inverted":""},model:{value:e.days,callback:function(t){e.days=t},expression:"days"}})],1)},s=[],c=r("5530"),l=r("2f62"),u={data:function(){return{days:null,rules:{required:function(e){return!!e||"Value is required"},min:function(e){return e>=7||"Minimum value is 7"},max:function(e){return e<=365||"Maximum value is 365"}}}},methods:Object(c["a"])({submit:function(){var e=this.$refs.filterFormRef.validate();console.log({isValid:e}),e&&this.getThemes({limit:this.days})}},Object(l["b"])(["getThemes"]))},m=u,d=r("2877"),p=r("6544"),h=r.n(p),f=r("4bd4"),v=r("8654"),b=Object(d["a"])(m,i,s,!1,null,null,null),g=b.exports;h()(b,{VForm:f["a"],VTextField:v["a"]});var y={components:{Search:g},data:function(){return{drawer:null,mini:!0,navs:[{text:"Themes",icon:"mdi-clock",path:"/"},{text:"Analytics",icon:"mdi-chart-line",path:"/analytics"}]}}},w=y,x=r("7496"),T=r("40dc"),k=r("5bc1"),V=r("62ad"),_=r("132d"),O=r("adda"),j=r("8860"),L=r("da13"),C=r("5d23"),S=r("1baa"),E=r("34c3"),P=r("f6c4"),A=r("f774"),I=r("0fd9"),B=r("2fa4"),M=r("e0c7"),N=r("2a7f"),q=Object(d["a"])(w,a,o,!1,null,null,null),D=q.exports;h()(q,{VApp:x["a"],VAppBar:T["a"],VAppBarNavIcon:k["a"],VCol:V["a"],VIcon:_["a"],VImg:O["a"],VList:j["a"],VListItem:L["a"],VListItemContent:C["a"],VListItemGroup:S["a"],VListItemIcon:E["a"],VListItemTitle:C["b"],VMain:P["a"],VNavigationDrawer:A["a"],VRow:I["a"],VSpacer:B["a"],VSubheader:M["a"],VToolbarTitle:N["a"]});var F=r("f309");n["a"].use(F["a"]);var $=new F["a"]({}),R=(r("99af"),r("4de4"),r("4160"),r("d81d"),r("b64b"),r("d3b7"),r("159b"),r("bc3a")),J=r.n(R),G={state:{loading:!1,themes:null,error:null,dayLimit:0},getters:{loading:function(e){var t=e.loading;return t},themes:function(e){var t=e.themes;return t},dayLimit:function(e){var t=e.dayLimit;return t},error:function(e){var t=e.error;return t}},mutations:{setThemes:function(e){e.loading=!0,J.a.get("".concat("https://bs-analytics.technext.it","/today?limit=").concat(e.dayLimit)).then((function(t){var r=t.data.data.map((function(e){var t={},r=Object.keys(e.purchases).filter((function(t){return"-"!==e.purchases[t]})),n=0;return r.forEach((function(a,o){if(o<r.length-1){var i=e.purchases[a]-e.purchases[r[o+1]];t[a]=i,n+=i}})),e.purchases=t,e.total=n,e}));e.themes=r,e.error=null})).catch((function(t){e.themes=null,e.error=t})).finally((function(){e.loading=!1}))}},actions:{getThemes:function(e,t){var r=e.commit,n=e.state;n.dayLimit=(null===t||void 0===t?void 0:t.limit)||7,r("setThemes")}}};n["a"].use(l["a"]);var H=new l["a"].Store({modules:{themes:G}}),K=r("8c4f");n["a"].use(K["a"]);var U=[{path:"/",name:"Themes",component:function(){return r.e("themes").then(r.bind(null,"b729"))}},{path:"/themes/:id",name:"Theme",props:!0,component:function(){return r.e("theme").then(r.bind(null,"de93"))}},{path:"/analytics",name:"ThemeAnalytics",component:function(){return r.e("theme-analytics").then(r.bind(null,"6bba"))}}],z=new K["a"]({mode:"history",routes:U}),Q=z;n["a"].config.productionTip=!1,H.dispatch("getThemes"),new n["a"]({vuetify:$,store:H,router:Q,render:function(e){return e(D)}}).$mount("#app")}});
//# sourceMappingURL=app.62d34e13.js.map