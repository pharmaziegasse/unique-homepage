(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===s)for(var i in n)a.call(n,i)&&n[i]&&e.push(this&&this[i]||i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},170:function(e,t,a){"use strict";var n=a(9),r=a(10),s=a(12),i=a(11),o=a(13),l=a(0),p=a(158),c=a.n(p),u={DEFAULT:"",R:"btn-rounded"},b={DANGER:"btn-danger",SUCCESS:"btn-success",WARNING:"btn-warning",INFO:"btn-info",PRIMARY:"btn-primary",SECONDARY:"btn-secondary",WHITE:"btn-white",ELEGANT:"btn-elegant",oDANGER:"btn-outline-danger",oSUCCESS:"btn-outline-success",oWARNING:"btn-outline-warning",oINFO:"btn-outline-info",oPRIMARY:"btn-outline-primary",oSECONDARY:"btn-outline-secondary",oWHITE:"btn-outline-white",oELEGANT:"btn-outline-elegant"},m={SM:"btn-sm",MD:"btn-md",LG:"btn-lg",DEFAULT:""},d=c.a.bind(m),h=c.a.bind(b),g=c.a.bind(u),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).isModal=function(){if(a.exists()){if(null===a.props.param.btnlink||void 0===a.props.param.btnlink)return a.props.param.buttonPage.urlPath=a.props.param.buttonPage.urlPath.replace("/","#"),!0;if(null!==a.props.param.btnlink&&void 0!==a.props.param.btnlink)return console.error("Link"),!1}},a.exists=function(){return void 0!==a.props.param&&null!==a.props.param&&(null!==a.props.param.buttonPage&&void 0!==a.props.param.buttonPage||null!==a.props.param.btnlink&&void 0!==a.props.param.btnlink)},a.getClassProps=function(){return c()("btn","font-weight-bold",h(a.props.btnstyle),g(a.props.btntype),d(a.props.size),a.props.disabled,a.props.className)},a.state={visible:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.createElement("div",null,this.exists()&&l.createElement("div",null,!0===this.isModal()?l.createElement("button",{"data-toggle":"modal","data-target":this.props.param.buttonPage.urlPath,className:this.getClassProps()},this.props.param.buttonTitle):l.createElement("a",{href:this.props.param.buttonLink,className:this.getClassProps()},this.props.param.buttonTitle)))}}]),t}(l.Component);f.defaultProps={size:m.DEFAULT,btnstyle:b.WHITE,btntype:u.R,className:"",disabled:!1,btnlink:null,btntitle:"Unnamed",btnhref:""};t.a=f},200:function(e,t,a){"use strict";var n=a(9),r=a(10),s=a(12),i=a(11),o=a(13),l=a(0),p=a.n(l),c=a(158),u=a.n(c),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).hexToRgb=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},a.isDark=function(){if(null===a.props.bg||void 0===a.props.bg)return null;var e=a.hexToRgb(a.props.bg).r,t=a.hexToRgb(a.props.bg).g,n=a.hexToRgb(a.props.bg).b,r=/rgb\((\d+).*?(\d+).*?(\d+)\)/.exec("rgb("+e+","+t+","+n+")");return(255&r[1])+(255&r[2])+(255&r[3])<640?"text-white":"text-grey"},a.state={visible:e.show},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u()("alert",this.props.className,this.isDark());return!!this.state.visible&&p.a.createElement("div",{className:e,style:{backgroundColor:this.props.bg},role:"alert"},this.props.children)}}]),t}(p.a.Component);t.a=b},628:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(170),s=a(200),i=a(18),o=a(15),l=a(17),p=a.n(l);t.default=function(e){return n.createElement("div",{className:"container text-left"},!0===e.showHead&&n.createElement("h2",{className:"font-weight-bold",dangerouslySetInnerHTML:{__html:p()(Object(o.renderToString)(n.createElement(i.a,{value:e.heading})))}}),n.createElement("div",{className:"row mt-5"},n.createElement("div",{className:"col-md-6"},n.createElement("div",{className:"row"},n.createElement("div",{className:"view col-12 mb-5 p-0"},n.createElement("img",{draggable:"false",className:"img-fluid",src:"https://pharmaziegasse.at"+e.img,alt:"Beautyprogramm starten"}),n.createElement("div",{className:"mask img-mask"})),n.createElement("div",{className:"col-12"},n.createElement(r.a,{param:e.btn})))),n.createElement("div",{className:"col-md-6"},n.createElement("div",{dangerouslySetInnerHTML:{__html:p()(Object(o.renderToString)(n.createElement(i.a,{value:e.paragraph})))}}),null!==e.footer&&n.createElement(s.a,{show:"true",className:"alert-info"},p()(Object(o.renderToString)(n.createElement(i.a,{value:e.footer})))))))}}}]);
//# sourceMappingURL=6.46cfe32a.chunk.js.map