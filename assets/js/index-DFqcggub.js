import{L,s as b,V as B,h as M,ap as q,d as V,W as N,r as _,o as f,c as k,a as h,b as p,w as m,e as x,t as y,F as S,f as E,u as T,g as I}from"./index-nS8LAQjE.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const D="/assets/svg/analysis-DNySu1oN.svg";function F(o="en"){const a=navigator.userAgent.toLowerCase(),e=l=>l.test(a),n=l=>{var v;return(v=a.match(l))==null?void 0:v.toString().replace(/[^0-9|_.]/g,'""').replace(/_/g,"'.'")},r=new Map([[e(/windows|win32|win64|wow32|wow64/g),"windows"],[e(/macintosh|macintel/g),"macos"],[e(/x11/g),"linux"],[e(/android|adr/g),"android"],[e(/ios|iphone|ipad|ipod|iwatch/g),"ios"]]).get(!0)||"unknow",s=new Map([["windows",new Map([[e(/windows nt 5.0|windows 2000/g),"2000"],[e(/windows nt 5.1|windows xp/g),"xp"],[e(/windows nt 5.2|windows 2003/g),"2003"],[e(/windows nt 6.0|windows vista/g),"vista"],[e(/windows nt 6.1|windows 7/g),"7"],[e(/windows nt 6.2|windows 8/g),"8"],[e(/windows nt 6.3|windows 8.1/g),"8.1"],[e(/windows nt 10.0|windows 10/g),"10"]]).get(!0)],["macos",n(/os x [\d._]+/g)],["android",n(/android [\d._]+/g)],["ios",n(/os [\d._]+/g)]]).get(r)||"unknow";let t="unknow";r==="windows"||r==="macos"||r==="linux"?t="desktop":(r==="android"||r==="ios"||e(/mobile/g))&&(t="mobile");const[g="unknow",i="unknow"]=new Map([[e(/applewebkit/g),["webkit",new Map([[e(/safari/g),"safari"],[e(/chrome/g),"chrome"],[e(/opr/g),"opera"],[e(/edge/g),"edge"]]).get(!0)||"unknow"]],[e(/gecko/g)&&e(/firefox/g),["gecko","firefox"]],[e(/presto/g),["presto","opera"]],[e(/trident|compatible|msie/g),["trident","iexplore"]]]).get(!0)||["unknow","unknow"],c=new Map([["webkit",n(/applewebkit\/[\d._]+/g)],["gecko",n(/gecko\/[\d._]+/g)],["presto",n(/presto\/[\d._]+/g)],["trident",n(/trident\/[\d._]+/g)]]).get(g)||"unknow",w=new Map([["firefox",n(/firefox\/[\d._]+/g)],["opera",n(/opr\/[\d._]+/g)],["iexplore",n(/(msie [\d._]+)|(rv:[\d._]+)/g)],["edge",n(/edge\/[\d._]+/g)],["safari",n(/version\/[\d._]+/g)],["chrome",n(/chrome\/[\d._]+/g)]]).get(i)||"unknow",[d="none",u="unknow"]=new Map([[e(/micromessenger/g),["wechat",n(/micromessenger\/[\d._]+/g)]],[e(/qqbrowser/g),["qq",n(/qqbrowser\/[\d._]+/g)]],[e(/ucbrowser/g),["uc",n(/ucbrowser\/[\d._]+/g)]],[e(/qihu 360se/g),["360","unknow"]],[e(/2345explorer/g),["2345",n(/2345explorer\/[\d._]+/g)]],[e(/metasr/g),["sougou","unknow"]],[e(/lbbrowser/g),["liebao","unknow"]],[e(/maxthon/g),["maxthon",n(/maxthon\/[\d._]+/g)]]]).get(!0)||["none","unknow"];return{"zh-cn":Object.assign({内核:g,内核版本:c,平台:t,载体:i,载体版本:w,系统:r,系统版本:s},d==="none"?{}:{外壳:d,外壳版本:u}),en:Object.assign({engine:g,engineVs:c,platform:t,supporter:i,supporterVs:w,system:r,systemVs:s},d==="none"?{}:{shell:d,shellVs:u})}[o]}const O=()=>{const o=L({charging:!1,chargingTime:0,dischargingTime:0,level:100}),a=navigator&&"getBattery"in navigator,e=s=>{for(const t in o)o[t]=s[t];o.level=o.level*100},n=b(()=>{const s=o.dischargingTime/3600,t=o.dischargingTime/60%60;return`${~~s}小时${~~t}分钟`}),r=b(()=>o.charging&&o.level>=100?"已充满":o.charging?"充电中":"已断开电源");return B(async()=>{var t,g;const s=await((g=(t=window.navigator).getBattery)==null?void 0:g.call(t))||{};e(s),s.onchargingchange=({target:i})=>{e(i)},s.onchargingtimechange=({target:i})=>{e(i)},s.ondischargingtimechange=({target:i})=>{e(i)},s.onlevelchange=({target:i})=>{e(i)}}),{battery:o,isSupported:a,batteryStatus:r,calcDischargingTime:n}},j=()=>{const o=M(!0),a=e=>{o.value=typeof e=="boolean"?e:e.target.online};return navigator.onLine?a(!0):a(!1),B(()=>{window.addEventListener("online",a),window.addEventListener("offline",a)}),q(()=>{window.removeEventListener("online",a),window.removeEventListener("offline",a)}),{online:o}},$={class:"home card"},z=V({name:"home"}),A=V({...z,setup(o){const a="0.0.0.1",{online:e}=j(),{battery:n,batteryStatus:r,calcDischargingTime:s}=O(),t=M(F("zh-cn"));return N(()=>{e.value,t.value,Object.assign(t.value,{距离电池充满需要:Number.isFinite(n.chargingTime)&&n.chargingTime!=0?s.value:"未知",剩余可使用时间:Number.isFinite(n.dischargingTime)&&n.dischargingTime!=0?s.value:"未知",电池状态:r.value,当前电量:`${n.level}%`})}),(g,i)=>{const c=_("el-descriptions-item"),w=_("el-badge"),d=_("el-descriptions");return f(),k("div",$,[i[0]||(i[0]=h("div",{class:"img_container"},[h("img",{class:"home-bg",src:D,alt:"welcome"})],-1)),h("div",null,[p(d,{class:"margin-top",title:"系统信息",column:3,border:""},{default:m(()=>[p(c,{key:"IP",label:"IP"},{default:m(()=>[x(y(a))]),_:1}),(f(!0),k(S,null,E(t.value,(u,l)=>(f(),I(c,{key:l,label:l},{default:m(()=>[x(y((u+"").replaceAll('"',"")),1)]),_:2},1032,["label"]))),128)),p(c,{label:"网络状态"},{default:m(()=>[p(w,{type:T(e)?"primary":"warning",offset:[10,5],value:T(e)?"在线":"离线"},null,8,["type","value"])]),_:1})]),_:1})])])}}}),W=C(A,[["__scopeId","data-v-3f9d3d4f"]]);export{W as default};
