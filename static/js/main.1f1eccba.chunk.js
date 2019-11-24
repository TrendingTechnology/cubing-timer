(this["webpackJsonpcubing-timer"]=this["webpackJsonpcubing-timer"]||[]).push([[0],{126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),i=(n(63),n(8)),s=n(9),l=n(14),u=n(12),p=n(15),m=n(13),d=n(18),b=n(17),v=(n(68),function(e){return r.a.createElement("nav",{className:"site-header sticky-top py-1"},r.a.createElement("div",{className:"container d-flex flex-column flex-md-row justify-content-between"},r.a.createElement(d.a,null,r.a.createElement(d.b,{exact:!0,to:"/",className:"py-2 d-none d-md-inline-block"},"Timer"),r.a.createElement("span",null),r.a.createElement(d.b,{exact:!0,to:"/listTimes",className:"py-2 d-none d-md-inline-block"},"List Times"),r.a.createElement("span",null),r.a.createElement(d.b,{exact:!0,to:"/",className:"py-2 d-none d-md-inline-block"},"Stats"),r.a.createElement("span",null),r.a.createElement(d.b,{exact:!0,to:"/stats",className:"py-2 d-none d-md-inline-block"},"Options"),r.a.createElement("span",null))))}),f=(n(70),function(e){return r.a.createElement("footer",null,r.a.createElement("span",null," By Roger Cheng "),r.a.createElement("span",null," ",r.a.createElement("a",{href:"https://github.com/bulaxy/cubing-timer"},"Github ")," "))}),h=n(37),y=n.n(h),O=n(56),j=n(25),w=n(21),E=n(22),g="START_TIMER",S="STOP_TIMER",k="RESET_TIMER",D="AWAIT_FOR_START",T="SPACE_RESET",P="STORE_SCRAMBLE",x="STORE_NEW_SCRAMBLE";function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L={initTime:null,endTime:null,stopped:!0};var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return C({},e,{initTime:t.time,stopped:!1,endTime:void 0});case S:return C({},e,{endTime:t.time});case k:return C({},e,{stopped:!0});default:return e}};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={previousScramble:null,preGeneratedScramble:null};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return M({},e,{previousScramble:t.payload,preGeneratedScramble:t.payload});case x:return M({},e,{previousScramble:e.preGeneratedScramble,preGeneratedScramble:t.payload});default:return e}};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W={awaiting:!1,stopped:!0,focus:!1,spaceStatus:!0};var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;switch((arguments.length>1?arguments[1]:void 0).type){case D:return I({},e,{awaiting:!0,focus:!0,spaceStatus:!1});case g:return I({},e,{stopped:!1,awaiting:!1});case k:return I({},e,{stopped:!0});case S:return I({},e,{focus:!1});case T:return I({},e,{spaceStatus:!0});default:return e}},B=Object(w.b)({timer:U,scramble:A,status:F}),J=Object(w.c)(B),z=new j.a("Solves","Sessions");function H(e){var t=new Date(e),n=t.getMilliseconds(),a=t.getSeconds(),r=t.getMinutes(),c=t.getHours(),o=a+"."+n;return 10!==c?o=c-10+":"+r+":":0!==r&&(o=r+":"),o}function $(){return($=Object(O.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=J.getState().timer.endTime-J.getState().timer.initTime,a=[[[0,n],"Comments",t,Date.now()]],Object(j.b)("Sessions_01",z).then((function(e){var t=e?e.concat(a):a;Object(j.c)("Sessions_01",t,z)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=n(57),K=n.n(q),Q=[{dataField:"id",text:"ID"},{dataField:"time",text:"Time"},{dataField:"scamble",text:"Scamble"},{dataField:"date",text:"Date"}],V=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={solves:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;Object(j.b)("Sessions_01",z).then((function(t){e.rowGenerator(t)}))}},{key:"rowGenerator",value:function(e){var t=this.state.solves;if(e){for(var n=0;n<e.length;n++){var a=H(e[n][0][1]),r=new Date(e[n][3]),c={id:n+1,time:a,scamble:e[n][2],date:r.toLocaleDateString(),uid:e[n][3]};t=t.concat(c)}this.setState({solves:t})}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K.a,{keyField:"id",data:this.state.solves,columns:Q}))}}]),t}(a.Component),X=n(16),Y=n(38),Z=n.n(Y);Z.a.initSolver();var ee=new Z.a;function te(){return ee.randomize(),ee.solve()}var ne=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).spaceDown=e.spaceDown.bind(Object(X.a)(e)),e.spaceUp=e.spaceUp.bind(Object(X.a)(e)),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"spaceDown",value:function(e){32===e.keyCode&&this.props.status.spaceStatus&&(console.log("Waiting for Release"),this.props.dispatch({type:D}))}},{key:"spaceUp",value:function(e){32===e.keyCode&&this.props.dispatch({type:T})}},{key:"componentDidMount",value:function(){var e;document.addEventListener("keydown",this.spaceDown),document.addEventListener("keyup",this.spaceUp),null===this.props.scramble.previousScramble&&this.props.dispatch((e=te(),{type:P,payload:e}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.spaceUp),document.removeEventListener("keydown",this.spaceDown)}},{key:"render",value:function(){var e,t=(e=this.props.timer.initTime,H(this.props.timer.endTime-e));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t),r.a.createElement("div",null,this.props.scramble.preGeneratedScramble))}}]),t}(a.Component);var ae=Object(m.b)((function(e){return{timer:e.timer,scramble:e.scramble,status:e.status}}))(ne),re=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={startTime:0,time:0},e.spaceDown=e.spaceDown.bind(Object(X.a)(e)),e.spaceUp=e.spaceUp.bind(Object(X.a)(e)),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"spaceDown",value:function(e){var t=this;32===e.keyCode&&(this.props.status.stopped||(clearInterval(this.timer),this.props.dispatch({type:S,time:(new Date).getTime()}),function(e){return $.apply(this,arguments)}(this.props.scramble.previousScramble).then((function(){t.props.dispatch({type:k})}))))}},{key:"spaceUp",value:function(e){var t,n=this;32===e.keyCode&&(console.log("Start"),this.props.dispatch({type:g,time:(new Date).getTime()}),this.props.dispatch((t=te(),{type:x,payload:t})),this.setState({startTime:Date.now()}),this.timer=setInterval((function(){return n.setState({time:Date.now()-n.state.startTime})}),1))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.spaceDown),document.addEventListener("keyup",this.spaceUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.spaceUp),document.removeEventListener("keydown",this.spaceDown)}},{key:"render",value:function(){return r.a.createElement("div",null,H(this.state.time))}}]),t}(a.Component);var ce=Object(m.b)((function(e){return{timer:e.timer,scramble:e.scramble,status:e.status}}))(re),oe=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.status.focus?r.a.createElement(ce,null):r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(v,null),r.a.createElement("div",{className:"content"},r.a.createElement(b.a,{exact:!0,path:"/",component:ae}),r.a.createElement(b.a,{exact:!0,path:"/listTimes",component:V}))),r.a.createElement(f,null))}}]),t}(a.Component);var ie=Object(m.b)((function(e){return{status:e.status}}))(oe);var se=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(124),n(125),n(126);o.a.render(r.a.createElement(m.a,{store:J},r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},58:function(e,t,n){e.exports=n(127)},63:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){}},[[58,1,2]]]);
//# sourceMappingURL=main.1f1eccba.chunk.js.map