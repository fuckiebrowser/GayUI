webpackJsonp([15],{Uecn:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a={data:function(){return{options:[{label:"士多啤梨",value:"strawberry"},{label:"苹果 disabled",value:"apple",disabled:!0},{label:"橙",value:"orange"}],value:["apple"],value2:"on",value3:!1,value4:[]}}},n=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("pm-layout",{attrs:{title:"Checkbox"}},[t("h3",[e._v(" CheckboxList")]),e._v(" "),t("pm-checkbox-list",{attrs:{options:e.options},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),e._v(" "),t("h3",[e._v(" CheckboxList - 左对齐")]),e._v(" "),t("pm-checkbox-list",{attrs:{align:"left",options:e.options},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),e._v(" "),t("pm-cell-group",[t("pm-cell-item",{attrs:{title:"数组"}},e._l(e.options,function(l,a){return t("pm-checkbox",{key:a,attrs:{label:l.value},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},[e._v("\n        "+e._s(l.label)+"\n      ")])})),e._v(" "),t("pm-cell-item",{attrs:{title:"选中的值"}},[e._v("\n      "+e._s(e.value)+"\n    ")])],1),e._v(" "),t("pm-cell-group",[t("pm-cell-item",{attrs:{title:"对象"}},e._l(e.options,function(l,a){return t("pm-checkbox",{key:a,attrs:{label:l},model:{value:e.value4,callback:function(l){e.value4=l},expression:"value4"}},[e._v("\n        "+e._s(l.label)+"\n      ")])})),e._v(" "),t("pm-cell-item",{attrs:{title:"选中的值"}},[e._v("\n      "+e._s(e.value4)+"\n    ")])],1),e._v(" "),t("pm-cell-group",[t("pm-cell-item",{attrs:{title:"数字字符串",label:""}},[t("pm-checkbox",{attrs:{"true-label":"on","false-label":"off"},model:{value:e.value2,callback:function(l){e.value2=l},expression:"value2"}},[e._v("\n                   全选\n      ")])],1),e._v(" "),t("pm-cell-item",{attrs:{title:"选中的值",label:""}},[e._v("\n      "+e._s(e.value2)+"\n    ")])],1),e._v(" "),t("pm-cell-group",[t("pm-cell-item",{attrs:{title:"布尔值",label:""}},[t("pm-checkbox",{model:{value:e.value3,callback:function(l){e.value3=l},expression:"value3"}},[e._v("\n                   是否\n      ")])],1),e._v(" "),t("pm-cell-item",{attrs:{title:"选中的值",label:""}},[e._v("\n      "+e._s(e.value3)+"\n    ")])],1)],1)},u=[],v={render:n,staticRenderFns:u},o=v,c=t("Mw9A"),s=c(a,o,!1,null,null,null);l.default=s.exports}});