(this.webpackJsonpcurs_transilvania_react=this.webpackJsonpcurs_transilvania_react||[]).push([[0],{34:function(e,n,t){e.exports=t(69)},39:function(e,n,t){},69:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(5),u=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(39);var l=t(7),o=t(4),i=t(8),s=t(2),d=t(3);function f(){var e=Object(s.a)(["\n  display: block;\n  overflow: hidden;\n  list-style-type: none;\n  margin: 10px 0px;\n  background: #000;\n  color: #fff;\n  :nth-child(1) {\n    font-size: 32px;\n    background: orange;\n  }\n  :nth-child(2) {\n    font-size: 28px;\n    background: grey;\n  }\n"]);return f=function(){return e},e}function p(){var e=Object(s.a)(["\n  display: inline-block;\n  float: left;\n  padding: 0px 5px;\n  margin: 0 5px;\n  min-width: 40px;\n  :nth-child(1) {\n    background: blue;\n  }\n"]);return p=function(){return e},e}function v(){var e=Object(s.a)(["\n  margin: 10px;\n  padding: 10px;\n  background-color: blue;\n  color: #fff;\n"]);return v=function(){return e},e}function m(){var e=Object(s.a)(["\n  padding: 10px 30px;\n  display: inline-block;\n  background: grey;\n  margin: 5px;\n  color: white;\n  &.add {\n    background: green;\n    margin-left: 20px;\n  }\n  &.selected {\n    background: green;\n    color: #fff;\n  }\n"]);return m=function(){return e},e}function b(){var e=Object(s.a)(["\n  background-color: #ffffff;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: #000;\n"]);return b=function(){return e},e}function g(){var e=Object(s.a)(["\n  text-align: center;\n"]);return g=function(){return e},e}var h=d.a.div(g()),E=d.a.div(b()),O=d.a.button(m()),k=(d.a.button(v()),d.a.div(p())),x=d.a.li(f()),y=t(6),j=function(){return{type:"".concat("useApiRequest/","FETCHING")}},C=function(){return{type:"".concat("useApiRequest/","SUCCESS")}},w=function(){return{type:"".concat("useApiRequest/","ERROR")}},S=function(){return{type:"".concat("selectedData/","SELECTED")}},R={status:null,response:null,saved:null},z=Object(a.createContext)(),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.type,a=n.response,r=n.saved;switch(t){case j:return Object(y.a)({},R,{status:j});case C:return Object(y.a)({},e,{status:C,response:a});case w:return Object(y.a)({},e,{status:w,response:a});case S:return Object(y.a)({},e,{status:S,saved:r});default:return e}},q=function(){var e=Object(a.useContext)(z),n=e&&e.saved?e.saved:[];return r.a.createElement("div",null,r.a.createElement("ul",null,n.length>0?n.map((function(e,n){return r.a.createElement(x,{key:"currency$Key".concat(n)},r.a.createElement(k,null,e.name),r.a.createElement(k,null,e.buy.value),r.a.createElement(k,null,e.sell.value))})):""))},L=t(12),N=t.n(L),_=t(30),I=t(31),J=t.n(I),B=function(){return{type:j}},D=function(e){return{type:C,response:e}},F=function(e){return{type:w,response:e}},H=function(e){return{type:S,saved:e}},T=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.verb,r=void 0===t?"get":t,c=n.params,u=void 0===c?{}:c,l=Object(a.useReducer)(A,R),s=Object(o.a)(l,2),d=s[0],f=s[1],p=Object(a.useCallback)(Object(_.a)(N.a.mark((function n(){var t;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(B()),n.prev=1,n.next=4,J.a[r](e,u);case 4:t=n.sent,f(D(t)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),f(F(n.t0));case 11:case"end":return n.stop()}}),n,null,[[1,8]])}))),[e,r,u]),v=Object(a.useCallback)((function(e){if(null!=d){var n=d&&d.saved?d.saved:[],t=n.map((function(e){return e.name})).indexOf(e.name);-1!==t?n.splice(t,1):n.push(e),i.reactLocalStorage.setObject("btSavedCurrencies",n),f(H(n))}}),[d,f]),m=Object(a.useCallback)((function(e){null!=d&&f(H(e))}),[d,f]);return[d,p,v,m]},W=t(32),$=t.n(W),G=function(){var e=Object(a.useContext)(z),n=e&&e.response?JSON.parse(e.response.data.exchangeRates):[],t=e&&e.saved?e.saved:[],c=Object(l.b)((function(){return r.a.createElement($.a,{isOpen:!0,ariaHideApp:!1},r.a.createElement("p",null,"Selecteaza valutele ce vrei sa le vezi:"),r.a.createElement("div",null,n.map((function(n,a){return r.a.createElement(O,{className:-1!==t.map((function(e){return e.name})).indexOf(n.name)?"selected":"",key:"button".concat(a),onClick:function(){e.addCurrency(n)}},n.name)}))),r.a.createElement("hr",null),r.a.createElement("button",{onClick:function(){s()}},"Ascunde Fereastra"))}),[n,t]),u=Object(o.a)(c,2),i=u[0],s=u[1];return r.a.createElement(O,{className:"add",onClick:function(){i()}},"Editeaza Lista")};var K=function(){var e=z.Provider,n=T("https://cursbtserver.herokuapp.com/latest"),t=Object(o.a)(n,4),c=t[0],u=c.status,l=c.response,s=c.saved,d=t[1],f=t[2],p=t[3];return Object(a.useEffect)((function(){d();var e=i.reactLocalStorage.getObject("btSavedCurrencies");null!==e&&p(e)}),[]),r.a.createElement(e,{value:{status:u,response:l,saved:s,makeRequest:d,addCurrency:f,addCurrencies:p}},r.a.createElement(h,null,r.a.createElement(E,null,r.a.createElement("div",null,null!=l?r.a.createElement("div",null,r.a.createElement(O,{onClick:d},"Reincarca"),r.a.createElement(G,null)):r.a.createElement("div",null,"Se Incarca...")),r.a.createElement(q,null))))};u.a.render(r.a.createElement(l.a,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.50d4ed4f.chunk.js.map