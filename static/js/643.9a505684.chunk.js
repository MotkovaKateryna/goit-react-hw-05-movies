"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[643],{643:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(247),o=r(993),f=r(184),p=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1],p=(0,s.useState)(null),l=(0,a.Z)(p,2),v=l[0],m=l[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Fb)();case 3:e=t.sent,u(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),m(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.Z,{items:r}),v&&(0,f.jsx)("h2",{children:v})]})},l=function(){return(0,f.jsx)(p,{})}},247:function(t,e,r){r.d(e,{Z:function(){return p}});var n=r(791),a=r(689),u=r(87),c="movies-list_list__g-fW2",s="movies-list_item__sxmN7",i="movies-list_link__7s6DW",o=r(184),f=function(t){var e=t.items,r=(0,a.TH)(),n=e.map((function(t){var e=t.id,n=t.title;return(0,o.jsx)(u.rU,{className:i,to:"/movies/".concat(e),state:{from:r},children:(0,o.jsx)("li",{className:s,children:(0,o.jsx)("p",{children:n})})},e)}));return(0,o.jsx)("ul",{className:c,children:n})},p=(0,n.memo)(f);f.defaultProps={items:[]}},993:function(t,e,r){r.d(e,{Fb:function(){return s},G9:function(){return f},Pg:function(){return i},iZ:function(){return p},z1:function(){return o}});var n=r(861),a=r(757),u=r.n(a),c=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"86eb0a0633e53490d444bb214710bd0c"}}),s=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e,r){var n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie",{params:{query:e,page:r,include_adult:"false",language:"en-US"}});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=643.9a505684.chunk.js.map