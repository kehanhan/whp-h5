import{v as s,x as e,y as t,O as a,z as n,A as r}from"./index-fd3885be.js";const i=(e,t,a)=>new Promise(((n,r)=>{s({url:"http://prod.wccwd.space:3000/"+t,method:e,data:a,success:s=>{n(s.data.resource)},fail:s=>{r(s)}})}));const o=new class{getAllQuestionnaires(){return i("get","/questionnaires")}getQuestionnaire(s){return i("get",`/questionnaires/${s}`)}submit(s,e){return i("post","/questionnaires/submit",{questionnaire_id:s,answer_content:e})}},u=s=>(a,n=t())=>{!r&&e(s,a,n)},c=u(a),d=u(n);export{o as Q,d as a,c as o};
