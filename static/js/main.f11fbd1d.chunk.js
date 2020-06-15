(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={container:"Filter_container__2XFAh"}},16:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),c=n.n(o),l=n(15),i=n(3),u=n(4),s=n(6),m=n(5),b=n(8),d=n(12),h=n(13),p=n(7),f=n.n(p),v=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handlerInputChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.handlerSubmit=function(t){t.preventDefault(),e.props.onAddContact(e.state),e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{className:f.a.container,onSubmit:this.handlerSubmit},r.a.createElement("label",{className:f.a.label},"Name ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:t,onChange:this.handlerInputChange,name:"name"})),r.a.createElement("label",{className:f.a.label},"Number ",r.a.createElement("br",null),r.a.createElement("input",{type:"tel",value:n,onChange:this.handlerInputChange,name:"number"})),r.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component),C=n(9),E=n.n(C);var g=function(e){var t=e.id,n=e.name,a=e.number,o=e.onRemove;return r.a.createElement("li",{className:E.a.container,key:t},r.a.createElement("p",null,n,": ",a),r.a.createElement("button",{className:E.a.button,type:"button",onClick:o},"Delete"))};var O=function(e){var t=e.contacts,n=e.onRemoveContact;return r.a.createElement("ul",null,t.map((function(e){var t=e.id,a=e.name,o=e.number;return r.a.createElement(g,{key:t,name:a,number:o,onRemove:function(){return n(t)}})})))},y=n(14),_=n.n(y);var j=function(e){var t=e.value,n=e.onFilter;return r.a.createElement("label",{className:_.a.container},"Find contact by name ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}))},k=(n(21),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handlerAddContact=function(t){var n=t.name,a=t.number,r={id:Object(d.uuid)(),name:n,number:a};e.state.contacts.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?b.b.info("".concat(n," is already in contacts!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[r])}}))},e.handlerFilter=function(t){e.setState({filter:t})},e.handlerVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e.handlerRemoveContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.handlerVisibleContacts();return r.a.createElement("div",null,r.a.createElement(b.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),r.a.createElement(b.a,null),r.a.createElement("h1",null,"Phonebook"),r.a.createElement(v,{onAddContact:this.handlerAddContact}),t.length>1&&r.a.createElement(j,{onFilter:this.handlerFilter,value:n}),t.length>0&&r.a.createElement("h2",null,"Contacts"),r.a.createElement(O,{contacts:a,onRemoveContact:this.handlerRemoveContact}))}}]),n}(a.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))},7:function(e,t,n){e.exports={container:"Form_container__1F55f",label:"Form_label__1Fvjl"}},9:function(e,t,n){e.exports={container:"Contact_container__2L2I3",button:"Contact_button__15WgT"}}},[[16,1,2]]]);
//# sourceMappingURL=main.f11fbd1d.chunk.js.map