(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{639:function(e,t,a){"use strict";a.r(t);var r=a(9),n=a(10),c=a(13),s=a(11),i=a(12),l=a(0),m=a(18),o=a(15),d=a(17),p=a.n(d),u=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).getType=function(e){return 1===e?"card premium pb-4":"card pricing-card pb-4"},a.getWidth=function(){switch(a.props.cards.length){case 1:return"col-md-6 m-auto mb-4";case 2:return"col-md-6 mb-4";case 3:default:return"col-md-4 mb-4"}},a.hexToRgb=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},a.isDark=function(e){var t=a.hexToRgb(e).r,r=a.hexToRgb(e).g,n=a.hexToRgb(e).b,c=/rgb\((\d+).*?(\d+).*?(\d+)\)/.exec("rgb("+t+","+r+","+n+")");return(255&c[1])+(255&c[2])+(255&c[3])<640?"pricing-description p-4 text-white":"pricing-description p-4 text-grey"},a.state={},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return l.createElement("div",{className:"container"},!0===this.props.showHead&&l.createElement("h2",{className:"h1-responsive font-weight-bold mb-5",dangerouslySetInnerHTML:{__html:p()(Object(o.renderToString)(l.createElement(m.a,{value:this.props.heading})))}}),l.createElement("div",{className:"row"},this.props.cards.map(function(t,a){var r="#paymentModal"+t.index;return l.createElement("div",{key:a,className:e.getWidth()},l.createElement("div",{className:e.getType(a)},l.createElement("h3",{className:"text-uppercase font-weight-bold my-4"},t.title),l.createElement("div",{className:e.isDark(t.bg),style:{backgroundColor:t.bg}},l.createElement("p",{className:"m-0",dangerouslySetInnerHTML:{__html:p()(Object(o.renderToString)(l.createElement(m.a,{value:t.description})))}})),l.createElement("div",{className:"card-body striped p-0"},l.createElement("div",{className:"py-4"},l.createElement("p",{className:"text-uppercase mb-0 pricetag"},"Preis"),l.createElement("p",{className:"text-muted mb-0"},"\u20ac ",t.price)),l.createElement("hr",{className:"mt-0"}),l.createElement("button",{"data-toggle":"modal","data-target":r,className:"btn btn-rounded btn-pharmaziegasse font-weight-bold"},"Jetzt starten!"))))})))}}]),t}(l.Component);t.default=u}}]);
//# sourceMappingURL=28.8e9f7a58.chunk.js.map