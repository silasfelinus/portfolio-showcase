import g from"./ProseTh.b61fc652.js";import B from"./ProseTr.6d6c94a9.js";import $ from"./ProseThead.ee68398d.js";import b from"./ProseCodeInline.6896f785.js";import C from"./ProseTd.2fe66adf.js";import N from"./ProseTbody.06543bea.js";import R from"./ProseTable.78257e33.js";import{u as F}from"./asyncData.de82d0b9.js";import{l as I,d as S,a8 as x,I as m,b as o,W as l,w as e,g as s,D as d,f as r,c as A,F as E,a9 as L,t as c}from"./entry.2d785568.js";const O=S({props:{of:{type:String,default:void 0},required:{type:Boolean,default:void 0},values:{type:Boolean,default:void 0},description:{type:Boolean,default:void 0},default:{type:Boolean,default:void 0}},async setup(t){const k=`/api/component-meta/${x(t.of)}`,{data:h}=await F(t.of,()=>$fetch(k),"$vtsOsFmVNx"),i=m(()=>h.value.props.filter(a=>{var n;return!((n=a.tags)!=null&&n.ignore.includes(a))})),w=m(()=>{var a;return t.required!==void 0?t.required:(a=i.value)==null?void 0:a.find(n=>n.required!==void 0)}),v=m(()=>{var a;return t.values!==void 0?t.values:(a=i.value)==null?void 0:a.find(n=>n.values)}),f=m(()=>{var a;return t.description!==void 0?t.description:(a=i.value)==null?void 0:a.find(n=>n.description)}),y=m(()=>{var a;return t.default!==void 0?t.default:(a=i.value)==null?void 0:a.find(n=>n.default)});return{meta:h,properties:i,showRequired:w,showValues:v,showDescription:f,showDefault:y}}});function W(t,k,h,i,w,v){var q,D,P;const f=g,y=B,a=$,n=b,_=C,T=N,V=R;return t.meta&&((q=t.meta)!=null&&q.props)&&((P=(D=t.meta)==null?void 0:D.props)!=null&&P.length)?(o(),l(V,{key:0},{default:e(()=>[s(a,null,{default:e(()=>[s(y,null,{default:e(()=>[s(f,null,{default:e(()=>[d("Prop")]),_:1}),s(f,null,{default:e(()=>[d("Type")]),_:1}),t.showRequired?(o(),l(f,{key:0},{default:e(()=>[d(" Required ")]),_:1})):r("",!0),t.showDefault?(o(),l(f,{key:1},{default:e(()=>[d(" Default ")]),_:1})):r("",!0),t.showValues?(o(),l(f,{key:2},{default:e(()=>[d(" Values ")]),_:1})):r("",!0),t.showDescription?(o(),l(f,{key:3},{default:e(()=>[d(" Description ")]),_:1})):r("",!0)]),_:1})]),_:1}),s(T,null,{default:e(()=>[(o(!0),A(E,null,L(t.properties,u=>(o(),l(y,{key:u.name},{default:e(()=>[s(_,null,{default:e(()=>[s(n,null,{default:e(()=>[d(c((u==null?void 0:u.name)||"?"),1)]),_:2},1024)]),_:2},1024),s(_,null,{default:e(()=>[s(n,null,{default:e(()=>[d(c((u==null?void 0:u.type)||"?"),1)]),_:2},1024)]),_:2},1024),t.showRequired?(o(),l(_,{key:0},{default:e(()=>[s(n,null,{default:e(()=>[d(c(u.required==="?"?"?":u.required?"Yes":"No"),1)]),_:2},1024)]),_:2},1024)):r("",!0),t.showDefault?(o(),l(_,{key:1},{default:e(()=>[u.default?(o(),l(n,{key:0},{default:e(()=>[d(c((u==null?void 0:u.default)||"?"),1)]),_:2},1024)):r("",!0)]),_:2},1024)):r("",!0),t.showValues?(o(),l(_,{key:2},{default:e(()=>[u.values?(o(),l(n,{key:0},{default:e(()=>[d(c((u==null?void 0:u.values)||"?"),1)]),_:2},1024)):(o(),l(n,{key:1},{default:e(()=>[d(" - ")]),_:1}))]),_:2},1024)):r("",!0),t.showDescription?(o(),l(_,{key:3},{default:e(()=>[s(n,null,{default:e(()=>[d(c(u.description),1)]),_:2},1024)]),_:2},1024)):r("",!0)]),_:2},1024))),128))]),_:1})]),_:1})):r("",!0)}const U=I(O,[["render",W]]);export{U as default};
