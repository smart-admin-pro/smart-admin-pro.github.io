import{_ as d}from"./index.vue_vue_type_script_setup_true_name_ProTable_lang-Tky8n9Ab.js";import{a8 as b,a9 as u,d as r,h,L as s,o as f,c as g,b as _,J as w}from"./index-nS8LAQjE.js";import"./sortable.esm-CGHLlJBv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const T=a=>b.get(u+"/logs/page",a,{loading:!1}),y={class:"table-box"},k=r({name:"systemLog"}),D=r({...k,setup(a){const o=h(),i=s({}),p=t=>({list:t.list,total:t.total}),n=t=>{let e=JSON.parse(JSON.stringify(t));return e.createTime&&(e.startTime=e.createTime[0]),e.createTime&&(e.endTime=e.createTime[1]),delete e.createTime,T(e)},c=s([{type:"selection",fixed:"left",width:60},{type:"sort",label:"Sort",width:80},{prop:"keywords",label:"关键字",search:{el:"input"},isShow:!1},{prop:"createTime",label:"操作时间",width:180,search:{el:"date-picker",span:2,props:{type:"datetimerange",valueFormat:"YYYY-MM-DD HH:mm:ss"},defaultValue:[]}},{width:100,prop:"operator",label:"操作人"},{width:100,prop:"module",label:"日志模块"},{width:150,prop:"content",label:"日志内容"},{width:150,prop:"ip",label:"IP地址"},{width:180,prop:"region",label:"地区"},{width:150,prop:"browser",label:"浏览器"},{prop:"os",label:"终端系统"},{width:130,prop:"executionTime",label:"执行时间(ms)"}]),m=({newIndex:t,oldIndex:e})=>{var l;(l=o.value)==null||l.tableData,w.success("修改列表排序成功")};return(t,e)=>(f(),g("div",y,[_(d,{ref_key:"proTable",ref:o,columns:c,"request-api":n,"init-param":i,"data-callback":p,onDragSort:m},null,8,["columns","init-param"])]))}});export{D as default};
