import{d as _,L as F,h as n,ai as U,r,o as i,g as v,w as t,b as o,e as c,a2 as L,aG as S,c as $,f as D,F as E,J as M}from"./index-nS8LAQjE.js";import{u as N}from"./dict-Cu197DXt.js";const P=_({name:"roleDrawer"}),G=_({...P,setup(R,{expose:w}){const b=F({name:[{required:!0,message:"请填写角色名称"}],code:[{required:!0,message:"请填写角色编码"}],status:[{required:!0,message:"请选择状态"}]}),u=n(!1),e=n({isView:!1,title:"",row:{}}),V=s=>{s.title==="新增"&&(s.row={status:1}),e.value=s,u.value=!0},m=n(),g=()=>{e.value.row,m.value.validate(async s=>{if(s)try{await e.value.api(e.value.row),M.success({message:`${e.value.title}角色成功！`}),e.value.getTableList(),u.value=!1}catch{}})},k=n(N);return U(()=>{}),w({parentParams:V}),(s,l)=>{const p=r("el-input"),d=r("el-form-item"),x=r("el-option"),y=r("el-select"),q=r("el-form"),f=r("el-button"),C=r("el-drawer");return i(),v(C,{modelValue:u.value,"onUpdate:modelValue":l[4]||(l[4]=a=>u.value=a),"destroy-on-close":!0,size:"450px",title:`${e.value.title}角色`},{footer:t(()=>[o(f,{onClick:l[3]||(l[3]=a=>u.value=!1)},{default:t(()=>l[5]||(l[5]=[c("取消")])),_:1}),L(o(f,{type:"primary",onClick:g},{default:t(()=>l[6]||(l[6]=[c("确定")])),_:1},512),[[S,!e.value.isView]])]),default:t(()=>[o(q,{ref_key:"ruleFormRef",ref:m,"label-width":"100px","label-suffix":" :",rules:b,disabled:e.value.isView,model:e.value.row,"hide-required-asterisk":e.value.isView},{default:t(()=>[o(d,{label:"角色名称",prop:"name"},{default:t(()=>[o(p,{modelValue:e.value.row.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value.row.name=a),placeholder:"请填写角色名称",clearable:""},null,8,["modelValue"])]),_:1}),o(d,{label:"角色编码",prop:"code"},{default:t(()=>[o(p,{modelValue:e.value.row.code,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value.row.code=a),placeholder:"请填写角色编码",clearable:""},null,8,["modelValue"])]),_:1}),o(d,{label:"状态",prop:"status"},{default:t(()=>[o(y,{modelValue:e.value.row.status,"onUpdate:modelValue":l[2]||(l[2]=a=>e.value.row.status=a),placeholder:"请选择状态",clearable:""},{default:t(()=>[(i(!0),$(E,null,D(k.value,(a,B)=>(i(),v(x,{key:B,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["rules","disabled","model","hide-required-asterisk"])]),_:1},8,["modelValue","title"])}}});export{G as _};
