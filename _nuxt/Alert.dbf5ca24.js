import{d as v,I as c,X as g,b as o,c as l,e as u,W as k,N as i,f as p,g as d,n as C,Y as B,l as $}from"./entry.2d785568.js";import x from"./ContentSlot.ac863519.js";const N={class:"alert-content-wrapper"},S={class:"content"},w=v({__name:"Alert",props:{type:{type:String,default:"neutral",validator(e){return["info","success","warning","danger","primary","secondary","neutral"].includes(e)}},closable:{type:Boolean,default:!1},icon:{type:[String,Boolean],default:!1}},emits:["close"],setup(e,{emit:_}){const t=e,m=c(()=>((n=a)=>`{elements.state.${n.type}.backgroundColor.secondary}`)()),f=c(()=>t.icon===!1?"":t.icon===!0?`type:${t.type}`:t.icon),a=t,{$pinceau:y}=g(a,void 0,{_yvz_backgroundColor:m});return(n,s)=>{const r=B,b=x;return o(),l("div",{class:C(["alert",[e.type,i(y)]])},[u("div",N,[e.icon?(o(),k(r,{key:0,name:i(f),class:"alert-icon"},null,8,["name"])):p("",!0),u("span",S,[d(b,{use:n.$slots.default,unwrap:"p"},null,8,["use"])])]),e.closable?(o(),l("button",{key:0,onClick:s[0]||(s[0]=A=>_("close"))},[d(r,{name:"tabler:x"})])):p("",!0)],2)}}});const z=$(w,[["__scopeId","data-v-066b5464"]]);export{z as default};
