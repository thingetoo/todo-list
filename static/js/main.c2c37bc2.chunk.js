(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),a=n(3),r=n.n(a),c=(n(15),n(4)),u=n(5),l=n(2),o=n(7),d=n(6),h=n(9),j=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).createTasks=s.createTasks.bind(Object(l.a)(s)),s}return Object(u.a)(n,[{key:"createTasks",value:function(e){var t=this;return Object(s.jsx)("li",{onClick:function(){return t.delete(e.key)},children:e.text},e.key)}},{key:"delete",value:function(e){this.props.delete(e)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return Object(s.jsx)("ul",{className:"theList",children:Object(s.jsx)(h.a,{duration:250,easing:"ease-out",children:e})})}}]),n}(i.Component),b=(n(16),function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={items:[]},s.deleteItem=s.deleteItem.bind(Object(l.a)(s)),s.addItem=s.addItem.bind(Object(l.a)(s)),s}return Object(u.a)(n,[{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(t)}}))}this._inputElement.value="",console.log(this.state.items),e.preventDefault()}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"todoListMain",children:[Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("form",{onSubmit:this.addItem,children:[Object(s.jsx)("input",{ref:function(t){return e._inputElement=t},placeholder:"enter task"}),Object(s.jsx)("button",{type:"submit",children:"add"})]})}),Object(s.jsx)(j,{entries:this.state.items,delete:this.deleteItem})]})}}]),n}(i.Component)),m=document.querySelector("#container");r.a.render(Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"To-do List"}),Object(s.jsx)(b,{})]}),m)}},[[17,1,2]]]);
//# sourceMappingURL=main.c2c37bc2.chunk.js.map