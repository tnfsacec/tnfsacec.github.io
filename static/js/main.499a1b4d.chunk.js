(this.webpackJsonpbuild=this.webpackJsonpbuild||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),i=(n(25),n(4)),s=n(5),l=n(7),p=n(6),h=n(19),u=n(2),d=(n(26),n(1)),j=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=new RegExp("\n","g"),t=new XMLHttpRequest,n=document.getElementById("teams"),a=document.getElementById("parliamentary");n.innerHTML+='<header class="major"><h1>\u6b63\u526f\u6703\u9577\u5019\u9078\u4eba\u7d93\u6b77</h1></header>',a.innerHTML+='<header class="major"><h1>\u5b78\u751f\u8b70\u54e1 (\u5168\u6821\u9078\u5340)\u7d93\u6b77</h1></header>',t.open("GET","https://tnfsacec.github.io/file/config.json"),t.responseType="text",t.send(),t.onload=function(){for(var r=JSON.parse(t.response),o=0;o<r.president.length;++o)n.innerHTML+="<h2>"+(o+1)+"\u865f\u5019\u9078\u5718\u968a<br>"+r.president[o]+"</h2><blockquote style='font-size: 20px;text-align: left;font-style: normal'>"+r.pexp[o].replace(e,"<br>")+"</blockquote><h2>"+r.vp[o]+"</h2><blockquote style='font-size: 20px;text-align: left;font-style: normal'>"+r.vpexp[o].replace(e,"<br>")+"</blockquote><hr />";for(var c=0;c<r.parliamentary.length;++c)a.innerHTML+="<h2>"+(c+1)+"\u865f\u5019\u9078\u4eba<br>"+r.parliamentary[c]+"</h2><blockquote style='font-size: 20px;text-align: left;font-style: normal'>"+r.parliamentaryexperience[c].replace(e,"<br>")+"</blockquote>"}}},{key:"render",value:function(){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)("div",{id:"main",children:Object(d.jsxs)("article",{className:"post featured",children:[Object(d.jsx)("div",{id:"teams"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{id:"parliamentary"})]})})})}}]),n}(r.a.Component),b=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e="https://docs.sivir.pw/post/"+this.props.location.pathname.split("/")[2],t=new XMLHttpRequest;t.open("GET",e),t.responseType="text",t.send(),t.onload=function(){var e=JSON.parse(t.response),n=e.title,a=e.context;document.getElementById("post").innerHTML+='<div id="main">\n        \x3c!-- Post --\x3e\n        <section class="post">\n            <header class="major">\n                <h1>'+n+"</h1>\n            </header>\n            <p>"+a+"</p>\n            <hr/>\n        </section>\n    </div>"}}},{key:"render",value:function(){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)("div",{id:"post"})})}}]),n}(r.a.Component),m=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=new RegExp("\n","g"),t=new XMLHttpRequest,n=document.getElementById("teams"),a=document.getElementById("parliamentary");n.innerHTML+='<header class="major"><h1>\u6b63\u526f\u6703\u9577\u5019\u9078\u4eba\u653f\u898b</h1></header>',a.innerHTML+='<header class="major"><h1>\u5b78\u751f\u8b70\u54e1 (\u5168\u6821\u9078\u5340)\u653f\u898b</h1></header>',t.open("GET","https://tnfsacec.github.io/file/config.json"),t.responseType="text",t.send(),t.onload=function(){for(var r=JSON.parse(t.response),o=0;o<r.president.length;++o)n.innerHTML+="<h2>"+(o+1)+"\u865f\u5019\u9078\u5718\u968a<br>"+r.president[o]+"\u3001"+r.vp[o]+"</h2><blockquote style='font-size: 20px;text-align: left;font-style: normal'>"+r.studentpolicy[o].replace(e,"<br>")+"</blockquote><hr />";for(var c=0;c<r.parliamentary.length;++c)a.innerHTML+="<h2>"+(c+1)+"\u865f\u5019\u9078\u4eba<br>"+r.parliamentary[c]+"</h2><blockquote style='font-size: 20px;text-align: left;font-style: normal'>"+r.parliamentarypolicy[c].replace(e,"<br>")+"</blockquote>"}}},{key:"render",value:function(){return Object(d.jsx)("h1",{children:Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)("div",{id:"main",children:Object(d.jsxs)("article",{className:"post featured",children:[Object(d.jsx)("div",{id:"teams"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{id:"parliamentary"})]})})})})}}]),n}(r.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("teams"),t=document.getElementById("parliamentary");e.innerHTML+='<header class="major"><h1>\u6b63\u526f\u6703\u9577\u5019\u9078\u4eba\u53c3\u9078\u52d5\u6a5f</h1></header>',t.innerHTML+='<header class="major"><h1>\u5b78\u751f\u8b70\u54e1 (\u5168\u6821\u9078\u5340)\u53c3\u9078\u52d5\u6a5f</h1></header>';var n=new XMLHttpRequest;n.open("GET","https://tnfsacec.github.io/file/config.json"),n.responseType="text",n.send(),n.onload=function(){for(var a=JSON.parse(n.response),r=0;r<a.president.length;++r)e.innerHTML+="<h2>"+(r+1)+"\u865f\u5019\u9078\u5718\u968a<br>"+a.president[r]+"</h2><blockquote>"+a.pmo[r]+"</blockquote><h2>"+a.vp[r]+"</h2><blockquote>"+a.vpmo[r]+"</blockquote><hr />";for(var o=0;o<a.parliamentary.length;++o)t.innerHTML+="<h2>"+(o+1)+"\u865f\u5019\u9078\u4eba<br>"+a.parliamentary[o]+"</h2><blockquote>"+a.parliamentarymotivation[o]+"</blockquote>"}}},{key:"render",value:function(){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)("div",{id:"main",children:Object(d.jsxs)("article",{className:"post featured",children:[Object(d.jsx)("div",{id:"teams"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{id:"parliamentary"})]})})})}}]),n}(r.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){alert("\u5c1a\u672a\u958b\u7968\uff0c\u529f\u80fd\u672a\u958b\u653e"),window.location.replace("/")}},{key:"render",value:function(){return Object(d.jsx)("h1",{children:"Open"})}}]),n}(r.a.Component),x=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e="https://docs.sivir.pw/home/"+this.props.location.pathname.split("/")[2],t=new XMLHttpRequest;function n(e,t){var n=e.title,a=e.subtitle,r=e.time,o=e.id;if(1!==o){var c="chunk"+t,i='<header class="major">\n    <span class="date">'+r+"</span>\n    <h2>"+n+"</h2>\n    <p>"+a+'</p>\n</header>\n<ul class="actions special">\n    <li><a href="#/post/'+o+'" class="button large">Full Story</a></li>\n</ul>';document.getElementById(c).innerHTML+=i}}t.open("GET",e),t.responseType="text",t.send(),t.onload=function(){for(var e=JSON.parse(t.response),a=1;a<=e.count;++a)n(e["t"+a],a)}}},{key:"render",value:function(){for(var e=[],t=1;t<=5;++t){var n="chunk"+t;e.push(Object(d.jsx)("div",{id:n}))}return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)("div",{id:"main",children:Object(d.jsx)("article",{className:"post featured",children:e})})})}}]),n}(r.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/home/:id",component:x}),Object(d.jsx)(u.b,{path:"/post/:id",component:b}),Object(d.jsx)(u.b,{path:"/experience",component:j}),Object(d.jsx)(u.b,{path:"/policy",component:m}),Object(d.jsx)(u.b,{path:"/motivation",component:f}),Object(d.jsx)(u.b,{path:"/opening",component:O}),Object(d.jsx)(u.a,{exact:!0,from:"/",to:{pathname:"/home/1",search:"",state:{name:"Referrer"}}}),Object(d.jsx)(u.a,{exact:!0,from:"/home",to:{pathname:"/home/1",search:"",state:{name:"Referrer"}}})]})})}}]),n}(a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("main")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.499a1b4d.chunk.js.map