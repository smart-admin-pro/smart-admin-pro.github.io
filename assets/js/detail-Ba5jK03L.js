import{_ as x}from"./index.vue_vue_type_script_setup_true_name_ProTable_lang-Tky8n9Ab.js";import{g as L,a as h,e as N}from"./dict-nAt3M3v8.js";import{d as v,h as f,L as b,b as o,r as c,F as B,an as V,V as H,o as J,c as O,w as l,u as n,_ as P,e as r,a0 as g,J as _,t as U,$ as A}from"./index-nS8LAQjE.js";import{u as E}from"./useAuthButtons-B4KvSUpv.js";import{b as F,j as M}from"./user-DTiKZ10C.js";import{u as R}from"./useHandleData-DGO0-IdV.js";import{_ as j}from"./dictDetailDrawer.vue_vue_type_script_setup_true_name_dictDetailDrawer_lang-D6omCLpv.js";import"./sortable.esm-CGHLlJBv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dict-Cu197DXt.js";const q={class:"table-box"},I=v({name:"dictDetail"}),se=v({...I,setup(z){const u=f(),y=e=>{let t=JSON.parse(JSON.stringify(e));return t.dictCode=history.state.dictCode,L(t)},d=f(null),p=(e,t={})=>{var s,i;const a={title:e,isView:!1,row:{...t},api:e==="新增"?h:e==="编辑"?N:void 0,getTableList:(s=u.value)==null?void 0:s.getTableList};(i=d.value)==null||i.parentParams(a)},C=e=>{},D=e=>{},{BUTTONS:k}=E(),w=e=>({list:e.list,total:e.total}),S=({newIndex:e,oldIndex:t})=>{var a;(a=u.value)==null||a.tableData,_.success("修改列表排序成功")},m=b({dictCode:history.state.dictCode}),T=b([{type:"selection",fixed:"left",width:70},{prop:"label",label:"字典标签",search:{el:"input"}},{prop:"value",label:"字典值",search:{el:"input"}},{prop:"sort",label:"排序"},{prop:"status",label:"状态",enum:F,search:{el:"tree-select",props:{filterable:!0}},fieldNames:{label:"userLabel",value:"userStatus"},render:e=>o(B,null,[k.value.status?o(c("el-switch"),{"model-value":e.row.status,"active-text":e.row.status?"启用":"禁用","active-value":1,"inactive-value":0,onClick:()=>$(e.row)},null):o(c("el-tag"),{type:e.row.status?"success":"danger"},{default:()=>[e.row.status?"启用":"禁用"]})])},{prop:"operation",label:"操作",fixed:"right",width:180}]),$=async e=>{var t;await R(M,{id:e.id,status:e.status==1?0:1},`切换【${e.name}】状态`),(t=u.value)==null||t.getTableList()};return V(()=>{history.state.dictCode&&(m.dictCode=history.state.dictCode)}),H(()=>{}),(e,t)=>{const a=c("el-button");return J(),O("div",q,[o(x,{ref_key:"proTable",ref:u,columns:T,"request-api":y,"init-param":m,"data-callback":w,onDragSort:S},{tableHeader:l(s=>[o(a,{type:"primary",icon:n(P),onClick:t[0]||(t[0]=i=>p("新增"))},{default:l(()=>t[2]||(t[2]=[r("新增")])),_:1},8,["icon"]),o(a,{type:"danger",icon:n(g),plain:"",disabled:!s.isSelected,onClick:i=>D(s.selectedListIds)},{default:l(()=>t[3]||(t[3]=[r(" 批量删除 ")])),_:2},1032,["icon","disabled","onClick"])]),usernameHeader:l(s=>[o(a,{type:"primary",onClick:t[1]||(t[1]=i=>n(_).success("我是通过作用域插槽渲染的表头"))},{default:l(()=>[r(U(s.column.label),1)]),_:2},1024)]),operation:l(s=>[o(a,{type:"primary",link:"",icon:n(A),onClick:i=>p("编辑",s.row)},{default:l(()=>t[4]||(t[4]=[r("编辑")])),_:2},1032,["icon","onClick"]),o(a,{type:"primary",link:"",icon:n(g),onClick:i=>C(s.row)},{default:l(()=>t[5]||(t[5]=[r("删除")])),_:2},1032,["icon","onClick"])]),_:1},8,["columns","init-param"]),o(j,{ref_key:"dictDetailDrawerRef",ref:d},null,512)])}}});export{se as default};
