import{_}from"./NuxtImg.vue.ab0fbd17.js";import{d as m,I as i,r as f,b as s,c as a,N as e,W as v,f as u,F as h,a9 as k,n as g,p as w,j as b,e as I,l as S}from"./entry.2d785568.js";const V=t=>(w("data-v-d0e8cd00"),t=t(),b(),t),x={key:1,class:"loaded"},B=["poster"],C=["src"],N=["src","type"],P=["autoplay","src"],$=V(()=>I("button",null,null,-1)),j=[$],E=m({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,c=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const o=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(o==null?void 0:o[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(o==null?void 0:o[1])||""}/hqdefault.jpg`}}}),d=f(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const p=i(()=>{var o,n;return r.src||((n=(o=r.sources)==null?void 0:o[0])==null?void 0:n.src)||!1});return(o,n)=>{const y=_;return s(),a("div",{class:g(["video-player",{loaded:e(d)}])},[(e(c)?e(c).poster:t.poster)?(s(),v(y,{key:0,src:e(c)?e(c).poster:t.poster},null,8,["src"])):u("",!0),e(d)?(s(),a("div",x,[e(c)?e(c).name==="youtube"?(s(),a("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(c).src},null,8,P)):u("",!0):(s(),a("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(p)?(s(),a("source",{key:0,src:e(p)},null,8,C)):u("",!0),(s(!0),a(h,null,k(t.sources,l=>(s(),a("source",{key:l.src||l,src:l.src||l,type:l.type},null,8,N))),128))],8,B))])):u("",!0),e(d)?u("",!0):(s(),a("div",{key:2,class:"play-button",onClick:n[0]||(n[0]=l=>d.value=!0)},j))],2)}}});const z=S(E,[["__scopeId","data-v-d0e8cd00"]]);export{z as default};
