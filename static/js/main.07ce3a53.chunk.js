(this["webpackJsonppage-animation"]=this["webpackJsonppage-animation"]||[]).push([[0],{31:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var i,a,r,c,s,d,o,j,l,h,m,b,x,p,O,u,g,f,v,w,y,k,L,I,q,z,C,N,T,A=t(0),F=t.n(A),S=t(21),E=t.n(S),D=(t(31),t(5)),Q=t(3),M=t(4),W=Object(M.a)(i||(i=Object(Q.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box\n  }\n\n  body{\n    background: #1b1b1b;\n    font-family: 'Inter', sans-serif;\n    overflow-x: hidden;\n  }\n\n  button\xa0{\n    font-family: 'Inter', sans-serif;\n    font-weight: bold;\n    font-size: 1.1rem;\n    cursor: pointer;\n    padding: 1rem 2rem;\n    border: 3px solid #23d997;\n    background: transparent;\n    color: white;\n    transition: all 0.5s ease;\n    &:hover\xa0{\n      background-color: #23d997;\n      color: white;\n    }\n  }\n  h2{\n    font-weight: lighter;\n    font-size: 3.7rem;\n  }\n  h3 {\n    color: white;\n  }\n  h4{\n     font-weight: bold;\n     font-size: 2rem;\n  }\n  a{\n    font-size: 0.9rem;\n  }\n  span\xa0{\n    font-weight: bold;\n    color: #23d997; \n  }\n  p{\n    padding: 3rem 0rem;\n    color: #ccc;\n    font-size: 1.1rem;\n    line-height: 150%;\n  }\n "]))),B=t(7),P=t(2),G=t(1),U=M.b.nav(a||(a=Object(Q.a)(['\n  min-height: 10vh;\n  display: flex;\n  margin: auto;\n  justify-content: space-between;\n  align-items:center;\n  padding: 1rem 10rem;\n  background: #282828;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  a\xa0{\n    color: white;\n    text-decoration: none;\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n  }\n  #logo {\n    font-size: 1.5rem;\n    font-family: "Lobster", cursive;\n    font-weight: lighter;\n  }\n  li {\n    padding-left: 10rem;\n    position: relative;\n  }\n\n  @media (max-width: 1200px){\n    flex-direction: column;\n    padding: 2rem 0rem 0.5rem 0rem;\n    #logo {\n      display: inline-block;\n      margin: 1rem;\n    }\n    ul\xa0{\n      padding: 2rem;\n      justify-content: space-around;\n      width: 100%;\n    }\n    li {\n      padding: 0rem 0.5rem;\n    }\n  }\n\n  @media (max-width: 350px){\n    ul{\n      padding: 2rem 0.5rem;\n    }\n  }\n']))),H=Object(M.b)(P.c.div)(r||(r=Object(Q.a)(["\n  height: 0.2rem;\n  background: #23d997;\n  width: 0%;\n  position: absolute;\n  bottom: -80%;\n  left: 60%;\n  @media (max-width: 1200px){\n    left: 0%;\n  }\n"]))),J=function(){var e=Object(D.g)().pathname;return Object(G.jsxs)(U,{children:[Object(G.jsx)("h1",{children:Object(G.jsx)(B.b,{to:"/",id:"logo",children:"Capture"})}),Object(G.jsxs)("ul",{children:[Object(G.jsxs)("li",{children:[Object(G.jsx)(B.b,{to:"/",children:"1. About Us"}),Object(G.jsx)(H,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/"===e?"50%":"0%"}})]}),Object(G.jsxs)("li",{children:[Object(G.jsx)(B.b,{to:"/work",children:"2. Our Work"}),Object(G.jsx)(H,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/work"===e?"50%":"0%"}})]}),Object(G.jsxs)("li",{children:[Object(G.jsx)(B.b,{to:"/contact",children:"3. Contact Us"}),Object(G.jsx)(H,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/contact"===e?"50%":"0%"}})]})]})]})},R=t(8),K=t.p+"static/media/athlete-small.9c7a85d4.png",V=t.p+"static/media/goodtimes-small.94ab060d.png",X=t.p+"static/media/theracer-small.51874213.png",Y=t.p+"static/media/athlete2.b216a5ad.png",Z=t.p+"static/media/good-times2.4ea1be17.jpg",$=t.p+"static/media/the-racer2.580f15cd.jpg",_=function(){return[{title:"The Athlete",mainImg:K,secondaryImg:Y,url:"/work/the-athlete",awards:[{title:"Truly A masterpiece",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"Fresh look on a brutal sport.",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"It\u2019s okay lmao.",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"}]},{title:"Good Times",mainImg:V,url:"/work/good-times",secondaryImg:Z,awards:[{title:"Truly A masterpiece",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"Fresh look on a brutal sport.",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"It\u2019s okay lmao.",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"}]},{title:"The Racer",mainImg:X,url:"/work/the-racer",secondaryImg:$,awards:[{title:"Truly A masterpiece",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"Fresh look on a brutal sport.",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"It\u2019s okay lmao.",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"}]}]},ee={hidden:{opacity:0,y:300},show:{opacity:1,y:0,transition:{duration:.5,when:"beforeChildren",staggerChildren:.25}},exit:{opacity:0,transition:{duration:.7}}},ne={hidden:{y:200},show:{y:0,transition:{duration:.65,ease:"easeOut"}}},te={hidden:{opacity:0},show:{opacity:1,transition:{ease:"easeOut",duration:.75}}},ie={hidden:{scale:1.5,opacity:0},show:{scale:1,opacity:1,transition:{ease:"easeOut",duration:.75}}},ae={hidden:{width:"0%"},show:{width:"100%",transition:{duration:1}}},re={hidden:{x:"-130%",skew:"45deg"},show:{x:"100%",skew:"0deg",transition:{ease:"easeOut",duration:1}}},ce={hidden:{opacity:1},show:{opacity:1,transition:{staggerChildren:.15,ease:"easeOut"}}},se={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.15,ease:"easeOut",duration:1,when:"beforeChildren"}}},de={hidden:{opacity:0,scale:1.2,transition:{duration:.5}},show:{opacity:1,scale:1,transition:{duration:.5}}},oe=Object(M.b)(P.c.div)(c||(c=Object(Q.a)(["\n  color: white;\n"]))),je=M.b.div(s||(s=Object(Q.a)(["\n  min-height: 90vh;\n  padding-top: 20vh;\n  position: relative;\n\n  h2{\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, -10%) \n  }\n\n  img{\n    width: 100%;\n    height: 70vh;\n    object-fit: cover;\n  }\n\n  @media (max-width: 700px){\n    h2{\n      width: 100%;\n      text-align: center;\n    }\n  }\n"]))),le=M.b.div(d||(d=Object(Q.a)(["\n  min-height: 80vh;\n  display: flex;\n  margin: 5rem 10rem;\n  align-items: center;\n  justify-content:space-around;\n  @media (max-width: 1200px){\n    display: block;\n    margin: 2rem;\n    text-align: center;\n  }\n"]))),he=M.b.div(o||(o=Object(Q.a)(["\n  padding: 3rem 2.5rem;\n  h3\xa0{\n    font-size: 1.6rem;\n  }\n  p {\n    font-size:0.9rem;\n    padding: 2rem 0rem;\n  }\n  .line {\n    width: 50%;\n    background: #23d997;\n    height: 0.3rem;\n    margin: 1rem 0rem; \n  }\n  @media (max-width: 1200px){\n    .line {\n      margin: 1rem auto;\n    }\n  }\n"]))),me=M.b.div(j||(j=Object(Q.a)(["\n  min-height: 50vh;\n  img {\n    width:100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]))),be=function(e){var n=e.title,t=e.description;return Object(G.jsxs)(he,{children:[Object(G.jsx)("h3",{children:n}),Object(G.jsx)("div",{className:"line"}),Object(G.jsx)("p",{children:t})]})},xe=function(){var e=Object(D.f)().location.pathname,n=Object(A.useState)(_),t=Object(R.a)(n,2),i=t[0],a=(t[1],Object(A.useState)(null)),r=Object(R.a)(a,2),c=r[0],s=r[1];return Object(A.useEffect)((function(){var n=i.filter((function(n){return n.url===e}));s(n[0])}),[e,i]),Object(G.jsx)(A.Fragment,{children:c&&Object(G.jsxs)(oe,{variants:ee,initial:"hidden",animate:"show",exit:"exit",children:[Object(G.jsxs)(je,{children:[Object(G.jsx)("h2",{children:c.title}),Object(G.jsx)("img",{src:c.mainImg,alt:"movie"})]}),Object(G.jsx)(le,{children:c.awards.map((function(e){return Object(G.jsx)(be,{title:e.title,description:e.description},e.title)}))}),Object(G.jsx)(me,{children:Object(G.jsx)("img",{src:c.secondaryImg,alt:"movie"})})]})})},pe=t.p+"static/media/home1.9836de69.png",Oe=Object(M.b)(P.c.div)(l||(l=Object(Q.a)(["\n  min-height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5rem 10rem;\n  color: white;\n\n  @media (max-width: 1200px){\n    display: block;\n    padding: 2rem;\n    text-align: center;\n  }\n"]))),ue=M.b.div(h||(h=Object(Q.a)(["\n  z-index: 2;\n  flex: 1;\n  padding-right: 5rem;\n  h2 {\n    font-weight: lighter;\n  }\n  @media (max-width: 1200px){\n    padding: 0;\n    button {\n      margin: 2rem 0rem 5rem 0rem;\n    }\n  }\n"]))),ge=M.b.div(m||(m=Object(Q.a)(["\n  z-index: 2;\n  flex: 1;\n  overflow: hidden;\n  img {\n    width: 100%;\n    height: 80vh;\n    object-fit: cover;\n  }\n"]))),fe=M.b.div(b||(b=Object(Q.a)(["\n  overflow: hidden;\n"]))),ve=M.b.svg(x||(x=Object(Q.a)(["\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  @media (max-width: 768px){\n    top: 50%;\n  }\n"]))),we=function(){return Object(G.jsx)(ve,{viewBox:"0 0 1440 363",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(G.jsx)(P.c.path,{initial:{pathLength:0,pathOffset:1},animate:{pathLength:1,pathOffset:0},transition:{duration:1},d:"M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5",stroke:"#D96ED4",strokeOpacity:"0.5",strokeWidth:"10"})})},ye=function(){return Object(G.jsxs)(Oe,{children:[Object(G.jsxs)(ue,{children:[Object(G.jsxs)(P.c.div,{className:"title",children:[Object(G.jsx)(fe,{children:Object(G.jsx)(P.c.h2,{variants:ne,children:"We work to make"})}),Object(G.jsx)(fe,{children:Object(G.jsxs)(P.c.h2,{variants:ne,children:["your ",Object(G.jsx)("span",{children:"dreamd"})]})}),Object(G.jsx)(fe,{children:Object(G.jsx)(P.c.h2,{variants:ne,children:"come true."})})]}),Object(G.jsx)(P.c.p,{variants:te,children:"Contact us for any photography or videography ideas that you have. We have professionals with amizing skills"}),Object(G.jsx)(P.c.button,{variants:te,children:"Contact us"})]}),Object(G.jsx)(ge,{children:Object(G.jsx)(P.c.img,{variants:ie,src:pe,alt:"guy with a camer"})}),Object(G.jsx)(we,{})]})},ke=t.p+"static/media/clock.4b7cde7e.svg",Le=t.p+"static/media/diaphragm.db801491.svg",Ie=t.p+"static/media/money.72da7c48.svg",qe=t.p+"static/media/teamwork.aa71db2e.svg",ze=t.p+"static/media/home2.a65a4256.png",Ce=t(26),Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.3,n=Object(P.d)(),t=Object(Ce.a)({threshold:e}),i=Object(R.a)(t,2),a=i[0],r=i[1];return r?n.start("show"):n.start("hidden"),[a,n]},Te=Object(M.b)(Oe)(p||(p=Object(Q.a)(["\n\n  h2 {\n    padding-top: 2rem;\n    padding-bottom: 5rem;\n  }\n  p {\n    width: 70%;\n    padding: 2rem 0rem 4rem 0rem;\n  }\n"]))),Ae=M.b.div(O||(O=Object(Q.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  @media (max-width: 1200px){ \n    justify-content: center;\n  }\n"]))),Fe=M.b.div(u||(u=Object(Q.a)(["\n  flex-basis: 13rem;\n  .icon\xa0{\n    display: flex;\n    align-items: center;\n    h3 {\n      margin-left: 1rem;\n      background: white;\n      color: black;\n      padding: 1rem;\n    }\n  }\n\n  @media (max-width: 1200px){\n    margin: 0 1rem;\n  }\n"]))),Se=function(){var e=Ne(),n=Object(R.a)(e,2),t=n[0],i=n[1];return Object(G.jsxs)(Te,{variants:de,animate:i,initial:"hidden",ref:t,children:[Object(G.jsxs)(ue,{children:[Object(G.jsxs)("h2",{children:["High ",Object(G.jsx)("span",{children:"quality"})," services"]}),Object(G.jsxs)(Ae,{children:[Object(G.jsxs)(Fe,{children:[Object(G.jsxs)("div",{className:"icon",children:[Object(G.jsx)("img",{src:ke,alt:"oclock"}),Object(G.jsx)("h3",{children:"Efficient"})]}),Object(G.jsx)("p",{children:"Lorem ipsum, dolor sit amet."})]}),Object(G.jsxs)(Fe,{children:[Object(G.jsxs)("div",{className:"icon",children:[Object(G.jsx)("img",{src:qe,alt:"team work"}),Object(G.jsx)("h3",{children:"Teamwork"})]}),Object(G.jsx)("p",{children:"Lorem ipsum, dolor sit amet."})]}),Object(G.jsxs)(Fe,{children:[Object(G.jsxs)("div",{className:"icon",children:[Object(G.jsx)("img",{src:Le,alt:"diapha"}),Object(G.jsx)("h3",{children:"Diaphragm"})]}),Object(G.jsx)("p",{children:"Lorem ipsum, dolor sit amet."})]}),Object(G.jsxs)(Fe,{children:[Object(G.jsxs)("div",{className:"icon",children:[Object(G.jsx)("img",{src:Ie,alt:"money"}),Object(G.jsx)("h3",{children:"Affordable"})]}),Object(G.jsx)("p",{children:"Lorem ipsum, dolor sit amet."})]})]})]}),Object(G.jsx)(ge,{children:Object(G.jsx)("img",{src:ze,alt:"home2"})})]})},Ee=function(e){var n=e.children,t=e.title,i=Object(A.useState)(!1),a=Object(R.a)(i,2),r=a[0],c=a[1];return Object(G.jsxs)(P.c.div,{layout:!0,className:"question",onClick:function(){return c(!r)},children:[Object(G.jsx)(P.c.h4,{layout:!0,children:t}),r?n:"",Object(G.jsx)("div",{className:"faq-line"})]})},De=Object(M.b)(Oe)(g||(g=Object(Q.a)(["\n  display: block;\n  span {\n    display: block\n  }\n  h2{\n    padding-bottom: 2rem;\n    font-weight: lighter;\n  }\n  .faq-line{\n    background: #cccccc;\n    height: 0.2rem;\n    margin: 2rem 0rem;\n    width: 100%;\n  }\n  .question {\n    padding: 3rem 0rem;\n    cursor: pointer;\n  }\n\n  .answer {\n    padding:2rem 0rem;\n    p {\n      padding: 1rem 0rem;\n    }\n  }\n"]))),Qe=function(){var e=Ne(),n=Object(R.a)(e,2),t=n[0],i=n[1];return Object(G.jsxs)(De,{variants:de,ref:t,animate:i,initial:"hidden",children:[Object(G.jsxs)("h2",{children:["Any Questions ",Object(G.jsx)("span",{children:"FAQ"})]}),Object(G.jsxs)(P.b,{children:[Object(G.jsx)(Ee,{title:"How do I start",children:Object(G.jsxs)("div",{className:"answer",children:[Object(G.jsx)("p",{children:"Lorem ipsum dolor sit amet."}),Object(G.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam itaque quaerat maxime rem facere neque."})]})}),Object(G.jsx)(Ee,{title:"Daily Schedule",children:Object(G.jsxs)("div",{className:"answer",children:[Object(G.jsx)("p",{children:"Lorem ipsum dolor sit amet."}),Object(G.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam itaque quaerat maxime rem facere neque."})]})}),Object(G.jsx)(Ee,{title:"Diferent Payment Methods",children:Object(G.jsxs)("div",{className:"answer",children:[Object(G.jsx)("p",{children:"Lorem ipsum dolor sit amet."}),Object(G.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam itaque quaerat maxime rem facere neque."})]})}),Object(G.jsx)(Ee,{title:"What Products do you offer.",children:Object(G.jsxs)("div",{className:"answer",children:[Object(G.jsx)("p",{children:"Lorem ipsum dolor sit amet."}),Object(G.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam itaque quaerat maxime rem facere neque."})]})})]})]})},Me=function(){var e=Object(D.g)().pathname;return Object(A.useEffect)((function(){window.scroll({top:0,left:0})}),[e]),null},We=function(){return Object(G.jsxs)(P.c.div,{variants:ee,initial:"hidden",animate:"show",exit:"exit",children:[Object(G.jsx)(Me,{}),Object(G.jsx)(ye,{}),Object(G.jsx)(Se,{}),Object(G.jsx)(Qe,{})]})},Be=Object(M.b)(P.c.div)(f||(f=Object(Q.a)(["\n  padding-bottom: 10rem;\n  .line {\n    height: 0.5rem;\n    background: #23d997;\n    margin-bottom: 3rem\n  }\n  img{\n    width: 100%;\n    height: 70vh;\n    object-fit: cover;\n  }\n"]))),Pe=M.b.div(v||(v=Object(Q.a)(["\n  overflow: hidden;\n"]))),Ge=function(e){var n=e.athlete,t=e.theracer,i=e.goodtimes,a=Ne(),r=Object(R.a)(a,2),c=r[0],s=r[1],d=Ne(),o=Object(R.a)(d,2),j=o[0],l=o[1],h=Ne(),m=Object(R.a)(h,2),b=m[0],x=m[1];return Object(G.jsxs)(P.c.div,{children:[Object(G.jsxs)(Be,{ref:b,variants:se,initial:"hidden",animate:x,children:[Object(G.jsx)(P.c.h2,{variants:te,children:"The Athlete"}),Object(G.jsx)(P.c.div,{variants:ae,className:"line"}),Object(G.jsx)(B.b,{to:"/work/the-athlete",children:Object(G.jsx)(Pe,{children:Object(G.jsx)(P.c.img,{variants:ie,src:n,alt:"athlete"})})})]}),Object(G.jsxs)(Be,{ref:c,transition:{duration:.5},variants:se,animate:s,initial:"hidden",children:[Object(G.jsx)("h2",{children:"The Racer"}),Object(G.jsx)(P.c.div,{variants:ae,className:"line"}),Object(G.jsx)(B.b,{to:"/work/the-racer",children:Object(G.jsx)("img",{src:t,alt:"te racer"})})]}),Object(G.jsxs)(Be,{ref:j,variants:te,animate:l,initial:"hidden",transition:{duration:.5},children:[Object(G.jsx)("h2",{children:"Good Times"}),Object(G.jsx)(P.c.div,{variants:ae,className:"line"}),Object(G.jsx)(B.b,{to:"/work/good-times",children:Object(G.jsx)("img",{src:i,alt:"good times"})})]})]})},Ue=Object(M.b)(P.c.div)(w||(w=Object(Q.a)(["\n  position: fixed;\n  left: 0;\n  top: 10%;\n  width: 100%;\n  height: 100vh;\n  background: #fffebf;\n  z-index: 2;\n"]))),He=Object(M.b)(Ue)(y||(y=Object(Q.a)(["\n  background: #ff8efb;\n"]))),Je=Object(M.b)(Ue)(k||(k=Object(Q.a)(["\n  background: #8ed2ff;\n"]))),Re=Object(M.b)(Ue)(L||(L=Object(Q.a)(["\n  background: #8effa0;\n"]))),Ke=function(){return Object(G.jsxs)(P.c.div,{variants:ce,children:[Object(G.jsx)(Ue,{variants:re}),Object(G.jsx)(He,{variants:re}),Object(G.jsx)(Je,{variants:re}),Object(G.jsx)(Re,{variants:re})]})},Ve=Object(M.b)(P.c.div)(I||(I=Object(Q.a)(["\n  min-height: 100vh;\n  overflow: hidden;\n  padding: 5rem 10rem;\n  h2{\n    padding: 1rem 0rem;\n  }\n  @media (max-width: 1200px){\n    padding: 2rem;\n  }\n"]))),Xe=function(){return Object(G.jsxs)(Ve,{style:{background:"#fff"},variants:ee,initial:"hidden",animate:"show",exit:"exit",children:[Object(G.jsx)(Me,{}),Object(G.jsx)(Ke,{}),Object(G.jsx)(Ge,{goodtimes:V,athlete:K,theracer:X})]})},Ye=Object(M.b)(P.c.div)(q||(q=Object(Q.a)(["\n  padding: 5rem 10rem;\n  color: #353535;\n  min-height: 90vh;\n\n  @media (max-width: 1200px){\n    padding: 5rem 4rem;\n    h2 {font-size: 3rem;}\n  }\n  @media (max-width: 768px){\n    padding: 2rem;\n    h2 {font-size: 2rem;}\n  }\n  @media (max-width: 470px){\n    h2 {font-size: 1.5rem;}\n  }\n"]))),Ze=M.b.div(z||(z=Object(Q.a)(["\n  margin-bottom: 4rem;\n  color: black;\n\n  @media (max-width: 768px){\n    h2 {font-size: 2.5rem;}\n  }\n"]))),$e=M.b.div(C||(C=Object(Q.a)(["\n  overflow: hidden;\n"]))),_e=M.b.div(N||(N=Object(Q.a)(["\n  border-radius: 50%;\n  width: 3rem;\n  height: 3rem;\n  background: #353535;\n  @media (max-width: 768px){\n    width: 2rem;\n  height: 2rem;\n  }\n"]))),en=Object(M.b)(P.c.div)(T||(T=Object(Q.a)(["\n  display: flex;\n  align-items: center;\n  h2 {\n    margin: 2rem;\n  }\n"]))),nn=function(){return Object(G.jsxs)(Ye,{variants:ee,initial:"hidden",animate:"show",exit:"exit",style:{background:"#fff"},children:[Object(G.jsx)(Me,{}),Object(G.jsx)(Ze,{children:Object(G.jsx)($e,{children:Object(G.jsx)(P.c.h2,{variants:ne,children:"Get in Touch"})})}),Object(G.jsxs)("div",{children:[Object(G.jsx)($e,{children:Object(G.jsxs)(en,{variants:ne,children:[Object(G.jsx)(_e,{}),Object(G.jsx)("h2",{children:"Send Us a Message"})]})}),Object(G.jsx)($e,{children:Object(G.jsxs)(en,{variants:ne,children:[Object(G.jsx)(_e,{}),Object(G.jsx)("h2",{children:"Send an Email"})]})}),Object(G.jsx)($e,{children:Object(G.jsxs)(en,{variants:ne,children:[Object(G.jsx)(_e,{}),Object(G.jsx)("h2",{children:"Social Media"})]})})]})]})},tn=function(){var e=Object(D.g)();return Object(G.jsxs)("div",{className:"app",children:[Object(G.jsx)(W,{}),Object(G.jsx)(J,{}),Object(G.jsx)(P.a,{exitBeforeEnter:!0,children:Object(G.jsxs)(D.c,{location:e,children:[Object(G.jsx)(D.a,{path:"/",exact:!0,children:Object(G.jsx)(We,{})}),Object(G.jsx)(D.a,{path:"/work",exact:!0,children:Object(G.jsx)(Xe,{})}),Object(G.jsx)(D.a,{path:"/work/:id",children:Object(G.jsx)(xe,{})}),Object(G.jsx)(D.a,{path:"/contact",exact:!0,children:Object(G.jsx)(nn,{})})]},e.pathname)})]})},an=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),i(e),a(e),r(e),c(e)}))};E.a.render(Object(G.jsx)(F.a.StrictMode,{children:Object(G.jsx)(B.a,{children:Object(G.jsx)(tn,{})})}),document.getElementById("root")),an()}},[[39,1,2]]]);
//# sourceMappingURL=main.07ce3a53.chunk.js.map