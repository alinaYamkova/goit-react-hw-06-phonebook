(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{41:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(13),l=n.n(o),i=n(28),s=n(9),b=n(11),u=n(23),j=n(24),d=n(30),h=n(29),f=n(46),p=n(5),O=n.n(p),m=n(7),_={addContact:Object(m.b)("contacts/addContacts",(function(e){return{payload:{id:Object(f.a)(),name:e.name,number:e.number}}})),deleteContact:Object(m.b)("contacts/deleContacts"),filterContacts:Object(m.b)("contacts/filterContacts")},x=n(1),C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(b.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.value;if(""!==a&&""!==c)return e.props.addNewContact(e.state),void e.reset();alert("Please, fill up the fields")},e.reset=function(){e.setState({name:"",number:""})},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("label",{className:O.a.label,children:["Name",Object(x.jsx)("input",{id:Object(f.a)(),value:this.state.name,onChange:this.handleChange,type:"text",name:"name",placeholder:"name",className:O.a.input})]}),Object(x.jsxs)("label",{className:O.a.label,children:["Number",Object(x.jsx)("input",{id:Object(f.a)(),value:this.state.number,onChange:this.handleChange,type:"text",name:"number",placeholder:"number",className:O.a.input})]}),Object(x.jsx)("button",{className:O.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),v=Object(s.b)(null,(function(e){return{addNewContact:function(t){return e(_.addContact(t))}}}))(C),k=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},g=Object(s.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{contacts:k(n,a)}}),(function(e){return{onDeleteContact:function(t){return e(_.deleteContact(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(x.jsx)("ol",{children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(x.jsxs)("li",{className:O.a.list,children:[Object(x.jsxs)("p",{className:O.a.text,children:[a,", "]}),Object(x.jsxs)("p",{className:O.a.text,children:["tlf.: ",c]}),Object(x.jsx)("button",{type:"button",className:O.a.btn_del,onClick:function(){return n(t)},children:"Delete"})]},t)}))})})),y=Object(s.b)((function(e){return{filterVal:e.contacts.filter}}),(function(e){return{onChangeFilter:function(t){return e(_.filterContacts(t.target.value))}}}))((function(e){var t=e.filterVal,n=e.onChangeFilter;return Object(x.jsxs)("label",{className:O.a.filter_label,children:["To make filter by Name",Object(x.jsx)("input",{className:O.a.filter_input,type:"text",value:t,onChange:n})]})})),N=(n(41),function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h2",{children:"Phonebook"}),Object(x.jsx)(v,{}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(y,{}),Object(x.jsx)(g,{})]})}),w=n(15),S=n(25),D=n.n(S),A=n(26),E=n.n(A),J=n(3),M=Object(m.c)([],(a={},Object(b.a)(a,_.addContact,(function(e,t){var n=t.payload;return[].concat(Object(w.a)(e),[n])})),Object(b.a)(a,_.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),P=Object(m.c)("",Object(b.a)({},_.filterContacts,(function(e,t){return t.payload}))),B=Object(J.c)({items:M,filter:P}),F=n(8),I={key:"contacts",storage:E.a,blacklist:["filter"]},L=[].concat(Object(w.a)(Object(m.d)({serializableCheck:{ignoredActions:[F.a,F.f,F.b,F.c,F.d,F.e]}})),[D.a]),Q=Object(m.a)({reducer:{contacts:Object(F.g)(I,B)},middleware:L,devTools:!1}),T={store:Q,persistor:Object(F.h)(Q)},V=n(27);l.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(s.a,{loading:null,store:T.store,children:Object(x.jsx)(V.a,{persistor:T.persistor,children:Object(x.jsx)(i.a,{children:Object(x.jsx)(N,{})})})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={btn:"phonebook_btn__2b5mD",btn_del:"phonebook_btn_del__QktYC",label:"phonebook_label__3oO1y",filter_label:"phonebook_filter_label__3Jteo",input:"phonebook_input__I5WMY",filter_input:"phonebook_filter_input__3EpPB",title:"phonebook_title__2EpuQ",text:"phonebook_text__1DMey",list:"phonebook_list__2UeyS"}}},[[45,1,2]]]);
//# sourceMappingURL=main.58b62dec.chunk.js.map