(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"20a7":function(e,t,c){},"38aa":function(e,t,c){"use strict";c.r(t);var i=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"getQuote"},[c("getQuote")],1)},s=[],r=c("6acf"),n={name:"GetQuotePage",components:{getQuote:r["a"]}},a=n,o=(c("c8df"),c("2877")),u=Object(o["a"])(a,i,s,!1,null,"7f6ed517",null);t["default"]=u.exports},4298:function(e,t,c){},"76d2":function(e,t,c){"use strict";c.r(t);var i=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"services"},[c("div",{staticClass:"hello"},[c("h2",[e._v("Services")]),c("div"),c("Electrical")],1)])},s=[],r=(c("d3b7"),function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("div",{staticClass:"catagoryButtons"},[c("button",{staticClass:"serviceCatagory",on:{click:function(t){e.search="Electrical"}}},[e._v("Electrical")]),c("button",{staticClass:"serviceCatagory",on:{click:function(t){e.search="Furniture"}}},[e._v("Furniture")]),c("button",{staticClass:"serviceCatagory",on:{click:function(t){e.search="Interior"}}},[e._v("Interior")]),c("button",{staticClass:"serviceCatagory",on:{click:function(t){e.search="Landscaping"}}},[e._v("Landscaping")]),c("button",{staticClass:"serviceCatagory",on:{click:function(t){e.search="Odd Jobs"}}},[e._v("Odd Jobs")]),c("button",{staticClass:"serviceCatagory",on:{click:function(t){e.search="Plumbing"}}},[e._v("Plumbing")])]),e._l(e.filterServices,(function(t){return c("div",{key:t.ServiceType,staticClass:"serviceTypeList"},[c("h2",{staticClass:"serviceName"},[e._v(e._s(t.ServiceName))]),c("p",[e._v(e._s(t.ServiceDescription))]),c("a",{attrs:{href:"/quote"}},[c("b-button",{attrs:{variant:"success"}},[e._v("Get A Quote")])],1)])}))],2)}),n=[],a=(c("4de4"),c("ac1f"),c("466d"),c("841c"),{data:function(){return{search:"Electrical",services:[],serviceList:"",serviceType:"Electrical",serviceDescription:"",serviceName:"",serviceTime:"",servicePrice:"",serviceImg:"",queryString:"serviceType=Electrical"}},components:{},mounted:function(){var e=this;fetch("http://localhost:5000/Servicelist",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.services=t}))},computed:{filterServices:function(){var e=this;return this.services.filter((function(t){return t.ServiceType.match(e.search)}))}}}),o=a,u=(c("92e7"),c("2877")),v=Object(u["a"])(o,r,n,!1,null,"4b850729",null),l=v.exports,f={name:"Services",components:{Electrical:l},data:function(){return{services:[],serviceList:null,serviceType:"",serviceDescription:"",serviceName:"",serviceTime:"",servicePrice:"",serviceImg:""}},method:function(){fetch("http://localhost:5000/postservices",{method:"Post",body:JSON.stringify({serviceType:this.serviceType,serviceName:this.serviceName,job_time:this.serviceTime,price:this.servicePrice,description:this.serviceDescription,img:this.serviceImg})}).then((function(e){return console.log("service created"+e)}))}},d=f,h=(c("b8c3"),Object(u["a"])(d,i,s,!1,null,"5ee7c024",null));t["default"]=h.exports},"841c":function(e,t,c){"use strict";var i=c("d784"),s=c("825a"),r=c("1d80"),n=c("129f"),a=c("14c3");i("search",1,(function(e,t,c){return[function(t){var c=r(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,c):new RegExp(t)[e](String(c))},function(e){var i=c(t,e,this);if(i.done)return i.value;var r=s(e),o=String(this),u=r.lastIndex;n(u,0)||(r.lastIndex=0);var v=a(r,o);return n(r.lastIndex,u)||(r.lastIndex=u),null===v?-1:v.index}]}))},"92e7":function(e,t,c){"use strict";var i=c("ede0"),s=c.n(i);s.a},b8c3:function(e,t,c){"use strict";var i=c("4298"),s=c.n(i);s.a},c8df:function(e,t,c){"use strict";var i=c("20a7"),s=c.n(i);s.a},ede0:function(e,t,c){}}]);
//# sourceMappingURL=about.cc7a7e6d.js.map