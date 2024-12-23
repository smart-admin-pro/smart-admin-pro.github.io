import{g as x}from"./dict-Cu197DXt.js";import{u as h}from"./useHandleData-DGO0-IdV.js";import{_ as F}from"./index.vue_vue_type_script_setup_true_name_ProTable_lang-Tky8n9Ab.js";import{T as $}from"./index-Bx3jjXU-.js";import{I as E}from"./index-DdwoxEeP.js";import{_ as I}from"./UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-DNkk-u4j.js";import{d as w,V as L,P as g,h as n,L as v,b as a,F as N,r as P,o as U,c as V,a as D,w as o,u as i,_ as M,e as p,aR as R,$ as B,a0 as q,J as H}from"./index-nS8LAQjE.js";import{g as S,b as A,f as G,d as J,h as K,i as j}from"./user-DTiKZ10C.js";import"./sortable.esm-CGHLlJBv.js";import"./plugin-vue_export-helper-DlAUqK2U.js";import"./Img-t2jbQywE.js";import"./upload-CoKxYqXZ.js";const z={class:"main-box"},O={class:"table-box"},Q=w({name:"treeProTable"}),ue=w({...Q,setup(W){L(()=>{T(),g({title:"温馨提示",message:"该页面 ProTable 数据不会自动请求，需等待 treeFilter 数据请求完成之后，才会触发表格请求。",type:"info",duration:1e4}),setTimeout(()=>{g({title:"温馨提示",message:"该页面 ProTable 性别搜索框为远程数据搜索，详情可查看代码。",type:"info",duration:1e4})},0)});const d=n(),u=v({departmentId:""}),m=n([]),T=async()=>{const{data:e}=await S();m.value=e,u.departmentId=m.value[1].id},y=e=>{H.success("请注意查看请求参数变化 🤔"),d.value.pageable.pageNum=1,u.departmentId=e},c=n(!1),f=n([]),k=v([{type:"index",label:"#",width:80},{prop:"username",label:"用户姓名"},{prop:"gender",label:"性别",sortable:!0,isFilterEnum:!1,enum:f,search:{el:"select",props:{placeholder:"请输入性别查询",filterable:!0,remote:!0,reserveKeyword:!0,loading:c,remoteMethod:e=>{f.value=[],e&&(c.value=!0,setTimeout(()=>{c.value=!1,f.value=x.filter(t=>t.label.includes(e))},500))}}},render:e=>a(N,null,[e.row.gender===1?"男":"女"])},{prop:"idCard",label:"身份证号"},{prop:"email",label:"邮箱"},{prop:"address",label:"居住地址"},{prop:"status",label:"用户状态",sortable:!0,tag:!0,enum:A,search:{el:"tree-select"},fieldNames:{label:"userLabel",value:"userStatus"}},{prop:"createTime",label:"创建时间",width:180},{prop:"operation",label:"操作",width:300,fixed:"right"}]),C=async e=>{var t;await h(J,{id:[e.id]},`删除【${e.username}】用户`),(t=d.value)==null||t.getTableList()},_=n(null),b=(e,t={})=>{var r,s;const l={title:e,row:{...t},isView:e==="查看",api:e==="新增"?K:e==="编辑"?j:void 0,getTableList:(r=d.value)==null?void 0:r.getTableList};(s=_.value)==null||s.acceptParams(l)};return(e,t)=>{const l=P("el-button");return U(),V("div",z,[a($,{label:"name",title:"部门列表(单选)",data:m.value,"default-value":u.departmentId,onChange:y},null,8,["data","default-value"]),D("div",O,[a(F,{ref_key:"proTable",ref:d,"row-key":"id",indent:20,columns:k,"request-api":i(G),"request-auto":!1,"init-param":u,"search-col":{xs:1,sm:1,md:2,lg:3,xl:3}},{tableHeader:o(()=>[a(l,{type:"primary",icon:i(M),onClick:t[0]||(t[0]=r=>b("新增"))},{default:o(()=>t[1]||(t[1]=[p("新增用户")])),_:1},8,["icon"])]),operation:o(r=>[a(l,{type:"primary",link:"",icon:i(R),onClick:s=>b("查看",r.row)},{default:o(()=>t[2]||(t[2]=[p("查看")])),_:2},1032,["icon","onClick"]),a(l,{type:"primary",link:"",icon:i(B),onClick:s=>b("编辑",r.row)},{default:o(()=>t[3]||(t[3]=[p("编辑")])),_:2},1032,["icon","onClick"]),a(l,{type:"primary",link:"",icon:i(q),onClick:s=>C(r.row)},{default:o(()=>t[4]||(t[4]=[p("删除")])),_:2},1032,["icon","onClick"])]),_:1},8,["columns","request-api","init-param"]),a(I,{ref_key:"drawerRef",ref:_},null,512),a(E,{ref:"dialogRef"},null,512)])])}}});export{ue as default};
