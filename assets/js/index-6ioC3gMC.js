import{d as b,h as m,r as d,o as _,c as h,b as o,w as a,u as l,_ as f,e as i,g as C,aa as g,$ as x,a0 as $}from"./index-nS8LAQjE.js";import{_ as D,a as T}from"./menuDrawer.vue_vue_type_script_setup_true_name_menuDrawer_lang-DAS-QKaF.js";import{_ as B}from"./index.vue_vue_type_script_setup_true_name_ProTable_lang-Tky8n9Ab.js";import"./dict-Cu197DXt.js";import"./index-B3J6DKyD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./sortable.esm-CGHLlJBv.js";const L={class:"table-box"},M=b({name:"menuMange"}),j=b({...M,setup(V){const s=m(),w=m(T.data),k=()=>{s.value.searchParam},u=m(null),p=(c,e={})=>{var r,t;const n={title:c,isView:c==="查看",row:{...e},api:void 0,getTableList:(r=s.value)==null?void 0:r.getTableList};(t=u.value)==null||t.parentParams(n)},y=[{prop:"meta.title",label:"菜单名称",width:200,align:"left",search:{el:"input"}},{prop:"meta.icon",label:"菜单图标"},{prop:"name",label:"菜单编码",search:{el:"input"}},{prop:"path",label:"菜单路径",width:300,search:{el:"input"}},{prop:"component",label:"组件路径",width:300},{prop:"operation",label:"操作",width:250,fixed:"right"}];return(c,e)=>{const n=d("el-button"),r=d("el-icon");return _(),h("div",L,[o(B,{ref_key:"proTable",ref:s,title:"菜单列表","row-key":"path",indent:20,columns:y,data:w.value,onSearch:k},{tableHeader:a(()=>[o(n,{type:"primary",icon:l(f),onClick:e[0]||(e[0]=t=>p("新增"))},{default:a(()=>e[1]||(e[1]=[i("新增菜单 ")])),_:1},8,["icon"])]),icon:a(t=>[o(r,{size:18},{default:a(()=>[(_(),C(g(t.row.meta.icon)))]),_:2},1024)]),operation:a(t=>[o(n,{type:"primary",link:"",icon:l(f),onClick:v=>p("添加子项",t.row)},{default:a(()=>e[2]||(e[2]=[i(" 添加子项 ")])),_:2},1032,["icon","onClick"]),o(n,{type:"primary",link:"",icon:l(x),onClick:v=>p("编辑",t.row)},{default:a(()=>e[3]||(e[3]=[i(" 编辑 ")])),_:2},1032,["icon","onClick"]),o(n,{type:"primary",link:"",icon:l($)},{default:a(()=>e[4]||(e[4]=[i(" 删除 ")])),_:1},8,["icon"])]),_:1},8,["data"]),o(D,{ref_key:"menuDrawerRef",ref:u},null,512)])}}});export{j as default};
