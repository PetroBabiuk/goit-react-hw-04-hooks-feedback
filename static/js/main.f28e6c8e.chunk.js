(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={title:"Statistics_title__3PVIg",list:"Statistics_list__3oKT7",item:"Statistics_item__1vE2T"}},,,function(e,t,n){e.exports={container:"Section_container__37ABw",title:"Section_title__2S6oE"}},,function(e,t,n){e.exports={button:"FeedbackOptions_button__3n-hy"}},function(e,t,n){e.exports={message:"Notification_message__eciZi"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),i=n.n(a),o=(n(13),n(14),n(3)),r=n(7),l=n.n(r),j=n(0),b=function(e){var t=e.onClick,n=e.options;return Object(j.jsx)("div",{children:n.map((function(e){return Object(j.jsx)("button",{type:"button",onClick:t,className:l.a.button,children:e},e)}))})},u=n(8),d=n.n(u),O=function(e){var t=e.message;return Object(j.jsx)("p",{className:d.a.message,children:t})},h=n(2),x=n.n(h),f=function(e){var t=e.good,n=e.neutral,c=e.bad,s=e.total,a=e.positivePercentage;return Object(j.jsxs)("ul",{className:x.a.list,children:[Object(j.jsxs)("li",{className:x.a.item,children:["Good: ",Object(j.jsx)("span",{children:t})]}),Object(j.jsxs)("li",{className:x.a.item,children:["Neutral: ",Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("li",{className:x.a.item,children:["Bad: ",Object(j.jsx)("span",{children:c})]}),Object(j.jsxs)("li",{className:x.a.item,children:["Total: ",Object(j.jsx)("span",{children:s})]}),Object(j.jsxs)("li",{className:x.a.item,children:["Positive feedback: ",Object(j.jsxs)("span",{children:[a,"%"]})]})]})},m=function(e){var t=e.good,n=e.neutral,c=e.bad,s=e.total,a=e.positivePercentage;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:x.a.title,children:"Statistics"}),0===s?Object(j.jsx)(O,{message:"No feedback given"}):Object(j.jsx)(f,{good:t,neutral:n,bad:c,total:s,positivePercentage:a})]})},p=n(5),g=n.n(p),_=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("div",{className:g.a.container,children:[Object(j.jsx)("h2",{className:g.a.title,children:t}),n]})};var v=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(0),i=Object(o.a)(a,2),r=i[0],l=i[1],u=Object(c.useState)(0),d=Object(o.a)(u,2),O=d[0],h=d[1],x=Object(c.useState)(null),f=Object(o.a)(x,2),p=f[0],g=f[1],v=Object(c.useState)(null),N=Object(o.a)(v,2),k=N[0],S=N[1];return Object(c.useEffect)((function(){g((function(){return n+r+O}))}),[n,r,O]),Object(c.useEffect)((function(){S(n/p*100)}),[n,p]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(_,{title:"Please leave feedback",children:[Object(j.jsx)(b,{options:["good","neutral","bad"],onClick:function(e){var t=e.target.textContent;console.log(t),"good"===t?s((function(e){return e+1})):"neutral"===t?l((function(e){return e+1})):"bad"===t&&h((function(e){return e+1}))}}),Object(j.jsx)(m,{good:n,neutral:r,bad:O,total:p,positivePercentage:k})]})})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.f28e6c8e.chunk.js.map