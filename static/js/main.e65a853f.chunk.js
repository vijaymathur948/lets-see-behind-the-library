(this["webpackJsonplets-see-the-code"]=this["webpackJsonplets-see-the-code"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"name":"lets-see-the-code","version":"0.1.0","private":true,"dependencies":{"@testing-library/jest-dom":"^5.11.9","@testing-library/react":"^11.2.5","@testing-library/user-event":"^12.8.1","bootstrap":"^4.6.0","gh-pages":"^3.1.0","react":"^17.0.1","react-bootstrap":"^1.5.1","react-dom":"^17.0.1","react-router-dom":"^5.2.0","react-scripts":"4.0.3","styled-components":"^5.2.1","web-vitals":"^1.1.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},27:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(8),o=n.n(c),i=(n(27),n(21)),r=n(14),l=n(15),p=n(22),d=n(20),j=n(38),b=n(37),u=n(19),m=n(39),h=n(41),f=n(40),y=n(16),g=n(5),x={one:"one",two:"two",arr:[1,{nested_1:"nested"},3,4],fun_1:function(){return"function_1"},fun_2:function(){return"function_2"},Component:s.Component,useState:s.useState},O=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={elementName:"None",elementType:"empty",types:{number:"number",string:"string",boolean:"boolean",function:"function"},objectMapping:{window:window,location:document.location,myObject:x,react:a.a,Accordion:j.a,data:y},isSelected:!1},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"container",style:{marginTop:"50px"},children:[Object(g.jsx)("h1",{style:{textAlign:"center",fontSize:"50px"},children:"Let's see behind the Code"}),Object(g.jsxs)(b.a,{className:"my-3",children:[Object(g.jsx)(u.a,{children:Object(g.jsx)(m.a.Group,{controlId:"element",children:Object(g.jsxs)(m.a.Control,{size:"lg",as:"select",onChange:function(t){var n=t.target.value;"None"!==n?(e.setState({elementName:n}),e.setState({elementType:typeof e.state.objectMapping[n]}),e.setState({isSelected:!0})):(e.setState({elementName:"None"}),e.setState({elementType:"Empty"}))},children:[Object(g.jsx)("option",{children:"None"}),Object.keys(this.state.objectMapping).map((function(e,t){return Object(g.jsx)("option",{children:e},t)}))]})})}),Object(g.jsx)(u.a,{children:Object(g.jsx)(h.a,{size:"lg",variant:"dark",onClick:function(){return window.location.reload()},children:"Refresh"})})]}),Object(g.jsx)(j.a,{defaultActiveKey:"0",className:"mb-5",children:Object(g.jsxs)(f.a,{children:[Object(g.jsxs)(j.a.Toggle,{as:f.a.Header,eventKey:"0",style:{display:"flex",justifyContent:"space-between",cursor:"pointer"},children:[Object(g.jsx)("span",{style:{fontWeight:"bold",fontSize:"30px"},children:this.state.elementName}),Object(g.jsx)("span",{style:{fontWeight:"bold",fontSize:"30px"},children:this.state.elementType})]}),Object(g.jsx)(j.a.Collapse,{eventKey:"0",style:{backgroundColor:"black"},children:Object(g.jsx)(f.a.Body,{children:this.state.objectMapping[this.state.elementName]&&Object.keys(this.state.objectMapping[this.state.elementName]).map((function(t,n){var s,a,c=e.state.objectMapping[e.state.elementName];return e.state.types[typeof c[t]]&&(s=c[t]),"boolean"===typeof s&&(s=s?"true":"false"),a=void 0===s?null!==c[t]?c[t].toString():"Object Not Accessible":""===s?"Empty Value":s,Object(g.jsxs)(b.a,{className:"mb-2",children:[Object(g.jsx)(u.a,{children:Object(g.jsxs)(h.a,{variant:"dark",style:{fontSize:" 25px"},children:[n+1,"     ",t," :",typeof e.state.objectMapping[e.state.elementName][t]]})}),Object(g.jsx)(u.a,{children:Object(g.jsx)(h.a,{variant:void 0===s?"danger":"dark",onClick:function(){if("object"===typeof c[t]){var n=Object(i.a)({},e.state.objectMapping);n[t]=c[t],e.setState({objectMapping:n}),e.setState({elementName:t}),e.setState({elementType:typeof c[t]})}},style:{fontSize:" 25px",width:"inherit"},children:"function"===typeof a?a.toString():a})})]},n)}))})})]})})]})}}]),n}(s.Component);n(32);var v=function(){return Object(g.jsx)(O,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),c(e),o(e)}))};n(33);o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root")),S()}},[[34,1,2]]]);
//# sourceMappingURL=main.e65a853f.chunk.js.map