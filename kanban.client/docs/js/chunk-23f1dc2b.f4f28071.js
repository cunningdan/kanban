(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23f1dc2b"],{6760:function(t,e,c){},bb3a:function(t,e,c){"use strict";c.r(e);var a=c("7a23");const s=Object(a["H"])("data-v-35118d03");Object(a["t"])("data-v-35118d03");const n={class:"activeBoard container-fluid"},o={class:"row"},i=Object(a["g"])("button",{class:"btn btn-info",type:"submit"}," Create List ",-1);Object(a["r"])();const b=s((function(t,e,c,s,b,r){const d=Object(a["x"])("list-component");return Object(a["q"])(),Object(a["e"])("div",n,[Object(a["g"])("h3",null,Object(a["A"])(s.activeBoard.title),1),Object(a["g"])("div",o,[Object(a["g"])("form",{class:"col-3 form-group",onSubmit:e[2]||(e[2]=Object(a["G"])((...t)=>s.createList(...t),["prevent"]))},[Object(a["F"])(Object(a["g"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>s.state.newList.title=t)},null,512),[[a["C"],s.state.newList.title]]),i],32),(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(s.lists,t=>(Object(a["q"])(),Object(a["e"])(d,{key:t,"list-prop":t},null,8,["list-prop"]))),128))])])}));var r=c("5fb1"),d=c("6c02"),l=c("83fc"),j=c("15c1"),O=c("617f"),u={name:"ActiveBoard",setup(t){const e=Object(a["u"])({newList:{}}),c=Object(d["c"])();return Object(a["o"])(async()=>{await r["a"].getLists(c.params.boardId),await O["a"].getActiveBoard(c.params.boardId)}),{state:e,activeBoard:Object(a["c"])(()=>l["a"].activeBoard),lists:Object(a["c"])(()=>l["a"].lists),tasks:Object(a["c"])(()=>l["a"].tasks),comments:Object(a["c"])(()=>l["a"].comments),createList(){e.newList.boardId=c.params.boardId,r["a"].createList(e.newList)}}},components:{ListComponent:j["default"]}};c("c90e");u.render=b,u.__scopeId="data-v-35118d03";e["default"]=u},c90e:function(t,e,c){"use strict";c("6760")}}]);