(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{331:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(332),{page:e.exports.default}})},332:function(e,t,n){e.exports=n(333)},333:function(e,t,n){e.exports=n(334)},334:function(e,t,n){"use strict";var r=n(27),u=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=x,t.Container=t.default=void 0;var a=u(n(63)),o=u(n(64)),i=u(n(335)),l=u(n(9)),c=u(n(10)),p=u(n(21)),s=u(n(22)),f=u(n(23)),d=u(n(16)),h=r(n(0)),v=u(n(24)),y=n(32),m=n(67),g=function(e){function t(){return(0,l.default)(this,t),(0,p.default)(this,(0,s.default)(t).apply(this,arguments))}var n;return(0,f.default)(t,e),(0,c.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,m.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,u=x(t);return h.default.createElement(k,null,h.default.createElement(n,(0,i.default)({},r,{url:u})))}}],[{key:"getInitialProps",value:(n=(0,o.default)(a.default.mark(function e(t){var n,r,u;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,y.loadGetInitialProps)(n,r);case 3:return u=e.sent,e.abrupt("return",{pageProps:u});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(h.Component);t.default=g,(0,d.default)(g,"childContextTypes",{headManager:v.default.object,router:v.default.object});var k=function(e){function t(){return(0,l.default)(this,t),(0,p.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=k;var w=(0,y.execOnce)(function(){0});function x(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:null,u=n||t;return e.push(r,u)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:null,u=n||t;return e.replace(r,u)}}}},335:function(e,t,n){var r=n(96);function u(){return e.exports=u=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}e.exports=u}},[[331,1,0]]]);