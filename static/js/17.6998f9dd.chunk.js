(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{362:function(e,t,a){"use strict";var n=a(23),r=a(24),s=a(27),i=a(25),l=a(26),o=a(0),c=a.n(o),m=a(326),u=a.n(m),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).hexToRgb=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},a.isDark=function(){if(null===a.props.bg||void 0===a.props.bg)return null;var e=a.hexToRgb(a.props.bg).r,t=a.hexToRgb(a.props.bg).g,n=a.hexToRgb(a.props.bg).b,r=/rgb\((\d+).*?(\d+).*?(\d+)\)/.exec("rgb("+e+","+t+","+n+")");return(255&r[1])+(255&r[2])+(255&r[3])<640?"text-white":"text-grey"},a.state={visible:e.show},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u()("alert",this.props.className,this.isDark());return!!this.state.visible&&c.a.createElement("div",{className:e,style:{backgroundColor:this.props.bg},role:"alert"},this.props.children)}}]),t}(c.a.Component);t.a=h},741:function(e,t,a){"use strict";a.r(t);var n=a(355),r=a(69),s=a.n(r),i=a(88),l=a(23),o=a(24),c=a(27),m=a(25),u=a(26),h=a(58),d=a(0),p=a.n(d),b=a(717),v=a(473),f=a(48),g=a(59),E=a(474),S=a.n(E),N=a(719),k=a(326),y=a.n(k),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).rand=Math.floor(1e3*Math.random()+1),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onFieldChange",value:function(e){var t=e.target.name,a=e.target.checked;this.props.onChange(t,a)}},{key:"render",value:function(){var e=y()("form-check",this.props.className);return p.a.createElement("div",{className:e},p.a.createElement("input",{type:"checkbox",name:this.props.name,className:"form-check-input",id:this.props.name+"-"+this.rand,checked:this.props.checked,onChange:this.onFieldChange.bind(this)}),p.a.createElement("label",{className:"form-check-label text-left",htmlFor:this.props.name+"-"+this.rand},this.props.children))}}]),t}(p.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onFieldChange",value:function(e){var t=e.target.name,a=e.target.value;this.props.onChange(t,a)}},{key:"validate",value:function(){return this.props.validation?"valid":!1===this.props.validation?"invalid":void 0}},{key:"render",value:function(){var e=y()("form-control",this.props.className,this.validate());return p.a.createElement("input",{className:e,type:this.props.type,value:this.props.value,name:this.props.name,placeholder:this.props.placeholder,onChange:this.onFieldChange.bind(this)})}}]),t}(p.a.Component),C={DEFAULT:"",R:"btn-rounded"},T={DANGER:"btn-danger",SUCCESS:"btn-success",WARNING:"btn-warning",INFO:"btn-info",PRIMARY:"btn-primary",SECONDARY:"btn-secondary",WHITE:"btn-white",ELEGANT:"btn-elegant",oDANGER:"btn-outline-danger",oSUCCESS:"btn-outline-success",oWARNING:"btn-outline-warning",oINFO:"btn-outline-info",oPRIMARY:"btn-outline-primary",oSECONDARY:"btn-outline-secondary",oWHITE:"btn-outline-white",oELEGANT:"btn-outline-elegant"},j={SM:"btn-sm",MD:"btn-md",LG:"btn-lg",DEFAULT:""},x=y.a.bind(j),I=y.a.bind(T),_=y.a.bind(C),A=function(e){var t=e.btnstyle,a=e.btntype,n=e.size,r=e.href,s=e.children,i=e.className,l=e.disabled,o=e.onClick,c=y()("btn",I(t),_(a),x(n),{disabled:l},i);return d.createElement("a",{href:r,className:c,onClick:o},s)};A.defaultProps={size:j.DEFAULT,btnstyle:T.oWHITE,btntype:C.R,className:"",disabled:!1};var F=A,D=a(718),R=Object(D.a)(d,{useCssModules:!1}),M=a(362),H=a(38),L=a(30),B=a(37),P=a.n(B);function z(){var e=Object(h.a)(["\n    query modal(\n        $token: String!\n    ){\n        pages(\n            token: $token\n        ){\n            ... on RegistrationFormPage{\n            registrationHead\n            registrationInfoText\n            registrationNewsletterText\n            registrationPrivacyText\n            registrationStepText\n            thankYouText\n            registrationButton{\n                buttonTitle\n                buttonPage{\n                    id\n                    urlPath\n                }\n            }\n            }\n        }\n    }\n"]);return z=function(){return e},e}function G(){var e=Object(h.a)(['\n    mutation register($token: String!, $values: GenericScalar!) {\n        registrationFormPage(token: $token, url: "/registration", values: $values) {\n            result\n            errors {\n            name\n            errors\n            }\n        }\n    }\n']);return G=function(){return e},e}var $=Object(g.a)(G()),W=Object(g.a)(z()),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).responseFacebook=function(e){void 0!==e.first_name&&null!==e.first_name&&a.setState({prenamelive:e.first_name}),void 0!==e.last_name&&null!==e.last_name&&a.setState({surnamelive:e.last_name}),void 0!==e.email&&null!==e.email&&a.setState({emaillive:e.email}),void 0!==e.picture&&null!==e.picture&&a.setState({picture:e.picture.data.url}),void 0!==e.accessToken&&null!==e.accessToken&&a.setState({verified:!0}),a.validateInput(),a.oAuthSuccess()},a.oAuthSuccess=function(){a.setState({oAuthed:!0}),a.setState({formHidden:!0})},a.sendData=Object(i.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.setItem("f_n",a.state.prename),localStorage.setItem("f_l",a.state.surname),localStorage.setItem("f_e",a.state.email),localStorage.setItem("f_p",a.state.phone),null===(t={title:"",first_name:a.state.prename,last_name:a.state.surname,email:a.state.email,telephone:a.state.phone,address:"",postal_code:"",city:"",country:"",verified:a.state.verified,newsletter:a.state.newsletter})&&void 0===t){e.next=10;break}return e.next=8,a.props.register({variables:{token:a.props.token,values:t}}).then(function(e){"OK"===e.data.registrationFormPage.result?(a.setState({showError:!1}),a.setState({showSuccess:!0})):(a.setState({buffer:"Ihre Eingaben entspricht nicht den Vorraussetzungen. Bitte \xfcberpr\xfcfen Sie Ihre Eingaben."}),a.setState({showError:!0}),a.setState({showSuccess:!1}))}).catch(function(e){a.setState({buffer:"Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es etwas sp\xe4ter erneut."}),a.setState({showError:!0}),a.setState({showSuccess:!1}),console.error("Mutation error:"),console.log(e)});case 8:e.next=13;break;case 10:a.setState({buffer:"Ihre Eingaben entspricht nicht den Vorraussetzungen. Bitte \xfcberpr\xfcfen Sie Ihre Eingaben."}),a.setState({showError:!0}),a.setState({showSuccess:!1});case 13:case"end":return e.stop()}},e)})),a.validateInput=function(){a.checkTel(a.state.phonelive),a.checkEmail(a.state.emaillive),a.checkName("surname",a.state.surnamelive),a.checkName("prename",a.state.prenamelive)},a.handleSubmitForm=function(e){e.preventDefault();var t=[],n=[];if(void 0===a.state.phone?(n.push("Bitte geben Sie eine Telefonnummer ein."),t.push(1)):!1===a.state.phone&&(n.push("Bitte geben Sie Ihre Vorwahl Ihres Landes an. (z.B. +43)"),t.push(2)),!1===a.state.email&&(n.push("Die eingegebene E-Mail Adresse ist ung\xfcltig."),t.push(3)),void 0!==a.state.prename&&void 0!==a.state.surname||(n.push("Bitte geben Sie Ihren Namen ein."),t.push(4)),!1!==a.state.prename&&!1!==a.state.surname||(n.push("Ihr Name darf keine Sonderzeichen enthalten."),t.push(5)),!1===a.state.gdpr&&(n.push("Bitte beachten Sie die Datenschutzerkl\xe4rung."),t.push(6)),void 0!==t&&t.length>0)a.setState({buffer:n}),a.setState({showError:!0}),a.setState({showSuccess:!1});else{var r={name:a.state.prename+" "+a.state.surname,email:a.state.email,phone:a.state.phone};a.props.pixel.track("CompleteRegistration",r),a.sendData()}},a.handleChange=function(e,t){switch(e){case"phone":a.setState({phonelive:t},a.checkTel(t));break;case"email":a.setState({emaillive:t},a.checkEmail(t));break;case"prename":a.setState({prenamelive:t},a.checkName("prename",t));break;case"surname":a.setState({surnamelive:t},a.checkName("surname",t));break;case"newsletter":a.setState({newsletter:t});break;case"gdpr":a.setState({gdpr:t});break;default:a.setState(Object(n.a)({},e,t))}},a.checkTel=function(e){if(""!==e){var t=Object(b.a)(e);void 0!==t?(t.formatInternational(),void 0!==t.country?(a.setState({phone:t.number}),a.setState({country:t.country.toLowerCase()})):(a.setState({country:!1}),a.setState({phone:!1}))):(a.setState({country:!1}),a.setState({phone:!1}))}else a.setState({country:!1}),a.setState({phone:void 0})},a.checkEmail=function(e){""!==e?v.validate(e)?a.setState({email:e}):a.setState({email:!1}):a.setState({email:void 0})},a.checkName=function(e,t){!1===/[ !@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(t)?""!==t?a.setState(Object(n.a)({},e,t)):a.setState(Object(n.a)({},e,void 0)):a.setState(Object(n.a)({},e,!1))},a.printFlag=function(){if(!1!==a.state.country)return d.createElement(R,{code:a.state.country})},a.printErrorDialogs=function(){if(Array.isArray(a.state.buffer)){var e=[],t=a.state.buffer;return Object.keys(t).forEach(function(a,n){e.push(d.createElement("p",{key:n},t[n]))}),e}return d.createElement("p",null,a.state.buffer)},a.printError=function(){return!!a.state.showError&&(null!==a.state.buffer||void 0!==a.state.buffer?d.createElement(M.a,{className:"alert-danger",show:"true"},a.printErrorDialogs()):d.createElement(M.a,{className:"alert-danger",show:"true"},"Unknown error."))},a.editForm=function(){a.setState({formHidden:!1})},a.state={phone:void 0,email:void 0,prename:void 0,surname:void 0,country:!1,picture:void 0,gdpr:!1,newsletter:!1,showError:!1,verified:!1,showSuccess:!1,oAuthed:!1,formHidden:!1,phonelive:"",emaillive:"",prenamelive:"",surnamelive:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"renderContent",value:function(){var e=this;if(void 0!==this.props.data.pages[1]){var t=this.props.data.pages[1];return d.createElement("div",{className:"modal fade",id:"registration",tabIndex:"-1",role:"dialog","aria-labelledby":"Registrieren","aria-hidden":"true","data-backdrop":"true"},d.createElement("div",{className:"modal-dialog modal-lg modal-notify modal-info",role:"document"},d.createElement("div",{className:"modal-content"},d.createElement("div",{className:"modal-body"},d.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},d.createElement("span",{"aria-hidden":"true",className:"dark-text"},"\xd7")),d.createElement("div",{className:"lead font-weight-bold text-center",dangerouslySetInnerHTML:{__html:P()(Object(L.renderToString)(d.createElement(H.a,{value:t.registrationHead})))}}),d.createElement("hr",null),this.state.showSuccess?d.createElement("div",{className:"success"},d.createElement(M.a,{className:"alert-success",show:"true"},d.createElement("div",{dangerouslySetInnerHTML:{__html:P()(Object(L.renderToString)(d.createElement(H.a,{value:t.thankYouText})))}}))):d.createElement("div",{className:"register-form"},d.createElement("div",{className:"row"},d.createElement("div",{className:"col-md-7"},this.state.oAuthed?d.createElement("div",{className:"alert alert-success mb-4"},d.createElement("h4",{className:"font-weight-bold"},"Hallo ",this.state.prename,"!"),d.createElement("p",null,"Wir ben\xf6tigen jetzt nur noch Deine Telefonnummer.")):d.createElement("div",null,d.createElement("div",{className:"oAuth"},d.createElement(S.a,{appId:"438514240304319",autoLoad:!1,icon:d.createElement(N.a,null),cssClass:"btn-facebook kep-login-facebook kep-login-facebook-medium",fields:"first_name,last_name,email,picture",textButton:"Weiter mit Facebook",callback:this.responseFacebook})),d.createElement("div",{className:"w-100"},d.createElement("div",{className:"splitter my-4"},d.createElement("span",{className:"or"},d.createElement("span",{className:"or-text"},"oder"))))),this.printError(),d.createElement("form",{id:"form-reg",onSubmit:function(t){e.handleSubmitForm(t),t.preventDefault()}},d.createElement("div",{className:"input-grp"},this.printFlag(),d.createElement("i",{className:"fas fa-phone"}),d.createElement(O,{className:"my-3",type:"text",name:"phone",placeholder:"Telefonnummer",value:this.state.phonelive,validation:this.state.valid1,onChange:this.handleChange.bind(this)})),this.state.formHidden?d.createElement("div",{className:"alert alert-info register-info alert-data"},d.createElement("p",{className:"m-0"},d.createElement("span",{className:"font-weight-bold"},"Meine Daten"),d.createElement("br",null),"Name: ",this.state.prename," ",this.state.surname,d.createElement("br",null),"E-Mail: ",this.state.email,d.createElement("br",null),d.createElement(F,{btnstyle:"oELEGANT",size:"SM",onClick:this.editForm},"\xc4ndern"))):d.createElement("div",null,d.createElement("div",{className:"input-grp"},d.createElement("i",{className:"far fa-envelope"}),d.createElement(O,{className:"my-3",type:"email",name:"email",placeholder:"E-Mail Adresse (optional)",value:this.state.emaillive,validation:this.state.valid2,onChange:this.handleChange.bind(this)})),d.createElement("div",{className:"input-grp"},d.createElement("i",{className:"far fa-user-circle"}),d.createElement(O,{className:"my-3",type:"text",name:"prename",placeholder:"Vorname",value:this.state.prenamelive,validation:this.state.valid3,onChange:this.handleChange.bind(this)})),d.createElement("div",{className:"input-grp"},d.createElement("i",{className:"far fa-user-circle"}),d.createElement(O,{className:"my-3",type:"text",name:"surname",placeholder:"Nachname",value:this.state.surnamelive,validation:this.state.valid4,onChange:this.handleChange.bind(this)}))),d.createElement("div",{className:"text-left mb-3"},d.createElement(w,{name:"newsletter",className:"my-4",onChange:this.handleChange.bind(this)},d.createElement("div",{dangerouslySetInnerHTML:{__html:P()(Object(L.renderToString)(d.createElement(H.a,{value:t.registrationNewsletterText})))}})),d.createElement(w,{name:"gdpr",validation:this.state.valid6,onChange:this.handleChange.bind(this)},d.createElement("div",{dangerouslySetInnerHTML:{__html:P()(Object(L.renderToString)(d.createElement(H.a,{value:t.registrationPrivacyText})))}}))),null!==t.registrationButton.buttonPage&&d.createElement("input",{className:"btn btn-outline-elegant font-weight-bold",type:"submit",value:t.registrationButton.buttonTitle}))),d.createElement("div",{className:"col-md-5 text-left"},d.createElement(M.a,{className:"alert-info register-info",show:"true"},d.createElement("i",{className:"far fa-lightbulb fa-2x"}),d.createElement("div",{className:"mt-2 dark-grey-text",dangerouslySetInnerHTML:{__html:P()(Object(L.renderToString)(d.createElement(H.a,{value:t.registrationInfoText})))}})))))))))}return!1}},{key:"render",value:function(){return void 0!==this.props.data.pages&&this.renderContent()}}]),t}(d.Component);t.default=Object(f.d)(Object(f.e)($,{name:"register"}),Object(f.e)(W,{options:function(e){return{variables:{token:e.token}}}}))(U)}}]);
//# sourceMappingURL=17.6998f9dd.chunk.js.map