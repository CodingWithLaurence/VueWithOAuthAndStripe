(function(e){function n(n){for(var r,a,l=n[0],c=n[1],i=n[2],s=0,p=[];s<l.length;s++)a=l[s],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(p.length)p.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,l=1;l<t.length;l++){var c=t[l];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},u=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var i=0;i<l.length;i++)n(l[i]);var f=c;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],a={name:"app",components:{}},l=a,c=(t("034f"),t("2877")),i=Object(c["a"])(l,o,u,!1,null,null,null),f=i.exports,s=t("8c4f"),p=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v("Hello world")]),t("a",{attrs:{href:"/auth/google"}},[e._v("Login With Google")])])}],v=t("bc3a"),h={name:"HelloWorld",mounted:function(){v.get("/api/secret").then(function(e){return console.log(e)}).catch(function(e){return console.log(e.message)})}},b=h,g=Object(c["a"])(b,p,d,!1,null,"1e55ee78",null),m=g.exports;r["a"].use(s["a"]);var y=new s["a"]({routes:[{path:"/",name:"Hello",component:m}]});r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(e){return e(f)}}).$mount("#app")},"64a9":function(e,n,t){}});
//# sourceMappingURL=app.5521a877.js.map