(this["webpackJsonpgithub-search-app"]=this["webpackJsonpgithub-search-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){},,,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(6),r=c.n(a),i=(c(12),c(3)),l=c.n(i),o=c(4),d=c(2),j=function(e){return fetch("".concat("https://api.github.com").concat(e),{method:"GET"}).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},u=(c(14),c(15),c(0)),b=function(e){var t=e.repos,c=e.userLogin,n=Object(s.useState)(""),a=Object(d.a)(n,2),r=a[0],i=a[1],l=t.filter((function(e){return e.name.includes(r)}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"input-group mb-3",children:Object(u.jsx)("input",{type:"text",className:"form-control",name:"queryRepo",placeholder:"Search for Repos",value:r,onChange:function(e){i(e.target.value)},"aria-label":"Recipient's username","aria-describedby":"basic-addon2"})}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h3",{children:"Repo List"}),l.map((function(e){return Object(u.jsx)("div",{className:"card mb-3 repo-block",children:Object(u.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){return window.open("https://github.com/".concat(c,"/").concat(e.name),"_blank")},children:Object(u.jsxs)("div",{className:"row no-gutters field",children:[Object(u.jsx)("div",{className:"col-md-4 p-3",children:Object(u.jsx)("h5",{className:"card-title",children:"".concat(e.name)})}),Object(u.jsx)("div",{className:"col-md-8",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("p",{className:"card-text",children:"Forks: ".concat(e.forks_count)}),Object(u.jsx)("p",{className:"card-text",children:"Stars: ".concat(e.stargazers_count)})]})})]})})},e.id)}))]})]})})},h=(c(17),function(e){var t=e.userLogin,c=e.isUserSelected,n=e.hideUserDetails,a=Object(s.useState)(null),r=Object(d.a)(a,2),i=r[0],h=r[1],O=Object(s.useState)([]),x=Object(d.a)(O,2),m=x[0],p=x[1];return Object(s.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/users/".concat(t));case 2:return c=e.sent,e.next=5,j("/users/".concat(t,"/repos"));case 5:s=e.sent,h(c),p(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),m.length?Object(u.jsx)(u.Fragment,{children:c?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"container details",children:Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsx)("img",{src:i.avatar_url,className:"card-img",alt:"avatar"})}),Object(u.jsx)("div",{className:"col-md-8",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:i.login}),Object(u.jsx)("p",{className:"card-text",children:i.email&&"email: ".concat(i.email)}),Object(u.jsx)("p",{className:"card-text",children:i.location&&"location: ".concat(i.location)}),Object(u.jsx)("p",{className:"card-text",children:i.created_at&&"Join Date: ".concat(i.created_at.slice(0,10))}),Object(u.jsx)("p",{className:"card-text",children:i.followers&&"".concat(i.followers," Followers")}),Object(u.jsx)("p",{className:"card-text",children:i.location&&"Following ".concat(i.following)}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"card-text",children:Object(u.jsx)("small",{className:"text-muted",children:i.bio&&"User's biography: ".concat(i.bio)})}),Object(u.jsx)("button",{type:"button",className:"btn btn-danger",onClick:n,children:"Hide Details"})]})]})})]})}),Object(u.jsx)("div",{children:Object(u.jsx)(b,{repos:m,userLogin:t,isUserSelected:c})})]}):null}):null}),O=c(7),x=function(e){var t=e.name,c=Object(s.useState)({}),n=Object(d.a)(c,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/users/".concat(t));case 2:c=e.sent,r(c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(u.jsxs)(u.Fragment,{children:["Repos: ",a.public_repos]})};x.propTypes={name:c.n(O).a.string.isRequired};c(20);var m=function(e){var t=e.users,c=e.selectUser,n=e.hideUserDetails,a=Object(s.useState)(""),r=Object(d.a)(a,2),i=r[0],l=r[1],o=t.filter((function(e){return e.login.includes(i)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:"text",className:"form-control input",name:"queryUser",placeholder:"Search for Users",value:i,onChange:function(e){l(e.target.value),n()},"aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(u.jsx)("div",{class:"row",children:Object(u.jsx)("div",{class:"col-sm-12",children:o.map((function(e){return Object(u.jsx)("div",{class:"card mb-3",children:Object(u.jsxs)("div",{class:"row g-0",children:[Object(u.jsx)("div",{class:"col-md-3",children:Object(u.jsx)("img",{src:e.avatar_url,class:"img-fluid rounded-start",alt:"avatar"})}),Object(u.jsx)("div",{class:"col-md-8",children:Object(u.jsxs)("div",{class:"card-body",children:[Object(u.jsx)("h5",{class:"card-title",children:e.login}),Object(u.jsx)("p",{class:"card-text",children:Object(u.jsx)(x,{name:e.login})}),Object(u.jsx)("button",{class:"btn btn-primary",onClick:function(){return c(e.login)},children:"Details"})]})})]})})}))})})]})},p=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(d.a)(a,2),i=r[0],b=r[1],O=Object(s.useState)(!1),x=Object(d.a)(O,2),p=x[0],f=x[1];Object(s.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/users");case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=function(){b(""),f(!1)};return Object(u.jsx)("div",{className:"app container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("h1",{children:"Users list"}),c.length?Object(u.jsx)(m,{users:c,selectUser:function(e){b(e),f(!0)},hideUserDetails:v}):Object(u.jsxs)("div",{class:"d-flex align-items-center",children:[Object(u.jsx)("strong",{children:"Loading..."}),Object(u.jsx)("div",{class:"spinner-border ms-auto",role:"status","aria-hidden":"true"})]})]}),Object(u.jsx)("div",{className:"col",children:p?Object(u.jsx)(h,{userLogin:i,isUserSelected:p,hideUserDetails:v}):null})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),f()}],[[21,1,2]]]);
//# sourceMappingURL=main.63618482.chunk.js.map