(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={list:"FeedbackOptions_list__309V1",listItem:"FeedbackOptions_listItem__1r2tG",button:"FeedbackOptions_button__2QTd_"}},function(t,e,n){t.exports={listItem:"Statistics_listItem__33BQq"}},,,,,,function(t,e,n){t.exports={sectionTitle:"Section_sectionTitle__1ldUj"}},function(t,e,n){t.exports={notification:"Notification_notification__14qVx"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(5),i=n.n(a),r=(n(17),n(6)),o=n(7),l=n(8),b=n(12),j=n(11),u=(n(18),n(2)),d=n.n(u),h=n(0),f=function(t){var e=t.onLeaveFeedback,n=t.stateKeysArr;return Object(h.jsx)("ul",{className:d.a.list,children:n.map((function(t){return Object(h.jsx)("li",{className:d.a.listItem,children:Object(h.jsx)("button",{className:d.a.button,onClick:function(){return e(t)},children:t})},t)}))})},O=n(3),m=n.n(O),x=function(t){var e=t.allFeedbacksObj,n=t.total,s=t.positivePercentage,c=t.stateKeysArr;return Object(h.jsxs)("ul",{children:[c.map((function(t){return Object(h.jsx)("li",{className:m.a.listItem,children:Object(h.jsxs)("span",{children:[t,":",e[t]]})},t)})),Object(h.jsxs)("li",{className:m.a.listItem,children:["Total:",n]}),Object(h.jsxs)("li",{className:m.a.listItem,children:["Positive feedback: ",s,"%"]})]})},p=n(9),k=n.n(p),_=function(t){var e=t.title,n=t.children;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:k.a.sectionTitle,children:e}),n]})},v=n(10),g=n.n(v),F=function(t){var e=t.message;return Object(h.jsx)("p",{className:g.a.notification,children:e})},N=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.setFeedbackToState=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=Object.keys(this.state),n=e.reduce((function(e,n){return e+t.state[n]}),0),s=Math.round(this.state.good/n*100);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_,{title:"Please leave feedback",children:Object(h.jsx)(f,{options:this.state,onLeaveFeedback:this.setFeedbackToState,stateKeysArr:e})}),Object(h.jsxs)(_,{title:"Statistics",children:[!n&&Object(h.jsx)(F,{message:"No feedback given"}),!!n&&Object(h.jsx)(x,{allFeedbacksObj:this.state,total:n,positivePercentage:s,stateKeysArr:e})]})]})}}]),n}(c.a.Component);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.32adfe25.chunk.js.map