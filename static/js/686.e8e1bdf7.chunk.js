"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[686],{454:function(n,t,e){e.d(t,{a:function(){return u}});var r,c=e(137),a=e(168),i=e(924).ZP.div(r||(r=(0,a.Z)(["\n    text-align: center;\n    margin-top: 150px;\n"]))),o=e(184),u=function(){return(0,o.jsx)(i,{children:(0,o.jsx)(c.Z1,{height:"150",width:"150",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},368:function(n,t,e){var r=e(689),c=e(87),a=e(544),i=e(184);t.Z=function(n){var t=n.films,e=(0,r.TH)();return(0,i.jsx)(a.c0,{children:t.map((function(n){var t=n.id,r=n.title,o=n.overview,u=n.poster_path;return(0,i.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,i.jsxs)(a.iH,{children:[(0,i.jsx)("img",{src:u?"http://image.tmdb.org/t/p/w154".concat(u):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:r,width:"154",height:"231"}),(0,i.jsxs)(a.$j,{children:[(0,i.jsx)("h3",{children:r}),(0,i.jsx)("p",{children:o})]})]},t)})}))})}},544:function(n,t,e){e.d(t,{$j:function(){return p},c0:function(){return u},iH:function(){return s}});var r,c,a,i=e(168),o=e(924),u=o.ZP.ul(r||(r=(0,i.Z)(["\n    display: flex;\n    gap: 30px;\n    align-items: center;\n    flex-wrap: wrap;\n"]))),s=o.ZP.li(c||(c=(0,i.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 5px;\n    width: 154px;\n    max-height: 400px;\n    cursor: pointer;\n    overflow: hidden;\n"]))),p=o.ZP.div(a||(a=(0,i.Z)(["\n    min-height: 169px;\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n"])))},686:function(n,t,e){e.r(t);var r=e(439),c=e(454),a=e(368),i=e(791),o=e(444),u=e(748),s=e(184);t.default=function(){var n=(0,i.useState)(!0),t=(0,r.Z)(n,2),e=t[0],p=t[1],f=(0,i.useState)([]),l=(0,r.Z)(f,2),h=l[0],d=l[1];return(0,i.useEffect)((function(){h.length>0||(0,o.vw)("/trending/movie/day").then((function(n){d(n.results)})).catch(o.NI).finally((function(){return p(!1)}))}),[h]),(0,s.jsxs)(u.dE,{children:[(0,s.jsx)("h2",{children:"Movies in trend"}),e&&(0,s.jsx)(c.a,{}),(0,s.jsx)(a.Z,{films:h})]})}},444:function(n,t,e){e.d(t,{Hx:function(){return g},NI:function(){return Z},Pu:function(){return p},Y5:function(){return x},bI:function(){return h},uV:function(){return m},vw:function(){return f}});var r=e(861),c=e(757),a=e.n(c),i=e(294),o=e(694),u="https://api.themoviedb.org/3",s="43596775cda6588db61d2519acdb98b6",p={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u).concat(t,"?api_key=").concat(s),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(t,"?api_key=").concat(s,"&query=").concat(e),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(t,"/").concat(e,"?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(t,"/").concat(e,"/credits?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(t,"/").concat(e,"/reviews?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(){o.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",p)}}}]);
//# sourceMappingURL=686.e8e1bdf7.chunk.js.map