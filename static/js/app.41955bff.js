(function(t){function a(a){for(var e,i,r=a[0],d=a[1],n=a[2],m=0,v=[];m<r.length;m++)i=r[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(t[e]=d[e]);c&&c(a);while(v.length)v.shift()();return l.push.apply(l,n||[]),s()}function s(){for(var t,a=0;a<l.length;a++){for(var s=l[a],e=!0,r=1;r<s.length;r++){var d=s[r];0!==o[d]&&(e=!1)}e&&(l.splice(a--,1),t=i(i.s=s[0]))}return t}var e={},o={app:0},l=[];function i(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,a,s){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)i.d(s,e,function(a){return t[a]}.bind(null,e));return s},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=a,r=r.slice();for(var n=0;n<r.length;n++)a(r[n]);var c=d;l.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";s("85ec")},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},l=[],i={data:function(){return{}}},r=i,d=(s("034f"),s("2877")),n=Object(d["a"])(r,o,l,!1,null,null,null),c=n.exports,m=s("8c4f"),v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Topbar"),s("ConstituentProperties")],1)},u=[],p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._m(0),s("Modals")],1)},b=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("Spectre")]),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMenuLink-333","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Project ")]),s("div",{staticClass:"dropdown-menu dropdown-default",attrs:{"aria-labelledby":"navbarDropdownMenuLink-333"}},[s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#newProject"}},[t._v("New")]),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#openProject"}},[t._v("Open")]),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#importProject"}},[t._v("Import Project")]),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#exportProject"}},[t._v("Export Project")]),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#addReference"}},[t._v("Add Reference")]),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#deleteReference"}},[t._v("Delete Reference")]),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#addToxicity"}},[t._v("Add Reference Toxicity Value")]),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#deleteToxicity"}},[t._v("Delete Reference Toxicity Value")]),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#exportExcel"}},[t._v("Export to Excel")])])]),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Model ")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#newModel"}},[t._v("New")]),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#renameModel"}},[t._v("Rename")]),s("div",{staticClass:"dropdown-divider"}),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#deleteModel"}},[t._v("Delete")]),s("div",{staticClass:"dropdown-divider"}),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#saveEnds"}},[t._v("Save ENDS")]),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#saveUser"}},[t._v("Save User")])])]),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Help ")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#quickGuide"}},[t._v("Quick Start Guide")]),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#manual"}},[t._v("User's Manual")]),s("div",{staticClass:"dropdown-divider"}),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#showVersion"}},[t._v("Show version")]),s("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal","data-target":"#about"}},[t._v("About")])])])]),s("ul",{staticClass:"navbar-nav ml-auto nav-flex-icons"},[s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMenuLink-333","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fa fa-user"})]),s("div",{staticClass:"dropdown-menu dropdown-menu-right dropdown-default",attrs:{"aria-labelledby":"navbarDropdownMenuLink-333"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"/login"}},[t._v("Login")]),s("a",{staticClass:"dropdown-item",attrs:{href:"/logout"}},[t._v("Sign Out")])])])])])])}],C=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"modal fade",attrs:{id:"newProject",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Create New Project")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"openProject",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Open Project")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"importProject",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Import Project")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"exportProject",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Export Project")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"addReference",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Add Reference")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"deleteReference",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Delete Reference")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"addToxicity",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Add Toxicity")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"deleteToxicity",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Delete Toxicity")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"exportExcel",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Export to Excel")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"newModel",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Create New Model")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"renameModel",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Rename Model")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"deleteModel",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Delete Model")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"saveEnds",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Save Ends")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"saveUser",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Save User")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"quickGuide",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Quick Guide")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"manual",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Manual")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"showVersion",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Show Version")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"about",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("About")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[t._v(" ... ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])])])}],_={},f=Object(d["a"])(_,C,g,!1,null,null,null),h=f.exports,y={name:"Topbar",components:{Modals:h}},w=y,x=Object(d["a"])(w,p,b,!1,null,null,null),M=x.exports,L=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col col-md-6"},[s("table",{staticClass:"table table-bordered table-sm table-stripped table-hover"},[s("thead",[s("tr",{staticClass:"bg-primary  text-center"},[s("th",{attrs:{scope:"col"}},[t._v("Name")]),s("th",{attrs:{scope:"col"}},[t._v("Value")]),s("th",{attrs:{scope:"col"}},[t._v("Units")])])]),s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Kinetic Parameter")]),s("td",[t._v("0E0")]),s("td",[t._v("1/s")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Kinetic Parameter")]),s("td",[t._v("100.0")]),s("td",[t._v("mg/m^3")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Activity Coefficient")]),s("td",[t._v("1.0")]),s("td",[t._v("nondimensional")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("air:tissue partition coefficient")]),s("td",[t._v("100.0")]),s("td",[t._v("nondimensional")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Density")]),s("td",[t._v("1.261")]),s("td",[t._v("g/mL")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Diffusion Coeffient in Air")]),s("td",[t._v("0.112")]),s("td",[t._v("cm^2/s")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("diffusion coffecient in pulmonary tissue")]),s("td",[t._v("1.74E-5")]),s("td",[t._v("cm^2/s")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("diffusion coefficient in TB tissue")]),s("td",[t._v("0E0")]),s("td",[t._v("cm^2/s")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Latent Heat of Vaporization")]),s("td",[t._v("974.0")]),s("td",[t._v("KJ/kg")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Molecular Weight")]),s("td",[t._v("92.09")]),s("td",[t._v("g/mol")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Saturation Vapor Pressure")]),s("td",[t._v("8.783E-5")]),s("td",[t._v("kPa")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Specific Heat Capacity")]),s("td",[t._v("2.37")]),s("td",[t._v("J(g-K)")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Surface Tension")]),s("td",[t._v("64.0")]),s("td",[t._v("dyn/cm")])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Thermal Conductivity")]),s("td",[t._v("0.28")]),s("td",[t._v("W/(m-k)")])])])])])])])}],S={},P=Object(d["a"])(S,L,T,!1,null,null,null),E=P.exports,j={name:"Index",components:{Topbar:M,ConstituentProperties:E}},k=j,F=Object(d["a"])(k,v,u,!1,null,null,null),R=F.exports,N=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-md-center"},[s("div",{staticClass:"col col-md-5"},[s("div",{staticClass:"card"},[t._m(0),s("div",{staticClass:"card-body px-lg-5 pt-0"},[s("form",{staticClass:"text-center",staticStyle:{color:"#757575"},attrs:{novalidatej:""},on:{submit:function(a){return a.preventDefault(),t.login(a)}}},[s("div",{staticClass:"md-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"materialLoginFormEmail",name:"username"},domProps:{value:t.username},on:{input:function(a){a.target.composing||(t.username=a.target.value)}}}),s("label",{attrs:{for:"materialLoginFormEmail"}},[t._v("E-mail")])]),s("div",{staticClass:"md-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"materialLoginFormPassword",name:"password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),s("label",{attrs:{for:"materialLoginFormPassword"}},[t._v("Password")])]),t._m(1),s("button",{staticClass:"btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0",attrs:{type:"submit"}},[t._v(" Sign in ")]),t._m(2)])])])])])])},O=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h5",{staticClass:"card-header primary-color white-text text-center py-4"},[s("strong",[t._v("Sign in")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex justify-content-around"},[s("div",[s("div",{staticClass:"form-check"},[s("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"materialLoginFormRemember"}}),s("label",{staticClass:"form-check-label",attrs:{for:"materialLoginFormRemember"}},[t._v("Remember me")])])]),s("div",[s("a",{attrs:{href:"/forgot-password"}},[t._v("Forgot password?")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v(" Not a member? "),s("a",{attrs:{href:"/register"}},[t._v("Register")])])}],D=(s("ac1f"),s("5319"),s("bc3a")),$=s.n(D),A={name:"login",components:{},data:function(){return{username:"aryals10",password:"sabish10",token:""}},methods:{login:function(){var t=this;console.log(this.username,this.password),$.a.post("http://localhost:8000/auth/login",{username:this.username,password:this.password}).then((function(a){t.token=a.data.token,localStorage.setItem("token",t.token),location.replace("/")})).catch((function(t){localStorage.removeItem("token"),console.log(t)}))}}},V=A,U=Object(d["a"])(V,N,O,!1,null,null,null),I=U.exports,H=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-md-center"},[s("div",{staticClass:"col col-md-6"},[s("div",{staticClass:"card"},[t._m(0),s("div",{staticClass:"card-body px-lg-5 pt-0"},[s("form",{staticClass:"text-center",staticStyle:{color:"#757575"},attrs:{novalidate:""},on:{submit:function(a){return a.preventDefault(),t.register(a)}}},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"md-form"},[s("label",{attrs:{for:"materialRegisterFormFirstName"}},[t._v("First name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],staticClass:"form-control",attrs:{type:"text",id:"materialRegisterFormFirstName",name:"firstName"},domProps:{value:t.first_name},on:{input:function(a){a.target.composing||(t.first_name=a.target.value)}}})])]),s("div",{staticClass:"col"},[s("label",{attrs:{for:"materialRegisterFormLastName"}},[t._v("Last name")]),s("div",{staticClass:"md-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],staticClass:"form-control",attrs:{type:"email",id:"materialRegisterFormLastName",name:"lastName"},domProps:{value:t.last_name},on:{input:function(a){a.target.composing||(t.last_name=a.target.value)}}})])])]),s("div",{staticClass:"md-form"},[s("label",{attrs:{for:"materialLoginFormEmail"}},[t._v("User name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"materialLoginFormEmail",name:"username"},domProps:{value:t.username},on:{input:function(a){a.target.composing||(t.username=a.target.value)}}})]),s("div",{staticClass:"md-form"},[s("label",{attrs:{for:"materialLoginFormEmail"}},[t._v("E-mail")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"materialLoginFormEmail",name:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),s("div",{staticClass:"md-form"},[s("label",{attrs:{for:"materialLoginFormPassword"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"materialLoginFormPassword",name:"password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),t._m(1),t._m(2),s("button",{staticClass:"btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0",attrs:{type:"submit"}},[t._v(" Sign up ")]),t._m(3)])])])])])])},G=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h5",{staticClass:"card-header primary-color white-text text-center py-4"},[s("strong",[t._v("Sign up")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"md-form"},[s("input",{staticClass:"form-control",attrs:{type:"password",id:"materialRegisterFormPhone","aria-describedby":"materialRegisterFormPhoneHelpBlock",name:"phoneNumber"}}),s("label",{attrs:{for:"materialRegisterFormPhone"}},[t._v("Phone number")]),s("small",{staticClass:"form-text text-muted mb-4",attrs:{id:"materialRegisterFormPhoneHelpBlock"}},[t._v(" for two step authentication ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("a",{attrs:{href:"/forgot-password"}},[t._v("Forgot password?")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v(" already a member? "),s("a",{attrs:{href:"/login"}},[t._v("Sign In")])])}],J={name:"register",components:{},data:function(){return{username:"aryals10",password:"sabish10",first_name:"sandhya",last_name:"aryal",email:"bbhandari@gmail.com"}},methods:{register:function(){console.log(this.username,this.password),$.a.post("http://localhost:8000/auth/register",{username:this.username,password:this.password,first_name:this.first_name,last_name:this.last_name,email:this.email}).then((function(t){201===t.status&&location.replace("/login")})).catch((function(t){console.log(t)}))}}},K=J,z=Object(d["a"])(K,H,G,!1,null,null,null),B=z.exports;e["a"].config.productionTip=!1,e["a"].use(m["a"]);var q=[{path:"/",component:R},{path:"/login",component:I},{path:"/register",component:B}],Q=new m["a"]({routes:q,mode:"history"});new e["a"]({el:"#app",router:Q,render:function(t){return t(c)}})},"85ec":function(t,a,s){}});
//# sourceMappingURL=app.41955bff.js.map