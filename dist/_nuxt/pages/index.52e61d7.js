(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{443:function(t,r,e){t.exports=e.p+"img/profile.d6f80c9.jpg"},444:function(t,r,e){"use strict";e.r(r);var n=e(443),o=e.n(n),l={data:function(){return{profile:o.a}}},c=e(38),component=Object(c.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("vs-card",{staticClass:"position-relative zoom"},[e("div",{staticClass:"avatar-center"},[e("vs-avatar",{attrs:{size:"125px",src:t.profile,text:"Muhammad Zulfa Dhiaulhaq"}})],1),t._v(" "),e("div",{staticClass:"pt-6 text-center"},[e("h1",[t._v("Muhammad Zulfa Dhiaulhaq")]),t._v(" "),e("p",{staticClass:"py-2"},[t._v("Im a Front End Engineer")])])]),t._v(" "),e("vs-card",{staticClass:"zoom"},[e("vs-row",{attrs:{justify:"center"}},[e("vs-col",[e("vs-list",[e("vs-list-item",{staticClass:"none-border",attrs:{title:"Email",subtitle:"zdhiaulhaq20@gmail.com"}}),t._v(" "),e("vs-list-item",{staticClass:"none-border",attrs:{title:"Linkedin",subtitle:"Muhammad Dhiaulhaq"}}),t._v(" "),e("vs-list-item",{staticClass:"none-border",attrs:{title:"Address",subtitle:"Yogyakarta"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports},445:function(t,r,e){"use strict";e.r(r);var n={props:{header:String,description:String,shortLists:Array,longLists:Array,skillLists:Array}},o=e(38),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("vs-card",{staticClass:"zoom"},[e("div",{staticClass:"none-shadow-header",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("\n        "+t._s(t.header)+"\n      ")])]),t._v(" "),e("div",[void 0!==t.description?e("span",[t._v("\n        "+t._s(t.description)+"\n      ")]):t._e(),t._v(" "),void 0!==t.shortLists?e("div",[e("vs-list",t._l(t.shortLists,(function(t,r){return e("vs-list-item",{key:r,attrs:{title:t.place+" | "+t.from_year+" - "+t.until_year,subtitle:t.major}})})),1)],1):t._e(),t._v(" "),void 0!==t.longLists?e("div",[e("vs-collapse",t._l(t.longLists,(function(r,n){var content=r.content;return e("vs-collapse-item",{key:n},[e("div",{staticClass:"pr-2 font-bold",attrs:{slot:"header"},slot:"header"},[t._v("\n              "+t._s(content.name)+" - "+t._s(content.year)+"\n            ")]),t._v(" "),e("div",[t._v("\n              "+t._s(content.short_description)+"\n            ")])])})),1)],1):t._e(),t._v(" "),void 0!==t.skillLists?e("div",t._l(t.skillLists,(function(r,n){var content=r.content;return e("div",{key:n},[e("span",[t._v(t._s(content.name))]),t._v(" "),e("vs-progress",{attrs:{percent:Number(content.value),color:content.color}})],1)})),0):t._e()])])],1)}),[],!1,null,null,null);r.default=component.exports},446:function(t,r,e){"use strict";e.r(r);var n=e(443),o=e.n(n),l={data:function(){return{profile:o.a,owner:"muhammad-zulfa"}}},c=e(38),component=Object(c.a)(l,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"fixed-top"},[r("vs-list",{staticClass:"no-border"},[r("vs-list-item",[r("vs-button",{staticClass:"zoom",attrs:{target:"",href:"https://www.facebook.com/muhammad.zulfa.dhiaulhaq/","aria-label":"open-facebook-"+this.owner,radius:"",color:"dark","icon-pack":"fa",icon:"fa-facebook-f"}})],1),this._v(" "),r("vs-list-item",[r("vs-button",{staticClass:"zoom",attrs:{target:"",href:"https://github.com/iZuul","aria-label":"open-github-"+this.owner,radius:"",color:"dark","icon-pack":"fa",icon:"fa-github"}})],1),this._v(" "),r("vs-list-item",[r("vs-button",{staticClass:"zoom",attrs:{target:"",href:"https://www.linkedin.com/in/muhammad-dhiaulhaq/","aria-label":"open-linkedin-"+this.owner,radius:"",color:"dark","icon-pack":"fa",icon:"fa-linkedin-square"}})],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports},447:function(t,r,e){"use strict";e.r(r);e(448);var n={props:{columnCardWork:Number,styleWorks:String,listWorks:Array}},o=e(38),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("vs-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h4",[t._v("My Work")])]),t._v(" "),e("div",{style:t.styleWorks},[e("vs-row",t._l(t.listWorks,(function(r,n){var content=r.content;return e("vs-col",{key:n,staticClass:"px-3 pb-2 py-4",attrs:{"vs-w":t.columnCardWork}},[e("vs-card",{staticClass:"zoom",attrs:{fixedHeight:""}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("\n                "+t._s(content.title)+"\n              ")])]),t._v(" "),e("div",{attrs:{slot:"media"},slot:"media"},[e("img",{attrs:{src:content.image.filename,alt:content.image.alt}})]),t._v(" "),e("div",[e("span",[t._v(t._s(content.short_description))])]),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("vs-row",{attrs:{"vs-justify":"flex-end"}},[content.link.url?e("a",{attrs:{href:content.link.url,target:"_blank"}},[e("vs-button",{attrs:{href:content.link,"aria-label":"open-"+content.shortName,type:"gradient",color:"primary",icon:"arrow_forward",target:""}})],1):t._e()])],1)])],1)})),1)],1)])],1)}),[],!1,null,null,null);r.default=component.exports},448:function(t,r,e){"use strict";var n=e(8),o=e(31),l=e(39),c=e(228),d=e(107),h=e(18),v=e(73).f,f=e(108).f,m=e(15).f,_=e(449).trim,k=n.Number,W=k,w=k.prototype,y="Number"==l(e(141)(w)),C="trim"in String.prototype,x=function(t){var r=d(t,!1);if("string"==typeof r&&r.length>2){var e,n,o,l=(r=C?r.trim():_(r,3)).charCodeAt(0);if(43===l||45===l){if(88===(e=r.charCodeAt(2))||120===e)return NaN}else if(48===l){switch(r.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+r}for(var code,c=r.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+r};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(t){var r=arguments.length<1?0:t,e=this;return e instanceof k&&(y?h((function(){w.valueOf.call(e)})):"Number"!=l(e))?c(new W(x(r)),e,k):x(r)};for(var N,L=e(14)?v(W):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;L.length>E;E++)o(W,N=L[E])&&!o(k,N)&&m(k,N,f(W,N));k.prototype=w,w.constructor=k,e(19)(n,"Number",k)}},449:function(t,r,e){var n=e(12),o=e(40),l=e(18),c=e(450),d="["+c+"]",h=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),f=function(t,r,e){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),h=o[t]=d?r(m):c[t];e&&(o[e]=h),n(n.P+n.F*d,"String",o)},m=f.trim=function(t,r){return t=String(o(t)),1&r&&(t=t.replace(h,"")),2&r&&(t=t.replace(v,"")),t};t.exports=f},450:function(t,r){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},451:function(t,r,e){"use strict";e.r(r);e(41);var n=e(7),o=e(444),l=e(445),c=e(446),d=e(447),h={components:{Profile:o.default,Card:l.default,ListButton:c.default,ListWorks:d.default},head:function(){return{title:"Muhammad Zulfa Dhiaulhaq | Resume",meta:[{hid:"description",name:"description",content:"Resume dan Profil Muhammad Zulfa Dhiaulhaq, Junior Frontend Web Developer"},{hid:"author",name:"author",content:"Muhammad Zulfa Dhiaulhaq"}],htmlAttrs:{lang:"en"}}},data:function(){return{loading:!0,columnWidth1:4,columnWidth2:4,columnWidth3:4,profileDescription:"I was born in Surakarta and grew up there. Want to become a professional front end developer who can realize various kinds of designs",eduactionList:[{place:"Universitas Gadjah Mada",from_year:"2016",until_year:"2020",major:"Teknologi Informasi"},{place:"SMA Negeri 1 Surakarta",from_year:"2013",until_year:"2016",major:""}]}},mounted:function(){var t=this;this.$vs.loading(),window.innerWidth<=767?(this.columnWidth1=this.columnWidth2=this.columnWidth3=this.columnCardWork=12,this.styleWorks="max-height: 25rem; overflow-y: scroll; overflow-x: hidden;"):window.innerWidth>=768&&window.innerWidth<1024?(this.columnWidth1=12,this.columnWidth2=this.columnWidth3=6,this.columnCardWork=4,this.styleWorks=""):(this.columnWidth1=this.columnWidth2=this.columnWidth3=4,this.columnCardWork=4,this.styleWorks=""),setTimeout((function(){t.$vs.loading.close(),t.loading=!1}),500),window.onresize=function(){window.innerWidth<=767?(this.columnWidth1=this.columnWidth2=this.columnWidth3=this.columnCardWork=12,this.styleWorks="max-height: 25rem; overflow-y: scroll; overflow-x: hidden;"):window.innerWidth>=768&&window.innerWidth<1024?(this.columnWidth1=12,this.columnWidth2=this.columnWidth3=6,this.columnCardWork=4,this.styleWorks=""):(this.columnWidth1=this.columnWidth2=this.columnWidth3=4,this.columnCardWork=4,this.styleWorks="")}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function r(){var e,n,o,l,c,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.app.$storyapi.get("cdn/stories",{version:"publish",starts_with:"skills/"});case 2:return e=r.sent,r.next=5,t.app.$storyapi.get("cdn/stories",{version:"publish",starts_with:"careers/"});case 5:return n=r.sent,r.next=8,t.app.$storyapi.get("cdn/stories",{version:"publish",starts_with:"blog/"});case 8:return o=r.sent,l={data:o.data.stories},c={data:e.data.stories},d={data:n.data.stories},r.abrupt("return",{portofolio:l,skills:c,careers:d});case 13:case"end":return r.stop()}}),r)})))()}},v=e(38),component=Object(v.a)(h,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"main"},[t.loading?[e("div",{staticClass:"light"})]:[e("vs-row",[e("vs-col",[e("ListButton",{staticStyle:{"z-index":"1000"}})],1)],1),t._v(" "),e("vs-row",{staticClass:"h-100"},[e("vs-col",{attrs:{"vs-w":t.columnWidth1,type:"flex","vs-align":"center"}},[e("Profile",{staticClass:"px-3"})],1),t._v(" "),e("vs-col",{attrs:{"vs-w":t.columnWidth2,l:"",type:"flex","vs-align":"center"}},[e("Card",{staticClass:"px-3",attrs:{header:"Personal Profile",description:t.profileDescription}}),t._v(" "),e("Card",{staticClass:"px-3",attrs:{header:"Education",shortLists:t.eduactionList}})],1),t._v(" "),e("vs-col",{attrs:{"vs-w":t.columnWidth3,l:"",type:"flex","vs-align":"center"}},[e("Card",{staticClass:"px-3",attrs:{header:"Skills",skillLists:t.skills.data}})],1)],1),t._v(" "),e("vs-row",[e("vs-col",[e("Card",{staticClass:"px-3",attrs:{header:"Carrer Summary",longLists:t.careers.data}})],1)],1),t._v(" "),e("vs-row",[e("vs-col",[e("ListWorks",{staticClass:"px-3 pt-3",attrs:{columnCardWork:t.columnCardWork,styleWorks:t.styleWorks,listWorks:t.portofolio.data}})],1)],1)]],2)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{ListButton:e(446).default,Profile:e(444).default,Card:e(445).default,ListWorks:e(447).default})}}]);