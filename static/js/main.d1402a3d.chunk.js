(this["webpackJsonpspelunky-2-bingo"]=this["webpackJsonpspelunky-2-bingo"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(8),i=n.n(s),o=(n(16),n(10)),u=n(7),l=n.n(u),h=n(9),f=n(3),p=(n(18),n(5)),j=n.n(p);var b=function(e){var t=Object(r.useState)(e.isActive||!1),n=Object(f.a)(t,2),a=n[0],s=n[1],i=e.isActive||a?"active":"notactive";return Object(c.jsx)("div",{className:i,onClick:function(){s(!a)},children:e.children})};var v=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){function e(){return(e=Object(h.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/spelunky2bingo/values.csv");case 2:return t=e.sent,e.next=5,t.text();case 5:n=e.sent,c=j.a.filter(j.a.map(n.split("\n"),(function(e){if(e.trim()){var t=e.split(","),n=Object(f.a)(t,2),c=n[0],r=n[1];c=c.trim();try{r=Number.parseInt(r.trim(),10)}catch(a){console.error("could not parse csv file, error with task: "+c)}return{task:c,score:r}}}))),a(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=[];if(n.length>0){for(var i=Math.floor(12.5),u=new Set,p=0;p<25;p++){for(var v=Math.floor(25*Math.random());u.has(v);)v=(v+1)%25;u.add(v)}for(var d=Object(o.a)(u),O=0;O<d.length;O++)if(O===i)s.push(Object(c.jsx)(b,{isActive:!0,children:"free"}));else{var g=n[d[O]];s.push(Object(c.jsx)(b,{children:g.task}))}}return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:"Spelunky 2 Bingo"}),Object(c.jsx)("section",{children:Object(c.jsx)("div",{className:"bingo-sheet",children:s})})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),d()}},[[21,1,2]]]);
//# sourceMappingURL=main.d1402a3d.chunk.js.map