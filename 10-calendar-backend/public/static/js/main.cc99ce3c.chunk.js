(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{117:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(9),r=n.n(c),o=n(10),s=n(25),i=n(62),u=n(5),l="[ui] Open modal",j="[ui] Close modal",d="[event] Set Active",b="[event] Event logout",m="[event] Start Add new",O="[event] Clear Active event",p="[event] Event updated",f="[event] Event deleted",v="[event] Event loaded",h="[auth] Finish checking login state",x="[auth] Login",g="[auth] Logout",y={checking:!0},N=n(52),w={events:[],activeEvent:null},E={modalOpen:!1},k=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case j:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case m:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(N.a)(e.events),[t.payload])});case O:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case p:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case f:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(u.a)(Object(u.a)({},e),{},{events:Object(N.a)(t.payload)});case b:return Object(u.a)({},w);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});case h:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case g:return{checking:!1};default:return e}}}),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,C=Object(s.d)(k,S(Object(s.a)(i.a))),D=n(65),T=n(8),P=n(15),A=n(17),I=n.n(A),_=n(12),L=n.n(_),R=n(21),G="https://mern-calendar-craftianos.herokuapp.com/api/",H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(G,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},J=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(G,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},V=n(19),F=n.n(V),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:F()(e.end).toDate(),start:F()(e.start).toDate()})}))},U=function(e){return{type:m,payload:e}},X=function(){return{type:O}},q=function(e){return{type:p,payload:e}},z=function(){return{type:f}},B=function(e){return{type:v,payload:e}},W=function(){return{type:h}},K=function(e){return{type:x,payload:e}},Q=function(){return function(e){localStorage.clear(),e({type:b}),e(Y())}},Y=function(){return{type:g}},Z=n(24),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(P.a)(t,2),c=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},s=function(e){var t=e.target;r(Object(u.a)(Object(u.a)({},c),{},Object(Z.a)({},t.name,t.value)))};return[c,s,o]},ee=(n(85),n(2)),te=function(){var e=Object(o.b)(),t=$({lEmail:"hola@jesus.com",lPassword:"123456789"}),n=Object(P.a)(t,2),a=n[0],c=n[1],r=$({rName:"Nando",rEmail:"nando@gmail.com",rPassword1:"12345678",rPassword2:"12345678"}),s=Object(P.a)(r,2),i=s[0],u=s[1],l=a.lEmail,j=a.lPassword,d=i.rName,b=i.rEmail,m=i.rPassword1,O=i.rPassword2;return Object(ee.jsx)("div",{className:"container login-container",children:Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ee.jsx)("h3",{children:"Login"}),Object(ee.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=l,a=j,function(){var e=Object(R.a)(L.a.mark((function e(t){var c,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:r.uid,name:r.name}))):I.a.fire("Error",r.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"lEmail",value:l,onChange:c})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"lPassword",value:j,onChange:c})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ee.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ee.jsx)("h3",{children:"Register"}),Object(ee.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==O)return I.a.fire("Error","The password should be the same");var n,a,c;e((n=b,a=m,c=d,function(){var e=Object(R.a)(L.a.mark((function e(t){var r,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth/new",{email:n,password:a,name:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:o.uid,name:o.name}))):I.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"rName",value:d,onChange:u})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",name:"rEmail",value:b,onChange:u})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"rPassword1",value:m,onChange:u})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Repeat the password",name:"rPassword2",value:O,onChange:u})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Create account"})})]})]})]})})},ne=n(51),ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:t}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(Q())},children:[Object(ee.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ee.jsx)("span",{children:" Exit"})]})]})},ce=function(e){var t=e.event,n=t.title,a=t.user;return Object(ee.jsxs)("div",{children:[Object(ee.jsxs)("strong",{children:[" ",n," "]}),Object(ee.jsxs)("span",{children:["- ",a.name," "]})]})},re=n(46),oe=n.n(re),se=n(47),ie=n.n(se),ue=function(){return{type:l}},le={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};oe.a.setAppElement("#root");var je=F()().minutes(0).seconds(0).add(1,"hours"),de=je.clone().add(1,"hours"),be={title:"",notes:"",start:je.toDate(),end:de.toDate()},me=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).modalOpen,n=Object(o.c)((function(e){return e.calendar})).activeEvent,c=Object(a.useState)(je.toDate()),r=Object(P.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(de.toDate()),d=Object(P.a)(l,2),b=d[0],m=d[1],O=Object(a.useState)(!0),p=Object(P.a)(O,2),f=p[0],v=p[1],h=Object(a.useState)(be),x=Object(P.a)(h,2),g=x[0],y=x[1],N=g.notes,w=g.title,E=g.start,k=g.end;Object(a.useEffect)((function(){y(n||be)}),[n,y]);var S=function(e){var t=e.target;y(Object(u.a)(Object(u.a)({},g),{},Object(Z.a)({},t.name,t.value)))},C=function(){e({type:j}),e(X()),y(be)};return Object(ee.jsxs)(oe.a,{isOpen:t,onRequestClose:C,style:le,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(ee.jsxs)("h1",{className:"text-info",children:[" ",n?"Edit Event":"New Event"," "]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a=F()(E),c=F()(k);return a.isSameOrAfter(c)?I.a.fire("Error","The end date should older than the start date \u2757","error"):w.trim().length<2?v(!1):(e(n?function(e){return function(){var t=Object(R.a)(L.a.mark((function t(n){var a,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J("events/".concat(e.id),e,"PUT");case 3:return a=t.sent,t.next=6,a.json();case 6:(c=t.sent).ok?n(q(e)):I.a.fire("Error",c.msg,"error"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(g):function(e){return function(){var t=Object(R.a)(L.a.mark((function t(n,a){var c,r,o,s,i;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,o=c.name,t.prev=1,t.next=4,J("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.event.id,e.user={_id:r,name:o},n(U(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),v(!0),void C())},children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Start Date and Hour"}),Object(ee.jsx)(ie.a,{onChange:function(e){i(e),y(Object(u.a)(Object(u.a)({},g),{},{start:e}))},value:s,className:"form-control"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Finally Date and Hour"}),Object(ee.jsx)(ie.a,{onChange:function(e){m(e),y(Object(u.a)(Object(u.a)({},g),{},{end:e}))},value:b,minDate:s,className:"form-control"})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Title & notes"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!f&&"is-invalid"),placeholder:"Title of the Event",name:"title",autoComplete:"off",value:w,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"A small description"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Adittional Information"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block mt-4",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Save"})]})]})]})},Oe=(n(115),function(){var e=Object(o.b)();return Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ue())},children:Object(ee.jsx)("i",{className:"fas fa-plus"})})}),pe=function(){var e=Object(o.b)();return Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){var t;e(function(){var e=Object(R.a)(L.a.mark((function e(n,a){var c,r,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a().calendar.activeEvent.id,e.prev=1,e.next=4,J("events/".concat(c),t,"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(o=e.sent).ok?n(z()):I.a.fire("Error",o.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"fas fa-trash"}),Object(ee.jsx)("span",{children:" Delete Event "})]})},fe=Object(ne.b)(F.a),ve=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,c=t.activeEvent,r=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(P.a)(s,2),u=i[0],l=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t){var n,a,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=M(a.events),t(B(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(ae,{}),Object(ee.jsx)(ne.a,{localizer:fe,events:n,startAccessor:"start",endAccessor:"end",eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:r===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(){e(ue())},onSelectEvent:function(t){e(function(e){return{type:d,payload:e}}(t))},onView:function(e){l(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(X())},selectable:!0,view:u,components:{event:ce}}),Object(ee.jsx)(Oe,{}),c&&Object(ee.jsx)(pe,{}),Object(ee.jsx)(me,{})]})},he=n(36),xe=function(e){var t=e.isAutenticated,n=e.component,a=Object(he.a)(e,["isAutenticated","component"]);return Object(ee.jsx)(T.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(n,Object(u.a)({},e)):Object(ee.jsx)(T.a,{to:"/login"})}}))},ge=function(e){var t=e.isAutenticated,n=e.component,a=Object(he.a)(e,["isAutenticated","component"]);return Object(ee.jsx)(T.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(T.a,{to:"/"}):Object(ee.jsx)(n,Object(u.a)({},e))}}))},ye=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t){var n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:a.uid,name:a.name}))):t(W());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ee.jsx)("h5",{children:"Wait..."}):Object(ee.jsx)(D.a,{children:Object(ee.jsx)("div",{children:Object(ee.jsxs)(T.d,{children:[Object(ee.jsx)(ge,{exact:!0,path:"/login",component:te,isAutenticated:!!c}),Object(ee.jsx)(xe,{exact:!0,path:"/",component:ve,isAutenticated:!!c}),Object(ee.jsx)(T.a,{to:"/"})]})})})},Ne=function(){return Object(ee.jsx)(o.a,{store:C,children:Object(ee.jsx)(ye,{})})};n(117);r.a.render(Object(ee.jsx)(Ne,{}),document.getElementById("root"))},85:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.cc99ce3c.chunk.js.map