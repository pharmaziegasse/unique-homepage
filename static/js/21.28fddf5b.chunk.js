(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{355:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return a})},738:function(e,t,n){"use strict";n.r(t);var a=n(69),r=n.n(a),c=n(88),i=n(355),s=n(23),l=n(24),o=n(27),m=n(25),u=n(87),d=n(26),p=n(58),f=n(0),g=n(48),b=n(59),h=n(38),v=n(30),E=n(37),j=n.n(E);function O(){var e=Object(p.a)(["\n    query img(\n            $token: String!\n            $id: Int!\n        ){\n        image(\n            token: $token\n            id: $id\n        ){\n            urlLink\n        }\n    }\n"]);return O=function(){return e},e}var k=Object(b.a)(O()),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).onImgFetched=function(e,t){n.setState(Object(i.a)({},t,e))},n.renderImg=function(e,t){return f.createElement(g.a,null,function(a){return f.createElement("div",{className:"imgcontainer"},f.createElement("div",{className:"img-profile-container",onClick:Object(c.a)(r.a.mark(function n(){var c,i;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.query({query:k,variables:{id:e,token:this.props.token}});case 2:c=n.sent,void 0!==(i=c.data)&&this.onImgFetched(i.image,t);case 5:case"end":return n.stop()}},n,this)})).bind(Object(u.a)(n))},n.state[t]&&f.createElement("img",{className:"img-fluid",src:"https://pharmaziegasse.at"+n.state[t].urlLink,alt:"step "+(t+1)})))})},n.state={},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return f.createElement("div",{className:"container text-left"},""!==this.props.title&&f.createElement("h2",{className:"font-weight-bold",dangerouslySetInnerHTML:{__html:j()(Object(v.renderToString)(f.createElement(h.a,{value:this.props.title})))}}),f.createElement("div",{className:"row my-5"},f.createElement("div",{className:"col-md-6"},f.createElement("div",{dangerouslySetInnerHTML:{__html:j()(Object(v.renderToString)(f.createElement(h.a,{value:this.props.paragraph})))}})),f.createElement("div",{className:"col-md-6 text-center"},f.createElement("div",{className:"row"},f.createElement("div",{className:"col-12 mb-5"},f.createElement("img",{draggable:"false",className:"img-fluid",src:"https://pharmaziegasse.at"+this.props.img,alt:"Stefan"}))))))}}]),t}(f.Component);t.default=w}}]);
//# sourceMappingURL=21.28fddf5b.chunk.js.map