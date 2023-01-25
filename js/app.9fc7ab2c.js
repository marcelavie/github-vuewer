(function(){"use strict";var t={6348:function(t,e,s){var n=s(144),i=s(1096),r=s(3250),o=s(4202),a=s(5057),u=s(2469),l=s(3551),c=s(5234),p=function(){var t=this,e=t._self._c;return e(i.Z,[e(r.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(u.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(u.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(c.Z),e(o.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(a.Z,[t._v("mdi-open-in-new")])],1)],1),e(l.Z,[e("GithubVuewer")],1)],1)},h=[],f=s(6035),d=function(){var t=this,e=t._self._c;return e(f.Z,[e("GithubRepo",{on:{reposelected:t.onRepoSelected}}),e("GithubIssues",{attrs:{repo:t.repo}}),e("GithubContent",{attrs:{repo:t.repo}})],1)},m=[],g=s(4177),v=s(4437),b=s(5294),y=s(6069),_=function(){var t=this,e=t._self._c;return e("div",[e(b.Z,{staticClass:"text-center"},[e(v.Z,{attrs:{cols:"6"}},[e(g.Z,{attrs:{label:"Encontre seu usuário",items:t.userlist,loading:t.userloading,"search-input":t.usersearch,"item-text":"login"},on:{"update:searchInput":function(e){t.usersearch=e},"update:search-input":function(e){t.usersearch=e}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),e(v.Z,{attrs:{cols:"6"}},[e(y.Z,{attrs:{items:t.repolist,loading:t.repoloading,"item-text":"name",label:"Selecione o repositorio","return-object":"","single-line":""},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1)],1)],1)},w=[];function Z(t,e){let s=null;function n(){s&&clearTimeout(s);const n=this,i=arguments;s=setTimeout((()=>{t.apply(n,i),s=null}),e)}return n}async function j(t){let e=!0,s=[],n=1;while(e){const i=await fetch(`${t}?page=${n}`),r=await i.json();r.length>0?(s=s.concat(r),n++):e=!1}return s}const x={async search_users(t){const e=`https://api.github.com/search/users?q=${t}`,s=await fetch(e);return await s.json()},async lista_repos(t){const e=`https://api.github.com/users/${t}/repos`,s=await j(e);return s},async listaIssues(t,e,s){const n=`https://api.github.com/repos/${t}/${e}/issues?page=${s}`,i=await fetch(n);return await i.json()},async listaArquivos(t,e){const s=`https://api.github.com/repos/${t}/${e}/contents/`,n=await fetch(s);return await n.json()}};var k={data:()=>({user:null,repo:null,usersearch:null,userlist:[],repolist:[],userloading:!1,repoloading:!1}),methods:{procuraUsuariosGithub:Z((async function(){this.userloading=!0;const t=await x.search_users(this.usersearch);this.userlist=t.items,this.userloading=!1}),500),async listaRepositorios(){this.repoloading=!0;const t=await x.lista_repos(this.user);this.repolist=t,this.repoloading=!1}},watch:{usersearch(){this.procuraUsuariosGithub()},user(){this.user&&this.listaRepositorios()},repo(){this.$emit("reposelected",this.repo)}}},O=k,P=s(3736),C=(0,P.Z)(O,_,w,!1,null,null,null),S=C.exports,$=s(6275),G=s(4397),I=function(){var t=this,e=t._self._c;return e("div",[e(b.Z,[e(v.Z,{attrs:{cols:"12"}},[e(G.Z,{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Number")]),e("th",{staticClass:"text-left"},[t._v("Title")])])]),e("tbody",t._l(t.issues,(function(s){return e("tr",{key:s.number},[e("td",[t._v(t._s(s.number))]),e("td",[t._v(t._s(s.title))])])})),0)]},proxy:!0}])})],1)],1),e(b.Z,[e(v.Z,{attrs:{cols:"12"}},[t.loading?e($.Z,{attrs:{indeterminate:"",color:"primary"}}):t._e(),t.temmais?e(o.Z,{attrs:{color:"primary"},on:{click:t.listaIssues}},[t._v("MAIS")]):t._e()],1)],1)],1)},R=[],T={props:["repo"],data:()=>({issues:[],loading:!1,temmais:!1,currentPage:1}),methods:{async listaIssues(){this.loading=!0;const t=await x.listaIssues(this.repo.owner.login,this.repo.name,this.currentPage);this.issues=this.issues.concat(t),this.currentPage++,this.loading=!1,this.temmais=t.length>0}},watch:{repo(){this.issues=[],this.repo?(this.temmais=!1,this.currentPage=1,this.listaIssues()):(this.issues=[],this.temmais=!1,this.currentPage=1)}}},M=T,A=(0,P.Z)(M,I,R,!1,null,null,null),E=A.exports,V=s(2817),q=function(){var t=this,e=t._self._c;return e(V.Z,{attrs:{open:t.initiallyOpen,items:t.items,activatable:"","item-key":"name","open-on-click":""},scopedSlots:t._u([{key:"prepend",fn:function({item:s,open:n}){return[s.file?e(a.Z,[t._v(" "+t._s(t.files[s.file])+" ")]):e(a.Z,[t._v(" "+t._s(n?"mdi-folder-open":"mdi-folder")+" ")])]}}]),model:{value:t.tree,callback:function(e){t.tree=e},expression:"tree"}})},L=[],N={data:()=>({initiallyOpen:["public"],files:{html:"mdi-language-html5",js:"mdi-nodejs",json:"mdi-code-json",md:"mdi-language-markdown",pdf:"mdi-file-pdf",png:"mdi-file-image",txt:"mdi-file-document-outline",xls:"mdi-file-excel"},tree:[],items:[{name:".git"},{name:"node_modules"},{name:"public",children:[{name:"static",children:[{name:"logo.png",file:"png"}]},{name:"favicon.ico",file:"png"},{name:"index.html",file:"html"}]},{name:".gitignore",file:"txt"},{name:"babel.config.js",file:"js"},{name:"package.json",file:"json"},{name:"README.md",file:"md"},{name:"vue.config.js",file:"js"},{name:"yarn.lock",file:"txt"}]})},U=N,D=(0,P.Z)(U,q,L,!1,null,null,null),F=D.exports,z={components:{GithubRepo:S,GithubIssues:E,GithubContent:F},data:()=>({repo:null}),methods:{onRepoSelected(t){this.repo=t}}},B=z,H=(0,P.Z)(B,d,m,!1,null,null,null),J=H.exports,K={name:"App",components:{GithubVuewer:J},data:()=>({})},Q=K,W=(0,P.Z)(Q,p,h,!1,null,null,null),X=W.exports,Y=s(2250);n.ZP.use(Y.Z);var tt=new Y.Z({});n.ZP.config.productionTip=!1,new n.ZP({vuetify:tt,render:t=>t(X)}).$mount("#app")}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,n,i,r){if(!n){var o=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],r=t[c][2];for(var a=!0,u=0;u<n.length;u++)(!1&r||o>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[u])}))?n.splice(u--,1):(a=!1,r<o&&(o=r));if(a){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,i,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,r,o=n[0],a=n[1],u=n[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);if(u)var c=u(s)}for(e&&e(n);l<o.length;l++)r=o[l],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(c)},n=self["webpackChunkgithub_vuewer"]=self["webpackChunkgithub_vuewer"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(6348)}));n=s.O(n)})();
//# sourceMappingURL=app.9fc7ab2c.js.map