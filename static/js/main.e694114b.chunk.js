(this["webpackJsonpreact-file-host"]=this["webpackJsonpreact-file-host"]||[]).push([[0],{60:function(e,t,n){},62:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n(42),r=n.n(c),s=(n(60),n(9)),o=n.n(s),i=n(11),l=n(19),d=n(14),j=(n(62),n(63),n(66),n.p,n(91)),u=n(89),b=n(54),h=n(6),m=Object(a.memo)((function(){return Object(h.jsxs)(b.a,{children:[Object(h.jsx)("ambientLight",{}),Object(h.jsx)("spotLight",{}),Object(h.jsx)(j.a,{}),Object(h.jsx)(u.a,{position:[0,.8,-1],scale:[.3,.3,.3],children:Object(h.jsx)("meshStandardMaterial",{color:"#e23"})})]})})),O=function(e){var t=e.name,n=(e.path,e.imagePath,e.licensePath,e.industry),a=e.owner,c=(e.description,e.date);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{class:"Download-Item",children:[Object(h.jsx)(m,{}),Object(h.jsxs)("div",{class:"Download-Item-InfoText",children:[Object(h.jsx)("li",{class:"Download-Item-InfoText-row-name",children:t}),Object(h.jsx)("li",{className:"Download-Item-InfoText-row",children:a}),Object(h.jsx)("li",{className:"Download-Item-InfoText-row",children:n}),Object(h.jsx)("li",{className:"Download-Item-InfoText-row",children:c})]})]})})},p=Object(a.createContext)(),x=function(e){var t=Object(a.useState)([{name:"TEst TEst TEst",path:"DATA/Videos/.Rhistory",image:"DATA/Videos/.Rhistory",license:".Rhistory",industry:".Rhistory",ip:"something",description:"something"},{name:"2021-06-29_15-11-28",path:"DATA/Models/2021-06-29_15-11-28.png",image:"DATA/Models/2021-06-29_15-11-28.png",format:"png",industry:"Life Sciences and Healthcare",ip:"Customer-Facing"},{name:"TEALS Program Volunteer information_l1",path:"DATA/Models/TEALS Program Volunteer information_l1.jpg",image:"DATA/Models/TEALS Program Volunteer information_l1.jpg",format:"jpg",industry:"Business Services",ip:"VS Partners Confidential"}]),n=Object(d.a)(t,2),c=n[0],r=n[1];return Object(h.jsx)(p.Provider,{value:[c,r],children:e.children})},f=n.p+"static/media/Background.1219cf3f.png",g=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){r()}),[]);var r=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://env28test.ag.3ds.com/post");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),c(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{id:"Content",style:{backgroundImage:"url(".concat(f,")")},children:Object(h.jsx)("div",{id:"DownloadItems",children:n.map((function(e){return Object(h.jsx)(O,{name:e.title,owner:e.owner,industry:e.industry,path:"http://192.168.86.174:3000/download:"+e.title,date:e.date})}))})})},v=(n(74),n.p+"static/media/car.2c2076e6.png"),A=n.p+"static/media/tire.842e5312.png",w=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{id:"Intro",children:Object(h.jsxs)("div",{class:"row IntroRow",children:[Object(h.jsxs)("div",{class:"column",children:[Object(h.jsx)("h1",{id:"title",children:"IPS File Repository"}),Object(h.jsx)("li",{children:"A repo for IPS post-production files. Download any assets you need for your project directly to your machine."})]}),Object(h.jsx)("div",{id:"carwrapper",children:Object(h.jsx)("img",{id:"car",src:v,alt:"car"})})]})}),Object(h.jsx)("div",{id:"Intro",children:Object(h.jsxs)("div",{class:"row IntroRow",children:[Object(h.jsx)("div",{id:"carwrapper",children:Object(h.jsx)("img",{id:"car",src:A,alt:"car"})}),Object(h.jsxs)("div",{class:"column",children:[Object(h.jsx)("h1",{id:"title",children:"Get Started."}),Object(h.jsx)("li",{children:"Navigate to the download tab in this dashboard and browse through all the different available files."})]})]})})]})},C=n(12),y=(n(75),n(17)),F="data:image/png;base64,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",I=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(d.a)(r,2),o=s[0],i=s[1],l=Object(a.useState)([]),j=Object(d.a)(l,2),u=j[0],b=j[1],m=Object(a.useRef)(),O=Object(a.useState)([]),p=Object(d.a)(O,2),x=(p[0],p[1]);Object(a.useEffect)((function(){var e=n.reduce((function(e,t){return e.find((function(e){return e.name===t.name}))?e:e.concat([t])}),[]);b(Object(y.a)(e))}),[n]);var f=function(e){for(var t=function(t){g(e[t])?(c([]),c((function(n){return[].concat(Object(y.a)(n),[e[t]])})),A(e[t])):(e[t].invalid=!0,i("File type not permitted"),c([]),c((function(n){return[].concat(Object(y.a)(n),[e[t]])})),m.current.style.backgroundImage="url(".concat(F,")"))},n=0;n<e.length;n++)t(n)},g=function(e){return-1!==["image/jpeg","image/jpg","image/png","image/gif","image/x-icon"].indexOf(e.type)},v=function(e){if(0===e)return"0 Bytes";var t=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,t)).toFixed(2))+" "+["Bytes","KB","MB","GB","TB"][t]},A=function(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(e){m.current.style.backgroundImage="url(".concat(e.target.result,")"),x([]),x((function(t){return[].concat(Object(y.a)(t),[e.target.result])}))}};return Object(h.jsxs)("div",{className:"Form-Column",children:[Object(h.jsx)("label",{className:"Form-Row ",children:"Choose File Preview Image"}),Object(h.jsx)("div",{ref:m,className:"Form-Column drop-zone Centered modal-image",id:"drop-zone-thumbnail",onDragOver:function(e){e.preventDefault(),m.current.style.backgroundImage="url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAElBMVEXe3t6goKDGxsapqanOzs69vb0z4ZOnAAAA8UlEQVRo3u3WTQ6CMBAF4MffAQp0r5zACu5LonsMev+ruKAoERZ2JiExed+uXUzetIUWICIiIiKif3J7bhl+L9CbLacdCxztdS0qQbkx6WISaAv0Fu5rAcrYBLoC/VSgcroCFosckS1YOGMGIFMlAJBrFrECAE0CVQG7bMFJz8EpLGIiTWB97owxtpBuY1BDfBLn38Bdl2BAr0vgUai+xgpIhbswOU/HSdzCAwCcuIWLn8bSBHUYJ8JtrHwYZ8JF7OZxKmvhHQBwoha6z0QW38LYtn4xM3a730zKu9E2a/u+D7QF0mbLgY9HIiIiIqIdvQCDUUrKdSlitgAAAABJRU5ErkJggg==",")")},onDragEnter:function(e){e.preventDefault()},onDragLeave:function(e){e.preventDefault(),m.current.style.backgroundImage="url(".concat(F,")")},onDrop:function(e){e.preventDefault();var t=e.dataTransfer.files;console.log(t),t.length&&f(t)},style:{backgroundImage:"url(".concat(F,")")}}),u.map((function(e,t){return Object(h.jsxs)("div",{className:"file-status-bar Centered",children:[Object(h.jsx)("div",{className:"file-type-logo"}),Object(h.jsx)("div",{className:"file-type",children:(n=e.name,n.substring(n.lastIndexOf(".")+1,n.length)||n)}),Object(h.jsx)("span",{className:"file-name ".concat(e.invalid?"file-error":""),children:e.name}),Object(h.jsxs)("span",{className:"file-size",children:["(",v(e.size),")"]}),e.invalid&&Object(h.jsxs)("span",{className:"file-error-message",children:["(",o,")"]})]});var n}))]})},S=Object(a.createContext)(),N=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),o=Object(d.a)(s,2),i=o[0],l=o[1],j=Object(a.useState)(""),u=Object(d.a)(j,2),b=u[0],m=u[1],O=Object(a.useState)([]),p=Object(d.a)(O,2),x=p[0],f=p[1];return Object(h.jsx)(S.Provider,{value:{Name:c,setName:r,Owner:i,setOwner:l,Industry:b,setIndustry:m,File:x,setFile:f},children:e.children})},L=function(){var e=Object(a.useContext)(S),t=(e.path,e.setPath);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{for:"input",className:"Form-Row ",children:"Type wiki url"}),Object(h.jsx)("input",{className:"Form-Input Form-Row Name",id:"input",required:"",autocomplete:"off",placeholder:"",autocapitalize:"none",autocorrect:"off","aria-describedby":"","aria-labelledby":"paper-input-label-1",tabIndex:"0",name:"name",type:"text",onChange:function(e){t(e.target.value)}})]})},R=function(){var e=Object(a.useContext)(S),t=(e.FileName,e.setName);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{for:"input",className:"Form-Row ",children:"Type file name"}),Object(h.jsx)("input",{className:"Form-Input Form-Row Name",id:"input",required:"",autoComplete:"off",placeholder:"",autoCapitalize:"none",autoCorrect:"off","aria-describedby":"","aria-labelledby":"paper-input-label-1",tabIndex:"0",name:"name",type:"text",onChange:function(e){t(e.target.value)}})]})},D=function(){var e=Object(a.useContext)(S),t=(e.Industry,e.setIndustry);return Object(h.jsxs)("div",{required:!0,className:"Form-Row Wrap ",children:[Object(h.jsx)("label",{className:"Form-Row ",children:"Choose Industry"}),Object(h.jsxs)("select",{required:!0,className:"Form-Row Industry",onChange:function(e){t(e.target.value)},defaultValue:"",children:[Object(h.jsxs)("option",{disabled:!0,value:"",children:[" ","-- select an option --"," "]}),Object(h.jsx)("option",{value:"Transportation and Mobility",children:"Transportation and Mobility"}),Object(h.jsx)("option",{value:"Aerospace and Defense",children:"Aerospace and Defense"}),Object(h.jsx)("option",{value:"Marine and Offshore",children:"Marine and Offshore"}),Object(h.jsx)("option",{value:"Industrial Equipment",children:"Industrial Equipment"}),Object(h.jsx)("option",{value:"High-Tech",children:"High-Tech"}),Object(h.jsx)("option",{value:"Home and Lifestyle",children:"Home and Lifestyle"}),Object(h.jsx)("option",{value:"High-Tech",children:"High-Tech"}),Object(h.jsx)("option",{value:"Consumer Packaged Goods",children:"Consumer Packaged Goods"}),Object(h.jsx)("option",{value:"Life Sciences and Healthcare",children:"Life Sciences and Healthcare"}),Object(h.jsx)("option",{value:"Construction, Cities, and Territories",children:"Construction, Cities, and Territories"}),Object(h.jsx)("option",{value:"Business Services",children:"Business Services"})]})]})},T=function(){var e=Object(a.useContext)(S),t=(e.Confidentiality,e.setConfidentiality);return Object(h.jsxs)("div",{className:"Form-Row Wrap ",children:[Object(h.jsx)("label",{className:"Form-Row",children:"Choose Confidentiality"}),Object(h.jsxs)("select",{required:!0,className:"Form-Row Confidentiality",onChange:function(e){t(e.target.value)},children:[Object(h.jsxs)("option",{disabled:!0,selected:!0,value:!0,children:[" ","-- select an option --"," "]}),Object(h.jsx)("option",{value:"Customer-Facing",children:"Customer-Facing"}),Object(h.jsx)("option",{value:"Show-Customer Do-Not-Distribute",children:"Show-Customer Do-Not-Distribute"}),Object(h.jsx)("option",{value:"DS Confidential",children:"DS Confidential"}),Object(h.jsx)("option",{value:"VS Partners Confidential",children:"VS Partners Confidential"})]})]})},M=function(){var e=Object(a.useContext)(S),t=(e.Owner,e.setOwner);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{for:"input",className:"Form-Row ",children:"Type your name"}),Object(h.jsx)("input",{className:"Form-Input Form-Row Name",id:"input",required:"",autoComplete:"off",placeholder:"",autoCapitalize:"none",autoCorrect:"off","aria-describedby":"","aria-labelledby":"paper-input-label-1",tabIndex:"0",name:"name",type:"text",onChange:function(e){t(e.target.value)}})]})},B=function(){var e=Object(a.useContext)(S),t=(e.File,e.setFile);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{className:"Form-Row",children:"Add Model File"}),Object(h.jsx)("input",{className:"Form-Input Form-Row",type:"file",name:"files",onChange:function(e){t(e.target.files[0])}})]})},E=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(R,{}),Object(h.jsx)(B,{}),Object(h.jsx)(M,{}),Object(h.jsx)(D,{})]})},H=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(I,{}),Object(h.jsx)(L,{}),Object(h.jsx)(R,{}),Object(h.jsx)(T,{}),Object(h.jsx)(D,{})]})},k=n.p+"static/media/loading.41786afb.gif",P=function(){var e={ShowContent:!1,ShowModelUpload:!1,ShowSurroundings:!1},t=Object(a.useState)(e),n=Object(d.a)(t,2),c=n[0],r=c.ShowModelUpload,s=c.ShowSurroundings,o=c.ShowContent,i=n[1],l=Object(a.useState)(!1),j=Object(d.a)(l,2),u=j[0],b=j[1],m=Object(a.useState)(!1),O=Object(d.a)(m,2),p=O[0],x=O[1],f=Object(a.useState)(""),g=Object(d.a)(f,2),v=g[0],A=g[1],w=function(){b((function(e){return!e}))},y=function(){x((function(e){return!e}))},F=Object(a.useContext)(S),I=F.Name,N=F.Owner,L=F.Industry,R=F.File,D=new FormData;var T=function(){return Object(h.jsx)("div",{className:"notification",children:Object(h.jsxs)("div",{className:"notification-container",children:[Object(h.jsx)("p",{children:v}),Object(h.jsx)("input",{id:"OKButton",type:"button",onClick:w,value:"OK"})]})})},M=function(){return Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)("div",{className:"loading-container",children:Object(h.jsx)("img",{alt:"loading gif",src:k,style:{width:"100%",height:"auto"}})})})};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{id:"Form-Container",children:[Object(h.jsxs)("form",{id:"Form",className:"form style-scope my-app-models",enctype:"multipart/form-data",action:"",onSubmit:function(e){!function(e){e.preventDefault(),D.append("model",R),D.append("title",I),D.append("owner",N),D.append("industry",L);var t,n=Object(C.a)(D.entries());try{for(n.s();!(t=n.n()).done;){var a=t.value;console.log(a[0]+", "+a[1])}}catch(c){n.e(c)}finally{n.f()}try{fetch("http://localhost:3000/post",{method:"POST",body:D,enctype:"multipart/form-data"}).then((function(e){if(e.ok)return e.json();404===e.status?(A("404: Link not found"),y(),w()):(A("Unable to upload. Please attach a valid .glb file"),y(),w())})).then((function(t){console.log(t);try{if(t.message){console.log(t.message);var n=t.message;A(n),y(),w()}else A("Successfully uploaded model!"),y(),w()}catch(e){}})).catch((function(e){return A("unable to connect to server"),y(),w(),Promise.reject()}))}catch(e){A(e),y(),w()}}(e),y()},noValidate:!0,children:[Object(h.jsx)("h1",{children:" File Upload Panel"}),Object(h.jsxs)("div",{className:"Form-Column",children:[Object(h.jsx)("label",{className:"Form-Row ",children:"Choose Upload Type"}),Object(h.jsxs)("select",{id:"Upload-Type-Submit",className:"Form-Row",onChange:function(t){switch(t.target.value){case"3DModels":i(e),i({ShowModelUpload:!0,ShowContent:!0});break;case"Surroundings":i(e),i({ShowSurroundings:!0,ShowContent:!0});break;default:return}},defaultValue:"",children:[Object(h.jsxs)("option",{disabled:!0,value:"",children:[" ","-- select an option --"," "]}),Object(h.jsx)("option",{value:"3DModels",children:"3DModels"}),Object(h.jsx)("option",{value:"Surroundings",children:"Surroundings"}),Object(h.jsx)("option",{value:"Music",children:"Music"}),Object(h.jsx)("option",{value:"Images",children:"Images"}),Object(h.jsx)("option",{value:"Videos",children:"Videos"})]})]}),r&&Object(h.jsx)(E,{}),s&&Object(h.jsx)(H,{}),Object(h.jsx)("div",{class:"Form-Row Centered",children:o&&Object(h.jsx)("input",{class:"Centered",type:"submit",value:"Submit"})})]}),u?Object(h.jsx)(T,{}):null,p?Object(h.jsx)(M,{}):null]})})},U=Object(a.memo)((function(){return Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/",children:Object(h.jsx)(l.a,{to:"./Home"})}),Object(h.jsx)(l.b,{exact:!0,path:"/Home",component:w}),Object(h.jsx)(x,{children:Object(h.jsxs)(N,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/Download",component:g}),Object(h.jsx)(l.b,{exact:!0,path:"/Upload",component:P})]})})]})})),Q=(n(80),Object(a.memo)((function(){return Object(h.jsxs)("div",{id:"footer",children:[Object(h.jsxs)("div",{class:"footer-column",children:[Object(h.jsx)("h2",{children:"About Us:"}),Object(h.jsxs)("p",{children:["We are a team of content creaters dedicated to making multimedia experiences.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Our goal is to share our tools with others at DS so that we can all create 3DExperiences together."]})]}),Object(h.jsxs)("div",{class:"footer-column",children:[Object(h.jsx)("h2",{children:"Learn More:"}),Object(h.jsxs)("p",{children:["Lorem ipsum",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Lorem Ipsum"]})]})]})}))),z=(n(81),n(28));function G(){return Object(h.jsx)("div",{id:"Header-Wrapper",children:Object(h.jsxs)("div",{id:"Header",children:[Object(h.jsx)("span",{class:"Header-Item Title",children:"Simulia IPS File Repository"}),Object(h.jsx)("span",{class:"Header-Item",children:Object(h.jsx)(z.b,{to:"/Home",children:"Home"})}),Object(h.jsxs)("span",{class:"Header-Item",children:[" ",Object(h.jsx)(z.b,{to:"/Download",class:"dropbtn",children:"Models"})]}),Object(h.jsxs)("span",{class:"Header-Item",children:[" ",Object(h.jsx)(z.b,{to:"/Upload",class:"dropbtn",children:"Upload"})]})]})})}var W=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(G,{}),Object(h.jsx)(U,{}),Object(h.jsx)(Q,{})]})},V=n(90),Y=n(53);r.a.render(Object(h.jsx)(z.a,{basename:"/",children:Object(h.jsx)(V.a,{backend:Y.a,children:Object(h.jsx)(W,{})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.e694114b.chunk.js.map