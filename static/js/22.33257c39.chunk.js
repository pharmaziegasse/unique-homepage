(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{190:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",function(){return n})},637:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a.n(n),c=a(40),s=a(190),i=a(9),l=a(10),o=a(13),m=a(11),u=a(39),d=a(12),p=a(28),h=a(0),v=a.n(h),f=a(23),g=a(29),b=a(18),E=a(15),N=a(17),j=a.n(N);function w(){var e=Object(p.a)(["\n    query img(\n            $token: String!\n            $id: Int!\n        ){\n        image(\n            token: $token\n            id: $id\n        ){\n            urlLink\n        }\n    }\n"]);return w=function(){return e},e}var O=Object(g.a)(w()),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).getActiveItem=function(e){return 0===e?"carousel-item active":"carousel-item"},a.onImgFetched=function(e,t){a.setState(Object(s.a)({},t,e))},a.renderImg=function(e,t){return v.a.createElement(f.a,null,function(n){return v.a.createElement("div",{className:"imgcontainer"},v.a.createElement("div",{className:"py-2 img-profile-container",onClick:Object(c.a)(r.a.mark(function a(){var c,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.query({query:O,variables:{id:e,token:this.props.token}});case 2:c=a.sent,void 0!==(s=c.data)&&this.onImgFetched(s.image,t);case 5:case"end":return a.stop()}},a,this)})).bind(Object(u.a)(a))},a.state[t]&&v.a.createElement("img",{width:"160px",height:"160px",className:"img-fluid img-profile",src:"https://pharmaziegasse.at"+a.state[t].urlLink,alt:"Profil"})))})},a.state={},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return v.a.createElement("div",{className:"container"},!0===this.props.showHead&&v.a.createElement("h2",{className:"h1-responsive font-weight-bold mb-5",dangerouslySetInnerHTML:{__html:j()(Object(E.renderToString)(v.a.createElement(b.a,{value:this.props.heading})))}}),v.a.createElement("div",{className:"wrapper-carousel-fix"},v.a.createElement("div",{id:"customer-carousel",className:"carousel no-flex testimonial-carousel slide py-5 dark-grey-text","data-ride":"carousel","data-interval":"20000"},v.a.createElement("div",{className:"carousel-inner",role:"listbox"},this.props.users.map(function(t,a){return v.a.createElement("div",{key:a,className:e.getActiveItem(a)},v.a.createElement("div",{className:"testimonial"},v.a.createElement("div",{className:"avatar mx-auto mb-4"},e.renderImg(t.img,a)),v.a.createElement("p",null,v.a.createElement("span",{dangerouslySetInnerHTML:{__html:j()(Object(E.renderToString)(v.a.createElement(b.a,{value:t.quote})))}})),v.a.createElement("h4",{className:"font-weight-bold"},j()(Object(E.renderToString)(v.a.createElement(b.a,{value:t.name})))),v.a.createElement("h6",{className:"font-weight-bold my-3 text-muted"},j()(Object(E.renderToString)(v.a.createElement(b.a,{value:t.info}))))))})),v.a.createElement("a",{className:"carousel-control-prev left carousel-control",href:"#customer-carousel",role:"button","data-slide":"prev"},v.a.createElement("span",{className:"icon-prev","aria-hidden":"true"}),v.a.createElement("span",{className:"sr-only"},"Previous")),v.a.createElement("a",{className:"carousel-control-next right carousel-control",href:"#customer-carousel",role:"button","data-slide":"next"},v.a.createElement("span",{className:"icon-next","aria-hidden":"true"}),v.a.createElement("span",{className:"sr-only"},"Next")))))}}]),t}(h.Component);t.default=k}}]);
//# sourceMappingURL=22.33257c39.chunk.js.map