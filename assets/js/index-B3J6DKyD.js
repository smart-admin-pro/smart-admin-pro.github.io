import{d as y,h as u,s as D,ab as b,r as t,o as a,c as d,b as r,w as m,u as U,ac as F,ad as N,g as f,a as k,F as O,f as R,aa as T,t as $}from"./index-nS8LAQjE.js";import{_ as j}from"./plugin-vue_export-helper-DlAUqK2U.js";const z={class:"icon-box"},E={class:"icon-list"},P=["onClick"],q=y({name:"SelectIcon"}),A=y({...q,props:{iconValue:{default:""},title:{default:"请选择图标"},clearable:{type:Boolean,default:!0},placeholder:{default:"请选择图标"}},emits:["update:iconValue"],setup(g,{emit:C}){const n=u(g.iconValue),s=u(!1),h=()=>s.value=!0,_=C,I=e=>{s.value=!1,n.value=e.name,_("update:iconValue",e.name),setTimeout(()=>i.value.blur(),0)},i=u(),w=()=>{n.value="",_("update:iconValue",""),setTimeout(()=>i.value.blur(),0)},c=u(""),p=b,v=D(()=>{if(!c.value)return b;let e={};for(const o in p)o.toLowerCase().indexOf(c.value.toLowerCase())>-1&&(e[o]=p[o]);return e});return(e,o)=>{const B=t("el-button"),V=t("el-input"),x=t("el-scrollbar"),L=t("el-empty"),S=t("el-dialog");return a(),d("div",z,[r(V,F({ref_key:"inputRef",ref:i,modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=l=>n.value=l)},e.$attrs,{placeholder:e.placeholder,clearable:e.clearable,onClear:w,onClick:h}),{append:m(()=>[r(B,{icon:U(p)[e.iconValue]},null,8,["icon"])]),_:1},16,["modelValue","placeholder","clearable"]),r(S,{modelValue:s.value,"onUpdate:modelValue":o[2]||(o[2]=l=>s.value=l),title:e.placeholder,top:"50px",width:"66%"},{default:m(()=>[r(V,{modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=l=>c.value=l),placeholder:"搜索图标",size:"large","prefix-icon":N},null,8,["modelValue","prefix-icon"]),Object.keys(v.value).length?(a(),f(x,{key:0},{default:m(()=>[k("div",E,[(a(!0),d(O,null,R(v.value,l=>(a(),d("div",{key:l,class:"icon-item",onClick:H=>I(l)},[(a(),f(T(l))),k("span",null,$(l.name),1)],8,P))),128))])]),_:1})):(a(),f(L,{key:1,description:"未搜索到您要找的图标~"}))]),_:1},8,["modelValue","title"])])}}}),M=j(A,[["__scopeId","data-v-46cbf7d9"]]);export{M as S};
