import{d as h,h as w,M as x,r as v,o as u,c,F as f,f as _,a as r,t as k,N as y,b as B,w as i,n as F,O as N,g as p,aa as S}from"./index-nS8LAQjE.js";import{_ as D}from"./plugin-vue_export-helper-DlAUqK2U.js";const I={class:"select-filter"},A={class:"select-filter-item-title"},E={key:0,class:"select-filter-notData"},$={class:"select-filter-list"},m=["onClick"],z=h({name:"selectFilter"}),L=h({...z,props:{data:{default:()=>[]},defaultValues:{default:()=>({})}},emits:["change"],setup(C,{emit:g}){const n=C,l=w({});x(()=>n.defaultValues,()=>{n.data.forEach(e=>{e.multiple?l.value[e.key]=n.defaultValues[e.key]??[""]:l.value[e.key]=n.defaultValues[e.key]??""})},{deep:!0,immediate:!0});const V=g,b=(e,a)=>{if(!e.multiple)l.value[e.key]!==a.value&&(l.value[e.key]=a.value);else if(e.options[0].value===a.value&&(l.value[e.key]=[a.value]),l.value[e.key].includes(a.value)){let o=l.value[e.key].findIndex(d=>d===a.value);l.value[e.key].splice(o,1),l.value[e.key].length==0&&(l.value[e.key]=[e.options[0].value])}else l.value[e.key].push(a.value),l.value[e.key].includes(e.options[0].value)&&l.value[e.key].splice(0,1);V("change",l.value)};return(e,a)=>{const o=v("el-icon"),d=v("el-scrollbar");return u(),c("div",I,[(u(!0),c(f,null,_(e.data,s=>(u(),c("div",{key:s.key,class:"select-filter-item"},[r("div",A,[r("span",null,k(s.title)+" ：",1)]),s.options.length?y("",!0):(u(),c("span",E,"暂无数据 ~")),B(d,null,{default:i(()=>[r("ul",$,[(u(!0),c(f,null,_(s.options,t=>(u(),c("li",{key:t.value,class:F({active:t.value===l.value[s.key]||Array.isArray(l.value[s.key])&&l.value[s.key].includes(t.value)}),onClick:M=>b(s,t)},[N(e.$slots,"default",{row:t},()=>[t.icon?(u(),p(o,{key:0},{default:i(()=>[(u(),p(S(t.icon)))]),_:2},1024)):y("",!0),r("span",null,k(t.label),1)],!0)],10,m))),128))])]),_:2},1024)]))),128))])}}}),q=D(L,[["__scopeId","data-v-838b2b2e"]]);export{q as S};
