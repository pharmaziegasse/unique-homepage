(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{584:function(t,e,n){"use strict";var r=n(68),o=n(30),i=n(585);function c(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function a(t){var e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function u(t,e){var n=function(t){var e;switch(t.arrayFormat){case"index":return function(t,n,r){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return function(t,n,r){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=o({arrayFormat:"none"},e)),r=Object.create(null);return"string"!==typeof t?r:(t=t.trim().replace(/^[?#&]/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),o=e.shift(),c=e.length>0?e.join("="):void 0;c=void 0===c?null:i(c),n(i(o),c,r)}),Object.keys(r).sort().reduce(function(t,e){var n=r[e];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"===typeof e?t(Object.keys(e)).sort(function(t,e){return Number(t)-Number(e)}).map(function(t){return e[t]}):e}(n):t[e]=n,t},Object.create(null))):r}e.extract=a,e.parse=u,e.stringify=function(t,e){!1===(e=o({encode:!0,strict:!0,arrayFormat:"none"},e)).sort&&(e.sort=function(){});var n=function(t){switch(t.arrayFormat){case"index":return function(e,n,r){return null===n?[c(e,t),"[",r,"]"].join(""):[c(e,t),"[",c(r,t),"]=",c(n,t)].join("")};case"bracket":return function(e,n){return null===n?c(e,t):[c(e,t),"[]=",c(n,t)].join("")};default:return function(e,n){return null===n?c(e,t):[c(e,t),"=",c(n,t)].join("")}}}(e);return t?Object.keys(t).sort(e.sort).map(function(r){var o=t[r];if(void 0===o)return"";if(null===o)return c(r,e);if(Array.isArray(o)){var i=[];return o.slice().forEach(function(t){void 0!==t&&i.push(n(r,t,i.length))}),i.join("&")}return c(r,e)+"="+c(o,e)}).filter(function(t){return t.length>0}).join("&"):""},e.parseUrl=function(t,e){return{url:t.split("?")[0]||"",query:u(a(t),e)}}},585:function(t,e,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function i(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],i(n),i(r))}function c(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=i(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=o.exec(t);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(e){var i=c(r[0]);i!==r[0]&&(n[r[0]]=i)}r=o.exec(t)}n["%C2"]="\ufffd";for(var a=Object.keys(n),u=0;u<a.length;u++){var s=a[u];t=t.replace(new RegExp(s,"g"),n[s])}return t}(t)}}},649:function(t,e,n){"use strict";n.r(e);var r=n(9),o=n(10),i=n(13),c=n(11),a=n(12),u=n(0),s=n(584),p=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n},d=function(t){function e(e){var n=t.call(this,e)||this;return n.request=null,n.cancel=function(){n.request&&n.request.cancel()},n.handleFetchSuccess=function(t){n.props.onSuccess&&n.props.onSuccess(t),n.setState({html:t.html},function(){window.instgrm.Embeds.process(),n.props.onAfterRender&&n.props.onAfterRender()})},n.handleFetchFailure=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];clearTimeout(n.timer),n.props.onFailure&&n.props.onFailure(t)},n.createRequestPromise=function(t){var e={};return e.promise=new Promise(function(n,r){var o=fetch(t).then(function(t){return t.json()}).then(function(t){return n(t)}).catch(function(t){return r(t)});return e.cancel=function(){return r(new Error("Cancelled"))},o}),e},n.state={html:null},n}return p(e,t),e.prototype.componentDidMount=function(){var t=this;window.instgrm?this.fetchEmbed(this.getQueryParams(this.props)):(this.props.injectScript&&!document.getElementById("react-instagram-embed-script")&&this.injectScript(),this.checkAPI().then(function(){t.fetchEmbed(t.getQueryParams(t.props))}))},e.prototype.componentDidUpdate=function(t){var e=this.props,n=e.url,r=e.hideCaption,o=e.maxWidth,i=e.containerTagName;t.url===n&&t.hideCaption===r&&t.maxWidth===o&&t.containerTagName===i||(this.request.cancel(),this.fetchEmbed(this.getQueryParams(this.props)))},e.prototype.componentWillUnmount=function(){this.cancel()},e.prototype.render=function(){var t=this.props.containerTagName;return u.createElement(t,l({},this.omitComponentProps(),{dangerouslySetInnerHTML:{__html:this.state.html||""}}))},e.prototype.fetchEmbed=function(t){this.request=this.createRequestPromise("https://api.instagram.com/oembed/?"+t),this.props.onLoading&&this.props.onLoading(),this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure)},e.prototype.omitComponentProps=function(){var t=this.props;t.url,t.hideCaption,t.maxWidth,t.containerTagName,t.onLoading,t.onSuccess,t.onAfterRender,t.onFailure,t.protocol,t.injectScript;return f(t,["url","hideCaption","maxWidth","containerTagName","onLoading","onSuccess","onAfterRender","onFailure","protocol","injectScript"])},e.prototype.injectScript=function(){var t=0===window.location.protocol.indexOf("file")?this.props.protocol:"",e=document.createElement("script");e.async=e.defer=!0,e.src=t+"//platform.instagram.com/en_US/embeds.js",e.id="react-instagram-embed-script";var n=document.body;n&&n.appendChild(e)},e.prototype.checkAPI=function(){var t=this;return new Promise(function(e){!function t(n){n.timer=window.setTimeout(function(){window.instgrm?(clearTimeout(n.timer),e()):t(n)},20)}(t)})},e.prototype.getQueryParams=function(t){var e=t.url,n=t.hideCaption,r=t.maxWidth;return s.stringify({url:e,hidecaption:n,maxwidth:"number"===typeof r&&r>=320?r:void 0,omitscript:!0})},e.defaultProps={hideCaption:!1,containerTagName:"div",protocol:"https:",injectScript:!0},e}(u.PureComponent),m=n(18),h=n(15),y=n(17),g=n.n(y),v=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(i.a)(this,Object(c.a)(e).call(this,t))).captionStatus=function(){return!n.props.captions},n.getDivider=function(t){switch(n.props.urls.length){case 1:return"col-md-12";case 2:return"col-md-6";case 3:return"col-md-4 mt-4";case 4:return t<3?"col-md-4 mt-4":"col-md-12 mt-4";case 5:return t<3?"col-md-4 mt-4":"col-md-6 mt-4";case 6:return"col-md-4 mt-4";default:return"col-md-12"}},n.renderEmbed=function(t,e){return u.createElement("div",{key:e,className:n.getDivider(e)},u.createElement(d,{url:t,maxWidth:320,hideCaption:n.captionStatus(),containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}}))},n.state={},n}return Object(a.a)(e,t),Object(o.a)(e,[{key:"renderContent",value:function(){var t=this;return u.createElement("div",{className:"container instagram"},!0===this.props.showHead&&u.createElement("h2",{className:"font-weight-bold",dangerouslySetInnerHTML:{__html:g()(Object(h.renderToString)(u.createElement(m.a,{value:this.props.title})))}}),u.createElement("div",{className:"row mt-5"},this.props.urls.map(function(e,n){return t.renderEmbed(e.url,n)})))}},{key:"render",value:function(){return this.renderContent()}}]),e}(u.Component);e.default=v}}]);
//# sourceMappingURL=16.323c7cab.chunk.js.map