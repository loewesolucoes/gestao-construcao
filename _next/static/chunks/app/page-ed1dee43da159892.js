(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5035:function(e,t,a){Promise.resolve().then(a.bind(a,8836))},8836:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(7437);a(4612);var s=a(2265),r=a(6125),l=a(3210),c=a(8792),i=a(1107),o=a(6468);function u(){let{isDbOk:e,repository:t}=(0,l.y$)(),[a,r]=(0,s.useState)(!0),[u,d]=(0,s.useState)([]);async function m(){let e=await t.list();e.forEach(e=>{e.valorTotal=i.B.valorTotal(e.valor,e.itbi,e.escrituraERegistro,e.iptu,i.B.MESES_ATE_VENDER)}),console.log(e),d(e),r(!1)}return(0,s.useEffect)(()=>{e&&m()},[e]),(0,n.jsx)("main",{className:"main container",children:(0,n.jsx)("section",{className:"d-flex justify-content-center m-5",children:a?(0,n.jsx)(o.a,{}):0===u.length?(0,n.jsx)("div",{className:"alert alert-info",role:"alert",children:"Nenhuma simula\xe7\xe3o encontrada"}):(0,n.jsx)("section",{className:"cards d-flex flex-wrap justify-content-center justify-content-lg-start",children:u.map(e=>{var t,a;return(0,n.jsx)("div",{className:"card m-3",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h5",{className:"card-title",children:e.titulo}),(0,n.jsxs)("h6",{className:"card-subtitle mb-2 text-body-secondary",children:["Custo Total Terreno: R$ ",null===(t=e.valorTotal)||void 0===t?void 0:t.toFormat(2)]}),(0,n.jsxs)("p",{className:"card-text",children:["Area terreno: ",null===(a=e.area)||void 0===a?void 0:a.toNumber()," m\xb2"]}),(0,n.jsx)(c.default,{href:"/simular?sim=".concat(e.id),className:"btn btn-secondary",children:"Ver simula\xe7\xe3o"})]})},e.id.toNumber())})})})})}function d(){return(0,n.jsx)(r.A,{children:(0,n.jsx)(u,{})})}},4612:function(){}},function(e){e.O(0,[218,990,583,28,971,69,744],function(){return e(e.s=5035)}),_N_E=e.O()}]);