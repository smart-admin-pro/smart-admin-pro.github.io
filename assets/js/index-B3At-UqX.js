import{d as S,x as _,y as w,z,A as B,h as E,r as m,o as M,c as O,a as A,b as t,w as o,e as n,u as s,B as G,C as b,D as R,E as D,G as H,H as p,I as U,J as j,K as I}from"./index-nS8LAQjE.js";import{u as J,a as L}from"./tabs-Czd-xYbc.js";const q={class:"card content-box"},F={class:"mb30"},Q=S({name:"tabs"}),Z=S({...Q,setup(W){const i=_(),y=w(),r=J(),v=z(),C=L(),T=B("refresh"),c=()=>{setTimeout(()=>{i.meta.isKeepAlive&&C.removeKeepAliveName(i.fullPath),T(!1),U(()=>{i.meta.isKeepAlive&&C.addKeepAliveName(i.fullPath),T(!0)})},0)},f=E(""),$=()=>{if(!f.value)return j.warning("请输入标题");r.setTabsTitle(f.value)},K=()=>{v.setGlobalState("maximize",!v.maximize)},P=()=>{i.meta.isAffix||r.removeTabs(i.fullPath)},V=()=>{r.closeMultipleTab(i.fullPath)},k=d=>{r.closeTabsOnSide(i.fullPath,d)},g=()=>{r.closeMultipleTab(),y.push(I)},u=d=>{y.push(`/assembly/tabs/detail/${d}`)};return(d,e)=>{const l=m("el-button"),N=m("el-input"),x=m("el-space");return M(),O("div",q,[e[21]||(e[21]=A("span",{class:"text"}," 标签页操作 🍓🍇🍈🍉",-1)),A("div",F,[t(N,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=a=>f.value=a),placeholder:"请输入内容",style:{width:"500px"}},{append:o(()=>[t(l,{type:"primary",onClick:$},{default:o(()=>e[8]||(e[8]=[n(" 设置 Tab 标题 ")])),_:1})]),_:1},8,["modelValue"])]),t(x,{class:"mb30"},{default:o(()=>[t(l,{type:"primary",icon:s(G),onClick:c},{default:o(()=>e[9]||(e[9]=[n(" 刷新当前页 ")])),_:1},8,["icon"]),t(l,{type:"primary",icon:s(b),onClick:K},{default:o(()=>e[10]||(e[10]=[n(" 当前页全屏切换 ")])),_:1},8,["icon"]),t(l,{type:"primary",icon:s(b),onClick:e[1]||(e[1]=a=>k("left"))},{default:o(()=>e[11]||(e[11]=[n(" 关闭左侧标签页 ")])),_:1},8,["icon"]),t(l,{type:"primary",icon:s(b),onClick:e[2]||(e[2]=a=>k("right"))},{default:o(()=>e[12]||(e[12]=[n(" 关闭右侧标签页 ")])),_:1},8,["icon"]),t(l,{type:"primary",icon:s(R),onClick:P},{default:o(()=>e[13]||(e[13]=[n(" 关闭当前页 ")])),_:1},8,["icon"]),t(l,{type:"primary",icon:s(D),onClick:V},{default:o(()=>e[14]||(e[14]=[n(" 关闭其他 ")])),_:1},8,["icon"]),t(l,{type:"primary",icon:s(H),onClick:g},{default:o(()=>e[15]||(e[15]=[n(" 全部关闭 ")])),_:1},8,["icon"])]),_:1}),t(x,{class:"mb30"},{default:o(()=>[t(l,{type:"info",icon:s(p),onClick:e[3]||(e[3]=a=>u("1"))},{default:o(()=>e[16]||(e[16]=[n(" 打开详情页1 ")])),_:1},8,["icon"]),t(l,{type:"info",icon:s(p),onClick:e[4]||(e[4]=a=>u("2"))},{default:o(()=>e[17]||(e[17]=[n(" 打开详情页2 ")])),_:1},8,["icon"]),t(l,{type:"info",icon:s(p),onClick:e[5]||(e[5]=a=>u("3"))},{default:o(()=>e[18]||(e[18]=[n(" 打开详情页3 ")])),_:1},8,["icon"]),t(l,{type:"info",icon:s(p),onClick:e[6]||(e[6]=a=>u("4"))},{default:o(()=>e[19]||(e[19]=[n(" 打开详情页4 ")])),_:1},8,["icon"]),t(l,{type:"info",icon:s(p),onClick:e[7]||(e[7]=a=>u("5"))},{default:o(()=>e[20]||(e[20]=[n(" 打开详情页5 ")])),_:1},8,["icon"])]),_:1})])}}});export{Z as default};