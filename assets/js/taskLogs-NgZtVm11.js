import{u as g}from"./useHandleData-DGO0-IdV.js";import{u as T}from"./useAuthButtons-B4KvSUpv.js";import{_ as w}from"./index.vue_vue_type_script_setup_true_name_ProTable_lang-Tky8n9Ab.js";import{d as c,h as k,L as r,b as o,r as n,F as h,o as v,c as L,w as i,u as N,a0 as S,e as x,J as y}from"./index-nS8LAQjE.js";import{d as C}from"./user-DTiKZ10C.js";import{c as D}from"./task-DbQZa82_.js";import{a as B}from"./dict-Cu197DXt.js";import"./sortable.esm-CGHLlJBv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const J={class:"table-box"},O=c({name:"timingTask"}),M=c({...O,setup(A){const s=k(),u=r({}),m=t=>({list:t.list,total:t.total}),p=t=>{let e=JSON.parse(JSON.stringify(t));return e.createTime&&(e.startTime=e.createTime[0]),e.createTime&&(e.endTime=e.createTime[1]),delete e.createTime,D(e)},{BUTTONS:d}=T(),b=r([{type:"selection",fixed:"left",width:70},{prop:"id",label:"任务ID"},{prop:"taskName",label:"任务名称",width:120,search:{el:"input"}},{prop:"jobAction",label:"执行动作"},{prop:"status",label:"执行状态",enum:B,search:{el:"tree-select",props:{filterable:!0}},fieldNames:{label:"label",value:"value"},render:t=>o(h,null,[d.value.status?{}:o(n("el-tag"),{type:t.row.status==0?"danger":t.row.status==1?"success":"warning"},{default:()=>[t.row.status==0?"异常":"正常"]})])},{prop:"creatorTime",label:"创建时间",width:180},{prop:"description",label:"结果描述",width:280}]),f=({newIndex:t,oldIndex:e})=>{var a;(a=s.value)==null||a.tableData,y.success("修改列表排序成功")},_=async t=>{var e,a;await g(C,{id:t},"删除所选用户信息"),(e=s.value)==null||e.clearSelection(),(a=s.value)==null||a.getTableList()};return(t,e)=>{const a=n("el-button");return v(),L("div",J,[o(w,{ref_key:"proTable",ref:s,columns:b,"request-api":p,"init-param":u,"data-callback":m,onDragSort:f},{tableHeader:i(l=>[o(a,{type:"danger",icon:N(S),plain:"",disabled:!l.isSelected,onClick:E=>_(l.selectedListIds)},{default:i(()=>e[0]||(e[0]=[x(" 批量删除 ")])),_:2},1032,["icon","disabled","onClick"])]),_:1},8,["columns","init-param"])])}}});export{M as default};