(function(e){function t(t){for(var a,n,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-11e813ac":"4bc80cde","chunk-746908e5":"df2188d8","chunk-dec28d5c":"3c96790e"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-11e813ac":1,"chunk-dec28d5c":1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({}[e]||e)+"."+{"chunk-11e813ac":"b25b9f0d","chunk-746908e5":"31d6cfe0","chunk-dec28d5c":"9aebfefb"}[e]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[e],p.parentNode.removeChild(p),r(s)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"11ad":function(e,t,r){"use strict";var a=r("7127"),n=r.n(a);n.a},"1dad":function(e,t,r){"use strict";var a=r("a537"),n=r.n(a);n.a},"3a97":function(e,t,r){},5027:function(e,t,r){"use strict";var a=r("86e0"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("4160"),r("d3b7"),r("159b"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"main"}}},[e._v(" Vue Recipes ")]),e._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[r("ul",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"main"}}},[e._v(" Home ")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"search"}}},[e._v(" Search ")])],1),e.$root.store.username?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"}}},[e._v(" Register ")])],1),e.$root.store.username?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[e._v(" Login ")])],1),e.$root.store.username?r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v(" Dropdown ")]),r("div",{staticClass:"dropdown-menu"},[r("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"route1"}}},[e._v(" Route 1 ")]),r("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"route2"}}},[e._v(" Route 2 ")]),r("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"route3"}}},[e._v(" Route 3 ")])],1)]):e._e()]),r("ul",{staticClass:"navbar-nav ml-auto"},[e.$root.store.username?r("li",{staticClass:"nav-item"},[r("span",{staticClass:"navbar-text"},[e._v(e._s(e.$root.store.username))]),r("button",{staticClass:"btn btn-link nav-link",on:{click:e.Logout}},[e._v(" Logout ")])]):r("li",{staticClass:"nav-item"},[r("span",{staticClass:"navbar-text"},[e._v("Hello Guest")])])])])],1),r("div",{staticClass:"container mt-5"},[r("router-view")],1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],s={name:"App",methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},i=s,c=r("2877"),u=Object(c["a"])(i,n,o,!1,null,null,null),l=u.exports,d=r("a7fe"),p=r.n(d),m=r("bc3a"),f=r.n(m),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("b-row",[r("b-col",{staticClass:"leftCol"},[r("RecipePreviewList",{ref:"randomRecipe",staticClass:"RandomRecipes",attrs:{title:"Explore this recipes",routeName:"/recipes/getRandoms"}}),r("button",{on:{click:function(t){return e.$refs.randomRecipe.updateRecipes()}}},[e._v(" New Random Recipes ")])],1),r("b-col",{staticClass:"rightCol"},[r("RecipePreviewList",{directives:[{name:"show",rawName:"v-show",value:e.$root.store.username,expression:"$root.store.username"}],ref:"lastViewed",staticClass:"LastViewedRecipes",attrs:{title:"Last Viewed Recipes",routeName:"/users/lastWatched"}}),r("LoginPage",{directives:[{name:"show",rawName:"v-show",value:!e.$root.store.username,expression:"!$root.store.username"}]})],1)],1)],1)},h=[],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),e._l(e.recipes,(function(t){return r("b-row",{key:t.id},[r("b-col",[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:t,title:e.title}})],1)],1)}))],2)},g=[],_=r("2909"),w=(r("96cf"),r("1da1")),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",[r("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}}),r("b-card-img",{staticClass:"mask",staticStyle:{"background-color":"hsla(0, 0%, 98%, 0.35)"},attrs:{src:e.recipe.image,href:"#"}}),r("b-card-title",{staticClass:"recipe-title"},[e._v(e._s(e.title))]),r("b-card-title",{attrs:{id:"title",title:e.recipe.title}}),r("b-card-text",[r("b-list-group",{attrs:{flush:""}},[r("dt",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),r("dt",[e._v(e._s(e.recipe.popularity)+" likes")]),r("dt",[e._v(e._s(e.recipe.vegan?"Vegan":"Non-Vegan"))]),r("dt",[e._v(e._s(e.recipe.isWatched?"watched":""))]),r("dt",[e._v(e._s(e.recipe.isFavorited?"favorited":""))])])],1)],1)},C=[],y=r("3135"),$={components:{BListGroup:y["a"]},data:function(){return{image_load:!1}},props:{recipe:{type:Object,required:!0},title:{type:String,required:!0}}},x=$,R=(r("1dad"),Object(c["a"])(x,k,C,!1,null,"70f3e04c",null)),L=R.exports,P={name:"RecipePreviewList",components:{RecipePreview:L},props:{title:{type:String,required:!0},routeName:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+e.routeName);case 3:a=t.sent,n=a.data,e.recipes=[],(r=e.recipes).push.apply(r,Object(_["a"])(n)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},E=P,j=(r("5027"),Object(c["a"])(E,b,g,!1,null,"7fa49338",null)),O=j.exports,S=r("62cc"),N={components:{RecipePreviewList:O,LoginPage:S["default"]},mounted:function(){this.$refs.randomRecipe.updateRecipes()}},q=N,T=(r("11ad"),Object(c["a"])(q,v,h,!1,null,"573b38a8",null)),U=T.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Four Oh Four you didn't")]),r("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},D=[],I={},V=Object(c["a"])(I,A,D,!1,null,null,null),F=V.exports,H=[{path:"/",name:"main",component:U},{path:"/register",name:"register",component:function(){return r.e("chunk-dec28d5c").then(r.bind(null,"eaff"))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(r.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return r.e("chunk-746908e5").then(r.bind(null,"37906"))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return r.e("chunk-11e813ac").then(r.bind(null,"6619"))}},{path:"*",name:"notFound",component:F}],M=H,B=r("8c4f"),G=r("1dce"),J=r.n(G),W=(r("f9e3"),r("2dd8"),r("1073")),K=r("cbd0"),z=r("b1fc"),Q=r("7049"),X=r("a7e2"),Y=r("f9bc"),Z=r("44d4"),ee=r("cca8"),te=r("51c2"),re=r("498a"),ae=r("205f");a["default"].use(B["a"]);var ne=new B["a"]({routes:M});[W["a"],K["a"],z["a"],Q["a"],X["a"],Y["a"],Z["a"],ee["a"],te["a"],re["a"]].forEach((function(e){return a["default"].use(e)})),a["default"].use(J.a),a["default"].component("b-card",ae["a"]),f.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),f.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),a["default"].use(p.a,f.a),a["default"].config.productionTip=!1;var oe={server_domain:"http://localhost:3000",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(oe),new a["default"]({router:ne,data:function(){return{store:oe}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:a,autoHideDelay:3e3})}},render:function(e){return e(l)}}).$mount("#app")},"62cc":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Login")]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin(t)}}},[r("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[r("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),r("b-form-invalid-feedback",[e._v(" Username is required ")])],1),r("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[r("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),r("b-form-invalid-feedback",[e._v(" Password is required ")])],1),r("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("Login")]),r("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),r("router-link",{attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},n=[],o=(r("96cf"),r("1da1")),s=r("b5ae"),i={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:s["required"]},password:{required:s["required"]}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,a=t.$error;return r?!a:null},Login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/Login",{username:e.form.username,password:e.form.password});case 3:t.sent,console.log(e.$root.store.login),e.$root.store.login(e.form.username),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},c=i,u=(r("e5db"),r("2877")),l=Object(u["a"])(c,a,n,!1,null,"753dabf6",null);t["default"]=l.exports},7127:function(e,t,r){},"86e0":function(e,t,r){},a537:function(e,t,r){},e5db:function(e,t,r){"use strict";var a=r("3a97"),n=r.n(a);n.a}});
//# sourceMappingURL=app.09ee3b6c.js.map