(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{130:function(e,t,n){var o,i;!function(a){if(void 0===(i="function"===typeof(o=a)?o.call(t,n,t,e):o)||(e.exports=i),!0,e.exports=a(),!!0){var r=window.Cookies,c=window.Cookies=a();c.noConflict=function(){return window.Cookies=r,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}return function t(n){function o(t,i,a){var r;if("undefined"!==typeof document){if(arguments.length>1){if("number"===typeof(a=e({path:"/"},o.defaults,a)).expires){var c=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*a.expires),a.expires=c}a.expires=a.expires?a.expires.toUTCString():"";try{r=JSON.stringify(i),/^[\{\[]/.test(r)&&(i=r)}catch(k){}i=n.write?n.write(i,t):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var s="";for(var l in a)a[l]&&(s+="; "+l,!0!==a[l]&&(s+="="+a[l]));return document.cookie=t+"="+i+s}t||(r={});for(var d=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,f=0;f<d.length;f++){var p=d[f].split("="),m=p.slice(1).join("=");this.json||'"'!==m.charAt(0)||(m=m.slice(1,-1));try{var h=p[0].replace(u,decodeURIComponent);if(m=n.read?n.read(m,h):n(m,h)||m.replace(u,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(k){}if(t===h){r=m;break}t||(r[h]=m)}catch(k){}}return r}}return o.set=o,o.get=function(e){return o.call(o,e)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(t,n){o(t,"",e(n,{expires:-1}))},o.withConverter=t,o}(function(){})})},173:function(e,t,n){"use strict";n.r(t);var o=n(11),i=n(12),a=n(14),r=n(13),c=n(30),s=n(15),l=n(0),d=n(130),u=n.n(d),f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(r.a)(t).call(this,e))).state={show:!0},n.handleClick=n.handleClick.bind(Object(c.a)(n)),n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){this.setState(function(e){return{show:!1}}),u.a.set("AcceptCookie","1")}},{key:"getStatus",value:function(){var e=u.a.get("AcceptCookie");return"0"===e||"1"!==e}},{key:"render",value:function(){return!!this.getStatus()&&(!!this.state.show&&l.createElement("div",{className:"modal fade bottom show d-block",id:"cookieModal",tabIndex:"-1",role:"dialog","aria-labelledby":"cookieModalLabel","aria-hidden":"true","area-backdrop":"false"},l.createElement("div",{className:"modal-dialog modal-full-height modal-bottom",role:"document"},l.createElement("div",{className:"modal-content"},l.createElement("div",{className:"modal-body"},l.createElement("p",null,"Wir verwenden Cookies, damit unsere Website optimal funktioniert. Mit der Nutzung dieser Website erkl\xe4ren Sie sich einverstanden, dass PHARMAZIEGASSE\xae Cookies einsetzt. ",l.createElement("a",{href:"/privacy"},"Mehr \xfcber Cookies")),l.createElement("button",{name:"dismiss_cookie",className:"btn btn-outline-elegant btn-rounded waves-effect",onClick:this.handleClick},l.createElement("i",{className:"fas fa-check pr-2"}),"Verstanden"))))))}}]),t}(l.Component);t.default=f}}]);
//# sourceMappingURL=15.d687b2cc.chunk.js.map