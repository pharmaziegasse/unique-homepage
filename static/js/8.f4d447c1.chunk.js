(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{101:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(this&&this[a]||a);else if(Array.isArray(a))e.push(r.apply(this,a));else if("object"===s)for(var i in a)n.call(a,i)&&a[i]&&e.push(this&&this[i]||i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},113:function(e,t,n){"use strict";var a=n(11),r=n(12),s=n(14),i=n(13),l=n(15),o=n(0),c=n(101),m=n.n(c),p={DEFAULT:"",R:"btn-rounded"},u={DANGER:"btn-danger",SUCCESS:"btn-success",WARNING:"btn-warning",INFO:"btn-info",PRIMARY:"btn-primary",SECONDARY:"btn-secondary",WHITE:"btn-white",ELEGANT:"btn-elegant",oDANGER:"btn-outline-danger",oSUCCESS:"btn-outline-success",oWARNING:"btn-outline-warning",oINFO:"btn-outline-info",oPRIMARY:"btn-outline-primary",oSECONDARY:"btn-outline-secondary",oWHITE:"btn-outline-white",oELEGANT:"btn-outline-elegant"},d={SM:"btn-sm",MD:"btn-md",LG:"btn-lg",DEFAULT:""},b=m.a.bind(d),h=m.a.bind(u),f=m.a.bind(p),E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).isModal=function(){if(n.exists()){if(null===n.props.param.btnlink||void 0===n.props.param.btnlink)return n.props.param.buttonPage.urlPath=n.props.param.buttonPage.urlPath.replace("/","#"),!0;if(null!==n.props.param.btnlink&&void 0!==n.props.param.btnlink)return console.error("Link"),!1}},n.exists=function(){return void 0!==n.props.param&&null!==n.props.param&&(null!==n.props.param.buttonPage&&void 0!==n.props.param.buttonPage||null!==n.props.param.btnlink&&void 0!==n.props.param.btnlink)},n.getClassProps=function(){return m()("btn","font-weight-bold",h(n.props.btnstyle),f(n.props.btntype),b(n.props.size),n.props.disabled,n.props.className)},n.state={visible:!1},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.createElement("div",null,this.exists()&&o.createElement("div",null,!0===this.isModal()?o.createElement("button",{"data-toggle":"modal","data-target":this.props.param.buttonPage.urlPath,className:this.getClassProps()},this.props.param.buttonTitle):o.createElement("a",{href:this.props.param.buttonLink,className:this.getClassProps()},this.props.param.buttonTitle)))}}]),t}(o.Component);E.defaultProps={size:d.DEFAULT,btnstyle:u.WHITE,btntype:p.R,className:"",disabled:!1,btnlink:null,btntitle:"Unnamed",btnhref:""};t.a=E},132:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return a})},579:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n.n(a),s=n(31),i=n(132),l=n(11),o=n(12),c=n(14),m=n(13),p=n(30),u=n(15),d=n(23),b=n(0),h=n(18),f=n(24),E=n(113);function v(){var e=Object(d.a)(["\n    query img(\n            $token: String!\n            $id: Int!\n        ){\n        image(\n            token: $token\n            id: $id\n        ){\n            urlLink\n        }\n    }\n"]);return v=function(){return e},e}var g=Object(f.a)(v()),N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).onImgFetched=function(e,t){n.setState(Object(i.a)({},t,e))},n.renderImg=function(e,t){return b.createElement(h.a,null,function(a){return b.createElement("div",{className:"imgcontainer"},b.createElement("div",{className:"img-profile-container",onClick:Object(s.a)(r.a.mark(function n(){var s,i;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.query({query:g,variables:{id:e,token:this.props.token}});case 2:s=n.sent,void 0!==(i=s.data)&&this.onImgFetched(i.image,t);case 5:case"end":return n.stop()}},n,this)})).bind(Object(p.a)(n))},n.state[t]&&b.createElement("img",{className:"img-fluid",src:"https://pharmaziegasse.at"+n.state[t].urlLink,alt:"step "+(t+1)})))})},n.renderItem=function(e,t){var n="far fa-"+e.icon+" fa-2x";return b.createElement("div",{className:"py-2"},b.createElement("i",{className:n}),b.createElement("p",{className:"lead mt-3"},"STEP ",t+1),b.createElement("p",{className:"lead"},e.head),b.createElement("p",{dangerouslySetInnerHTML:{__html:e.text}}))},n.isOdd=function(e){return 1===Math.abs(e%2)},n.renderElaborateItem=function(e,t){var a="far fa-"+e.icon+" fa-2x",r="row d-flex";return n.isOdd(t)||(r+=" flex-row-reverse"),b.createElement("div",{className:r,key:t},b.createElement("div",{className:"view col-md-6 p-0"},n.renderImg(e.img,t),b.createElement("div",{className:"mask img-mask"})),b.createElement("div",{className:"col-md-6 p-0 d-flex justify-content-center"},b.createElement("div",{className:"m-auto pl-5 pr-5"},b.createElement("div",{className:"spacer-4 d-block d-sm-none"}),b.createElement("i",{className:a}),b.createElement("h2",{className:"mt-3 mb-0 text-muted"},"Schritt ",t+1),b.createElement("p",{className:"lead"},e.head),b.createElement("p",{dangerouslySetInnerHTML:{__html:e.text}}))))},n.state={},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return!0===this.props.simple?b.createElement("div",{className:"container py-5"},!0===this.props.showHead&&b.createElement("h2",{className:"font-weight-bold",dangerouslySetInnerHTML:{__html:this.props.title}}),b.createElement("h4",{className:"text-muted",dangerouslySetInnerHTML:{__html:this.props.lead}}),b.createElement("div",{className:"row d-flex justify-content-center mt-5"},this.props.items.map(function(t,n){return b.createElement("div",{key:n,className:"col-md-3"},e.renderItem(t,n))})),b.createElement(E.a,{param:this.props.btn})):b.createElement("div",{className:"container py-5"},!0===this.props.showHead&&b.createElement("h2",{className:"font-weight-bold",dangerouslySetInnerHTML:{__html:this.props.title}}),b.createElement("h4",{className:"text-muted mb-5",dangerouslySetInnerHTML:{__html:this.props.lead}}),this.props.items.map(function(t,n){return e.renderElaborateItem(t,n)}),b.createElement(E.a,{className:"mt-5",param:this.props.btn}))}}]),t}(b.Component);t.default=N}}]);
//# sourceMappingURL=8.f4d447c1.chunk.js.map