"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[221],{454:function(e,t,n){n.d(t,{a:function(){return s}});var r,c=n(137),a=n(168),i=n(924).ZP.div(r||(r=(0,a.Z)(["\n    text-align: center;\n    margin-top: 150px;\n"]))),o=n(184),s=function(){return(0,o.jsx)(i,{children:(0,o.jsx)(c.Z1,{height:"150",width:"150",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},221:function(e,t,n){n.r(t);var r=n(439),c=n(454),a=n(791),i=n(689),o=n(87),s=n(444),u=n(748),l=n(184);t.default=function(){var e,t,n=(0,i.UO)().movieId,p=(0,a.useState)(!0),h=(0,r.Z)(p,2),d=h[0],f=h[1],x=(0,a.useState)(null),v=(0,r.Z)(x,2),w=v[0],j=v[1],m=(0,i.TH)(),g=(0,a.useRef)(null!==(e=null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");if((0,a.useEffect)((function(){n&&(0,s.Y5)("/movie",n).then((function(e){j(e)})).catch(s.NI).finally((function(){return f(!1)}))}),[n]),w){var b=w.poster_path,y=w.title,k=w.original_title,Z=w.release_date,_=w.genres,C=w.vote_average,S=w.overview;return(0,l.jsxs)(u.dE,{children:[(0,l.jsx)(u.Fg,{to:g.current,children:"<<<< BACK"}),(0,l.jsx)("h2",{children:"Movie Details:"}),d&&(0,l.jsx)(c.a,{}),w&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(u.O2,{children:[(0,l.jsx)("img",{src:b?"http://image.tmdb.org/t/p/w342".concat(b):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:y,width:"200"}),(0,l.jsxs)(u.UE,{children:[(0,l.jsx)("h3",{children:k}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Release date:"})," ",Z]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Genres:"})," ",_.map((function(e){var t=e.name;return"".concat(t.toLowerCase()," | ")}))]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Ranking:"})," ",C]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Overview:"})," ",S]})]})]}),(0,l.jsx)("h3",{children:"Additional information:"}),(0,l.jsxs)(u.Z,{children:[(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(i.j3,{})})]})]})}}},444:function(e,t,n){n.d(t,{Hx:function(){return m},NI:function(){return b},Pu:function(){return l},Y5:function(){return x},bI:function(){return d},uV:function(){return w},vw:function(){return p}});var r=n(861),c=n(757),a=n.n(c),i=n(294),o=n(694),s="https://api.themoviedb.org/3",u="43596775cda6588db61d2519acdb98b6",l={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function p(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s).concat(t,"?api_key=").concat(u),e.next=3,i.Z.get(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s).concat(t,"?api_key=").concat(u,"&query=").concat(n),e.next=3,i.Z.get(r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s).concat(t,"/").concat(n,"?api_key=").concat(u),e.next=3,i.Z.get(r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s).concat(t,"/").concat(n,"/credits?api_key=").concat(u),e.next=3,i.Z.get(r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s).concat(t,"/").concat(n,"/reviews?api_key=").concat(u),e.next=3,i.Z.get(r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){o.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",l)}}}]);
//# sourceMappingURL=221.2142fcbf.chunk.js.map