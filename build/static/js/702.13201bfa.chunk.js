"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[702],{2702:(e,i,n)=>{n.r(i),n.d(i,{default:()=>b});var o=n(2791),t=n(914),s=n(9181),r=n(7309),a=n(4645),d=n(1173),l=n(6592),c=n(1758),m=n(4720),p=n(5224),x=n(4581),h=n(2108),u=n(184);const b=(0,m.Z)()((e=>{let{icon:i,title:n,content:m,section:b,button:f,t:j,id:g,direction:y,isVideo:v=!1}=e;const[Z,w]=(0,o.useState)(!1),[P,C]=(0,o.useState)(!1),[S,k]=(0,o.useState)({});(0,o.useEffect)((()=>{const e=()=>{w(window.innerWidth<=768)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);const z=()=>{C(!1)};return(0,u.jsxs)(h.IH,{children:[(0,u.jsx)(c.pT,{direction:y,triggerOnce:!0,children:(0,u.jsxs)(h.N0,{justify:"space-between",align:"middle",id:g,direction:y,children:[(0,u.jsx)(t.Z,{lg:v?10:12,md:11,sm:12,xs:24,children:(0,u.jsx)(x.l,{isVideo:v,src:i,width:Z?"350px":"100%",height:"100%"})}),(0,u.jsx)(t.Z,{lg:11,md:11,sm:11,xs:24,children:(0,u.jsxs)(h.vs,{children:[(0,u.jsx)("h6",{children:j(n)}),(0,u.jsx)(h.VY,{children:j(m)}),"right"===y?(0,u.jsx)(h.W4,{children:"object"===typeof f&&f.map(((e,i)=>(0,u.jsx)(p.z,{color:e.color,onClick:()=>(e=>{"Contato"!==e&&"Entrar em contato"!==e||C(!0)})(e.title),children:j(e.title)},i)))}):b&&(0,u.jsx)("h5",{style:{fontSize:"2rem",color:"#F99D36"},children:"Venha descobrir como podemos ajudar voc\xea tamb\xe9m!"})]})})]})}),(0,u.jsx)(s.Z,{style:{borderRadius:"16px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},title:(0,u.jsx)("h1",{style:{fontSize:24,fontWeight:"bold",color:"#F99D36",textAlign:"center",marginBottom:0},children:"Entrar em contato"}),open:P,onCancel:z,footer:[(0,u.jsx)(r.Z,{onClick:z,style:{borderRadius:"8px"},children:"Cancelar"},"cancel"),(0,u.jsx)(r.Z,{type:"primary",onClick:()=>{const{nome:e,tempoDiabetes:i}=S,n=`https://wa.me/5528999350204?text=Ol\xe1!%20Sou%20${e},%20tenho%20diabetes%20${"menos1"===i?"menos de 1 ano":"entre1e2"===i?"entre 1 e 2 anos":"mais5"===i?"mais de 5 anos":"mais de 10 anos"},%20gostaria%20de%20conhecer%20mais%20sobre%20o%20tratamento.`;window.open(n,"_blank"),C(!1)},style:{backgroundColor:"#1D71B8",borderColor:"#1D71B8",borderRadius:"8px"},children:"Enviar"},"submit")],bodyStyle:{borderRadius:"16px",padding:"24px",backgroundColor:"#FAFAFA"},centered:!0,children:(0,u.jsxs)(a.Z,{onValuesChange:(e,i)=>{return n=i,void k((e=>({...e,...n})));var n},layout:"vertical",style:{gap:"16px"},children:[(0,u.jsx)(a.Z.Item,{label:(0,u.jsx)("span",{style:{fontSize:"16px",fontWeight:"bold",color:"#333"},children:"Nome"}),name:"nome",rules:[{required:!0,message:"Por favor, insira seu nome."}],children:(0,u.jsx)(d.Z,{placeholder:"Digite seu nome",style:{borderRadius:"8px",borderColor:"#E0E0E0",padding:"12px"}})}),(0,u.jsx)(a.Z.Item,{label:(0,u.jsx)("span",{style:{fontSize:"16px",fontWeight:"bold",color:"#333"},children:"Voc\xea tem diabetes tipo 2?"}),name:"diabetesTipo2",rules:[{required:!0,message:"Por favor, selecione uma op\xe7\xe3o."}],children:(0,u.jsxs)(l.ZP.Group,{style:{display:"flex",gap:"16px"},children:[(0,u.jsx)(l.ZP,{value:"sim",children:"Sim"}),(0,u.jsx)(l.ZP,{value:"nao",children:"N\xe3o"})]})}),(0,u.jsx)(a.Z.Item,{label:(0,u.jsx)("span",{style:{fontSize:"16px",fontWeight:"bold",color:"#333"},children:"H\xe1 quanto tempo voc\xea sofre com diabetes?"}),name:"tempoDiabetes",rules:[{required:!0,message:"Por favor, selecione uma op\xe7\xe3o."}],children:(0,u.jsxs)(l.ZP.Group,{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[(0,u.jsx)(l.ZP,{value:"menos1",children:"Menos de 1 ano"}),(0,u.jsx)(l.ZP,{value:"entre1e2",children:"Entre 1 e 2 anos"}),(0,u.jsx)(l.ZP,{value:"mais5",children:"Mais de 5 anos"}),(0,u.jsx)(l.ZP,{value:"mais10",children:"Mais de 10 anos"})]})})]})})]})}))},2108:(e,i,n)=>{n.d(i,{IH:()=>s,N0:()=>a,VY:()=>r,W4:()=>l,vs:()=>d});var o=n(6106),t=n(1191);const s=(0,t.ZP)("section")`
  position: relative;
  padding: 3rem 0 3.5rem;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 3rem;
  }
`,r=(0,t.ZP)("p")`
  margin: 1.5rem 0 2rem 0;
`,a=(0,t.ZP)(o.Z)`
  flex-direction: ${e=>{let{direction:i}=e;return"left"===i?"row":"row-reverse"}};
`,d=(0,t.ZP)("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 3rem;
  }
`,l=((0,t.ZP)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,(0,t.ZP)("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,(0,t.ZP)("p")`
  font-size: 13px;
`,(0,t.ZP)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`)}}]);
//# sourceMappingURL=702.13201bfa.chunk.js.map