(function(t){function e(e){for(var s,a,u=e[0],i=e[1],l=e[2],d=0,p=[];d<u.length;d++)a=u[d],n[a]&&p.push(n[a][0]),n[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,u=1;u<r.length;u++){var i=r[u];0!==n[i]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var s={},n={app:0},o=[];function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var s=r("64a9"),n=r.n(s);n.a},"077e":function(t,e,r){"use strict";var s=r("bff1"),n=r.n(s);n.a},1827:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var s=r("a026"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1"),r("router-view")],1)},o=[],a={name:"app"},u=a,i=(r("034f"),r("2877")),l=Object(i["a"])(u,n,o,!1,null,null,null),c=l.exports,d=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"associatedwithsearch"},[r("h2",[t._v("Find words associated with each other using the EasyWordFinder.")]),r("p",[r("router-link",{attrs:{to:"/describedbysearch"}},[t._v("Search for words described by other words.")])],1),r("p",[r("router-link",{attrs:{to:"/wordcompletionsearch"}},[t._v("Word completion tool.")])],1),r("form",{on:{submit:function(e){return e.preventDefault(),t.findWords(e)}}},[r("p",[t._v("\r\n        Search for a word by association\r\n        "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.noun,expression:"noun"}],attrs:{type:"text"},domProps:{value:t.noun},on:{input:function(e){e.target.composing||(t.noun=e.target.value)}}}),r("button",{attrs:{type:"submit"}},[t._v("Search")])])]),t.results&&t.results.length>0?r("ul",{staticClass:"results"},t._l(t.results,function(e){return r("li",[r("p",[r("strong",[t._v(t._s(e.word))])]),r("p",[t._v(t._s(e.score))])])}),0):t.results&&0==t.results.length?r("div",{staticClass:"no-results"},[r("h2",[t._v("No Words Found")]),r("p",[t._v("Please adjust your search to find more words.")])]):t._e(),t.errors&&t.errors.length>0?r("ul",{staticClass:"errors"},t._l(t.errors,function(e){return r("li",[t._v(t._s(e.message))])}),0):t._e()])},h=[],f=r("bc3a"),v=r.n(f),m={name:"associatedwithsearch",data(){return{results:null,errors:[],noun:""}},methods:{findWords:function(){v.a.get("https://api.datamuse.com/words",{params:{rel_jjb:this.noun}}).then(t=>{this.results=t.data}).catch(t=>{this.errors.push(t)})}}},_=m,b=(r("077e"),Object(i["a"])(_,p,h,!1,null,"09e3b31b",null)),w=b.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"describedbysearch"},[r("h2",[t._v("Find words commonly described by the search word using EasyWordFinder.")]),r("p",[r("router-link",{attrs:{to:"/"}},[t._v("Search for words associated with other words.")])],1),r("p",[r("router-link",{attrs:{to:"/wordcompletionsearch"}},[t._v("Word completion tool.")])],1),r("form",{on:{submit:function(e){return e.preventDefault(),t.findWords(e)}}},[r("p",[t._v("\r\n        Find a word by a word that commonly describes it\r\n        "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.noun,expression:"noun"}],attrs:{type:"text"},domProps:{value:t.noun},on:{input:function(e){e.target.composing||(t.noun=e.target.value)}}}),r("button",{attrs:{type:"submit"}},[t._v("Search")])])]),t.results&&t.results.length>0?r("ul",{staticClass:"results"},t._l(t.results,function(e){return r("li",[r("p",[r("strong",[t._v(t._s(e.word))])]),r("p",[t._v(t._s(e.score))])])}),0):t.results&&0==t.results.length?r("div",{staticClass:"no-results"},[r("h2",[t._v("No Words Found")]),r("p",[t._v("Please adjust your search to find more words.")])]):t._e(),t.errors&&t.errors.length>0?r("ul",{staticClass:"errors"},t._l(t.errors,function(e){return r("li",[t._v(t._s(e.message))])}),0):t._e()])},y=[],j={name:"describedbysearch",data(){return{results:null,errors:[],noun:""}},methods:{findWords:function(){v.a.get("https://api.datamuse.com/words",{params:{rel_jjb:this.noun}}).then(t=>{this.results=t.data}).catch(t=>{this.errors.push(t)})}}},x=j,W=(r("a640"),Object(i["a"])(x,g,y,!1,null,"6dafb3b2",null)),O=W.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wordcompletionsearch"},[r("h2",[t._v("Use the word completion tool on EasyWordFinder.")]),r("p",[r("router-link",{attrs:{to:"/"}},[t._v("Search for words associated with other words.")])],1),r("p",[r("router-link",{attrs:{to:"/describedbysearch"}},[t._v("Search for words described by other words.")])],1),r("form",{on:{submit:function(e){return e.preventDefault(),t.findWords(e)}}},[r("p",[t._v("\r\n        Enter the first letters of a word and we'll try to guess it\r\n        "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.noun,expression:"noun"}],attrs:{type:"text"},domProps:{value:t.noun},on:{input:function(e){e.target.composing||(t.noun=e.target.value)}}}),r("button",{attrs:{type:"submit"}},[t._v("Search")])])]),t.results&&t.results.length>0?r("ul",{staticClass:"results"},t._l(t.results,function(e){return r("li",[r("p",[r("strong",[t._v(t._s(e.word))])]),r("p",[t._v(t._s(e.score))])])}),0):t.results&&0==t.results.length?r("div",{staticClass:"no-results"},[r("h2",[t._v("No Words Found")]),r("p",[t._v("Please adjust your search to find more words.")])]):t._e(),t.errors&&t.errors.length>0?r("ul",{staticClass:"errors"},t._l(t.errors,function(e){return r("li",[t._v(t._s(e.message))])}),0):t._e()])},C=[],P={name:"wordcompletionsearch",data(){return{results:null,errors:[],noun:""}},methods:{findWords:function(){v.a.get("https://api.datamuse.com/words",{params:{rel_jjb:this.noun}}).then(t=>{this.results=t.data}).catch(t=>{this.errors.push(t)})}}},k=P,F=(r("fc51"),Object(i["a"])(k,S,C,!1,null,"3c4480dd",null)),E=F.exports;s["a"].use(d["a"]);var N=new d["a"]({routes:[{path:"/",name:"associatedwithsearch",component:w},{path:"/describedbysearch",name:"describedbysearch",component:O},{path:"/wordcompletionsearch",name:"wordcompletionsearch",component:E}]});s["a"].config.productionTip=!1,new s["a"]({el:"#app",router:N,template:"<App/>",components:{App:c}})},"64a9":function(t,e,r){},a640:function(t,e,r){"use strict";var s=r("1827"),n=r.n(s);n.a},af11:function(t,e,r){},bff1:function(t,e,r){},fc51:function(t,e,r){"use strict";var s=r("af11"),n=r.n(s);n.a}});
//# sourceMappingURL=app.c5ceb6a5.js.map