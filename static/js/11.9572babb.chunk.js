(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{102:function(e,t,n){"use strict";var a=n(11),r=n(12),s=n(14),i=n(13),o=n(15),l=n(0),p=n(97),c=n.n(p),m={DEFAULT:"",R:"btn-rounded"},u={DANGER:"btn-danger",SUCCESS:"btn-success",WARNING:"btn-warning",INFO:"btn-info",PRIMARY:"btn-primary",SECONDARY:"btn-secondary",WHITE:"btn-white",ELEGANT:"btn-elegant",oDANGER:"btn-outline-danger",oSUCCESS:"btn-outline-success",oWARNING:"btn-outline-warning",oINFO:"btn-outline-info",oPRIMARY:"btn-outline-primary",oSECONDARY:"btn-outline-secondary",oWHITE:"btn-outline-white",oELEGANT:"btn-outline-elegant"},b={SM:"btn-sm",MD:"btn-md",LG:"btn-lg",DEFAULT:""},d=c.a.bind(b),h=c.a.bind(u),f=c.a.bind(m),E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).isModal=function(){if(n.exists()){if(null===n.props.param.btnlink||void 0===n.props.param.btnlink)return n.props.param.buttonPage.urlPath=n.props.param.buttonPage.urlPath.replace("/","#"),!0;if(null!==n.props.param.btnlink&&void 0!==n.props.param.btnlink)return console.error("Link"),!1}},n.exists=function(){return void 0!==n.props.param&&null!==n.props.param&&(null!==n.props.param.buttonPage&&void 0!==n.props.param.buttonPage||null!==n.props.param.btnlink&&void 0!==n.props.param.btnlink)},n.getClassProps=function(){return c()("btn","font-weight-bold",h(n.props.btnstyle),f(n.props.btntype),d(n.props.size),n.props.disabled,n.props.className)},n.state={visible:!1},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.createElement("div",null,this.exists()&&l.createElement("div",null,!0===this.isModal()?l.createElement("button",{"data-toggle":"modal","data-target":this.props.param.buttonPage.urlPath,className:this.getClassProps()},this.props.param.buttonTitle):l.createElement("a",{href:this.props.param.buttonLink,className:this.getClassProps()},this.props.param.buttonTitle)))}}]),t}(l.Component);E.defaultProps={size:b.DEFAULT,btnstyle:u.WHITE,btntype:m.R,className:"",disabled:!1,btnlink:null,btntitle:"Unnamed",btnhref:""};t.a=E},181:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(102);t.default=function(e){var t=e.heading,n=e.cards;function s(e){return 1===e?"card premium pb-4":"card pricing-card pb-4"}function i(){switch(n.length){case 1:return"col-md-6 m-auto mb-4";case 2:return"col-md-6 mb-4";case 3:default:return"col-md-4 mb-4"}}return a.createElement("div",{className:"container py-5"},!0===e.showHead&&a.createElement("h2",{className:"h1-responsive font-weight-bold mb-5",dangerouslySetInnerHTML:{__html:t}}),a.createElement("div",{className:"row"},n.map(function(e,t){return a.createElement("div",{key:t,className:i()},a.createElement("div",{className:s(t)},a.createElement("h3",{className:"text-uppercase font-weight-bold my-4"},e.title),a.createElement("div",{className:"pricing-description p-4"},a.createElement("p",{className:"m-0",dangerouslySetInnerHTML:{__html:e.description}})),a.createElement("div",{className:"card-body striped p-0"},a.createElement("div",{className:"py-4"},a.createElement("p",{className:"text-uppercase mb-0 pricetag"},"Preis"),a.createElement("p",{className:"text-muted mb-0"},"\u20ac ",e.price)),a.createElement("hr",{className:"mt-0"}),a.createElement(r.a,{btnstyle:"WHITE",modal:"#modalRegister",className:"font-weight-bold"},"Beautyprogramm starten"))))})))}},97:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(this&&this[a]||a);else if(Array.isArray(a))e.push(r.apply(this,a));else if("object"===s)for(var i in a)n.call(a,i)&&a[i]&&e.push(this&&this[i]||i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}}]);
//# sourceMappingURL=11.9572babb.chunk.js.map