import{u as _}from"./useHandleData-DGO0-IdV.js";import{I as L,u as S}from"./index-DdwoxEeP.js";import{g as V,u as I}from"./dict-Cu197DXt.js";import{_ as A}from"./index.vue_vue_type_script_setup_true_name_ProTable_lang-Tky8n9Ab.js";import{T as N}from"./index-Bx3jjXU-.js";import{_ as P}from"./UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-DNkk-u4j.js";import{S as q}from"./index-BHpzEJGQ.js";import{d as C,h as d,L as f,V as E,M,r as H,o as j,c as J,b as r,u as o,a as w,w as i,_ as O,e as n,i as W,a1 as z,ax as G,aR as K,$ as Q,B as X,a0 as Y,J as b,ay as Z}from"./index-nS8LAQjE.js";import{k as ee,g as ae,c as te,d as le,r as re,e as k,B as se,h as oe,i as ie}from"./user-DTiKZ10C.js";import"./plugin-vue_export-helper-DlAUqK2U.js";import"./sortable.esm-CGHLlJBv.js";import"./Img-t2jbQywE.js";import"./upload-CoKxYqXZ.js";const ne={class:"main-box"},ue={class:"table-box"},de={class:"card mb10 pt0 pb0"},pe=C({name:"useSelectFilter"}),Ue=C({...pe,setup(ce){const l=d(),T=f([{type:"radio",label:"单选",width:80},{type:"index",label:"#",width:80},{prop:"username",label:"用户姓名",width:120},{prop:"gender",label:"性别",width:120,sortable:!0,enum:V},{prop:"idCard",label:"身份证号"},{prop:"email",label:"邮箱"},{prop:"address",label:"居住地址"},{prop:"status",label:"用户状态",width:120,sortable:!0,tag:!0,enum:I},{prop:"createTime",label:"创建时间",width:180,sortable:!0},{prop:"operation",label:"操作",width:330,fixed:"right"}]),v=f([{title:"用户状态(单)",key:"userStatus",options:[{label:"全部",value:""},{label:"在职",value:"1",icon:"User"},{label:"待培训",value:"2",icon:"Bell"},{label:"待上岗",value:"3",icon:"Clock"},{label:"已离职",value:"4",icon:"CircleClose"},{label:"已退休",value:"5",icon:"CircleCheck"}]},{title:"用户角色(多)",key:"userRole",multiple:!0,options:[]}]);E(()=>x());const x=async()=>{const{data:a}=await ee();v[1].options=a},p=d({userStatus:"2",userRole:["1","3"]}),h=a=>{b.success("请注意查看请求参数变化 🤔"),l.value.pageable.pageNum=1,p.value=a},c=f({departmentId:["11"]}),U=a=>{b.success("请注意查看请求参数变化 🤔"),l.value.pageable.pageNum=1,c.departmentId=a},$=()=>{var a,e,t,s;l.value.radio=(a=l.value)==null?void 0:a.tableData[3].id,(s=(e=l.value)==null?void 0:e.element)==null||s.setCurrentRow((t=l.value)==null?void 0:t.tableData[3])};M(()=>{var a;return(a=l.value)==null?void 0:a.radio},()=>{var a,e;return((a=l.value)==null?void 0:a.radio)&&b.success(`选中 id 为【${(e=l.value)==null?void 0:e.radio}】的数据`)});const R=async a=>{var e;await _(le,{id:[a.id]},`删除【${a.username}】用户`),(e=l.value)==null||e.getTableList()},F=async a=>{var e;await _(re,{id:a.id},`重置【${a.username}】用户密码`),(e=l.value)==null||e.getTableList()},B=async()=>{Z.confirm("确认导出用户数据?","温馨提示",{type:"warning"}).then(()=>{var a;return S(k,"用户列表",(a=l.value)==null?void 0:a.searchParam)})},g=d(null),D=()=>{var e,t;const a={title:"用户",tempApi:k,importApi:se,getTableList:(e=l.value)==null?void 0:e.getTableList};(t=g.value)==null||t.acceptParams(a)},y=d(null),m=(a,e={})=>{var s,u;const t={title:a,isView:a==="查看",row:{...e},api:a==="新增"?oe:a==="编辑"?ie:void 0,getTableList:(s=l.value)==null?void 0:s.getTableList};(u=y.value)==null||u.acceptParams(t)};return(a,e)=>{const t=H("el-button");return j(),J("div",ne,[r(N,{title:"部门列表(多选)",multiple:"",label:"name","request-api":o(ae),"default-value":c.departmentId,onChange:U},null,8,["request-api","default-value"]),w("div",ue,[w("div",de,[r(q,{data:v,"default-values":p.value,onChange:h},null,8,["data","default-values"])]),r(A,{ref_key:"proTable",ref:l,"highlight-current-row":"",columns:T,"request-api":o(te),"init-param":Object.assign(c,p.value)},{tableHeader:i(()=>[r(t,{type:"primary",icon:o(O),onClick:e[0]||(e[0]=s=>m("新增"))},{default:i(()=>e[1]||(e[1]=[n("新增用户")])),_:1},8,["icon"]),r(t,{type:"primary",icon:o(W),plain:"",onClick:D},{default:i(()=>e[2]||(e[2]=[n("批量添加用户")])),_:1},8,["icon"]),r(t,{type:"primary",icon:o(z),plain:"",onClick:B},{default:i(()=>e[3]||(e[3]=[n("导出用户数据")])),_:1},8,["icon"]),r(t,{type:"primary",icon:o(G),plain:"",onClick:$},{default:i(()=>e[4]||(e[4]=[n("选中第四行")])),_:1},8,["icon"])]),operation:i(s=>[r(t,{type:"primary",link:"",icon:o(K),onClick:u=>m("查看",s.row)},{default:i(()=>e[5]||(e[5]=[n("查看")])),_:2},1032,["icon","onClick"]),r(t,{type:"primary",link:"",icon:o(Q),onClick:u=>m("编辑",s.row)},{default:i(()=>e[6]||(e[6]=[n("编辑")])),_:2},1032,["icon","onClick"]),r(t,{type:"primary",link:"",icon:o(X),onClick:u=>F(s.row)},{default:i(()=>e[7]||(e[7]=[n("重置密码")])),_:2},1032,["icon","onClick"]),r(t,{type:"primary",link:"",icon:o(Y),onClick:u=>R(s.row)},{default:i(()=>e[8]||(e[8]=[n("删除")])),_:2},1032,["icon","onClick"])]),_:1},8,["columns","request-api","init-param"]),r(P,{ref_key:"drawerRef",ref:y},null,512),r(L,{ref_key:"dialogRef",ref:g},null,512)])])}}});export{Ue as default};
