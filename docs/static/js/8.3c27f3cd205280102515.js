webpackJsonp([8],{"/Fvd":function(t,n,e){var o=e("rGLC");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("8bSs")("d7092cfe",o,!0)},EXBr:function(t,n,e){"use strict";function o(t){e("/Fvd")}Object.defineProperty(n,"__esModule",{value:!0});var r=e("lC5x"),a=e.n(r),c=e("J0Oq"),s=e.n(c),i={data:function(){return{visible:!1}},methods:{alert:function(){this.$alert("message")},confirm:function(){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$confirm("success");case 3:t.$toast.success("confirm"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),t.$toast.error("cancel");case 9:case"end":return n.stop()}},n,t,[[0,6]])}))()},prompt:function(){var t=this;return s()(a.a.mark(function n(){var e;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$prompt("error");case 2:e=n.sent,t.$toast("你输入了"+e);case 4:case"end":return n.stop()}},n,t)}))()},custom:function(){var t=this,n=this.$dialog({title:"我是标题",content:"我是内容",showInput:!0,inputPlaceholder:"输入些什么吧",closeOnConfirm:!1,confirm:function(e){t.$toast("点击了确认"+e),n.close(e)},cancel:function(){return t.$toast("点击了取消")}})},component:function(){this.$refs.dialog.show()},hide:function(){this.$refs.dialog.hide()}}},l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pm-layout",{attrs:{title:"Dialog"}},[e("div",{staticClass:"container"},[e("pm-button",{attrs:{long:"",type:"danger"},on:{click:t.alert}},[t._v("\n      alert\n    ")]),t._v(" "),e("pm-button",{attrs:{long:"",type:"warning"},on:{click:t.confirm}},[t._v("\n      confirm\n    ")]),t._v(" "),e("pm-button",{attrs:{long:"",type:"success"},on:{click:t.prompt}},[t._v("\n      prompt\n    ")]),t._v(" "),e("pm-button",{attrs:{long:"",type:"primary"},on:{click:t.custom}},[t._v("\n      custom\n    ")]),t._v(" "),e("pm-button",{attrs:{long:""},on:{click:t.component}},[t._v("\n      component\n    ")]),t._v(" "),e("pm-dialog",{ref:"dialog",attrs:{showClose:!1}},[e("template",{slot:"header"},[e("h1",[t._v("Header Slot")])]),t._v(" "),[e("h2",[t._v("Default Slot")])],t._v(" "),e("template",{slot:"footer"},[e("div",{staticStyle:{width:"100%","text-align":"center"}},[e("h3",[t._v("Footer Slot")]),t._v(" "),e("a",{on:{click:t.hide}},[t._v("Click me to hide")])])])],2)],1)])},u=[],p={render:l,staticRenderFns:u},f=p,v=e("Mw9A"),d=o,m=v(i,f,!1,d,"data-v-18d99bb2",null);n.default=m.exports},rGLC:function(t,n,e){n=t.exports=e("BkJT")(!1),n.push([t.i,".container[data-v-18d99bb2]{padding:0 15px}.pm-button[data-v-18d99bb2]{margin-bottom:15px}",""])}});