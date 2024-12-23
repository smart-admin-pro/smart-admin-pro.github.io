import{d as L,y as I,h as y,L as C,b as l,J as c,r as d,e as o,F as Y,Z as J,o as m,c as O,w as s,a2 as g,g as v,u as i,_ as j,i as q,a1 as G,a0 as _,t as k,aR as W,$ as Z,B as z,ay as K}from"./index-nS8LAQjE.js";import{u as f}from"./useHandleData-DGO0-IdV.js";import{I as Q,u as X}from"./index-DdwoxEeP.js";import{u as ee}from"./useAuthButtons-B4KvSUpv.js";import{_ as te}from"./index.vue_vue_type_script_setup_true_name_ProTable_lang-Tky8n9Ab.js";import{_ as ae}from"./UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-DNkk-u4j.js";import{a as le,b as re,j as se,c as oe,d as x,r as ne,e as $,B as ie,h as ue,i as de}from"./user-DTiKZ10C.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./sortable.esm-CGHLlJBv.js";import"./dict-Cu197DXt.js";import"./Img-t2jbQywE.js";import"./upload-CoKxYqXZ.js";const pe={class:"table-box"},ce=L({name:"useProTable"}),Ue=L({...ce,setup(me){const U=I(),D=()=>{U.push(`/proTable/useProTable/detail/${Math.random().toFixed(3)}?params=detail-page`)},n=y(),S=C({type:1}),A=t=>({list:t.list,total:t.total}),h=t=>{let e=JSON.parse(JSON.stringify(t));return e.createTime&&(e.startTime=e.createTime[0]),e.createTime&&(e.endTime=e.createTime[1]),delete e.createTime,oe(e)},{BUTTONS:B}=ee(),V=C([{type:"selection",fixed:"left",width:70},{type:"sort",label:"Sort",width:80},{type:"expand",label:"Expand",width:85},{prop:"username",label:"用户姓名",search:{el:"input",tooltip:"我是搜索提示"},render:t=>l(d("el-button"),{type:"primary",link:!0,onClick:()=>c.success("我是通过 tsx 语法渲染的内容")},{default:()=>[t.row.username]})},{prop:"gender",label:"性别",enum:le,search:{el:"select",props:{filterable:!0}},fieldNames:{label:"genderLabel",value:"genderValue"}},{prop:"user.detail.age",label:"年龄",search:{render:({searchParam:t})=>l("div",{class:"flx-center"},[l(d("el-input"),{modelValue:t.minAge,modelModifiers:{trim:!0},"onUpdate:modelValue":e=>t.minAge=e,placeholder:"最小年龄"},null),l("span",{class:"mr10 ml10"},[o("-")]),l(d("el-input"),{modelValue:t.maxAge,modelModifiers:{trim:!0},"onUpdate:modelValue":e=>t.maxAge=e,placeholder:"最大年龄"},null)])}},{prop:"idCard",label:"身份证号",search:{el:"input"}},{prop:"email",label:"邮箱"},{prop:"address",label:"居住地址"},{prop:"status",label:"用户状态",enum:re,search:{el:"tree-select",props:{filterable:!0}},fieldNames:{label:"userLabel",value:"userStatus"},render:t=>l(Y,null,[B.value.status?l(d("el-switch"),{"model-value":t.row.status,"active-text":t.row.status?"启用":"禁用","active-value":1,"inactive-value":0,onClick:()=>N(t.row)},null):l(d("el-tag"),{type:t.row.status?"success":"danger"},{default:()=>[t.row.status?"启用":"禁用"]})])},{prop:"createTime",label:"创建时间",headerRender:t=>l(d("el-button"),{type:"primary",onClick:()=>c.success("我是通过 tsx 语法渲染的表头")},{default:()=>[t.column.label]}),width:180,search:{el:"date-picker",span:2,props:{type:"datetimerange",valueFormat:"YYYY-MM-DD HH:mm:ss"},defaultValue:["2022-11-12 11:35:00","2022-12-12 11:35:00"]}},{prop:"operation",label:"操作",fixed:"right",width:330}]),F=({newIndex:t,oldIndex:e})=>{var a;(a=n.value)==null||a.tableData,c.success("修改列表排序成功")},R=async t=>{var e;await f(x,{id:[t.id]},`删除【${t.username}】用户`),(e=n.value)==null||e.getTableList()},E=async t=>{var e,a;await f(x,{id:t},"删除所选用户信息"),(e=n.value)==null||e.clearSelection(),(a=n.value)==null||a.getTableList()},M=async t=>{var e;await f(ne,{id:t.id},`重置【${t.username}】用户密码`),(e=n.value)==null||e.getTableList()},N=async t=>{var e;await f(se,{id:t.id,status:t.status==1?0:1},`切换【${t.username}】用户状态`),(e=n.value)==null||e.getTableList()},P=async()=>{K.confirm("确认导出用户数据?","温馨提示",{type:"warning"}).then(()=>{var t;return X($,"用户列表",(t=n.value)==null?void 0:t.searchParam)})},w=y(null),H=()=>{var e,a;const t={title:"用户",tempApi:$,importApi:ie,getTableList:(e=n.value)==null?void 0:e.getTableList};(a=w.value)==null||a.acceptParams(t)},T=y(null),b=(t,e={})=>{var p,r;const a={title:t,isView:t==="查看",row:{...e},api:t==="新增"?ue:t==="编辑"?de:void 0,getTableList:(p=n.value)==null?void 0:p.getTableList};(r=T.value)==null||r.acceptParams(a)};return(t,e)=>{const a=d("el-button"),p=J("auth");return m(),O("div",pe,[l(te,{ref_key:"proTable",ref:n,columns:V,"request-api":h,"init-param":S,"data-callback":A,onDragSort:F},{tableHeader:s(r=>[g((m(),v(a,{type:"primary",icon:i(j),onClick:e[0]||(e[0]=u=>b("新增"))},{default:s(()=>e[3]||(e[3]=[o("新增用户")])),_:1},8,["icon"])),[[p,"add"]]),g((m(),v(a,{type:"primary",icon:i(q),plain:"",onClick:H},{default:s(()=>e[4]||(e[4]=[o("批量添加用户")])),_:1},8,["icon"])),[[p,"batchAdd"]]),g((m(),v(a,{type:"primary",icon:i(G),plain:"",onClick:P},{default:s(()=>e[5]||(e[5]=[o("导出用户数据")])),_:1},8,["icon"])),[[p,"export"]]),l(a,{type:"primary",plain:"",onClick:D},{default:s(()=>e[6]||(e[6]=[o("To 子集详情页面")])),_:1}),l(a,{type:"danger",icon:i(_),plain:"",disabled:!r.isSelected,onClick:u=>E(r.selectedListIds)},{default:s(()=>e[7]||(e[7]=[o(" 批量删除用户 ")])),_:2},1032,["icon","disabled","onClick"])]),expand:s(r=>[o(k(r.row),1)]),usernameHeader:s(r=>[l(a,{type:"primary",onClick:e[1]||(e[1]=u=>i(c).success("我是通过作用域插槽渲染的表头"))},{default:s(()=>[o(k(r.column.label),1)]),_:2},1024)]),createTime:s(r=>[l(a,{type:"primary",link:"",onClick:e[2]||(e[2]=u=>i(c).success("我是通过作用域插槽渲染的内容"))},{default:s(()=>[o(k(r.row.createTime),1)]),_:2},1024)]),operation:s(r=>[l(a,{type:"primary",link:"",icon:i(W),onClick:u=>b("查看",r.row)},{default:s(()=>e[8]||(e[8]=[o("查看")])),_:2},1032,["icon","onClick"]),l(a,{type:"primary",link:"",icon:i(Z),onClick:u=>b("编辑",r.row)},{default:s(()=>e[9]||(e[9]=[o("编辑")])),_:2},1032,["icon","onClick"]),l(a,{type:"primary",link:"",icon:i(z),onClick:u=>M(r.row)},{default:s(()=>e[10]||(e[10]=[o("重置密码")])),_:2},1032,["icon","onClick"]),l(a,{type:"primary",link:"",icon:i(_),onClick:u=>R(r.row)},{default:s(()=>e[11]||(e[11]=[o("删除")])),_:2},1032,["icon","onClick"])]),_:1},8,["columns","init-param"]),l(ae,{ref_key:"drawerRef",ref:T},null,512),l(Q,{ref_key:"dialogRef",ref:w},null,512)])}}});export{Ue as default};
