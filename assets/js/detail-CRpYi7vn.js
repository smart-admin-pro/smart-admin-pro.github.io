import{d as o,x as r,h as u,r as p,o as c,c as m,a as s,t as d,u as i,b as _}from"./index-nS8LAQjE.js";import{u as b}from"./tabs-Czd-xYbc.js";const f={class:"card content-box"},x={class:"text"},v=o({name:"tabsDetail"}),k=o({...v,setup(V){const t=r();b().setTabsTitle(`No.${t.params.id} - ${t.meta.title}`);const a=u("");return(T,e)=>{const n=p("el-input");return c(),m("div",f,[e[1]||(e[1]=s("span",{class:"text"}," 我是 Tab 详情页 🍓🍇🍈🍉",-1)),s("span",x,"params:"+d(i(t).params),1),_(n,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),placeholder:"测试详情页缓存"},null,8,["modelValue"])])}}});export{k as default};
