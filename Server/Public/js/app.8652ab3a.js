(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],u=0,v=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(v.length)v.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,i=1;i<s.length;i++){var o=s[i];0!==r[o]&&(a=!1)}a&&(n.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},i={app:0},r={app:0},n=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4fc83e56"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={about:1};i[e]?t.push(i[e]):0!==i[e]&&s[e]&&t.push(i[e]=new Promise((function(t,s){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"d85934fb"}[e]+".css",r=c.p+a,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var l=n[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var v=document.getElementsByTagName("style");for(o=0;o<v.length;o++){l=v[o],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||r,n=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete i[e],m.parentNode.removeChild(m),s(n)},m.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,s){a=r[e]=[t,s]}));t.push(a[2]=n);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var v=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var s=r[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;v.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",v.name="ChunkLoadError",v.type=a,v.request=i,s[1](v)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var v=0;v<l.length;v++)t(l[v]);var m=u;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),i=s.n(a);i.a},2086:function(e,t,s){},"237d":function(e,t,s){"use strict";var a=s("f143"),i=s.n(a);i.a},"23a7":function(e,t,s){e.exports=s.p+"img/handtools5.08eac171.jpg"},"43be":function(e,t,s){e.exports=s.p+"img/neonbrand-SiYxQRATT2M-unsplash.ddf4718e.jpg"},"488b":function(e,t,s){},"507f":function(e,t,s){e.exports=s.p+"img/Handyman Brett.256fbc09.jpg"},5312:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=s("5f5b");s("ab8b"),s("2dd8");a["default"].use(i["a"]);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("NavBar"),s("router-view")],1)},n=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"navBar"},[s("Header"),s("b-navbar",{staticClass:"navBar",attrs:{toggleable:"lg","bg-variant":"#a82200"}},[s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",{staticClass:"linkText",attrs:{href:"/"}},[e._v("Home")]),s("b-nav-item",{staticClass:"linkText",attrs:{href:"/Services"}},[e._v("Services")]),s("b-nav-item",{staticClass:"linkText",attrs:{href:"/meetBrett"}},[e._v("Your Handyman")])],1),s("b-navbar-nav",{staticClass:"ml-auto"})],1)],1)],1)},c=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"headerBar"},[s("div",[s("ul",{staticClass:"headerGroup"},[e._m(0),e._m(1),s("li",[s("button",{staticClass:"headerList"},[s("a",{attrs:{href:"\\quote"}},[s("b-icon",{staticClass:"h1 mb-2",attrs:{icon:"calendar"}}),e._m(2)],1)])]),s("li",[s("button",{staticClass:"headerList",attrs:{href:"#"}},[s("a",{attrs:{href:"mailto: abc@example.com"}},[s("b-icon",{staticClass:"h1 mb-2",attrs:{icon:"envelope"}}),e._m(3)],1)])]),s("li"),s("li")])])])},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{staticClass:"logo",attrs:{src:s("6a17")}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("button",{staticClass:"headerList"},[s("a",{attrs:{href:"tel:+1-801-643-6574"}},[s("img",{staticClass:"iconImage",attrs:{src:"https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-3/24/5046-512.png"}}),s("div",[s("h4",{staticClass:"headerText detail"},[e._v("801-643-6574")]),s("h4",{staticClass:"headerText detail"},[e._v("Give me a call or send a text")])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h4",{staticClass:"headerText"},[e._v("Get A Quote")]),s("h4",{staticClass:"headerText detail"},[e._v("Let me know what you need!")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h4",{staticClass:"headerText detail"},[e._v("brettEmail@email.com")]),s("h4",{staticClass:"headerText detail"},[e._v("Send me and email")])])}],v=s("b1e0"),m=(s("5df9"),s("6acf"));a["default"].use(v["a"]);var d={name:"Header",component:{getQuote:m["a"]}},f=d,p=(s("8baf"),s("2877")),h=Object(p["a"])(f,l,u,!1,null,null,null),b=h.exports,g={name:"NavBar",components:{Header:b}},_=g,y=(s("d8d4"),Object(p["a"])(_,o,c,!1,null,"4d1c2d40",null)),C=y.exports,x=(s("f9e3"),{name:"App",components:{NavBar:C}}),w=x,T=(s("034f"),Object(p["a"])(w,r,n,!1,null,null,null)),S=T.exports,E=(s("d3b7"),s("8c4f")),k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"site"},[s("div",{staticClass:"sitebackground"}),s("Carousel"),e._m(0),s("div",{staticClass:"sectionSpace"}),s("div",{staticClass:"services"},[s("ServiceCatagory")],1),s("div",{attrs:{id:"trial"}},[s("h1",[e._v(e._s(e.product))])]),s("div",[s("HandyMan",{staticClass:"HandyMan"})],1),s("div",[s("Reviews")],1),s("div",{staticClass:"quote",attrs:{id:"Getquote"}},[s("div",[s("GetQuote")],1)]),s("div",{staticClass:"footer"})],1)},j=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"description"},[s("h1",[e._v("Hello World")]),s("h4",[e._v("is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")])])}],L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"underline"}),s("br"),s("div",{staticClass:"brettSection"},[s("div",{staticClass:"brettDescription"},[e._m(0),s("img",{staticClass:"brettImage",attrs:{src:e.image}})])])])},O=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"brettText"},[s("h2",[e._v("Brett White")]),s("div",{staticClass:"underline"}),s("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),s("br"),e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])])}],$=s("507f"),I=s.n($),N={data:function(){return{image:I.a,services:[]}},mounted:function(){fetch("http://localhost:5000/services",{method:"GET"}).then((function(e){console.log(e.data)}),(function(e){console.log(e)}))}},B=N,D=(s("9fbe"),Object(p["a"])(B,L,O,!1,null,null,null)),q=D.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[s("b-carousel-slide",{staticClass:"firstSlide",staticStyle:{height:"500px"},attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":e.image1}}),s("b-carousel-slide",{staticStyle:{height:"500px"},attrs:{"img-src":e.image2}},[s("h1",[e._v("Hello world!")])]),s("b-carousel-slide",{staticStyle:{height:"500px"},attrs:{"img-src":"https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg"}}),s("b-carousel-slide",{scopedSlots:e._u([{key:"img",fn:function(){return[s("img",{staticClass:"d-block img-fluid w-100",staticStyle:{height:"500px","object-fit":"cover"},attrs:{width:"1024",src:"https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg",alt:"image slot"}})]},proxy:!0}])}),s("b-carousel-slide",{staticStyle:{height:"500px"},attrs:{caption:"Blank Image","img-src":"https://images.pexels.com/photos/1571736/pexels-photo-1571736.jpeg","img-alt":"Blank image"}},[s("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum. ")])])],1)],1)},H=[],A=s("43be"),G=s.n(A),M=s("7801"),R=s.n(M),Q={data:function(){return{publicPath:"/",slide:0,sliding:null,image1:G.a,image2:R.a}}},U=Q,F=(s("88bf"),Object(p["a"])(U,P,H,!1,null,null,null)),J=F.exports,W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"service"},[s("h1",[e._v("Types of Service Offered")]),s("b-container",{staticClass:"justify-content-md-center",attrs:{fluid:""}},[s("b-row",{staticClass:"serviceCatagory"},[s("b-col",{staticClass:"serviceType1",attrs:{md:"auto"}},[s("a",{attrs:{href:"/Services"}},[s("div",{staticClass:"serviceText"},[s("h4",[e._v("Electrical")]),s("p",{staticClass:"serviceDesc"},[e._v("Lighting, appliances and outlets")])])])]),s("b-col",{staticClass:"serviceType2",attrs:{md:"auto"}},[s("a",{attrs:{href:"/Services"}},[s("div",{staticClass:"serviceText"},[s("h4",[e._v("Interior")]),s("p",{staticClass:"serviceDesc"},[e._v("A short decription of what is going on")])])])]),s("b-col",{staticClass:"serviceType3",attrs:{md:"auto"}},[s("a",{attrs:{href:"/Services"}},[s("div",{staticClass:"serviceText"},[s("h4",[e._v("Landscaping")]),s("p",{staticClass:"serviceDesc"},[e._v("Get your yard looking the way you want")])])])]),s("b-col",{staticClass:"serviceType4",attrs:{md:"auto"}},[s("a",{attrs:{href:"/Services"}},[s("div",{staticClass:"serviceText"},[s("h4",[e._v("Furnature")]),s("p",{staticClass:"serviceDesc"},[e._v("Let us put together your new furnature")])])])]),s("b-col",{staticClass:"serviceType5",attrs:{md:"auto"}},[s("a",{attrs:{href:"/Services"}},[s("div",{staticClass:"serviceText"},[s("h4",[e._v("Plumbing")]),s("p",{staticClass:"serviceDesc"},[e._v("Got issues with your pipes. We can do that.")])])])]),s("b-col",{staticClass:"serviceType6",attrs:{md:"auto"}},[s("a",{attrs:{href:"/Services"}},[s("div",{staticClass:"serviceText"},[s("h4",[e._v("Odd Jobs")]),s("p",{staticClass:"serviceDesc"},[e._v("Not sure how to describe your issue? Let us help.")])])])])],1)],1)],1)},z=[],Y=s("23a7"),K=s.n(Y);s("f064");var V={name:"ServiceCatagory",data:function(){return{serviceImage:K.a}}},X=V,Z=(s("d1bd"),Object(p["a"])(X,W,z,!1,null,null,null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Reviews"},[s("h1",{staticClass:"title"},[e._v("Reviews")]),s("div",{staticClass:"reviewsTable"},[s("div",{staticClass:"Table"},[s("div",{staticClass:"reviews"},[s("div",{staticClass:"review one"},[e._m(0),s("div",[s("img",{staticClass:"reviewImage",attrs:{src:e.person1}})]),s("div",{staticClass:"reviewText"},[e._v("If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant.")])]),s("div",{staticClass:"review two"},[e._m(1),s("div",[s("img",{staticClass:"reviewImage",attrs:{src:e.person2}})]),s("div",{staticClass:"reviewText"},[e._v("If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant.")])]),s("div",{staticClass:"review three"},[e._m(2),s("div",[s("img",{staticClass:"reviewImage",attrs:{src:e.person3}})]),s("div",{staticClass:"reviewText"},[e._v("If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant.")])])])])])])},se=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"review-title"},[s("h3",[e._v("Review 1")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"review-title"},[s("h3",[e._v("Review 2")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"review-title"},[s("h3",[e._v("Review 3")])])}],ae=s("b4a1"),ie=s.n(ae),re=s("b862"),ne=s.n(re),oe=s("c7fb"),ce=s.n(oe),le={name:"Reviews",data:function(){return{person1:ie.a,person2:ne.a,person3:ce.a}}},ue=le,ve=(s("7266"),Object(p["a"])(ue,te,se,!1,null,"4b7c4b88",null)),me=ve.exports,de={name:"Home",components:{Carousel:J,ServiceCatagory:ee,HandyMan:q,Reviews:me,GetQuote:m["a"]}},fe=de,pe=(s("8598"),Object(p["a"])(fe,k,j,!1,null,"5424ad72",null)),he=pe.exports,be=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"services"},[s("div",{staticClass:"hello"},[s("h2",[e._v("Services")]),s("div"),s("Electrical")],1)])},ge=[],_e=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"catagoryButtons"},[s("button",{staticClass:"serviceCatagory",on:{click:function(t){e.search="Electrical"}}},[e._v("Electrical")]),s("button",{staticClass:"serviceCatagory",on:{click:function(t){e.search="Furniture"}}},[e._v("Furniture")]),s("button",{staticClass:"serviceCatagory",on:{click:function(t){e.search="Interior"}}},[e._v("Interior")]),s("button",{staticClass:"serviceCatagory",on:{click:function(t){e.search="Landscaping"}}},[e._v("Landscaping")]),s("button",{staticClass:"serviceCatagory",on:{click:function(t){e.search="Odd Jobs"}}},[e._v("Odd Jobs")]),s("button",{staticClass:"serviceCatagory",on:{click:function(t){e.search="Plumbing"}}},[e._v("Plumbing")])]),e._l(e.filterServices,(function(t){return s("div",{key:t.ServiceType,staticClass:"serviceTypeList"},[s("h2",{staticClass:"serviceName"},[e._v(e._s(t.ServiceName))]),s("p",[e._v(e._s(t.ServiceDescription))]),s("a",{attrs:{href:"/quote"}},[s("b-button",{attrs:{variant:"success"}},[e._v("Get A Quote")])],1)])}))],2)},ye=[],Ce=(s("4de4"),s("ac1f"),s("466d"),s("841c"),s("b441")),xe={data:function(){return{search:"Electrical",services:[],serviceList:"",serviceType:"Electrical",serviceDescription:"",serviceName:"",serviceTime:"",servicePrice:"",serviceImg:"",queryString:"serviceType=Electrical"}},components:{},mounted:function(){var e=this;fetch("".concat(Ce["uriBase"],"/api/Servicelist"),{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.services=t}))},computed:{filterServices:function(){var e=this;return this.services.filter((function(t){return t.ServiceType.match(e.search)}))}}},we=xe,Te=(s("70fb"),Object(p["a"])(we,_e,ye,!1,null,"21f1ab3d",null)),Se=Te.exports,Ee={name:"Services",components:{Electrical:Se},data:function(){return{services:[],serviceList:null,serviceType:"",serviceDescription:"",serviceName:"",serviceTime:"",servicePrice:"",serviceImg:""}},method:function(){fetch("".concat(Ce["uriBase"],"/api/postservices"),{method:"Post",body:JSON.stringify({serviceType:this.serviceType,serviceName:this.serviceName,job_time:this.serviceTime,price:this.servicePrice,description:this.serviceDescription,img:this.serviceImg})}).then((function(e){return console.log("service created"+e)}))}},ke=Ee,je=(s("c8a6"),Object(p["a"])(ke,be,ge,!1,null,"3594f05b",null)),Le=je.exports;a["default"].use(E["a"]);var Oe=[{path:"/",name:"home",component:he},{path:"/Services",name:"Services",component:Le},{path:"/meetBrett",name:"MeetBrett",component:q},{path:"/quote",name:"Get Quote",component:function(){return s.e("about").then(s.bind(null,"38aa"))}}],$e=new E["a"]({mode:"history",base:"/",routes:Oe}),Ie=$e;a["default"].config.productionTip=!1,new a["default"]({router:Ie,render:function(e){return e(S)}}).$mount("#app")},6860:function(e,t,s){},"6a17":function(e,t,s){e.exports=s.p+"img/154-1547479_handyman-logos-for-business-cards-download-handyman.61694b3e.png"},"6acf":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"quoteform"},[s("h1",[e._v("Get a Quote")]),s("form",{staticClass:"contact-form",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("label",[e._v("Name")]),s("b-form-input",{attrs:{placeholder:"Enter your name",name:"from_name"},model:{value:e.form.from_name,callback:function(t){e.$set(e.form,"from_name",t)},expression:"form.from_name"}}),s("br"),s("label",[e._v("Email")]),s("b-form-input",{attrs:{type:e.email,placeholder:"Enter your Email",name:"reply_to"},model:{value:e.form.reply_to,callback:function(t){e.$set(e.form,"reply_to",t)},expression:"form.reply_to"}}),s("br"),s("label",[e._v("Phone number")]),s("b-form-input",{attrs:{type:e.phone,placeholder:"Best number to reach you at",name:"phoneNumber"},model:{value:e.form.phone_number,callback:function(t){e.$set(e.form,"phone_number",t)},expression:"form.phone_number"}}),s("br"),s("label",[e._v("Service Type")]),s("b-form-select",{attrs:{options:e.serviceTypeList},model:{value:e.form.serviceType,callback:function(t){e.$set(e.form,"serviceType",t)},expression:"form.serviceType"}}),s("br"),s("label",[e._v("Service Type")]),s("b-form-select",{on:{input:e.filterServices},model:{value:e.form.serviceDetailed,callback:function(t){e.$set(e.form,"serviceDetailed",t)},expression:"form.serviceDetailed"}},e._l(e.filterServices,(function(t){return s("b-form-select-option-group",{key:t.ServiceName},[s("b-form-select-option",{attrs:{value:t.ServiceName}},[e._v(e._s(t.ServiceName))])],1)})),1),s("br"),s("div",{staticClass:"textArea"},[s("label",{staticClass:"textAreaLabel"},[e._v("Message")]),s("b-form-textarea",{staticClass:"messageLabel",attrs:{name:"message",rows:"4"},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),s("br"),s("b-button",{attrs:{value:"Send",block:"",variant:"success"},on:{click:e.submit}},[e._v("Submit Quote Request")])],1)],1)])])},i=[],r=(s("4de4"),s("d3b7"),s("ac1f"),s("466d"),s("0f91")),n=s.n(r),o=s("b441"),c={props:"ModalName",data:function(){return{services:[],serviceTypeList:["Electrical","Landscaping","Interior","Plumbing"],form:{to:"westongb@gmail.com",Subject:"Trial Email",from_name:"",phone_number:"",serviceType:"",reply_to:"",serviceDetailed:"",message:"",to_name:"",html:"<h2>  and  </h2>"}}},beforemounted:{function:function(){n.a.init(" user_MATCgaEeoHw119UWC9Txw").then(this.getServices())}},mounted:function(){var e=this;fetch("".concat(o["uriBase"],"/api/Servicelist"),{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.services=t}))},methods:{submit:function(){event.preventDefault(),console.log(this.form.phone_number),n.a.send("gmail","template_RZenTIyl",{reply_from:this.form.reply_to,html:this.form.message,from_name:this.form.from_name,service_Type:this.form.serviceType,service_detail:this.form.serviceDetailed,phone_Number:this.form.phone_number},"user_MATCgaEeoHw119UWC9Txw").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))}},computed:{filterServices:function(){var e=this;return this.services.filter((function(t){return t.ServiceType.match(e.form.serviceType)}))}}},l=c,u=(s("237d"),s("2877")),v=Object(u["a"])(l,a,i,!1,null,"39f7be3e",null);t["a"]=v.exports},"6df3":function(e,t,s){},"70fb":function(e,t,s){"use strict";var a=s("917e"),i=s.n(a);i.a},7266:function(e,t,s){"use strict";var a=s("6df3"),i=s.n(a);i.a},7801:function(e,t,s){e.exports=s.p+"img/person-holding-pencil-1388944.88e59eae.jpg"},8598:function(e,t,s){"use strict";var a=s("2086"),i=s.n(a);i.a},"85ec":function(e,t,s){},"88bf":function(e,t,s){"use strict";var a=s("ff6c"),i=s.n(a);i.a},"8baf":function(e,t,s){"use strict";var a=s("6860"),i=s.n(a);i.a},"917e":function(e,t,s){},"9a3c":function(e,t,s){},"9fbe":function(e,t,s){"use strict";var a=s("c2a9"),i=s.n(a);i.a},b441:function(e,t){var s="https://handymanslc.herokuapp.com";e.exports.uriBase=s},b4a1:function(e,t,s){e.exports=s.p+"img/robert-godwin-cdksyTqEXzo-unsplash.4b974d35.jpg"},b862:function(e,t,s){e.exports=s.p+"img/nickolas-nikolic-iwV1-SWB4n8-unsplash.fac5a106.jpg"},c2a9:function(e,t,s){},c7fb:function(e,t,s){e.exports=s.p+"img/fred-kearney-o-ioeoATbIM-unsplash.b304d49d.jpg"},c8a6:function(e,t,s){"use strict";var a=s("5312"),i=s.n(a);i.a},d1bd:function(e,t,s){"use strict";var a=s("488b"),i=s.n(a);i.a},d8d4:function(e,t,s){"use strict";var a=s("9a3c"),i=s.n(a);i.a},f064:function(e,t,s){e.exports=s.p+"img/rsz_handyman_brett.b89074c6.jpg"},f143:function(e,t,s){},ff6c:function(e,t,s){}});
//# sourceMappingURL=app.8652ab3a.js.map