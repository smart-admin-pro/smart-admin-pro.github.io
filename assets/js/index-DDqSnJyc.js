import{g as C}from"./dict-Cu197DXt.js";import{u as x}from"./useHandleData-DGO0-IdV.js";import{_ as h}from"./index.vue_vue_type_script_setup_true_name_ProTable_lang-Tky8n9Ab.js";import{T as $}from"./index-Bx3jjXU-.js";import{I as F}from"./index-DdwoxEeP.js";import{_ as I}from"./UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-DNkk-u4j.js";import{d as g,V as L,h as n,L as v,b as t,F as U,r as E,o as N,c as V,a as D,w as o,u as i,_ as M,e as p,aR as R,$ as B,a0 as P,J as q}from"./index-nS8LAQjE.js";import{g as H,b as S,f as A,d as G,h as J,i as K}from"./user-DTiKZ10C.js";import"./sortable.esm-CGHLlJBv.js";import"./plugin-vue_export-helper-DlAUqK2U.js";import"./Img-t2jbQywE.js";import"./upload-CoKxYqXZ.js";const j={class:"main-box"},z={class:"table-box"},O=g({name:"treeProTable"}),de=g({...O,setup(Q){L(()=>{w()});const d=n(),u=v({departmentId:""}),m=n([]),w=async()=>{const{data:e}=await H();m.value=e,u.departmentId=m.value[1].id},k=e=>{q.success("请注意查看请求参数变化 🤔"),d.value.pageable.pageNum=1,u.departmentId=e},c=n(!1),f=n([]),y=v([{type:"index",label:"#",width:80},{prop:"username",label:"用户姓名"},{prop:"gender",label:"性别",sortable:!0,isFilterEnum:!1,enum:f,search:{el:"select",props:{placeholder:"请输入性别查询",filterable:!0,remote:!0,reserveKeyword:!0,loading:c,remoteMethod:e=>{f.value=[],e&&(c.value=!0,setTimeout(()=>{c.value=!1,f.value=C.filter(a=>a.label.includes(e))},500))}}},render:e=>t(U,null,[e.row.gender===1?"男":"女"])},{prop:"idCard",label:"身份证号"},{prop:"email",label:"邮箱"},{prop:"address",label:"居住地址"},{prop:"status",label:"用户状态",sortable:!0,tag:!0,enum:S,search:{el:"tree-select"},fieldNames:{label:"userLabel",value:"userStatus"}},{prop:"createTime",label:"创建时间",width:180},{prop:"operation",label:"操作",width:300,fixed:"right"}]),T=async e=>{var a;await x(G,{id:[e.id]},`删除【${e.username}】用户`),(a=d.value)==null||a.getTableList()},_=n(null),b=(e,a={})=>{var r,s;const l={title:e,row:{...a},isView:e==="查看",api:e==="新增"?J:e==="编辑"?K:void 0,getTableList:(r=d.value)==null?void 0:r.getTableList};(s=_.value)==null||s.acceptParams(l)};return(e,a)=>{const l=E("el-button");return N(),V("div",j,[t($,{label:"name",title:"部门列表(单选)",data:m.value,"default-value":u.departmentId,onChange:k},null,8,["data","default-value"]),D("div",z,[t(h,{ref_key:"proTable",ref:d,"row-key":"id",indent:20,columns:y,"request-api":i(A),"request-auto":!1,"init-param":u,"search-col":{xs:1,sm:1,md:2,lg:3,xl:3}},{tableHeader:o(()=>[t(l,{type:"primary",icon:i(M),onClick:a[0]||(a[0]=r=>b("新增"))},{default:o(()=>a[1]||(a[1]=[p("新增用户")])),_:1},8,["icon"])]),operation:o(r=>[t(l,{type:"primary",link:"",icon:i(R),onClick:s=>b("查看",r.row)},{default:o(()=>a[2]||(a[2]=[p("查看")])),_:2},1032,["icon","onClick"]),t(l,{type:"primary",link:"",icon:i(B),onClick:s=>b("编辑",r.row)},{default:o(()=>a[3]||(a[3]=[p("编辑")])),_:2},1032,["icon","onClick"]),t(l,{type:"primary",link:"",icon:i(P),onClick:s=>T(r.row)},{default:o(()=>a[4]||(a[4]=[p("删除")])),_:2},1032,["icon","onClick"])]),_:1},8,["columns","request-api","init-param"]),t(I,{ref_key:"drawerRef",ref:_},null,512),t(F,{ref:"dialogRef"},null,512)])])}}});export{de as default};
