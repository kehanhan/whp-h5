import{r as e,c as s,o as a,b as t,d as n,t as l,F as o,e as i,f as u,w as p,i as c,h as d,j as v,g as r,k as m,l as q,m as g,p as _,q as y,I as h}from"./index-fd3885be.js";import{o as f,Q as k}from"./uni-app.es.618c9e61.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";const b=x({__name:"Questionnaire",setup(x){const b=e(null),C=e([]),j=e({});f((async e=>{const s=await k.getQuestionnaire(e.id);b.value=s.questionnaire,C.value=s.questions}));const V=(e,s)=>{console.log(e),console.log(s),j.value[e]=s},Q=()=>{console.log(j)};return s((()=>C.value.every((e=>"single"===e.question_type||"multiple"===e.question_type?void 0!==j.value[e.id]:"text"===e.question_type&&""!==j.value[e.id])))),(e,s)=>{const f=m,k=q,x=g,$=_,w=y("check-group"),I=h,U=c;return a(),t("div",{class:"questionnaire"},[n("div",{class:"questionnaire-title"},l(b.value.title),1),n("div",{class:"questionnaire-desc"},l(b.value.description),1),n("div",{class:"questionnaire-questions"},[(a(!0),t(o,null,i(C.value,((e,s)=>(a(),t("div",{key:e.id,class:"question"},[n("span",{class:"question-number"},l(s+1)+". ",1),n("span",{class:"question-content"},l(e.question_content),1),n("div",{class:"gap",style:{height:"10px"}}),"single"===e.question_type?(a(),d(x,{key:0,name:`question-${e.id}`,onChange:s=>V(e.id,s.target.value),class:"options"},{default:p((()=>[(a(!0),t(o,null,i(e.options,((e,s)=>(a(),d(k,{key:s,class:"option"},{default:p((()=>[u(f,{value:e,class:"option-input"},null,8,["value"]),n("span",{class:"option-label"},l(e),1)])),_:2},1024)))),128))])),_:2},1032,["name","onChange"])):"multiple"===e.question_type?(a(),d(w,{key:1,name:`question-${e.id}`,value:j.value[e.id],onChange:s=>V(e.id,s.target.value),class:"options"},{default:p((()=>[(a(!0),t(o,null,i(e.options,((e,s)=>(a(),d(k,{key:s,class:"option"},{default:p((()=>[u($,{value:e,class:"option-input"},null,8,["value"]),n("span",{class:"option-label"},l(e),1)])),_:2},1024)))),128))])),_:2},1032,["name","value","onChange"])):"text"===e.question_type?(a(),t("div",{key:2,class:"options"},[u(I,{type:"text",name:`question-${e.id}`,modelValue:j.value[e.id],"onUpdate:modelValue":s=>j.value[e.id]=s,class:"text-input"},null,8,["name","modelValue","onUpdate:modelValue"])])):v("",!0)])))),128))]),u(U,{class:"submit",onClick:Q},{default:p((()=>[r("提交")])),_:1}),n("div",{class:"gap",style:{height:"20px"}})])}}},[["__scopeId","data-v-950cabee"]]);export{b as default};
